import HttpService from '@/services/HttpService.ts';
import {Tuser} from "@/types/Tuser.ts";
import config from "@/utils/config.ts";

interface AuthServiceProps {
    isAuthenticated: boolean;
    user: null | Tuser;
    username: null | string;
    signin(username: string, password: string): Promise<void>;
    signout(): Promise<void>;
}

class AuthService implements AuthServiceProps {
    isAuthenticated = false;
    user = null;
    username = null as null | string;

    async signin(username: string, password: string) {
        try {
            const response = await HttpService.post(config.api.routes.login, { username, password });
            if (response.status === 200) {
                console.log(response.data)
                this.isAuthenticated = true;
                this.username = username;
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
            const response = await HttpService.post('/auth/signout');
            if (response.status === 200) {
                this.isAuthenticated = false;
                this.username = null;
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