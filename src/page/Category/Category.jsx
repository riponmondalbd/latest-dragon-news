import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const Category = ({ category }) => {
  const { id, name } = category;

  return (
    <div className="my-11">
      <NavLink
        className={"text-xl text-[#9F9F9F] font-medium ml-[50px]"}
        to={`/category/${id}`}
      >
        {name}
      </NavLink>
    </div>
  );
};

Category.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.node,
    name: PropTypes.node,
  }),
};

export default Category;
