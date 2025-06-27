import { forwardRef, memo } from "react";
import { Container } from "@mui/material";
import poemFive from "/media/poem-five.jpg";

const PoemFive = memo(
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

export default PoemFive;

PoemFive.displayName = "PoemFive";
