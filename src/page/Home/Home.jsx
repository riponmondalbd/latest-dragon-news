import { useLoaderData } from "react-router-dom";
import BreakingNews from "../BreakingNews";
import Newses from "../Newses/Newses";
import Header from "../shared/Header/Header";
import LeftSideNav from "../shared/LeftSideNav/LeftSideNav";
import Navbar from "../shared/Navbar/Navbar";
import RightSideNav from "../shared/RightSideNav/RightSideNav";

const Home = () => {
  const newses = useLoaderData();
  // console.log(newses);
  return (
    <div>
      <Header />
      <BreakingNews />
      <Navbar />
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 mt-[76px]">
        <div>
          <LeftSideNav />
        </div>
        <div className="lg:col-span-2 ">
          <h3 className="text-xl font-semibold text-[#403F3F]"></h3>
          {newses.map((news) => (
            <Newses key={news._id} news={news}></Newses>
          ))}
        </div>
        <div>
          <RightSideNav />
        </div>
      </div>
    </div>
  );
};

export default Home;
