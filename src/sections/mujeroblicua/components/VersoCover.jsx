import { forwardRef, memo } from "react";
import { Container } from "@mui/material";

const containerSx = {
  backgroundImage: "url(/media/verso.jpg)",
  borderRadius: 4,
  backgroundSize: "cover",
  backgroundPosition: "center",
  width: "100%",
  height: "100%",
};

const VersoCoverBase = forwardRef((props, ref) => (
  <Container ref={ref} sx={containerSx} />
));

VersoCoverBase.displayName = "VersoCover";

const VersoCover = memo(VersoCoverBase);

export default VersoCover;