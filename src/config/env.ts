export const env = {
    apiBaseUrl: import.meta.env.VITE_API_BASE_URL,
    jwtAccessSecret: import.meta.env.VITE_JWT_ACCESS_SECRET,
    jwtRefreshSecret: import.meta.env.VITE_JWT_REFRESH_SECRET,
    accessTokenExp: import.meta.env.VITE_ACCESS_TOKEN_EXP,
    appUrl: import.meta.env.VITE_APP_URL,
    sensediaAuthUrl: import.meta.env.VITE_SENSEDIA_AUTH_URL,
    sensediaClientId: import.meta.env.VITE_SENSEDIA_CLIENT_ID,
    sensediaClientSecret: import.meta.env.VITE_SENSEDIA_CLIENT_SECRET,
    useGateway: import.meta.env.VITE_USE_GATEWAY,
    userNameMock: import.meta.env.VITE_USER_NAME_MOCK,
    userPasswordMock: import.meta.env.VITE_USER_PASSWORD_MOCK,
}