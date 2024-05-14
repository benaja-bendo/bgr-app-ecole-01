import {SvgIcon, SvgIconProps} from "@mui/material";
import React from "react";

export const PeopleIcon: React.FC<SvgIconProps> = (props) => {
    return (
        <SvgIcon {...props}>
            <path fill="currentColor"
                  d="M12 8a4 4 0 1 1 8 0a4 4 0 0 1-8 0m-3.5 8c0-1.152.433-2.204 1.146-3H6a3 3 0 0 0-3 3v3.5a1 1 0 0 0 1 1h4.5zm15 0a4.48 4.48 0 0 0-1.146-3H26a3 3 0 0 1 3 3v3.5a1 1 0 0 1-1 1h-4.5zM3 23.5A1.5 1.5 0 0 1 4.5 22h23a1.5 1.5 0 0 1 1.5 1.5a4.5 4.5 0 0 1-4.5 4.5h-17A4.5 4.5 0 0 1 3 23.5m1-15a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0m17 0a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0M10 16a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v4.5H10z"></path>
        </SvgIcon>
    );
}