import { useState } from "react";
import DashboardContent from "../../components/dashboard/DashboardContent";
import DashboardHome from "../../components/dashboard/DashboardHome";
import DashboardSidebar from "../../components/dashboard/DashboardSidebar";
import UserProfile from "../UserProfile";

const Dashboard = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const handleLink = (name) => {
    setActiveLink(name);
  };
  return (
    <div className="flex gap-1">
      {/* Sidebar */}
      <div className="md:w-2/12 w-14 sidebar-bg h-screen pt-20">
        <DashboardSidebar handleLink={handleLink} activeLink={activeLink} />
      </div>
      {/* Main Content */}
      <div className="md:w-10/12 w-full pt-20">
        {/* <DashboardContent /> */}
        {activeLink === "Home" && <DashboardHome />}
        {activeLink === "Profile" && <UserProfile />}
      </div>
    </div>
  );
};

export default Dashboard;
