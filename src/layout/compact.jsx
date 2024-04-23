import PropTypes from "prop-types";
import Content from "./content";

export default function Compact({ children }) {
  return (
    <>
      <Content>{children}</Content>
    </>
  );
}

Compact.propTypes = {
  children: PropTypes.node,
};
