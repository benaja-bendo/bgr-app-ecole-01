import React, {FormEvent, useState} from "react";
import {Button, Menu, MenuItem} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ConfirmDialog from "@/components/ConfirmDialog.tsx";
import {DeleteIcon} from "@/components/svg/SvgIcon/DeleteIcon.tsx";
import {useLoaderDataStudent} from "@/hooks/use-loader-data-student.ts";
import {useTranslation} from "react-i18next";
import {useFetcher} from "react-router-dom";

export default function ActionsMenu() {
    const fetcher = useFetcher();
    const student = useLoaderDataStudent();
    const {t} = useTranslation();
    const [open, setOpen] = useState(false);
    const [studentToDelete, setStudentToDelete] = useState<number>(0);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const openAnchor = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleDeleteItem = (e: FormEvent, id: number) => {
        e.preventDefault();
        if (id === 0) return
        setOpen(true);
        setStudentToDelete(id);
    }
    const handleConfirmDelete = async () => {
        fetcher.submit({ids: studentToDelete}, {
            action: `/students`,
            method: 'delete',
        });
    }

    return (
        <>
            <ConfirmDialog
                title="Supprimer l'étudiant"
                open={open}
                setOpen={setOpen}
                onConfirm={handleConfirmDelete}
            >
                Êtes-vous sûr de vouloir supprimer cet étudiant ?
            </ConfirmDialog>
            <Button
                id="basic-button"
                variant={'contained'}
                aria-controls={openAnchor ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={openAnchor ? 'true' : undefined}
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon/>}
            >
                Actions
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={openAnchor}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose}>
                    <Button aria-label={t('utils.delete')}
                            name={"ids"} value={Number(student.id)} type="submit"
                            onClick={(e) => handleDeleteItem(e, Number(student.id))}
                            startIcon={<DeleteIcon color={"error"} aria-label={t('utils.delete')}/>} color="error" variant="text">
                        Supprimer
                    </Button>
                </MenuItem>
                {/* TODO implemente bloquer et reset password*/}
                {/*<MenuItem onClick={handleClose}>Bloquer</MenuItem>*/}
                {/*<MenuItem onClick={handleClose}>Reset Password</MenuItem>*/}
            </Menu>
        </>
    );
}