import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryList, getProducts } from "../redux/actions/proudctActions";
import { RatingStar } from "rating-star";

const SideBar = ({ showSidebar, setShowSidebar }) => {
  const dispatch = useDispatch();
  // const [price, setPrice] = useState([]);
  const [name, setName] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const [rating, setRating] = useState("");
  const [loading, setLoading] = useState(true);
  // rating

  useEffect(() => {
    dispatch(getCategoryList());
  }, [dispatch]);
  const { category } = useSelector((state) => state.categoryList);

  const capitalizeFirst = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const getProductsByCategory = (categoryName) => {
    dispatch(getProducts(name, categoryName, min, max, rating, setLoading));
  };

  useEffect(() => {
    dispatch(getProducts(name, categoryName, min, max, rating, setLoading));
  }, [dispatch, name, categoryName, min, max, rating]);

  // const handlePrices = (e) => {
  //   setPrice(e.target.value);
  //   // setMin(price([0]));
  // };
  return (
    <>
      <div
        className={`w-1/4 space-y-3 ${showSidebar && "hidden"} md:inline-block`}
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
        <div className="p-3 rounded-sm bg-[#F6F7F8]">
          <h3 className="text-lg font-semibold">Rating</h3>
          <div className="-ml-2">
            <RatingStar
              id="custom-icon-wow"
              rating={rating}
              // starIcon={AcUnitIcon}
              colors={{ mask: "#FFC600" }}
              noBorder
              clickable={true}
              onRatingChange={(rating) => setRating(rating)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;