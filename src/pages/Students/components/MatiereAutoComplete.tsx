import {FC} from "react";
import Autocomplete from "@mui/material/Autocomplete";
import {Box, TextField, Typography} from "@mui/material";

const top100Matiere = [
    {label: 'Mathématiques'},
    {label: 'Physique'},
    {label: 'Chimie'},
    {label: 'Informatique'},
    {label: 'Anglais'},
    {label: 'Français'},
    {label: 'Histoire'},
    {label: 'Géographie'},
    {label: 'Philosophie'},
    {label: 'Biologie'},
    {label: 'Economie'},
    {label: 'Droit'},
    {label: 'Management'},
];

export const MatiereAutoComplete: FC = () => {
    return (<>
        <Box sx={{marginBottom: '1rem'}}>
            <Typography id="non-linear-slider" gutterBottom>
                Matières
            </Typography>
            <Autocomplete
                disablePortal
                id="list-matiere"
                options={top100Matiere}
                sx={{width: '100%'}}
                renderInput={(params) => <TextField {...params} label="Liste des matières"/>}
            />
        </Box>
    </>);
}