import AuthService from "@/services/authService.ts";
import {redirect} from "react-router-dom";

export const LogoutAction = async () => {
    try {
        await AuthService.signout();
        return redirect('/');
    } catch (error) {
        console.error('error logout action',error);
        throw error;
    }
}