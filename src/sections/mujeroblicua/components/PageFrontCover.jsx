import { forwardRef } from "react";
import { Container } from "@mui/material";
import portraitImage from "/media/portrait.webp";

const PageFrontCover = forwardRef((props, ref) => {
  return (
    <Container
      ref={ref}
      data-density="hard"
      sx={{
        backgroundImage: `url(${portraitImage})`,
        borderRadius: 4,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
});

export default PageFrontCover;

PageFrontCover.displayName = "PageCoverFront";
