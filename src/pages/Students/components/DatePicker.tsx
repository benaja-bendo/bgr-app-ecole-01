import * as React from 'react';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DateTimePicker} from '@mui/x-date-pickers/DateTimePicker';
import dayjs from "dayjs";

interface DatePickerProps {
    defaultValue?: string;
}
export default function DatePicker(props: DatePickerProps): JSX.Element {
    const maxDate = props.defaultValue ? dayjs(props.defaultValue) : dayjs();
    const minDate = dayjs().subtract(100, 'year');
    return (<>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                    label="Date de naissance"
                    name={'birth_date'}
                    maxDate={maxDate}
                    minDate={minDate}
                    defaultValue={maxDate}
                    views={['year', 'month', 'day']}
                    format={'YYYY-MM-DD'}
                />
        </LocalizationProvider>
    </>);
}