import {ActionFunctionArgs} from "@remix-run/router/utils.ts";
import AuthService from "@/services/authService.ts";
import {json, redirect} from "react-router-dom";
import {ResponseThrow} from "@/types/ResponseThrow.ts";
import {AxiosError} from "axios";

interface FormDataValues {
    email: string | null;
    password: string | null;
    redirectTo: string | null;
    school_name: string | null;
}
export const loginAction = async ({request}: ActionFunctionArgs) => {
    const formData = await request.formData();
    const {password, redirectTo, school_name, email}: FormDataValues = {
        email: formData.get("email") as string | null,
        password: formData.get("password") as string | null,
        redirectTo: formData.get("redirectTo") as string | null,
        school_name: formData.get("school_name") as string | null,
    };
    // Validate the form data.
    if (!email || !password || !school_name) {
        // TODO: translate this error message
        return {
            error: "You must provide a email to log in",
        };
    }
    // Sign in and redirect to the proper destination if successful.
    try {
        await AuthService.signin(email,password,school_name);
    } catch (error) {
        // TODO: translate this error message
        const err = error as AxiosError;
        throw json<ResponseThrow>({
            message: err.message,
        }, 401);
    }
    return redirect(redirectTo || "/");
}