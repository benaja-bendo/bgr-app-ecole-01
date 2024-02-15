import {FC, ReactNode} from 'react';
import {Modal, Fade, Backdrop, Stack, IconButton, Typography, Box} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

interface IModalAddStudentProps {
    isOpen: boolean;
    onClose: () => void;
    children?: ReactNode | ReactNode[];
    size?: 'small' | 'medium' | 'large';
    title?: string;
}

const styleModal = (size: 'small' | 'medium' | 'large') => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: size === 'small' ? '30%' : size === 'medium' ? '40%' : '60%',
    maxHeight: '80%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    overflowY: 'auto',
    '@media (max-width:600px)': {
        width: '80%',
    },
});

const CustomModal: FC<IModalAddStudentProps> = ({isOpen, onClose, children, size = 'medium', title}) => {
    return (
        <Modal
            disableEnforceFocus
            keepMounted
            closeAfterTransition
            open={isOpen}
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            slots={{backdrop: Backdrop}}
            slotProps={{
                backdrop: {
                    timeout: 500,
                },
            }}
        >
            <Fade in={isOpen}>
                <Box sx={styleModal(size)}>
                    <Stack spacing={2}>
                        <Stack direction="row" alignItems="center">
                            <Typography variant="h6" id="transition-modal-title">{title}</Typography>
                            <IconButton aria-label="close" color="success" sx={{marginLeft:'auto'}} onClick={onClose}>
                                <CloseIcon />
                            </IconButton>
                        </Stack>
                        <Stack id="transition-modal-description">
                            {children}
                        </Stack>
                    </Stack>
                </Box>
            </Fade>
        </Modal>
    );
};

export default CustomModal;