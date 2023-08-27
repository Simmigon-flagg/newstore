import { createTheme } from '@mui/material';
import {  } from '@mui/material/colors'

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#1b5e20',
    },
    secondary: {
      main: 'rgb(220, 0, 78)',
    },
    background: {
      default: '#fff',
      paper: '#fff',
    },
  },
});

export default theme;