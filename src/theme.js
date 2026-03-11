import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#080c14',
      paper: '#111827',
    },
    primary: {
      main: '#22d3ee',
      dark: '#0e7490',
      light: '#67e8f9',
    },
    secondary: {
      main: '#d4c5a0',
      dark: '#a89a6e',
      light: '#e5d7b6',
    },
    text: {
      primary: '#e8ecf4',
      secondary: '#94a3b8',
    },
    divider: 'rgba(34, 211, 238, 0.15)',
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 900,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
      letterSpacing: '0.05em', // Useful for small uppercase headings
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.7,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
      letterSpacing: '0.02em',
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '10px 24px',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 4px 20px rgba(34, 211, 238, 0.3)',
          },
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #22d3ee, #06b6d4, #0891b2)',
          color: '#080c14',
          '&:hover': {
            background: 'linear-gradient(135deg, #67e8f9, #22d3ee, #06b6d4)',
          },
        },
        outlinedSecondary: {
          borderColor: 'rgba(34, 211, 238, 0.25)',
          color: '#94a3b8',
          '&:hover': {
            borderColor: '#22d3ee',
            backgroundColor: 'rgba(34, 211, 238, 0.08)',
            color: '#e8ecf4',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(145deg, rgba(21, 29, 46, 0.8), rgba(15, 23, 42, 0.6))',
          border: '1px solid rgba(34, 211, 238, 0.1)',
          transition: 'all 0.3s ease',
          '&:hover': {
            borderColor: 'rgba(34, 211, 238, 0.3)',
            transform: 'translateY(-4px)',
            boxShadow: '0 12px 40px rgba(0, 0, 0, 0.3)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'rgba(8, 12, 20, 0.85)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(34, 211, 238, 0.1)',
          boxShadow: 'none',
        },
      },
    },
  },
});

export default theme;
