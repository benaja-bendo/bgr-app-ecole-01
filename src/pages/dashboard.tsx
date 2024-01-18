import React from 'react';
import {useCurrentUser} from "@/hooks/use-current-user.ts";
import HttpService from "@/services/HttpService.ts";
import {AxiosResponse} from "axios";
import configRoutes from "@/utils/config-routes.ts";

export const Dashboard: React.FC = () => {
    const { currentUser } = useCurrentUser();
    const [loading, setLoading] = React.useState<boolean>(false);
    const [data, setData] = React.useState<null|[{email:string,id:number}]>(null);

    const handleGetData = async () => {
        setLoading(true);
        const response = await HttpService.get(configRoutes.test) as AxiosResponse;
        console.log(response.data.data);
        setData(response.data.data);
        setLoading(false);
    }

    return (
        <div>
            <h1>Dashboard</h1>
            <p>Current user: {currentUser?.email}</p>
            <button onClick={handleGetData}>charger les données</button>
            {loading && <p>Chargement...</p>}
            {data && data.map((item) => (
                <p key={item?.id}>{item?.email}</p>
            ))}
        </div>
    )
}