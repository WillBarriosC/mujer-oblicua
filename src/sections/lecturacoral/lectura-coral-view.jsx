import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  SectionAnimation,
  NavigateAnimation,
} from "../../components/animation";
import VideoPlayer from "react-player/lazy";
import PdfButton from "../../components/PdfButton";
import { memo, useState } from "react";

const VideoSection = memo(() => (
  <Paper elevation={24} sx={{ p: 2, bgcolor: "black", borderRadius: 2 }}>
    <Box sx={{ maxWidth: "100%", aspectRatio: 2 }}>
      <VideoPlayer
        controls
        url={"https://www.youtube.com/watch?v=KxfPEdszhQU"}
        playing={true}
        width="100%"
        height="100%"
      />
    </Box>
  </Paper>
));
VideoSection.displayName = "VideoSection";
const PdfButtonSection = memo(() => (
  <Box sx={{ flexGrow: 1 }} display={"flex"} justifyContent={"center"}>
    <NavigateAnimation>
      <PdfButton />
    </NavigateAnimation>
  </Box>
));
PdfButtonSection.displayName = "PdfButtonSection";

export default function LecturaCoralView() {
  const [showInitialContent, setShowInitialContent] = useState(true);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleContinue = () => {
    setShowInitialContent(false);
  };

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
    <>
      {showInitialContent ? (
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
          <SectionAnimation key={"book-intro"}>
            <Paper sx={paperStyles}>
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
                  Lectura coral
                </Typography>
              </Box>
              <Typography variant="body1" color="black" sx={{ ...textStyles }}>
                Aquí encontrarás la presentación de la plaquette Mujer oblicua.
                Ésta fue presentada en el 2021 en una lectura performática con
                las escritoras y artistas colombianas:{" "}
                <Box component="span" sx={{ fontWeight: 600 }}>
                  Lucille Dupin
                </Box>
                ,{" "}
                <Box component="span" sx={{ fontWeight: 600 }}>
                  Yirama Castaño
                </Box>
                ,{" "}
                <Box component="span" sx={{ fontWeight: 600 }}>
                  Carolina Anfibia
                </Box>
                ,{" "}
                <Box component="span" sx={{ fontWeight: 600 }}>
                  Alexandra Espinosa
                </Box>
                ,{" "}
                <Box component="span" sx={{ fontWeight: 600 }}>
                  Laura Jaramillo
                </Box>
                ,{" "}
                <Box component="span" sx={{ fontWeight: 600 }}>
                  Lina Botero
                </Box>
                ,{" "}
                <Box component="span" sx={{ fontWeight: 600 }}>
                  Cristina Villota
                </Box>
                , con ambientación sonora por{" "}
                <Box component="span" sx={{ fontWeight: 600 }}>
                  Sara Fernández
                </Box>
                ; en esta lectura, que quedó en grabada en video, se puede ver
                el poder de la lectura colectiva entre mujeres, las
                posibilidades del cuerpo y la voz a través de la lectura
                performática de poesía, las posibilidades expandidas del libro.
              </Typography>
              <Box sx={{ height: { xs: 8, sm: 16 } }} />
              <Typography variant="body1" color="black" sx={textStyles}>
                Esta lectura coral está inspirada en la experiencia performática
                de la Acción Veladas, colectiva conformada por{" "}
                <Box component="span" sx={{ fontWeight: 600 }}>
                  Carolina Anfibia
                </Box>
                ,{" "}
                <Box component="span" sx={{ fontWeight: 600 }}>
                  Paola Correa
                </Box>
                ,{" "}
                <Box component="span" sx={{ fontWeight: 600 }}>
                  Filippa Prietov
                </Box>
                ,{" "}
                <Box component="span" sx={{ fontWeight: 600 }}>
                  Hanna Thiesing
                </Box>
                ,{" "}
                <Box component="span" sx={{ fontWeight: 600 }}>
                  Jamie Angie Howard Bernal
                </Box>
                ,{" "}
                <Box component="span" sx={{ fontWeight: 600 }}>
                  Kro Sans Persépolis
                </Box>
                ,{" "}
                <Box component="span" sx={{ fontWeight: 600 }}>
                  Ima Torres
                </Box>
                ,{" "}
                <Box component="span" sx={{ fontWeight: 600 }}>
                  María Inés Rodríguez
                </Box>{" "}
                y{" "}
                <Box component="span" sx={{ fontWeight: 600 }}>
                  Angie Andrea Arango
                </Box>
                . En pandemia, fui invitada por{" "}
                <Box component="span" sx={{ fontWeight: 600 }}>
                  Carolina Anfibia
                </Box>{" "}
                y{" "}
                <Box component="span" sx={{ fontWeight: 600 }}>
                  Giovana Suárez
                </Box>{" "}
                a un ejercicio de lectura para la liberación de textos de
                archivo (escritos aproximadamente hace un siglo) por colombianas
                que contribuyeron a distintos procesos de emancipación y
                reivindicación de derechos de las mujeres en Colombia,
                recuperados en la tesis de doctorado de{" "}
                <Box component="span" sx={{ fontWeight: 600 }}>
                  Giovana Suárez
                </Box>
                .
              </Typography>
              <Box sx={{ height: { xs: 8, sm: 16 } }} />
              <Typography variant="body1" color="black" sx={textStyles}>
                Esta grabación es una invitación a que explores, disfrutes y
                compartas esta forma de leer y acuerpar estos poemas.
              </Typography>
              <Box sx={{ height: { xs: 8, sm: 16 } }} />
              <Button
                variant="contained"
                onClick={handleContinue}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  mx: "auto",
                  fontSize: { xs: "0.86rem", sm: "0.86rem", md: "0.86rem", lg: "0.95rem", xl: "1rem" },
                }}
              >
                Continuar
              </Button>
            </Paper>
          </SectionAnimation>
        </Container>
      ) : (
        <Container
          sx={{
            pb: { xs: "40%", sm: 0 },
          }}
        >
          <SectionAnimation key={"book-video"}>
            <Stack spacing={2}>
              <VideoSection />
              <PdfButtonSection />
            </Stack>
          </SectionAnimation>
        </Container>
      )}
    </>
  );
}
