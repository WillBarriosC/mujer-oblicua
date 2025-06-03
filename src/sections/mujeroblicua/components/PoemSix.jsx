import { forwardRef } from "react";
import { Container } from "@mui/material";
import poemFive from "/media/poem-six.jpg";

const PoemSix = forwardRef((props, ref) => (
  <Container
    ref={ref}
    sx={{
      width: "100%",
      height: "100%",
      backgroundImage: `url(${poemFive})`,
      borderRadius: 4,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  />
));

export default PoemSix;

PoemSix.displayName = "PoemFour";
