import React from 'react';
import {useCurrentUser} from "@/hooks/use-current-user.ts";
import HttpService from "@/services/HttpService.ts";
import {AxiosResponse} from "axios";

export const Dashboard: React.FC = () => {
    const { currentUser } = useCurrentUser();

    const handleGetData = async () => {
        const response = await HttpService.get('/item') as AxiosResponse;
        console.log(response.data);
    }

    return (
        <div>
            <h1>Dashboard</h1>
            <p>Current user: {currentUser?.email}</p>
            <button onClick={handleGetData}>charger les données</button>
        </div>
    )
}