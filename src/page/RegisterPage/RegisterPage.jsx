import { sendEmailVerification, updateProfile } from "firebase/auth";
import { useContext, useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Navbar from "../shared/Navbar/Navbar";

const RegisterPage = () => {
  const { createUser, logOut } = useContext(AuthContext);

  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegisterUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const terms = e.target.terms.checked;

    // reset success and error message
    setSuccess("");
    setErrorMessage("");

    if (password.length < 6) {
      setErrorMessage("Password must be 6 character or longer");
      return;
    } else if (!/[0-9]/.test(password)) {
      setErrorMessage("Password must contain at least one Digit");
      return;
    } else if (!/[a-z]/.test(password)) {
      setErrorMessage("Password must be contain at least one letter");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setErrorMessage("Password must be contain one uppercase");
      return;
    } else if (
      !/^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/.test(password)
    ) {
      setErrorMessage("Password must contain at least one Special Character");
      return;
    } else if (!terms) {
      setErrorMessage("Please accept Terms and conditions");
      return;
    }

    // register a user
    createUser(email, password)
      .then((result) => {
        // update user profile
        updateProfile(result.user, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {})
          .catch(() => {});

        // email verification
        sendEmailVerification(result.user)
          .then(() => {
            logOut();
            e.target.reset();
            alert("check your email and verify account");
          })
          .catch(() => {});
        setSuccess("User Create Successfully");
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };
  return (
    <div>
      <Navbar />
      <div className="lg:w-1/2 mx-auto border md:p-[75px] mt-28 shadow-xl mb-12">
        <h2 className="text-center text-[35px] font-semibold mt-10">
          Register your account
        </h2>
        <div className="border-b-[1px] border-[#E7E7E7] mt-[50px] mb-[10px]"></div>
        <form onSubmit={handleRegisterUser} className="card-body relative">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="phot url"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
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
          </div>
          <div
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-11 bottom-[210px]"
          >
            {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
          </div>
          <div className="flex mt-5">
            <input type="checkbox" name="terms" id="terms" />
            <label
              className="font-normal text-[#706F6F] ml-[10px]"
              htmlFor="terms"
            >
              Accept <span className="font-semibold">Term & Conditions</span>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral">Register</button>
          </div>
          <p className="text-center text-base font-semibold text-[#706F6F]">
            Already have Account? Please{" "}
            <Link className="text-[#FF8C47]" to={"/login"}>
              Login
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

export default RegisterPage;
