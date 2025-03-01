import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../Components/UserPanel/Sidebar/Sidebar";
import Topbar from "../../Components/UserPanel/Topbar/Topbar";

export default function Index() {
  return (
    <>
      <div className="flex" id="content">
        <div className="hidden md:block min-h-screen bg-white dark:bg-sky-900/5">
          <Sidebar />
        </div>

        <section id="home" className="w-full overflow-auto">
          <Topbar />
          <div className="container md:px-12">
            <Outlet />
          </div>
        </section>
      </div>
    </>
  );
}
