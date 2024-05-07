import { useNavigate } from "react-router-dom";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { m } from "framer-motion";
import Logo from "../../components/Logo";
import { NavigateAnimation } from "../../components/animation";

// ----------------------------------------------------------------------

export default function NotFoundView() {
  const navigate = useNavigate();
  return (
    <m.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box sx={{ textAlign: "center" }}>
        <NavigateAnimation>
          <IconButton disableRipple onClick={() => navigate("/")}>
            <Logo />
          </IconButton>
        </NavigateAnimation>
        <Typography variant="h2" sx={{ mb: 3 }}>
          ¡Pagina no encontrada!
        </Typography>
        <Typography variant="h5" sx={{ mb: 3 }}>
          Lo sentimos, no hemos podido encontrar la página que busca.
        </Typography>
        <NavigateAnimation>
          <Button
            size="large"
            variant="contained"
            onClick={() => navigate("/")}
          >
            Regresar a home
          </Button>
        </NavigateAnimation>
      </Box>
    </m.div>
  );
}
