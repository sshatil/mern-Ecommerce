import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { Dialog, Transition } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import {
  handleOpenCartPage,
  handleCloseCartPage,
  removeProductFromCart,
  increaseProductQuantity,
  decreaseProductQuantity,
} from "../redux/actions/cartActions";
import { XCircleIcon, PlusIcon, MinusIcon } from "@heroicons/react/outline";
import SingleCartItem from "../components/SingleCartItem";

const Cart = () => {
  const dispatch = useDispatch();
  const { open } = useSelector((state) => state.shoppingPage);
  const { cartItems } = useSelector((state) => state.cart);
  const setOpen = () => {
    dispatch(handleOpenCartPage());
  };
  const handleClose = () => {
    dispatch(handleCloseCartPage());
  };

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
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={handleClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">
                          Shopping cart
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={() => handleClose()}
                          >
                            <span className="sr-only">Close panel</span>
                            <XCircleIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          </button>
                        </div>
                      </div>
                      {cartItems.length === 0 && (
                        <div className="flex justify-center items-center h-4/5">
                          <h1 className="text-2xl font-bold">
                            Your cart is empty
                          </h1>
                        </div>
                      )}

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
                    </div>

                    <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>
                          $
                          {cartItems.reduce(
                            (prev, item) => prev + item.price * item.qty,
                            0
                          )}
                        </p>
                      </div>
                      {/* <p className="mt-0.5 text-sm text-gray-500">
                        Shipping and taxes calculated at checkout.
                      </p> */}
                      <div className="mt-6">
                        <Link
                          to="/checkout"
                          className="flex items-center justify-center rounded-md
                          border border-transparent btn-color px-6 py-3
                          text-base font-medium text-white shadow-sm
                          "
                          onClick={handleClose}
                        >
                          Checkout
                        </Link>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Cart;
