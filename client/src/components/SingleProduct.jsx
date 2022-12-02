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
    // <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
    <Link to={`/details/${product._id}`}>
      <div className="group cursor-pointer">
        <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-center object-cover group-hover:opacity-75"
          />
        </div>
        <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
        <div className="flex justify-between">
          <p className="mt-1 text-lg font-semibold text-gray-900">
            ${product.price}
          </p>
          <p className="mt-1 text-lg font-medium text-gray-900">
            {product.rating}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default SingleProduct;
