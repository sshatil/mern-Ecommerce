import React from "react";
import { useSelector } from "react-redux";
import SingleReview from "./SingleReview";

const ProductReviews = () => {
  const { reviews } = useSelector((state) => state.singleProduct.product);
  return (
    <div>
      <h1 className="text-xl font-bold">Product Reviews</h1>
      {reviews.map((review) => (
        <SingleReview {...review} key={review._id} />
      ))}
    </div>
  );
};

export default ProductReviews;
