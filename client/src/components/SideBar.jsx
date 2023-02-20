import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryList, getProducts } from "../redux/actions/proudctActions";
import SidebarLoading from "../utils/loading/SidebarLoading";
import RatingStar from "../utils/RatingStar";

const SideBar = ({ showSidebar, setShowSidebar }) => {
  const dispatch = useDispatch();
  // const [price, setPrice] = useState([]);
  const [pageNumbers, setPageNumbers] = useState(1);
  const [name, setName] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [min, setMin] = useState(1);
  const [max, setMax] = useState("");
  const [rating, setRating] = useState("");
  // rating

  useEffect(() => {
    dispatch(getCategoryList());
  }, [dispatch]);
  const { category, loading } = useSelector((state) => state.categoryList);

  const capitalizeFirst = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const getProductsByCategory = (categoryName) => {
    dispatch(getProducts(pageNumbers, name, categoryName, min, max, rating));
  };

  useEffect(() => {
    dispatch(getProducts(pageNumbers, name, categoryName, min, max, rating));
  }, [dispatch, pageNumbers, name, categoryName, min, max, rating]);

  // const handlePrices = (e) => {
  //   setPrice(e.target.value);
  //   // setMin(price([0]));
  // };
  if (loading) {
    return <SidebarLoading showSidebar={showSidebar} />;
  }
  return (
    <>
      <div
        className={`w-1/3 md:w-1/6 space-y-3 ${
          showSidebar && "hidden"
        } md:inline-block`}
      >
        <div className="p-3 rounded-sm bg-[#F6F7F8]">
          <h3 className="text-lg font-semibold">Category</h3>
          {/* TODO: add load more btn */}
          <div className="space-y-1 mt-3">
            <p
              className="text-md font-medium cursor-pointer"
              onClick={() => getProductsByCategory()}
            >
              All
            </p>
            {category.map((list, i) => (
              <div key={i} onClick={() => getProductsByCategory(list)}>
                <p className="text-md font-medium cursor-pointer">
                  {capitalizeFirst(list)}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* price range */}
        {/* <div className="p-3 rounded-sm bg-[#F6F7F8]">
          <h3 className="text-lg font-semibold">Prices</h3>
          <input
            type="checkbox"
            name=""
            id=""
            value={[0, 30]}
            onChange={handlePrices}
          />
          <label for="vehicle1">0 - 30</label>
          <input
            type="checkbox"
            name=""
            id=""
            value={["30", "50"]}
            onChange={handlePrices}
          />
          <label for="vehicle1">30 - 50</label>
        </div> */}
        {/* rating */}
        {/* <input type="range" name="" id="" /> */}
        <div className="p-3 rounded-sm bg-[#F6F7F8]">
          <h3 className="text-lg font-semibold">Rating</h3>
          <div className="mt-2">
            <RatingStar value={0} setRating={setRating} />
            <RatingStar value={1} setRating={setRating} />
            <RatingStar value={2} setRating={setRating} />
            <RatingStar value={3} setRating={setRating} />
            <RatingStar value={4} setRating={setRating} />
            <RatingStar value={5} setRating={setRating} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
