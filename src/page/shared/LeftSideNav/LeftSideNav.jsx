import { useEffect, useState } from "react";
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
    </div>
  );
};

export default LeftSideNav;
