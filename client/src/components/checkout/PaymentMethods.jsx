import React, { useState } from "react";

const PaymentMethods = ({ paymentMethod, setPaymentMethod }) => {
  return (
    <div className="mt-8">
      <h1 className="text-xl font-bold my-3">Payment Methods</h1>
      <input
        type="radio"
        name="PayPal"
        id="PayPal"
        onChange={(e) => setPaymentMethod(e.target.value)}
        value="PayPal"
        className="mr-3 cursor-pointer"
      />
      <label htmlFor="PayPal">PayPal</label>
    </div>
  );
};

export default PaymentMethods;
