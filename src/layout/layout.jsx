import PropTypes from "prop-types";
import Header from "../components/Header";
import Content from "./content";
import { Box } from "@mui/material";

export default function Layout({ children }) {
  return (
    <>
      <Box display="flex" flexDirection="column" height="100vh">
        <Header />
        <Content>{children}</Content>
      </Box>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};
