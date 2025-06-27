import { forwardRef, memo } from "react";
import { Container } from "@mui/material";
import poemTwoA from "/media/poem-two-a.jpg";

const PoemTwoA = memo(
  forwardRef((props, ref) => (
    <Container
      ref={ref}
      sx={{
        backgroundImage: `url(${poemTwoA})`,
        borderRadius: 4,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
  ))
);

export default PoemTwoA;

PoemTwoA.displayName = "PoemTwoA";
