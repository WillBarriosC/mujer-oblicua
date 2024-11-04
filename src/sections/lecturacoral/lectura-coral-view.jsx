import { Box, Container, Paper, Stack } from "@mui/material";
import {
  SectionAnimation,
  NavigateAnimation,
} from "../../components/animation";
import VideoPlayer from "react-player/lazy";
import PdfButton from "../../components/PdfButton";

export default function LecturaCoralView() {
  return (
    <Container
      sx={{
        pb: {
          xs: "40%",
          sm: 0,
          md: 0,
          lg: 0,
          xl: 0,
        },
      }}
    >
      <SectionAnimation>
        <Stack spacing={2}>
          <Paper
            elevation={24}
            sx={{ p: 2, bgcolor: "black", borderRadius: 2 }}
          >
            <Box sx={{ maxWidth: "100%", aspectRatio: 16 / 8 }}>
              <VideoPlayer
                controls
                url={"https://www.youtube.com/watch?v=tBM6T5kI1NY"}
                playing={true}
                width="100%"
                height="100%"
              />
            </Box>
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
