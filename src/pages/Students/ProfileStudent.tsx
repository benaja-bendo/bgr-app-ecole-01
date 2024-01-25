import React, {FC, SyntheticEvent, useState} from 'react';
import {Avatar, Box, Button, Stack, Tab, Tabs, Typography} from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import {Invoices} from "@/pages/Students/components/tabs/Invoices.tsx";
import {Details} from "@/pages/Students/components/tabs/Details.tsx";
import {Schedule} from "@/pages/Students/components/tabs/Schedule.tsx";
import {NotesAndRatings} from "@/pages/Students/components/tabs/NotesAndRatings.tsx";
import {AttendanceTracking} from "@/pages/Students/components/tabs/AttendanceTracking.tsx";
import {InternshipsAndProjects} from "@/pages/Students/components/tabs/InternshipsAndProjects.tsx";
import ActionsMenu from "@/pages/Students/components/ActionsMenu.tsx";

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
    const [value, setValue] = useState(tabs[0].value);

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
                    alt="Name student"
                    src="https://api.dicebear.com/7.x/adventurer/svg?seed=Simon"
                    sx={{width: 64, height: 64}}
                />
                <Stack direction="column">
                    <Typography variant="h4">
                        Simon - 123456
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