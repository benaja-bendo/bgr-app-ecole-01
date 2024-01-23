import {FC, MouseEvent, ChangeEvent} from 'react';
import {format} from 'date-fns';
import {
    Avatar,
    Box,
    Button,
    Checkbox, IconButton,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TablePagination,
    TableRow, Tooltip,
    Typography
} from '@mui/material';
import {getInitials} from '@/utils/get-initials';
import {Student} from "@/types/Student.ts";
import {Form, Link} from "react-router-dom";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';


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
    const selectedSome = (selected.length > 0) && (selected.length < students.length);
    const selectedAll = (students.length > 0) && (selected.length === students.length);
    return (<>
        <Box sx={{minWidth: 800}}>
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
                                        <Typography variant="subtitle2">
                                            {student.last_name} {student.first_name}
                                        </Typography>
                                    </Stack>
                                </TableCell>
                                <TableCell>
                                    {student.email}
                                </TableCell>
                                <TableCell>
                                    {student.address.city}, {student.address.state}, {student.address.country}
                                </TableCell>
                                <TableCell>
                                    {student.phone.number}
                                </TableCell>
                                <TableCell>
                                    {createdAt}
                                </TableCell>
                                <TableCell>
                                    <Stack alignItems="center"
                                           direction="row"
                                           spacing={2}>
                                        <Tooltip title="modifier" >
                                        <Link to={`/students/${student.id}/edit`}>
                                            <IconButton aria-label="delete">
                                                <EditOutlinedIcon/>
                                            </IconButton>
                                        </Link>
                                        </Tooltip>
                                        <Tooltip title="profile">
                                        <Link to={`/students/${student.id}`}>
                                            <IconButton aria-label="delete">
                                                <EastOutlinedIcon/>
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
    const method = selected.length == 1 ? 'delete' : 'post';
    return (<TableCell>
        <Box sx={{display: 'block'}}>
            <Form method={method} action="/students">
                <Button name={"ids"} value={selected} type="submit">Delete</Button>
            </Form>
        </Box>
    </TableCell>);
}