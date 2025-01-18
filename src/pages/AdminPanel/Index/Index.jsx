import React, { useEffect, useState } from "react";
import PAdminItem from "../../../Components/AdminPanel/PAdminItem/PAdminItem";
import DataTable from "../../../Components/AdminPanel/DataTable/DataTable";
import { HiBookOpen, HiUserPlus } from "react-icons/hi2";
import { MdPlayLesson } from "react-icons/md";

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
        <h3 className="mt-12 sm:text-4xl">
          به پنل خودت خوش اومدی{" "}
          <span className="text-light-blue-600 font-bold mx-2">
            {adminName}
          </span>
        </h3>

        <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row items-center gap-8 lg:gap-12 justify-center mt-12">
          {infos.map((item) => (
            <PAdminItem {...item} />
          ))}

        </div>
      </div>
    </div>
  );
}
