import { Link } from "react-router-dom";
import notFoundImage from "../assets/404.gif";

const NotFound = () => {
  return (
    <div className="flex justify-center items-center w-screen h-screen overflow-hidden">
      <img src={notFoundImage} alt="" />
      <Link
        to="/"
        className="absolute bottom-4 bg-green-400 px-5 py-2 rounded-md text-lg font-bold"
      >
        Back To Home Page
      </Link>
    </div>
  );
};

export default NotFound;
