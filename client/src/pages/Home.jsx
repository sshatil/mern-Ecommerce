import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "../redux/actions/proudctActions";
import Layout from "../utils/Layout";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <Layout>
      <h1>products</h1>
    </Layout>
  );
};

export default Home;
