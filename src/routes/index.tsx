import {
    createBrowserRouter,
    RouteObject,
} from "react-router-dom";
import {MainLayout} from "@/layouts/MainLayout";
import {AuthLayout} from "@/layouts/AuthLayout";
import {Customers} from "@/pages/customers.tsx";
import {Dashboard} from "@/pages/dashboard.tsx";
import {Error404} from "@/pages/Error404.tsx";
import Login from "@/pages/Login.tsx";
import {authenticateLoader} from "@/routes/loaders/AuthenticateLoader.ts";
import {GuestLoader} from "@/routes/loaders/GuestLoader.ts";
import {loginAction} from "@/routes/actions/loginAction.ts";
import {LogoutAction} from "@/routes/actions/logoutAction.ts";

const routes: RouteObject[] = [
    {
        id: "main",
        path: "",
        loader: authenticateLoader,
        element: <MainLayout/>,
        children: [
            {
                index: true,
                path: "/",
                Component: Dashboard,
            },
            {path: "/customers", element: <Customers/>},
            {path: "/about", element: <div>About</div>},
        ]
    },
    {
        path: "/auth",
        element: <AuthLayout/>,
        loader: GuestLoader,
        children: [
            {
                path: "login",
                action: loginAction,
                Component: Login,
            },
            {path: "register", element: <div>Register</div>},
            {
                path: "forgot-password",
                element: <div>Forgot Password</div>,
            },
            {
                path: "reset-password",
                element: <div>Reset Password</div>,
            },
            {
                path: "logout",
                action: LogoutAction,
            }
        ]
    },
    {
        path: "*",
        element: <Error404/>,
    }
];

export const Router = createBrowserRouter(routes, {
    // basename: "/",
    // window,
});

if (import.meta.hot) {
    import.meta.hot.accept();
    import.meta.hot.dispose(() => Router.dispose());
}