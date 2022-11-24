import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/auth/Register";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Navbar from "./utils/Navbar";
import { Toaster } from "react-hot-toast";
import Login from "./pages/auth/Login";
import GoToTop from "./utils/GoToTop";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import PrivateRoute from "./utils/PrivateRoute";
import UserProfile from "./pages/UserProfile";
import Dashboard from "./pages/dashboard/Dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Toaster position="bottom-center" />
      <GoToTop />
      <Cart />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<ProductDetails />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/checkout"
          element={
            <PrivateRoute>
              <Checkout />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <UserProfile />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
