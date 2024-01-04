import React from 'react';
import {useCurrentUser} from "@/hooks/use-current-user.ts";

export const Dashboard: React.FC = () => {
    const { currentUser } = useCurrentUser();
    return (
        <div>
            <h1>Dashboard</h1>
            <p>Current user: {currentUser?.email}</p>
        </div>
    )
}