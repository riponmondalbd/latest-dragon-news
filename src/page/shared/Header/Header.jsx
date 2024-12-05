import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";

const Header = () => {
  return (
    <div className="text-center">
      <Link to={"/"}>
        <img className="mx-auto" src={logo} alt="logo" />
      </Link>
      <p>Journalism Without Fear or Favour</p>
    </div>
  );
};

export default Header;
