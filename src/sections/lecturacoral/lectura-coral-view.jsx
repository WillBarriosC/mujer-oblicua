import { Box, Container, Paper, Stack } from "@mui/material";
import VideoPlayer from "react-player/lazy";
import { m } from "framer-motion";
import PdfButton from "../../components/PdfButton";

export default function LecturaCoralView() {
  return (
    <Container maxWidth={"lg"}>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
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
            <PdfButton />
          </Box>
        </Stack>
      </m.div>
    </Container>
  );
}
