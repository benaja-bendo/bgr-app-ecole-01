
import {Card, CardContent, Typography, Chip} from "@mui/material";
import {FC} from "react";

interface ItemNoteProps {
    type: 'Examen' | 'Devoir';
    date: string;
    teacher: string;
}

export const ItemNoteGrid: FC<ItemNoteProps> = ({type, date, teacher}) => {
    return (
        <Card variant={'outlined'} sx={{marginBottom: '1rem'}}>
            <CardContent>
                <Typography variant={'h6'}>Note</Typography>
                <Chip label={type} variant="outlined" />
                <Typography variant={'body2'}>Date de publication: {date}</Typography>
                <Typography variant={'body2'}>Professeur: {teacher}</Typography>
            </CardContent>
        </Card>
    );
}