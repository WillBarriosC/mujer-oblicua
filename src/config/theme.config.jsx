import PropTypes from "prop-types";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import "../../public/fonts/index.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#040404",
    },
  },
  typography: {
    fontFamily: "'League Spartan', sans-serif, SourceSerifPro",
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
