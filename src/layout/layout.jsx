import PropTypes from "prop-types";
import Header from "../components/Header";
import Content from "./content";
import { Box } from "@mui/material";
import { memo } from "react";

const Layout = memo(({ children }) => (
  <Box display="flex" flexDirection="column" height="100dvh">
    <Header />
    <Content>{children}</Content>
  </Box>
));

Layout.displayName = "Layout";

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
