import {FC, FormEvent, useState} from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import {
    Button,
    Card,
    CardActions, CardContent,
    CardHeader,
    Divider,
    List,
    ListItem,
    ListItemText,
    Stack,
    Typography
} from "@mui/material";
import {useLoaderDataStudent} from "@/hooks/use-loader-data-student.ts";
import React from 'react';
import {useTranslation} from "react-i18next";
import ConfirmDialog from "@/components/ConfirmDialog.tsx";
import {useFetcher} from "react-router-dom";
import {DeleteIcon} from "@/components/svg/SvgIcon/DeleteIcon.tsx";

export const Details: FC = () => {
    const student = useLoaderDataStudent();
    return (<Grid container spacing={{xs: 2, md: 3}} columns={{xs: 4, sm: 8, md: 12}}>
        <Grid xs={4}>
            <Card variant="elevation" elevation={2} square>
                <CardHeader title={"Information personnelle"}/>
                <List>
                    <ListItem>
                        <ListItemText
                            primary={<>
                                <Typography
                                    sx={{display: 'inline', fontWeight: 'bold'}}
                                    component="span"
                                    variant="body1"
                                    color="text.primary"
                                >
                                    Email
                                </Typography>
                            </>}
                            secondary={<>
                                <Typography
                                    sx={{display: 'inline'}}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    {student.email}
                                </Typography>
                            </>}
                        />
                    </ListItem>
                    <Divider/>
                    <ListItem alignItems="flex-start">
                        <ListItemText
                            primary={<>
                                <Typography
                                    sx={{display: 'inline', fontWeight: 'bold'}}
                                    component="span"
                                    variant="body1"
                                    color="text.primary"
                                >
                                    Phone
                                </Typography>
                            </>}
                            secondary={<>
                                <Typography
                                    sx={{display: 'inline'}}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    {student.number_phones?.map((phone, index) => {
                                        return <React.Fragment key={index}>{phone.number_phone}<br/></React.Fragment>
                                    })}
                                </Typography>
                            </>}
                        />
                    </ListItem>
                    <Divider/>
                    <ListItem>
                        <ListItemText
                            primary={<>
                                <Typography
                                    sx={{display: 'inline', fontWeight: 'bold'}}
                                    component="span"
                                    variant="body1"
                                    color="text.primary"
                                >
                                    Address
                                </Typography>
                            </>}
                            secondary={<>
                                <Typography
                                    sx={{display: 'inline'}}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    {student.addresses?.map((address, index) => {
                                        return <React.Fragment key={index}>
                                            {address.street} {address.number}, {address.zip_code} {address.city}, {address.country}
                                            <Divider/><br/></React.Fragment>
                                    })}
                                </Typography>
                            </>}
                        />
                    </ListItem>
                </List>
            </Card>
        </Grid>
        <Grid xs={8}>
            <Stack spacing={2} direction={"column"}>
                <Card variant="elevation" elevation={2} square>
                    <CardHeader title={"Mode de paiement"}/>
                    <CardActions>
                        <Button variant={'outlined'} size="small">Create new payment method</Button>
                    </CardActions>
                </Card>
                <DeleteStudent/>
            </Stack>
        </Grid>
    </Grid>);
};

const DeleteStudent: FC = () => {
    const fetcher = useFetcher();
    const student = useLoaderDataStudent();
    const {t} = useTranslation();
    const [open, setOpen] = useState(false);
    const [studentToDelete, setStudentToDelete] = useState<number>(0);

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
        <Card variant="elevation" elevation={2} square>
            <CardHeader title={"Suppression des information personnelles"}/>
            <CardContent>
                <Button color={'error'} variant={'outlined'} size="small"
                        aria-label={t('utils.delete')}
                        name={"ids"} value={Number(student.id)} type="submit"
                        onClick={(e) => handleDeleteItem(e, Number(student.id))}
                        startIcon={<DeleteIcon color={"error"} aria-label={t('utils.delete')}/>}>
                    Delete student
                </Button>
                <Typography variant={'body2'} color={'text.secondary'} sx={{pt:2}}>
                    Supprimez l'ensemble des informations personnelles de l'étudiant.
                </Typography>
            </CardContent>
        </Card>
    </>);
}