import { forwardRef } from "react";
import { Container } from "@mui/material";
import backCoverImage from "/media/back-cover.webp";

const PageBackCover = forwardRef((props, ref) => {
  return (
    <Container
      ref={ref}
      data-density="hard"
      sx={{
        backgroundImage: `url(${backCoverImage})`,
        borderRadius: 4,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
});

export default PageBackCover;

PageBackCover.displayName = "PageBackCover";
