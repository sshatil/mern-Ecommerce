import { useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { useDispatch, useSelector } from "react-redux";
import { getTopProducts } from "../redux/actions/proudctActions";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import loadingImage from "../assets/loadingGif/homepage-loading.gif";
import ball from "../assets/loadingGif/Ball.gif";

const Header = () => {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.topProducts);
  const items = products?.map((product) => {
    return (
      <Link to={`/details/${product._id}`} key={product._id}>
        <div className="h-[200px] md:h-[300px] flex flex-col justify-center items-center gradient gap-2 cursor-pointer">
          {/* <div className="">
            <h1 className="md:text-xl text-lg">{product.name.substr(0, 14)}</h1>
          </div> */}
          <div className="flex justify-between items-center lg:w-36 lg:h-36 md:w-36 md:h-36 sm:w-36 sm:h-36 w-24 h-24">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain"
            />
          </div>
          {/* <div className="">
            <h1 className="md:text-xl text-lg">{product.name.substr(0, 18)}</h1>
          </div> */}
          <div className="">
            <h6 className="md:text-lg text-sm font-semibold text-gray-700">
              Price: ${product.price}
            </h6>
          </div>
        </div>
      </Link>
    );
  });
  useEffect(() => {
    dispatch(getTopProducts());
  }, [dispatch]);

  const renderPrevButton = ({ isDisabled }) => {
    return (
      <p className="absolute left-0 top-[40%] opacity-30 cursor-pointer">
        <ChevronLeftIcon className="w-16 h-16 lg:w-24 lg:h-24 text-gray-600" />
      </p>
    );
  };

  const renderNextButton = ({ isDisabled }) => {
    return (
      <p className="absolute right-0 top-[40%] opacity-30 cursor-pointer">
        <ChevronRightIcon className="w-16 h-16 lg:w-24 lg:h-24 text-gray-600" />
      </p>
    );
  };

  const responsive = {
    0: {
      items: 1,
    },
    430: {
      items: 2,
    },
    758: {
      items: 3,
    },
    1024: {
      items: 4,
    },
    1360: {
      items: 5,
    },
  };
  return (
    <div className="pt-14">
      {loading ? (
        <div className="bg-white bg-opacity-20 transition-opacity flex justify-center items-center">
          <img src={ball} alt="" />
        </div>
      ) : (
        <AliceCarousel
          mouseTracking
          items={items}
          infinite
          autoPlay
          autoPlayInterval={2000}
          animationDuration={1000}
          responsive={responsive}
          // disableButtonsControls
          disableDotsControls={true}
          renderPrevButton={renderPrevButton}
          renderNextButton={renderNextButton}
        />
      )}
    </div>
  );
};

export default Header;
