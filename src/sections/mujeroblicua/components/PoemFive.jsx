import { forwardRef, memo } from "react";
import { Container } from "@mui/material";

const containerSx = {
  backgroundImage: "url(/media/poem-five.jpg)",
  borderRadius: 4,
  backgroundSize: "cover",
  backgroundPosition: "center",
  width: "100%",
  height: "100%",
};

const PoemFiveBase = forwardRef((props, ref) => (
  <Container ref={ref} sx={containerSx} />
));

PoemFiveBase.displayName = "PoemFive";

const PoemFive = memo(PoemFiveBase);

export default PoemFive;