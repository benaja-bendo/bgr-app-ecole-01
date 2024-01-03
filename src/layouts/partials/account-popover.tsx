import React from 'react';
import {Box, Button, Divider, Popover, Typography} from '@mui/material';
import {useFetcher} from "react-router-dom";

interface AccountPopoverProps {
    anchorEl: Element | null;
    onClose: () => void;
    open: boolean;
}

export const AccountPopover: React.FC<AccountPopoverProps> = ({anchorEl, onClose, open}) => {
    const fetcher = useFetcher();

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
            <fetcher.Form method="post" action={`/auth/logout`}>
                <Button type={"submit"}
                        fullWidth={true}
                        sx={{
                            p: '8px',
                            '& > *': {
                                borderRadius: 1
                            }
                        }}>
                    Sign out
                </Button>
            </fetcher.Form>
        </Popover>
    );
};
