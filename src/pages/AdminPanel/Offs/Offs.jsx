import React, { useEffect, useState } from "react";
import Input from "../../../Components/Form/Input";
import Button from "../../../Components/Form/Button";
import { useForm } from "../../../hooks/useForm";
import { minValidator, requiredValidator } from "../../../validators/rules";
import DataTable from "../../../Components/AdminPanel/DataTable/DataTable";
import Swal from "sweetalert2";
import { Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = [
  "شناسه",
  "کد",
  "درصد",
  "حداکثر استفاده",
  "دفعات استفاده",
  "سازنده",
  "حذف",
];

export default function Offs() {
  const [courses, setCourses] = useState([]);
  const [offs, setOffs] = useState([]);
  const [offCourse, setOffCourse] = useState("-1");
  const [formState, onInputHandler] = useForm(
    {
      code: {
        value: "",
        isValid: false,
      },
      percent: {
        value: "",
        isValid: false,
      },
      max: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  useEffect(() => {
    getAllOffs();

    fetch(`http://localhost:4000/v1/courses`)
      .then((res) => res.json())
      .then((allCourses) => setCourses(allCourses));
  }, []);

  function getAllOffs() {
    fetch(`http://localhost:4000/v1/offs`, {
      headers: {
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("user")).token
        }`,
      },
    })
      .then((res) => res.json())
      .then((allOffs) => {
        setOffs(allOffs);
      });
  }

  const createOff = (event) => {
    event.preventDefault();

    const newOffInfos = {
      code: formState.inputs.code.value,
      percent: formState.inputs.percent.value,
      course: offCourse,
      max: formState.inputs.max.value,
    };

    fetch(`http://localhost:4000/v1/offs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("user")).token
        }`,
      },
      body: JSON.stringify(newOffInfos),
    }).then((res) => {
      console.log(res);
      if (res.ok) {
        Swal.fire({
          title: "کد تخفیف با موفقیت ایجاد شد",
          icon: "success",
          confirmButtonText: "Ok",
        }).then(() => {
          getAllOffs();
        });
      }
    });
  };

  const removeOff = (offID) => {
    Swal.fire({
      title: "از حذف کد تخفیف مطمعنی؟",
      icon: "warning",
      confirmButtonText: "آره",
      showDenyButton: true,
      denyButtonText: "نه",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:4000/v1/offs/${offID}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${
              JSON.parse(localStorage.getItem("user")).token
            }`,
          },
        }).then((res) => {
          if (res.ok) {
            Swal.fire({
              title: "کد تخفیف حذف شد",
              icon: "success",
              confirmButtonText: "Ok",
            }).then(() => {
              getAllOffs();
            });
          }
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
              افزودن کد تخفیف
            </span>
            <form action="#" className="w-full flex flex-col gap-y-8">
              <div className="h-20 flex items-center justify-between px-4 bg-white dark:bg-[#333c4c] rounded-2xl">
                <Input
                  id="code"
                  className="bg-transparent outline-none"
                  type="text"
                  placeholder="کد تخفیف"
                  validations={[minValidator(5)]}
                  onInputHandler={onInputHandler}
                />
              </div>
              <div className="h-20 flex items-center justify-between px-4 bg-white dark:bg-[#333c4c] rounded-2xl">
                <Input
                  id="percent"
                  className="bg-transparent outline-none"
                  type="text"
                  placeholder="درصد تخفیف"
                  validations={[requiredValidator()]}
                  onInputHandler={onInputHandler}
                />
              </div>
              <div className="h-20 flex items-center justify-between px-4 bg-white dark:bg-[#333c4c] rounded-2xl">
                <Input
                  id="max"
                  className="bg-transparent outline-none"
                  type="text"
                  placeholder="حداکثر استفاده"
                  validations={[requiredValidator()]}
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
                    onChange={(event) => setOffCourse(event.target.value)}
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
                onClick={createOff}
                disabled={!formState.isFormValid}
              >
                <span className="mx-auto">افزودن</span>
              </Button>
            </form>
          </div>
        </div>
      </section>

      <DataTable title="کد های تخفیف">
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
                      className="text-4xl font-EstedadBold leading-none text-darkColor dark:text-white/70 mx-10"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {offs.map((off, index) => {
                const isLast = index === offs.length - 1;
                const classes = isLast
                  ? "py-6"
                  : "py-6 border-b border-gray-400";

                return (
                  <tr
                    key={off._id}
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
                        {off.code}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        className="text-darkBox dark:text-white/90 text-[1.6rem] font-EstedadLight"
                      >
                        {off.percent}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        className="text-darkBox dark:text-white/90 text-[1.6rem] font-EstedadLight"
                      >
                        {off.max}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        className="text-darkBox dark:text-white/90 text-[1.6rem] font-EstedadLight"
                      >
                        {off.uses}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        className="text-darkBox dark:text-white/90 text-[1.6rem] font-EstedadLight"
                      >
                        {off.creator}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        className="text-darkBox dark:text-white/90 text-[1.6rem] font-EstedadLight"
                      >
                        <button
                          type="button"
                          onClick={() => removeOff(off._id)}
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
