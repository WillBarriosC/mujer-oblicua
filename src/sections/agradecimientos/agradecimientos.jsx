import React, { useCallback } from "react";
import {
  Container,
  Typography,
  Box,
  Paper,
  useTheme,
  useMediaQuery,
  Button,
  Card,
  CardContent,
  Grid,
} from "@mui/material";
import { SectionAnimation } from "../../components/animation";
import { useNavigate } from "react-router-dom";

const credits = [
  {
    title: "Libro expandido",
    content: <>Textos, poemas, collages e idea original: Daniela Prado</>,
  },
  {
    title: "Video poemas",
    content: (
      <>
        Video poema{" "}
        <em>
          <b>Ahora que</b>
        </em>
        <br />
        Poema y voz: Daniela Prado
        <br />
        Realización de videopoema animado: Nathalia Orozco
        <br />
        Grabación y edición de sonido: Juan Dorantes, Daniela Prado
        <br />
        <br />
        Video poema{" "}
        <em>
          <b>Una mujer los observa</b>
        </em>
        <br />
        Poema y voz: Daniela Prado
        <br />
        Visuals: Sebastián Cadena
        <br />
        Grabación y música: Álvaro Salamanca
      </>
    ),
  },
  {
    title: "Lectura Coral",
    content: (
      <>
        Cantautora: Lucille Dupin
        <br />
        Poetas: Yirama Castaño, Carolina López, Alexandra Espinosa, Laura
        Jaramillo, Lina Botero, Cristina Villota
        <br />
        Ambientación sonora: Sara Fernández
        <br />
        Edición de video: Sebastián Cadena
      </>
    ),
  },
  {
    title: "Programación del sitio web",
    content: <>Wilman Barrios</>,
  },
  {
    title: "Animaciones",
    content: <>Tlalli A y Alejandro Linares</>,
  },
  {
    title: "Libro expandido",
    content: <>Textos, poemas, collages e idea original: Daniela Prado</>,
  },
  {
    title: "Video poemas",
    content: (
      <>
        Video poema{" "}
        <em>
          <b>Ahora que</b>
        </em>
        <br />
        Poema y voz: Daniela Prado
        <br />
        Realización de videopoema animado: Nathalia Orozco
        <br />
        Grabación y edición de sonido: Juan Dorantes, Daniela Prado
        <br />
        <br />
        Video poema{" "}
        <em>
          <b>Una mujer los observa</b>
        </em>
        <br />
        Poema y voz: Daniela Prado
        <br />
        Visuals: Sebastián Cadena
        <br />
        Grabación y música: Álvaro Salamanca
      </>
    ),
  },
  {
    title: "Lectura Coral",
    content: (
      <>
        Cantautora: Lucille Dupin
        <br />
        Poetas: Yirama Castaño, Carolina López, Alexandra Espinosa, Laura
        Jaramillo, Lina Botero, Cristina Villota
        <br />
        Ambientación sonora: Sara Fernández
        <br />
        Edición de video: Sebastián Cadena
      </>
    ),
  },
  {
    title: "Programación del sitio web",
    content: <>Wilman Barrios</>,
  },
  {
    title: "Animaciones",
    content: <>Tlalli A y Alejandro Linares</>,
  },
  {
    title: "Libro expandido",
    content: <>Textos, poemas, collages e idea original: Daniela Prado</>,
  },
  {
    title: "Video poemas",
    content: (
      <>
        Video poema{" "}
        <em>
          <b>Ahora que</b>
        </em>
        <br />
        Poema y voz: Daniela Prado
        <br />
        Realización de videopoema animado: Nathalia Orozco
        <br />
        Grabación y edición de sonido: Juan Dorantes, Daniela Prado
        <br />
        <br />
        Video poema{" "}
        <em>
          <b>Una mujer los observa</b>
        </em>
        <br />
        Poema y voz: Daniela Prado
        <br />
        Visuals: Sebastián Cadena
        <br />
        Grabación y música: Álvaro Salamanca
      </>
    ),
  },
  {
    title: "Lectura Coral",
    content: (
      <>
        Cantautora: Lucille Dupin
        <br />
        Poetas: Yirama Castaño, Carolina López, Alexandra Espinosa, Laura
        Jaramillo, Lina Botero, Cristina Villota
        <br />
        Ambientación sonora: Sara Fernández
        <br />
        Edición de video: Sebastián Cadena
      </>
    ),
  },
  {
    title: "Programación del sitio web",
    content: <>Wilman Barrios</>,
  },
  {
    title: "Animaciones",
    content: <>Tlalli A y Alejandro Linares</>,
  },
];

