import { forwardRef } from "react";
import { Container } from "@mui/material";
import versoCover from "/media/verso.jpg";

const VersoCover = forwardRef((props, ref) => (
  <Container
    ref={ref}
    sx={{
      width: "100%",
      height: "100vh",
      backgroundImage: `url(${versoCover})`,
      borderRadius: 4,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  />
));

export default VersoCover;

VersoCover.displayName = "VersoCover";
