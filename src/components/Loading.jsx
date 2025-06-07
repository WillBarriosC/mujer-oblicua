import { useEffect, useState } from "react";
import { Box, Typography, Fade } from "@mui/material";
import Logo from "./Logo";

export default function Loading() {
  const [show, setShow] = useState(false);
  const [dots, setDots] = useState("");

  useEffect(() => {
    // Pequeña animación de fade-in
    const timeout = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    // Animación de los puntos suspensivos
    const interval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + "." : ""));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <Fade in={show} timeout={600}>
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          minHeight: "100dvh",
          bgcolor: "transparent", // Fondo transparente
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 1300,
        }}
      >
        <Box
          sx={{
            mb: 3,
            width: { xs: 120, sm: 160, md: 200 },
            display: "flex",
            justifyContent: "center",
            animation: "heartbeat 1.6s infinite",
            "@keyframes heartbeat": {
              "0%": {
                transform: "scale(1)",
              },
              "14%": {
                transform: "scale(1.15)",
              },
              "28%": {
                transform: "scale(1)",
              },
              "42%": {
                transform: "scale(1.12)",
              },
              "70%": {
                transform: "scale(1)",
              },
              "100%": {
                transform: "scale(1)",
              },
            },
          }}
        >
          <Logo />
        </Box>
        <Typography
          variant="h5"
          sx={{
            color: "primary.main",
            fontWeight: "bold",
            letterSpacing: 2,
            fontSize: { xs: "1.2rem", sm: "1.5rem", md: "2rem" },
            textAlign: "center",
            mt: 0,
            textShadow: "0 2px 8px rgba(0,0,0,0.15)",
            minHeight: "2.5em",
          }}
        >
          {`Cargando${dots}`}
        </Typography>
      </Box>
    </Fade>
  );
}