import React, {useState} from "react";
import {Typography, TextField, Button, Box} from "@mui/material";


interface IImportStudentsModalProps {
    onClose: () => void;

}

export const ImportStudentsModal: React.FC<IImportStudentsModalProps> = (props) => {
    const {onClose} = props;
    const [selectedFile, setSelectedFile] = useState<File | null>(null);


    const handleChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedFile(event.target.files?.[0] ?? null);
    };

    const handleImport = () => {
        console.log(selectedFile);
    };

    return (
        <>
            <Box sx={{mt: 4}}>
                <Typography variant="body1">Sélectionnez le fichier CSV</Typography>
                <TextField
                    variant="outlined"
                    type="file"
                    fullWidth
                    onChange={handleChangeFile}
                />
            </Box>
            <Box sx={{mt: 4, display: "flex", justifyContent: "flex-end", gap: 2}}>
                <Button variant="outlined" onClick={onClose}>
                    Annuler
                </Button>
                <Button variant="contained" color="primary" onClick={handleImport}>
                    Confirmer l'importation
                </Button>
            </Box>
        </>
    );
};