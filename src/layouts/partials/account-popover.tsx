import React from 'react';
import {Box, Divider, MenuItem, MenuList, Popover, Typography} from '@mui/material';

interface AccountPopoverProps {
    anchorEl: Element | null;
    onClose: () => void;
    open: boolean;
}

export const AccountPopover: React.FC<AccountPopoverProps> = ({anchorEl, onClose, open}) => {
    const handleSignOut = () => {
        console.log('sign out');
    };

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
            <Box sx={{py: 1.5, px: 2}}>
                <Typography variant="overline">Account</Typography>
                <Typography color="text.secondary" variant="body2">
                    Anika Visser
                </Typography>
            </Box>
            <Divider/>
            <MenuList
                disablePadding
                dense
                sx={{
                    p: '8px',
                    '& > *': {
                        borderRadius: 1
                    }
                }}
            >
                <MenuItem onClick={handleSignOut}>Sign out</MenuItem>
            </MenuList>
        </Popover>
    );
};
