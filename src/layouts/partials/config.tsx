import { SvgIcon } from "@mui/material";
import DashboardIcon from '@mui/icons-material/Dashboard';
import { NavItem } from "@/types/NavItem";
import TeacherIcon from "@/components/svg/TeacherIcon.tsx";
import StudentIcon from "@/components/svg/StudentIcon.tsx";
import {HomeIcon} from "@/components/svg/SvgIcon/HomeIcon.tsx";
import {ReportingIcon} from "@/components/svg/SvgIcon/ReportingIcon.tsx";
import {AgendaIcon} from "@/components/svg/SvgIcon/AgendaIcon.tsx";
import {PeopleIcon} from "@/components/svg/SvgIcon/PeopleIcon.tsx";
import {InvoiceIcon} from "@/components/svg/SvgIcon/InvoiceIcon.tsx";
import {SettingsIcon} from "@/components/svg/SvgIcon/SettingsIcon.tsx";

export const items: NavItem[] = [
    // for root
    {
        group: 'General',
        title: 'slide_bar.home',
        path: '/',
        icon: (
            <SvgIcon fontSize="small">
                <HomeIcon />
            </SvgIcon>
        ),
        active: true,
        disabled: false,
        external: false,
        role: ['root', 'student', 'teacher', 'admin_school'],
    },
    {
        group: 'General',
        title: 'slide_bar.dashboard',
        path: '/dashboard',
        icon: (
            <SvgIcon fontSize="small">
                <DashboardIcon />
            </SvgIcon>
        ),
        active: false,
        disabled: false,
        external: false,
        role: ['root', 'student', 'teacher', 'admin_school'],
    },
    {
        group: 'General',
        title: 'slide_bar.reporting',
        path: '/reporting',
        icon: (
            <SvgIcon fontSize="small">
                <ReportingIcon />
            </SvgIcon>
        ),
        active: false,
        disabled: false,
        external: false,
        role: ['root', 'student', 'teacher', 'admin_school'],
    },
    {
        group: 'General',
        title: 'slide_bar.agenda',
        path: '/agenda',
        icon: (
            <SvgIcon fontSize="small">
                <AgendaIcon />
            </SvgIcon>
        ),
        active: false,
        disabled: false,
        external: false,
        role: ['root', 'student', 'teacher', 'admin_school'],
    },
    {
        group: 'User Management',
        title: 'slide_bar.student_management',
        path: '/students',
        icon: (
            <SvgIcon fontSize="small">
                <StudentIcon />
            </SvgIcon>
        ),
        active: false,
        disabled: false,
        external: false,
        role: ['root', 'admin_school'],
    },
    {
        group: 'User Management',
        title: 'slide_bar.teacher_management',
        path: '/teachers',
        icon: (
            <SvgIcon fontSize="small">
                <TeacherIcon />
            </SvgIcon>
        ),
        active: false,
        disabled: false,
        external: false,
        role: ['root', 'admin_school'],
    },
    {
        group: 'User Management',
        title: 'slide_bar.admin_management',
        path: '/admins',
        icon: (
            <SvgIcon fontSize="small">
                <PeopleIcon />
            </SvgIcon>
        ),
        active: false,
        disabled: false,
        external: false,
        role: ['root', 'admin_school'],
    },
    {
        group: 'Financial',
        title: 'slide_bar.invoice',
        path: '/invoice',
        icon: (
            <SvgIcon fontSize="small">
                <InvoiceIcon />
            </SvgIcon>
        ),
        active: false,
        disabled: false,
        external: false,
        role: ['root', 'admin_school'],
    },
    {
        group: 'Settings',
        title: 'slide_bar.settings',
        path: '/settings',
        icon: (
            <SvgIcon fontSize="small">
                <SettingsIcon />
            </SvgIcon>
        ),
        active: false,
        disabled: false,
        external: false,
        role: ['root', 'admin_school'],
    },


    // for admin_school
    // ...
    // for student
    // ...
    // for teacher
    // ...
    // for parent
    // ...
    // for guest
];