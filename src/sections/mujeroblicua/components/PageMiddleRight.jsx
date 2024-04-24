import { forwardRef } from "react";
import { Container } from "@mui/material";
import pageMiddleRight from "/media/middle_2.webp";

const PageMiddleRight = forwardRef((props, ref) => {
  return (
    <Container
      ref={ref}
      data-density="hard"
      sx={{
        backgroundImage: `url(${pageMiddleRight})`,
        borderRadius: 4,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
});

export default PageMiddleRight;

PageMiddleRight.displayName = "PageMiddleRight";
