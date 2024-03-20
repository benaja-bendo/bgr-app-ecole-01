import {useTranslation} from "react-i18next";
import React, {useState} from "react";
import Select, {SelectChangeEvent} from "@mui/material/Select";
import {Box, FormControl, InputLabel, MenuItem} from "@mui/material";

export function FilterSelect () {
    const {t} = useTranslation();
    const [filter, setFilter] = useState('name');

    const handleChange = (event: SelectChangeEvent) => {
        setFilter(event.target.value as string);
    };

    return (
        <Box sx={{minWidth: 120}}>
            <FormControl fullWidth>
                <InputLabel id="select-sort-by-label">{t('utils.filter')}</InputLabel>
                <Select
                    labelId="select-sort-by-label"
                    id="select-sort-by"
                    value={filter}
                    label={"Sort By"}
                    onChange={handleChange}
                >
                    <MenuItem value={"name"}>create_at</MenuItem>
                    <MenuItem value={"email"}>email</MenuItem>
                    {/*<MenuItem value={"email"}>{t('student.student_email')}</MenuItem>*/}
                    {/*<MenuItem value={"location"}>{t('student.student_address')}</MenuItem>
                    <MenuItem value={"phone"}>{t('student.student_phone')}</MenuItem>
                    <MenuItem value={"signup"}>{'Date d\'inscription'}</MenuItem>*/}
                </Select>
            </FormControl>
        </Box>
    );
}