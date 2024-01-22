import {FC} from 'react';
import {
    Button,
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
    TextField,
    Typography
} from "@mui/material";
import { Form } from "react-router-dom";

interface CreateStudentProps {
}

export const CreateStudent: FC<CreateStudentProps> = () => {
    return (<>
        <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
        </Typography>
        <Form method="post" action="/students">
            <TextField
                label="Nom"
                type="text"
                name={'last_name'}
                required
                fullWidth
            />
            <TextField
                label="Prénom"
                type="text"
                name={'first_name'}
                required
                fullWidth
            />
            <TextField
                label="Email"
                type="email"
                name={'email'}
                required
                fullWidth
            />
            <TextField
                label="birth_date"
                type="text"
                name={'birth_date'}
                fullWidth
            />
            <FormControl sx={{mt: 3,display:'block'}} component="fieldset">
                <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="male"
                    name="gender"
                >
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
            </FormControl>

            <Button variant="contained" color="primary" type={'submit'}>
                create student
            </Button>
        </Form>
    </>)
}