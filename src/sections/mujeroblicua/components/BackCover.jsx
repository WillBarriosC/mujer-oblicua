import { forwardRef, memo } from "react";
import { Container } from "@mui/material";

const containerSx = {
  backgroundImage: "url(/media/back-cover.jpg)",
  borderRadius: 4,
  backgroundSize: "cover",
  backgroundPosition: "center",
  width: "100%",
  height: "100%",
};

const CoverBase = forwardRef((props, ref) => (
  <Container ref={ref} sx={containerSx} />
));

CoverBase.displayName = "Cover";

const Cover = memo(CoverBase);

export default Cover;