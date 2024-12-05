import moment from "moment";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";

const Header = () => {
  return (
    <div className="text-center">
      <Link to={"/"}>
        <img className="mx-auto mt-[50px]" src={logo} alt="logo" />
      </Link>
      <p className="text-lg text-[#706F6F] font-normal mt-5 mb-[10px]">
        Journalism Without Fear or Favour
      </p>
      <p className="text-xl font-medium">
        {moment().format("dddd, MMMM DD, YYYY")}
      </p>
    </div>
  );
};

export default Header;
