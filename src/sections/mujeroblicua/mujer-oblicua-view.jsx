import { lazy } from "react";
import { Box, Container, Stack } from "@mui/material";
import {
  SectionAnimation,
  NavigateAnimation,
} from "../../components/animation";
import HTMLFlipBook from "react-pageflip";
import PdfButton from "../../components/PdfButton";

const Cover = lazy(() => import("./components/Cover"));
const VersoCover = lazy(() => import("./components/VersoCover"));
const BackCover = lazy(() => import("./components/BackCover"));
const PoemOne = lazy(() => import("./components/PoemOne"));
const PoemTwoA = lazy(() => import("./components/PoemTwoA"));
const PoemTwoB = lazy(() => import("./components/PoemTwoB"));
const PoemThree = lazy(() => import("./components/PoemThree"));
const CollageTwo = lazy(() => import("./components/CollageTwo"));
const PageMiddleLeft = lazy(() => import("./components/PageMiddleLeft"));
const PageMiddleRight = lazy(() => import("./components/PageMiddleRight"));
const PoemFour = lazy(() => import("./components/PoemFour"));
const CollageThree = lazy(() => import("./components/CollageThree"));
const VideoPoem = lazy(() => import("./components/VideoPoem"));
const VideoPoemImg = lazy(() => import("./components/VideoPoemImg"));

export default function MujerOblicuaView() {
  return (
    <Container maxWidth={"md"}>
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
            showPageCorners={false}
            mobileScrollSupport
          >
            <Cover />
            <VersoCover />
            <PoemOne />
            <PoemTwoA />
            <PoemTwoB />
            <PoemThree />
            <CollageTwo />
            <PageMiddleLeft />
            <PageMiddleRight />
            <PoemFour />
            <CollageThree />
            <VideoPoem />
            <VideoPoemImg />
            <BackCover />
          </HTMLFlipBook>

          <Box sx={{ flexGrow: 1 }} display="flex" justifyContent="center">
            <NavigateAnimation>
              <PdfButton />
            </NavigateAnimation>
          </Box>
        </Stack>
      </SectionAnimation>
    </Container>
  );
}
