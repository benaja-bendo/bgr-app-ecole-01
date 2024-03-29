import {
    createBrowserRouter,
    RouteObject,
} from "react-router-dom";
import {MainLayout} from "@/layouts/MainLayout";
import {AuthLayout} from "@/layouts/AuthLayout";
import {Students} from "@/pages/Students/Students.tsx";
import {Dashboard} from "@/pages/dashboard.tsx";
import {Error404} from "@/pages/Error404.tsx";
import Login from "@/pages/Login/Login.tsx";
import {authenticateLoader} from "@/routes/loaders/AuthenticateLoader.ts";
import {GuestLoader} from "@/routes/loaders/GuestLoader.ts";
import {loginAction} from "@/routes/actions/loginAction.ts";
import {LogoutAction} from "@/routes/actions/logoutAction.ts";
import {CustomErrorBoundary} from "@/components/CustomErrorBoundary.tsx";
import {Teachers} from "@/pages/Teachers/Teachers.tsx";
import {studentAction} from "@/routes/actions/studentAction.ts";
import {EditStudent} from "@/pages/Students/EditStudent.tsx";
import {ProfileStudent} from "@/pages/Students/ProfileStudent.tsx";

const routes: RouteObject[] = [
    {
        id: "main",
        path: "",
        loader: authenticateLoader,
        element: <MainLayout/>,
        hasErrorBoundary: true,
        errorElement: <CustomErrorBoundary/>,
        children: [
            {
                index: true,
                path: "/",
                Component: Dashboard,
            },
            {
                path: "/students",
                Component: Students,
                action: studentAction,
            },
            {
                path: "/students/:id",
                Component: ProfileStudent,
                action: studentAction,
            },
            {
                path: "/students/:id/edit",
                Component: EditStudent,
                action: studentAction,
            },
            {path: "/teachers", element: <Teachers/>},
            {path: "/about", element: <div>About</div>},
        ]
    },
    {
        path: "/auth",
        element: <AuthLayout/>,
        loader: GuestLoader,
        errorElement: <CustomErrorBoundary/>,
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