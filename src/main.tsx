import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from "react-router-dom";
import {ThemeProvider} from '@mui/material/styles';
import {CssBaseline} from '@mui/material';

import {Router} from '@/routes';
import {createTheme} from '@/theme';

const theme = createTheme();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
          <CssBaseline/>
          <RouterProvider router={Router}/>
      </ThemeProvider>
  </React.StrictMode>,
)
