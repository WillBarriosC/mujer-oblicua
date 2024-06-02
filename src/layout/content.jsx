import PropTypes from "prop-types";
import { Box, GlobalStyles } from "@mui/material";
import backgroundImage from "/background/overlay.webp";

export default function Content({ children }) {
  return (
    <>
      <GlobalStyles
        styles={{
          body: {
            overflow: "hidden",
          },
        }}
      />
      <Box
        sx={{
          height: "90vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
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
