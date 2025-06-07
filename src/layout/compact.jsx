import PropTypes from "prop-types";
import Content from "./content";
import { memo, useMemo } from "react";

const Compact = memo(({ children }) => {
  const memoizedChildren = useMemo(() => children, [children]);
  return <Content>{memoizedChildren}</Content>;
});
Compact.displayName = "Compact";

Compact.propTypes = {
  children: PropTypes.node,
};

export default Compact;