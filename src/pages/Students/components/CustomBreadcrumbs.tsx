import {FC} from "react";
import {Link} from "react-router-dom";
import {Breadcrumbs} from "@mui/material";
import useReactRouterBreadcrumbs from "use-react-router-breadcrumbs";

const styleInactiveLink = {
    color: '#757575',
    textDecoration: 'none',
    fontSize: '16px',
    padding: '5px',
    borderRadius: '5px',
    fontWeight: 'bold',
}
const styleActiveLink = {
    color: '#1976d2',
    textDecoration: 'none',
    fontSize: '16px',
    padding: '5px',
    borderRadius: '5px',
    transition: 'background-color 0.3s',
    ':hover': {
        backgroundColor: '#1976d2',
        color: '#fff',
    },
}

export const CustomBreadcrumbs: FC = () => {
    const breadcrumbs = useReactRouterBreadcrumbs();
    return (<>
        <Breadcrumbs aria-label="breadcrumb" separator="›" maxItems={3}>
            {breadcrumbs.map(({breadcrumb, match}, index) => {
                if (index === breadcrumbs.length - 1) {
                    return <span key={index} style={styleInactiveLink}>
            {breadcrumb}
        </span>
                } else {
                    return <Link key={index} to={match?.pathname} style={styleActiveLink}>
                        {breadcrumb}
                    </Link>
                }
            })}
        </Breadcrumbs>
    </>)
}
