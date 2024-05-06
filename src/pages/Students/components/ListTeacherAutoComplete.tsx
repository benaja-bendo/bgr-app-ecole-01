import {FC} from "react";
import {Box, TextField, Typography} from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";

const top100Teacher = [
    { label: 'M. Jean' },
    { label: 'Mme. Jeanne' },
    { label: 'M. Paul' },
    { label: 'Mme. Paulette' },
    { label: 'M. Pierre' },
    { label: 'Mme. Pierrette' },
    { label: 'M. Jacques' },
    { label: 'Mme. Jacqueline' },
    { label: 'M. Jean-Paul' },
    { label: 'Mme. Jeanne-Paulette' },
    { label: 'M. Jean-Pierre' },
    { label: 'Mme. Jeanne-Pierrette' },
    { label: 'M. Jean-Jacques' },
    { label: 'Mme. Jeanne-Jacqueline' },
];

export const ListTeacherAutoComplete: FC = () => {
    return (<>
        <Box sx={{marginBottom: '1rem'}}>
        <Typography id="non-linear-slider" gutterBottom>
            Enseignants
        </Typography>
        <Autocomplete
            disablePortal
            id="list-teacher"
            options={top100Teacher}
            sx={{ width: '100%' }}
            renderInput={(params) => <TextField {...params} label="Liste des enseignants" />}
        />
        </Box>
    </>);
}