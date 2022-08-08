import banner from "../assets/Offer Banner.png";

const Banner = () => {
  return (
    <div className="pt-14">
      <img
        src={banner}
        alt=""
        className="w-full h-full object-center object-cover"
      />
    </div>
  );
};

export default Banner;
