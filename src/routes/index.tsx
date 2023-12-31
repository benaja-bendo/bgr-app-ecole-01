import {
    createBrowserRouter,
    RouteObject,
} from "react-router-dom";
import {MainLayout} from "@/layouts/MainLayout";
import {AuthLayout} from "@/layouts/AuthLayout";
import {Customers} from "@/pages/customers.tsx";
import {Dashboard} from "@/pages/dashboard.tsx";
import {ErrorPage} from "@/pages/ErrorPage.tsx";

const routes: RouteObject[] = [
    {
        path: "",
        element: <MainLayout />,
        children: [
            { path: "/", element: <Dashboard/> },
            { path: "/customers", element: <Customers/> },
            { path: "/about", element: <div>About</div> },
        ]
    },
    {
        path: "/auth",
        element: <AuthLayout />,
        children: [
            // Add your auth routes here
        ]
    },
    {
        path: "*",
        element: <ErrorPage />,
    }
];

export const Router = createBrowserRouter(routes, {
    // basename: "/",
    // window,
});