import { MenuAlt3Icon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/actions/proudctActions";
import SearchBar from "./SearchBar";
import SingleProduct from "./SingleProduct";

const Products = ({ showSidebar, setShowSidebar }) => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const [rating, setRating] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    dispatch(getProducts(name, category, min, max, rating, setLoading));
  }, [dispatch, name, category, min, max, rating]);
  useEffect(() => {
    setName("");
  }, [loading]);
  console.log(name);
  return (
    <div className="w-full overflow-hidden">
      {/* sidebar btn */}
      <MenuAlt3Icon
        className="w-6 h-6 cursor-pointer md:hidden"
        onClick={() => setShowSidebar(!showSidebar)}
      />
      {/* search products */}
      <div className="mx-10">
        <SearchBar setName={setName} />
      </div>
      <div className="bg-white mt-10">
        <div className="max-w-2xl mx-auto py-4 lg:py-4 md:py-4 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          {/* <h2 className="">Products</h2> */}

          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <>
                <SingleProduct product={product} key={product._id} />
                {/* <SingleProduct product={product} key={product._id} />
                <SingleProduct product={product} key={product._id} />
                <SingleProduct product={product} key={product._id} /> */}
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
