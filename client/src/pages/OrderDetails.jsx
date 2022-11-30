import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import OrderProducts from "../components/orderDetails/OrderProducts";
import OrderSummary from "../components/orderDetails/OrderSummary";
import ShippingDetails from "../components/orderDetails/ShippingDetails";
import { userOrderDetails } from "../redux/actions/orderActions";
import Layout from "../utils/Layout";

const OrderDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { loading } = useSelector((state) => state.orderDetails);

  useEffect(() => {
    dispatch(userOrderDetails(id));
  }, [dispatch, id]);
  if (loading) {
    return <p>Loading........</p>;
  }
  return (
    <Layout>
      <div className="pt-20 md:flex">
        <div className="md:w-8/12 md:mr-2">
          <ShippingDetails />
          <OrderProducts />
        </div>
        <OrderSummary />
      </div>
    </Layout>
  );
};

export default OrderDetails;
