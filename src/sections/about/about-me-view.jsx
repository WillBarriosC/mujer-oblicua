import React, { useCallback } from "react";
import {
  Container,
  Typography,
  Box,
  Paper,
  useTheme,
  useMediaQuery,
  Button,
  Grid,
} from "@mui/material";
import { SectionAnimation } from "../../components/animation";
import { useNavigate } from "react-router-dom";
import danielaBio from "/media/danielaBio.jpg";

const AboutMeView = React.memo(() => {
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
    fontSize: { xs: "0.86rem", sm: "0.86rem", md: "0.86rem", lg: "0.95rem", xl: "1rem" },
    lineHeight: 1.6,
    fontFamily: "SourceSerifPro",
    textAlign: "justify",
  };

  return (
    <Container
      maxWidth="lg"
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
              component="h5"
              fontWeight="bold"
              color="black"
              sx={{ textAlign: isMobile ? "center" : "left" }}
            >
              Daniela Prado
            </Typography>
            <Typography
              variant="subtitle2"
              component="div"
              gutterBottom
              color="black"
              sx={{ textAlign: isMobile ? "center" : "left" }}
            >
              (Cali, Colombia,1994)
            </Typography>
          </Box>
          <Box>
            <Grid container spacing={2} alignItems="start" direction="row">
              <Grid
                item
                xs={12}
                md={5}
                order={{ xs: 1, md: 2 }}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box
                  component="img"
                  src={danielaBio}
                  alt="Daniela Prado"
                  sx={{
                    width: "100%",
                    objectFit: "contain",
                    maxHeight: { xs:320, sm: 320, md: 500 },
                    borderRadius: 3,
                    boxShadow: 2,
                    ...(theme.breakpoints.up("md") && {
                      maskImage: `linear-gradient(to bottom, black 95%, transparent),
                        linear-gradient(to top, black 95%, transparent),
                        linear-gradient(to right, black 95%, transparent),
                        linear-gradient(to left, black 95%, transparent)`,
                      maskComposite: "intersect",
                      WebkitMaskComposite: "destination-in",
                    }),
                  }}
                />
              </Grid>
              <Grid item xs={12} md={7} order={{ xs: 2, md: 1 }}>
                <Box sx={{ height: { xs: 8, sm: 16 } }} />
                <Typography
                  variant="subtitle2"
                  color="black"
                  sx={{ ...textStyles, textIndent: "0" }}
                >
                  Gótica de trópico, corazón fantasma, amante de manos y de
                  plantas. Escritora. Licenciada en Literatura de la Universidad
                  del Valle. Creadora de símbolos sensibles. Explora la imagen y
                  el lenguaje como artista visual y plástica de collage y
                  collage/poesía en{" "}
                  <a
                    href="https://www.instagram.com/recorte.secreto/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    <u>Recorte Secreto</u>
                  </a>
                  . Creadora de{" "}
                  <a
                    href="https://www.instagram.com/tristestropicosed/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    <u>Tristes Trópicos Editorial</u>
                  </a>{" "}
                  proyecto en el que edita y publica escritoras emergentes
                  colombianas y latinoamericanas. El azar de las formas es su
                  proyecto <a
                    href="https://azaryformas.bandcamp.com/album/acuarim-ntima"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    <u>poético/musical.</u>
                  </a>{" "} Tallerista de escritura creativa y
                  procesos de autogestión editorial. Diseñadora editorial y
                  gráfica freelance.
                </Typography>
                <Box sx={{ height: { xs: 8, sm: 16 } }} />
                <Typography
                  variant="subtitle2"
                  color="black"
                  sx={{ ...textStyles, textIndent: "0" }}
                >
                  <b>Publicaciones</b>
                  <br />
                  <b>Espacios habitables</b> - Sic Semper. 2019. Libro de poesía
                  expandida con exploración de video poesía y poesía
                  musicalizada.
                  <br />
                  <b>Ya no soy esta carne trémula</b> – Proteo Editorial. 2020.
                  Libro objeto de collage/poesía
                  <br />
                  <b>Mujer oblicua</b> – Tristes Trópicos Editorial. 2021.
                  <br />
                  <b>¿Por qué lo bello resulta doloroso?</b> – Editorial
                  Uninorte. 2023. Antología de poesía expandida: collage/poesía,
                  poesía musicalizada, video poesía.
                  <br />
                  <b>Mujer oblicua</b> – Poemario web hipermedia. Tristes
                  Trópicos Editorial.2025
                </Typography>
                <Box sx={{ height: { xs: 8, sm: 16 } }} />
                <Typography
                  variant="subtitle2"
                  color="black"
                  sx={{ ...textStyles, textIndent: "0" }}
                >
                  <b>Contacto</b>
                  <br />
                  danielaprse@gmail.com
                  <br />
                  <a
                    href="https://linktr.ee/danielaprse"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    <b>https://linktr.ee/danielaprse</b>
                  </a>
                </Typography>
              </Grid>
            </Grid>
          </Box>
          <br />
          <Button
            variant="contained"
            onClick={handleNavigateHome}
            sx={{
              display: "flex",
              justifyContent: "center",
              mx: "auto",
              fontSize: { xs: "0.86rem", sm: "0.86rem", md: "0.86rem", lg: "0.95rem", xl: "1rem" },
            }}
          >
            Regresar a home
          </Button>
        </Paper>
      </SectionAnimation>
    </Container>
  );
});

AboutMeView.displayName = "AboutMeView";

export default AboutMeView;
