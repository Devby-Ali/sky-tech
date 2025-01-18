import React, { useEffect, useState } from "react";
import PAdminItem from "../../../Components/AdminPanel/PAdminItem/PAdminItem";
import DataTable from "../../../Components/AdminPanel/DataTable/DataTable";

export default function Index() {
  const [infos, setInfos] = useState([]);
  const [lastRegisteredUsers, setLastRegisteredUsers] = useState([]);
  const [adminName, setAdminName] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000/v1/infos/p-admin", {
      headers: {
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("user")).token
        }`,
      },
    })
      .then((res) => res.json())
      .then((pageInfo) => {
        console.log(pageInfo);
        setInfos(pageInfo.infos);
        setLastRegisteredUsers(pageInfo.lastUsers);
        setAdminName(pageInfo.adminName);
      });
  }, []);

  return (
    <div className="container">
      <div className="text-darkColor dark:text-white">
        <h3 className="mt-12 sm:text-4xl">به پنل خودت خوش اومدی <span className="text-light-blue-600 font-bold mx-2">{adminName}</span></h3>

        <div className="flex flex-col sm:flex-row items-center justify-center mt-12">
          <div className="bg-white dark:bg-darkBox rounded-xl">
            <p>title</p>
            <span>count</span>
            <p>title ها در یک ماه گذشته</p>
          </div>
          <div className="bg-white dark:bg-darkBox rounded-xl">
            <p>title</p>
            <span>count</span>
            <p>title ها در یک ماه گذشته</p>
          </div>
          <div className="bg-white dark:bg-darkBox rounded-xl">
            <p>title</p>
            <span>count</span>
            <p>title ها در یک ماه گذشته</p>
          </div>
        </div>
        
      </div>
    </div>
  );
}
