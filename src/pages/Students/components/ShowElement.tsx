import React, {FC, useState} from "react";
import {ToggleButton, ToggleButtonGroup} from "@mui/material";
import {ListIcon} from "@/components/svg/SvgIcon/ListIcon.tsx";
import {GridList} from "@/components/svg/SvgIcon/GridList.tsx";

interface ShowElementProps {
    onChange: (newValue: string | null) => void;
    defaultAlignment: string | null;
}

export const ShowElement: FC<ShowElementProps> = (props) => {
    const [alignment, setAlignment] = useState<string | null>(props.defaultAlignment);

    const handleAlignment = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string | null,
    ) => {
        setAlignment(newAlignment);
        props.onChange(newAlignment);
    };
    return (<>
        <ToggleButtonGroup
            color="primary"
            value={alignment}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
        >
            <ToggleButton value="list" aria-label="list aligned">
                <ListIcon/>
            </ToggleButton>
            <ToggleButton value="grid" aria-label="grid aligned">
                <GridList/>
            </ToggleButton>
        </ToggleButtonGroup>
    </>);
}