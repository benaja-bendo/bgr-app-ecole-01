import {FC} from 'react'
import {Stack, Typography} from "@mui/material";
import {useTranslation} from "react-i18next";

export const Account: FC = () => {
    const {t} = useTranslation();

    return (<>
        <Stack spacing={3}>
            <Stack
                direction="row"
                justifyContent="space-between"
                spacing={4}>
                <Stack spacing={1}>
                    <Typography variant="h4">
                        {t('student.student_management')}
                    </Typography>
                </Stack>

            </Stack>
        </Stack>
    </>)
}
