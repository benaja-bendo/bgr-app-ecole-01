import React from "react";
import {Details} from "@/pages/Students/components/tabs/Details.tsx";
import {Invoices} from "@/pages/Students/components/tabs/Invoices.tsx";
import {Schedule} from "@/pages/Students/components/tabs/Schedule.tsx";
import {Notes} from "@/pages/Students/components/tabs/Notes.tsx";
import {ReportCard} from "@/pages/Students/components/tabs/ReportCard.tsx";

export const TabConfig = [
    {
        value: 0,
        label: 'Informations générales',
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
        label: 'Notes et évaluations',
        component: <Notes/>,
    },
    {
        value: 4,
        label: 'Rapport de notes',
        component: <ReportCard/>,
    },
    // {
    //     value: 4,
    //     label: 'Suivi de la présence',
    //     component: <AttendanceTracking/>,
    // },
    // {
    //     value: 5,
    //     label: 'Stages et Projects',
    //     component: <InternshipsAndProjects/>,
    // },
];