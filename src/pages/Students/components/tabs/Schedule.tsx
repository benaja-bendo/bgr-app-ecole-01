import {FC, SyntheticEvent, useMemo, useState} from 'react';
import {Calendar, dateFnsLocalizer, Views} from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
// import enUS from 'date-fns/locale/en-US';
import fr from 'date-fns/locale/fr';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import CalendarEventsService from "@/services/calendarEventsService.ts";
import {CalendarEventType} from "@/types/CalendarEventType.ts";


const locales = {
    'fr': fr,
}
export const Schedule: FC = () => {
    const [events, setEvents] = useState<CalendarEventType[]>([]);
    const {
        defaultDate,
        views,
        localizer,
        style,
        defaultView,
        step,
        messages,
    } = useMemo(
        () => ({
            defaultDate: new Date(),
            views: [Views.DAY, Views.WEEK,Views.MONTH],
            localizer:dateFnsLocalizer({
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
            }
        }),
        [])

    const handleSelectEvent = (event: CalendarEventType, e: SyntheticEvent) => {
        console.log('event', event);
    }
    const handleClick = async () => {
        const response = await CalendarEventsService.getAllCalendarEvents();
        if (response) {
            const formatResponse = response.map((r) => {
                return {
                    title: r.title,
                    start: new Date(r.start),
                    end: new Date(r.end),
                    allDay: true, //r.allDay,
                }
            })
            setEvents(formatResponse);
        }
    }

    return (
        <div>
            <button onClick={handleClick}>Click me</button>
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
        </div>
    );
}