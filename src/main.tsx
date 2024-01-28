import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from "react-router-dom";
import {ThemeProvider} from '@mui/material/styles';
import {CssBaseline} from '@mui/material';

import {Router} from '@/routes';
import {createTheme} from '@/theme';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";

const theme = createTheme();
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false}/>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <RouterProvider router={Router} fallbackElement={<div>Loading...</div>}/>
            </ThemeProvider>
        </QueryClientProvider>
    </React.StrictMode>,
)
