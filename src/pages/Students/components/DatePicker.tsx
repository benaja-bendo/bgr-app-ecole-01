import * as React from 'react';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DateTimePicker} from '@mui/x-date-pickers/DateTimePicker';
import dayjs from "dayjs";

export default function DatePicker() {
    const maxDate = dayjs();
    const minDate = dayjs().subtract(100, 'year');
    return (<>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                    label="Date de naissance"
                    name={'birth_date'}
                    maxDate={maxDate}
                    minDate={minDate}
                    views={['year', 'month', 'day']}
                    format={'YYYY-MM-DD'}
                />
        </LocalizationProvider>
    </>);
}