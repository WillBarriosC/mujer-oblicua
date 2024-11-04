import PropTypes from "prop-types";
import { Box } from "@mui/material";
import backgroundImage from "/background/overlay.webp";

export default function Content({ children }) {
  return (
    <>
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {children}
      </Box>
    </>
  );
}

Content.propTypes = {
  children: PropTypes.node,
};
