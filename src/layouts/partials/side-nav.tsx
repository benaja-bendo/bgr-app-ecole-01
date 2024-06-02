import React from 'react';
import { useLocation } from "react-router-dom";
import { Box, Divider, Drawer, Stack, useMediaQuery, Theme, Typography } from '@mui/material';
import { Scrollbar } from '@/layouts/partials/scrollbar';
import { items } from '@/layouts/partials/config';
import { SideNavItem } from '@/layouts/partials/side-nav-item';
import { useTranslation } from 'react-i18next';
import {NavItem} from "@/types/NavItem.ts";

type SideNavProps = {
    onClose?: () => void;
    open?: boolean;
}

export const SideNav: React.FC<SideNavProps> = ({ onClose, open }) => {
    const { t } = useTranslation();
    const location = useLocation();
    const lgUp = useMediaQuery<Theme>((theme: Theme) => theme.breakpoints.up('lg'));

    const groupedItems = items.reduce<Record<string, NavItem[]>>((acc, item: NavItem) => {
        const group = item?.group;
        if (group) {
            if (!acc[group]) {
                acc[group] = [];
            }
            acc[group].push(item);
        }
        return acc;
    }, {});

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
                <Divider sx={{ borderColor: 'neutral.700' }} />
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
                        {Object.entries(groupedItems).map(([group, items]) => (
                            <React.Fragment key={group}>
                                <Typography variant="subtitle2" sx={{ color: 'neutral.500', px: 2, py: 1 }}>
                                    {group}
                                </Typography>
                                {items.map((item, index) => (
                                    <SideNavItem
                                        active={location.pathname === item.path}
                                        disabled={item.disabled}
                                        external={item.external}
                                        icon={item.icon}
                                        key={index}
                                        path={item.path}
                                        title={t(item.title)}
                                    />
                                ))}
                            </React.Fragment>
                        ))}
                    </Stack>
                </Box>
                <Divider sx={{ borderColor: 'neutral.700' }} />
            </Box>
        </Scrollbar>
    );

    return (
        <Drawer
            anchor="left"
            onClose={!lgUp ? onClose : undefined}
            open={lgUp || open}
            PaperProps={{
                sx: {
                    backgroundColor: 'neutral.800',
                    color: 'common.white',
                    width: 280
                }
            }}
            sx={!lgUp ? { zIndex: (theme) => theme.zIndex.appBar + 100 } : {}}
            variant={lgUp ? "permanent" : "temporary"}
        >
            {content}
        </Drawer>
    );
};