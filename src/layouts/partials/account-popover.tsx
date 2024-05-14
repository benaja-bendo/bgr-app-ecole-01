import React from 'react';
import {
    Avatar,
    Button,
    Divider,
    List, ListItem, ListItemButton, ListItemIcon, ListItemText,
    Popover,
    Stack,
    Typography
} from '@mui/material';
import {useFetcher,Link} from "react-router-dom";
import {useCurrentUser} from "@/hooks/use-current-user.ts";
import {SettingsIcon} from "@/components/svg/SvgIcon/SettingsIcon.tsx";
import {AccountIcon} from "@/components/svg/SvgIcon/AccountIcon.tsx";


interface AccountPopoverProps {
    anchorEl: Element | null;
    onClose: () => void;
    open: boolean;
}

export const AccountPopover: React.FC<AccountPopoverProps> = ({anchorEl, onClose, open}) => {
    const {currentUser} = useCurrentUser();

    return (
        <Popover
            anchorEl={anchorEl}
            anchorOrigin={{
                horizontal: 'left',
                vertical: 'bottom'
            }}
            onClose={onClose}
            open={open}
        >
            <Stack spacing={1} sx={{width: 200}}>
                <Stack direction="row" spacing={1} alignItems={"center"} justifyContent={"center"}>
                    <Avatar alt="User Avatar" src={currentUser?.avatar}/>
                    <Stack direction="column">
                        <Typography variant="caption">
                            {currentUser?.email}
                        </Typography>
                        <Typography variant="caption">
                            {currentUser?.first_name} {currentUser?.last_name}
                        </Typography>
                    </Stack>
                </Stack>
                <Divider/>
                <AccountActions/>
                <Divider/>
                <LogoutForm/>
            </Stack>
        </Popover>
    );
};

const AccountActions = () => {
    return (<List>
        <ListItem disablePadding>
            <ListItemButton component={Link} to="/profile">
                <ListItemIcon>
                    <AccountIcon />
                </ListItemIcon>
                <ListItemText primary="Profile"/>
            </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
            <ListItemButton component={Link} to="/settings">
                <ListItemIcon>
                    <SettingsIcon/>
                </ListItemIcon>
                <ListItemText primary="Parametre"/>
            </ListItemButton>
        </ListItem>
    </List>);
};

const LogoutForm = () => {
    const fetcher = useFetcher();
    return (
        <fetcher.Form method="post" action={`/auth/logout`}>
            <Button type="submit" fullWidth>
                Sign out
            </Button>
        </fetcher.Form>
    );
};