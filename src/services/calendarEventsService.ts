import HttpService from "@/services/HttpService.ts";
import {ResponseApi} from "@/types/ResponseApi.ts";
import {CalendarEventType} from "@/types/CalendarEventType.ts";
import configRoutes from "@/config/config-routes.ts";

interface CalendarEventsServiceProps {
    getAllCalendarEvents(search?: string): Promise<CalendarEventType[]>;
}

class CalendarEventsService implements CalendarEventsServiceProps {
    async getAllCalendarEvents(search?: string) {
        try {
            if (!search) search = "";
            const response = await HttpService.get<ResponseApi<CalendarEventType[]>>(configRoutes.calendarEvents.getAll(search));
            return response.data.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}

export default new CalendarEventsService();