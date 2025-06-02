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
import videoPoem from "/media/videopoem.jpg";

const AboutMeView = React.memo(() => {
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
    <Container maxWidth="lg" sx={{ py: { xs: 3, sm: 4, md: 6 } }}>
      <SectionAnimation>
        <Paper sx={paperStyles}>
          <Box mb={2}>
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
              variant={isMobile ? "subtitle1" : "subtitle1"}
              component="subtitle1"
              gutterBottom
              color="black"
              sx={{ textAlign: isMobile ? "center" : "left" }}
            >
              (Cali, Colombia,1994)
            </Typography>
          </Box>
          <Box>
            <Grid container spacing={2} alignItems="start">
              <Grid item xs={12} md={5}>
                <Box
                  component="img"
                  src={videoPoem}
                  alt="Daniela Prado"
                  sx={{
                    width: "100%",
                    borderRadius: 2,
                    boxShadow: 2,
                    objectFit: "cover",
                    maxHeight: 340,
                  }}
                />
              </Grid>
              <Grid item xs={12} md={7}>
                <Typography
                  variant="body1"
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
                  proyecto poético/musical. Tallerista de escritura creativa y
                  procesos de autogestión editorial. Diseñadora editorial y
                  gráfica freelance.
                </Typography>
                <br />
                <Typography
                  variant="body1"
                  color="black"
                  sx={{ ...textStyles, textIndent: "0" }}
                >
                  <b>Publicaciones</b>
                  <br />
                  <b>Espacios Habitables</b> - Sic Semper. 2019. Libro de poesía
                  expandida con exploración de video poesía y poesía
                  musicalizada.
                  <br />
                  <b>Ya no soy esta carne trémula</b> – Proteo Editorial. 2020.
                  Libro objeto de collage/poesía
                  <br />
                  <b>Mujer Oblicua</b> – Tristes Trópicos Editorial. 2021.
                  <br />
                  <b>¿Por qué lo bello resulta doloroso?</b> – Editorial
                  Uninorte. 2023. Antología de poesía expandida: collage/poesía,
                  poesía musicalizada, video poesía.
                  <br />
                  <b>Mujer Oblicua</b> – Poemario web hipermedia. Tristes
                  Trópicos Editorial.2025
                </Typography>
                <br />
                <Typography
                  variant="body1"
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
                    https://linktr.ee/danielaprse
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
