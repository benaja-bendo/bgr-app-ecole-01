import {FC} from 'react';
import {Card, CardContent, Typography} from "@mui/material";

export const Notes: FC = () => {

    return (<>
        <div className={'h-full grid grid-cols-3 gap-4'}>
            <div className="col-span-3 md:col-span-1" color={'primary'}>
                <Card variant={'outlined'}>
                    <CardContent>
                        <Typography variant={'h6'}>Notes</Typography>
                        <Typography variant={'body2'}>No notes available</Typography>
                    </CardContent>
                </Card>
            </div>
            <div className="col-span-3 md:col-span-2" color={'primary'}>
                <Card variant={'outlined'}>
                    <CardContent>
                        <Typography variant={'h6'}>Ratings</Typography>
                        <Typography variant={'body2'}>No ratings available</Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    </>);
}