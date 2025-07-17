import { redirect } from "react-router";

export async function setAuthCookies(tokens: {
    accessToken: string;
    refreshToken: string;
    userId: string;
    organisations: string[];
}) {
    // Set HTTP-only cookies on the server
    const headers = new Headers();

    headers.append('Set-Cookie', `accessToken=${tokens.accessToken}; HttpOnly; Secure; SameSite=Strict; Max-Age=86400; Path=/`);
    headers.append('Set-Cookie', `refreshToken=${tokens.refreshToken}; HttpOnly; Secure; SameSite=Strict; Max-Age=604800; Path=/`);
    headers.append('Set-Cookie', `userId=${tokens.userId}; HttpOnly; Secure; SameSite=Strict; Max-Age=86400; Path=/`);
    headers.append('Set-Cookie', `organisations=${JSON.stringify(tokens.organisations)}; HttpOnly; Secure; SameSite=Strict; Max-Age=86400; Path=/`);

    return headers;
}

export function getAuthFromCookies(request: Request) {
    const cookies = request.headers.get('Cookie');
    if (!cookies) return null;

    const cookieObj = Object.fromEntries(
        cookies.split('; ').map(c => c.split('='))
    );

    return {
        accessToken: cookieObj.accessToken,
        refreshToken: cookieObj.refreshToken,
        userId: cookieObj.userId,
        organisations: cookieObj.organisations ? JSON.parse(cookieObj.organisations) : []
    };
}

export function clearAuthCookies() {
    const headers = new Headers();
    headers.append('Set-Cookie', 'accessToken=; HttpOnly; Secure; SameSite=Strict; Max-Age=0; Path=/');
    headers.append('Set-Cookie', 'refreshToken=; HttpOnly; Secure; SameSite=Strict; Max-Age=0; Path=/');
    headers.append('Set-Cookie', 'userId=; HttpOnly; Secure; SameSite=Strict; Max-Age=0; Path=/');
    headers.append('Set-Cookie', 'organisations=; HttpOnly; Secure; SameSite=Strict; Max-Age=0; Path=/');
    return headers;
}