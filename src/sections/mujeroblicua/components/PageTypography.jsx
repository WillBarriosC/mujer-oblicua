import { forwardRef } from "react";
import PropTypes from "prop-types";
import { Box, Container } from "@mui/material";

const PageTypography = forwardRef((props, ref) => {
  return (
    <Container
      ref={ref}
      sx={{ background: "#FFFFF5", color: "#993031", borderRadius: 4 }}
    >
      <Box sx={{ p: 2 }}>{props.children}</Box>
    </Container>
  );
});

export default PageTypography;

PageTypography.displayName = "PageTypography";
PageTypography.propTypes = {
  children: PropTypes.node,
};
