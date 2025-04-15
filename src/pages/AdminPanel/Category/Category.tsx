import React, { useEffect, useState } from "react";
import DataTable from "../../../Components/AdminPanel/DataTable/DataTable";
import Input from "../../../Components/Form/Input";
import Button from "../../../Components/Form/Button";
import {
  requiredValidator,
  minValidator,
  maxValidator,
} from "../../../validators/rules";
import { useForm } from "../../../hooks/useForm";
import Swal from "sweetalert2";
import { HiPlus, HiXMark } from "react-icons/hi2";
import { FormState } from "hooks/useForm.types";
import CategoryType from "types/Category.types";
import {
  getAllCategories,
  removeCategory,
  updateCategory,
} from "../../../Services/Axios/Requests/Category";
import { createNewCategory } from "../../../Services/Axios/Requests/Category";

const Category = (): React.JSX.Element => {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [showCreateCategory, setShowCreateCategory] = useState<boolean>(false);
  const [formState, onInputHandler] = useForm<FormState>(
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

  useEffect(() => {
    getCategoriesHandler();
  }, []);

  const getCategoriesHandler = async (): Promise<void> => {
    try {
      const res = await getAllCategories();
      setCategories(res);
    } catch (error) {
      console.error("Error fetching Catrgory:", error);
    }
  };

  const showCreateCategoryHandler = () => {
    setShowCreateCategory(!showCreateCategory);
  };

  const createNewCategoryHandler = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();

    const newCategoryInfo = {
      title: formState.inputs.title.value,
      name: formState.inputs.shortname.value,
    };

    try {
      const res = await createNewCategory(newCategoryInfo);
      if (res.statusText === "Created") {
        Swal.fire({
          title: "دسته بندی مورد نظر با موفقیت اضافه شد",
          icon: "success",
          confirmButtonText: "Ok",
        }).then(() => {
          getCategoriesHandler();
          setShowCreateCategory(false);
        });
      }
    } catch (error) {
      console.error("Error Creating Category:", error);
    }
  };

  const removeCategoryHandler = (categoryID: string): void => {
    const localStorageData: { token: string } = JSON.parse(
      localStorage.getItem("user")!
    );
    Swal.fire({
      title: "از حذف دسته بندی مطمعنی؟",
      icon: "warning",
      showDenyButton: true,
      confirmButtonText: "آره",
      denyButtonText: "نه",
    }).then(async (result: { isConfirmed: boolean }) => {
      if (result.isConfirmed) {
        try {
          const res = await removeCategory(categoryID);
          if (res.statusText === "OK") {
            Swal.fire({
              title: "دسته بندی مورد نظر با موفقیت حذف شد",
              icon: "success",
              confirmButtonText: "Ok",
            }).then(() => {
              getCategoriesHandler();
            });
          }
        } catch (error) {
          console.error("Error remove Category:", error);
        }
      }
    });
  };

  const updateCategoryHandler = async (categoryID: string) => {
    Swal.fire({
      title: "عنوان و نام کوتاه جدید دسته بندی را وارد نمایید",
      html: `
        <input id="swal-input-title" class="swal2-input" placeholder="عنوان جدید">
        <input id="swal-input-name" class="swal2-input" placeholder="نام کوتاه جدید">
      `,
      confirmButtonText: "ثبت تغییرات",
      showCancelButton: true,
      preConfirm: () => {
        const title = (
          document.getElementById("swal-input-title") as HTMLInputElement
        ).value.trim();
        const name = (
          document.getElementById("swal-input-name") as HTMLInputElement
        ).value.trim();

        if (!title || !name) {
          Swal.showValidationMessage("هر دو فیلد باید پر شوند");
          return null;
        }

        return { title, name };
      },
    }).then(async (result) => {
      if (result.isConfirmed && result.value) {
        const { title, name } = result.value;
        try {
          const res = await updateCategory(categoryID, { title, name });
          if (res.statusText === "OK") {
            Swal.fire({
              title: "دسته بندی مورد نظر با موفقیت ویرایش شد",
              icon: "success",
              confirmButtonText: "Ok",
            }).then(() => {
              getCategoriesHandler();
            });
          }
        } catch (error) {
          console.error("Error Update Category", error);
        }
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
                  onClick={createNewCategoryHandler}
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
            <div className="col-span-5">عنوان</div>
            <div className="col-span-4">نام کوتاه</div>
            <div className="col-span-1">تغییر عنوان</div>
            <div className="col-span-1">حذف</div>
          </div>

          <div
            className="min-w-[840px] md:min-w-[900px] space-y-6"
            id="container_orders"
          >
            {categories.length &&
              categories.map((category, index) => (
                <div
                  key={category._id}
                  className="grid grid-cols-12 items-center text-xl md:text-2xl text-center bg-white dark:bg-slate-800 h-16 md:h-20 rounded-xl divide-x divide-x-reverse divide-sky-400/80 dark:divide-[#333c4c] *:px-3"
                >
                  <div className="col-span-1">{index + 1}</div>
                  <div className="col-span-5">{category.title}</div>
                  <div className="col-span-4">{category.name}</div>
                  <div className="col-span-1">
                    <div
                      onClick={() => updateCategoryHandler(category._id)}
                      className="inline-flex items-center justify-center bg-sky-100/80 dark:bg-white/10 text-sky-800 dark:text-white/70 font-EstedadMedium text-xl md:text-2xl py-2 px-5 xl:px-6 rounded-sm select-none cursor-pointer"
                    >
                      ویرایش
                    </div>
                  </div>
                  <div className="col-span-1">
                    <div
                      onClick={() => removeCategoryHandler(category._id)}
                      className="inline-flex items-center justify-center bg-red-100 dark:bg-red-500/10 text-red-500 dark:text-red-200 font-EstedadMedium text-xl md:text-2xl py-2 px-5 xl:px-6 rounded-sm select-none cursor-pointer"
                    >
                      حذف
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </DataTable>
    </>
  );
};

export default Category;
