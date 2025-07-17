import { createAsyncThunk } from '@reduxjs/toolkit';

interface LoginCredentials {
    email: string;
    password: string;
}

interface LoginResponse {
    AccessToken: string;
    RefreshToken: string;
    user_id: string;
    role: string;
    organisation_id: string[];
    expiresIn: number;
    createdAt: string;
}

const api = {
    login: async (credentials: LoginCredentials): Promise<LoginResponse> => {
        const response = await fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify({
                loginEmail: credentials.email,
                loginPass: credentials.password
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Login failed');
        }

        const data = await response.json();
        return data;
    }
};

export const loginUser = createAsyncThunk(
    'auth/login',
    async (credentials: LoginCredentials, { rejectWithValue }) => {
        try {
            const response = await api.login(credentials);
            return response;
        } catch (error) {
            return rejectWithValue(error instanceof Error ? error.message : 'Login failed');
        }
    }
);

export const logoutUser = createAsyncThunk(
    'auth/logout',
    async (_, { dispatch }) => {
        const { clearUser } = await import('./slices/userSlice');
        const { clearAuthTokens } = await import('./slices/tokenSlice');
        dispatch(clearUser());
        dispatch(clearAuthTokens());
    }
);