import {FC, FormEvent} from 'react';
import {TextField, Typography} from "@mui/material";

interface CreateStudentProps {
    handleCloseAddStudent: () => void;
}

export const CreateStudent: FC<CreateStudentProps> = ({handleCloseAddStudent}) => {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        console.log(e);
        handleCloseAddStudent();
    }
    return (<>
        <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
        </Typography>
        <form onSubmit={handleSubmit}>
            <TextField
                label="Nom"
                type="text"
                required
                fullWidth
            />
            <TextField
                label="Prénom"
                type="text"
                required
                fullWidth
            />
            <TextField
                label="Email"
                type="email"
                required
                fullWidth
            />
            <button type="submit">Ajouter</button>
        </form>
    </>)
}