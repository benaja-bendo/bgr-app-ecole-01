import React from 'react';
import BellIcon from '@heroicons/react/24/solid/BellIcon';
import Bars3Icon from '@heroicons/react/24/solid/Bars3Icon';
import MagnifyingGlassIcon from '@heroicons/react/24/solid/MagnifyingGlassIcon';
import {
    Avatar,
    Badge,
    Box,
    IconButton,
    Stack,
    SvgIcon,
    InputAdornment,
    OutlinedInput,
    Tooltip,
    useMediaQuery,
    Theme,
} from '@mui/material';
import {alpha} from '@mui/material/styles';
import {usePopover} from '@/hooks/use-popover';
import {AccountPopover} from '@/layouts/partials/account-popover';
import {UsersIcon} from "@heroicons/react/24/solid";

const SIDE_NAV_WIDTH = 280;
const TOP_NAV_HEIGHT = 64;

type TopNavProps = {
    onNavOpen?: () => void;
}

export const TopNav: React.FC<TopNavProps> = ({onNavOpen}) => {
    const lgUp: boolean = useMediaQuery<Theme>((theme: Theme) => theme.breakpoints.up('lg'));
    const accountPopover = usePopover();

    return (
        <>
            <Box
                component="header"
                sx={{
                    backdropFilter: 'blur(6px)',
                    backgroundColor: (theme) => alpha(theme.palette.background.default, 0.8),
                    position: 'sticky',
                    left: {
                        lg: `${SIDE_NAV_WIDTH}px`
                    },
                    top: 0,
                    width: {
                        lg: `calc(100% - ${SIDE_NAV_WIDTH}px)`
                    },
                    zIndex: (theme) => theme.zIndex.appBar,
                    borderBottom: (theme) => `1px solid ${theme.palette.divider}`
                }}
            >
                <Stack
                    alignItems="center"
                    direction="row"
                    justifyContent="space-between"
                    spacing={2}
                    sx={{
                        minHeight: TOP_NAV_HEIGHT,
                        px: 2
                    }}
                >
                    <Stack
                        alignItems="center"
                        direction="row"
                        spacing={2}
                    >
                        {!lgUp && (
                            <IconButton onClick={onNavOpen}>
                                <SvgIcon fontSize="small">
                                    <Bars3Icon/>
                                </SvgIcon>
                            </IconButton>
                        )}
                        <OutlinedInput
                            defaultValue=""
                            fullWidth
                            placeholder="Search for a page"
                            startAdornment={(
                                <InputAdornment position="start">
                                    <SvgIcon
                                        color="action"
                                        fontSize="small"
                                    >
                                        <MagnifyingGlassIcon />
                                    </SvgIcon>
                                </InputAdornment>
                            )}
                            sx={{ maxWidth: 500,height: '40px', padding: '10px'}}
                        />
                    </Stack>
                    <Stack
                        alignItems="center"
                        direction="row"
                        spacing={2}
                    >
                        <Tooltip title="utilisateurs en ligne">
                            <IconButton>
                                <SvgIcon fontSize="small">
                                    <UsersIcon/>
                                </SvgIcon>
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Notifications">
                            <IconButton>
                                <Badge
                                    badgeContent={4}
                                    color="success"
                                    variant="dot"
                                >
                                    <SvgIcon fontSize="small">
                                        <BellIcon/>
                                    </SvgIcon>
                                </Badge>
                            </IconButton>
                        </Tooltip>
                        <Avatar
                            onClick={accountPopover.handleOpen}
                            ref={accountPopover.anchorRef}
                            sx={{
                                cursor: 'pointer',
                                height: 40,
                                width: 40
                            }}
                            src="https://www.gravatar.com/avatar/78e731027d8fd50ed642340b7c9a63b3"
                        />
                    </Stack>
                </Stack>
            </Box>
            <AccountPopover
                anchorEl={accountPopover.anchorRef.current}
                open={accountPopover.open}
                onClose={accountPopover.handleClose}
            />
        </>
    );
}