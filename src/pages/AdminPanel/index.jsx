import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../Components/AdminPanel/Sidebar/Sidebar";
import Topbar from "../../Components/AdminPanel/Topbar/Topbar";

export default function index() {
  return (
    <>
      <div id="content">
        <div id="home">
          <Topbar />
          <Outlet />
        </div>
      </div>
    </>
  );
}
