import { forwardRef } from "react";
import { Container } from "@mui/material";
import poemTwoA from "/media/poem-two-a.jpg";

const PoemTwoA = forwardRef((props, ref) => (
  <Container
    ref={ref}
    sx={{
      width: "100%",
      height: "100vh",
      backgroundImage: `url(${poemTwoA})`,
      borderRadius: 4,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  />
));

export default PoemTwoA;

PoemTwoA.displayName = "PoemTwoA";
