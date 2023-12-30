import { Palette } from '@mui/material/styles';
import {neutral} from "@/theme/colors.tsx";

export type CustomPalette = Omit<Palette,
    | 'grey'
    | 'common'
    | 'contrastThreshold'
    | 'tonalOffset'
    | 'getContrastText'
    | 'augmentColor'
    | 'secondary'> & {
    neutral: typeof neutral;
};