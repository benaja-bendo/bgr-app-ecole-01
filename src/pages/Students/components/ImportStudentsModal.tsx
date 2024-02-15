import React, {useState} from "react";
import {
    Typography,
    TextField,
    Button,
    Box,
    Link,
    Stack,
    InputAdornment,
    SvgIcon,
    CircularProgress
} from "@mui/material";
import StudentService from "@/services/studentService.ts";
import {AttachFile} from "@/components/svg/SvgIcon/attach-file.tsx";
import {TableStudentImport} from "@/pages/Students/components/TableStudentImport.tsx";
import {StudentCreateTypeExtended} from "@/types/Student.ts";


interface IImportStudentsModalProps {
    onClose: () => void;

}

export const ImportStudentsModal: React.FC<IImportStudentsModalProps> = (props) => {
    const {onClose} = props;
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [data, setData] = useState<StudentCreateTypeExtended[]>([]);
    const [loading, setLoading] = useState<'start' | 'end' | 'loading'>('start');


    const handleChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedFile(event.target.files?.[0] ?? null);
    };

    const handleImport = async () => {
        if (selectedFile) {
            setLoading('loading');
            const response = await StudentService.importStudents(selectedFile);
            if (response) {
                setLoading('end');
                setData(response.students[0]);
            }
        }
    };

    const handleGetTemplate = async (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        await StudentService.exportTemplateStudents();
    }

    return (
        <>
            <Stack spacing={2}>
                <Typography variant="body1">
                    Sélectionnez votre fichier au
                    format <strong>csv</strong>, <strong>xls</strong>, <strong>xlsx</strong>.
                    Assurez-vous
                    qu'il est conforme à notre {' '}
                    <Box component="span" sx={{color: 'blue', textDecoration: 'underline', cursor: 'pointer'}}>
                        <Link href="" onClick={handleGetTemplate}>
                            modèle
                        </Link>
                    </Box>
                </Typography>
                <TextField
                    variant="outlined"
                    type="file"
                    inputProps={{accept: ".csv, xls, .xlsx"}}
                    fullWidth
                    onChange={handleChangeFile}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <AttachFile/>
                            </InputAdornment>
                        ),
                    }}
                />

                <Box sx={{color: 'gray', fontSize: 12}}>
                    <Typography variant="body2" sx={{textAlign: 'center'}}>
                        <strong>Note:</strong> Le fichier doit contenir les colonnes conformes à notre modèle.
                    </Typography>

                    {

                        loading === 'loading' ? (
                            <Box sx={{display: "flex", alignItems: "center", gap: 2}}>
                                <SvgIcon component={AttachFile}/>
                                <Typography variant="body2">
                                    Importation en cours...
                                </Typography>
                                <CircularProgress color="secondary" variant="indeterminate"/>
                            </Box>
                        ) : (
                            data.length > 0 && (
                                <TableStudentImport data={data} onClosed={onClose}/>
                            )
                        )
                    }

                </Box>

            </Stack>
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