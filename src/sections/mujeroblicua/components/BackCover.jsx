import { forwardRef } from "react";
import { Container } from "@mui/material";
import backCoverImage from "/media/back-cover.jpg";

const BackCover = forwardRef((props, ref) => (
  <Container
    ref={ref}
    sx={{
      width: "100%",
      height: "100%",
      backgroundImage: `url(${backCoverImage})`,
      borderRadius: 4,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  />
));

export default BackCover;

BackCover.displayName = "BackCover";
