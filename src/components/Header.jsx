import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { AnimatePresence } from "framer-motion";
import { MainAnimation, NavigateAnimation } from "./animation";
import Logo from "./Logo";
import DrawerLogo from "./DrawerLogo";
import { memo, useCallback, useMemo } from "react";

const Header = memo(() => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const navigate = useNavigate();

  const handleNavigate = useCallback(
    (path) => {
      navigate(path);
    },
    [navigate]
  );

  const logoButton = useMemo(
    () => (
      <IconButton
        disableRipple
        onClick={() => handleNavigate("/")}
        sx={{
          p: { xs: 0.5, sm: 1 },
          "&:hover": { background: "transparent" },
        }}
        aria-label="Ir a inicio"
      >
        <Logo />
      </IconButton>
    ),
    [handleNavigate]
  );

  const typographyStyles = useMemo(
    () => ({
      fontWeight: "bold",
      color: "black",
      cursor: "pointer",
      fontSize: { xs: "1.1rem", md: "1.5rem" },
      ml: { xs: 1, md: 2 },
      textDecoration: "none",
      "&:hover": { color: theme.palette.primary.main },
    }),
    [theme]
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          p: { xs: 1, sm: 2 },
          backgroundColor: "#fff",
          boxShadow: 1,
        }}
      >
        <AnimatePresence mode="wait">
          <MainAnimation>
            <Toolbar>
              <Container maxWidth="false">
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  width="100%"
                  spacing={2}
                >
                  <NavigateAnimation>{logoButton}</NavigateAnimation>
                  <Stack direction="row" alignItems="center" spacing={{ xs: 1, sm: 3 }}>
                    {isMdUp && (
                      <NavigateAnimation>
                        <Typography
                          variant="h5"
                          component="a"
                          sx={typographyStyles}
                          onClick={() => handleNavigate("/acerca-de-mi")}
                        >
                          Daniela Prado
                        </Typography>
                      </NavigateAnimation>
                    )}
                    <DrawerLogo />
                  </Stack>
                </Stack>
              </Container>
            </Toolbar>
          </MainAnimation>
        </AnimatePresence>
      </AppBar>
    </Box>
  );
});

Header.displayName = "Header";

export default Header;