import PropTypes from "prop-types";
import { useMemo } from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import "../../public/fonts/index.css";

export const ThemeConfig = ({ children }) => {
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          primary: {
            main: "#040404",
          },
        },
        typography: {
          fontFamily: "'League Spartan', sans-serif, SourceSerifPro",
        },
      }),
    []
  );

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
