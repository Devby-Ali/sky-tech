import React, { useEffect, useState } from "react";
import DataTable from "../../../Components/AdminPanel/DataTable/DataTable";
import { Card, Typography } from "@material-tailwind/react";
import { HiOutlineCheck, HiOutlineCheckCircle } from "react-icons/hi2";

const TABLE_HEAD = ["شناسه", "عنوان", "آدرس", "دسته بندی ...", "ویرایش", "حذف"];

export default function Menus() {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/v1/menus/all")
      .then((res) => res.json())
      .then((allMenus) => setMenus(allMenus));
  }, []);

  return (
    <>
      <DataTable title="منو ها">
        <Card className="h-full w-full rounded-md overflow-scroll px-6 dark:bg-darkBox">
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
              {menus.map((menu, index) => {
                const isLast = index === menus.length - 1;
                const classes = isLast
                  ? "py-6"
                  : "py-6 border-b border-gray-400";

                return (
                  <tr
                    key={menu.name}
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
                        {menu.title}
                      </Typography>
                    </td>

                    <td className={classes}>
                      <Typography
                        variant="small"
                        className="text-darkBox dark:text-white/90 text-[1.6rem] font-EstedadLight"
                      >
                        {menu.href}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        className="text-darkBox dark:text-white/90 text-[1.6rem] font-EstedadLight"
                      >
                        {menu.parent ? (
                          menu.parent.title
                        ) : (
                          <div className="flex-center text-light-blue-600 dark:text-light-blue-100/90 text-6xl">
                            <HiOutlineCheckCircle />
                          </div>
                        )}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        className="text-darkBox dark:text-white/90 text-[1.6rem] font-EstedadLight"
                      >
                        <button type="button">ویرایش</button>
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        className="text-darkBox  dark:text-white/90 text-[1.6rem] font-EstedadLight"
                      >
                        <button type="button">حذف</button>
                      </Typography>
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
