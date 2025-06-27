import { forwardRef, memo } from "react";
import { Container } from "@mui/material";
import pageMiddleRight from "/media/middle_2.jpg";

const PageMiddleRight = memo(
  forwardRef((props, ref) => (
    <Container
      ref={ref}
      sx={{
        backgroundImage: `url(${pageMiddleRight})`,
        borderRadius: 4,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
  ))
);

export default PageMiddleRight;

PageMiddleRight.displayName = "PageMiddleRight";
