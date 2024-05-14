import {FC} from "react";
import {Box, Button, ButtonGroup, Chip, Typography} from "@mui/material";
import PdfViewer from "@/pages/Students/components/PdfViewer.tsx";

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
                                    onClick={() => {
                                    }}
                                    sx={{marginRight: '0.5rem'}}/>
                            ))
                        }
                    </Box>
                </div>
            </div>
            <div className="col-span-3 md:col-span-2" color={'primary'}>
                <div className={'text-card-header text-center p-2 border border-gray-200 rounded-md mb-4'}>
                    <Typography variant={'h5'}>
                      Buletin de notes
                    </Typography>
                </div>
                <Box sx={{
                    height: '100%',
                    width: '100%',
                    overflowY: 'auto',

                }}>
                    <PdfViewer
                        url={'https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf'}/>
                </Box>
            </div>
        </div>
    </>);
}