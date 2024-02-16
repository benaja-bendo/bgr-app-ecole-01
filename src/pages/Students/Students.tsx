import React, {useCallback, useState} from "react";
import {Card, Stack} from '@mui/material';
import {StudentsTable} from '@/pages/Students/components/customer/students-table.tsx';
import {CustomersSearch} from '@/components/customer/customers-search.tsx';
import {useSelection} from '@/hooks/use-selection.ts';
import CustomModal from "@/components/CustomModal.tsx";
import {useRequireRole} from "@/hooks/use-require-role.ts";
import {useGetAllStudent} from "@/pages/Students/hooks/use-get-all-student.ts";
import {useStudentIds} from "@/pages/Students/hooks/use-student-ids.ts";
import {useStudents} from "@/pages/Students/hooks/use-students.ts";
import {HeaderStudentPage} from "@/pages/Students/components/HeaderStudentPage.tsx";
import {useActionData, useLoaderData} from "react-router-dom";
import {useChangeDocumentTitle} from "@/hooks/use-change-document-title.ts";
import {ExportStudentModal} from "@/pages/Students/components/ExportStudentModal.tsx";
import {ImportStudentsModal} from "@/pages/Students/components/ImportStudentsModal.tsx";
import {useTranslation} from "react-i18next";
import {Toaster} from "@/components/ui/sonner.tsx";


export const Students: React.FC = () => {
    useChangeDocumentTitle('Liste des étudiants');
    const {t} = useTranslation();
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
    const [openModalImport, setOpenModalImport] = useState(false);
    const [openModalExport, setOpenModalExport] = useState(false);

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
    const handleCloseImportStudent = () => {
        setOpenModalImport(false);
    }
    const handleCloseExportStudent = () => {
        setOpenModalExport(false);
    }

    return (<>
        <Stack spacing={3}>
            <HeaderStudentPage handleOpenImportStudent={() => setOpenModalImport(true)}
                               handleOpenExportStudent={() => setOpenModalExport(true)}/>
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

        {openModalImport && (<CustomModal isOpen={openModalImport} onClose={handleCloseImportStudent} size={"large"} title={t('student.import_student')}>
            <ImportStudentsModal onClose={handleCloseImportStudent} />
        </CustomModal>)}

        {openModalExport && (<CustomModal isOpen={openModalExport} onClose={handleCloseExportStudent} size={"medium"} title={t('student.export_student')}>
            <ExportStudentModal onClose={handleCloseExportStudent}  />
        </CustomModal>)}
        <Toaster />
    </>)
}