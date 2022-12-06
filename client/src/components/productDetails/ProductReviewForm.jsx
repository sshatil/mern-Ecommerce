import { RatingStar } from "rating-star";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { reviewProduct } from "../../redux/actions/proudctActions";
import { getUserProfile } from "../../redux/actions/userProfileActions";

const ProductReviewForm = () => {
  const { id } = useParams();
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state) => state.userProfile);
  const { isAuthenticated } = useSelector((state) => state.auth);
  // fetch user profile
  useEffect(() => {
    if (isAuthenticated) {
      dispatch(getUserProfile(toast));
    }
  }, [dispatch, loading, isAuthenticated]);
  const handleSubmitComment = (e) => {
    e.preventDefault();
    dispatch(reviewProduct(id, user.name, rating, comment, toast));
    console.log(user.name, rating, comment);
  };
  return (
    <div>
      <form onSubmit={handleSubmitComment}>
        {/* name */}
        {/* rating */}
        <p className="py-2 font-bold">Rating</p>
        <RatingStar
          id="custom-icon-wow"
          rating={rating}
          // starIcon={AcUnitIcon}
          colors={{ mask: "#FFC600" }}
          noBorder
          clickable={true}
          onRatingChange={(rating) => setRating(rating)}
        />
        {/* comment */}
        <div className="">
          <p className="py-2 font-bold">Comment</p>
          <textarea
            name=""
            id=""
            cols=""
            rows="3"
            className="border-2 lg:w-[50%] w-full"
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn-color px-10 py-2 text-lg rounded-md mt-2"
        >
          Comment
        </button>
      </form>
    </div>
  );
};

export default ProductReviewForm;
