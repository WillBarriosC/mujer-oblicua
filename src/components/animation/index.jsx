import PropTypes from "prop-types";
import { m } from "framer-motion";

const mainAnimationConfig = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.35, ease: "easeInOut" },
  viewport: { once: true },
};

const navigateAnimationConfig = {
  whileHover: { scale: 1.1 },
  transition: { type: "spring", stiffness: 1000, damping: 15 },
  viewport: { once: true },
};

const sectionAnimationConfig = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.15, ease: "easeInOut" },
  viewport: { once: true },
};

export function MainAnimation({ children }) {
  return (
    <m.div {...mainAnimationConfig} aria-hidden="true">
      {children}
    </m.div>
  );
}
MainAnimation.displayName = "MainAnimation";
MainAnimation.propTypes = { children: PropTypes.node.isRequired };

export function NavigateAnimation({ children }) {
  return (
    <m.div {...navigateAnimationConfig} aria-hidden="true">
      {children}
    </m.div>
  );
}
NavigateAnimation.displayName = "NavigateAnimation";
NavigateAnimation.propTypes = { children: PropTypes.node.isRequired };

export function SectionAnimation({ children }) {
  return (
    <m.div {...sectionAnimationConfig} aria-hidden="true">
      {children}
    </m.div>
  );
}
SectionAnimation.displayName = "SectionAnimation";
SectionAnimation.propTypes = { children: PropTypes.node.isRequired };