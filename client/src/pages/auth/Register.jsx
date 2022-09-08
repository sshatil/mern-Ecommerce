import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { toast } from "react-toastify";
import Layout from "../../utils/Layout";

import { EyeOffIcon } from "@heroicons/react/solid";
import { EyeIcon } from "@heroicons/react/solid";
import { registerUser } from "../../redux/actions/authActions";
import toast from "react-hot-toast";

const Register = () => {
  const dispatch = useDispatch();
  // const { isAuthenticated } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { name, email, password, confirmPassword } = formData;
  const handleData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Password don't match");
    } else {
      dispatch(registerUser({ name, email, password }, toast));
    }
  };

  return (
    <Layout>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            {/* <img className="mx-auto h-12 w-auto" src={logo} alt="Workflow" /> */}
            <h2 className="mt-20 text-center text-3xl font-extrabold">
              Sign in to your account
            </h2>
            <p className="mt-2 text-center text-sm">
              Or{" "}
              <Link
                to="/login"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Login your account
              </Link>
            </p>
          </div>
          <div className="px-6 py-1 border-2 border-black rounded-xl">
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="rounded-md shadow-sm space-y-4">
                <div>
                  <label htmlFor="name" className="sr-only">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="name"
                    value={name}
                    onChange={handleData}
                    autoComplete="name"
                    // required
                    className="border-[#102a44] appearance-none rounded-none relative block w-full px-3 py-2 border  placeholder-gray-500 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    value={email}
                    onChange={handleData}
                    autoComplete="email"
                    // required
                    className="border-[#102a44] appearance-none rounded-none relative block w-full px-3 py-2 border  placeholder-gray-500 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Email address"
                  />
                </div>
                <div className="relative">
                  <div>
                    <label htmlFor="password" className="sr-only">
                      Password
                    </label>
                    <input
                      id="password"
                      name="password"
                      type={!showPassword ? "password" : "name"}
                      value={password}
                      onChange={handleData}
                      autoComplete="current-password"
                      // required
                      className="border-[#102a44] appearance-none rounded-none relative block w-full px-3 py-2 border  placeholder-gray-500 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500  sm:text-sm"
                      placeholder="Password"
                    />
                  </div>
                  <div
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute top-2 right-3 cursor-pointer"
                  >
                    {!showPassword ? (
                      <EyeOffIcon className="w-5 h-5 text-gray-500" />
                    ) : (
                      <EyeIcon className="w-5 h-5 text-gray-500" />
                    )}
                  </div>
                </div>
                <div className="relative">
                  <div>
                    <label htmlFor="confirm-password" className="sr-only">
                      Password
                    </label>
                    <input
                      id="confirm-password"
                      name="confirmPassword"
                      type={!showConfirmPassword ? "password" : "name"}
                      value={confirmPassword}
                      onChange={handleData}
                      // required
                      className="border-[#102a44] appearance-none rounded-none relative block w-full px-3 py-2 border  placeholder-gray-500 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500  sm:text-sm"
                      placeholder="Confirm your password"
                    />
                  </div>
                  <div
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute top-2 right-3 cursor-pointer"
                  >
                    {!showConfirmPassword ? (
                      <EyeOffIcon className="w-5 h-5 text-gray-500" />
                    ) : (
                      <EyeIcon className="w-5 h-5 text-gray-500" />
                    )}
                  </div>
                </div>
              </div>
              <div className="pb-4">
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 text-sm font-medium rounded-md text-white btn-color opacity-100 focus:outline-none"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
