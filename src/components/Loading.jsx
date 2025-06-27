import { useEffect, useState } from "react";
import { Box, Fade } from "@mui/material";
import Logo from "./Logo";

export default function Loading() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Fade in={show} timeout={600}>
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          minHeight: "100dvh",
          bgcolor: "transparent",
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
      </Box>
    </Fade>
  );
}
