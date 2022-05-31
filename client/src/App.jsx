import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./utils/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes></Routes>
    </BrowserRouter>
  );
};

export default App;
