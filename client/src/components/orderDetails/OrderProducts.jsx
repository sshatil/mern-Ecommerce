import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/outline";
import React from "react";
import { useSelector } from "react-redux";

const OrderProducts = () => {
  const { isDelivered, orderItems } = useSelector(
    (state) => state.orderDetails.orderItem
  );
  return (
    <div className="">
      <div className="my-5 text-center md:text-left">
        <span className="text-xl font-bold">Delivered Status:</span>
        <div className="flex justify-center md:flex md:justify-start mt-2">
          {!isDelivered ? (
            <div className="text-red-600 font-bold flex align center gap-2">
              <p>Not Delivered</p>
              <p>
                <XCircleIcon className="w-6 h-6" />
              </p>
            </div>
          ) : (
            <div className="text-green-600 font-bold flex align center gap-2">
              <p>Delivered</p>
              <p>
                <CheckCircleIcon className="w-6 h-6" />
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="mt-5">
        <h1 className="text-xl font-bold text-center md:text-left">Products</h1>
        <table className="w-full my-4">
          <tbody className="border">
            <tr className="border-b-2">
              <th className="py-4">Image</th>
              <th>Name</th>
              <th>Qty</th>
              <th>Price</th>
            </tr>
            {orderItems.map((item) => {
              return (
                <>
                  <tr className="w-9 text-center" key={item._id}>
                    <td className="border-b-2 w-2/12 md:pl-4 sm:pl-4">
                      <img src={item.image} alt="" className="w-14 h-14" />
                    </td>
                    <td className="border-b-2 w-6/12">{item.name}</td>
                    <td className="border-b-2 w-2/12">{item.qty}</td>
                    <td className="border-b-2 w-2/12">{item.price}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderProducts;
