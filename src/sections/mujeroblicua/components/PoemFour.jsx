import { forwardRef, memo } from "react";
import { Container } from "@mui/material";

const containerSx = {
  backgroundImage: "url(/media/poem-four.jpg)",
  borderRadius: 4,
  backgroundSize: "cover",
  backgroundPosition: "center",
  width: "100%",
  height: "100%",
};

const PoemFourBase = forwardRef((props, ref) => (
  <Container ref={ref} sx={containerSx} />
));

PoemFourBase.displayName = "PoemFour";

const PoemFour = memo(PoemFourBase);

export default PoemFour;