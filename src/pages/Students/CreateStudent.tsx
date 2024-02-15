import React from 'react';
import {
    Button,
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
    Stack,
    TextField,
    Typography
} from "@mui/material";
import {useForm} from "react-hook-form";
import {Form} from "react-router-dom";
import {useChangeDocumentTitle} from "@/hooks/use-change-document-title.ts";

export const CreateStudent: React.FC = () => {
    useChangeDocumentTitle('Création d\'un étudiant');
    const {register, formState: {errors}} = useForm();
    return (
        <Form method="post" action="/students">
            <Typography id="modal-modal-title" variant="h6" component="h2">
                Formulaire de création d'un étudiant
            </Typography>
            <Stack spacing={3}>
                <TextField
                    {...register('first_name', {required: true})}
                    label="Prénom"
                    variant="outlined"
                    fullWidth
                    error={!!errors.firstName}
                    helperText={errors.firstName ? 'Le prénom est obligatoire' : ''}
                />
                <TextField
                    {...register('last_name', {required: true})}
                    label="Nom"
                    variant="outlined"
                    fullWidth
                    error={!!errors.lastName}
                    helperText={errors.lastName ? 'Le nom est obligatoire' : ''}
                />
                <TextField
                    {...register('email', {required: true})}
                    label="Email"
                    variant="outlined"
                    fullWidth
                    error={!!errors.email}
                    helperText={errors.email ? 'L\'email est obligatoire' : ''}
                />
                <TextField
                    {...register('phone', {required: true})}
                    label="Téléphone"
                    variant="outlined"
                    fullWidth
                    error={!!errors.phone}
                    helperText={errors.phone ? 'Le téléphone est obligatoire' : ''}
                />
                <TextField
                    {...register('birth_date', {required: false})}
                    type="date"
                    fullWidth
                    error={!!errors.birth_date}
                    helperText={errors.birth_date ? 'La date de naissance est obligatoire' : ''}
                />
                <FormControl sx={{mt: 3, display: 'block'}} component="fieldset">
                    <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="male"
                        name="gender"
                    >
                        <FormControlLabel value="female" control={<Radio/>} label="Female"/>
                        <FormControlLabel value="male" control={<Radio/>} label="Male"/>
                        <FormControlLabel value="other" control={<Radio/>} label="Other"/>
                    </RadioGroup>
                </FormControl>
                <Button type="submit" variant="contained" color="primary">
                    Ajouter
                </Button>
            </Stack>
        </Form>
    );
}