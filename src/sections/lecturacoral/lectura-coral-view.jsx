import { Box, Container, Paper, Stack } from "@mui/material";
import {
  SectionAnimation,
  NavigateAnimation,
} from "../../components/animation";
import VideoPlayer from "react-player/lazy";
import PdfButton from "../../components/PdfButton";
import { memo } from "react";

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
  return (
    <Container sx={{ pb: { xs: "40%", sm: 0 } }}>
      <SectionAnimation>
        <Stack spacing={2}>
          <VideoSection />
          <PdfButtonSection />
        </Stack>
      </SectionAnimation>
    </Container>
  );
}
