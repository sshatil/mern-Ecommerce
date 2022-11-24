import UserProfile from "../../pages/UserProfile";
import DashboardHome from "./DashboardHome";

const DashboardContent = () => {
  return (
    <div>
      <DashboardHome />
      <UserProfile />
    </div>
  );
};

export default DashboardContent;
