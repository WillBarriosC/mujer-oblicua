import PropTypes from "prop-types";
import { Box } from "@mui/material";
import backgroundImage from "/background/overlay.jpg";
import { memo } from "react";

const Content = memo(({ children }) => (
  <Box
    aria-hidden="true"
    sx={{
      flex: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      overflow: { xs: "auto", sm: "auto", md: "auto", lg: "auto", xl: "auto" },
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
