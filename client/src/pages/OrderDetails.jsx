import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import OrderProducts from "../components/orderDetails/OrderProducts";
import OrderSummary from "../components/orderDetails/OrderSummary";
import ShippingDetails from "../components/orderDetails/ShippingDetails";
import {
  userOrderDetails,
  userOrderPayment,
} from "../redux/actions/orderActions";
import Layout from "../utils/Layout";
import { PayPalButton } from "react-paypal-button-v2";
import axios from "axios";
import { ORDER_PAY_RESET } from "../redux/types";
import toast from "react-hot-toast";
import { CheckCircleIcon } from "@heroicons/react/outline";

const OrderDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  // state for paypal payment
  const [sdkReady, setSdkReady] = useState(false);

  const { loading, orderItem } = useSelector((state) => state.orderDetails);
  const { loading: loadingPay, success: successPay } = useSelector(
    (state) => state.orderPay
  );

  // useEffect(() => {
  //   // Paypal Payment
  //   const addPaypalScript = async () => {
  //     const { data: clientId } = await axios.get("/api/config/paypal");
  //     const script = document.createElement("script");
  //     script.type = "text/javascript";
  //     script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
  //     script.async = true;
  //     script.onload = () => {
  //       setSdkReady(true);
  //     };
  //     document.body.appendChild(script);
  //   };

  //   if (!orderItem || successPay) {
  //     dispatch({ type: ORDER_PAY_RESET });
  //     dispatch(userOrderDetails(id));
  //   } else if (!orderItem.isPaid) {
  //     if (!window.paypal) {
  //       addPaypalScript();
  //     } else {
  //       setSdkReady(true);
  //     }
  //   }
  // }, [dispatch, id, successPay, orderItem]);

  // const [paymentResult, setPaymentResult] = useState({
  //   id: id,
  //   status: "success",
  //   update_time: Date.now(),
  //   email_address: orderItem ? orderItem.user.email : null,
  // });

  useEffect(() => {
    dispatch(userOrderDetails(id));
  }, [dispatch, id, loading, successPay]);

  const paymentResult = {
    id: id,
    status: "success",
  };

  const handlePayment = () => {
    dispatch(userOrderPayment(id, paymentResult, toast));
  };
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
        <div className="md:w-4/12">
          <OrderSummary />
          {/* <PayPalButton /> */}
          {!successPay ? (
            <button
              onClick={handlePayment}
              className="bg-[#FFC439] w-full p-2 rounded font-bold"
            >
              {!loadingPay ? <p>PayPal</p> : <p>Loading</p>}
            </button>
          ) : (
            <div className="bg-green-600 w-full p-2 rounded font-bold text-center flex justify-center">
              <p className="text-white">
                <CheckCircleIcon className="w-6 h-6" />
              </p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default OrderDetails;
