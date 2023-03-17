import { useEffect, useState } from "react";
import { StarIcon } from "@heroicons/react/solid";
import { RadioGroup } from "@headlessui/react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProduct } from "../redux/actions/proudctActions";
import Layout from "../utils/Layout";
import SingleProduct from "../components/SingleProduct";
import { addToCart, handleOpenCartPage } from "../redux/actions/cartActions";
import Loading from "../utils/loading/Loading";
import ProductReviews from "../components/productDetails/ProductReviews";
import ProductReviewForm from "../components/productDetails/ProductReviewForm";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ProductDetails = () => {
  const dispatch = useDispatch();
  const {
    _id,
    category,
    image,
    name,
    price,
    rating,
    description,
    numReviews,
    reviews,
  } = useSelector((state) => state.singleProduct.product);
  const { loading, product, reviewLoading } = useSelector(
    (state) => state.singleProduct
  );
  // all product
  const { products } = useSelector((state) => state.product);
  const { isAuthenticated } = useSelector((state) => state.auth);

  const { id } = useParams();
  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, [dispatch, id, loading]);
  // console.log(product);
  //TODO: show similar product
  // useEffect(() => {
  //   const similarProduct = products.filter((p) => p.category === category);
  //   console.log(similarProduct);
  // }, [category, loading]);

  const handleAddToCard = (id) => {
    dispatch(addToCart(id));
    dispatch(handleOpenCartPage());
  };
  return (
    <Layout>
      <div className="pt-20">
        {loading ? (
          <div>
            <Loading />
          </div>
        ) : (
          <div className="bg-white">
            <div className="mb-4 pb-3">
              <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-5xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                <div className="overflow-hidden rounded-lg">
                  <img src={image} alt={name} className="object-fit" />
                </div>
                <div className="mt-4  lg:mt-0">
                  <h2 className="">{name}</h2>
                  <p className="text-3xl tracking-tight text-gray-900">
                    {price}
                  </p>

                  <div className="mt-6">
                    <h3 className="sr-only">Reviews</h3>
                    <div className="flex items-center">
                      <div className="flex items-center">
                        {[0, 1, 2, 3, 4].map((r) => (
                          <StarIcon
                            key={r}
                            className={classNames(
                              rating > r ? "text-gray-900" : "text-gray-200",
                              "h-5 w-5 flex-shrink-0"
                            )}
                            aria-hidden="true"
                          />
                        ))}
                      </div>
                      <p className="ml-4 font-semibold">{numReviews} reviews</p>
                    </div>
                  </div>

                  <div className="mt-10">
                    <div>
                      <h3 className="">Description</h3>

                      <div className="space-y-6 whitespace-pre-wrap">
                        <p className="text-base text-gray-900">{description}</p>
                      </div>
                    </div>

                    <button
                      type="button"
                      className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent btn-color py-3 px-8 text-base font-medium text-white "
                      onClick={() => handleAddToCard(_id)}
                    >
                      Add to bag
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* show similar products */}
            {/* <div className="">
              <SingleProduct product={product} />
            </div> */}
            {/* TODO: Add review & rating */}
            <div className="pb-20 mt-20 lg:mt-1">
              <ProductReviews />
              {!isAuthenticated && (
                <div className="">
                  <h1 className="text-lg font-bold">Your Review</h1>
                  <Link to="/login" className="text-blue-500">
                    <p className="text-lg">You should be Login first</p>
                  </Link>
                </div>
              )}
              {isAuthenticated && <ProductReviewForm />}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ProductDetails;
