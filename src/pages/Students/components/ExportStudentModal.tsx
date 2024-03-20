import React from "react";
import {Typography, Button, Box} from "@mui/material";
import StudentService from "@/services/studentService.ts";

interface IExportStudentsModalProps {
    onClose?: () => void;
}

export const ExportStudentModal: React.FC<IExportStudentsModalProps> = (props) => {
    const {onClose} = props;

    const handleExport = async () => {
        console.info("Exporting students data...");
        await StudentService.exportStudents()
        onClose && onClose();
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