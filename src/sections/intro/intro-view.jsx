import React, { useCallback } from "react";
import {
  Container,
  Typography,
  Box,
  Paper,
  useTheme,
  useMediaQuery,
  Button,
} from "@mui/material";
import { SectionAnimation } from "../../components/animation";
import { useNavigate } from "react-router-dom";

const IntroView = React.memo(() => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();

  const handleNavigateHome = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const paperStyles = {
    px: { xs: 2, sm: 3, md: 4 },
    py: { xs: 2.5, sm: 3.5 },
    borderRadius: 4,
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    
  };

  const textStyles = {
    fontSize: { xs: "0.95rem", sm: "1rem", md: "1.05rem" },
    lineHeight: 1.6,
    fontFamily: "SourceSerifPro",
    textAlign: "justify",
    textIndent: "2em",
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        py: { xs: 3, sm: 4, md: 6 },
        overflowY: { xs: "auto", sm: "visible" },
        maxHeight: { xs: "100dvh", sm: "none" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <SectionAnimation>
        <Paper sx={paperStyles}>
          <Box mb={2}>
            <Typography
              variant={isMobile ? "h5" : "h4"}
              component="h1"
              gutterBottom
              fontWeight="bold"
              color="black"
              sx={{ textAlign: isMobile ? "center" : "left" }}
            >
              Intro
            </Typography>
          </Box>

          <Typography
            variant="body1"
            color="black"
            sx={{ ...textStyles, textIndent: "0" }}
          >
            <b>¡Hola!</b> Bienvenida a este espacio de exploración inmersiva
            dentro de los poemas, te sugiero que explores el contenido con
            audífonos y en el computador.
          </Typography>
          <Box sx={{ height: { xs: 12, sm: 16 } }} />
          <Typography variant="body1" color="black" sx={textStyles}>
            <em>Mujer oblicua</em> fue un poemario escrito en el 2019 para
            acceder al grado de Licenciatura en Literatura en la Universidad del
            Valle de la escritora Daniela Prado. Este poemario busca comunicar a
            otras personas la importancia de expresar y reescribir el dolor (los
            traumas ocasionados por la violencia contra la mujer) y la
            construcción constante de la identidad a través de la historia
            personal y colectiva. Posteriormente, los poemas fueron publicados
            en una plaquette que fue presentada en el 2021 en una lectura
            performática con las escritoras y artistas colombianas: Lucille
            Dupin, Yirama Castaño, Carolina López, Alexandra Espinosa, Laura
            Jaramillo, Lina Botero, Cristina Villota, con ambientación sonora
            por Sara Fernández. En esta lectura, que quedó grabada en video, se
            puede ver el poder de la lectura colectiva entre mujeres, las
            posibilidades del cuerpo y la voz a través de la lectura
            performática de poesía, las posibilidades expandidas del libro.
          </Typography>
          <Box sx={{ height: { xs: 12, sm: 16 } }} />
          <Typography variant="body1" color="black" sx={textStyles}>
            Es a través de este archivo y registro de distintas expresiones
            resultantes de estos poemas que <em>Mujer oblicua</em> se despliega
            y encuentra la necesidad de convertirse en un libro digital
            expandido que requiere un espacio más amplio en donde albergar todo
            lo que se deriva de él y aún no ha sido publicado.{" "}
            <em>Mujer oblicua</em> se transforma en lo que podrá encontrar
            aquí, un sitio web de poesía hipermedia en donde la autora espera
            que se conmueva a través de todas las palabras, videos, sonidos,
            animaciones y sensaciones.
          </Typography>
          <Box sx={{ height: { xs: 12, sm: 16 } }} />
          <Button
            variant="contained"
            onClick={handleNavigateHome}
            sx={{
              display: "flex",
              justifyContent: "center",
              mx: "auto",
            }}
          >
            Regresar a home
          </Button>
        </Paper>
      </SectionAnimation>
    </Container>
  );
});

IntroView.displayName = "IntroView";

export default IntroView;