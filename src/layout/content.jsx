import PropTypes from "prop-types";
import { Box } from "@mui/material";
import { memo } from "react";
//import backgroundImage from "/background/overlay.jpg";

const Content = memo(({ children }) => (
  <Box
    aria-hidden="true"
    sx={{
      flex: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundImage: "url(/background/overlay.jpg)",
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
  children: PropTypes.node.isRequired,
};

export default Content;
