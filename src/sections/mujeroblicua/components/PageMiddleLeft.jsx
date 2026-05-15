import { forwardRef, memo } from "react";
import { Container } from "@mui/material";

const containerSx = {
  backgroundImage: "url(/media/middle_1.jpg)",
  borderRadius: 4,
  backgroundSize: "cover",
  backgroundPosition: "center",
  width: "100%",
  height: "100%",
};

const PageMiddleLeftBase = forwardRef((props, ref) => (
  <Container ref={ref} sx={containerSx} />
));

PageMiddleLeftBase.displayName = "PageMiddleLeft";

const PageMiddleLeft = memo(PageMiddleLeftBase);

export default PageMiddleLeft;