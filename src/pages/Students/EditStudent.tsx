import React, {FC, FormEvent, useState} from 'react';
import {useChangeDocumentTitle} from "@/hooks/use-change-document-title.ts";
import {useLoaderDataStudent} from "@/hooks/use-loader-data-student.ts";
import {
    Box,
    Button,
    Card,
    Divider,
    FormControl, FormControlLabel,
    FormLabel, Radio,
    RadioGroup,
    Stack,
    TextField,
    Typography
} from "@mui/material";
import {Form, useFetcher} from "react-router-dom";
import {PhotoCamera} from "@mui/icons-material";
import {useForm} from "react-hook-form";
import DatePicker from "@/pages/Students/components/DatePicker.tsx";
import ConfirmDialog from "@/components/ConfirmDialog.tsx";

export const EditStudent: FC = () => {
    useChangeDocumentTitle('Modification des informations de l\'étudiant');
    const student = useLoaderDataStudent();

    return (<>
        <HeaderEditStudent/>
        <Card variant="elevation" elevation={2} square sx={{p: 3}}>
            <Form method="put" action="/students" encType={"multipart/form-data"}>
                <input name={"id"} type={"hidden"} value={student?.id}/>
                <Stack spacing={3}>
                    <ImageUpload/>
                    <Divider/>
                    <AccountInformation/>
                    <Button type="submit" variant="contained" color="primary">
                        Modifier submit
                    </Button>
                </Stack>
            </Form>
        </Card>
    </>);
}

const HeaderEditStudent: FC = () => {
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
                    Modification des informations de l'étudiant
                </Typography>
            </Stack>
        </Stack>
    );
}

const ImageUpload: FC = () => {
    const {avatar} = useLoaderDataStudent();
    const fetcher = useFetcher();
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [previewURL, setPreviewURL] = useState<string | null>(avatar);

    const handleFileInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files![0];
        setSelectedFile(file);
        handleDeleteItem(event, 0);

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
    const handleDeleteItem = (e: FormEvent, id: number) => {
        e.preventDefault();
        if (id === 0) return
        setOpenDialog(true);
    }
    const handleConfirmDelete = async () => {
        if (!selectedFile) return;
        // fetcher.submit({avatar: selectedFile}, {
        //     action: `/students`,
        //     method: 'post',
        // });
    }

    return (<>
        <ConfirmDialog
            title="Supprimer l'étudiant"
            open={openDialog}
            setOpen={setOpenDialog}
            onConfirm={handleConfirmDelete}
        >
            Êtes-vous sûr de vouloir changer l'image de l'étudiant ?
        </ConfirmDialog>
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
            <Stack direction={"row"} spacing={1}>
                <Box>
                    <input type="file" accept="image/*" style={{display: 'none'}} id="contained-button-file"
                           onChange={handleFileInput} name={"avatar"}/>
                    <label htmlFor="contained-button-file">
                        <Button variant="outlined" color="primary" component="span" size="small">
                            <PhotoCamera/>
                            Changer l'image
                        </Button>
                    </label>
                </Box>
                <Box>
                    <Button variant="outlined" color="error" size="small" onClick={() => {
                        setPreviewURL(null);
                        setSelectedFile(null);
                    }}>
                        Supprimer l'image
                    </Button>
                </Box>
            </Stack>
        </Stack>
    </>);
};

const AccountInformation: FC = () => {
    const student = useLoaderDataStudent();
    const {register, formState: {errors}} = useForm();
    return (<>
        <Typography variant="h6" gutterBottom>Informations du compte</Typography>
        <Stack spacing={3} direction={"row"} justifyContent={"space-between"}>
            <TextField
                {...register('first_name', {required: true})}
                label="Prénom"
                variant="outlined"
                fullWidth
                defaultValue={student?.first_name}
                error={!!errors.firstName}
                helperText={errors.firstName ? 'Le prénom est obligatoire' : ''}
            />
            <TextField
                {...register('last_name', {required: true})}
                label="Nom"
                variant="outlined"
                fullWidth
                defaultValue={student?.last_name}
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
                defaultValue={student?.email}
                error={!!errors.email}
                helperText={errors.email ? 'L\'email est obligatoire' : ''}
            />
            <TextField
                {...register('phone', {required: true})}
                label="Téléphone"
                variant="outlined"
                fullWidth
                defaultValue={student?.number_phones?.[0]?.number_phone}
                error={!!errors.phone}
                helperText={errors.phone ? 'Le téléphone est obligatoire' : ''}
            />
            <DatePicker defaultValue={student?.birth_date}/>
        </Stack>
        <Divider/>
        <FormControl sx={{mt: 3, display: 'block'}} component="fieldset">
            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue={student?.gender}
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