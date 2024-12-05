import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="hero min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">About Us</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <Link to={"/"}>
              <button className="btn btn-neutral">Get Started</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
