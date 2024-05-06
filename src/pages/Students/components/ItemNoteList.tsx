import {Card, CardContent, Typography, Chip, Avatar, Stack} from "@mui/material";
import { FC } from "react";
import teacherAvatar from "@/assets/images/PlaceHolder.png";

interface ItemNoteProps {
    type: "Examen" | "Devoir";
    note: number;
    date: string;
    teacher: string;
    matiere: string;
}

export const ItemNoteList: FC<ItemNoteProps> = ({
                                                    type,
                                                    note,
                                                    date,
                                                    teacher,
                                                    matiere }) => {
    return (
        <Card
            variant="outlined"
            sx={{ cursor: "pointer" }}
            onClick={() => console.log("Card clicked")}
        >
            <CardContent>
                <Stack
                    justifyContent="space-between"
                    alignItems="center"
                    sx={{ mb: 1 }}
                >
                    <Typography variant="h5" color="primary">
                        {note}
                    </Typography>
                    <Chip label={type} variant="outlined" />
                    <Typography variant="body2">Matière: {matiere}</Typography>
                    <Typography variant="body2">Date de publication: {date}</Typography>
                    <Typography variant="body2">Professeur: {teacher}</Typography>
                    <Avatar src={teacherAvatar} />
                </Stack>
            </CardContent>
        </Card>
    );
};
