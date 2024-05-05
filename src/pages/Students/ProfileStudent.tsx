import React, {FC, SyntheticEvent, useEffect, useState} from 'react';
import {Box, Tab, Tabs} from "@mui/material";
import {useChangeDocumentTitle} from "@/hooks/use-change-document-title.ts";
import {TabConfig} from "@/pages/Students/components/tabs/tab-config.tsx";
import {HeaderProfilePage} from "@/pages/Students/components/HeaderProfilePage.tsx";
import {useLocation, useSearchParams} from "react-router-dom";

function getAllParams<T extends Record<string, string>>(location: { search: string }): T {
    const searchParams = new URLSearchParams(location.search);
    const params: { [key: string]: string } = {};
    for (const [key, value] of searchParams.entries()) {
        params[key] = value;
    }
    return params as T;
}

type ProfileStudentParams = {
    tab?: string
}

export const ProfileStudent: FC = () => {
    useChangeDocumentTitle('Profil de l\'étudiant');
    const location = useLocation();
    const paramsUrl = getAllParams<ProfileStudentParams>(location);
    const [searchParams, setSearchParams] = useSearchParams();
    const tabs = parseInt(searchParams.get("tab") ?? "0");
    const validTabs = tabs >= 0 && tabs < TabConfig.length ? tabs : 0;
    const tabConfig = TabConfig[validTabs];
    const [value, setValue] = useState(tabConfig.value);
    const handleChange = (_: SyntheticEvent, newValue: number) => {
        setValue(newValue);
        setSearchParams({tab: newValue.toString()})
    };
    useEffect(() => {
        const tabs = parseInt(paramsUrl.tab ?? "0");
        const validTabs = tabs >= 0 && tabs < TabConfig.length ? tabs : 0;
        const tabConfig = TabConfig[validTabs];
        setValue(tabConfig ? tabConfig.value : TabConfig[0].value);
    }, [paramsUrl.tab]);

    return (<>
        <HeaderProfilePage/>
        <Box sx={{width: '100%',height: '100%'}}>
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