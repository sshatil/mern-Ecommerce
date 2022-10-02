import { useEffect, useState } from "react";
import { StarIcon } from "@heroicons/react/solid";
import { RadioGroup } from "@headlessui/react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProduct } from "../redux/actions/proudctActions";
import Layout from "../utils/Layout";
import SingleProduct from "../components/SingleProduct";
import { addToCart } from "../redux/actions/cartActions";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { _id, category, image, name, price, rating, description, numReviews } =
    useSelector((state) => state.singleProduct.product);
  const { loading, product } = useSelector((state) => state.singleProduct);
  // all product
  const { products } = useSelector((state) => state.product);

  const { id } = useParams();
  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, [dispatch, id]);
  // console.log(product);
  //TODO: show similar product
  // useEffect(() => {
  //   const similarProduct = products.filter((p) => p.category === category);
  //   console.log(similarProduct);
  // }, [category, loading]);

  const handleAddToCard = (id) => {
    dispatch(addToCart(id));
  };
  return (
    <Layout>
      <div className="pt-20">
        {loading ? (
          <p>loading......</p>
        ) : (
          <div className="bg-white">
            <div className="mb-4">
              {/* Image gallery */}
              <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                <div className="aspect-w-3 aspect-h-3 overflow-hidden rounded-lg">
                  <img
                    src={image}
                    alt={name}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                {/* details */}
                <div className="mt-4 lg:row-span-3 lg:mt-0">
                  <h2 className="">{name}</h2>
                  <p className="text-3xl tracking-tight text-gray-900">
                    {price}
                  </p>
                  {/* <div className="mt-6">
                    <h3 className="sr-only">Reviews</h3>
                    <div className="flex items-center">
                      <div className="flex items-center">
                        {[0, 1, 2, 3, 4].map((rating) => (
                          <StarIcon
                            key={rating}
                            className={classNames(
                              reviews.average > rating
                                ? "text-gray-900"
                                : "text-gray-200",
                              "h-5 w-5 flex-shrink-0"
                            )}
                            aria-hidden="true"
                          />
                        ))}
                      </div>
                      <a
                        href={reviews.href}
                        className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        {numReviews} reviews
                      </a>
                    </div>
                  </div> */}
                  <div className="mt-10">
                    {/* description */}
                    <div>
                      <h3 className="">Description</h3>

                      <div className="space-y-6">
                        <p className="text-base text-gray-900">{description}</p>
                      </div>
                    </div>

                    <button
                      type="button"
                      className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      onClick={() => handleAddToCard(_id)}
                    >
                      Add to bag
                    </button>
                  </div>
                </div>
                {/* right side end */}
              </div>
            </div>
            {/* show similar products */}
            {/* <div className="">
              <SingleProduct product={product} />
            </div> */}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ProductDetails;
