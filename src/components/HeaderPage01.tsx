import { FC } from 'react';
import {Button, Stack, SvgIcon, Typography} from "@mui/material";
import ArrowUpOnSquareIcon from "@heroicons/react/24/solid/ArrowUpOnSquareIcon";
import ArrowDownOnSquareIcon from "@heroicons/react/24/solid/ArrowDownOnSquareIcon";
import PlusIcon from "@heroicons/react/24/solid/PlusIcon";

interface HeaderPage01Props {
    handleOpenAddStudent: () => void;
}
export const HeaderPage01: FC<HeaderPage01Props> = (props) => {
    const {handleOpenAddStudent} = props;
    return(<>
        <Stack
            direction="row"
            justifyContent="space-between"
            spacing={4}>
            <Stack spacing={1}>
                <Typography variant="h4">
                    Gestion des étudiants
                </Typography>
                <Stack
                    alignItems="center"
                    direction="row"
                    spacing={1}
                >
                    <Button
                        color="inherit"
                        startIcon={(
                            <SvgIcon fontSize="small">
                                <ArrowUpOnSquareIcon/>
                            </SvgIcon>
                        )}
                    >
                        Import
                    </Button>
                    <Button
                        color="inherit"
                        startIcon={(
                            <SvgIcon fontSize="small">
                                <ArrowDownOnSquareIcon/>
                            </SvgIcon>
                        )}
                    >
                        Export
                    </Button>
                </Stack>
            </Stack>
            <div>
                <Button
                    startIcon={(
                        <SvgIcon fontSize="small">
                            <PlusIcon/>
                        </SvgIcon>
                    )}
                    variant="contained"
                    onClick={handleOpenAddStudent}
                >
                    Ajouter un étudiant
                </Button>
            </div>
        </Stack>
    </>);
}