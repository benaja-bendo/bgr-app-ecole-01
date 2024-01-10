import React, {FormEvent, useCallback, useState} from "react";
import ArrowDownOnSquareIcon from '@heroicons/react/24/solid/ArrowDownOnSquareIcon';
import ArrowUpOnSquareIcon from '@heroicons/react/24/solid/ArrowUpOnSquareIcon';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import {Box, Button, Container, Stack, SvgIcon, TextField, Typography} from '@mui/material';
import {subDays, subHours} from 'date-fns';
import {CustomersTable} from '@/components/customer/customers-table.tsx';
import {CustomersSearch} from '@/components/customer/customers-search.tsx';
import {useSelection} from '@/hooks/use-selection.ts';
import {Customer} from "@/types/Customer.ts";
import ModalAddStudent from "@/components/ModalAddStudent.tsx";
import {useCustomers} from "@/hooks/use-customers.ts";
import {useCustomerIds} from "@/hooks/use-customer-ids.ts";

const now = new Date();

const data: Customer[] = [
    {
        id: '5e887ac47eed253091be10cb',
        address: {
            city: 'Cleveland',
            country: 'USA',
            state: 'Ohio',
            street: '2849 Fulton Street'
        },
        avatar: '/assets/avatars/avatar-carson-darrin.png',
        createdAt: subDays(subHours(now, 7), 1).getTime(),
        email: 'carson.darrin@devias.io',
        name: 'Carson Darrin',
        phone: '304-428-3097'
    },
    {
        id: '5e887b209c28ac3dd97f6db5',
        address: {
            city: 'Atlanta',
            country: 'USA',
            state: 'Georgia',
            street: '1865  Pleasant Hill Road'
        },
        avatar: '/assets/avatars/avatar-fran-perez.png',
        createdAt: subDays(subHours(now, 1), 2).getTime(),
        email: 'fran.perez@devias.io',
        name: 'Fran Perez',
        phone: '712-351-5711'
    },
    {
        id: '5e887b7602bdbc4dbb234b27',
        address: {
            city: 'North Canton',
            country: 'USA',
            state: 'Ohio',
            street: '4894  Lakeland Park Drive'
        },
        avatar: '/assets/avatars/avatar-jie-yan-song.png',
        createdAt: subDays(subHours(now, 4), 2).getTime(),
        email: 'jie.yan.song@devias.io',
        name: 'Jie Yan Song',
        phone: '770-635-2682'
    },
    {
        id: '5e86809283e28b96d2d38537',
        address: {
            city: 'Madrid',
            country: 'Spain',
            state: 'Anika Visser',
            street: '4158  Hedge Street'
        },
        avatar: '/assets/avatars/avatar-anika-visser.png',
        createdAt: subDays(subHours(now, 11), 2).getTime(),
        email: 'anika.visser@devias.io',
        name: 'Anika Visser',
        phone: '908-691-3242'
    },
    {
        id: '5e86805e2bafd54f66cc95c3',
        address: {
            city: 'San Diego',
            country: 'USA',
            state: 'California',
            street: '75247'
        },
        avatar: '/assets/avatars/avatar-miron-vitold.png',
        createdAt: subDays(subHours(now, 7), 3).getTime(),
        email: 'miron.vitold@devias.io',
        name: 'Miron Vitold',
        phone: '972-333-4106'
    },
    {
        id: '5e887a1fbefd7938eea9c981',
        address: {
            city: 'Berkeley',
            country: 'USA',
            state: 'California',
            street: '317 Angus Road'
        },
        avatar: '/assets/avatars/avatar-penjani-inyene.png',
        createdAt: subDays(subHours(now, 5), 4).getTime(),
        email: 'penjani.inyene@devias.io',
        name: 'Penjani Inyene',
        phone: '858-602-3409'
    },
    {
        id: '5e887d0b3d090c1b8f162003',
        address: {
            city: 'Carson City',
            country: 'USA',
            state: 'Nevada',
            street: '2188  Armbrester Drive'
        },
        avatar: '/assets/avatars/avatar-omar-darboe.png',
        createdAt: subDays(subHours(now, 15), 4).getTime(),
        email: 'omar.darobe@devias.io',
        name: 'Omar Darobe',
        phone: '415-907-2647'
    },
    {
        id: '5e88792be2d4cfb4bf0971d9',
        address: {
            city: 'Los Angeles',
            country: 'USA',
            state: 'California',
            street: '1798  Hickory Ridge Drive'
        },
        avatar: '/assets/avatars/avatar-siegbert-gottfried.png',
        createdAt: subDays(subHours(now, 2), 5).getTime(),
        email: 'siegbert.gottfried@devias.io',
        name: 'Siegbert Gottfried',
        phone: '702-661-1654'
    },
    {
        id: '5e8877da9a65442b11551975',
        address: {
            city: 'Murray',
            country: 'USA',
            state: 'Utah',
            street: '3934  Wildrose Lane'
        },
        avatar: '/assets/avatars/avatar-iulia-albu.png',
        createdAt: subDays(subHours(now, 8), 6).getTime(),
        email: 'iulia.albu@devias.io',
        name: 'Iulia Albu',
        phone: '313-812-8947'
    },
    {
        id: '5e8680e60cba5019c5ca6fda',
        address: {
            city: 'Salt Lake City',
            country: 'USA',
            state: 'Utah',
            street: '368 Lamberts Branch Road'
        },
        avatar: '/assets/avatars/avatar-nasimiyu-danai.png',
        createdAt: subDays(subHours(now, 1), 9).getTime(),
        email: 'nasimiyu.danai@devias.io',
        name: 'Nasimiyu Danai',
        phone: '801-301-7894'
    }
];

export const Students: React.FC = () => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const customers = useCustomers(data, page, rowsPerPage);
    const customersIds = useCustomerIds(customers);
    const customersSelection = useSelection(customersIds);
    const [openModalAddStudent, setOpenModalAddStudent] = useState(false);

    const handlePageChange = useCallback(
        (_: React.MouseEvent<HTMLButtonElement> | null, value: number) => {
            setPage(value);
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
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        console.log(e);
        handleCloseAddStudent();
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
                    <CustomersTable
                        count={data.length}
                        items={customers}
                        onDeselectAll={customersSelection.handleDeselectAll}
                        onDeselectOne={customersSelection.handleDeselectOne}
                        onPageChange={handlePageChange}
                        onRowsPerPageChange={handleRowsPerPageChange}
                        onSelectAll={customersSelection.handleSelectAll}
                        onSelectOne={customersSelection.handleSelectOne}
                        page={page}
                        rowsPerPage={rowsPerPage}
                        selected={customersSelection.selected}
                    />
                </Stack>
            </Container>
        </Box>
        {openModalAddStudent && (<ModalAddStudent isOpen={openModalAddStudent} onClose={handleCloseAddStudent}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                Text in a modal
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Nom"
                    type="text"
                    required
                    fullWidth
                />
                <TextField
                    label="Prénom"
                    type="text"
                    required
                    fullWidth
                />
                <TextField
                    label="Email"
                    type="email"
                    required
                    fullWidth
                />
                <button type="submit">Ajouter</button>
            </form>
        </ModalAddStudent>)}
    </>)
}