import {FC, useState} from 'react';
import {Box, Typography} from "@mui/material";
import {MatiereAutoComplete} from "@/pages/Students/components/MatiereAutoComplete.tsx";
import {SlideNote} from "@/pages/Students/components/SlideNote.tsx";
import {SlidePeriod} from "@/pages/Students/components/SlidePeriod.tsx";
import {ListTeacherAutoComplete} from "@/pages/Students/components/ListTeacherAutoComplete.tsx";
import {ShowElement} from "@/pages/Students/components/ShowElement.tsx";
import {ItemNoteList} from "@/pages/Students/components/ItemNoteList.tsx";

export const Notes: FC = () => {
    const [alignment, setAlignment] = useState<string | null>('grid');
    return (<>
        <div className={'h-full grid grid-cols-3 gap-4'}>
            <div className="col-span-3 md:col-span-1" color={'primary'}>
                <div className={'h-full'}>
                    <Typography variant={'h4'} sx={{
                        marginBottom: '1rem'
                    }}>
                        Filter les notes
                    </Typography>
                    <MatiereAutoComplete/>
                    <SlideNote/>
                    <SlidePeriod/>
                    <ListTeacherAutoComplete/>
                </div>
            </div>
            <div className="col-span-3 md:col-span-2" color={'primary'}>
                <div className={'h-9 flex justify-end items-center mb-4'}>
                    <ShowElement onChange={setAlignment} defaultAlignment={alignment}/>
                </div>
                <Box sx={{
                    height: '100%',
                    overflowY: 'auto',
                    display: 'grid',
                    gap: '1rem',
                    gridTemplateColumns: alignment === 'list' ? '1fr' : 'repeat(auto-fill, minmax(300px, 1fr))',
                    gridAutoRows: 'auto',

                }}>
                    <ItemNoteList type={'Examen'} date={'12/12/2021'} teacher={'M. Jean Dupont'} note={15}
                                  matiere={'Mathématiques'}/>
                    <ItemNoteList type={'Devoir'} date={'12/12/2021'} teacher={'Mme. Jeanne Dupont'} note={12}
                                  matiere={'Français'}/>
                    <ItemNoteList type={'Devoir'} date={'12/12/2021'} teacher={'Mme. Jeanne Dupont'} note={12}
                                  matiere={'Français'}/>
                    <ItemNoteList type={'Devoir'} date={'12/12/2021'} teacher={'Mme. Jeanne Dupont'} note={12}
                                  matiere={'Français'}/>
                    <ItemNoteList type={'Devoir'} date={'12/12/2021'} teacher={'Mme. Jeanne Dupont'} note={12}
                                  matiere={'Français'}/>
                </Box>
            </div>
        </div>
    </>);
}