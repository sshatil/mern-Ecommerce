import { useEffect } from "react";
import { useDispatch } from "react-redux";
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
      <Layout>
        <Header />
        <h1>products</h1>
      </Layout>
    </>
  );
};

export default Home;
