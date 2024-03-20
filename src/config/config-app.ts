import configRoutes, {Route} from "@/config/config-routes.ts";

interface ConfigApp {
    api: {
        baseUrl: string;
        timeout: number;
        routes: Route;
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
const config: ConfigApp = {
    api: {
        baseUrl: import.meta.env.VITE_API_BASE_URL || 'https://api.example.com/api/v1',
        timeout: Number(import.meta.env.VITE_API_TIMEOUT) || 3000,
        routes: configRoutes
    },
    app: {
        name: import.meta.env.VITE_APP_TITLE|| 'My App',
        version: import.meta.env.VITE_APP_VERSION || '1.0.0',
        apiKeys: {
            google: import.meta.env.VITE_GOOGLE_API_KEY || 'xxx',
            facebook: import.meta.env.VITE_FACEBOOK_API_KEY || 'xxx'
        }
    }
};
export default config;