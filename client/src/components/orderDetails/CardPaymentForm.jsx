import React from "react";

const CardPaymentForm = ({ formData, setFormData }) => {
  const { bankName, bankNumber, expireDate, userName, cardType } = formData;
  const handleFormData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCardType = (e) => {
    setFormData({ ...formData, cardType: e.target.value });
  };
  return (
    <div className="w-full px-4">
      <form>
        <div className="mb-2">
          <label
            htmlFor="address"
            className="text-sm block font-semibold text-gray-700"
          >
            Bank Number
          </label>
          <input
            type="text"
            name="bankNumber"
            id="bankNumber"
            value={bankNumber}
            onChange={handleFormData}
            className="mt-1 p-2 block rounded-md shadow-sm   sm:text-sm w-full"
          />
        </div>
        {/* expire date & card type */}
        <div className="md:flex gap-2 md:justify-between md:items-center">
          <div className="mb-2 w-full">
            <label
              htmlFor="address"
              className="text-sm block font-semibold text-gray-700"
            >
              Expire Date
            </label>
            <input
              type="date"
              name="expireDate"
              id="expireDate"
              value={expireDate}
              onChange={handleFormData}
              className="mt-1 p-2 block rounded-md shadow-sm   sm:text-sm w-full"
            />
          </div>
          <div className="w-full mt-6 mb-2 rounded-md">
            <select
              name=""
              id=""
              className="w-full p-[8px] rounded-md text-sm"
              onChange={handleCardType}
            >
              <option value="">Card Type</option>
              <option value="visa">VISA</option>
              <option value="master card">MASTER CARD</option>
            </select>
          </div>
        </div>

        {/* bank name & user name */}
        <div className="md:flex gap-2 md:justify-between">
          <div className="mb-2 w-full">
            <label
              htmlFor="address"
              className="text-sm block font-semibold text-gray-700"
            >
              Bank Name
            </label>
            <input
              type="text"
              name="bankName"
              id="bankName"
              value={bankName}
              onChange={handleFormData}
              className="mt-1 p-2 block rounded-md shadow-sm   sm:text-sm w-full"
            />
          </div>

          <div className="mb-2 w-full">
            <label
              htmlFor="address"
              className="text-sm block font-semibold text-gray-700"
            >
              User Name
            </label>
            <input
              type="text"
              name="userName"
              id="userName"
              value={userName}
              onChange={handleFormData}
              className="mt-1 p-2 block rounded-md shadow-sm   sm:text-sm w-full"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CardPaymentForm;
