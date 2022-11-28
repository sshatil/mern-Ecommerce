import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartProducts from "../components/checkout/CartProducts";
import PaymentMethods from "../components/checkout/PaymentMethods";
import ShippingAddressForm from "../components/checkout/ShippingAddressForm";
import { createUserOrder } from "../redux/actions/orderActions";
import Layout from "../utils/Layout";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const Checkout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.cart);
  const { loading, order } = useSelector((state) => state.createOrder);
  // shipping address form data
  const [formData, setFormData] = useState({
    address: "",
    city: "",
    postalCode: "",
    country: "",
  });
  // payment methods
  const [paymentMethod, setPaymentMethod] = useState("");
  // cardProduct
  const subtotalPrice = cartItems.reduce(
    (prev, item) => prev + item.price * item.qty,
    0
  );
  const taxPrice = Number((0.15 * subtotalPrice).toFixed(2));
  const shippingPrice = subtotalPrice > 50 ? 0 : 20;
  const totalPrice = subtotalPrice + taxPrice + shippingPrice;
  // TODO:
  const handleSubmit = () => {
    dispatch(
      createUserOrder(
        {
          orderItems: cartItems,
          shippingAddress: formData,
          paymentMethod: paymentMethod,
          itemsPrice: subtotalPrice,
          taxPrice: taxPrice,
          shippingPrice: shippingPrice,
          totalPrice: totalPrice,
        },
        toast
      )
    );
  };
  if (!loading) {
    return navigate(`/order/${order._id}`);
  }
  return (
    <Layout>
      <div className="md:flex md:gap-10 pt-16">
        <div className="md:w-6/12 pr-2">
          <CartProducts />
        </div>
        <div className="md:w-6/12 md:border-l-2 md:pl-4">
          <ShippingAddressForm formData={formData} setFormData={setFormData} />
          {/* Payment Method */}
          <PaymentMethods
            paymentMethod={paymentMethod}
            setPaymentMethod={setPaymentMethod}
          />
          <div className="mt-7 rounded-md border-gray-200 py-6 my-3 px-6 border">
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
            <div className="mt-6">
              <p
                onClick={handleSubmit}
                className="flex items-center justify-center rounded-md
                          border border-transparent btn-color px-6 py-3
                          text-base font-medium text-white shadow-sm cursor-pointer"
              >
                Checkout
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
