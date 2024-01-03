import HttpService from '@/services/HttpService.ts';
import {Tuser} from "@/types/Tuser.ts";
import config from "@/utils/config.ts";

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
            const response = await HttpService.post<{ token: string, user: Tuser }>(config.api.routes.login, { username, password });
            if (response.status === 200) {
                const { token, user } = response.data;
                localStorage.setItem('token', token);
                localStorage.setItem('user', JSON.stringify(user));
            } else {
                throw new Error('Authentication failed');
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
                console.log('data',response.data)
                localStorage.removeItem('token');
                localStorage.removeItem('user');
            } else {
                throw new Error('Sign out failed');
            }
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}

export default new AuthService();