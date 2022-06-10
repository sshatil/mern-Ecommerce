import { useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { useDispatch, useSelector } from "react-redux";
import { getTopProducts } from "../redux/actions/proudctActions";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

const Header = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.topProducts);
  const items = products.map((product) => {
    return (
      <div className="h-[500px] flex justify-between items-center px-20 gradient">
        <div className="basis-1/2">
          <h1 className="md:text-4xl text-lg">{product.name}</h1>
          <p className="md:text-2xl text-sm">{product.description}</p>
          <h6 className="md:text-2xl text-sm font-bold">$ {product.price}</h6>
        </div>
        <div className="flex justify-between items-center lg:w-96 lg:h-96 md:w-52 md:h-52 sm:w-36 sm:h-36 w-24 h-24">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-center object-cover rounded-full"
          />
        </div>
      </div>
    );
  });
  useEffect(() => {
    dispatch(getTopProducts());
  }, [dispatch]);
  // const responsive = {
  //   0: {
  //     items: 2,
  //   },
  //   758: {
  //     items: 3,
  //   },
  //   1024: {
  //     items: 4,
  //   },
  // };
  const renderPrevButton = ({ isDisabled }) => {
    return (
      <p className="absolute -left-2 top-[35%] opacity-30 cursor-pointer">
        <ChevronLeftIcon className="w-16 h-16 lg:w-24 lg:h-24 text-gray-600" />
      </p>
    );
  };

  const renderNextButton = ({ isDisabled }) => {
    return (
      <p className="absolute -right-2 top-[35%] opacity-30 cursor-pointer">
        <ChevronRightIcon className="w-16 h-16 lg:w-24 lg:h-24 text-gray-600" />
      </p>
    );
  };
  return (
    <div className="">
      <AliceCarousel
        mouseTracking
        items={items}
        infinite
        autoPlay
        autoPlayInterval={2000}
        animationDuration={1000}
        // responsive={responsive}
        // disableButtonsControls
        disableDotsControls={true}
        renderPrevButton={renderPrevButton}
        renderNextButton={renderNextButton}
      />
    </div>
  );
};

export default Header;