const AgradecimientosView = React.memo(() => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
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
    fontSize: {
      xs: "0.86rem",
      sm: "0.86rem",
      md: "0.86rem",
      lg: "0.95rem",
      xl: "1rem",
    },
    lineHeight: 1.6,
    fontFamily: "SourceSerifPro",
    textAlign: "justify",
  };

  return (
    <Container
      maxWidth="xl"
      sx={{
        py: { xs: 4, sm: 6 },
        px: { xs: 2, sm: 4 },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <SectionAnimation>
        <Paper sx={{ ...paperStyles, boxSizing: "border-box" }}>
          <Box mb={1}>
            <Typography
              variant={isMobile ? "h5" : "h4"}
              component="h1"
              gutterBottom
              fontWeight="bold"
              color="black"
              sx={{ textAlign: isMobile ? "center" : "left" }}
            >
              Créditos y agradecimientos
            </Typography>
          </Box>
          <Grid
            container
            spacing={2}
            alignItems="flex-start"
            direction={isMobile ? "column" : "row"}
          >
            <Grid
              item
              xs={12}
              md={7}
              order={{ xs: 2, md: 1 }}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box>
                <Typography variant="body1" color="black" sx={textStyles}>
                  Este proyecto fue realizado durante el periodo 2023 – 2025
                  para la Maestría en Producción Editorial de la Universidad
                  Autónoma del Estado de Morelos con el apoyo de la beca
                  SECIHTI, agradezco a la UAEM, al SECIHTI y al gobierno
                  mexicano por creer en el potencial de estudiantes y artistas
                  colombianas.
                </Typography>
                <Box sx={{ height: { xs: 8, sm: 10 } }} />
                <Typography variant="body1" color="black" sx={textStyles}>
                  Agradezco inmensamente a las doctoras Irene Catalina Fenoglio,
                  Lucille Herrasti y Cordero, Zazilha Lotz Cruz por sus
                  comentarios y guía en este proceso de aprendizaje.
                </Typography>
                <Box sx={{ height: { xs: 8, sm: 10 } }} />
                <Typography variant="body1" color="black" sx={textStyles}>
                  Agradezco fundamentalmente a mi familia que son mi eje, a
                  todas las personas que participaron en la realización de este
                  proyecto, a mis amig_s colombian_s y mexican_s que han
                  contemplado y apoyado la catarsis, el dolor y la liberación a
                  través de la escritura y la exploración de estos poemas que
                  sanan.
                </Typography>
                <Box sx={{ height: { xs: 8, sm: 10 } }} />
                <Typography variant="body1" color="black" sx={textStyles}>
                  Agradezco a las escritoras que inspiraron la realización de
                  este proyecto con sus obsesiones creativas: Carolina López,
                  Belen Gaché, Alejandra Jaramillo, Carmen Gil Vrolijk.
                </Typography>
                <Box sx={{ height: { xs: 8, sm: 10 } }} />
                <Typography variant="body1" color="black" sx={textStyles}>
                  Este sitio web está dedicado a quienes se encuentren en la
                  escritura de estos poemas que hablan de mi experiencia
                  personal atravesando este mundo llena de dudas e inquietudes
                  que me permitieron encontrar a través del dolor, la fuerza en
                  la escritura, la alegría de poder mirarme, después de todo, a
                  mí misma con amor.
                  <br />
                  <br />
                  <b>¡Gracias por tu visita!</b>
                </Typography>
              </Box>
            </Grid>
            <Grid container item xs={12} md={5} order={{ xs: 1, md: 2 }}>
              <Box
                sx={{
                  width: "100%",
                  maxWidth: 500,
                  mx: "auto",
                  mt: 3,
                  position: "relative",
                  height: { xs: 260, sm: 320, md: 450 },
                  overflow: "hidden",
                  borderRadius: 3,
                }}
              >
                <Card
                  sx={{
                    width: "100%",
                    height: "100%",
                    background: "transparent",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <CardContent
                    sx={{
                      width: "100%",
                      position: "relative",
                      height: "100%",
                      overflow: "hidden",
                    }}
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        width: "90%",
                        animation: "creditsScroll 40s linear infinite",
                        "@keyframes creditsScroll": {
                          "0%": { top: "100%" },
                          "100%": { top: `-${credits.length * 95}px` },
                        },
                      }}
                    >
                      {credits.concat(credits).map((credit, idx) => (
                        <Box
                          key={idx}
                          sx={{
                            width: "100%",
                            textAlign: "center",
                            mb: 2,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Typography
                            variant="h6"
                            fontWeight="bold"
                            mt={0}
                            sx={{
                              fontSize: {
                                xs: "1.05rem",
                                sm: "1.1rem",
                                md: "1.15rem",
                              },
                            }}
                          >
                            {credit.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            mt={0}
                            sx={{
                              fontSize: {
                                xs: "0.92rem",
                                sm: "0.96rem",
                                md: "1rem",
                              },
                            }}
                          >
                            {credit.content}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            </Grid>
          </Grid>
          <Button
            variant="contained"
            onClick={handleNavigateHome}
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: 2,
              mx: "auto",
              fontSize: {
                xs: "0.86rem",
                sm: "0.86rem",
                md: "0.86rem",
                lg: "0.95rem",
                xl: "1rem",
              },
            }}
          >
            Volver al inicio
          </Button>
        </Paper>
      </SectionAnimation>
    </Container>
  );
});

AgradecimientosView.displayName = "AgradecimientosView";

export default AgradecimientosView;
