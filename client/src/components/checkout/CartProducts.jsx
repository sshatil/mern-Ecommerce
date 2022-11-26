import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseProductQuantity,
  increaseProductQuantity,
  removeProductFromCart,
} from "../../redux/actions/cartActions";
import SingleCartItem from "../SingleCartItem";

const CartProducts = () => {
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
    <div className="mt-8">
      <div className="flow-root">
        <ul className="-my-6 divide-y divide-gray-200">
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
