import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../Components/AdminPanel/Sidebar/Sidebar";
import Topbar from "../../Components/AdminPanel/Topbar/Topbar";

export default function index() {
  return (
    <>
      <div className="flex" id="content">
        <div className="hidden md:block w-[26rem] min-h-screen bg-white dark:bg-darkBox z-50">
          <Sidebar />
        </div>

        <div id="home" className="w-full overflow-auto">
          <Topbar />
          <Outlet />
        </div>
      </div>
    </>
  );
}
