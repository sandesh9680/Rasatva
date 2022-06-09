import { ReactComponent as LogoDark } from "../assets/images/logos/xtremelogo.svg";
import { Link } from "react-router-dom";
// import LogoF from "../assets/images/logo2.png"
// import LogoS from "../assets/images/logo3.png"

const Logo = () => {
  return (
    <Link to="/">
      <LogoDark />
      {/* <LogoF/> */}
    </Link>
  );
};

export default Logo;
