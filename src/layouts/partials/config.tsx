import {SvgIcon} from "@mui/material";
import {UsersIcon} from "@heroicons/react/24/solid";
import DashboardIcon from '@mui/icons-material/Dashboard';
import {NavItem} from "@/types/NavItem";

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
    },
    {
        title: 'Customers',
        path: '/customers',
        icon: (
            <SvgIcon fontSize="small">
                <UsersIcon />
            </SvgIcon>
        ),
        active: false,
        disabled: false,
        external: false,
    },
];