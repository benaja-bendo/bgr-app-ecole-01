/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string
    readonly VITE_API_BASE_URL: string
    readonly VITE_API_TIMEOUT: number
    readonly VITE_APP_VERSION: string
    readonly VITE_FACEBOOK_API_KEY: string
    readonly VITE_GOOGLE_API_KEY: string

    // routes api...
    readonly VITE_API_ROUTE_LOGIN: string
    readonly VITE_API_ROUTE_LOGOUT: string

    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}