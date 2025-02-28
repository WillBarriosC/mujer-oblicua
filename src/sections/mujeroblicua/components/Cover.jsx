import { forwardRef } from "react";
import { Container } from "@mui/material";
import portraitImage from "/media/portrait.jpg";

const Cover = forwardRef((props, ref) => (
  <Container
    ref={ref}
    sx={{
      width: "100%",
      height: "100vh",
      backgroundImage: `url(${portraitImage})`,
      borderRadius: 4,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  />
));

export default Cover;

Cover.displayName = "Cover";
