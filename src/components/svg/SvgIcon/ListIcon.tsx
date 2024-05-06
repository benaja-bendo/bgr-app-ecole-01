import {SvgIcon, SvgIconProps} from "@mui/material";
import React from "react";

export const ListIcon: React.FC<SvgIconProps> = (props) => {
    return (
        <SvgIcon {...props}>
            <path fill="currentColor"
                  d="M18.437 11H5.565a2.5 2.5 0 0 1-2.5-2.5V5.564a2.5 2.5 0 0 1 2.5-2.5h12.872a2.5 2.5 0 0 1 2.5 2.5V8.5a2.5 2.5 0 0 1-2.5 2.5M5.565 4.064a1.5 1.5 0 0 0-1.5 1.5V8.5a1.5 1.5 0 0 0 1.5 1.5h12.872a1.5 1.5 0 0 0 1.5-1.5V5.564a1.5 1.5 0 0 0-1.5-1.5Zm12.872 16.872H5.565a2.5 2.5 0 0 1-2.5-2.5V15.5a2.5 2.5 0 0 1 2.5-2.5h12.872a2.5 2.5 0 0 1 2.5 2.5v2.934a2.5 2.5 0 0 1-2.5 2.502M5.565 14a1.5 1.5 0 0 0-1.5 1.5v2.934a1.5 1.5 0 0 0 1.5 1.5h12.872a1.5 1.5 0 0 0 1.5-1.5V15.5a1.5 1.5 0 0 0-1.5-1.5Z"></path>
        </SvgIcon>
    );
}