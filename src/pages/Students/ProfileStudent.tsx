import React, {FC, SyntheticEvent, useState,useEffect} from 'react';
import {Avatar, Box, Button, Stack, Tab, Tabs, Typography} from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import {Invoices} from "@/pages/Students/components/tabs/Invoices.tsx";
import {Details} from "@/pages/Students/components/tabs/Details.tsx";
import {Schedule} from "@/pages/Students/components/tabs/Schedule.tsx";
import {NotesAndRatings} from "@/pages/Students/components/tabs/NotesAndRatings.tsx";
import {AttendanceTracking} from "@/pages/Students/components/tabs/AttendanceTracking.tsx";
import {InternshipsAndProjects} from "@/pages/Students/components/tabs/InternshipsAndProjects.tsx";
import ActionsMenu from "@/pages/Students/components/ActionsMenu.tsx";
import {useParams, useNavigate, useLoaderData} from 'react-router-dom';
import {useChangeDocumentTitle} from "@/hooks/use-change-document-title.ts";
import {Student} from "@/types/Student.ts";

const tabs = [
    {
        value: 0,
        label: 'Détails du profil',
        component: <Details/>,
    },
    {
        value: 1,
        label: 'Factures et paiements',
        component: <Invoices/>,
    },
    {
        value: 2,
        label: 'Emploi du temps',
        component: <Schedule/>,
    },
    {
        value: 3,
        label: 'Notes et Évaluations',
        component: <NotesAndRatings/>,
    },
    {
        value: 4,
        label: 'Suivi de la présence',
        component: <AttendanceTracking/>,
    },
    {
        value: 5,
        label: 'Stages et Projets',
        component: <InternshipsAndProjects/>,
    },
];
export const ProfileStudent: FC = () => {
    useChangeDocumentTitle('Profil de l\'étudiant');
    const [value, setValue] = useState(tabs[0].value);
    const { id } = useParams();
    const navigate = useNavigate();
    const student = useLoaderData() as Student;

    useEffect(() => {
        if (!/\d+/.test(id as string)) {
            navigate(-1);
        }
    }, [id, navigate]);

    const handleChange = (_: SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (<>
        <Stack
            direction="row"
            justifyContent="space-between"
            spacing={4}>
            <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={2}>
                <Avatar
                    alt={student?.first_name}
                    src={student?.avatar}
                    sx={{width: 64, height: 64}}
                />
                <Stack direction="column">
                    <Typography variant="h4">
                        {student?.first_name} {student?.last_name}
                    </Typography>
                    <Typography variant="body1">
                        1ère année
                    </Typography>
                </Stack>
            </Stack>
            <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={3}>
                <Button role={'button'} variant="text" startIcon={<EditOutlinedIcon/>}>
                    Modifier
                </Button>
                <ActionsMenu/>
            </Stack>
        </Stack>
        <Box sx={{width: '100%'}}>
            <Tabs
                value={value}
                onChange={handleChange}
                textColor="primary"
                indicatorColor="primary"
                aria-label="secondary tabs example"
            >
                {tabs.map((tab, index) => (
                    <Tab key={index} value={tab.value} label={tab.label}/>
                ))}
            </Tabs>
            <Box sx={{width: '100%', py: 2}}>
                {tabs.map((tab, index) => {
                    if (tab.value === value) {
                        return <React.Fragment key={index}>{tab.component}</React.Fragment>
                    }
                    return null;
                })}
            </Box>
        </Box>
    </>)
}