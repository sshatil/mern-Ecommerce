import React from "react";

const SidebarLoading = ({ showSidebar }) => {
  return (
    <div
      className={`w-1/4 space-y-3 ${showSidebar && "hidden"} md:inline-block`}
    >
      <div className="p-3 rounded-sm bg-[#F6F7F8]"></div>
      <div className="p-3 rounded-sm bg-[#F6F7F8]"></div>
      <div className="p-3 rounded-sm bg-[#F6F7F8]"></div>
      <div className="p-3 rounded-sm bg-[#F6F7F8]"></div>
      <div className="p-3 rounded-sm bg-[#F6F7F8]"></div>
      <div className="p-3 rounded-sm bg-[#F6F7F8]"></div>
      <div className="p-3 rounded-sm bg-[#F6F7F8]"></div>
      <div className="p-3 rounded-sm bg-[#F6F7F8]"></div>
      <div className="p-3 rounded-sm bg-[#F6F7F8]"></div>
    </div>
  );
};

export default SidebarLoading;
