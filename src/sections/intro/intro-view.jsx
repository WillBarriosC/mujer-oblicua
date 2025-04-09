import {
  Container,
  Typography,
  Box,
  Paper,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { SectionAnimation } from "../../components/animation";

export default function IntroView() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 3, sm: 4, md: 6 } }}>
      <SectionAnimation>
        <Paper
          sx={{
            px: { xs: 2, sm: 3, md: 4 },
            py: { xs: 2.5, sm: 3.5 },
            borderRadius: 4,
            backgroundColor: "rgba(255, 255, 255, 0.4)",
            backdropFilter: "blur(400px)",
            WebkitBackdropFilter: "blur(500px)",
          }}
        >
          <Box mb={2}>
            <Typography
              variant={isMobile ? "h5" : "h4"}
              component="h1"
              gutterBottom
              fontWeight="bold"
              color="black"
              sx={{
                textAlign: isMobile ? "center" : "left",
              }}
            >
              Hola
            </Typography>
          </Box>
          <Typography
            variant="body1"
            color="black"
            sx={{
              fontSize: { xs: "0.95rem", sm: "1rem", md: "1.05rem" },
              lineHeight: 1.6,
              fontFamily: "SourceSerifPro",
              textAlign: "justify",
            }}
          >
            Mujer oblicua fue un poemario escrito en el 2019, para acceder al
            grado de Licenciatura en Literatura en la Universidad del Valle de
            la escritora Daniela Prado. Este poemario busca comunicar a otras
            personas la importancia de expresar y reescribir: el dolor, los
            traumas ocasionados por la violencia contra la mujer y la
            construcción constante de la identidad a través de la historia
            personal y colectiva.
          </Typography>
          <br />
          <Typography
            variant="body1"
            color="black"
            sx={{
              fontSize: { xs: "0.95rem", sm: "1rem", md: "1.05rem" },
              lineHeight: 1.6,
              fontFamily: "SourceSerifPro",
              textAlign: "justify",
              textIndent: "2.5em",
            }}
          >
            Posteriormente, los poemas fueron publicados en una plaquette que
            fue presentada en el 2021 en una lectura performática con las
            escritoras y artistas colombianas: Yirama Castaño, Carolina López,
            Alexandra Espinosa, Laura Jaramillo, Lina Botero, Cristina Villota,
            con ambientación sonora por Sara Fernández; en esta lectura, que
            quedó en video, se puede ver el poder de la lectura colectiva entre
            mujeres, las posibilidades del cuerpo y la voz a través de la
            lectura performática de poesía, las posibilidades expandidas del
            libro.
          </Typography>
          <br />
          <Typography
            variant="body1"
            color="black"
            sx={{
              fontSize: { xs: "0.95rem", sm: "1rem", md: "1.05rem" },
              lineHeight: 1.6,
              fontFamily: "SourceSerifPro",
              textAlign: "justify",
              textIndent: "2.5em",
            }}
          >
            Es a través de este archivo y registro de distintas expresiones
            derivadas del mismo producto, como Mujer oblicua se despliega y
            encuentra la necesidad de convertirse en un libro digital expandido
            que requiere un espacio más amplio en donde albergar todo lo que se
            deriva de él y aún no ha sido publicado.
          </Typography>
          <br />
          <Typography
            variant="body1"
            color="black"
            sx={{
              fontSize: { xs: "0.95rem", sm: "1rem", md: "1.05rem" },
              lineHeight: 1.6,
              fontFamily: "SourceSerifPro",
              textAlign: "justify",
              textIndent: "2.5em",
            }}
          >
            <em>Mujer oblicua</em> se transforma en lo que podrá encontrar aquí,
            un sitio web de poesía hipermedia en donde la autora espera se
            conmueva a través de todas las palabras, videos, sonidos,
            animaciones y sensaciones que se exploran aquí.
          </Typography>
        </Paper>
      </SectionAnimation>
    </Container>
  );
}
