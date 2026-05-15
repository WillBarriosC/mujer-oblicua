import { forwardRef, memo } from "react";
import { Container } from "@mui/material";

const containerSx = {
  backgroundImage: "url(/media/poem-two-a.jpg)",
  borderRadius: 4,
  backgroundSize: "cover",
  backgroundPosition: "center",
  width: "100%",
  height: "100%",
};

const PoemTwoABase = forwardRef((props, ref) => (
  <Container ref={ref} sx={containerSx} />
));

PoemTwoABase.displayName = "PoemTwoA";

const PoemTwoA = memo(PoemTwoABase);

export default PoemTwoA;