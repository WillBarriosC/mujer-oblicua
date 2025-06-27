import { forwardRef, memo } from "react";
import { Container } from "@mui/material";
import backCoverImage from "/media/back-cover.jpg";

const BackCover = memo(
  forwardRef((props, ref) => (
    <Container
      ref={ref}
      sx={{
        backgroundImage: `url(${backCoverImage})`,
        borderRadius: 4,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
  ))
);

export default BackCover;

BackCover.displayName = "BackCover";
