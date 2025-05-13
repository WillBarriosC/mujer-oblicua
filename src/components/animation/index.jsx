import React from "react";
import PropTypes from "prop-types";
import { m } from "framer-motion";
import { Box } from "@mui/material";

const mainAnimationConfig = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.5 },
};

const navigateAnimationConfig = {
  whileHover: { scale: 1.1 },
  transition: { type: "spring", stiffness: 800, damping: 12 },
};

const sectionAnimationConfig = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5 },
};

export const MainAnimation = React.memo(({ children }) => {
  return (
    <Box>
      <m.div {...mainAnimationConfig}>{children}</m.div>
    </Box>
  );
});

export const NavigateAnimation = React.memo(({ children }) => {
  return (
    <Box>
      <m.div {...navigateAnimationConfig}>{children}</m.div>
    </Box>
  );
});

export const SectionAnimation = React.memo(({ children }) => {
  return (
    <Box>
      <m.div {...sectionAnimationConfig}>{children}</m.div>
    </Box>
  );
});

MainAnimation.displayName = "MainAnimation";
NavigateAnimation.displayName = "NavigateAnimation";
SectionAnimation.displayName = "SectionAnimation";

MainAnimation.propTypes = {
  children: PropTypes.node,
};
NavigateAnimation.propTypes = {
  children: PropTypes.node,
};
SectionAnimation.propTypes = {
  children: PropTypes.node,
};
