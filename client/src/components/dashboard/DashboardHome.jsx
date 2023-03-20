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
  const totalDeliveredProduct = () => {
    const deliveredProduct = orderList.map(
      (delivered) => delivered.isDelivered
    );
    const isDelivered = deliveredProduct.filter(Boolean).length;
    // const isPaid = paidProduct.filter((f) => f === true).length;
    return isDelivered;
  };
  const totalSpend = () => {
    const totalPrice = orderList.reduce(
      (accumulator, currentValue) => accumulator + currentValue.totalPrice,
      0
    );
    return totalPrice.toFixed(2);
  };
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
          <p className="font-semibold">{totalDeliveredProduct()}</p>
        </div>
        <div className="p-3 text-center bg-gray-200 rounded-md">
          <h1 className="text-sm font-semibold">Total Spend</h1>
          <p className="font-semibold">$ {totalSpend()}</p>
        </div>
      </div>
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
