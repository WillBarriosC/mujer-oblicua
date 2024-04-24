import { forwardRef } from "react";
import { Container } from "@mui/material";
import pageMiddleLeft from "/media/middle_1.webp";

const PageMiddleLeft = forwardRef((props, ref) => {
  return (
    <Container
      ref={ref}
      data-density="hard"
      sx={{
        backgroundImage: `url(${pageMiddleLeft})`,
        borderRadius: 4,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
});

export default PageMiddleLeft;

PageMiddleLeft.displayName = "PageMiddleLeft";
