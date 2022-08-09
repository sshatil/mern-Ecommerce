import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryList } from "../redux/actions/proudctActions";

const SideBar = ({ showSidebar, setShowSidebar }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategoryList());
  }, [dispatch]);
  const { category } = useSelector((state) => state.categoryList);
  console.log(category);
  const capitalizeFirst = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  return (
    <>
      <div
        className={`border w-1/4 ${showSidebar && "hidden"} md:inline-block`}
      >
        <h3>Category</h3>
        {category.map((list, i) => (
          <div className="" key={i}>
            <p>{capitalizeFirst(list)}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default SideBar;
