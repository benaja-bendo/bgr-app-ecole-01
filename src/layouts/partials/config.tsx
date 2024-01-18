import {SvgIcon} from "@mui/material";
import DashboardIcon from '@mui/icons-material/Dashboard';
import {NavItem} from "@/types/NavItem";
import TeacherIcon from "@/components/svg/TeacherIcon.tsx";
import StudentIcon from "@/components/svg/StudentIcon.tsx";

export const items: NavItem[] = [
    {
        title: 'Dashboard',
        path: '/',
        icon: (
            <SvgIcon fontSize="small">
                <DashboardIcon />
            </SvgIcon>
        ),
        active: true,
        disabled: false,
        external: false,
        role: ['root','student', 'teacher', 'admin_school'],
    },
    {
        title: 'Gestion des étudiants',
        path: '/students',
        icon: (
            <SvgIcon fontSize="small">
                <StudentIcon />
            </SvgIcon>
        ),
        active: false,
        disabled: false,
        external: false,
        role: ['root','admin_school'],
    },
    {
        title: 'Gestion des professeurs',
        path: '/teachers',
        icon: (
            <SvgIcon fontSize="small">
                <TeacherIcon />
            </SvgIcon>
        ),
        active: false,
        disabled: false,
        external: false,
        role: ['root','admin_school'],
    },
];