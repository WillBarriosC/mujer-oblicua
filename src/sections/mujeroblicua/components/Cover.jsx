import { forwardRef, memo } from "react";
import { Container } from "@mui/material";
import portraitImage from "/media/portrait.jpg";

const Cover = memo(
  forwardRef((props, ref) => (
    <Container
      ref={ref}
      sx={{
        backgroundImage: `url(${portraitImage})`,
        borderRadius: 4,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
  ))
);

export default Cover;

Cover.displayName = "Cover";
