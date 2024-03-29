import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/outline";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { orderToDelivered } from "../../redux/actions/orderActions";
import { toast } from "react-hot-toast";

const AllOrder = ({ allOrderList }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleOrderDetails = (id) => {
    navigate(`/order/${id}`);
  };
  const handleDelivered = (orderId) => {
    dispatch(orderToDelivered(orderId, toast));
  };
  return (
    <div>
      <div className="mt-10">
        <h1 className="text-xl font-bold text-center md:text-left">
          Order List
        </h1>
        {allOrderList.length === 0 ? (
          <h1 className="text-center mt-20 text-lg font-semibold">
            No order found
          </h1>
        ) : (
          <table className="min-w-full my-4">
            <tbody className="border">
              <tr className="border-b-2">
                <th className="py-4 ">Order ID</th>
                <th className="px-4">Paid</th>
                <th className="px-4">Status</th>
                <th className="px-8">Price</th>
                <th className="px-8">Date</th>
                {/* <th className="px-12">Status</th> */}
              </tr>
              {allOrderList.map((item) => {
                return (
                  <>
                    <tr className="w-9 text-center" key={item._id}>
                      {/* <td>{item.totalPrice}</td> */}
                      <td className="border-b-2 w-2/12 md:pl-4 sm:pl-4 pr-10 py-2">
                        {item._id}
                      </td>
                      <td className="border-b-2 w-2/12 py-2">
                        {item.isPaid ? (
                          <p className="flex justify-center">
                            <CheckCircleIcon className="w-6 h-6 text-green-500" />
                          </p>
                        ) : (
                          <p className="flex justify-center">
                            <XCircleIcon className="w-6 h-6 text-red-500" />
                          </p>
                        )}
                      </td>
                      <td className="border-b-2 w-2/12 py-2">
                        {item.isDelivered ? (
                          <p className="flex justify-center">
                            <CheckCircleIcon className="w-6 h-6 text-green-500" />
                          </p>
                        ) : (
                          // <select name="" id="">
                          //   <option value="">In Progress</option>
                          //   <option
                          //     value=""
                          //     onClick={() => handleDelivered(item._id)}
                          //   >
                          //     Completed
                          //   </option>
                          // </select>
                          <button onClick={() => handleDelivered(item._id)}>
                            Pending
                          </button>
                        )}
                      </td>
                      <td className="border-b-2 w-2/12 py-2">
                        $ {item.totalPrice}
                      </td>
                      <td className="border-b-2 w-2/12 py-2">
                        {item.createdAt.substring(0, 10)}
                      </td>
                      <td className="border-b-2 w-2/12 py-2">
                        <button
                          className="px-4 py-1 btn-color rounded-lg"
                          onClick={() => handleOrderDetails(item._id)}
                        >
                          Details
                        </button>
                      </td>
                      {/* <td className="border-b-2 w-2/12 py-2">
                        <select name="" id="">
                          <option value="">In Progress</option>
                          <option value="">Completed</option>
                        </select>
                      </td> */}
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AllOrder;
