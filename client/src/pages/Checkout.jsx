import { useSelector } from "react-redux";
import CartProducts from "../components/checkout/CartProducts";
import ShippingAddressForm from "../components/checkout/ShippingAddressForm";
import SingleCartItem from "../components/SingleCartItem";
import Layout from "../utils/Layout";

const Checkout = () => {
  return (
    <Layout>
      <div className="md:flex md:gap-10 pt-20">
        <div className="md:w-6/12">
          <CartProducts />
        </div>
        <div className="md:w-6/12">
          <ShippingAddressForm />
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
