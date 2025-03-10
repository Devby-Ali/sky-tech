import React, { useEffect, useState } from "react";
import { useForm } from "../../../hooks/useForm";
import Input from "../../../Components/Form/Input";
import { minValidator } from "../../../validators/rules";
import Button from "../../../Components/Form/Button";
import DataTable from "../../../Components/AdminPanel/DataTable/DataTable";
import { HiMiniPlus, HiOutlineCheckCircle, HiXMark } from "react-icons/hi2";
import Swal from "sweetalert2";

export default function Menus() {
  const [menus, setMenus] = useState([]);
  const [menuParent, setMenuParent] = useState("-1");
  const [showAddMenu, setShowAddMenu] = useState(false);

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

  const addMenuHandler = () => {
    setShowAddMenu(!showAddMenu);
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
        }).then(() => {
          getAllMenus();
          setShowAddMenu(false);
        });
      }
    });
  };

  return (
    <>
      {showAddMenu && (
        <section className="fixed left-0 right-0 md:right-[24rem] top-0 bottom-0 backdrop-blur-xs flex-center overflow-hidden z-50">
          <div className="mx-auto flex flex-col items-center w-min">
            <div className="flex flex-col items-center text-slate-900 dark:text-white bg-sky-950/20 dark:bg-slate-950/40 backdrop-blur-xs px-20 py-14 rounded-xl">
              <span className="flex items-center justify-between w-full font-EstedadMedium text-4xl mb-20">
                افزودن منو جدید
                <span
                  onClick={addMenuHandler}
                  className="rounded-full border border-slate-900 dark:border-white p-0.5 text-4xl cursor-pointer"
                >
                  <HiXMark />
                </span>
              </span>
              <form action="#" className="w-full flex flex-col gap-y-8">
                <div className="h-20 flex items-center justify-between px-8 bg-white dark:bg-[#333c4c] rounded-lg">
                  <Input
                    id="title"
                    className="bg-transparent outline-hidden"
                    type="text"
                    placeholder="عنوان"
                    validations={[minValidator(3)]}
                    onInputHandler={onInputHandler}
                  />
                </div>
                <div className="h-20 flex items-center justify-between px-8 bg-white dark:bg-[#333c4c] rounded-lg">
                  <Input
                    id="href"
                    className="bg-transparent outline-hidden"
                    type="text"
                    placeholder="آدرس"
                    validations={[minValidator(5)]}
                    onInputHandler={onInputHandler}
                  />
                </div>
                <div className="h-20 flex items-center justify-between px-8 bg-white dark:bg-[#333c4c] rounded-lg">
                  <div className="flex items-center gap-x-2">
                    <label className="text-slate-900 dark:text-white/70">
                      منو
                    </label>
                    <select
                      className="text-slate-900 dark:text-white/70 dark:bg-white/10 rounded-md py-2.5 px-1"
                      onChange={(event) => setMenuParent(event.target.value)}
                    >
                      <option value="-1">مدنظر را انتخاب کنید</option>
                      <option
                        className="text-slate-900 text-[1.8rem]"
                        value="-1"
                      >
                        منو اصلی
                      </option>
                      {menus.map((menu) => (
                        <>
                          {!Boolean(menu.parent) && (
                            <option
                              className="text-slate-900 text-[1.8rem]"
                              value={menu._id}
                              key={menu._id}
                            >
                              {menu.title}
                            </option>
                          )}
                        </>
                      ))}
                    </select>
                  </div>
                </div>

                <Button
                  className={`h-20 rounded-lg ${
                    formState.isFormValid
                      ? "bg-sky-600/40 hover:bg-sky-600/60"
                      : "bg-[#333c4c]/30"
                  }`}
                  type="submit"
                  onClick={createMenu}
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
        title="منو ها"
        eventHandler={addMenuHandler}
        btnTitle={"ایجاد منو"}
        icon={<HiMiniPlus />}
      >
        <div className="pb-2 md:pb-4 md:pr-5 overflow-x-auto">
          <div className="min-w-[840px] md:min-w-[900px] grid grid-cols-12 text-xl md:text-2xl font-EstedadMedium items-center text-center bg-white dark:bg-slate-800 h-16 md:h-20 px-3 mb-6 rounded-lg">
            <div className="col-span-1 text-nowrap">شناسه</div>
            <div className="col-span-4">عنوان</div>
            <div className="col-span-3">آدرس</div>
            <div className="col-span-2">دسته بندی ...</div>
            <div className="col-span-1">ویرایش</div>
            <div className="col-span-1">حذف</div>
          </div>

          <div
            className="min-w-[840px] md:min-w-[900px] space-y-6"
            id="container_orders"
          >
            {menus.map((menu, index) => (
              <>
                <div
                  key={menu.name}
                  className="grid grid-cols-12 items-center text-xl md:text-2xl text-center bg-white dark:bg-slate-800 h-16 md:h-20 rounded-lg divide-x divide-x-reverse divide-sky-400/80 dark:divide-[#333c4c] *:px-3"
                >
                  <div className="col-span-1">{index + 1}</div>

                  <div className="col-span-4">{menu.title}</div>

                  <div className="col-span-3">{menu.href}</div>

                  <div className="col-span-2">
                    {menu.parent ? (
                      menu.parent.title
                    ) : (
                      <div className="flex-center text-sky-600 dark:text-sky-100/90 text-6xl">
                        <HiOutlineCheckCircle />
                      </div>
                    )}
                  </div>

                  <div className="col-span-1">
                    <div className="inline-flex items-center justify-center bg-amber-100/60 dark:bg-amber-500/10 text-amber-900 dark:text-amber-300 font-EstedadMedium text-xl md:text-2xl py-2 px-5 md:px-8 rounded-sm select-none">
                      ویرایش
                    </div>
                  </div>
                  <div className="col-span-1">
                    <div
                      onClick={() => removeMenu(menu._id)}
                      className="inline-flex items-center justify-center bg-red-100 dark:bg-red-500/10 text-red-500 dark:text-red-100 font-EstedadMedium text-xl md:text-2xl py-2 px-5 md:px-8 rounded-sm select-none cursor-pointer"
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
