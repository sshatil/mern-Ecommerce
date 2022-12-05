import { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile } from "../../redux/actions/userProfileActions";
import Loading from "../../utils/loading/Loading";
import DashboardUserOrders from "./DashboardUserOrders";

const DashboardHome = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.userProfile);
  const { name, email } = useSelector((state) => state.userProfile.user);
  // fetch user info
  useEffect(() => {
    dispatch(getUserProfile(toast));
  }, [dispatch, loading]);
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <div className="">
        <h3 className="text-lg font-bold border-b-2 my-4">
          Personal Information
        </h3>
        <div className="mt-5 text-xl">
          <h1>Name: {name}</h1>
          <h1>Email: {email}</h1>
        </div>
      </div>
      <div className="mt-10">
        <DashboardUserOrders />
      </div>
    </div>
  );
};

export default DashboardHome;
