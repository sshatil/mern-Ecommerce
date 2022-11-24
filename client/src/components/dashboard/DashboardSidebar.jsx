import { HomeIcon, UserIcon } from "@heroicons/react/outline";
import { useState } from "react";
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
    </div>
  );
};

export default DashboardSidebar;
