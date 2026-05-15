import { forwardRef, memo } from "react";
import { Container } from "@mui/material";

const containerSx = {
  backgroundImage: "url(/media/poem-one.jpg)",
  borderRadius: 4,
  backgroundSize: "cover",
  backgroundPosition: "center",
  width: "100%",
  height: "100%",
};

const PoemOneBase = forwardRef((props, ref) => (
  <Container ref={ref} sx={containerSx} />
));

PoemOneBase.displayName = "PoemOne";

const PoemOne = memo(PoemOneBase);

export default PoemOne;