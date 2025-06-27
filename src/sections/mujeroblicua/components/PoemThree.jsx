import { forwardRef, memo } from "react";
import { Container } from "@mui/material";
import poemThree from "/media/poem-three.jpg";

const PoemThree = memo(
  forwardRef((props, ref) => (
    <Container
      ref={ref}
      sx={{
        backgroundImage: `url(${poemThree})`,
        borderRadius: 4,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
  ))
);

export default PoemThree;

PoemThree.displayName = "PoemThree";
