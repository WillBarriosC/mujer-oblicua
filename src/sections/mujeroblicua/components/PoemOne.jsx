import { forwardRef, memo } from "react";
import { Container } from "@mui/material";
import poemOne from "/media/poem-one.jpg";

const PoemOne = memo(
  forwardRef((props, ref) => (
    <Container
      ref={ref}
      sx={{
        backgroundImage: `url(${poemOne})`,
        borderRadius: 4,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
  ))
);

export default PoemOne;

PoemOne.displayName = "PoemOne";
