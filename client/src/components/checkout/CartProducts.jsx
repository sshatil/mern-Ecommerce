import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  decreaseProductQuantity,
  increaseProductQuantity,
  removeProductFromCart,
} from "../../redux/actions/cartActions";
import SingleCartItem from "../SingleCartItem";

const CartProducts = ({}) => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const handleRemove = (id) => {
    dispatch(removeProductFromCart(id));
  };
  const increase = (id, qty) => {
    dispatch(increaseProductQuantity(id, qty));
  };
  const decrease = (id, qty) => {
    dispatch(decreaseProductQuantity(id, qty));
  };
  return (
    <div className="mt-6">
      <h1 className="text-xl font-bold my-3 border-b-2 pb-2">My Products</h1>
      <div className="flow-root">
        <ul className="divide-y divide-gray-200">
          {cartItems.map((product) => (
            <>
              <SingleCartItem
                product={product}
                handleRemove={handleRemove}
                increase={increase}
                decrease={decrease}
                key={product._id}
              />
            </>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CartProducts;
