import React from "react";
import {
    Box,
    Button,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Tooltip
} from "@mui/material";
import {StudentCreateTypeExtended} from "@/types/Student.ts";
import {AddStudent} from "@/components/svg/SvgIcon/add-student.tsx";
import {useTranslation} from "react-i18next";
import StudentService from "@/services/studentService.ts";
import {toast} from "sonner";
import {AxiosError} from "axios";
import {useQueryClient} from "@tanstack/react-query";

interface ITableStudentImportProps {
    data: StudentCreateTypeExtended[];
    onClosed?: () => void;
}

export const TableStudentImport: React.FC<ITableStudentImportProps> = (props) => {
    const queryClient = useQueryClient();
    const {t} = useTranslation();
    const {data, onClosed} = props;
    const handleCreateAllCollection = async () => {
        try {
            await Promise.all(data.map(async (row, index) => {
                // index * 1000 millisecondes avant d'exécuter la requête
                await new Promise(resolve => setTimeout(resolve, index * 1000));
                const res = await StudentService.createStudent(row);
                if (res) {
                    toast.success(res.message)
                }
            }));
            await queryClient.invalidateQueries({queryKey: ['students']});
            toast.success("All students created successfully");
            onClosed && onClosed();
        } catch (error) {
            const err = error as AxiosError;
            toast.warning(`Error creating students ${err.message}`);
        }
    }
    const handleCreateSingleCollection = async (row: StudentCreateTypeExtended) => {
        try {
            const res = await StudentService.createStudent(row);
            if (res) {
                await queryClient.invalidateQueries({queryKey: ['students']});
                toast.success(res.message)
                // onClosed && onClosed();
            }
        } catch (error) {
            const err = error as AxiosError;
            toast.warning(`Error creating student ${err.message}`, {
                action: {
                    label: "Retry",
                    onClick: () => handleCreateSingleCollection(row),
                }
            });
        }

    }
    return (<>
        <Box sx={{p: 2}}>
            <Button variant="contained" color="primary" fullWidth onClick={handleCreateAllCollection}>
                {t('student.student_create_collection')}
            </Button>
        </Box>
        <TableContainer style={{maxWidth: '100%', overflowX: 'auto'}}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Last Name</TableCell>
                        <TableCell>First Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Birth Date</TableCell>
                        <TableCell>Gender</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row, index) => (
                        <TableRow hover key={index}>
                            <TableCell>{row.last_name}</TableCell>
                            <TableCell>{row.first_name}</TableCell>
                            <TableCell>{row.email}</TableCell>
                            <TableCell>{row.birth_date}</TableCell>
                            <TableCell>{row.gender}</TableCell>
                            <TableCell>
                                <Stack alignItems="center"
                                       direction="row"
                                       spacing={2}>
                                    <Tooltip title="create element">
                                        <Button variant="contained" endIcon={<AddStudent/>}
                                                onClick={() => handleCreateSingleCollection(row)}>
                                            {t('student.student_create_single')}
                                        </Button>
                                    </Tooltip>
                                </Stack>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </>);
}