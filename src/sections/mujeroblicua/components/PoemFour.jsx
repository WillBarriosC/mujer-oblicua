import { forwardRef } from "react";
import { Container } from "@mui/material";
import poemFour from "/media/poem-four.jpg";

const PoemFour = forwardRef((props, ref) => (
  <Container
    ref={ref}
    sx={{
      width: "100%",
      height: "100%",
      backgroundImage: `url(${poemFour})`,
      borderRadius: 4,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  />
));

export default PoemFour;

PoemFour.displayName = "PoemFour";
