import { useContext, useRef, useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Navbar from "../shared/Navbar/Navbar";

const LoginPage = () => {
  const { logInUser, resetEmail } = useContext(AuthContext);

  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const emailRef = useRef(null);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    // login user
    logInUser(email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess("Login successfully");
        e.target.reset();
      })
      .catch((error) => {
        console.error(error);
        setErrorMessage(error.message);
      });

    // reset success and error message
    setSuccess("");
    setErrorMessage("");
  };

  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    console.log(email);
    if (!email) {
      setErrorMessage("Please provide an email");
      return;
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    ) {
      setErrorMessage("Please write a valid email");
      return;
    }

    // send validation email
    resetEmail(email)
      .then(() => {
        alert("Please check your email");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <Navbar />
      <div className="lg:w-1/2 mx-auto border md:p-[75px] mt-28 shadow-xl mb-12">
        <h2 className="text-center text-[35px] font-semibold mt-10">
          Login your account
        </h2>
        <div className="border-b-[1px] border-[#E7E7E7] mt-[50px] mb-[10px]"></div>
        <form onSubmit={handleLogin} className="card-body relative">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              ref={emailRef}
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a
                onClick={handleForgetPassword}
                className="label-text-alt link link-hover"
              >
                Forgot password?
              </a>
            </label>
          </div>
          <div
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-11 bottom-[190px]"
          >
            {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral">Login</button>
          </div>
          <p className="text-center text-base font-semibold text-[#706F6F]">
            Do not Have An Account ?{" "}
            <Link className="text-[#FF8C47]" to={"/register"}>
              Register
            </Link>
          </p>
        </form>
        {success && (
          <p className="text-center text-green-600 font-bold">{success}</p>
        )}
        {errorMessage && (
          <p className="text-center text-red-400 font-bold">{errorMessage}</p>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
