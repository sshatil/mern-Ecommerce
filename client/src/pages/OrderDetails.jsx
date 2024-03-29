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
import Container from "../utils/Container";
import toast from "react-hot-toast";
import Loading from "../utils/loading/Loading";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { CheckCircleIcon } from "@heroicons/react/outline";
import CardPaymentModal from "../components/orderDetails/CardPaymentModal";
import Layout from "../utils/Layout";

const OrderDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  // modal
  const [open, setOpen] = useState(false);
  // modal form data for card details
  const [formData, setFormData] = useState({
    bankName: "",
    bankNumber: "",
    expireDate: "",
    userName: "",
    cardType: "",
  });
  const { bankName, bankNumber, expireDate, userName, cardType } = formData;

  const { loading, orderItem } = useSelector((state) => state.orderDetails);
  const { loading: loadingPay, success: successPay } = useSelector(
    (state) => state.orderPay
  );
  // paypal payment
  const [paypalPaymentDetails, setPaypalPaymentDetails] = useState({});
  const [paymentLoading, setPaypalLoading] = useState(true);

  useEffect(() => {
    dispatch(userOrderDetails(id));
  }, [dispatch, id, loading, successPay]);

  const paymentResult = {
    id: id,
    status: "success",
  };

  // card payment submit btn
  const handleCardPayment = (e) => {
    e.preventDefault();
    if (!bankName || !bankNumber || !expireDate || !userName || !cardType) {
      toast.error("Fill all the input field");
    } else {
      dispatch(userOrderPayment(id, paymentResult, toast));
      setFormData({
        bankName: "",
        bankNumber: "",
        expireDate: "",
        userName: "",
        cardType: "",
      });
      setOpen(!open);
    }
  };

  useEffect(() => {
    if (paypalPaymentDetails.status === "COMPLETED") {
      dispatch(userOrderPayment(id, paymentResult, toast));
      setPaypalPaymentDetails({});
    }
  }, [paymentLoading, dispatch]);
  if (loading) {
    return <Loading />;
  }

  return (
    <Layout>
      <Container>
        <div className="pt-20 md:flex mb-10">
          <div className="md:w-8/12 md:mr-2">
            <ShippingDetails />
            <OrderProducts />
          </div>
          <div className="md:w-4/12">
            <OrderSummary />
            {/* <PayPalButton /> */}

            {!orderItem.isPaid ? (
              <div className="opacity-90">
                <PayPalScriptProvider
                  options={{
                    "client-id":
                      "AW9pdVuQB2QxZBmkva8uwygXM_wKk6Q8G5MS8UtsQ-D8aTgSEMY8a-G1i20dL2ZNcvPL9WkIEM7EOsqX",
                  }}
                >
                  <PayPalButtons
                    style={{ layout: "horizontal" }}
                    createOrder={(data, actions) => {
                      return actions.order.create({
                        purchase_units: [
                          {
                            amount: {
                              value: orderItem.totalPrice,
                            },
                          },
                        ],
                      });
                    }}
                    onApprove={async function (data, actions) {
                      return actions.order.capture().then(function (details) {
                        setPaypalPaymentDetails(details);
                        setPaypalLoading(false);
                      });
                    }}
                  />
                </PayPalScriptProvider>
              </div>
            ) : (
              <div className="bg-green-600 w-full p-2 rounded font-bold text-center flex justify-center">
                <p className="text-white">
                  <CheckCircleIcon className="w-6 h-6" />
                </p>
              </div>
            )}
            <div className="">
              {/* <p>Union Pay</p>
            <p>Visa Pay</p>
            <p>Master Card</p>
            <p>Credit Card</p> */}
              {!orderItem.isPaid && (
                <button
                  onClick={() => setOpen(!open)}
                  className="bg-green-500 opacity-90 w-full p-2 text-xl font-bold text-white rounded-md hover:opacity-95"
                >
                  Card Payment
                </button>
              )}

              <CardPaymentModal
                open={open}
                setOpen={setOpen}
                handleCardPayment={handleCardPayment}
                formData={formData}
                setFormData={setFormData}
              />
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default OrderDetails;
