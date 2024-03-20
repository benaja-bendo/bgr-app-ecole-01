import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

interface ConfirmDialogProps {
    title: string;
    children: React.ReactNode;
    open: boolean;
    setOpen: (open: boolean) => void;
    onConfirm: () => void;
}
const ConfirmDialog: React.FC<ConfirmDialogProps> = ({title, children, open, setOpen, onConfirm}) => {
    const handleClose = () => {
        setOpen(false);
    };

    const handleConfirm = () => {
        onConfirm();
        setOpen(false);
    };

    return (
        <Dialog
            open={open}
            // onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {children}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Annuler
                </Button>
                <Button onClick={handleConfirm} color="primary" autoFocus>
                    Confirmer
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ConfirmDialog;