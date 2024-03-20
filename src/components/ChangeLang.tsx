import React, {useState} from 'react';
import {Button, Menu, MenuItem} from '@mui/material';
import useChangeLanguage from '@/hooks/use-change-language.ts';

export const ChangeLang = React.forwardRef(() => {
    const {language, changeLanguage} = useChangeLanguage();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleChange = (lang: string) => {
        setAnchorEl(null);
        changeLanguage(lang);
    };
    return (
        <>
            <Button
                id="change-lang"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                {language}
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleChange}
                MenuListProps={{
                    'aria-labelledby': 'change-lang',
                }}
            >
                <MenuItem onClick={() => handleChange('fr')}>
                    <>
                        <img src={'https://api.iconify.design/openmoji:flag-france.svg'} alt={'fr'}/>
                    </>
                </MenuItem>
                <MenuItem onClick={() => handleChange('en')}>
                    <>
                        <img src={'https://api.iconify.design/openmoji:flag-england.svg'} alt={'en'}/>
                    </>
                </MenuItem>
            </Menu>
        </>
    );
});