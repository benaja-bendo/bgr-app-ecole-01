import {FC} from 'react';
import {Schedule} from "@/pages/Students/components/tabs/Schedule.tsx";
import {Button} from "@mui/material";
import HttpService from "@/services/HttpService.ts";
import configRoutes from "@/config/config-routes.ts";

export const Agenda: FC = () => {
    const handleExport = async () => {
       const req = await HttpService.get(configRoutes.calendarEvents.export(1));
        // TODO : Export the file (ics or csv)
    }
    return (<>
        <h1>
            Welcome to the Agenda page
        </h1>
        <Button onClick={handleExport}>
            Export
        </Button>
        <Schedule/>
    </>);
};