import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/auth/Register";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Navbar from "./utils/Navbar";
import { Toaster } from "react-hot-toast";
import Login from "./pages/auth/Login";
import GoToTop from "./utils/GoToTop";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Toaster position="bottom-center" />
      <GoToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<ProductDetails />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
