import React, { useEffect, useState } from "react";
import DataTable from "../../../Components/AdminPanel/DataTable/DataTable";
import Input from "../../../Components/Form/Input";
import Button from "../../../Components/Form/Button";
import {
  requiredValidator,
  minValidator,
  maxValidator,
} from "./../../../validators/rules";
import { useForm } from "../../../hooks/useForm";
import { Card, Typography } from "@material-tailwind/react";
import Swal from "sweetalert2";

const TABLE_HEAD = [
  "شناسه",
  "عنوان",
  "مبلغ",
  "وضعیت",
  "لینک",
  "مدرس",
  "دسته بندی",
  "ویرایش",
  "حذف",
];

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [courseCategory, setCourseCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [courseStatus, setCourseStatus] = useState("start");
  const [courseCover, setCourseCover] = useState({});

  const [formState, onInputHandler] = useForm(
    {
      name: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
      shortName: {
        value: "",
        isValid: false,
      },
      price: {
        value: "",
        isValid: false,
      },
      support: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  useEffect(() => {
    getAllCourses();
    fetch(`http://localhost:4000/v1/category`)
      .then((res) => res.json())
      .then((allCategories) => {
        setCategories(allCategories);
      });
  }, []);

  function getAllCourses() {
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    fetch("http://localhost:4000/v1/courses", {
      headers: {
        Authorization: `Bearer ${localStorageData.token}`,
      },
    })
      .then((res) => res.json())
      .then((allCourses) => {
        console.log(allCourses);
        setCourses(allCourses);
      });
  }

  const removeCourse = (courseID) => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    Swal.fire({
      title: "از حذف دوره مطمعنی؟",
      icon: "warning",
      showDenyButton: true,
      confirmButtonText: "آره",
      denyButtonText: "نه",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:4000/v1/courses/${courseID}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorageData.token}`,
          },
        }).then((res) => {
          if (res.ok) {
            Swal.fire({
              title: "دوره موردنظر با موفقیت حذف شد",
              icon: "success",
              confirmButtonText: "Ok",
            }).then(() => {
              getAllCourses();
            });
          } else {
            Swal.fire({
              title: "حذف دوره با مشکل مواجه شد",
              icon: "error",
              confirmButtonText: "Ok",
            });
          }
        });
      }
    });
  };

  const selectCategory = (event) => {
    setCourseCategory(event.target.value);
  };

  const addNewCourse = (event) => {
    event.preventDefault();
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    let formData = new FormData();
    formData.append("name", formState.inputs.name.value);
    formData.append("description", formState.inputs.description.value);
    formData.append("cover", courseCover);
    formData.append("shortName", formState.inputs.shortName.value);
    formData.append("price", formState.inputs.price.value);
    formData.append("status", courseStatus);
    formData.append("categoryID", courseCategory);

    fetch(`http://localhost:4000/v1/courses`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorageData.token}`,
      },
      body: formData,
    }).then((res) => {
      console.log(res);
      if (res.ok) {
        Swal.fire({
          title: "دوره جدید با موفقیت اضافه شد",
          icon: "success",
          confirmButtonText: "Ok",
        }).then(() => {
          getAllCourses();
        });
      }
    });
  };

  return (
    <>
      <section className="flex-center overflow-hidden mt-12">
        <div className="mx-auto flex flex-col items-center w-min">
          <div className="flex flex-col items-center text-darkColor dark:text-white bg-light-blue-500/20 dark:bg-[#2f3749]/40 backdrop-blur-[4px] px-10 pb-10 pt-8 rounded-3xl z-10">
            <span className="block font-EstedadMedium text-4xl mb-14 mt-4">
              افزودن دوره جدید
            </span>
            <form
              action="#"
              className="w-full flex items-center flex-col gap-y-8"
            >
              <div className="flex items-center gap-x-6">
                <div className="h-20 flex items-center justify-between px-4 bg-white dark:bg-[#333c4c] rounded-2xl">
                  <Input
                    id="name"
                    className="bg-transparent outline-none"
                    type="text"
                    placeholder="نام دوره"
                    validations={[minValidator(5)]}
                    onInputHandler={onInputHandler}
                  />
                </div>
                <div className="min-h-20 flex items-center justify-between px-4 bg-white dark:bg-[#333c4c] rounded-2xl">
                  <Input
                    id="description"
                    element="textarea"
                    className="bg-transparent outline-none"
                    type="text"
                    placeholder="توضیحات دوره"
                    validations={[minValidator(5)]}
                    onInputHandler={onInputHandler}
                  />
                </div>
              </div>

              <div className="flex items-center gap-x-6">
                <div className="h-20 flex items-center justify-between px-4 bg-white dark:bg-[#333c4c] rounded-2xl">
                  <Input
                    id="shortName"
                    className="bg-transparent outline-none"
                    type="text"
                    placeholder="Url دوره"
                    validations={[minValidator(5)]}
                    onInputHandler={onInputHandler}
                  />
                </div>
                <div className="h-20 flex items-center justify-between px-4 bg-white dark:bg-[#333c4c] rounded-2xl">
                  <Input
                    id="price"
                    className="bg-transparent outline-none"
                    type="text"
                    placeholder="قیمت دوره"
                    validations={[minValidator(5)]}
                    onInputHandler={onInputHandler}
                  />
                </div>
              </div>

              <div className="flex items-center gap-x-6">
                <div className="h-20 flex items-center justify-between px-4 bg-white dark:bg-[#333c4c] rounded-2xl">
                  <Input
                    id="support"
                    className="bg-transparent outline-none"
                    type="text"
                    placeholder="نحوه پشتیبانی دوره"
                    validations={[minValidator(5)]}
                    onInputHandler={onInputHandler}
                  />
                </div>
                <div className="h-20 flex items-center justify-between px-4 bg-white dark:bg-[#333c4c] rounded-2xl">
                  <div className="flex items-center gap-x-2">
                    <label className="text-xl text-darkColor dark:text-white/70">
                      دسته‌بندی
                    </label>
                    <select
                      className="text-xl text-darkColor dark:text-white/70 dark:bg-white/10 rounded-md py-2.5 px-1"
                      onChange={selectCategory}
                    >
                      {categories.map((category) => (
                        <>
                          <option
                            className="text-darkColor text-[1.6rem]"
                            value={category._id}
                          >
                            {category.title}
                          </option>
                        </>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-x-6">
                <div className="h-20 flex items-center justify-between px-4 bg-white dark:bg-[#333c4c] rounded-2xl">
                  <div className="flex items-center gap-x-2 w-[19.1rem]">
                    <label className="text-darkColor dark:text-white/70">
                      عکس
                    </label>
                    <input
                      type="file"
                      id="file"
                      className="w-full bg-white/10 rounded-md p-1"
                      onChange={(event) => {
                        console.log(event.target.files[0]);
                        setCourseCover(event.target.files[0]);
                      }}
                    />
                  </div>
                </div>
                <div className="h-20 flex items-center justify-between px-4 bg-white dark:bg-[#333c4c] rounded-2xl">
                  <div className="flex items-center w-[19.1rem] text-darkColor dark:text-white/70">
                    <label className="text-3xl ml-10">وضعیت</label>
                    <div className="radios flex flex-col gap-y-1 items-center text-xl">
                      <div className="available">
                        <label>
                          <span>در حال برگزاری</span>
                          <input
                            type="radio"
                            value="start"
                            name="condition"
                            onChange={(event) =>
                              setCourseStatus(event.target.value)
                            }
                          />
                        </label>
                      </div>
                      <div className="unavailable">
                        <label>
                          <span>پیش فروش</span>
                          <input
                            type="radio"
                            value="presell"
                            name="condition"
                            onChange={(event) =>
                              setCourseStatus(event.target.value)
                            }
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Button
                className={`h-20 w-[50%] mt-4 rounded-4xl ${
                  formState.isFormValid
                    ? "bg-light-blue-600/40 hover:bg-light-blue-600/60"
                    : "bg-[#333c4c]/30"
                }`}
                type="submit"
                onClick={addNewCourse}
                disabled={!formState.isFormValid}
              >
                <span className="mx-auto">افزودن</span>
              </Button>
            </form>
          </div>
        </div>
      </section>

      <DataTable title="دوره ها">
        <Card className="h-full w-full rounded-md overflow-scroll px-6">
          <table className="w-full min-w-max table-auto text-center">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-b-4 border-gray-400 pb-10 pt-12"
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
              {courses.map((course, index) => {
                const isLast = index === courses.length - 1;
                const classes = isLast
                  ? "py-6"
                  : "py-6 border-b border-gray-400";

                return (
                  <tr key={course.name} className="hover:bg-gray-50">
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
                        className="text-darkBox text-[1.6rem] font-EstedadLight"
                      >
                        {course.name}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        className="text-darkBox text-[1.6rem] font-EstedadLight"
                      >
                        {course.price === 0
                          ? "رایگان"
                          : course.price.toLocaleString()}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        className="text-darkBox text-[1.6rem] font-EstedadLight"
                      >
                        {course.isComplete === 0
                          ? "در حال برگزاری"
                          : "تکمیل شده"}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        className="text-darkBox text-[1.6rem] font-EstedadLight"
                      >
                        {course.shortName}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        className="text-darkBox text-[1.6rem] font-EstedadLight"
                      >
                        {course.creator}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        className="text-darkBox text-[1.6rem] font-EstedadLight"
                      >
                        {course.categoryID.name}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        className="text-darkBox text-[1.6rem] font-EstedadLight"
                      >
                        <button type="button">ویرایش</button>
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        className="text-darkBox text-[1.6rem] font-EstedadLight"
                      >
                        <button
                          type="button"
                          onClick={() => removeCourse(course._id)}
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
