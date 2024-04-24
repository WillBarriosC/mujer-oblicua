import { forwardRef } from "react";
import { Container } from "@mui/material";
import pageVideoPoem from "/media/ilustration_2.webp";

const PageVideoPoem = forwardRef((props, ref) => {
  return (
    <Container
      ref={ref}
      data-density="hard"
      sx={{
        backgroundImage: `url(${pageVideoPoem})`,
        borderRadius: 4,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
});

export default PageVideoPoem;

PageVideoPoem.displayName = "PageVideoPoem";
