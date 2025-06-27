import { forwardRef, memo } from "react";
import { Container } from "@mui/material";
import versoCover from "/media/verso.jpg";

const VersoCover = memo(
  forwardRef((props, ref) => (
    <Container
      ref={ref}
      sx={{
        backgroundImage: `url(${versoCover})`,
        borderRadius: 4,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
  ))
);

export default VersoCover;

VersoCover.displayName = "VersoCover";
