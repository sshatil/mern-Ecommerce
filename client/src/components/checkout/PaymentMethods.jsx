import React, { useState } from "react";

const PaymentMethods = ({ paymentMethod, setPaymentMethod }) => {
  return (
    <div className="mt-8">
      <h1 className="text-xl font-bold my-3">Payment Methods</h1>
      <input
        type="radio"
        name={paymentMethod}
        id="PayPal"
        onChange={(e) => setPaymentMethod(e.target.value)}
        value="PayPal"
        className="mr-3 cursor-pointer"
      />
      <label htmlFor="PayPal" className="cursor-pointer">
        PayPal
      </label>
      <br />

      <input
        type="radio"
        name={paymentMethod}
        id="Card"
        onChange={(e) => setPaymentMethod(e.target.value)}
        value="Card"
        className="mr-3 cursor-pointer"
      />
      <label htmlFor="Card" className="cursor-pointer">
        Card
      </label>
    </div>
  );
};

export default PaymentMethods;
