import React, { useEffect, useState } from "react";
import PAdminItem from "../../../Components/AdminPanel/PAdminItem/PAdminItem";
import DataTable from "../../../Components/AdminPanel/DataTable/DataTable";
import { HiBookOpen, HiUserPlus } from "react-icons/hi2";
import { MdPlayLesson } from "react-icons/md";
import { Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = ["شناسه", "نام‌ و نام‌خانوادگی", "عنوان", "ایمیل", "همراه"];

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
        <h3 className="mt-12 text-3xl xs:text-4xl">
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
      <DataTable title="افراد اخیرا ثبت‌نام شده">
        <Card className="h-full w-full rounded-md overflow-scroll dark:bg-darkBox">
          <table className="w-full min-w-max table-auto text-center">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-b-4 border-b-darkBox/30 dark:border-[#333c4c] pb-10 pt-12"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="text-4xl font-EstedadBold leading-none text-darkColor dark:text-white/70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {lastRegisteredUsers.map((user, index) => {
                const isLast = index === lastRegisteredUsers.length - 1;
                const classes = isLast
                  ? "py-6"
                  : "py-6 border-b border-gray-400";

                return (
                  <tr
                    key={user._id}
                    className="bg-gradient-to-l h-28 from-lightishBlue-500/15 via-transparent via-20% to-light-blue-700/15 hover:bg-light-blue-50 dark:hover:bg-light-blue-200/5"
                  >
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="text-2xl font-EstedadBold text-darkColor dark:text-white/90"
                      >
                        {index + 1}
                      </Typography>
                    </td>

                    <td className={classes}>
                      <Typography
                        variant="small"
                        className="text-darkBox dark:text-white/90 text-[1.6rem] font-EstedadLight"
                      >
                        {user.username}
                      </Typography>
                    </td>

                    <td className={classes}>
                      <Typography
                        variant="small"
                        className="text-darkBox dark:text-white/90 text-[1.6rem] font-EstedadLight"
                      >
                        {user.role}
                      </Typography>
                    </td>

                    <td className={classes}>
                      <Typography
                        variant="small"
                        className="text-darkBox dark:text-white/90 text-[1.6rem] font-EstedadLight"
                      >
                        {user.email}
                      </Typography>
                    </td>

                    <td className={classes}>
                      <Typography
                        variant="small"
                        className="text-darkBox dark:text-white/90 text-[1.6rem] font-EstedadLight"
                      >
                        {user.phone}
                      </Typography>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Card>
      </DataTable>
    </div>
  );
}
