
interface Config {
    api: {
        baseUrl: string;
        timeout: number;
        routes: {
            login: string;
            logout: string;
        }
    };
    app: {
        name: string;
        version: string;
        apiKeys: {
            google: string;
            facebook: string;
        };
    };
}

const config: Config = {
    api: {
        baseUrl: import.meta.env.VITE_API_BASE_URL || 'https://api.example.com',
        timeout: Number(import.meta.env.VITE_API_TIMEOUT) || 3000,
        routes: {
            login: import.meta.env.VITE_API_ROUTE_LOGIN || '/login',
            logout: import.meta.env.VITE_API_ROUTE_LOGOUT || '/logout'
        }
    },
    app: {
        name: import.meta.env.VITE_APP_TITLE|| 'My App',
        version: import.meta.env.VITE_APP_VERSION || '1.0.0',
        apiKeys: {
            google: import.meta.env.VITE_GOOGLE_API_KEY || 'xxx',
            facebook: import.meta.env.VITE_FACEBOOK_API_KEY || 'xxx'
        }
    }
}

export default config;