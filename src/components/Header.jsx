import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Box,
  Container,
  Grid,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { AnimatePresence } from "framer-motion";
import { MainAnimation, NavigateAnimation } from "./animation";
import useMediaQuery from "@mui/material/useMediaQuery";
import Logo from "./Logo";
import DrawerLogo from "./DrawerLogo";
import { memo, useCallback, useMemo } from "react";

const Header = memo(() => {
  const matches = useMediaQuery("(min-width:720px)");
  const navigate = useNavigate();

  const handleNavigate = useCallback(
    (path) => {
      navigate(path);
    },
    [navigate]
  );

  const logoButton = useMemo(
    () => (
      <IconButton disableRipple onClick={() => handleNavigate("/")}>
        <Logo />
      </IconButton>
    ),
    [handleNavigate]
  );

  const typographyStyles = useMemo(
    () => ({
      flexGrow: 1,
      fontWeight: "bold",
      color: "black",
      cursor: "pointer",
    }),
    []
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ p: 2, backgroundColor: "#fff" }}>
        <AnimatePresence mode="wait">
          <MainAnimation>
            <Toolbar>
              <Container maxWidth="false">
                <Grid
                  container
                  direction={"row"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Grid item>
                    <NavigateAnimation>{logoButton}</NavigateAnimation>
                  </Grid>
                  <Grid item>
                    <Stack direction={"row"} alignItems={"center"} spacing={5}>
                      {matches && (
                        <Grid item>
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
                        </Grid>
                      )}
                      <Grid item>
                        <DrawerLogo />
                      </Grid>
                    </Stack>
                  </Grid>
                </Grid>
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
