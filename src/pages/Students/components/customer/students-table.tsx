import {FC, MouseEvent, ChangeEvent, useState, FormEvent} from 'react';
import {format} from 'date-fns';
import {
    Avatar,
    Box,
    Button,
    Checkbox, IconButton,
    Stack,
    Table,
    TableBody,
    TableCell, TableContainer,
    TableHead,
    TablePagination,
    TableRow, Tooltip,
    Typography
} from '@mui/material';
import {getInitials} from '@/utils/get-initials';
import {Student} from "@/types/Student.ts";
import {Form, Link, useFetcher} from "react-router-dom";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import {DeleteIcon} from "@/components/svg/SvgIcon/DeleteIcon.tsx";
import {useTranslation} from "react-i18next";
import {AccountIcon} from "@/components/svg/SvgIcon/AccountIcon.tsx";
import ConfirmDialog from "@/components/ConfirmDialog.tsx";


type StudentsTableProps<T = unknown> = {
    count?: number;
    students?: T[];
    onDeselectAll?: () => void;
    onDeselectOne?: (id: string) => void;
    onPageChange?: (event: MouseEvent<HTMLButtonElement> | null, page: number) => void;
    onRowsPerPageChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    onSelectAll?: () => void;
    onSelectOne?: (id: string) => void;
    page?: number;
    rowsPerPage?: number;
    selected?: string[];
}

