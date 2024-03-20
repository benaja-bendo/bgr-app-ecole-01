import React, {FC} from 'react';
import {Avatar, Button, Stack, Typography} from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import ActionsMenu from "@/pages/Students/components/ActionsMenu.tsx";

import {useLoaderDataStudent} from "@/hooks/use-loader-data-student.ts";
import {Link} from "react-router-dom";

export const HeaderProfilePage: FC = () => {
    const student = useLoaderDataStudent();
    return (
        <Stack
            direction="row"
            justifyContent="space-between"
            spacing={4}>
            <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={2}>
                <Avatar
                    alt={student?.first_name}
                    src={student?.avatar}
                    sx={{width: 64, height: 64}}
                />
                <Stack direction="column">
                    <Typography variant="h4">
                        {student?.first_name} {student?.last_name}
                    </Typography>
                </Stack>
            </Stack>
            <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={3}>
                <Link to={`/students/${student?.id}/edit`}>
                    <Button role={'button'} variant="text" startIcon={<EditOutlinedIcon/>}>
                        Modifier
                    </Button>
                </Link>
                <ActionsMenu/>
            </Stack>
        </Stack>
    );
};