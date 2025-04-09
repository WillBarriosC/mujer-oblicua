import { forwardRef } from "react";
import { Container } from "@mui/material";
import poemOne from "/media/poem-one.jpg";

const PoemOne = forwardRef((props, ref) => (
  <Container
    ref={ref}
    sx={{
      width: "100%",
      height: "100%",
      backgroundImage: `url(${poemOne})`,
      borderRadius: 4,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  />
));

export default PoemOne;

PoemOne.displayName = "PoemOne";