export const StudentsTable: FC<StudentsTableProps<Student>> = (props) => {
    const {
        count = 0,
        students = [],
        onDeselectAll,
        onDeselectOne,
        onPageChange = () => {
        },
        onRowsPerPageChange,
        onSelectAll,
        onSelectOne,
        page = 0,
        rowsPerPage = 0,
        selected = []
    } = props;

    const [open, setOpen] = useState(false);
    const [studentToDelete, setStudentToDelete] = useState<number>(0);
    const fetcher = useFetcher();
    const {t} = useTranslation();
    const selectedSome = (selected.length > 0) && (selected.length < students.length);
    const selectedAll = (students.length > 0) && (selected.length === students.length);
    const handleDeleteItem = (e: FormEvent, id: number) => {
        e.preventDefault();
        if (id === 0) return
        setOpen(true);
        setStudentToDelete(id);
    }
    const handleConfirmDelete = async () => {
        fetcher.submit({ids: studentToDelete}, {
            action: `/students`,
            method: 'delete',
        });
    }
    return (<>
        <ConfirmDialog
            title="Supprimer l'étudiant"
            open={open}
            setOpen={setOpen}
            onConfirm={handleConfirmDelete}
        >
            Êtes-vous sûr de vouloir supprimer cet étudiant ?
        </ConfirmDialog>
        <Box sx={{minWidth: 800}}>
            <TableContainer style={{maxWidth: '100%', overflowX: 'auto'}}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell padding="checkbox">
                                <Checkbox
                                    checked={selectedAll}
                                    indeterminate={selectedSome}
                                    onChange={(event) => {
                                        if (event.target.checked) {
                                            onSelectAll?.();
                                        } else {
                                            onDeselectAll?.();
                                        }
                                    }}
                                />
                            </TableCell>
                            {selected.length > 0 ? (<TableCellHasSelected selected={selected}/>) : (
                                <TableCellHasNotSelected/>)}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {students.map((student) => {
                            const isSelected = selected.includes(student.id);
                            const createdAt = format(student.created_at, 'dd/MM/yyyy');

                            return (
                                <TableRow
                                    hover
                                    key={student.id}
                                    selected={isSelected}
                                >
                                    <TableCell padding="checkbox">
                                        <Checkbox
                                            checked={isSelected}
                                            onChange={(event) => {
                                                if (event.target.checked) {
                                                    onSelectOne?.(student.id);
                                                } else {
                                                    onDeselectOne?.(student.id);
                                                }
                                            }}
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <Stack
                                            alignItems="center"
                                            direction="row"
                                            spacing={2}
                                        >
                                            <Avatar src={student.avatar}>
                                                {getInitials(student.last_name)}
                                            </Avatar>
                                            <Link to={`/students/${student.id}`}>
                                                <Typography variant="subtitle2">
                                                    {student.last_name} {student.first_name}
                                                </Typography>
                                            </Link>
                                        </Stack>
                                    </TableCell>
                                    <TableCell>
                                        {student.email}
                                    </TableCell>
                                    <TableCell>
                                        {student.addresses && student.addresses.length > 0
                                            ? `${student.addresses[0].city}, ${student.addresses[0].street}, ${student.addresses[0].country}`
                                            : 'N/A'}
                                    </TableCell>
                                    <TableCell>
                                        {student.number_phones && student.number_phones.length > 0
                                            ? student.number_phones[0].number_phone
                                            : 'N/A'}
                                    </TableCell>
                                    <TableCell>
                                        {createdAt}
                                    </TableCell>
                                    <TableCell>
                                        <Stack alignItems="center"
                                               direction="row"
                                               spacing={2}>
                                            <Tooltip title={t('utils.edit')}>
                                                <Link to={`/students/${student.id}/edit`}>
                                                    <IconButton aria-label={t('utils.edit')}>
                                                        <EditOutlinedIcon color={"info"} aria-label={t('utils.edit')}/>
                                                    </IconButton>
                                                </Link>
                                            </Tooltip>
                                            <Tooltip title={t('utils.delete')}>
                                                <IconButton aria-label={t('utils.delete')}
                                                            name={"ids"} value={Number(student.id)} type="submit"
                                                            onClick={(e) => handleDeleteItem(e, Number(student.id))}>
                                                    <DeleteIcon color={"error"} aria-label={t('utils.delete')}/>
                                                </IconButton>
                                            </Tooltip>
                                            <Tooltip title={t('utils.profile')}>
                                                <Link to={`/students/${student.id}`}>
                                                    <IconButton aria-label={t('utils.profile')}>
                                                        <AccountIcon color={"info"} aria-label={t('utils.profile')}/>
                                                    </IconButton>
                                                </Link>
                                            </Tooltip>
                                        </Stack>
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
        <TablePagination
            component="div"
            count={count}
            onPageChange={onPageChange}
            onRowsPerPageChange={onRowsPerPageChange}
            page={page}
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={[5, 10, 25]}
        />
    </>);
}

function TableCellHasNotSelected() {
    return (<>
        <TableCell>
            Name
        </TableCell>
        <TableCell>
            Email
        </TableCell>
        <TableCell>
            Location
        </TableCell>
        <TableCell>
            Phone
        </TableCell>
        <TableCell>
            Signed Up
        </TableCell>
        <TableCell>
            Actions
        </TableCell>
    </>);
}

function TableCellHasSelected({selected}: { selected: string[] }) {
    const [open, setOpen] = useState(false);
    const fetcher = useFetcher();
    const method = selected.length == 1 ? 'delete' : 'post';

    const handleDeleteItem = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setOpen(true);
    }

    const handleConfirmDelete = () => {
        fetcher.submit({ids: selected}, {
            action: `/students`,
            method: method,
        });
        setOpen(false);
    }

    return (
        <>
            <ConfirmDialog
                title="Supprimer l'étudiant"
                open={open}
                setOpen={setOpen}
                onConfirm={handleConfirmDelete}
            >
                Êtes-vous sûr de vouloir supprimer ces étudiants ?
            </ConfirmDialog>
            <TableCell>
                <Box sx={{display: 'block'}}>
                    <Form method={method} action={"/students"} onSubmit={handleDeleteItem}>
                        <Button name={"ids"} value={selected} type="submit">Delete</Button>
                    </Form>
                </Box>
            </TableCell>
        </>
    );
}