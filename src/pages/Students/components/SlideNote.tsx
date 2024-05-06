import {FC, useState} from "react";
import {Box, Slider, Typography} from "@mui/material";


export const SlideNote: FC = () => {
    const [value, setValue] = useState<number[]>([10,18]);

    const handleChange = (event: Event, newValue: number | number[]) => {
            setValue(newValue as number[]);
    };

    return (
        <Box sx={{ width: '98%',marginBottom: '1rem' }}>
            <Typography id="non-linear-slider" gutterBottom>
                Notes
            </Typography>
            <Slider
                value={value}
                min={0}
                step={1}
                max={20}
                // scale={}
                getAriaValueText={(value) => `${value}`}
                valueLabelFormat={(value) => `${value}`}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="non-linear-slider"
                marks={[
                    { value: 0, label: '0' },
                    { value: 5, label: '5' },
                    { value: 10, label: '10' },
                    { value: 15, label: '15' },
                    { value: 20, label: '20' },
                ]}
            />
        </Box>
    );
}