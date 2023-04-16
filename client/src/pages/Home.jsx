import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import Products from "../components/Products";
import SideBar from "../components/SideBar";
import { getUserProfile } from "../redux/actions/userProfileActions";
import Layout from "../utils/Layout";

const Home = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const { isAuthenticated, isAdmin } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isAuthenticated) {
      dispatch(getUserProfile(toast));
    }
  }, [dispatch, isAuthenticated]);
  return (
    <Layout>
      <Header />
      <div className="flex gap-1 w-full">
        <SideBar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        <Products showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      </div>
      {/* <Footer /> */}
    </Layout>
  );
};

export default Home;
