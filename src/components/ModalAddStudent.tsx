import {FC, ReactNode} from 'react';
import {Modal, Box, Fade, Backdrop} from "@mui/material";


interface IModalAddStudentProps {
    isOpen: boolean;
    onClose: () => void;
    children?: ReactNode | ReactNode[];
}

const style = {
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
            keepMounted
            open={isOpen}
            onClose={onClose}
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            closeAfterTransition
            slots={{backdrop: Backdrop}}
            slotProps={{
                backdrop: {
                    timeout: 500,
                },
            }}
        >
            <Fade in={isOpen}>
                <Box sx={style}>
                    {children}
                </Box>
            </Fade>
        </Modal>
    );
};

export default ModalAddStudent;