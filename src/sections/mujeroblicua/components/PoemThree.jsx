import { forwardRef, memo } from "react";
import { Container } from "@mui/material";

const containerSx = {
  backgroundImage: "url(/media/poem-three.jpg)",
  borderRadius: 4,
  backgroundSize: "cover",
  backgroundPosition: "center",
  width: "100%",
  height: "100%",
};

const PoemThreeBase = forwardRef((props, ref) => (
  <Container ref={ref} sx={containerSx} />
));

PoemThreeBase.displayName = "PoemThree";

const PoemThree = memo(PoemThreeBase);

export default PoemThree;