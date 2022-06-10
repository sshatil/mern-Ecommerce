import { useEffect } from "react";
import { useDispatch } from "react-redux";
import FilterProducts from "../components/FilterProducts";
import Header from "../components/Header";
import { getProducts } from "../redux/actions/proudctActions";
import Layout from "../utils/Layout";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <>
      <Header />
      <Layout>
        <FilterProducts />
      </Layout>
    </>
  );
};

export default Home;
