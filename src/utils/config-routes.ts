export interface Route {
    login: string;
    logout: string;
    test: string;
    user: {
        profile: string;
        settings: string;
    };
    students: {
        getAll: string;
    };
}

const configRoutes: Route = {
    login: import.meta.env.VITE_API_ROUTE_LOGIN || 'auth/login',
    logout: import.meta.env.VITE_API_ROUTE_LOGOUT || 'auth/logout',
    test: '/test',
    user: {
        profile: '/user/profile',
        settings: '/user/settings'
    },
    students: {
        getAll: '/students',
    },
};

export default configRoutes;