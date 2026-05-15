import { forwardRef, memo } from "react";
import { Container } from "@mui/material";

const containerSx = {
  backgroundImage: "url(/media/middle_2.jpg)",
  borderRadius: 4,
  backgroundSize: "cover",
  backgroundPosition: "center",
  width: "100%",
  height: "100%",
};

const PageMiddleRightBase = forwardRef((props, ref) => (
  <Container ref={ref} sx={containerSx} />
));

PageMiddleRightBase.displayName = "PageMiddleRight";

const PageMiddleRight = memo(PageMiddleRightBase);

export default PageMiddleRight;