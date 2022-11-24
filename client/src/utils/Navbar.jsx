import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { MenuIcon, XIcon, ShoppingCartIcon } from "@heroicons/react/outline";
import { UserCircleIcon } from "@heroicons/react/solid";
import logo from "../assets/Icon.svg";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/actions/authActions";
import { handleOpenCartPage } from "../redux/actions/cartActions";

const isNotActiveStyle =
  "text-gray-300 hover:text-white px-3 py-2 text-lg font-sm";
const isActiveStyle =
  "text-white px-3 py-2 text-lg font-sm border-b-[3px] border-[#40BFFF]";

export default function Navbar() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const setOpen = () => {
    dispatch(handleOpenCartPage());
  };
  return (
    <Disclosure as="nav" className="bg-[#131921] fixed inset-x-0 z-10">
      {({ open }) => (
        <>
          <div className="mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <Link to="/" className="w-8 h-8">
                    <img src={logo} alt="" />
                  </Link>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        isActive ? isActiveStyle : isNotActiveStyle
                      }
                    >
                      Home
                    </NavLink>
                  </div>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    <NavLink
                      to="/dashboard"
                      className={({ isActive }) =>
                        isActive ? isActiveStyle : isNotActiveStyle
                      }
                    >
                      Dashboard
                    </NavLink>
                  </div>
                </div>
              </div>

              <div
                // to="/cart"
                className="absolute inset-y-0 right-8 mt-2 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 cursor-pointer"
                onClick={setOpen}
              >
                <div className=" text-gray-200 relative">
                  <h1
                    className="text-center font-bold text-sm  absolute -top-5 left-4 w-5 h-5 rounded-full bg-sky-600"
                    aria-hidden="true"
                  >
                    {cartItems.length}
                  </h1>
                </div>
                <div className="mr-2 p-1 rounded-full text-gray-400 focus:outline-none">
                  <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
                </div>
              </div>
              {/* dropdown */}
              <Menu as="div" className="ml-3 relative">
                <div>
                  <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none">
                    <span className="sr-only">Open user menu</span>
                    <UserCircleIcon className="h-8 w-8 text-white" />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white focus:outline-none">
                    <NavLink
                      to="/profile"
                      className={({ isActive }) =>
                        `${
                          isActive
                            ? "text-gray-500 block px-4 py-2 text-sm"
                            : "block px-4 py-2 text-sm text-gray-700 hover:bg-slate-400"
                        }`
                      }
                    >
                      My Profile
                    </NavLink>
                    <NavLink
                      to="/dashboard"
                      className={({ isActive }) =>
                        `${
                          isActive
                            ? "text-gray-500 block px-4 py-2 text-sm"
                            : "block px-4 py-2 text-sm text-gray-700 hover:bg-slate-400"
                        }`
                      }
                    >
                      Dashboard
                    </NavLink>
                    {!isAuthenticated ? (
                      <NavLink
                        to="/login"
                        className={({ isActive }) =>
                          `${
                            isActive
                              ? "text-gray-500 block px-4 py-2 text-sm"
                              : "block px-4 py-2 text-sm text-gray-700 hover:bg-slate-400"
                          }`
                        }
                      >
                        Login
                      </NavLink>
                    ) : (
                      <NavLink
                        to="/"
                        onClick={() => dispatch(logout())}
                        className={({ isActive }) =>
                          `${
                            isActive
                              ? "text-gray-500 block px-4 py-2 text-sm"
                              : "block px-4 py-2 text-sm text-gray-700 hover:bg-slate-400"
                          }`
                        }
                      >
                        Logout
                      </NavLink>
                    )}
                  </Menu.Items>
                </Transition>
              </Menu>
              {/* dropdown end */}
            </div>
          </div>

          {/* mobile menu */}
          <Disclosure.Panel className="sm:hidden">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "bg-gray-800 text-white block px-3 rounded-md text-base font-medium my-1"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white block px-3 rounded-md text-base font-medium my-1"
              }
            >
              <div className="px-2 pt-2 pb-3 space-y-1w-100">
                <Disclosure.Button as="a">Home</Disclosure.Button>
              </div>
            </NavLink>
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                isActive
                  ? "bg-gray-800 text-white block px-3 rounded-md text-base font-medium my-1"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white block px-3 rounded-md text-base font-medium my-1"
              }
            >
              <div className="px-2 pt-2 pb-3 space-y-1 w-100">
                <Disclosure.Button as="a">Shop</Disclosure.Button>
              </div>
            </NavLink>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
