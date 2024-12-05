import BreakingNews from "../BreakingNews";
import Header from "../shared/Header/Header";
import LeftSideNav from "../shared/LeftSideNav/LeftSideNav";
import Navbar from "../shared/Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Header />
      <BreakingNews />
      <Navbar />
      <div className="grid md:grid-cols-4 gap-6 mt-[76px]">
        <div>
          <LeftSideNav />
        </div>
        <div className="md:col-span-2 ">
          <p className="text-xl font-semibold text-[#403F3F]">
            Dragon News Home
          </p>
        </div>
        <div>
          <p className="text-xl font-semibold text-[#403F3F]">Login With</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
