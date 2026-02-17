import { memo } from "react";
//import logo from "/media/logo.jpg";

const Logo = () => {
  return (
    <img
      src={"/media/logo.jpg"}
      alt="Logo Mujer Oblicua"
      height={75}
      loading="lazy"
      style={{ display: "block"}}
    />
  );
};

const MemoizedLogo = memo(Logo);
export default MemoizedLogo;