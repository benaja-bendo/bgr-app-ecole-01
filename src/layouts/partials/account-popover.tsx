import React from 'react';
import {
    Avatar,
    Button,
    Divider, Link,
    Popover,
    Stack,
    Typography
} from '@mui/material';
import {useFetcher} from "react-router-dom";
import {useCurrentUser} from "@/hooks/use-current-user.ts";

interface AccountPopoverProps {
    anchorEl: Element | null;
    onClose: () => void;
    open: boolean;
}

export const AccountPopover: React.FC<AccountPopoverProps> = ({anchorEl, onClose, open}) => {
    const {currentUser} = useCurrentUser();
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
            <Stack spacing={1} sx={{width: 200, p: 2}}>
                <Stack direction="row" spacing={1} alignItems={"center"}>
                    <Avatar alt="Remy Sharp" src={currentUser?.avatar}/>
                    <Link href="/account">
                        <Typography variant="body2">
                            {currentUser?.first_name} {currentUser?.last_name}
                        </Typography>
                    </Link>
                </Stack>
                <Divider/>
                <fetcher.Form method="post" action={`/auth/logout`}>
                    <Button type={"submit"} fullWidth>
                        Sign out
                    </Button>
                </fetcher.Form>
            </Stack>
        </Popover>
    );
};
