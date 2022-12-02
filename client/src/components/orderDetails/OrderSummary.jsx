import React from "react";
import { useSelector } from "react-redux";

const OrderSummary = () => {
  const { taxPrice, shippingPrice, totalPrice, orderItems } = useSelector(
    (state) => state.orderDetails.orderItem
  );
  const subtotalPrice = orderItems.reduce(
    (prev, item) => prev + item.price * item.qty,
    0
  );
  return (
    <div className="mt-4">
      <div className="rounded-md border-gray-200 py-6 my-3 px-6 border">
        <h1 className="text-center text-lg font-bold mb-4 border-b-2">
          Order Summary
        </h1>
        <div className="flex justify-between py-1 text-base font-medium text-gray-900">
          <p>Subtotal</p>
          <p>${subtotalPrice}</p>
        </div>
        <div className="flex justify-between py-1 text-base font-medium text-gray-900">
          <p>Shipping</p>
          <p>${shippingPrice}</p>
        </div>
        <div className="flex justify-between py-1 text-base font-medium text-gray-900">
          <p>Tax</p>
          <p>${taxPrice}</p>
        </div>
        <div className="flex justify-between mt-3 border-t-2 font-semibold text-lg text-gray-900 ">
          <p>Total Price</p>
          <p>${totalPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
