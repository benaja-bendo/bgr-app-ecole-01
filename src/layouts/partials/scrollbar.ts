import SimpleBar from 'simplebar-react';
import { styled, CSSObject } from '@mui/system';

interface ScrollbarProps {
    sx?: CSSObject;
}

export const Scrollbar = styled(SimpleBar)<ScrollbarProps>``;
