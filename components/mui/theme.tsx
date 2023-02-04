import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: 'Inter',
    button: {
      textTransform: 'none',
      fontFamily: 'Inter',
    }
  },
  palette: {
    primary: {
      main: '#FFFFFF',
      contrastText: '#FFFFFF',
    },
  },
});

export default theme;