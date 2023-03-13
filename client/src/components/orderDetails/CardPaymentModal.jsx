import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
// import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { FcSimCardChip } from "react-icons/fc";

const CardPaymentModal = ({ open, setOpen }) => {
  const cancelButtonRef = useRef(null);
  const cardNumber = "1237453759840955";
  const firstFourDigit = cardNumber.slice(0, 4);
  const secondFourDigit = cardNumber.slice(4, 8);
  const thirdFourDigit = cardNumber.slice(8, 12);
  const fourthFourDigit = cardNumber.slice(12, 16);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel
                className="relative transform overflow-hidden rounded-lg bg-yellow-400 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg flex justify-center"
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1628527304948-06157ee3c8a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGF5bWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60")',
                  backgroundRepeat: "no-repeat",
                  objectFit: "cover",
                }}
              >
                <div className="h-48 md:h-56 m-3 md:m-3 rounded-lg p-4 bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg px-6 text-gray-600">
                  <div className="text-lg font-bold">Bank Of China</div>
                  <div className="">
                    <p>
                      <FcSimCardChip className="w-14 h-14" />
                    </p>
                  </div>
                  <div className="flex gap-2 md:gap-4 md:text-2xl text-sm font-bold tracking-[4px]">
                    <p>{firstFourDigit}</p>
                    <p>{secondFourDigit}</p>
                    <p>{thirdFourDigit}</p>
                    <p>{fourthFourDigit}</p>
                  </div>
                  {/* valid date */}
                  <div className="flex justify-center items-center gap-3 md:text-sm text-[10px] leading-none mt-2">
                    <div className="">
                      <p>VALID</p>
                      <p>THRU</p>
                    </div>
                    <p>12/30</p>
                  </div>
                  {/* */}
                  {/* Bank user name and card type */}
                  <div className="flex justify-between">
                    <h1>User Name</h1>
                    <div className="">VISA</div>
                  </div>
                </div>
                {/* <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                    onClick={() => setOpen(false)}
                  >
                    Deactivate
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div> */}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default CardPaymentModal;
