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
          xs: "50%",
          sm: 0,
          md: 0,
          lg: 0,
          xl: 0,
        },
      }}
      maxWidth={"lg"}
    >
      <SectionAnimation>
        <Stack spacing={2}>
          <Paper
            elevation={24}
            sx={{ p: 2, bgcolor: "black", borderRadius: 4 }}
          >
            <Box
              sx={{
                position: "relative",
                paddingTop: {
                  xs: "50%",
                  sm: "50%",
                  md: "50%",
                  lg: "50%",
                },
              }}
            >
              <VideoPlayer
                controls
                url={"https://www.youtube.com/watch?v=tBM6T5kI1NY"}
                playing={true}
                width="100%"
                height="100%"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                }}
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
