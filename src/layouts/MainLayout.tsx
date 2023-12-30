import React, {useState} from 'react';
import {Outlet} from 'react-router-dom';
import {styled} from "@mui/system";
import {TopNav} from "@/layouts/partials/top-nav.tsx";
import {SideNav} from "@/layouts/partials/side-nav.tsx";

const SIDE_NAV_WIDTH = 280;

const LayoutRoot = styled('div')(({theme}) => ({
    display: 'flex',
    flex: '1 1 auto',
    maxWidth: '100%',
    [theme.breakpoints.up('lg')]: {
        paddingLeft: SIDE_NAV_WIDTH
    }
}));

const LayoutContainer = styled('div')({
    display: 'flex',
    flex: '1 1 auto',
    flexDirection: 'column',
    width: '100%'
});

export const MainLayout: React.FC = () => {
    const [openNav, setOpenNav] = useState(false);
    return (<>
        <TopNav onNavOpen={() => setOpenNav(true)}/>
        <SideNav
            onClose={() => setOpenNav(false)}
            open={openNav}
        />
        <LayoutRoot>
            <LayoutContainer>
                <Outlet/>
            </LayoutContainer>
        </LayoutRoot>
    </>);
}