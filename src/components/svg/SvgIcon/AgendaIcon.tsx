import {SvgIcon, SvgIconProps} from "@mui/material";
import React from "react";

export const AgendaIcon: React.FC<SvgIconProps> = (props) => {
    return (
        <SvgIcon {...props}>
            <path fill="currentColor"
                  d="M19 19H5V8h14m-3-7v2H8V1H6v2H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-1V1"></path>
        </SvgIcon>
    );
}