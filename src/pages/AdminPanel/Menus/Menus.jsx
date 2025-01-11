import React, { useEffect, useState } from "react";
import { useForm } from "../../../hooks/useForm";
import Input from "../../../Components/Form/Input";
import { minValidator } from "../../../validators/rules";
import Button from "../../../Components/Form/Button";
import DataTable from "../../../Components/AdminPanel/DataTable/DataTable";
import { Card, Typography } from "@material-tailwind/react";
import { HiOutlineCheck, HiOutlineCheckCircle } from "react-icons/hi2";
import Swal from "sweetalert2";

const TABLE_HEAD = ["شناسه", "عنوان", "آدرس", "دسته بندی ...", "ویرایش", "حذف"];

export default function Menus() {

  const [menus, setMenus] = useState([]);
  const [menuParent, setMenuParent] = useState("-1");

    const [formState, onInputHandler] = useForm(
      {
        title: {
          value: "",
          isValid: false,
        },
        href: {
          value: "",
          isValid: false,
        },
      },
      false
    );

  useEffect(() => {
    getAllMenus();
  }, []);

  function getAllMenus() {
    fetch("http://localhost:4000/v1/menus/all")
      .then((res) => res.json())
      .then((allMenus) => setMenus(allMenus));
  }

  const removeMenu = (menuID) => {
    Swal.fire({
      title: "از حذف منو مطمعنی؟",
      icon: "warning",
      confirmButtonText: "آره",
      showDenyButton: true,
      denyButtonText: "نه",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:4000/v1/menus/${menuID}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${
              JSON.parse(localStorage.getItem("user")).token
            }`,
          },
        }).then((res) => {
          if (res.ok) {
            Swal.fire({
              title: "منوی مورد نظر با موفقیت حذف شد",
              icon: "success",
              confirmButtonText: "Ok",
            }).then(() => {
              getAllMenus();
            });
          }
        });
      }
    });
  };

  const createMenu = (event) => {
    event.preventDefault();

    const newMenuInfo = {
      title: formState.inputs.title.value,
      href: formState.inputs.href.value,
      parent: menuParent === "-1" ? undefined : menuParent,
    };

    fetch(`http://localhost:4000/v1/menus`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("user")).token
        }`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMenuInfo),
    }).then((res) => {
      console.log(res);
      if (res.ok) {
        Swal.fire({
          title: "منوی جدید ایجاد شد",
          icon: "success",
          confirmButtonText: "Ok",
        }).then((result) => {
          getAllMenus();
        });
      }
    });
  };

  return (
    <>
      <section className="flex-center overflow-hidden my-28">
        <div className="mx-auto flex flex-col items-center w-min">
          <div className="flex flex-col items-center text-darkColor dark:text-white bg-light-blue-500/20 dark:bg-[#2f3749]/40 backdrop-blur-[4px] px-10 pb-10 pt-8 rounded-3xl w-[33rem] sm:w-[37rem] lg:w-[40rem] z-10">
            <span className="block font-EstedadMedium text-4xl mb-14 mt-4">
              افزودن منو جدید
            </span>
            <form action="#" className="w-full flex flex-col gap-y-8">
              <div className="h-20 flex items-center justify-between px-4 bg-white dark:bg-[#333c4c] rounded-2xl">
                <Input
                  id="title"
                  className="bg-transparent outline-none"
                  type="text"
                  placeholder="عنوان"
                  validations={[minValidator(3)]}
                  onInputHandler={onInputHandler}
                />
              </div>
              <div className="h-20 flex items-center justify-between px-4 bg-white dark:bg-[#333c4c] rounded-2xl">
                <Input
                  id="time"
                  className="bg-transparent outline-none"
                  type="text"
                  placeholder="آدرس"
                  validations={[minValidator(5)]}
                  onInputHandler={onInputHandler}
                />
              </div>
              <div className="h-20 flex items-center justify-between px-4 bg-white dark:bg-[#333c4c] rounded-2xl">
                <div className="flex items-center gap-x-2">
                  <label className="text-darkColor dark:text-white/70">
                    دوره
                  </label>
                  <select
                    className="text-darkColor dark:text-white/70 dark:bg-white/10 rounded-md py-2.5 px-1"
                    onChange={(event) => setSessionCourse(event.target.value)}
                  >
                    <option value="-1">مدنظر را انتخاب کنید</option>
                    {courses.map((course) => (
                      <option
                        className="text-darkColor text-[1.8rem]"
                        value={course._id}
                        key={course._id}
                      >
                        {course.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>


              <Button
                className={`h-20 rounded-4xl ${
                  formState.isFormValid
                    ? "bg-light-blue-600/40 hover:bg-light-blue-600/60"
                    : "bg-[#333c4c]/30"
                }`}
                type="submit"
                onClick={createSession}
                disabled={!formState.isFormValid}
              >
                <span className="mx-auto">افزودن</span>
              </Button>
            </form>
          </div>
        </div>
      </section>

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
                        <button
                          type="button"
                          onClick={() => removeMenu(menu._id)}
                        >
                          حذف
                        </button>
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
