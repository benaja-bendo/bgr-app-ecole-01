import {FC, ReactNode} from 'react';
import {Modal, Fade, Backdrop, Stack, IconButton} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

interface IModalAddStudentProps {
    isOpen: boolean;
    onClose: () => void;
    children?: ReactNode | ReactNode[];
}

const styleModal = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const ModalAddStudent: FC<IModalAddStudentProps> = ({isOpen, onClose, children}) => {
    return (
        <Modal
            disableEnforceFocus
            keepMounted
            closeAfterTransition
            open={isOpen}
            // onClose={onClose}
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
                <Stack sx={styleModal} spacing={2}>
                    <Stack direction="row">
                        <IconButton aria-label="close" color="success" sx={{marginLeft:'auto'}} onClick={onClose}>
                            <CloseIcon />
                        </IconButton>
                    </Stack>
                    <Stack>
                        {children}
                    </Stack>
                </Stack>
            </Fade>
        </Modal>
    );
};

export default ModalAddStudent;