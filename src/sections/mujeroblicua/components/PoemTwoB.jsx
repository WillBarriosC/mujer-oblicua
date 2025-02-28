import { forwardRef } from "react";
import { Container } from "@mui/material";
import poemTwoB from "/media/poem-two-b.jpg";

const PoemTwoB = forwardRef((props, ref) => (
  <Container
    ref={ref}
    sx={{
      width: "100%",
      height: "100vh",
      backgroundImage: `url(${poemTwoB})`,
      borderRadius: 4,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  />
));

export default PoemTwoB;

PoemTwoB.displayName = "PoemTwoB";
