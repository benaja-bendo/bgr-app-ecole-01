import React from 'react';
import {Link,useLocation} from "react-router-dom";
import {
    Box,
    Divider,
    Drawer,
    Stack,
    useMediaQuery,
    Theme
} from '@mui/material';
import {Logo} from '@/components/svg/logo';
import {Scrollbar} from '@/layouts/partials/scrollbar';
import {items} from '@/layouts/partials/config';
import {SideNavItem} from '@/layouts/partials/side-nav-item';
import {NavItem} from "@/types/NavItem";
import {WithRole} from "@/components/WithRole.tsx";

type SideNavProps = {
    onClose?: () => void;
    open?: boolean;
    auth?: {
        user: {
            data: {
                fullName: string;
            };
        };
    };
}
export const SideNav: React.FC<SideNavProps> = ({onClose, open}) => {
    const location = useLocation();
    const lgUp = useMediaQuery<Theme>((theme: Theme) => theme.breakpoints.up('lg'));

    const content = (
        <Scrollbar
            sx={{
                height: '100%',
                '& .simplebar-content': {
                    height: '100%'
                },
                '& .simplebar-scrollbar:before': {
                    background: 'neutral.400'
                }
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%'
                }}
            >
                <Box sx={{p: 3}}>
                    <Box
                        component={Link}
                        sx={{
                            display: 'inline-flex',
                            height: 45,
                            width: 45
                        }}
                    >
                        <Logo/>
                    </Box>
                </Box>
                <Divider sx={{borderColor: 'neutral.700'}}/>
                <Box
                    component="nav"
                    sx={{
                        flexGrow: 1,
                        px: 2,
                        py: 3
                    }}
                >
                    <Stack
                        component="ul"
                        spacing={0.5}
                        sx={{
                            listStyle: 'none',
                            p: 0,
                            m: 0
                        }}
                    >
                        {items.map((item: NavItem) => {
                            if(typeof item.role === 'undefined' || item.role.length === 0) return null;
                            return (
                                <WithRole role={item.role} key={item.title}>
                                    <SideNavItem
                                        active={location.pathname === item.path}
                                        disabled={item.disabled}
                                        external={item.external}
                                        icon={item.icon}
                                        key={item.title}
                                        path={item.path}
                                        title={item.title}
                                    />
                                </WithRole>
                            );
                        })}
                    </Stack>
                </Box>
                <Divider sx={{borderColor: 'neutral.700'}}/>
            </Box>
        </Scrollbar>
    );

    if (lgUp) {
        return (
            <Drawer
                anchor="left"
                open
                PaperProps={{
                    sx: {
                        backgroundColor: 'neutral.800',
                        color: 'common.white',
                        width: 280
                    }
                }}
                variant="permanent"
            >
                {content}
            </Drawer>
        );
    }

    return (
        <Drawer
            anchor="left"
            onClose={onClose}
            open={open}
            PaperProps={{
                sx: {
                    backgroundColor: 'neutral.800',
                    color: 'common.white',
                    width: 280
                }
            }}
            sx={{zIndex: (theme) => theme.zIndex.appBar + 100}}
            variant="temporary"
        >
            {content}
        </Drawer>
    );
};
