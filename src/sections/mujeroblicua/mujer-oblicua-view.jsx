import React, { useState, useMemo, useRef } from "react";
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
import Cover from "./components/Cover";
import VersoCover from "./components/VersoCover";
import PoemOne from "./components/PoemOne";
import PoemTwoA from "./components/PoemTwoA";
import PoemTwoB from "./components/PoemTwoB";
import PoemThree from "./components/PoemThree";
import CollageTwo from "./components/CollageTwo";
import PageMiddleLeft from "./components/PageMiddleLeft";
import PageMiddleRight from "./components/PageMiddleRight";
import PoemFour from "./components/PoemFour";
import CollageThree from "./components/CollageThree";
import PoemFive from "./components/PoemFive";
import VideoPoemImgTwo from "./components/VideoPoemImgTwo";
import PoemSix from "./components/PoemSix";
import VideoPoemImg from "./components/VideoPoemImg";
import BackCover from "./components/BackCover";

const MemoizedPages = [
  React.memo(Cover),
  React.memo(VersoCover),
  React.memo(PoemOne),
  React.memo(PoemTwoA),
  React.memo(PoemTwoB),
  React.memo(PoemThree),
  React.memo(CollageTwo),
  React.memo(PageMiddleLeft),
  React.memo(PageMiddleRight),
  React.memo(PoemFour),
  React.memo(CollageThree),
  React.memo(PoemFive),
  React.memo(VideoPoemImgTwo),
  React.memo(PoemSix),
  React.memo(VideoPoemImg),
  React.memo(BackCover),
];

export default function MujerOblicuaView() {
  const [showInitialContent, setShowInitialContent] = useState(true);
  const [showAlert, setShowAlert] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const bookRef = useRef();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const totalPages = MemoizedPages.length;


  const handleContinue = () => {
    setShowInitialContent(false);
    setShowAlert(true);
  };

  const handlePrevPage = () => {
    if (bookRef.current) {
      bookRef.current.pageFlip().flipPrev();
    }
  };

  const handleNextPage = () => {
    if (bookRef.current) {
      bookRef.current.pageFlip().flipNext();
    }
  };

  const handleFlip = (e) => {
    setCurrentPage(e.data);
  };

  const paperStyles = useMemo(() => ({
    px: { xs: 2, sm: 3, md: 4 },
    py: { xs: 2.5, sm: 3.5 },
    borderRadius: 4,
    backgroundColor: "rgba(255, 255, 255, 0.6)",
  }), []);

  const textStyles = useMemo(() => ({
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
    textIndent: "2.5em",
  }), []);

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
                  fontSize: {
                    xs: "0.86rem",
                    sm: "0.86rem",
                    md: "0.86rem",
                    lg: "0.95rem",
                    xl: "1rem",
                  },
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
              <HTMLFlipBook
                ref={bookRef}
                width={isMobile ? 570 : 500}
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
                onFlip={handleFlip}
              >
                {MemoizedPages.map((PageComponent, index) => (
                  <PageComponent key={index} />
                ))}
              </HTMLFlipBook>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  mx: "auto",
                  fontSize: {
                    xs: "0.86rem",
                    sm: "0.86rem",
                    md: "0.86rem",
                    lg: "0.95rem",
                    xl: "1rem",
                  },
                  gap: 10,
                }}
              >
                <Button
                  variant="contained"
                  onClick={handlePrevPage}
                  disabled={currentPage === 0}
                >
                  Anterior
                </Button>
                <Button
                  variant="contained"
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages - 1}
                >
                  Siguiente
                </Button>
              </Box>
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
              Haz click en las esquinas del libro interactivo  o en los botones de navegación para pasar de
              página.
            </MuiAlert>
          </Snackbar>
        </Container>
      )}
    </>
  );
};
