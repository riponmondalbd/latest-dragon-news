import { useEffect, useState } from "react";
import { IoCalendarClearOutline } from "react-icons/io5";
import news1 from "../../../assets/1.png";
import news2 from "../../../assets/2.png";
import news3 from "../../../assets/3.png";
import Category from "../../Category/Category";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <p className="text-xl font-semibold text-[#403F3F]">All Category</p>
      {categories.map((category) => (
        <Category key={category.id} category={category}></Category>
      ))}
      <div>
        <div>
          <img className="w-full" src={news1} alt="news 1" />
          <p className="text-xl font-semibold text-[#403F3F] my-[20px]">
            Bayern Slams Authorities Over Flight Delay to Club World Cup
          </p>
          <div className="flex gap-5 mb-4">
            <p className="text-[#403F3F] font-medium">Sports</p>
            <p className="flex gap-[10px] items-center text-[#9F9F9F]">
              <IoCalendarClearOutline className="text-[24px]" />{" "}
              <span>Jan 4, 2022</span>
            </p>
          </div>
        </div>
        <div>
          <img className="w-full" src={news2} alt="news 2" />
          <p className="text-xl font-semibold text-[#403F3F] my-[20px]">
            Bayern Slams Authorities Over Flight Delay to Club World Cup
          </p>
          <div className="flex gap-5 mb-4">
            <p className="text-[#403F3F] font-medium">Sports</p>
            <p className="flex gap-[10px] items-center text-[#9F9F9F]">
              <IoCalendarClearOutline className="text-[24px]" />{" "}
              <span>Jan 4, 2022</span>
            </p>
          </div>
        </div>
        <div>
          <img className="w-full" src={news3} alt="news 3" />
          <p className="text-xl font-semibold text-[#403F3F] my-[20px]">
            Bayern Slams Authorities Over Flight Delay to Club World Cup
          </p>
          <div className="flex gap-5 mb-4">
            <p className="text-[#403F3F] font-medium">Sports</p>
            <p className="flex gap-[10px] items-center text-[#9F9F9F]">
              <IoCalendarClearOutline className="text-[24px]" />{" "}
              <span>Jan 4, 2022</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSideNav;
