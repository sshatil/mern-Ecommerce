import { HomeIcon, UserIcon, ArchiveIcon } from "@heroicons/react/outline";
import SidebarLink from "./SidebarLink";

const DashboardSidebar = ({ handleLink, activeLink }) => {
  return (
    <div className="">
      <SidebarLink
        Icon={HomeIcon}
        name="Home"
        activeLink={activeLink}
        handleLink={handleLink}
      />
      <SidebarLink
        Icon={UserIcon}
        name="Profile"
        activeLink={activeLink}
        handleLink={handleLink}
      />
      <SidebarLink
        Icon={ArchiveIcon}
        name="Order"
        activeLink={activeLink}
        handleLink={handleLink}
      />
    </div>
  );
};

export default DashboardSidebar;
