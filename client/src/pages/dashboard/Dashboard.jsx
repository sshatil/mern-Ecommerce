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
    <div className="pt-20 flex gap-1">
      {/* Sidebar */}
      <div className="w-2/12 border hidden md:inline-block">
        <DashboardSidebar handleLink={handleLink} activeLink={activeLink} />
      </div>
      {/* Main Content */}
      <div className="md:w-10/12 w-full border">
        {/* <DashboardContent /> */}
        {activeLink === "Home" && <DashboardHome />}
        {activeLink === "Profile" && <UserProfile />}
      </div>
    </div>
  );
};

export default Dashboard;
