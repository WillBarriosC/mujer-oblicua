import { forwardRef } from "react";
import { Container } from "@mui/material";
import videoPoem from "/media/videopoem.jpg";

const VideoPoem = forwardRef((props, ref) => (
  <Container
    ref={ref}
    sx={{
      width: "100%",
      height: "100vh",
      backgroundImage: `url(${videoPoem})`,
      borderRadius: 4,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  />
));

export default VideoPoem;

VideoPoem.displayName = "VideoPoem";
