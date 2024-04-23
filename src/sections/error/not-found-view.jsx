import { useNavigate } from "react-router-dom";
import { Box, Button, IconButton, Typography } from "@mui/material";
import logo from "/media/logo.webp";
import { m } from "framer-motion";

// ----------------------------------------------------------------------

export default function NotFoundView() {
  const navigate = useNavigate();
  const Logo = () => <img src={logo} height={300} />;
  return (
    <m.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box sx={{ textAlign: "center" }}>
        <IconButton disableRipple onClick={() => navigate("/")}>
          <Logo />
        </IconButton>
        <Typography variant="h1" sx={{ mb: 3 }}>
          ¡Pagina no encontrada!
        </Typography>
        <Typography variant="h5" sx={{ mb: 3 }}>
          Lo sentimos, no hemos podido encontrar la página que busca.
        </Typography>
        <Typography variant="h1" sx={{ mb: 3 }}>
          😢
        </Typography>
        <Button size="large" variant="contained" onClick={() => navigate("/")}>
          Regresar a home
        </Button>
      </Box>
    </m.div>
  );
}
