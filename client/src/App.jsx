import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
import Dashboard from "./pages/dashboard/Dashboard";
import OrderDetails from "./pages/OrderDetails";
import AdminDashboard from "./pages/adminPanel/AdminDashboard";
import NotFound from "./pages/NotFound";

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
          path="/order/:id"
          element={
            <PrivateRoute>
              <OrderDetails />
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
        <Route
          path="/admin/dashboard"
          element={
            <PrivateRoute>
              <AdminDashboard />
            </PrivateRoute>
          }
        />
        {/* <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
