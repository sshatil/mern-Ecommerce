import { useState } from "react";

const ShippingAddressForm = () => {
  const [formData, setFormData] = useState({
    address: "",
    city: "",
    postalCode: "",
    country: "",
  });
  const handleFormData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleShippingAddress = (e) => {
    e.preventDefault();
  };
  console.log(formData);
  const { address, city, postalCode, country } = formData;
  return (
    <div>
      <h1 className="text-xl font-bold my-3">Shipping Address</h1>
      <form onSubmit={handleShippingAddress}>
        <div className="mb-2">
          <label
            htmlFor="address"
            className="text-sm block font-semibold text-gray-700"
          >
            Address
          </label>
          <input
            type="text"
            name="address"
            id="address"
            value={address}
            onChange={handleFormData}
            className="mt-1 p-2 block rounded-md shadow-sm border-2 border-gray-500 sm:text-sm w-full"
          />
        </div>
        <div className="mb-2">
          <label
            htmlFor="city"
            className="text-sm block font-semibold text-gray-700"
          >
            City
          </label>
          <input
            type="text"
            name="city"
            id="city"
            value={city}
            onChange={handleFormData}
            className="mt-1 p-2 block rounded-md shadow-sm border-2 border-gray-500 sm:text-sm w-full"
          />
        </div>
        <div className="mb-2">
          <label
            htmlFor="postalCode"
            className="text-sm block font-semibold text-gray-700"
          >
            Postal Code
          </label>
          <input
            type="text"
            name="postalCode"
            id="postalCode"
            value={postalCode}
            onChange={handleFormData}
            className="mt-1 p-2 block rounded-md shadow-sm border-2 border-gray-500 sm:text-sm w-full"
          />
        </div>
        <div className="mb-2">
          <label
            htmlFor="country"
            className="text-sm block font-semibold text-gray-700"
          >
            Country
          </label>
          <input
            type="text"
            name="country"
            id="country"
            value={country}
            onChange={handleFormData}
            className="mt-1 p-2 block rounded-md shadow-sm border-2 border-gray-500 sm:text-sm w-full"
          />
          <button type="submit"></button>
        </div>
      </form>
    </div>
  );
};

export default ShippingAddressForm;
