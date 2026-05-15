import { forwardRef, memo } from "react";
import { Container } from "@mui/material";

const containerSx = {
  backgroundImage: "url(/media/poem-six.jpg)",
  borderRadius: 4,
  backgroundSize: "cover",
  backgroundPosition: "center",
  width: "100%",
  height: "100%",
};

const PoemSixBase = forwardRef((props, ref) => (
  <Container ref={ref} sx={containerSx} />
));

PoemSixBase.displayName = "PoemSix";

const PoemSix = memo(PoemSixBase);

export default PoemSix;