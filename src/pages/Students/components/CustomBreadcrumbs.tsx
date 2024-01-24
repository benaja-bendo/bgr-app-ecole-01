import {Link, useLocation} from "react-router-dom";
import {Breadcrumbs} from "@mui/material";
import React from "react";

export default function CustomBreadcrumbs() {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
    }

    return (<div role="presentation" onClick={handleClick}>
        <Breadcrumbs aria-label="breadcrumb" separator="›" maxItems={3}>
            <Link color="inherit" to="/">
                Home
            </Link>
            {pathnames.map((value, index) => {
                const last = index === pathnames.length - 1;
                const to = `/${pathnames.slice(0, index + 1).join('/')}`;

                return last ? (
                    <Link color="inherit" to={to} key={to}>
                        {value}
                    </Link>
                ) : null;
            })}
        </Breadcrumbs>
    </div>);
}
