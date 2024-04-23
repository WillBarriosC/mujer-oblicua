import PropTypes from 'prop-types';
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#040404",
    },
  },
  typography: {
    fontFamily: "'League Spartan', sans-serif",
  },
});

export const ThemeConfig = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

ThemeConfig.propTypes = {
  children: PropTypes.node,
};
