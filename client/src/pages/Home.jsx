import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Banner from "../components/Banner";
import FilterProducts from "../components/FilterProducts";
import Header from "../components/Header";
import Input from "../components/Input";
import { getProducts } from "../redux/actions/proudctActions";
import Layout from "../utils/Layout";

const Home = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const [rating, setRating] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    dispatch(getProducts(name, category, min, max, rating, setLoading));
  }, [dispatch, name, category, min, max, rating]);
  useEffect(() => {
    setName("");
  }, [loading]);
  console.log(loading);
  console.log(name);
  return (
    <>
      <Banner />
      <Header />
      {/* <Input setName={setName} /> */}
      <Layout>
        <FilterProducts setCategory={setCategory} setName={setName} />
      </Layout>
    </>
  );
};

export default Home;
