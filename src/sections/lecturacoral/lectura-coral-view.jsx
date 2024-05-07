import { Box, Container, Paper, Stack } from "@mui/material";
import {
  SectionAnimation,
  NavigateAnimation,
} from "../../components/animation";
import VideoPlayer from "react-player/lazy";
import PdfButton from "../../components/PdfButton";

export default function LecturaCoralView() {
  return (
    <Container sx={{ pt: 18 }} maxWidth={"lg"}>
      <SectionAnimation>
        <Stack spacing={2}>
          <Paper
            elevation={24}
            sx={{ p: 2, bgcolor: "black", borderRadius: 4 }}
          >
            <VideoPlayer
              controls
              url={"https://www.youtube.com/watch?v=tBM6T5kI1NY"}
              playing={true}
              width="auto"
              height={620}
            />
          </Paper>
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
