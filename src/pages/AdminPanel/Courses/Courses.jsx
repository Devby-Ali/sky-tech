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
import { HiMiniPlus, HiXMark } from "react-icons/hi2";
import Swal from "sweetalert2";

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [courseCategory, setCourseCategory] = useState("-1");
  const [categories, setCategories] = useState([]);
  const [courseStatus, setCourseStatus] = useState("start");
  const [courseCover, setCourseCover] = useState({});
  const [showAddCourse, setShowAddCourse] = useState(false);

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

  const addCourseHandler = () => {
    setShowAddCourse(!showAddCourse);
  };

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

    if (courseCategory === "-1") {
      Swal.fire({
        title: "لطفا دسته بندی دوره را انتخاب کنید",
        icon: "warning",
      });
    } else {
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
            setShowAddCourse(false);
          });
        }
      });
    }
  };

  return (
    <>
      {showAddCourse && (
        <section className="fixed left-0 right-0 md:right-[24rem] top-0 bottom-0 backdrop-blur-xs flex-center overflow-hidden z-50">
          <div className="mx-auto flex flex-col items-center w-min">
            <div className="flex flex-col items-center text-slate-900 dark:text-white bg-sky-950/20 dark:bg-slate-950/40 backdrop-blur-xs px-20 py-14 rounded-xl">
              <span className="flex items-center justify-between w-full font-EstedadMedium text-4xl mb-20">
                افزودن دوره جدید
                <span
                  onClick={addCourseHandler}
                  className="rounded-full border border-slate-900 dark:border-white p-0.5 text-4xl cursor-pointer"
                >
                  <HiXMark />
                </span>
              </span>
              <form
                action="#"
                className="w-full flex items-center flex-col gap-6 md:gap-8"
              >
                <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                  <div className="h-20 flex items-center justify-between px-8 bg-white dark:bg-[#333c4c] rounded-lg">
                    <Input
                      id="name"
                      className="bg-transparent outline-hidden"
                      type="text"
                      placeholder="نام"
                      validations={[minValidator(5)]}
                      onInputHandler={onInputHandler}
                    />
                  </div>
                  <div className="min-h-20 flex items-center justify-between px-8 bg-white dark:bg-[#333c4c] rounded-lg">
                    <Input
                      id="description"
                      element="textarea"
                      className="bg-transparent outline-hidden"
                      type="text"
                      placeholder="توضیحات"
                      validations={[minValidator(5)]}
                      onInputHandler={onInputHandler}
                    />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                  <div className="h-20 flex items-center justify-between px-8 bg-white dark:bg-[#333c4c] rounded-lg">
                    <Input
                      id="shortName"
                      className="bg-transparent outline-hidden"
                      type="text"
                      placeholder="Url"
                      validations={[minValidator(5)]}
                      onInputHandler={onInputHandler}
                    />
                  </div>
                  <div className="h-20 flex items-center justify-between px-8 bg-white dark:bg-[#333c4c] rounded-lg">
                    <Input
                      id="price"
                      className="bg-transparent outline-hidden"
                      type="text"
                      placeholder="قیمت"
                      validations={[minValidator(1)]}
                      onInputHandler={onInputHandler}
                    />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                  <div className="h-20 flex items-center justify-between px-8 bg-white dark:bg-[#333c4c] rounded-lg">
                    <Input
                      id="support"
                      className="bg-transparent outline-hidden"
                      type="text"
                      placeholder="نحوه پشتیبانی"
                      validations={[minValidator(5)]}
                      onInputHandler={onInputHandler}
                    />
                  </div>
                  <div className="h-20 flex items-center justify-between px-8 bg-white dark:bg-[#333c4c] rounded-lg">
                    <div className="flex items-center gap-x-2">
                      <label className="text-xl text-slate-900 dark:text-white/70">
                        دسته‌بندی
                      </label>
                      <select
                        className="text-xl text-slate-900 dark:text-white/70 dark:bg-white/10 rounded-md py-2.5 px-1"
                        onChange={selectCategory}
                      >
                        <option value={"-1"}>را انتخاب نمایید</option>
                        {categories.map((category) => (
                          <>
                            <option
                              className="text-slate-900 text-[1.6rem]"
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

                <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                  <div className="h-20 flex items-center justify-between px-8 bg-white dark:bg-[#333c4c] rounded-lg">
                    <div className="flex items-center gap-x-2 w-[19.1rem]">
                      <label className="text-slate-900 dark:text-white/70">
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
                  <div className="h-20 flex items-center justify-between px-8 bg-white dark:bg-[#333c4c] rounded-lg">
                    <div className="flex items-center w-[19.1rem] text-slate-900 dark:text-white/70">
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
                  className={`h-20 w-full mt-4 rounded-lg ${
                    formState.isFormValid
                      ? "bg-sky-600/40 hover:bg-sky-600/60"
                      : "bg-[#333c4c]/30"
                  }`}
                  type="submit"
                  onClick={addNewCourse}
                  disabled={!formState.isFormValid}
                >
                  <span className="mx-auto font-EstedadMedium">افزودن</span>
                </Button>
              </form>
            </div>
          </div>
        </section>
      )}

      <DataTable
        title="دوره ها"
        eventHandler={addCourseHandler}
        btnTitle={"دوره جدید"}
        icon={<HiMiniPlus />}
      >
        <div className="pb-2 md:pb-4 md:pr-5 overflow-x-auto">
          <div className="min-w-[840px] md:min-w-[900px] grid grid-cols-12 text-xl md:text-2xl font-EstedadMedium items-center text-center bg-white dark:bg-slate-800 h-16 md:h-20 px-3 mb-6 rounded-lg">
            <div className="col-span-1 text-nowrap">شناسه</div>
            <div className="col-span-2">عنوان</div>
            <div className="col-span-1">مبلغ</div>
            <div className="col-span-2">وضعیت</div>
            <div className="col-span-2">لینک</div>
            <div className="col-span-1">مدرس</div>
            <div className="col-span-1">دسته بندی</div>
            <div className="col-span-1">ویرایش</div>
            <div className="col-span-1">حذف</div>
          </div>

          <div
            className="min-w-[840px] md:min-w-[900px] space-y-6"
            id="container_orders"
          >
            {courses.map((course, index) => (
              <>
                <div
                  key={course.name}
                  className="grid grid-cols-12 items-center text-xl md:text-2xl text-center bg-white dark:bg-slate-800 h-16 md:h-20 rounded-lg divide-x divide-x-reverse divide-sky-400/80 dark:divide-[#333c4c] *:px-3"
                >
                  <div className="col-span-1">{index + 1}</div>

                  <div className="col-span-2">{course.name}</div>

                  <div className="col-span-1">
                    {course.price === 0
                      ? "رایگان"
                      : course.price.toLocaleString()}
                  </div>

                  <div className="col-span-2">
                    {course.isComplete === 0 ? "در حال برگزاری" : "تکمیل شده"}
                  </div>

                  <div className="col-span-2">{course.shortName}</div>

                  <div className="col-span-1 text-nowrap text-xl">
                    {" "}
                    {course.creator}
                  </div>

                  <div className="col-span-1"> {course.categoryID.name}</div>

                  <div className="col-span-1 flex-center">
                    <div className="inline-flex items-center justify-center bg-amber-100/80 dark:bg-amber-500/10 text-amber-900 dark:text-amber-300 font-EstedadMedium text-xl md:text-2xl py-2 px-5 xl:px-6 rounded-sm select-none">
                      ویرایش
                    </div>
                  </div>
                  <div className="col-span-1">
                    <div
                      onClick={() => removeCourse(course._id)}
                      className="inline-flex items-center justify-center bg-red-100 dark:bg-red-500/10 text-red-500 dark:text-red-200 font-EstedadMedium text-xl md:text-2xl py-2 px-5 xl:px-6 rounded-sm select-none cursor-pointer"
                    >
                      حذف
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </DataTable>
    </>
  );
}
