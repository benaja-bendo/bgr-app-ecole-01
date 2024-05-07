import {Box, Card, CardContent, Chip, Typography} from "@mui/material";
import {FC} from "react";

export const ReportCard: FC = () => {
    return (<>
        <div className={'h-full grid grid-cols-3 gap-4'}>
            <div className="col-span-3 md:col-span-1" color={'primary'}>
                <div className={'h-full'}>
                    <Box sx={{marginBottom: '1rem'}}>
                        <Typography variant={'h4'} sx={{
                            marginBottom: '1rem'
                        }}>
                            Rapport de notes
                        </Typography>
                    </Box>
                    <Box sx={{width: '98%', marginBottom: '1rem'}}>
                        <Typography id="non-linear-slider" gutterBottom>
                            Année scolaire
                        </Typography>
                        {
                            ['2020-2021', '2021-2022', '2022-2023'].map((year) => (
                                <Chip
                                    label={year}
                                    color="primary"
                                    variant="outlined"
                                    key={year}
                                    onClick={() => {}}
                                    sx={{marginRight: '0.5rem'}}/>
                            ))
                        }
                    </Box>
                </div>
            </div>
            <div className="col-span-3 md:col-span-2" color={'primary'}>
                <div className={'h-9 flex justify-end items-center mb-4'}>
                    Recharger le rapport
                </div>
                <Box sx={{
                    height: '100%',
                    width: '100%',
                    overflowY: 'auto',
                    display: 'grid',
                    placeItems: 'center',

                }}>
                    <p>
                        chargement du rapport de notes ...
                    </p>
                </Box>
            </div>
        </div>
    </>);
}