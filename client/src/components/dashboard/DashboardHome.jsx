import { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile } from "../../redux/actions/userProfileActions";
import Loading from "../../utils/loading/Loading";
import DashboardUserOrders from "./DashboardUserOrders";
import { totalDeliveredProduct } from "../../utils/adminUtils/Dashboard";
import { totalSell } from "../../utils/adminUtils/Dashboard";
import { avatar } from "../../utils/Avatar";

const DashboardHome = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.userProfile);
  const { name, email } = useSelector((state) => state.userProfile.user);
  const { user } = useSelector((state) => state.userProfile);
  const { orderList } = useSelector((state) => state.userOrderList);
  // fetch user info
  useEffect(() => {
    dispatch(getUserProfile(toast));
  }, [dispatch, loading]);
  if (loading) {
    return <Loading />;
  }
  const totalPaid = () => {
    const paidProduct = orderList.map((paid) => paid.isPaid);
    const isPaid = paidProduct.filter(Boolean).length;
    // const isPaid = paidProduct.filter((f) => f === true).length;
    return isPaid;
  };
  const deliveredProduct = totalDeliveredProduct(orderList);
  const totalSpend = totalSell(orderList);
  const image = avatar(user, 14, 14, "2xl");
  return (
    <div>
      <div className="grid grid-col-2 md:grid-cols-4 sm:grid-cols-2 gap-4">
        <div className="p-3 text-center bg-gray-200 rounded-md">
          <h1 className="text-sm font-semibold">Total Order</h1>
          <p className="font-semibold">{orderList.length}</p>
        </div>
        <div className="p-3 text-center bg-gray-200 rounded-md">
          <h1 className="text-sm font-semibold">Paid Completed</h1>
          <p className="font-semibold">{totalPaid()}</p>
        </div>
        <div className="p-3 text-center bg-gray-200 rounded-md">
          <h1 className="text-sm font-semibold">Received Product</h1>
          <p className="font-semibold">{deliveredProduct}</p>
        </div>
        <div className="p-3 text-center bg-gray-200 rounded-md">
          <h1 className="text-sm font-semibold">Total Spend</h1>
          <p className="font-semibold">$ {totalSpend}</p>
        </div>
      </div>
      <div className="">
        <h3 className="text-lg font-bold border-b-2 my-4">
          Personal Information
        </h3>
        <div className="flex gap-20 items-center mt-5">
          <div className="">{image}</div>
          <div className="">
            <p>Name: {name}</p>
            <p>Email: {email}</p>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <DashboardUserOrders />
      </div>
    </div>
  );
};

export default DashboardHome;
