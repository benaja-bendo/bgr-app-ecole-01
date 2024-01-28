import  {FC} from 'react';
import {
    Box,
    Card,
    Chip,
    IconButton, Pagination,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";

export const Invoices: FC = () => {
    return (
        <Card>
            <Box sx={{ p: 2 }}>
                <Typography variant={"h5"}>Invoices</Typography>
            </Box>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            Invoice Number
                        </TableCell>
                        <TableCell>
                            Date
                        </TableCell>
                        <TableCell>
                            Amount
                        </TableCell>
                        <TableCell>
                            Status
                        </TableCell>
                        <TableCell>
                            Actions
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>
                            #528651571NT
                        </TableCell>
                        <TableCell>
                            16/03/2021
                        </TableCell>
                        <TableCell>
                            $ 500.00
                        </TableCell>
                        <TableCell>
                            <Chip label="Paid" color="success" variant={'outlined'}/>
                        </TableCell>
                        <TableCell>
                            <IconButton aria-label="view">
                                <EastOutlinedIcon/>
                            </IconButton>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            <Stack direction="row" spacing={2} justifyContent="flex-end" sx={{ p: 2}}>
                <Pagination count={5} variant="outlined" shape="rounded" />
            </Stack>
        </Card>
    );
};