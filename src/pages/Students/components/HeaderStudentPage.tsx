import {FC} from 'react';
import {Button, Stack, SvgIcon, Typography} from "@mui/material";
import ArrowUpOnSquareIcon from "@heroicons/react/24/solid/ArrowUpOnSquareIcon";
import ArrowDownOnSquareIcon from "@heroicons/react/24/solid/ArrowDownOnSquareIcon";
import PlusIcon from "@heroicons/react/24/solid/PlusIcon";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";

interface HeaderPage01Props {
    handleOpenImportStudent?: () => void;
    handleOpenExportStudent?: () => void;
}

export const HeaderStudentPage: FC<HeaderPage01Props> = (props) => {
    const {handleOpenImportStudent, handleOpenExportStudent} = props;
    const {t} = useTranslation();
    return (<>
        <Stack
            direction="row"
            justifyContent="space-between"
            spacing={4}>
            <Stack spacing={1}>
                <Typography variant="h4">
                    {t('student.student_management')}
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
                        onClick={handleOpenImportStudent}

                    >
                        {t('student.import_student')}
                    </Button>
                    <Button
                        color="inherit"
                        startIcon={(
                            <SvgIcon fontSize="small">
                                <ArrowDownOnSquareIcon/>
                            </SvgIcon>
                        )}
                        onClick={handleOpenExportStudent}
                    >
                        {t('student.export_student')}
                    </Button>
                </Stack>
            </Stack>
            <div>
                <Link to="/students/create">
                    <Button
                        startIcon={(
                            <SvgIcon fontSize="small">
                                <PlusIcon/>
                            </SvgIcon>
                        )}
                        variant="contained"
                    >
                        {t('student.add_student')}
                    </Button>
                </Link>
            </div>
        </Stack>
    </>);
}