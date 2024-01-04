import AuthService from "@/services/authService.ts";
import {json, redirect} from "react-router-dom";
import {TResponseThrow} from "@/types/TResponseThrow.ts";
import {AxiosError} from "axios";

export const LogoutAction = async () => {
    try {
        await AuthService.signout();
        return redirect('/');
    } catch (error) {
        const err = error as AxiosError;
        throw json<TResponseThrow>({
            message: err.message,
        }, 401);
    }
}