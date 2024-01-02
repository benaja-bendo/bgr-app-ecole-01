import {ActionFunctionArgs} from "@remix-run/router/utils.ts";
import AuthService from "@/services/authService.ts";
import {redirect} from "react-router-dom";

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
    console.log(formDataValues)
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
        return {
            error: "Invalid login attempt",
        };
    }
    return redirect(formDataValues.redirectTo || "/");
}