import axios, { AxiosError, type InternalAxiosRequestConfig } from 'axios';
import { getVisitorId } from '~/provider/fingerprint';
import { store } from '~/store';
import { clearAuthTokens, setAuthTokens } from '~/store/slices/tokenSlice';
import { clearUser } from '~/store/slices/userSlice';
declare module 'axios' {
    export interface InternalAxiosRequestConfig {
        _retry?: boolean;
        _startTime?: number;
    }
}

// Track refresh token state
let isRefreshing = false
let failedQueue: Array<{
    resolve: (value?: unknown) => void
    reject: (reason?: unknown) => void
}> = []

const processQueue = (error: Error | null = null) => {
    failedQueue.forEach(promise => {
        if (error) {
            promise.reject(error)
        } else {
            promise.resolve()
        }
    })
    failedQueue = []
}

const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    }
})

// Initialize session ID once
const getOrCreateSessionId = (): string => {
    let sessionId = sessionStorage.getItem('sessionId')
    if (!sessionId) {
        sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
        sessionStorage.setItem('sessionId', sessionId)
    }
    return sessionId
}

// Function to get user tracking data
const getUserTrackingData = () => {
    const state = store.getState()
    let userEmail = state.user?.email || 'unknown'
    let userId = state.token?.userId || 'anonymous'
    return { userId, userEmail }
}

// Function to console log tracking data for POST, PUT, DELETE requests
const logTrackingData = (config: InternalAxiosRequestConfig, visitorId: string, userId: string, userEmail: string) => {
    const method = config.method?.toUpperCase()

    // Only log POST, PUT, DELETE requests
    if (!method || !['POST', 'PUT', 'DELETE'].includes(method)) {
        return
    }

    const trackingData = {
        action: `${method} ${config.url}`,
        user: `${userEmail} (${userId})`,
        visitor: visitorId,
        timestamp: new Date().toISOString(),
        sessionId: getOrCreateSessionId(),
        payloadSize: config.data ? JSON.stringify(config.data).length : 0,
        params: config.params || {},
        userAgent: navigator.userAgent,
        referrer: document.referrer || 'direct'
    }

    console.log('🔍 API Call Tracking Data:', trackingData)
}

// Request interceptor
api.interceptors.request.use(
    async (config: InternalAxiosRequestConfig) => {
        // Add start time for duration calculation
        config._startTime = Date.now()

        // Get tokens from store
        const state = store.getState()
        const accessToken = state.token?.accessToken
        const organisation_id = state.token?.currentOrganisation

        // Set authorization header 
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`
        }

        // Set organisation header
        if (organisation_id) {
            config.headers.orgid = organisation_id
        }

        // Get fingerprint and user tracking data
        try {
            const visitorId = await getVisitorId()
            const { userId, userEmail } = getUserTrackingData()
            const sessionId = getOrCreateSessionId()

            // Add tracking headers
            config.headers['X-Visitor-ID'] = visitorId
            config.headers['X-User-ID'] = userId
            config.headers['X-User-Email'] = userEmail
            config.headers['X-Session-ID'] = sessionId
            config.headers['X-Timestamp'] = new Date().toISOString()
            config.headers['X-User-Agent'] = navigator.userAgent
            config.headers['X-Referrer'] = document.referrer || 'direct'

            // Add payload size for POST, PUT, DELETE requests
            const method = config.method?.toUpperCase()
            if (method && ['POST', 'PUT', 'DELETE'].includes(method)) {
                config.headers['X-Payload-Size'] = config.data ? JSON.stringify(config.data).length.toString() : '0'

                // Add params as header if they exist
                if (config.params && Object.keys(config.params).length > 0) {
                    config.headers['X-Request-Params'] = JSON.stringify(config.params)
                }
            }

            // Console log tracking data for monitored requests
            logTrackingData(config, visitorId, userId, userEmail)

        } catch (error) {
            console.error('Error adding tracking headers:', error)
            // Don't fail the request if tracking fails
        }

        return config
    },
    (error: AxiosError) => {
        return Promise.reject(error)
    }
)

// Response interceptor
api.interceptors.response.use(
    async (response) => {
        // Log response data for POST, PUT, DELETE requests
        const method = response.config.method?.toUpperCase()
        if (method && ['POST', 'PUT', 'DELETE'].includes(method)) {
            const duration = response.config._startTime ? Date.now() - response.config._startTime : 0

            console.log('API Response Logged:', {
                action: `${method} ${response.config.url}`,
                status: response.status,
                duration: `${duration}ms`,
                timestamp: new Date().toISOString(),
                responseSize: JSON.stringify(response.data).length
            })
        }

        return response
    },
    async (error: AxiosError) => {
        const originalRequest = error.config

        // Log error response for POST, PUT, DELETE requests
        if (originalRequest) {
            const method = originalRequest.method?.toUpperCase()
            if (method && ['POST', 'PUT', 'DELETE'].includes(method)) {
                const duration = originalRequest._startTime ? Date.now() - originalRequest._startTime : 0

                console.log('Error Logged:', {
                    action: `${method} ${originalRequest.url}`,
                    status: error.response?.status || 'Network Error',
                    duration: `${duration}ms`,
                    timestamp: new Date().toISOString(),
                    errorMessage: error.message
                })
            }
        }

        if (!originalRequest) {
            return Promise.reject(error)
        }

        // Handle 401 Unauthorized error (expired access token)
        if (error.response?.status === 401 && !originalRequest._retry) {
            if (isRefreshing) {
                // Queue the request if token refresh is in progress
                return new Promise((resolve, reject) => {
                    failedQueue.push({ resolve, reject })
                })
                    .then(() => {
                        return api(originalRequest)
                    })
                    .catch(err => {
                        return Promise.reject(err)
                    })
            }

            originalRequest._retry = true
            isRefreshing = true

            const state = store.getState()
            const refreshToken = state.token?.refreshToken

            if (!refreshToken) {
                handleLogout()
                return Promise.reject(new Error('No refresh token available'))
            }

            try {
                // Attempt to refresh the token
                const response = await axios.post(
                    `${import.meta.env.VITE_BASE_URL}/auth/refresh`,
                    { refreshToken }
                )

                const { AccessToken: newAccessToken } = response.data

                // Update store with new access token while preserving other token state
                store.dispatch(setAuthTokens({
                    ...state.token,
                    accessToken: newAccessToken
                }))

                // Update authorization header
                originalRequest.headers.Authorization = `Bearer ${newAccessToken}`

                // Process queued requests
                processQueue()
                return api(originalRequest)
            } catch (refreshError) {
                processQueue(refreshError as Error)
                handleLogout()
                return Promise.reject(refreshError)
            } finally {
                isRefreshing = false
            }
        }

        // Handle other error status codes
        if (error.response) {
            switch (error.response.status) {
                case 403:
                    console.error('Forbidden access')
                    break
                case 404:
                    console.error('Resource not found')
                    break
                default:
                    console.error('An error occurred:', error.response.data)
            }
        }

        return Promise.reject(error)
    }
)

const handleLogout = () => {
    store.dispatch(clearAuthTokens())
    store.dispatch(clearUser())
    window.location.href = '/auth'
}

export const handleApiError = (error: unknown) => {
    if (axios.isAxiosError(error)) {
        // Log the full error details for debugging
        console.error('Axios error:', {
            status: error.response?.status,
            data: error.response?.data,
            message: error.message
        })
    } else {
        console.error('Fetch error:', error)
    }
}

export default api