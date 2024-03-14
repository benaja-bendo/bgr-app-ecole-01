export interface Route {
    login: string;
    logout: string;
    test: string;
    user: {
        profile: string;
        settings: string;
    };
    students: {
        getAll: (search?: string) => string;
        get: (id: number) => string;
        update: (id: number) => string;
        updateImage: (id: number) => string;
        create: string;
        delete: (id: number) => string;
        deletes: string;
        exportStudent: string;
        exportTemplate: string;
        importStudent: string;
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
        getAll: (search?: string) => `/students?search=${search}`,
        get: (id: number) => `/students/${id}`,
        update: (id: number) => `/students/${id}`,
        updateImage: (id: number) => `/students/${id}/upload-image`,
        create: '/students',
        delete: (id: number) => `/students/${id}`,
        deletes: '/students/deletes',
        exportStudent: '/students/export',
        exportTemplate: '/students/export-template',
        importStudent: '/students/import',
    },
};

export default configRoutes;