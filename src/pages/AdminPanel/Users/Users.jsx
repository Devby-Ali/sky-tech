import React, { useEffect, useState } from "react";
import DataTable from "../../../Components/AdminPanel/DataTable/DataTable";
import { Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = [
  "شناسه",
  "نام و نام خانوادگی",
  "ایمیل",
  "نام کاربری",
  "همراه",
  "ویرایش",
  "حذف",
  "بن",
];

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    fetch(`http://localhost:4000/v1/users`, {
      headers: {
        Authorization: `Bearer ${localStorageData.token}`,
      },
    })
      .then((res) => res.json())
      .then((allUsers) => {
        console.log(allUsers);
        setUsers(allUsers);
      });
  }, []);

  return (
    <>
      <DataTable title="کاربران">
        <Card className="h-full w-full rounded-md overflow-scroll px-6">
          <table className="w-full min-w-max table-auto text-center">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-b border-gray-300 pb-4 pt-10"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="text-4xl font-EstedadBold leading-none"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => {
                const isLast = index === users.length - 1;
                const classes = isLast
                  ? "py-4"
                  : "py-4 border-b border-gray-300";

                return (
                  <tr key={user.name} className="hover:bg-gray-50">
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="text-2xl font-EstedadBold"
                      >
                        {index + 1}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        className="text-darkBox text-[1.6rem]"
                      >
                        {user.name}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        className="text-darkBox text-[1.6rem]"
                      >
                        {user.email}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        className="text-darkBox text-[1.6rem]"
                      >
                        {user.username}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        className="text-darkBox text-[1.6rem]"
                      >
                        {user.phone}
                      </Typography>
                    </td>
                    <td>
                      <button
                        type="button"
                        className="text-darkBox text-[1.6rem]"
                      >
                        ویرایش
                      </button>
                    </td>
                    <td>
                      <button
                        type="button"
                        className="text-darkBox text-[1.6rem]"
                      >
                        حذف
                      </button>
                    </td>
                    <td>
                      <button
                        type="button"
                        className="text-darkBox text-[1.6rem]"
                      >
                        بن
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Card>
      </DataTable>
    </>
  );
}
