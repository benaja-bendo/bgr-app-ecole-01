import React from 'react';
import { Outlet } from 'react-router-dom';

export const AuthLayout: React.FC = () => {
    return (
        <div>
            <header>Login Form</header>
            <main>
                <Outlet />
            </main>
        </div>
    );
}