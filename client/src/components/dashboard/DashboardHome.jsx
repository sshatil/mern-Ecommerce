import { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile } from "../../redux/actions/userProfileActions";

const DashboardHome = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.userProfile);
  // fetch user info
  useEffect(() => {
    dispatch(getUserProfile(toast));
  }, [dispatch, loading]);
  return <div>DashboardHome</div>;
};

export default DashboardHome;
