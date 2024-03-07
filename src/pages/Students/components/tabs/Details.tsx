import {FC} from 'react';
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
                <Card variant="elevation" elevation={2} square>
                    <CardHeader title={"Suppression des information personnelles"}/>
                    <CardContent>
                        <Button color={'error'} variant={'outlined'} size="small">Delete student</Button>
                        <Typography variant={'body2'} color={'text.secondary'} sx={{pt:2}}>
                            Supprimez l'ensemble des informations personnelles de l'étudiant.
                        </Typography>
                    </CardContent>
                </Card>
            </Stack>
        </Grid>
    </Grid>);
};