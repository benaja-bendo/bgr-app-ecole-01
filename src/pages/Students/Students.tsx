import React, {useCallback, useState} from "react";
import {Box, Card, Container, Stack} from '@mui/material';
import {StudentsTable} from '@/pages/Students/components/customer/students-table.tsx';
import {CustomersSearch} from '@/components/customer/customers-search.tsx';
import {useSelection} from '@/hooks/use-selection.ts';
import ModalAddStudent from "@/components/ModalAddStudent.tsx";
import {CreateStudent} from "@/pages/Students/components/CreateStudent.tsx";
import {useRequireRole} from "@/hooks/use-require-role.ts";
import {useGetAllStudent} from "@/pages/Students/hooks/use-get-all-student.ts";
import {useStudentIds} from "@/pages/Students/hooks/use-student-ids.ts";
import {useStudents} from "@/pages/Students/hooks/use-students.ts";
import {HeaderPage01} from "@/components/HeaderPage01.tsx";
import {useActionData, useLoaderData} from "react-router-dom";


export const Students: React.FC = () => {
    useRequireRole(['root']);
    const loaderData = useLoaderData();
    const actionsData = useActionData();
    console.log('loaderData :>> ', loaderData);
    console.log('actionsData :>> ', actionsData);
    const {students: rawStudents} = useGetAllStudent();
    const [currentPageNumber, setCurrentPageNumber] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const students = useStudents(rawStudents, currentPageNumber, rowsPerPage);
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
        <Box component="main" sx={{flexGrow: 1, py: 8}}>
            <Container maxWidth="xl">
                <Stack spacing={3}>
                    <HeaderPage01 handleOpenAddStudent={handleOpenAddStudent}/>
                    <Card>
                        <CustomersSearch/>
                        <StudentsTable
                            count={rawStudents?.length}
                            students={students}
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
                    </Card>
                </Stack>
            </Container>
        </Box>
        {openModalAddStudent && (<ModalAddStudent isOpen={openModalAddStudent} onClose={handleCloseAddStudent}>
            <CreateStudent/>
        </ModalAddStudent>)}
    </>)
}