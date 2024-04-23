import PropTypes from "prop-types";
import Header from "../components/Header";
import Content from "./content";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Content>{children}</Content>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};
