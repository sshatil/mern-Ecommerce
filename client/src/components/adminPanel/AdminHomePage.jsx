import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrderList } from "../../redux/actions/orderActions";
import AllOrder from "./AllOrder";

const AdminHomePage = () => {
  const dispatch = useDispatch();
  const { allOrderList } = useSelector((state) => state.orderList);

  // fetch order list
  useEffect(() => {
    dispatch(getOrderList());
  }, [dispatch]);
  return (
    <div>
      <div className="grid grid-col-2 md:grid-cols-4 sm:grid-cols-2 gap-4">
        <div className="p-3 text-center bg-gray-200 rounded-md">
          <h1 className="text-sm font-semibold">Total Order</h1>
          <p className="font-semibold">{allOrderList.length}</p>
        </div>
        <div className="p-3 text-center bg-gray-200 rounded-md">
          <h1 className="text-sm font-semibold">Delivered</h1>
          <p className="font-semibold">0</p>
        </div>
        <div className="p-3 text-center bg-gray-200 rounded-md">
          <h1 className="text-sm font-semibold">Pending</h1>
          <p className="font-semibold">0</p>
        </div>
        <div className="p-3 text-center bg-gray-200 rounded-md">
          <h1 className="text-sm font-semibold">Total Income</h1>
          <p className="font-semibold">$ 0</p>
        </div>
      </div>
      <AllOrder allOrderList={allOrderList} />
    </div>
  );
};

export default AdminHomePage;
