import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryList } from "../redux/actions/proudctActions";

const SideBar = ({ showSidebar, setShowSidebar }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategoryList());
  }, [dispatch]);
  const { category } = useSelector((state) => state.categoryList);
  // const [category, setCategory]
  console.log(category);
  const capitalizeFirst = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  return (
    <>
      <div
        className={`w-1/4 space-y-3 ${showSidebar && "hidden"} md:inline-block`}
      >
        <div className="p-3 rounded-sm bg-[#F6F7F8]">
          <h3 className="text-lg font-semibold">Category</h3>
          {/* Todo: add load more btn */}
          <div className="space-y-1 mt-3">
            {category.map((list, i) => (
              <div key={i}>
                <p className="text-md font-medium cursor-pointer">
                  {capitalizeFirst(list)}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* price range */}
        <div className="">
          <h3 className="text-lg font-semibold">Prices</h3>
        </div>
      </div>
    </>
  );
};

export default SideBar;
