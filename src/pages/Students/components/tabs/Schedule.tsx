import {FC, SyntheticEvent, useMemo} from 'react';
import {Calendar, dateFnsLocalizer, Views} from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import fr from 'date-fns/locale/fr';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import {CalendarEventType} from "@/types/CalendarEventType.ts";
import {useFetchCalendarEvents} from "@/hooks/use-fetch-calendar-events.ts";


const locales = {
    'fr': fr,
}

export const Schedule: FC = () => {
    const { data: events, isLoading, error } = useFetchCalendarEvents();
    const defaultDate = new Date();
    const {
        views,
        localizer,
        style,
        defaultView,
        step,
        messages,
    } = useMemo(
        () => ({
            defaultDate: new Date(),
            views: [Views.DAY, Views.WEEK, Views.MONTH],
            localizer: dateFnsLocalizer({
                format,
                parse,
                startOfWeek,
                getDay,
                locales,
            }),
            style: { height: 500 },
            defaultView: Views.WEEK,
            step: 60,
            messages: {
                allDay: 'Journée',
                previous: 'Précédent',
                next: 'Suivant',
                today: 'Aujourd\'hui',
                month: 'Mois',
                week: 'Semaine',
                day: 'Jour',
                agenda: 'Agenda',
                date: 'Date',
                time: 'Heure',
                event: 'Événement',
            },
        }),
        []
    );

    const handleSelectEvent = (event: CalendarEventType, e: SyntheticEvent) => {
        console.log('event', event);
    };

    return (
        <div>
            {isLoading && <p>Loading calendar events...</p>}
            {error && <p>Error fetching calendar events: {error.message}</p>}
            {events && (
                <Calendar
                    defaultDate={defaultDate}
                    localizer={localizer}
                    events={events}
                    views={views}
                    style={style}
                    defaultView={defaultView}
                    step={step}
                    messages={messages}
                    onSelectEvent={handleSelectEvent}
                    tooltipAccessor={(e) => e.title}
                    // showMultiDayTimes
                    selectable
                />
            )}
        </div>
    );
}