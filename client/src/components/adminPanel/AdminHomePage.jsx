import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrderList } from "../../redux/actions/orderActions";
import AdminHomePageHeader from "./AdminHomePageHeader";
import AllOrder from "./AllOrder";

const AdminHomePage = () => {
  const dispatch = useDispatch();
  const { allOrderList, loading } = useSelector((state) => state.orderList);

  // fetch order list
  useEffect(() => {
    dispatch(getOrderList());
  }, [dispatch, loading]);
  return (
    <div>
      <AdminHomePageHeader allOrderList={allOrderList} />
      <AllOrder allOrderList={allOrderList} />
    </div>
  );
};

export default AdminHomePage;
