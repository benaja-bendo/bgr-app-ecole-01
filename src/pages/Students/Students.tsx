import React, {useCallback, useState} from "react";
import ArrowDownOnSquareIcon from '@heroicons/react/24/solid/ArrowDownOnSquareIcon';
import ArrowUpOnSquareIcon from '@heroicons/react/24/solid/ArrowUpOnSquareIcon';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import {Box, Button, Container, Stack, SvgIcon, Typography} from '@mui/material';
import {StudentsTable} from '@/pages/Students/components/customer/students-table.tsx';
import {CustomersSearch} from '@/components/customer/customers-search.tsx';
import {useSelection} from '@/hooks/use-selection.ts';
import ModalAddStudent from "@/components/ModalAddStudent.tsx";
import {CreateStudent} from "@/pages/Students/components/CreateStudent.tsx";
import {useRequireRole} from "@/hooks/use-require-role.ts";

import {useGetAllStudent} from "@/pages/Students/hooks/use-get-all-student.ts";
import {useStudentIds} from "@/pages/Students/hooks/use-student-ids.ts";
import {useStudents} from "@/pages/Students/hooks/use-students.ts";


export const Students: React.FC = () => {
    useRequireRole(['root']);
    const { dataStudent} = useGetAllStudent();
    const [currentPageNumber, setCurrentPageNumber] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const students = useStudents(dataStudent , currentPageNumber, rowsPerPage);
    const studentIds = useStudentIds(students);
    const studentsSelection = useSelection(studentIds);
    const [openModalAddStudent, setOpenModalAddStudent] = useState(false);

    const handlePageChange = useCallback(
        (_: React.MouseEvent<HTMLButtonElement> | null, value: number) => {
            setCurrentPageNumber(value);
        },
        []
    );

    const handleRowsPerPageChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            setRowsPerPage(parseInt(event.target.value, 10));
        },
        []
    );
    const handleOpenAddStudent = () => {
        setOpenModalAddStudent(true);
    }
    const handleCloseAddStudent = () => {
        setOpenModalAddStudent(false);
    }

    return (<>
        <Box
            component="main"
            sx={{
                flexGrow: 1,
                py: 8
            }}
        >
            <Container maxWidth="xl">
                <Stack spacing={3}>
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        spacing={4}
                    >
                        <Stack spacing={1}>
                            <Typography variant="h4">
                                Customers
                            </Typography>
                            <Stack
                                alignItems="center"
                                direction="row"
                                spacing={1}
                            >
                                <Button
                                    color="inherit"
                                    startIcon={(
                                        <SvgIcon fontSize="small">
                                            <ArrowUpOnSquareIcon/>
                                        </SvgIcon>
                                    )}
                                >
                                    Import
                                </Button>
                                <Button
                                    color="inherit"
                                    startIcon={(
                                        <SvgIcon fontSize="small">
                                            <ArrowDownOnSquareIcon/>
                                        </SvgIcon>
                                    )}
                                >
                                    Export
                                </Button>
                            </Stack>
                        </Stack>
                        <div>
                            <Button
                                startIcon={(
                                    <SvgIcon fontSize="small">
                                        <PlusIcon/>
                                    </SvgIcon>
                                )}
                                variant="contained"
                                onClick={handleOpenAddStudent}
                            >
                                Ajouter un étudiant
                            </Button>
                        </div>
                    </Stack>
                    <CustomersSearch/>
                    <StudentsTable
                        count={dataStudent?.length}
                        items={students}
                        onDeselectAll={studentsSelection.handleDeselectAll}
                        onDeselectOne={studentsSelection.handleDeselectOne}
                        onPageChange={handlePageChange}
                        onRowsPerPageChange={handleRowsPerPageChange}
                        onSelectAll={studentsSelection.handleSelectAll}
                        onSelectOne={studentsSelection.handleSelectOne}
                        page={currentPageNumber}
                        rowsPerPage={rowsPerPage}
                        selected={studentsSelection.selected}
                    />
                </Stack>
            </Container>
        </Box>
        {openModalAddStudent && (<ModalAddStudent isOpen={openModalAddStudent} onClose={handleCloseAddStudent}>
            <CreateStudent handleCloseAddStudent={handleCloseAddStudent}/>
        </ModalAddStudent>)}
    </>)
}