import { forwardRef, memo } from "react";
import { Container } from "@mui/material";
//import poemFour from "/media/poem-four.jpg";

const PoemFour = memo(
  forwardRef((props, ref) => (
    <Container
      ref={ref}
      sx={{
        backgroundImage: "url(/media/poem-four.jpg)",
        borderRadius: 4,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
  ))
);

export default PoemFour;

PoemFour.displayName = "PoemFour";
