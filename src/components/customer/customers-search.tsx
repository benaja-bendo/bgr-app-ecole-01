import React, {FC, useState} from 'react';
import MagnifyingGlassIcon from '@heroicons/react/24/solid/MagnifyingGlassIcon';
import {Box, InputAdornment, OutlinedInput, Stack, SvgIcon} from '@mui/material';


interface CustomersSearchProps {
    onSearch: (search: string) => void;
    search: string;
}

export const CustomersSearch: FC<CustomersSearchProps> = ({onSearch, search}) => {
    const [searchLocal, setSearchLocal] = useState<string>(search);
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        onSearch(e.target.value);
        setSearchLocal(e.target.value);
    }
    return (
        <Box sx={{p: 2}}>
            <Stack
                direction="row"
                justifyContent="space-between"
                spacing={4}>
                <OutlinedInput
                    fullWidth
                    value={searchLocal}
                    onChange={handleSearch}
                    placeholder={"Search student"}
                    startAdornment={(
                        <InputAdornment position="start">
                            <SvgIcon
                                color="action"
                                fontSize="small"
                            >
                                <MagnifyingGlassIcon/>
                            </SvgIcon>
                        </InputAdornment>
                    )}
                />
                {/*<Box>*/}
                {/*    <FilterSelect/>*/}
                {/*</Box>*/}
            </Stack>
        </Box>
    );
}