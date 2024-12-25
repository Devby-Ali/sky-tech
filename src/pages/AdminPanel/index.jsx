import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../Components/AdminPanel/Sidebar/Sidebar";
import Topbar from "../../Components/AdminPanel/Topbar/Topbar";


export default function index() {
  return (
    <>
      <div className="flex" id="content">
        <Sidebar />

        <div id="home" className="w-5/6">
          <Topbar />
        </div>
      </div>
      <Outlet />
    </>
  );
}
