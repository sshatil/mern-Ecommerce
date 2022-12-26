import { HomeIcon, PlusIcon } from "@heroicons/react/outline";
import SidebarLink from "../dashboard/SidebarLink";

const AdminDashboardSidebar = ({ handleLink, activeLink }) => {
  return (
    <div className="">
      <SidebarLink
        Icon={HomeIcon}
        name="Home"
        activeLink={activeLink}
        handleLink={handleLink}
      />
      <SidebarLink
        Icon={PlusIcon}
        name="Product"
        activeLink={activeLink}
        handleLink={handleLink}
      />
    </div>
  );
};

export default AdminDashboardSidebar;
