import React, {FC, SyntheticEvent, useState} from 'react';
import {Box, Tab, Tabs} from "@mui/material";
import {useChangeDocumentTitle} from "@/hooks/use-change-document-title.ts";
import {TabConfig} from "@/pages/Students/components/tabs/tab-config.tsx";
import {HeaderProfilePage} from "@/pages/Students/components/HeaderProfilePage.tsx";

export const ProfileStudent: FC = () => {
    useChangeDocumentTitle('Profil de l\'étudiant');
    const [value, setValue] = useState(TabConfig[0].value);
    const handleChange = (_: SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (<>
        <HeaderProfilePage/>
        <Box sx={{width: '100%'}}>
            <Tabs
                value={value}
                onChange={handleChange}
                textColor="primary"
                indicatorColor="primary"
                aria-label="secondary tabs example"
            >
                {TabConfig.map((tab, index) => (
                    <Tab key={index} value={tab.value} label={tab.label}/>
                ))}
            </Tabs>
            <Box sx={{width: '100%', py: 2}}>
                {TabConfig.map((tab, index) => {
                    if (tab.value === value) {
                        return <React.Fragment key={index}>{tab.component}</React.Fragment>
                    }
                    return null;
                })}
            </Box>
        </Box>
    </>)
}