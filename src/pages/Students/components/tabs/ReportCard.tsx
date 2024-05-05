import {Card, CardContent, Typography} from "@mui/material";
import {FC} from "react";

export const ReportCard: FC = () => {
    return (<>
        <div className={'h-full grid grid-cols-3 gap-4'}>
            <div className="col-span-3 md:col-span-1" color={'primary'}>
                <Card variant={'outlined'}>
                    <CardContent>
                        <Typography variant={'h6'}>Rapport</Typography>
                        <Typography variant={'body2'}>Aucun rapport disponible</Typography>
                    </CardContent>
                </Card>
            </div>
            <div className="col-span-3 md:col-span-2" color={'primary'}>
                <Card variant={'outlined'}>
                    <CardContent>
                        <Typography variant={'h6'}>Évaluations</Typography>
                        <Typography variant={'body2'}>Aucune évaluation disponible</Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    </>);
}