import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProductLoading from "../utils/loading/ProductLoading";

const SingleProduct = ({ product }) => {
  const { loading } = useSelector((state) => state.product);
  if (loading) {
    return <ProductLoading />;
  }
  return (
    <Link to={`/details/${product._id}`}>
      <div className="group cursor-pointer">
        <div className="lg:w-[275px] lg:h-[285px] md:w-60 md:h-60  sm:w-60 sm:h-64 bg-gray-200 rounded-lg overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-center group-hover:opacity-75"
          />
        </div>
        <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
        <div className="flex justify-between">
          <p className="mt-1 text-lg font-semibold text-gray-900">
            ${product.price}
          </p>
          <p className="mt-1 text-lg font-medium text-gray-900">
            {product.rating.toFixed(1)}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default SingleProduct;
