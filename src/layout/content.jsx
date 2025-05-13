import PropTypes from "prop-types";
import { Box } from "@mui/material";
import backgroundImage from "/background/overlay.webp";
import { memo } from "react";

const Content = memo(({ children }) => (
  <Box
    sx={{
      height: "100dvh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      overflow: "hidden",
    }}
  >
    {children}
  </Box>
));

Content.displayName = "Content";

Content.propTypes = {
  children: PropTypes.node,
};

export default Content;
