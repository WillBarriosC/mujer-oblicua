import PropTypes from "prop-types";
import { Box } from "@mui/material";
import backgroundImage from "/background/overlay.jpg";
import { memo } from "react";

const Content = memo(({ children }) => (
  <Box
    sx={{
      flex: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      overflow: {xs: "visible",sm: "visible", md: "hidden", lg: "hidden", xl: "hidden"},
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
