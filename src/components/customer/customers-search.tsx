import {FC, useState} from 'react';
import MagnifyingGlassIcon from '@heroicons/react/24/solid/MagnifyingGlassIcon';
import {Box, FormControl, InputAdornment, InputLabel, MenuItem, OutlinedInput, Stack, SvgIcon} from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export const CustomersSearch: FC = () => (
    <Box sx={{ p: 2 }}>
        <Stack
            direction="row"
            justifyContent="space-between"
            spacing={4}>
        <OutlinedInput
            defaultValue=""
            fullWidth
            placeholder={"Search student"}
            startAdornment={(
                <InputAdornment position="start">
                    <SvgIcon
                        color="action"
                        fontSize="small"
                    >
                        <MagnifyingGlassIcon />
                    </SvgIcon>
                </InputAdornment>
            )}
        />
        <Box>
            <BasicSelect />
        </Box>
        </Stack>
    </Box>
);


function BasicSelect() {
    const [age, setAge] = useState('20');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="select-sort-by-label">Sort By</InputLabel>
                <Select
                    labelId="select-sort-by-label"
                    id="select-sort-by"
                    value={age}
                    label={"Sort By"}
                    onChange={handleChange}
                >
                    <MenuItem value={'10'}>Last update</MenuItem>
                    <MenuItem value={'20'}>Total orders</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}