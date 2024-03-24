import {useQuery} from "@tanstack/react-query";
import ConfigQueryKey from "@/config/config-query-key.ts";
import CalendarEventsService from "@/services/calendarEventsService.ts";

export const useFetchCalendarEvents = () => {
    return useQuery({
        queryKey: ConfigQueryKey.SCHEDULE,
        queryFn: async () => {
            const response = await CalendarEventsService.getAllCalendarEvents();
            if (response) {
                return response.map((r) => ({
                    title: r.title,
                    start: new Date(r.start),
                    end: new Date(r.end),
                    allDay: true, // r.allDay (if applicable),
                }));
            } else {
                return []; // Or throw an error
            }
        },
    });
};