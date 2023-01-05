import { useState } from "react";
import Header from "../components/Header";
import Products from "../components/Products";
import SideBar from "../components/SideBar";

const Home = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  return (
    <>
      <Header />
      <div className="flex gap-1 w-full">
        <SideBar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        <Products showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      </div>
    </>
  );
};

export default Home;
