import { FC } from "react";
import { Schedule } from "@/pages/Students/components/tabs/Schedule.tsx";
import { Button } from "@mui/material";
import HttpService from "@/services/HttpService.ts";
import configRoutes from "@/config/config-routes.ts";
import FileSaver from "file-saver";

export const Agenda: FC = () => {
  const handleExport = async () => {
    // TODO : Ameloire Export the file (ics or csv)
    try {
      const response = await HttpService.get<Blob>(
        configRoutes.calendarEvents.export(1),
        {
          responseType: "blob",
        }
      );
      if (response.status === 200) {
        console.log(response);
        const filename = "calendar.ics";
        FileSaver.saveAs(new Blob([response.data]), filename);
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  const handleSynchronise = async () => {
    try {
      const response = await HttpService.get<{ url: string }>(
        configRoutes.calendarEvents.redirectToGoogle
      );
      if (response.status === 200) {
        window.location.href = response.data.url;
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  return (
    <>
      <h1>Welcome to the Agenda page</h1>
      <Button onClick={handleExport}>Export</Button>
      <Button onClick={handleSynchronise}>
        Synchroniser avec google calendar
      </Button>
      <Schedule />
    </>
  );
};
