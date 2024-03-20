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
import {toast} from "sonner";
import {AxiosError} from "axios";


interface IImportStudentsModalProps {
    onClose: () => void;

}

export const ImportStudentsModal: React.FC<IImportStudentsModalProps> = (props) => {
    const {onClose} = props;
    const [data, setData] = useState<StudentCreateTypeExtended[]>([]);
    const [loading, setLoading] = useState<'start' | 'end' | 'loading'>('start');


    const handleChangeFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files?.[0]) {
            setLoading('loading');
            try {
                const response = await StudentService.importStudents(event.target.files[0]);
                if (response !== undefined && response.students.length > 0) {
                    setLoading('end');
                    setData(response.students[0]);
                } else {
                    setLoading('start');
                }
            } catch (error) {
                const err = error as AxiosError;
                toast.warning(`${err.message}`);
                setLoading('start');
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
                    {loading === 'start' && (
                        <Typography variant="body2" sx={{textAlign: 'center'}}>
                            <strong>Note:</strong> Le fichier doit contenir les colonnes conformes à notre modèle.
                            <strong> Nom, Prénom, Email, Téléphone, Date de naissance, Adresse</strong>
                        </Typography>
                    )}

                    {loading === 'loading' &&
                        (<Box sx={{display: "flex", alignItems: "center", justifyContent: "center", gap: 2}}>
                            <SvgIcon component={AttachFile}/>
                            <Typography variant="body2">
                                Importation en cours...
                            </Typography>
                            <CircularProgress color="secondary" variant="indeterminate"/>
                        </Box>)
                    }
                    {loading === 'end' &&
                        (data.length > 0 ?
                            (<TableStudentImport data={data} onClosed={onClose}/>) :
                            (<Typography variant="body2" sx={{textAlign: 'center'}}>
                                Aucun étudiant trouvé dans le fichier
                            </Typography>))
                    }
                </Box>

            </Stack>
            {loading === 'start' &&
                (<Box sx={{mt: 4, display: "flex", justifyContent: "flex-end", gap: 2}}>
                    <Button variant="outlined" onClick={onClose} fullWidth>
                        Annuler
                    </Button>
                </Box>)
            }
        </>
    );
};