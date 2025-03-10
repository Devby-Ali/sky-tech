import React, { useEffect, useState } from "react";
import DataTable from "../../../Components/AdminPanel/DataTable/DataTable";
import Swal from "sweetalert2";
import Input from "../../../Components/Form/Input";
import Button from "../../../Components/Form/Button";
import { useForm } from "../../../hooks/useForm";
import {
  requiredValidator,
  maxValidator,
  minValidator,
  emailValidator,
  mobileNumberValidator,
} from "../../../validators/rules";
import {
  HiMiniPlus,
  HiOutlinePhone,
  HiOutlineUser,
  HiXMark,
} from "react-icons/hi2";
import { FiMail } from "react-icons/fi";
import { BiLockOpenAlt } from "react-icons/bi";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [showAddUser, setShowAddUser] = useState(false);

  const [formState, onInputHandler] = useForm(
    {
      name: {
        value: "",
        isValid: false,
      },
      username: {
        value: "",
        isValid: false,
      },
      email: {
        value: "",
        isValid: false,
      },
      mobileNumber: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  useEffect(() => {
    getAllUsers();
  }, []);

  function getAllUsers() {
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
  }

  const removeUser = (userID) => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    Swal.fire({
      title: "آیا از حذف مطمعنی؟",
      icon: "warning",
      showDenyButton: true,
      confirmButtonText: "آره",
      denyButtonText: "نه",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:4000/v1/users/${userID}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorageData.token}`,
          },
        }).then((res) => {
          if (res.ok) {
            Swal.fire({
              title: "کاربر با موفقیت حذف شد",
              icon: "success",
              confirmButtonText: "اوکی",
            }).then(() => {
              getAllUsers();
            });
          }
        });
      }
    });
  };

  const banUser = (userID) => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    Swal.fire({
      title: "آیا از بن مطمعنی؟",
      icon: "warning",
      showDenyButton: true,
      confirmButtonText: "آره",
      denyButtonText: "نه",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:4000/v1/users/ban/${userID}`, {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${localStorageData.token}`,
          },
        }).then((res) => {
          if (res.ok) {
            Swal.fire({
              title: "کاربر با موفقیت بن شد",
              icon: "success",
              confirmButtonText: "اوکی",
            });
          }
        });
      }
    });
  };

  const showAddUserHandler = () => {
    setShowAddUser(!showAddUser);
  };

  const registerUser = (event) => {
    event.preventDefault();
    const newUserInfo = {
      name: formState.inputs.name.value,
      username: formState.inputs.username.value,
      email: formState.inputs.email.value,
      phone: formState.inputs.mobileNumber.value,
      password: formState.inputs.password.value,
      confirmPassword: formState.inputs.password.value,
    };

    fetch(`http://localhost:4000/v1/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUserInfo),
    })
      .then((res) => {
        console.log(res);
        res.json();
      })
      .then(() => {
        Swal.fire({
          title: "کاربر مورد نظر با موفقیت ثبت نام شد",
          icon: "success",
          confirmButtonText: "Ok",
        });
        getAllUsers();
        setShowAddUser(false);
      });
  };

  const changeRole = (userID) => {
    Swal.fire({
      title: "ADMIN or USER",
      input: "text",
      confirmButtonText: "تغییر‌سطح",
      showDenyButton: true,
      denyButtonText: "بیخیال",
    }).then((result) => {
      if (result.isConfirmed) {
        const reqBodyInfos = {
          role: result.value,
          id: userID,
        };

        fetch(`http://localhost:4000/v1/users/role`, {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${
              JSON.parse(localStorage.getItem("user")).token
            }`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(reqBodyInfos),
        }).then((res) => {
          if (res.ok) {
            Swal.fire({
              title: "کاربر مورد نظر تغییر یافت",
              icon: "success",
              confirmButtonText: "Ok",
            });
            getAllUsers();
          }
        });
      }
    });
  };

  return (
    <>
      {showAddUser && (
        <section className="fixed left-0 right-0 md:right-[24rem] top-0 bottom-0 backdrop-blur-xs flex-center overflow-hidden z-50">
          <div className="mx-auto flex flex-col items-center w-min">
            <div className="flex flex-col items-center text-slate-900 dark:text-white bg-sky-950/20 dark:bg-slate-950/40 backdrop-blur-xs px-20 py-14 rounded-xl">
              <span className="flex items-center justify-between w-full font-EstedadMedium text-4xl mb-20">
                ثبت کاربر جدید
                <span
                  onClick={showAddUserHandler}
                  className="rounded-full border border-slate-900 dark:border-white p-0.5 text-4xl cursor-pointer"
                >
                  <HiXMark />
                </span>
              </span>
              <form action="#" className="w-full flex flex-col gap-y-8">
                <div className="h-20 flex items-center justify-between px-8 bg-white dark:bg-[#333c4c] rounded-lg">
                  <Input
                    id="name"
                    className="bg-transparent outline-hidden"
                    type="text"
                    placeholder="نام و نام خانوادگی"
                    validations={[
                      requiredValidator(),
                      minValidator(3),
                      maxValidator(20),
                    ]}
                    onInputHandler={onInputHandler}
                  />
                  <HiOutlineUser className="w-10 h-10 opacity-50" />
                </div>
                <div className="h-20 flex items-center justify-between px-8 bg-white dark:bg-[#333c4c] rounded-lg">
                  <Input
                    id="username"
                    className="bg-transparent outline-hidden"
                    type="text"
                    placeholder="نام کاربری"
                    validations={[
                      requiredValidator(),
                      minValidator(8),
                      maxValidator(20),
                    ]}
                    onInputHandler={onInputHandler}
                  />
                  <span className="text-[2rem] opacity-50">@</span>
                </div>
                <div className="h-20 flex items-center justify-between px-8 bg-white dark:bg-[#333c4c] rounded-lg">
                  <Input
                    id="email"
                    className="bg-transparent outline-hidden"
                    type="email"
                    placeholder="آدرس ایمیل"
                    validations={[
                      requiredValidator(),
                      maxValidator(25),
                      emailValidator(),
                    ]}
                    onInputHandler={onInputHandler}
                  />
                  <FiMail className="w-9 h-9 opacity-50" />
                </div>
                <div className="h-20 flex items-center justify-between px-8 bg-white dark:bg-[#333c4c] rounded-lg">
                  <Input
                    id="mobileNumber"
                    className="bg-transparent outline-hidden text-right"
                    type="tel"
                    placeholder="شماره موبایل"
                    validations={[requiredValidator(), mobileNumberValidator()]}
                    onInputHandler={onInputHandler}
                  />
                  <HiOutlinePhone className="w-10 h-10 opacity-50" />
                </div>
                <div className="h-20 flex items-center justify-between px-8 bg-white dark:bg-[#333c4c] rounded-lg">
                  <Input
                    id="password"
                    className="bg-transparent outline-hidden"
                    type="text"
                    placeholder="رمز عبور"
                    validations={[
                      requiredValidator(),
                      minValidator(8),
                      maxValidator(18),
                    ]}
                    onInputHandler={onInputHandler}
                  />
                  <BiLockOpenAlt className="w-10 h-10 opacity-50" />
                </div>
                <Button
                  className={`h-20 rounded-lg ${
                    formState.isFormValid
                      ? "bg-sky-600/40 hover:bg-sky-600/60"
                      : "bg-[#333c4c]/30"
                  }`}
                  type="submit"
                  onClick={registerUser}
                  disabled={!formState.isFormValid}
                >
                  <span className="mx-auto font-EstedadMedium">ادامه</span>
                </Button>
              </form>
            </div>
          </div>
        </section>
      )}

      <DataTable
        title="کاربران"
        eventHandler={showAddUserHandler}
        btnTitle={"ثبت نام"}
        icon={<HiMiniPlus />}
      >
        <div className="pb-2 md:pb-4 md:pr-5 overflow-x-auto">
          <div className="min-w-[840px] md:min-w-[900px] grid grid-cols-12 text-xl md:text-2xl font-EstedadMedium items-center text-center bg-white dark:bg-slate-800 h-16 md:h-20 px-3 mb-6 rounded-xl">
            <div className="col-span-1 text-nowrap">شناسه</div>
            <div className="col-span-2">نام و نام خانوادگی</div>
            <div className="col-span-2">ایمیل</div>
            <div className="col-span-1">نام کاربری</div>
            <div className="col-span-2">همراه</div>
            <div className="col-span-1">عنوان</div>
            <div className="col-span-1">تغییر‌سطح</div>
            <div className="col-span-1">بن</div>
            <div className="col-span-1">حذف</div>
          </div>

          <div
            className="min-w-[840px] md:min-w-[900px] space-y-6"
            id="container_orders"
          >
            {users.map((user, index) => (
              <>
                <div
                  key={user.name}
                  className="grid grid-cols-12 items-center text-xl md:text-2xl text-center bg-white dark:bg-slate-800 h-16 md:h-20 rounded-xl divide-x divide-x-reverse divide-sky-400/80 dark:divide-[#333c4c] *:px-3"
                >
                  <div className="col-span-1">{index + 1}</div>

                  <div className="col-span-2">{user.name}</div>

                  <div className="col-span-2">{user.email}</div>

                  <div className="col-span-1">{user.username}</div>

                  <div className="col-span-2">{user.phone}</div>

                  <div className="col-span-1">
                    {user.role === "ADMIN" ? "مدیر" : "کاربر"}
                  </div>

                  <div className="col-span-1 flex-center">
                    <div
                      onClick={() => changeRole(user._id)}
                      className="inline-flex items-center justify-center bg-amber-100/60 dark:bg-amber-500/10 text-amber-900 dark:text-amber-300 font-EstedadMedium text-xl md:text-2xl py-2 px-3.5 xl:px-6 rounded-sm select-none cursor-pointer"
                    >
                      تغییر‌سطح
                    </div>
                  </div>
                  <div className="col-span-1">
                    <div
                      onClick={() => banUser(user._id)}
                      className="inline-flex items-center justify-center bg-red-100 dark:bg-red-500/10 text-red-500 dark:text-red-100 font-EstedadMedium text-xl md:text-2xl py-2 px-5 xl:px-6 rounded-sm select-none cursor-pointer"
                    >
                      بن
                    </div>
                  </div>
                  <div className="col-span-1">
                    <div
                      onClick={() => removeUser(user._id)}
                      className="inline-flex items-center justify-center bg-red-100 dark:bg-red-500/10 text-red-500 dark:text-red-100 font-EstedadMedium text-xl md:text-2xl py-2 px-5 xl:px-6 rounded-sm select-none cursor-pointer"
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
