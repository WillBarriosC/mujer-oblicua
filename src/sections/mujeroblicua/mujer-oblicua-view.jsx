import { Suspense, lazy, useState } from "react";
import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  useTheme,
  useMediaQuery,
  Paper,
  Snackbar,
  Alert as MuiAlert,
} from "@mui/material";
import {
  SectionAnimation,
  NavigateAnimation,
} from "../../components/animation";
import HTMLFlipBook from "react-pageflip";
import PdfButton from "../../components/PdfButton";
import Loading from "../../components/Loading";

const Cover = lazy(() => import("./components/Cover"));
const VersoCover = lazy(() => import("./components/VersoCover"));
const PoemOne = lazy(() => import("./components/PoemOne"));
const PoemTwoA = lazy(() => import("./components/PoemTwoA"));
const PoemTwoB = lazy(() => import("./components/PoemTwoB"));
const PoemThree = lazy(() => import("./components/PoemThree"));
const CollageTwo = lazy(() => import("./components/CollageTwo"));
const PageMiddleLeft = lazy(() => import("./components/PageMiddleLeft"));
const PageMiddleRight = lazy(() => import("./components/PageMiddleRight"));
const PoemFour = lazy(() => import("./components/PoemFour"));
const CollageThree = lazy(() => import("./components/CollageThree"));
const PoemFive = lazy(() => import("./components/PoemFive"));
const VideoPoemImgTwo = lazy(() => import("./components/VideoPoemImgTwo"));
const PoemSix = lazy(() => import("./components/PoemSix"));
const VideoPoemImg = lazy(() => import("./components/VideoPoemImg"));
const BackCover = lazy(() => import("./components/BackCover"));

const pages = [
  Cover,
  VersoCover,
  PoemOne,
  PoemTwoA,
  PoemTwoB,
  PoemThree,
  CollageTwo,
  PageMiddleLeft,
  PageMiddleRight,
  PoemFour,
  CollageThree,
  PoemFive,
  VideoPoemImgTwo,
  PoemSix,
  VideoPoemImg,
  BackCover,
];

export default function MujerOblicuaView() {
  const [showInitialContent, setShowInitialContent] = useState(true);
  const [showAlert, setShowAlert] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleContinue = () => {
    setShowInitialContent(false);
    setShowAlert(true);
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
          <SectionAnimation key={"initial-content"}>
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
                  Libro expandido
                </Typography>
              </Box>
              <Typography
                variant="body1"
                color="black"
                sx={{ ...textStyles, textIndent: "0" }}
              >
                Aquí podrás explorar el libro interactivo, entre estas páginas
                encontrarás dos videopoemas, collages animados y algunos de los
                poemas que podrás descargar en el botón de PDF.
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
        <Container maxWidth="md" disableGutters sx={{ overflow: "hidden" }}>
          <SectionAnimation key={"book-content"}>
            <Stack spacing={2} sx={{ overflow: "hidden" }}>
              <Suspense
                fallback={
                  <Box>
                    <Loading />
                  </Box>
                }
              >
                <HTMLFlipBook
                  width={520}
                  height={750}
                  minWidth={235}
                  minHeight={0}
                  size="stretch"
                  maxShadowOpacity={0}
                  showCover={true}
                  flippingTime={900}
                  disableFlipByClick
                  showPageCorners={false}
                  renderOnlyPageLengthChange={true}
                >
                  {pages.map((PageComponent, index) => (
                    <PageComponent key={index} />
                  ))}
                </HTMLFlipBook>
              </Suspense>
              <Container>
                <Box
                  sx={{ flexGrow: 1 }}
                  display="flex"
                  justifyContent="center"
                >
                  <NavigateAnimation>
                    <PdfButton />
                  </NavigateAnimation>
                </Box>
              </Container>
            </Stack>
          </SectionAnimation>
        </Container>
      )}
      <SectionAnimation>
      <Snackbar
        open={showAlert}
        autoHideDuration={10000}
        onClose={() => setShowAlert(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <MuiAlert
          elevation={15}
          variant="contained"
          onClose={() => setShowAlert(false)}
          severity="info"
          sx={{
            fontSize: "1.1rem",
            textAlign: "center",
            bgcolor: "rgba(0, 0, 0)",
            color: "white",
            mt: 15
          }}
        >
          Haz click en las esquinas del libro interactivo para pasar de página.
        </MuiAlert>
      </Snackbar>
      </SectionAnimation>
    </>
  );
}
