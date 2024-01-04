import {ActionFunctionArgs} from "@remix-run/router/utils.ts";
import AuthService from "@/services/authService.ts";
import {json, redirect} from "react-router-dom";
import {TResponseThrow} from "@/types/TResponseThrow.ts";
import {AxiosError} from "axios";

interface FormDataValues {
    username: string | null;
    password: string | null;
    redirectTo: string | null;
}
export const loginAction = async ({request}: ActionFunctionArgs) => {
    const formData = await request.formData();
    const formDataValues: FormDataValues = {
        username: formData.get("username") as string | null,
        password: formData.get("password") as string | null,
        redirectTo: formData.get("redirectTo") as string | null,
    };
    // Validate the form data.
    if (!formDataValues.username || !formDataValues.password) {
        // TODO: translate this error message
        return {
            error: "You must provide a username to log in",
        };
    }
    // Sign in and redirect to the proper destination if successful.
    try {
        await AuthService.signin(formDataValues.username,formDataValues.password);
    } catch (error) {
        // TODO: translate this error message
        const err = error as AxiosError;
        throw json<TResponseThrow>({
            message: err.message,
        }, 401);
    }
    return redirect(formDataValues.redirectTo || "/");
}