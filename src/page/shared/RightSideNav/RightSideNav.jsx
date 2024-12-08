import { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
} from "react-icons/io5";
import { Link } from "react-router-dom";
import bg from "../../../assets/bg.png";
import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";
import { AuthContext } from "../../../provider/AuthProvider";

const RightSideNav = () => {
  const { googleLogin, gitHubLogin } = useContext(AuthContext);

  // google login
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // github login
  const handleGithubLogin = () => {
    gitHubLogin()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      {/* google twitter login */}
      <div>
        <p className="text-xl font-semibold text-[#403F3F] mb-5">Login With</p>
        <button
          onClick={handleGoogleLogin}
          className="btn btn-outline w-full mb-2"
        >
          <FaGoogle />
          Google
        </button>
        <button onClick={handleGithubLogin} className="btn btn-outline w-full">
          <FaGithub />
          Github
        </button>
      </div>

      {/* find us section */}
      <div className="mt-5">
        <p className="text-xl font-semibold text-[#403F3F]">Find Us On</p>
        <div className="border divide-y rounded-t-lg rounded-b-lg my-5">
          <div className="p-[17px] gap-[10px] flex items-center">
            <IoLogoFacebook className="text-[30px]" />
            <p className="font-medium text-[#706F6F]">Facebook</p>
          </div>
          <div className="p-[17px] gap-[10px] flex items-center">
            <IoLogoInstagram className="text-[30px]" />
            <p className="font-medium text-[#706F6F]">Instagram</p>
          </div>
          <div className="p-[17px] gap-[10px] flex items-center">
            <IoLogoTwitter className="text-[30px]" />
            <p className="font-medium text-[#706F6F]">Twitter</p>
          </div>
        </div>
      </div>

      {/* Q-zone section */}
      <div className="bg-[#F3F3F3] mb-5">
        <p className="text-xl font-semibold text-[#403F3F] py-5 pl-[15px]">
          Q-Zone
        </p>
        <img className="w-full" src={qZone1} alt="qZone1" />
        <img className="w-full" src={qZone2} alt="qZone2" />
        <img className="w-full" src={qZone3} alt="qZone3" />
      </div>

      {/* amazing newspaper section */}
      <div
        className="h-auto bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="text-white text-center px-[38px] py-[65px]">
          <h2 className="text-3xl font-bold">Create an Amazing Newspaper</h2>
          <p className="font-normal mt-5">
            Discover thousands of options, easy to customize layouts, one-click
            to import demo and much more.
          </p>
          <Link className="text-xl font-semibold p-[18px] bg-[#D72050]">
            <button className="mt-10">Learn More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RightSideNav;
