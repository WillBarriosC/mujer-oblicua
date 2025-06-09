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
import PdfButton from "../../components/PdfButton";
import Loading from "../../components/Loading";

const HTMLFlipBook = lazy(() => import("react-pageflip"));
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
    fontSize: { xs: "0.86rem", sm: "0.86rem", md: "0.86rem", lg: "0.95rem", xl: "1rem" },
    lineHeight: 1.6,
    fontFamily: "SourceSerifPro",
    textAlign: "justify",
    textIndent: "2.5em",
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
              <Box sx={{ height: { xs: 8, sm: 16 } }} />
              <Button
                variant="contained"
                onClick={handleContinue}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  mx: "auto",
                  fontSize: { xs: "0.86rem", sm: "0.86rem", md: "0.86rem", lg: "0.95rem", xl: "1rem" }
                }}
              >
                Continuar
              </Button>
            </Paper>
          </SectionAnimation>
        </Container>
      ) : (
        <Suspense
          fallback={
            <Box>
              <Loading />
            </Box>
          }
        >
          <Container maxWidth="md" disableGutters sx={{ overflow: "hidden" }}>
            <SectionAnimation key={"book-content"}>
              <Stack spacing={2} sx={{ overflow: "hidden" }}>
                <HTMLFlipBook
                  width={isMobile ? 570 : 520}
                  height={690}
                  minWidth={330}
                  size="stretch"
                  maxShadowOpacity={0}
                  showCover={true}
                  flippingTime={700}
                  disableFlipByClick
                  showPageCorners={false}
                  renderOnlyPageLengthChange={true}
                  mobileScrollSupport={true}
                >
                  {pages.map((PageComponent, index) => (
                    <PageComponent key={index} />
                  ))}
                </HTMLFlipBook>
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
                    mt: 15,
                  }}
                >
                  Haz click en las esquinas del libro interactivo para pasar de
                  página.
                </MuiAlert>
              </Snackbar>
            </SectionAnimation>
          </Container>
        </Suspense>
      )}
    </>
  );
}
