import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../Components/AdminPanel/Sidebar/Sidebar";
import Topbar from "../../Components/AdminPanel/Topbar/Topbar";

export default function index() {
  return (
    <>
      <div className="flex" id="content">
        <div className="hidden md:block min-h-screen bg-white dark:bg-sky-900/5">
          <Sidebar />
        </div>

        <div id="home" className="w-full overflow-auto">
          <Topbar />
          <div className="container md:px-12">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
