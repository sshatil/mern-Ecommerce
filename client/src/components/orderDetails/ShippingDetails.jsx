import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/outline";
import React from "react";
import { useSelector } from "react-redux";

const ShippingDetails = () => {
  const { user, isPaid, shippingAddress } = useSelector(
    (state) => state.orderDetails.orderItem
  );
  const { address, city, postalCode, country } = shippingAddress;
  return (
    <div className="text-center md:text-left">
      <h1 className="text-xl font-bold my-4">Shipping Address</h1>
      <div className="text-lg">
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        {/* shipping address */}
        <p>Address: {address}</p>
        <p>City: {city}</p>
        <p>Postal Code: {postalCode}</p>
        <p>Country: {country}</p>
      </div>
      <div className="mt-5">
        <span className="text-xl font-bold">Paid Status:</span>
        <div className="flex justify-center md:flex md:justify-start mt-2">
          {!isPaid ? (
            <div className="text-red-600 font-bold flex align center gap-2">
              <p>Not Paid</p>
              <p>
                <XCircleIcon className="w-6 h-6" />
              </p>
            </div>
          ) : (
            <div className="text-green-600 font-bold flex align center gap-2">
              <p>Paid</p>
              <p>
                <CheckCircleIcon className="w-6 h-6" />
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShippingDetails;
