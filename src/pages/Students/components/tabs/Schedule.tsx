import {FC} from 'react';
import {Calendar, dateFnsLocalizer} from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import enUS from 'date-fns/locale/en-US';
import 'react-big-calendar/lib/css/react-big-calendar.css';


const locales = {
    'en-US': enUS,
}

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
})

const myEventsList = [
    {
        'title': 'All Day Event very long title',
        'allDay': true,
        'start': new Date(2022, 3, 0),
        'end': new Date(2022, 3, 1),
    },
    {
        'title': 'Long Event',
        'start': new Date(2021, 3, 7),
        'end': new Date(2021, 3, 10),
    },

    {
        'title': 'DTS STARTS',
        'start': new Date(2021, 2, 13, 0, 0, 0),
        'end': new Date(2021, 2, 20, 0, 0, 0),
    },

    {
        'title': 'DTS ENDS',
        'start': new Date(2021, 10, 6, 0, 0, 0),
        'end': new Date(2021, 10, 13, 0, 0, 0),
    },

    {
        'title': 'Some Event',
        'start': new Date(2021, 3, 9, 0, 0, 0),
        'end': new Date(2021, 3, 9, 0, 0, 0),
    },
    {
        'title': 'Conference',
        'start': new Date(2021, 3, 11),
        'end': new Date(2021, 3, 13),
        desc: 'Big conference for important people',
    },
    {
        'title': 'Meeting',
        'start': new Date(2021, 3, 12, 10, 30, 0, 0),
        'end': new Date(2021, 3, 12, 12, 30, 0, 0),
        desc: 'Pre-meeting meeting, to prepare for the meeting',
    },
    {
        'title': 'Lunch',
        'start': new Date(2021, 3, 12, 12, 0, 0, 0),
        'end': new Date(2021, 3, 12, 13, 0, 0, 0),
        desc: 'Power lunch',
    },
    {
        'title': 'Meeting',
        'start': new Date(2021, 3, 12, 14, 0, 0, 0),
        'end': new Date(2021, 3, 12, 15, 0, 0, 0),
    },
    {
        'title': 'Happy Hour',
        'start': new Date(2021, 3, 12, 17, 0, 0, 0),
        'end': new Date(2021, 3, 12, 17, 30, 0, 0),
        desc: 'Most important meal of the day',
    },
    {
        'title': 'Dinner',
        'start': new Date(2021, 3, 12, 20, 0, 0, 0),
        'end': new Date(2021, 3, 12, 21, 0, 0, 0),
    },
    {
        'title': 'Birthday Party',
        'start': new Date(2021, 3, 13, 7, 0, 0),
        'end': new Date(2021, 3, 13, 10, 30, 0),
    },
    {
        'title': 'Late Night Event',
        'start': new Date(2021, 3, 17, 19, 30, 0),
        'end': new Date(2021, 3, 18, 2, 0, 0),
    },
    {
        'title': 'Multi-day Event',
        'start': new Date(2021, 3, 20, 19, 30, 0),
        'end': new Date(2021, 3, 22, 2, 0, 0),
    }
]

export const Schedule: FC = () => {
    return (
        <div>
            <Calendar
                localizer={localizer}
                events={myEventsList}
                startAccessor="start"
                endAccessor="end"
                style={{height: 500}}
            />
        </div>
    );
}