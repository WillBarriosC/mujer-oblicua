import { forwardRef } from "react";
import { Container } from "@mui/material";
import poemThree from "/media/poem-three.jpg";

const PoemThree = forwardRef((props, ref) => (
  <Container
    ref={ref}
    sx={{
      width: "100%",
      height: "100vh",
      backgroundImage: `url(${poemThree})`,
      borderRadius: 4,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  />
));

export default PoemThree;

PoemThree.displayName = "PoemThree";
