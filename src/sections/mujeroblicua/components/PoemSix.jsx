import { forwardRef, memo } from "react";
import { Container } from "@mui/material";
import poemFive from "/media/poem-six.jpg";

const PoemSix = memo(
  forwardRef((props, ref) => (
    <Container
      ref={ref}
      sx={{
        backgroundImage: `url(${poemFive})`,
        borderRadius: 4,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
  ))
);

export default PoemSix;

PoemSix.displayName = "PoemSix";
