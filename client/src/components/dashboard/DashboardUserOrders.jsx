import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/outline";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { getUserOrderList } from "../../redux/actions/orderActions";

const DashboardUserOrders = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { orderList } = useSelector((state) => state.userOrderList);
  useEffect(() => {
    dispatch(getUserOrderList(toast));
  }, [dispatch]);
  const handleOrderDetails = (id) => {
    navigate(`/order/${id}`);
  };
  return (
    <div>
      <div className="">
        <h1 className="text-xl font-bold text-center md:text-left">
          Order List
        </h1>
        <table className="min-w-full my-4">
          <tbody className="border">
            <tr className="border-b-2">
              <th className="py-4 ">Order ID</th>
              <th className="px-4">Paid</th>
              <th className="px-4">Delivered</th>
              <th className="px-8">Price</th>
              <th className="px-8">Date</th>
              <th className="px-12"></th>
            </tr>
            {orderList.map((item) => {
              return (
                <>
                  <tr className="w-9 text-center cursor-pointer" key={item._id}>
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
                          <CheckCircleIcon className="w-6 h-6 text-red-500" />
                        </p>
                      ) : (
                        <p className="flex justify-center">
                          <XCircleIcon className="w-6 h-6 text-red-500" />
                        </p>
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
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardUserOrders;
