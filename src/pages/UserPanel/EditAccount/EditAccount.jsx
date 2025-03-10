import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../../context/authContext";
import {
  HiOutlineArrowUpTray,
  HiOutlineDeviceTablet,
  HiOutlineEnvelope,
  HiOutlineLockClosed,
  HiOutlineUser,
  HiOutlineUserCircle,
} from "react-icons/hi2";
import Swal from "sweetalert2";

export default function EditAccount() {
  const authContext = useContext(AuthContext);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setName(authContext.userInfos.name);
    setPhone(authContext.userInfos.phone);
    setUsername(authContext.userInfos.username);
    setUsername(authContext.userInfos.username);
    setEmail(authContext.userInfos.email);
    console.log(authContext);
  }, [authContext]);

  const editAccount = (event) => {
    event.preventDefault();

    const userNewInfos = {
      name,
      username,
      email,
      password,
      phone,
    };

    fetch(`http://localhost:4000/v1/users/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("user")).token
        }`,
      },
      body: JSON.stringify(userNewInfos),
    }).then((res) => {
      if (res.ok) {
        Swal.fire({
          title: "اطلاعات اکانت شما ویرایش شد",
          icon: "success",
          confirmButtonText: "باشه",
        });
      }
    });
  };

  return (
    <main className="pb-5 md:pb-8 mx-auto mt-10 md:mt-14 2xl:px-24">
      <form id="edit-account-info" className="block mt-6 md:mt-10">
        <div className="flex items-center justify-between bg-white dark:bg-slate-800 h-20 md:h-28 pl-3.5 rounded-md mb-8">
          <div className="flex items-center gap-x-3 md:gap-x-6 h-full">
            <span className="w-1 md:w-1.5 h-full bg-sky-600 rounded-r-full shadowLightBlue"></span>
            <span className="text-sky-500 text-[1.7rem] md:text-3xl font-EstedadMedium md:font-EstedadBold select-none pr-4">
              جزئیات حساب کاربری
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 md:gap-y-5 md:pr-5">
          <div>
            <label className="inline-block font-EstedadMedium text-slate-900 dark:text-white text-2xl mb-4">
              نام و نام خانوادگی
            </label>
            <div className="flex items-center bg-white dark:bg-slate-800 p-5 rounded-md">
              <input
                type="text"
                className="w-full placeholder:text-slate-900/70 dark:placeholder:text-white/60 text-slate-900 dark:text-white bg-transparent outline-hidden text-2xl"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
              <div className="my-auto text-5xl text-slate-900/60 dark:text-white/60">
                <HiOutlineUserCircle />
              </div>
            </div>
          </div>

          <div>
            <label className="inline-block font-EstedadMedium text-slate-900 dark:text-white text-2xl mb-4">
              نام کاربری
            </label>
            <div className="flex items-center bg-white dark:bg-slate-800 p-5 rounded-md">
              <input
                type="text"
                className="w-full placeholder:text-slate-900/70 dark:placeholder:text-white/60 text-slate-900 dark:text-white bg-transparent outline-hidden text-2xl"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
              <div className="my-auto text-5xl text-slate-900/60 dark:text-white/60">
                <HiOutlineUser />
              </div>
            </div>
          </div>

          <div>
            <label className="inline-block font-EstedadMedium text-slate-900 dark:text-white text-2xl mb-4">
              ایمیل
            </label>
            <div className="flex items-center bg-white dark:bg-slate-800 p-5 rounded-md">
              <input
                type="email"
                className="w-full placeholder:text-slate-900/70 dark:placeholder:text-white/60 text-slate-900 dark:text-white bg-transparent outline-hidden text-2xl"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <div className="my-auto text-5xl text-slate-900/60 dark:text-white/60">
                <HiOutlineEnvelope />
              </div>
            </div>
          </div>

          <div>
            <label className="inline-block font-EstedadMedium text-slate-900 dark:text-white text-2xl mb-4">
              شماره تلفن
            </label>
            <div className="flex items-center bg-white dark:bg-slate-800 p-5 rounded-md">
              <input
                type="text"
                id="phone"
                className="w-full placeholder:text-slate-900/70 dark:placeholder:text-white/60 text-slate-900 dark:text-white bg-transparent outline-hidden text-2xl"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
              />
              <div className="my-auto text-5xl text-slate-900/60 dark:text-white/60">
                <HiOutlineDeviceTablet />
              </div>
            </div>
          </div>
        </div>
        <div className="md:pr-5 mt-7 md:mt-5 lg:mx-36">
          <label className="inline-block font-EstedadMedium text-slate-900 dark:text-white text-2xl mb-4">
            رمز عبور جدید
          </label>
          <div className="flex items-center bg-white dark:bg-slate-800 p-5 rounded-md">
            <input
              type="password"
              className="w-full placeholder:text-slate-900/70 dark:placeholder:text-white/60 text-slate-900 dark:text-white bg-transparent outline-hidden text-2xl"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <div className="my-auto text-5xl text-slate-900/60 dark:text-white/60">
              <HiOutlineLockClosed />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-8 items-center justify-between mt-14 md:pr-5">
          {/* <!-- Attach --> */}
          <div className="flex items-center justify-between w-full sm:w-96 h-20 px-8 border border-green-500 text-green-500 bg-transparent cursor-pointer rounded-md">
            <span className="text-2xl font-EstedadMedium select-none">
              آپلود عکس پروفایل
            </span>
            <div className="text-4xl">
              <HiOutlineArrowUpTray />
            </div>
          </div>

          <div className="attachment_item hidden items-center justify-between w-full sm:w-62 h-12 px-4 border border-green-500 text-green-500 bg-transparent cursor-pointer rounded-sm">
            <div className="size-5 shrink-0 cursor-pointer remove_attachment after_upload">
              <use href="#trash"></use>
            </div>
            <div className="size-5 shrink-0 cursor-pointer in_progress remove_attachment hidden">
              <use href="#close"></use>
            </div>
            <div className="flex items-center gap-x-1.5">
              <span className="up_percent"></span>
              <span className="hidden"></span>
              <span className="max-w-34 truncate en-value file_name"></span>
            </div>
          </div>

          <button
            onClick={editAccount}
            className="h-20 bg-sky-600 dark:bg-sky-900 w-full text-white font-EstedadMedium sm:w-96 rounded-md"
          >
            ویرایش حساب کاربری
          </button>
        </div>
      </form>
    </main>
  );
}
