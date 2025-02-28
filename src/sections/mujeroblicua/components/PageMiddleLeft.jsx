import { forwardRef } from "react";
import { Container } from "@mui/material";
import pageMiddleLeft from "/media/middle_1.jpg";

const PageMiddleLeft = forwardRef((props, ref) => (
  <Container
    ref={ref}
    sx={{
      backgroundImage: `url(${pageMiddleLeft})`,
      borderRadius: 4,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  />
));

export default PageMiddleLeft;

PageMiddleLeft.displayName = "PageMiddleLeft";
