import { frFR } from '@mui/material/locale';
import { createTheme } from '@mui/material/styles';


// Create a theme instance. Affet colors, typography, and localization (frFR, imported from @mui/material/locale)
const rfMuiTheme = createTheme(
  {
    shape: {
      borderRadius: 8,
    },

    typography: {
      fontFamily: 'Prata, sans-serif',
      button: {
        fontWeight: 'bold',
        textTransform: 'none',
      },
      subtitle1: {
        fontSize: 12,
      }
    },

    palette: {
      primary: {
        main: '#14b8a6',
        contrastText: '#fff',
      },
      secondary: {
        main: '#06b6d4',
      },
      neutral: {
        main: '#fff',
        light: '#f1f1f1',
      },
      contrastThreshold: 3,
      tonalOffset: 0.2,
    },

    components: {
      // Name of the component
      MuiTextField: {
        styleOverrides: {
          // Name of the slot
          root: {
            // Some CSS
            color: 'white',
          },
        },
      },
    },

  },
  frFR,
);

export default rfMuiTheme;