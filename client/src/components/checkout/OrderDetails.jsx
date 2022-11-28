import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { userOrderDetails } from "../../redux/actions/orderActions";
import Layout from "../../utils/Layout";

const OrderDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { user, isPaid, shippingAddress } = useSelector(
    (state) => state.orderDetails.orderItem
  );
  const { address, city, postalCode, country } = shippingAddress;
  useEffect(() => {
    dispatch(userOrderDetails(id));
  }, [dispatch, id]);
  return (
    <Layout>
      <div className="pt-20">
        <h1>Name: {user.name}</h1>
        <h1>Email: {user.email}</h1>
        {/* shipping address */}
        <p>Address: {address}</p>
        <p>City: {city}</p>
        <p>postalCode: {postalCode}</p>
        <p>country: {country}</p>
        <div className="">
          Paid Status: {!isPaid ? <p>Not Paid</p> : <p>Paid</p>}
        </div>
        <div className="">
          <h1>Products</h1>
          <table class="table-fixed">
            <tbody>
              <tr>
                <td>The Sliding Mr. Bones dfdsfds fsdfsfs</td>
                <td>Malcolm Lockyer</td>
                <td>1961</td>
                <td>1</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default OrderDetails;
