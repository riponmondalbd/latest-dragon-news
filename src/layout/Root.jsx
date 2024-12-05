import { Outlet } from "react-router-dom";
import Footer from "../page/Footer/Footer";

const Root = () => {
  return (
    <div className="font-poppins">
      <div className="max-w-7xl mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
