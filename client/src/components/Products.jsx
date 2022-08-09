import { MenuAlt3Icon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/actions/proudctActions";

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
  // console.log(products);
  return (
    <div>
      {/* sidebar btn */}
      <MenuAlt3Icon
        className="w-6 h-6 cursor-pointer md:hidden"
        onClick={() => setShowSidebar(!showSidebar)}
      />

      <div className="">
        {products.map((product) => (
          <p>{product.name}</p>
        ))}
      </div>
    </div>
  );
};

export default Products;
