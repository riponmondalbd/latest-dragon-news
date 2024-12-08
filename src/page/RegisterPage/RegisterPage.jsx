import { sendEmailVerification, updateProfile } from "firebase/auth";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Navbar from "../shared/Navbar/Navbar";

const RegisterPage = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegisterUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const terms = e.target.terms.checked;

    // register a user
    createUser(email, password)
      .then((result) => {
        // update user profile
        updateProfile(result.user, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {})
          .catch((error) => {
            console.error(error);
          });

        // email verification
        sendEmailVerification(result.user)
          .then(() => {
            alert("check your email and verify account");
          })
          .catch((error) => {
            console.error(error);
          });
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });

    console.log(name, photo, email, password, terms);
  };
  return (
    <div>
      <Navbar />
      <div className="md:w-1/2 mx-auto border p-[75px] mt-28 shadow-xl mb-12">
        <h2 className="text-center text-[35px] font-semibold mt-10">
          Register your account
        </h2>
        <div className="border-b-[1px] border-[#E7E7E7] mt-[50px] mb-[10px]"></div>
        <form onSubmit={handleRegisterUser} className="card-body">
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
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
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
        </form>
        <p className="text-center text-base font-semibold text-[#706F6F]">
          Already have Account? Please{" "}
          <Link className="text-[#FF8C47]" to={"/login"}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
