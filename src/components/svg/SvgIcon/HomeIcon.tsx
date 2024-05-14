import {SvgIcon, SvgIconProps} from "@mui/material";
import React from "react";

export const HomeIcon: React.FC<SvgIconProps> = (props) => {
    return (<>
        <SvgIcon {...props}>
            <path fill="currentColor" d="m12 3l8 6v12h-5v-7H9v7H4V9z"></path>
        </SvgIcon>
    </>);
}