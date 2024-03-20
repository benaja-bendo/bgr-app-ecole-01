import React from 'react';
import {useCurrentUser} from "@/hooks/use-current-user.ts";
import HttpService from "@/services/HttpService.ts";
import {AxiosResponse} from "axios";
import configRoutes from "@/config/config-routes.ts";
import {useTranslation} from 'react-i18next';
import {useChangeDocumentTitle} from "@/hooks/use-change-document-title.ts";
import {useStoreStudent} from "@/states/useStoreStudent.ts";


export const Dashboard: React.FC = () => {
    useChangeDocumentTitle('Dashboard');
    const {students} = useStoreStudent();
    const {t} = useTranslation();
    const {currentUser} = useCurrentUser();
    const [loading, setLoading] = React.useState<boolean>(false);
    const [data, setData] = React.useState<null | [{ email: string, id: number }]>(null);

    const handleGetData = async () => {
        setLoading(true);
        const response = await HttpService.get(configRoutes.test) as AxiosResponse;
        setData(response.data.data);
        setLoading(false);
    }

    return (
        <div>
            <h1>Dashboard</h1>
            <p>Current user: {currentUser?.email}</p>
            <hr/>
            <h2>Test CONTEXT</h2>
            <hr/>
            <button onClick={handleGetData}>charger les données</button>
            {loading && <p>Chargement...</p>}
            {data && data.map((item) => (
                <p key={item?.id}>{item?.email}</p>
            ))}
        </div>
    )
}