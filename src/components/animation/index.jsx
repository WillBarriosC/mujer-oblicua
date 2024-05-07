import PropTypes from "prop-types";
import { m } from "framer-motion";
import { Box } from "@mui/material";

export const MainAnimation = ({ children }) => {
  return (
    <Box>
      <m.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </m.div>
    </Box>
  );
};

export const NavigateAnimation = ({ children }) => {
  return (
    <Box>
      <m.div
        whileHover={{ scale: 1.1 }}
        transition={{
          type: "spring",
          stiffness: 800,
          damping: 12,
        }}
      >
        {children}
      </m.div>
    </Box>
  );
};

export const SectionAnimation = ({ children }) => {
  return (
    <Box>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </m.div>
    </Box>
  );
};

MainAnimation.propTypes = {
  children: PropTypes.node,
};
NavigateAnimation.propTypes = {
  children: PropTypes.node,
};
SectionAnimation.propTypes = {
  children: PropTypes.node,
};
