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
import Swal from "sweetalert2";
import { HiPlus, HiXMark } from "react-icons/hi2";

export default function Category() {
  const [showCreateCategory, setShowCreateCategory] = useState(false);
  const [formState, onInputHandler] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      shortname: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getAllCategories();
  }, []);

  function getAllCategories() {
    fetch(`http://localhost:4000/v1/category`)
      .then((res) => res.json())
      .then((allCategories) => {
        console.log(allCategories);
        setCategories(allCategories);
      });
  }

  const showCreateCategoryHandler = () => {
    setShowCreateCategory(!showCreateCategory);
  };

  const createNewCategory = (event) => {
    event.preventDefault();
    const localStorageData = JSON.parse(localStorage.getItem("user"));

    const newCategoryInfo = {
      title: formState.inputs.title.value,
      name: formState.inputs.shortname.value,
    };

    fetch("http://localhost:4000/v1/category", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorageData.token}`,
      },
      body: JSON.stringify(newCategoryInfo),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        Swal.fire({
          title: "دسته بندی مورد نظر با موفقیت اضافه شد",
          icon: "success",
          confirmButtonText: "Ok",
        }).then(() => {
          getAllCategories();
          setShowCreateCategory(false);
        });
      });
  };

  const removeCategory = (categoryID) => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    Swal.fire({
      title: "از حذف دسته بندی مطمعنی؟",
      icon: "warning",
      showDenyButton: true,
      confirmButtonText: "آره",
      denyButtonText: "نه",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:4000/v1/category/${categoryID}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorageData.token}`,
          },
        })
          .then((res) => res.json())
          .then(() => {
            Swal.fire({
              title: "دسته بندی مورد نظر با موفقیت حذف شد",
              icon: "success",
              confirmButtonText: "Ok",
            }).then(() => {
              getAllCategories();
            });
          });
      }
    });
  };

  const updateCategory = (categoryID) => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    Swal.fire({
      title: "عنوان جدید دسته بندی را وارد نمایید",
      input: "text",
      confirmButtonText: "ثبت عنوان جدید",
      inputValue: "دسته بندیییی",
      showCancelButton: true,
    }).then((result) => {
      if (result.value.trim().length) {
        console.log(result);
        fetch(`http://localhost:4000/v1/category/${categoryID}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorageData.token}`,
          },
          body: JSON.stringify({
            title: result.value,
            name: "static value",
          }),
        })
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
            Swal.fire({
              title: "دسته بندی مورد نظر با موفقیت ویرایش شد",
              icon: "success",
              confirmButtonText: "Ok",
            }).then(() => {
              getAllCategories();
            });
          });
      }
    });
  };

  return (
    <>
      {showCreateCategory && (
        <section className="fixed left-0 right-0 md:right-[24rem] top-0 bottom-0 backdrop-blur-xs flex-center overflow-hidden z-50">
          <div className="mx-auto flex flex-col items-center w-min">
            <div className="flex flex-col items-center text-slate-900 dark:text-white bg-sky-950/20 dark:bg-slate-950/40 backdrop-blur-xs px-20 py-14 rounded-xl">
              <span className="flex items-center justify-between w-full font-EstedadMedium text-4xl mb-20">
                افزودن دسته بندی جدید
                <span
                  onClick={showCreateCategoryHandler}
                  className="rounded-full border border-slate-900 dark:border-white p-0.5 text-4xl cursor-pointer"
                >
                  <HiXMark />
                </span>
              </span>
              <form
                action="#"
                className="w-full flex items-center flex-col gap-y-8"
              >
                <div className="flex items-center gap-x-8">
                  <div className="h-20 flex items-center justify-between px-8 bg-white dark:bg-[#333c4c] rounded-lg">
                    <Input
                      id="title"
                      className="bg-transparent outline-hidden"
                      type="text"
                      placeholder="عنوان"
                      validations={[
                        requiredValidator(),
                        minValidator(3),
                        maxValidator(20),
                      ]}
                      onInputHandler={onInputHandler}
                    />
                  </div>
                  <div className="h-20 flex items-center justify-between px-8 bg-white dark:bg-[#333c4c] rounded-lg">
                    <Input
                      id="shortname"
                      className="bg-transparent outline-hidden"
                      type="text"
                      placeholder="نام کوتاه"
                      validations={[
                        requiredValidator(),
                        minValidator(3),
                        maxValidator(12),
                      ]}
                      onInputHandler={onInputHandler}
                    />
                  </div>
                </div>

                <Button
                  className={`h-20 w-[80%] rounded-lg ${
                    formState.isFormValid
                      ? "bg-sky-600/40 hover:bg-sky-600/60"
                      : "bg-[#333c4c]/30"
                  }`}
                  type="submit"
                  onClick={createNewCategory}
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
        title="دسته‌بندی‌ها"
        btnTitle={"ایجاد دسته بندی"}
        icon={<HiPlus />}
        eventHandler={showCreateCategoryHandler}
      >
        <div className="pb-2 md:pb-4 md:pr-5 overflow-x-auto">
          <div className="min-w-[840px] md:min-w-[900px] grid grid-cols-12 text-xl md:text-2xl font-EstedadMedium items-center text-center bg-white dark:bg-slate-800 h-16 md:h-20 px-3 mb-6 rounded-xl">
            <div className="col-span-1 text-nowrap">شناسه</div>
            <div className="col-span-4">عنوان</div>
            <div className="col-span-3">نام کوتاه</div>
            <div className="col-span-2">تغییر عنوان</div>
            <div className="col-span-2">حذف</div>
          </div>

          <div
            className="min-w-[840px] md:min-w-[900px] space-y-6"
            id="container_orders"
          >
            {categories.map((category, index) => (
              <>
                <div
                  key={category.name}
                  className="grid grid-cols-12 items-center text-xl md:text-2xl text-center bg-white dark:bg-slate-800 h-16 md:h-20 rounded-xl divide-x divide-x-reverse divide-sky-400/80 dark:divide-[#333c4c] *:px-3"
                >
                  <div className="col-span-1">{index + 1}</div>
                  <div className="col-span-4">{category.title}</div>

                  <div className="col-span-3">{category.name}</div>

                  <div className="col-span-2">
                    <div
                      onClick={() => updateCategory(category._id)}
                      className="inline-flex items-center justify-center bg-amber-100/60 dark:bg-amber-500/10 text-amber-900 dark:text-amber-300 font-EstedadMedium text-xl md:text-2xl py-2 px-5 xl:px-6 rounded-sm select-none cursor-pointer"
                    >
                      ویرایش
                    </div>
                  </div>
                  <div className="col-span-2">
                    <div
                      onClick={() => removeCategory(category._id)}
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
