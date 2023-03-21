import { useState } from "react";
import AdminDashboardSidebar from "../../components/adminPanel/AdminDashboardSidebar";
import AdminHomePage from "../../components/adminPanel/AdminHomePage";
import UploadProduct from "../../components/adminPanel/UploadProduct";

const AdminDashboard = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const handleLink = (name) => {
    setActiveLink(name);
  };
  return (
    <div className="flex gap-1 h-screen">
      {/* Sidebar */}
      <div className="md:w-2/12 w-14 sidebar-bg h-screen pt-20">
        <AdminDashboardSidebar
          handleLink={handleLink}
          activeLink={activeLink}
        />
      </div>
      {/* Main Content */}
      <div className="md:w-10/12 w-full pt-20 overflow-scroll md:px-5 px-1 mt-5">
        {/* <DashboardContent /> */}
        {activeLink === "Home" && <AdminHomePage />}
        {activeLink === "Product" && <UploadProduct />}
      </div>
    </div>
  );
};

export default AdminDashboard;
