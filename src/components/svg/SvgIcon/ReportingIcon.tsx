import {SvgIcon, SvgIconProps} from "@mui/material";
import React from "react";

export const ReportingIcon: React.FC<SvgIconProps> = (props) => {
    return (
        <SvgIcon {...props}>
            <g fill="none">
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-3.586l2.293 2.293a1 1 0 0 1-1.414 1.414L12 17.414l-3.293 3.293a1 1 0 0 1-1.414-1.414L9.586 17H6a3 3 0 0 1-3-3V6zm14 2a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0V8zm-4 2a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2zm-4 1a1 1 0 1 0-2 0v1a1 1 0 1 0 2 0v-1z"
                      fill="currentColor"></path>
            </g>
        </SvgIcon>
    );
}