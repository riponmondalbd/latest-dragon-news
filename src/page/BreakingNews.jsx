import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className="bg-[#F3F3F3] flex gap-5 p-4">
      <button className="bg-[#D72050] text-white px-6 py-[9px]">Latest</button>
      <Marquee pauseOnHover={true}>
        <p className="mr-4">
          Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military
          Aid Package Yet <Link className="text-blue-600">Read More..</Link>
        </p>
        <p className="mr-4">
          Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military
          Aid Package Yet <Link className="text-blue-600">Read More..</Link>
        </p>
        <p className="mr-4">
          Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military
          Aid Package Yet <Link className="text-blue-600">Read More..</Link>
        </p>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
