import PropTypes from "prop-types";
import Content from "./content";
import { memo } from "react";

const Compact = memo(({ children }) => <Content>{children}</Content>);
Compact.displayName = "Compact";

Compact.propTypes = {
  children: PropTypes.node,
};

export default Compact;
