import React from "react";
import {Details} from "@/pages/Students/components/tabs/Details.tsx";
import {Invoices} from "@/pages/Students/components/tabs/Invoices.tsx";
import {Schedule} from "@/pages/Students/components/tabs/Schedule.tsx";
import {NotesAndRatings} from "@/pages/Students/components/tabs/NotesAndRatings.tsx";
import {AttendanceTracking} from "@/pages/Students/components/tabs/AttendanceTracking.tsx";
import {InternshipsAndProjects} from "@/pages/Students/components/tabs/InternshipsAndProjects.tsx";

export const TabConfig = [
    {
        value: 0,
        label: 'Détails',
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