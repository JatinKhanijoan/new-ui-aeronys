import FingerprintJS from '@fingerprintjs/fingerprintjs'

let visitorId: string | null = null
let visitorIdPromise: Promise<string> | null = null

export const getVisitorId = async (): Promise<string> => {
    if (visitorId) return visitorId

    // If already generating, return the same promise
    if (visitorIdPromise) return visitorIdPromise

    visitorIdPromise = (async () => {
        try {
            const fp = await FingerprintJS.load()
            const result = await fp.get()
            visitorId = result.visitorId
            return visitorId
        } catch (error) {
            console.error('Error generating fingerprint:', error)
            return 'unknown-visitor'
        } finally {
            // Clear the promise so future calls can retry if needed
            visitorIdPromise = null
        }
    })()

    return visitorIdPromise
}