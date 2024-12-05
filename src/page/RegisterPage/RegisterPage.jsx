import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";

const RegisterPage = () => {
  return (
    <div>
      <Navbar />
      <div className="md:w-1/2 mx-auto border p-[75px] mt-28 shadow-xl mb-12">
        <h2 className="text-center text-[35px] font-semibold mt-10">
          Register your account
        </h2>
        <div className="border-b-[1px] border-[#E7E7E7] mt-[50px] mb-[10px]"></div>
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
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
