import React from "react";
import {
  totalDeliveredProduct,
  totalPendingProduct,
  totalSell,
} from "../../utils/adminUtils/Dashboard";

const AdminHomePageHeader = ({ allOrderList }) => {
  const deliveredProduct = totalDeliveredProduct(allOrderList);
  const pendingProduct = totalPendingProduct(allOrderList);
  const total = totalSell(allOrderList);
  return (
    <div className="grid grid-col-2 md:grid-cols-4 sm:grid-cols-2 gap-4">
      <div className="p-3 text-center bg-gray-200 rounded-md">
        <h1 className="text-sm font-semibold">Total Order</h1>
        <p className="font-semibold">{allOrderList.length}</p>
      </div>
      <div className="p-3 text-center bg-gray-200 rounded-md">
        <h1 className="text-sm font-semibold">Delivered</h1>
        <p className="font-semibold">{deliveredProduct}</p>
      </div>
      <div className="p-3 text-center bg-gray-200 rounded-md">
        <h1 className="text-sm font-semibold">Pending</h1>
        <p className="font-semibold">{pendingProduct}</p>
      </div>
      <div className="p-3 text-center bg-gray-200 rounded-md">
        <h1 className="text-sm font-semibold">Total Sell</h1>
        <p className="font-semibold">$ {total}</p>
      </div>
    </div>
  );
};

export default AdminHomePageHeader;
