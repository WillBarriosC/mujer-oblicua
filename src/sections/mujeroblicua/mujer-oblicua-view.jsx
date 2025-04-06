import { lazy } from "react";
import { Box, Container, Stack } from "@mui/material";
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
  return (
    <Container maxWidth="md">
      <SectionAnimation>
        <Stack spacing={2}>
          <HTMLFlipBook
            width={520}
            height={750}
            minWidth={235}
            minHeight={0}
            size="stretch"
            maxShadowOpacity={0}
            showCover={true}
            flippingTime={900}
            mobileScrollSupport
            disableFlipByClick
            showPageCorners={false}
          >
            {pages.map((PageComponent, index) => (
              <PageComponent key={index} />
            ))}
          </HTMLFlipBook>
          <Container>
            <Box sx={{ flexGrow: 1 }} display="flex" justifyContent="center">
              <NavigateAnimation>
                <PdfButton />
              </NavigateAnimation>
            </Box>
          </Container>
        </Stack>
      </SectionAnimation>
    </Container>
  );
}
