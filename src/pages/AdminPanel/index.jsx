import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../Components/AdminPanel/Sidebar/Sidebar";
import Topbar from "../../Components/AdminPanel/Topbar/Topbar";

import "./index.css";

export default function index() {
  return (
    <>
      <div id="content">
        <Sidebar />

        <div id="home" className="col-10">
          <Topbar />
        </div>
      </div>
      <Outlet />
    </>
  );
}
