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
        url={"https://www.youtube.com/watch?v=tBM6T5kI1NY"}
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
    fontSize: { xs: "0.95rem", sm: "1rem", md: "1.05rem" },
    lineHeight: 1.6,
    fontFamily: "SourceSerifPro",
    textAlign: "justify",
    textIndent: "2.5em",
  };

  return (
    <>
      {showInitialContent ? (
        <Container maxWidth="lg" sx={{ py: { xs: 3, sm: 4, md: 6 } }}>
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
              <Typography
                variant="body1"
                color="black"
                sx={{ ...textStyles, textIndent: "0" }}
              >
                Aquí encontrarás la presentación de la plaquette Mujer oblicua.
                Ésta fue presentada en el 2021 en una lectura performática con
                las escritoras y artistas colombianas: Yirama Castaño, Carolina
                López, Alexandra Espinosa, Laura Jaramillo, Lina Botero,
                Cristina Villota, con ambientación sonora por Sara Fernández; en
                esta lectura, que quedó en video, se puede ver el poder de la
                lectura colectiva entre mujeres, las posibilidades del cuerpo y
                la voz a través de la lectura performática de poesía, las
                posibilidades expandidas del libro.
              </Typography>
                <br />
              <Typography variant="body1" color="black" sx={textStyles}>
                Esta grabación es una invitación a que explores, disfrutes y
                compartas esta forma de leer y acuerpar estos poemas.
              </Typography>
              <br />
              <Button
                variant="contained"
                onClick={handleContinue}  
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  mx: "auto",
                }}
              >
                Continuar
              </Button>
            </Paper>
          </SectionAnimation>
        </Container>
      ) : (
        <Container sx={{ pb: { xs: "40%", sm: 0 } }}>
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
