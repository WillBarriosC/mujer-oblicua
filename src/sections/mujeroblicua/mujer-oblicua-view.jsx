import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  useTheme,
  useMediaQuery,
  Paper,
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
import VideoPoem from "./components/VideoPoem";
import VideoPoemImg from "./components/VideoPoemImg";
import BackCover from "./components/BackCover";

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
  VideoPoem,
  VideoPoemImg,
  BackCover,
];

export default function MujerOblicuaView() {
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
                encontrarás: un videopoema, collages animados y algunos de los
                poemas, que podrás descargar en el botón de PDF
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
        </Container>
      )}
    </>
  );
}
