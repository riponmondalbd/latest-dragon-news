import PropTypes from "prop-types";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const Newses = ({ news }) => {
  const { author, image_url, title, details, rating, total_view } = news;
  return (
    <div className="mb-[30px] border rounded-md">
      <div className="flex justify-between items-center bg-[#F3F3F3] py-4 px-5 ">
        <div className="flex gap-[15px]">
          <div>
            <img
              className="w-[40px] rounded-full"
              src={author.img}
              alt={author.name}
            />
          </div>
          <div>
            <p className="text-[#403F3F] font-semibold">{author.name}</p>
            <p className="text-[#706F6F] text-sm font-normal">
              {author.published_date}
            </p>
          </div>
        </div>
        <div className="flex text-2xl text-[#706F6F] gap-[10px]">
          <CiBookmark />
          <CiShare2 />
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-xl text-[#403F3F] font-bold mt-[14px] mb-5">
          {title}
        </h3>
        <img src={image_url} alt={title} />
        {details.length > 180 ? (
          <p className="text-base text-[#706F6F] font-normal mt-8">
            {details.slice(0, 180)} <br />
            <Link className="text-[#FF8C47] font-semibold">Read More</Link>
          </p>
        ) : (
          <p className="text-base text-[#706F6F] font-normal mt-8">{details}</p>
        )}
        <div className="border-b-[1px] border-[#E7E7E7]  my-[20px]"></div>

        <div className="flex justify-between">
          <div className="flex items-center gap-[10px]">
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
            <p className="font-medium text-[#706F6F] mt-[5px]">
              {rating.number}
            </p>
          </div>
          <div className="flex items-center gap-[10px]">
            <FaEye className="text-2xl text-[#706F6F]" />
            <p className="text-[#706F6F] font-medium">{total_view}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

Newses.propTypes = {
  news: PropTypes.shape({
    author: PropTypes.shape({
      img: PropTypes.node,
      name: PropTypes.node,
      published_date: PropTypes.node,
    }),
    image_url: PropTypes.node,
    title: PropTypes.node,
    details: PropTypes.node,
    rating: PropTypes.shape({
      number: PropTypes.node,
    }),
    total_view: PropTypes.node,
  }),
};

export default Newses;
