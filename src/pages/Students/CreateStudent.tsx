import React, {useState} from 'react';
import {
    Box,
    Button, Card, Divider,
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
import {PhotoCamera} from '@mui/icons-material';
import DatePicker from "@/pages/Students/components/DatePicker.tsx";

export const CreateStudent: React.FC = () => {
    useChangeDocumentTitle('Création d\'un étudiant');
    return (<>
        <HeaderCreateStudent/>
        <Card variant="elevation" elevation={2} square sx={{p: 3}}>
            <Form method="post" action="/students" encType={"multipart/form-data"}>
                <Stack spacing={3}>
                    <ImageUpload/>
                    <Divider/>
                    <AccountInformation/>
                    <Button type="submit" variant="contained" color="primary">
                        Ajouter
                    </Button>
                </Stack>
            </Form>
        </Card>
    </>);
}

const HeaderCreateStudent: React.FC = () => {
    return (
        <Stack
            direction="row"
            justifyContent="space-between"
            sx={{mb: 4}}
            spacing={4}>
            <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={2}>
                <Typography variant="h4">
                    Création d'un étudiant
                </Typography>
            </Stack>
        </Stack>
    );
}

const ImageUpload = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [previewURL, setPreviewURL] = useState<string | null>(null);

    const handleFileInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files![0];
        setSelectedFile(file);

        const reader = new FileReader();
        reader.onloadend = () => {
            setPreviewURL(reader.result as string);
        };
        reader.readAsDataURL(file);
    };

    const handleDrop = (event: React.DragEvent) => {
        event.preventDefault();

        if (event.dataTransfer?.files?.length) {
            const file = event.dataTransfer.files[0];
            setSelectedFile(file);

            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewURL(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    return (<>
        <Typography variant="h6" gutterBottom>Avatar</Typography>
        <Stack spacing={2} direction={"row"} justifyContent={"start"} alignItems={"center"}>
            <Box
                sx={{
                    border: '1px dashed #ccc',
                    borderRadius: '50%',
                    padding: '8px',
                    textAlign: 'center',
                    width: '100px',
                    height: '100px',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                onDrop={handleDrop}
            >
                {previewURL && <img src={previewURL} alt="Uploaded Image"
                                    style={{height: '100%', borderRadius: '50%', objectFit: 'cover'}}/>}
                {!previewURL && <Typography variant="caption">Glissez et déposez une image ici</Typography>}
            </Box>
            <Box>
                <input type="file" accept="image/*" style={{display: 'none'}} id="contained-button-file"
                       onChange={handleFileInput} name={"avatar"}/>
                <label htmlFor="contained-button-file">
                    <Button variant="outlined" color="primary" component="span" size="small">
                        <PhotoCamera/>
                        Sélectionner une image
                    </Button>
                </label>
            </Box>
        </Stack>
    </>);
};

const AccountInformation = () => {
    const {register, formState: {errors}} = useForm();
    return (<>
        <Typography variant="h6" gutterBottom>Informations du compte</Typography>
        <Stack spacing={3} direction={"row"} justifyContent={"space-between"}>
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
        </Stack>
        <Stack spacing={3} direction={"row"} justifyContent={"space-between"}>
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
            <DatePicker/>
        </Stack>
        <Divider/>
        <FormControl sx={{mt: 3, display: 'block'}} component="fieldset">
            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="male"
                name="gender"
                row={true}
            >
                <FormControlLabel value="female" control={<Radio/>} label="Female"/>
                <FormControlLabel value="male" control={<Radio/>} label="Male"/>
                <FormControlLabel value="other" control={<Radio/>} label="Other"/>
            </RadioGroup>
        </FormControl>
    </>);
}