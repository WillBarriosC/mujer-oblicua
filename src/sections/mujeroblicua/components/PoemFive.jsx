import { forwardRef } from "react";
import { Container } from "@mui/material";
import poemFive from "/media/poem-five.jpg";

const PoemFive = forwardRef((props, ref) => (
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

export default PoemFive;

PoemFive.displayName = "PoemFour";
