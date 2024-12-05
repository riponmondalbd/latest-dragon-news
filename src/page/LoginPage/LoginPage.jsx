import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";

const LoginPage = () => {
  return (
    <div>
      <Navbar />
      <div className="md:w-1/2 mx-auto border p-[75px] mt-28">
        <h2 className="text-center text-[35px] font-semibold mt-10">
          Login your account
        </h2>
        <div className="border-b-[1px] border-[#E7E7E7] "></div>
        <form className="card-body">
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
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral">Login</button>
          </div>
        </form>
        <p className="text-center text-base font-semibold text-[#706F6F]">
          Do not Have An Account ?{" "}
          <Link className="text-[#FF8C47]" to={"/register"}>
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
