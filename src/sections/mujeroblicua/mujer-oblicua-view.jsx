import { lazy } from "react";
import { Box, Container, Stack } from "@mui/material";
import {
  SectionAnimation,
  NavigateAnimation,
} from "../../components/animation";
import HTMLFlipBook from "react-pageflip";
import PdfButton from "../../components/PdfButton";
import collagePoem1 from "/media/collagePoem1.webp";
import collagePoem2 from "/media/collagePoem2.webp";
import collagePoem3 from "/media/collagePoem3.webp";
import videoPoemImg from "/media/videopoem.webp";

const PageFrontCover = lazy(() => import("./components/PageFrontCover"));
const PageCollage = lazy(() => import("./components/PageCollage"));
const PageMiddleLeft = lazy(() => import("./components/PageMiddleLeft"));
const PageMiddleRight = lazy(() => import("./components/PageMiddleRight"));
const PageBackCover = lazy(() => import("./components/PageBackCover"));

export default function MujerOblicuaView() {
  return (
    <Container maxWidth={"md"}>
      <SectionAnimation>
        <Stack spacing={2}>
          <HTMLFlipBook
            width={520}
            height={750}
            minWidth={220}
            minHeight={0}

            size="stretch"
            maxShadowOpacity={0}
            showCover={true}
            flippingTime={900}
            showPageCorners={false}
            mobileScrollSupport
          >
            <PageFrontCover />
            <PageCollage key={4} img={collagePoem1} />
            <PageCollage key={6} img={collagePoem2} />
            <PageMiddleLeft key={7} />
            <PageMiddleRight key={8} />
            <PageCollage key={10} img={videoPoemImg} />
            <PageCollage key={12} img={collagePoem3} />
            <PageBackCover />
          </HTMLFlipBook>

          <Box sx={{ flexGrow: 1 }} display={"flex"} justifyContent={"center"}>
            <NavigateAnimation>
              <PdfButton />
            </NavigateAnimation>
          </Box>
        </Stack>
      </SectionAnimation>
    </Container>
  );
}
