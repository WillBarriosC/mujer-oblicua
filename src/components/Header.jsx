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
import { MainAnimation, NavigateAnimation } from "./animation";
import useMediaQuery from "@mui/material/useMediaQuery";
import Logo from "./Logo";
import DrawerLogo from "./DrawerLogo";

export default function Header() {
  const matches = useMediaQuery("(min-width:768px)");
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        component="nav"
        sx={{ p: 2, backgroundColor: "#ffffff" }}
      >
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
                  <NavigateAnimation>
                    <IconButton disableRipple onClick={() => navigate("/")}>
                      <Logo />
                    </IconButton>
                  </NavigateAnimation>
                </Grid>
                <Grid item>
                  <Stack direction={"row"} alignItems={"center"} spacing={5}>
                    <Grid item>
                      <NavigateAnimation>
                        {matches && (
                          <Typography
                            variant="h4"
                            component="a"
                            sx={{
                              flexGrow: 1,
                              fontWeight: "bold",
                              color: "black",
                              cursor: "pointer",
                            }}
                            onClick={() => navigate("/acerca-de-mi")}
                          >
                            Daniela Prado
                          </Typography>
                        )}
                      </NavigateAnimation>
                    </Grid>
                    <Grid item>
                      <NavigateAnimation>
                        <DrawerLogo />
                      </NavigateAnimation>
                    </Grid>
                  </Stack>
                </Grid>
              </Grid>
            </Container>
          </Toolbar>
        </MainAnimation>
      </AppBar>
    </Box>
  );
}
