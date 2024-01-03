import {redirect} from "react-router-dom";
import AuthService from "@/services/authService.ts";

export function GuestLoader() {
    if (AuthService.isAuthenticated) {
        return redirect("/");
    }
    return null;
}