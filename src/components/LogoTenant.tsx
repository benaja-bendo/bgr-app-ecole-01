import {FC, useState} from 'react'
import {Box, IconButton} from "@mui/material";
import CustomModal from "@/components/CustomModal.tsx";
import {useCurrentUser} from "@/hooks/use-current-user.ts";
import {RoleType} from "@/types/Role.ts";

export const LogoTenant: FC = () => {
    const {currentUser} = useCurrentUser();
    const [openModal, setOpenModal] = useState(false);
    const handleCloseModel = () => setOpenModal(false);
    const handleOpenModel = () => {
        const userAccept = ["root"] as RoleType[];
        if (currentUser?.role?.type !== undefined && currentUser?.role?.type !== null){
            if (userAccept.includes(currentUser?.role?.type)) {
                setOpenModal(true);
            }
        }
    };
    return (<>
            <Box
                component={IconButton}
                onClick={handleOpenModel}>
                <img
                    alt="Logo"
                    src={"https://api.iconify.design/logos:arm.svg"}
                    width="100%"
                    height="100%"/>
            </Box>

        {openModal && (<CustomModal isOpen={openModal} onClose={handleCloseModel}>
            <div>
                modifier le logo
            </div>
        </CustomModal>)}
    </>);
}