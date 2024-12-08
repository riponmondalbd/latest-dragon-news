import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData, useParams } from "react-router-dom";
import Header from "../shared/Header/Header";
import RightSideNav from "../shared/RightSideNav/RightSideNav";

const News = () => {
  const { id } = useParams();
  const news = useLoaderData();

  const singleNews = news.find((newsId) => newsId._id === id);

  const { image_url, title, details } = singleNews;

  return (
    <div>
      <Header />

      <div className="grid lg:grid-cols-4 gap-[11px]">
        <div className="lg:col-span-3 ">
          <p className="text-xl text-[#403F3F] font-semibold">Dragon News</p>
          <div className="border rounded-[5px] p-[30px] mt-5">
            <img className="w-full" src={image_url} alt="" />
            <h2 className="text-[25px] text-[#403F3F] font-bold mt-5 mb-2">
              {title}
            </h2>
            <p className="text-base text-[#706F6F] font-normal">{details}</p>
            <Link to={"/"}>
              <button className="bg-[#D72050] py-[9px] text-white text-xl font-medium flex items-center gap-[5px] px-6 mt-8">
                <FaArrowLeft />
                All news in this category
              </button>
            </Link>
          </div>
        </div>
        <div>
          <RightSideNav />
        </div>
      </div>
    </div>
  );
};

export default News;
