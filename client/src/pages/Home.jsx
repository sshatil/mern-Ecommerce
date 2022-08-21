import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Banner from "../components/Banner";
import FilterProducts from "../components/FilterProducts";
import Header from "../components/Header";
import Input from "../components/Input";
import Products from "../components/Products";
import SideBar from "../components/SideBar";
import { getProducts } from "../redux/actions/proudctActions";
import Layout from "../utils/Layout";

const Home = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  return (
    <>
      {/* <Banner /> */}
      {/* <Input setName={setName} /> */}
      <Header />
      {/* <Layout> */}
      <div className="flex gap-2 w-full">
        <SideBar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        <Products showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      </div>
      {/* <FilterProducts /> */}
      {/* </Layout> */}
    </>
  );
};

export default Home;
