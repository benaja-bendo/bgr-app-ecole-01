import React from "react";
import {Typography, Button, Box} from "@mui/material";

interface IExportStudentsModalProps {
    onClose?: () => void;
}

export const ExportStudentModal: React.FC<IExportStudentsModalProps> = (props) => {
    const {onClose} = props;

    const handleExport = () => {
        console.log("Exporting students data...");
        // Ici, vous pouvez ajouter la logique pour exporter les données des étudiants.
    };

    return (
        <>
            <Box sx={{mt: 4}}>
                <Typography variant="body1">Êtes-vous sûr de vouloir exporter les données des étudiants ?</Typography>
            </Box>
            <Box sx={{mt: 4, display: "flex", justifyContent: "flex-end", gap: 2}}>
                <Button variant="outlined" onClick={onClose}>
                    Annuler
                </Button>
                <Button variant="contained" color="primary" onClick={handleExport}>
                    Confirmer l'exportation
                </Button>
            </Box>
        </>
    );
};