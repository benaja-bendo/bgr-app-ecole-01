import {FC, useState} from "react";
import {Box, Slider, Typography} from "@mui/material";

const MONTH = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];

export const SlidePeriod: FC = () => {
    const [value, setValue] = useState<number[]>([1, 12]);

    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
    };

    return (
        <Box sx={{width: '98%',marginBottom: '1rem'}}>
            <Typography id="non-linear-slider" gutterBottom>
                Period
            </Typography>
            <Slider
                value={value}
                min={1}
                step={1}
                max={12}
                // scale={}
                getAriaValueText={(value) => `${value}`}
                valueLabelFormat={(value) => `${MONTH[value - 1]}`}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="non-linear-slider"
                marks={[
                    { value: 1, label: 'Jav' },
                    { value: 12, label: 'Dec' },
                ]}
            />
        </Box>
    );
}