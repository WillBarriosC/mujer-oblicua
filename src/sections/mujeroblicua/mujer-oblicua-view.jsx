import { lazy, useState } from "react";
import {
  Box,
  Button,
  Container,
  Dialog,
  Stack,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  SectionAnimation,
  NavigateAnimation,
} from "../../components/animation";
import HTMLFlipBook from "react-pageflip";
import PdfButton from "../../components/PdfButton";

const pages = [
  lazy(() => import("./components/Cover")),
  lazy(() => import("./components/VersoCover")),
  lazy(() => import("./components/PoemOne")),
  lazy(() => import("./components/PoemTwoA")),
  lazy(() => import("./components/PoemTwoB")),
  lazy(() => import("./components/PoemThree")),
  lazy(() => import("./components/CollageTwo")),
  lazy(() => import("./components/PageMiddleLeft")),
  lazy(() => import("./components/PageMiddleRight")),
  lazy(() => import("./components/PoemFour")),
  lazy(() => import("./components/CollageThree")),
  lazy(() => import("./components/VideoPoem")),
  lazy(() => import("./components/VideoPoemImg")),
  lazy(() => import("./components/BackCover")),
];

export default function MujerOblicuaView() {
  const [modalOpen, setModalOpen] = useState(true);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  return (
    <>
      <Dialog
        open={modalOpen}
        onClose={handleCloseModal}
        maxWidth="lg"
        hideBackdrop
        PaperProps={{
          sx: {
            px: { xs: 2, sm: 3, md: 4 },
            py: { xs: 2.5, sm: 3.5 },
            borderRadius: 4,
            backgroundColor: "rgba(255, 255, 255, 0.4)",
            backdropFilter: "blur(400px)",
            WebkitBackdropFilter: "blur(500px)",
          },
        }}
      >
        <SectionAnimation>
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
            sx={{
              fontSize: { xs: "0.95rem", sm: "1rem", md: "1.05rem" },
              lineHeight: 1.6,
              fontFamily: "SourceSerifPro",
              textAlign: "justify",
            }}
          >
            Aquí podrás explorar el libro interactivo, entre estas páginas
            encontrarás: un videopoema, collages animados y algunos de los
            poemas, que podrás descargar en el botón de PDF
          </Typography>
          <br />
          <Button
            variant="contained"
            onClick={handleCloseModal}
            sx={{
              display: "flex",
              justifyContent: "center",
              mx: "auto",
            }}
          >
            Continuar
          </Button>
        </SectionAnimation>
      </Dialog>
      {!modalOpen && (
        <Container maxWidth="md" disableGutters sx={{ overflow: "hidden" }}>
          <SectionAnimation>
            <Stack spacing={2}sx={{ overflow: "hidden" }}>
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
