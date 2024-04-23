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
import { m } from "framer-motion";
import logo from "/src/assets/media/logo.webp";
import DrawerLogo from "/src/components/DrawerLogo";

export default function Header() {
  const navigate = useNavigate();
  const Logo = () => <img src={logo} height={75} />;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        component="nav"
        sx={{ backgroundColor: "#ffffff" }}
      >
        <m.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Toolbar>
            <Container maxWidth="false">
              <Grid
                container
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Grid item>
                  <IconButton disableRipple onClick={() => navigate("/")}>
                    <Logo />
                  </IconButton>
                </Grid>
                <Grid>
                  <Stack direction={"row"} alignItems={"center"} spacing={5}>
                    <Typography
                      variant="h4"
                      component="div"
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
                    <DrawerLogo />
                  </Stack>
                </Grid>
              </Grid>
            </Container>
          </Toolbar>
        </m.div>
      </AppBar>
    </Box>
  );
}
