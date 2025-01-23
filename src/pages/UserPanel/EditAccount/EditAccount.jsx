import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../../context/authContext";
import { HiOutlineArrowUpTray, HiOutlineDeviceTablet, HiOutlineEnvelope, HiOutlineUser, HiOutlineUserCircle } from "react-icons/hi2";


export default function EditAccount() {
  const authContext = useContext(AuthContext);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    setName(authContext.userInfos.name);
    setPhone(authContext.userInfos.phone);
    setUsername(authContext.userInfos.username);
    setUsername(authContext.userInfos.username);
    setEmail(authContext.userInfos.email);
  }, []);

  return (
    <main className="pb-5 md:pb-8 mx-auto mt-10 md:mt-12 2xl:px-24">
      <form id="edit-account-info" className="block mt-6 md:mt-10">
      <div className="flex items-center justify-between bg-white dark:bg-darkBox h-20 md:h-28 pl-3.5 rounded-md mb-8">
        <div className="flex items-center gap-x-3 md:gap-x-6 h-full">
          <span className="w-1 md:w-1.5 h-full bg-light-blue-600 rounded-r-full shadowLightBlue"></span>
          <span className="text-light-blue-500 text-[1.7rem] md:text-3xl font-EstedadMedium md:font-EstedadBold select-none pr-4">
          جزئیات حساب کاربری
          </span>
        </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-6 md:pr-5">

          <div>
            <label className="inline-block font-EstedadMedium text-darkColor dark:text-white text-2xl mb-6">
              نام و نام خانوادگی
            </label>
            <div className="flex items-center bg-white dark:bg-darkBox p-5 rounded-md">
              <input
                type="text"
                className="w-full placeholder:text-darkColor/70 dark:placeholder:text-white/60 text-darkColor dark:text-white bg-transparent outline-none text-2xl"
                value={name}
                onChange={event => setName(event.target.value)}
              />
              <div className="my-auto text-5xl text-darkColor/60 dark:text-white/60">
                <HiOutlineUserCircle />
              </div>
            </div>
          </div>

          <div>
            <label className="inline-block font-EstedadMedium text-darkColor dark:text-white text-2xl mb-6">
              نام کاربری
            </label>
            <div className="flex items-center bg-white dark:bg-darkBox p-5 rounded-md">
              <input
                type="text"
                className="w-full placeholder:text-darkColor/70 dark:placeholder:text-white/60 text-darkColor dark:text-white bg-transparent outline-none text-2xl"
                value={username}
                onChange={event => setUsername(event.target.value)}
              />
              <div className="my-auto text-5xl text-darkColor/60 dark:text-white/60">
              <HiOutlineUser />
              </div>
            </div>
          </div>


          <div>
            <label className="inline-block font-EstedadMedium text-darkColor dark:text-white text-2xl mb-6">
              ایمیل
            </label>
            <div className="flex items-center bg-white dark:bg-darkBox p-5 rounded-md">
              <input
                type="email"
                className="w-full placeholder:text-darkColor/70 dark:placeholder:text-white/60 text-darkColor dark:text-white bg-transparent outline-none text-2xl"
                value={email}
                onChange={event => setEmail(event.target.value)}
              />
              <div className="my-auto text-5xl text-darkColor/60 dark:text-white/60">
                <HiOutlineEnvelope />
              </div>
            </div>
          </div>

          <div>
            <label className="inline-block font-EstedadMedium text-darkColor dark:text-white text-2xl mb-6">
              شماره تلفن
            </label>
            <div className="flex items-center bg-white dark:bg-darkBox p-5 rounded-md">
              <input
                type="text"
                id="phone"
                className="w-full placeholder:text-darkColor/70 dark:placeholder:text-white/60 text-darkColor dark:text-white bg-transparent outline-none text-2xl"
                value={phone}
                onChange={event => setPhone(event.target.value)}
              />
              <div className="my-auto text-5xl text-darkColor/60 dark:text-white/60">
                <HiOutlineDeviceTablet />
              </div>
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
              <HiOutlineArrowUpTray/>
            </div>
          </div>

          <div className="attachment_item hidden items-center justify-between w-full sm:w-62 h-12 px-4 border border-green-500 text-green-500 bg-transparent cursor-pointer rounded">
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

          <button className="h-20 bg-light-blue-600 dark:bg-light-blue-900 w-full text-white font-EstedadMedium sm:w-96 rounded-md">
            ویرایش حساب کاربری
          </button>
        </div>
      </form>

      <form
        id="edit-account-password"
        className="block mt-6 md:mt-10 pt-6 md:pt-10 border-t border-t-neutral-200 dark:border-t-white/10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6 md:pr-5">
          <div>
            <label className="inline-block font-danaMedium text-sm mb-3">
              رمز عبور فعلی
            </label>
            <div className="relative">
              <input
                type="password"
                className="w-full placeholder:text-slate-500 dark:placeholder:text-gray-400 text-gray-900 dark:text-white bg-white dark:bg-darker text-sm py-3.5 pr-3.5 pl-13 rounded"
                id="old_pass"
                name="old_pass"
              />
              <div className="absolute left-3.5 top-0 bottom-0 my-auto size-6 text-slate-500 dark:text-gray-400">
                <use href="#lock-closed"></use>
              </div>
            </div>
          </div>
          <div>
            <label className="inline-block font-danaMedium text-sm mb-3">
              رمز عبور جدید
            </label>
            <div className="relative">
              <input
                type="password"
                className="w-full placeholder:text-slate-500 dark:placeholder:text-gray-400 text-gray-900 dark:text-white bg-white dark:bg-darker text-sm py-3.5 pr-3.5 pl-13 rounded"
                id="new_pass"
                name="new_pass"
                required=""
              />
              <div className="absolute left-3.5 top-0 bottom-0 my-auto size-6 text-slate-500 dark:text-gray-400">
                <use href="#lock-closed"></use>
              </div>
            </div>
          </div>
        </div>

        <button className="btn-primary btn btn-outline w-full sm:w-62 mr-auto mt-8">
          تغییر رمز عبور
        </button>
      </form>
    </main>
  );
}
