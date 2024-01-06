import HttpService from '@/services/HttpService.ts';
import {Tuser} from "@/types/Tuser.ts";
import config from "@/utils/config.ts";
import {R_loginAction} from "@/types/TRequests.ts";

interface AuthServiceProps {
    isAuthenticated: boolean;
    user: object | Tuser;
    signin(username: string, password: string): Promise<void>;
    signout(): Promise<void>;
}

class AuthService implements AuthServiceProps {
    get isAuthenticated() {
        return localStorage.getItem('token') !== null;
    }
    get user() {
        const user = localStorage.getItem('user');
        if (user) {
            return JSON.parse(user);
        }
        return null;
    }

    async signin(username: string, password: string) {
        try {
            const response = await HttpService.post<R_loginAction>(config.api.routes.login, { username, password });
            if (response.status === 200) {
                const { token, user,tenant_id } = response.data;
                localStorage.setItem('token', token);
                localStorage.setItem('user', JSON.stringify(user));
                localStorage.setItem('tenant_id', tenant_id || '');
            } else {
                console.error('Authentication failed');
            }
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async signout() {
        try {
            const response = await HttpService.post(config.api.routes.logout);
            if (response.status === 200) {
                localStorage.removeItem('token');
                localStorage.removeItem('user');
                localStorage.removeItem('tenant_id');
            } else {
                console.error('Sign out failed');
            }
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}

export default new AuthService();