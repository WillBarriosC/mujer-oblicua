import { memo } from "react";
import logo from "/media/logo.webp";

const Logo = () => {
  return <img src={logo} height={75} alt="logo" />;
};

const MemoizedLogo = memo(Logo);
export default MemoizedLogo;
