import React, { useContext, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Button from "../../Form/Button";
import Swal from "sweetalert2";
import AuthContext from "../../../context/authContext";
import {
  HiMiniChevronLeft,
  HiOutlineMoon,
  HiOutlineSun,
} from "react-icons/hi2";
import { HiOutlineLogout } from "react-icons/hi";

export default function Sidebar() {
  const [dark, setDark] = useState(false);

  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  const pageName = useParams();

  const logoutUser = () => {
    Swal.fire({
      title: "مطمعنی میخوای از سیستم خارج بشی؟",
      icon: "warning",
      confirmButtonText: "آره",
      showDenyButton: true,
      denyButtonText: "نه",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "با موفقیت logout شدید",
          icon: "success",
          confirmButtonText: "OK",
        }).then(() => {
          authContext.logout();
          navigate("/");
        });
      }
    });
  };

  const themeHandler = () => {
    if (localStorage.theme === "dark") {
      setDark(false);
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    } else {
      setDark(true);
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <aside className="nav w-[24rem] 2xl:w-[26rem] h-full">
      <div className="sticky top-0 pt-1 transition-all text-slate-900 dark:text-white px-7 h-[90vh] 2xl:h-[91vh]">
        <div className="flex items-center justify-between xl:gap-x-14 text-slate-900 dark:text-white mx-2 2xl:mx-3.5 my-[.55rem] 2xl:my-[1.05rem]">
          <Link
            to={"/"}
            className="text-sky-600 dark:text-sky-500 size-26 mb-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke="none" d="M0 0h24v24H0z"></path>
              <path d="M18.316 5H5.684L2.266 9.019a1.09 1.09 0 0 0 .019 1.447L11.999 21l9.715-10.49a1.09 1.09 0 0 0 .024-1.444z"></path>
              <path d="m9 11 3 3 3-3"></path>
            </svg>
          </Link>
          <div className="flex items-center gap-x-6 text-[2.75rem] text-stone-1000 dark:text-white">
            <div
              className="flex-center p-2.5 rounded-lg toggle-theme cursor-pointer bg-stone-100 dark:bg-white/10"
              onClick={() => themeHandler()}
            >
              <HiOutlineSun className="hidden dark:inline-block" />
              <HiOutlineMoon className="inline-block dark:hidden" />
            </div>
          </div>
        </div>
        <div className="w-full h-px bg-gray-300 dark:bg-white/10"></div>

        <div className="h-full flex flex-col justify-between">
          <ul className="*:transition-all *:pr-6 *:pl-3 *:py-[.3rem] *:my-7 2xl:child:my-9 mt-7 text-2xl 2xl:text-[1.7rem] font-EstedadMedium">
            <li className={pageName["*"] === "" && "active-menu"}>
              <Link
                className="flex items-center justify-between"
                to="/my-account"
              >
                <span>پیشخوان</span>
                <HiMiniChevronLeft className="text-5xl" />
              </Link>
            </li>
            <li className={pageName["*"] === "orders" && "active-menu"}>
              <Link className="flex items-center justify-between" to="orders">
                <span>سفارش</span>
                <HiMiniChevronLeft className="text-5xl" />
              </Link>
            </li>
            <li>
              <Link className="flex items-center justify-between" to="#">
                <span>کیف پول من</span>
                <HiMiniChevronLeft className="text-5xl" />
              </Link>
            </li>
            <li className={pageName["*"] === "edit-account" && "active-menu"}>
              <Link
                className="flex items-center justify-between"
                to="edit-account"
              >
                <span>جزئیات حساب کاربری</span>
                <HiMiniChevronLeft className="text-5xl" />
              </Link>
            </li>
            <li className={pageName["*"] === "buyed" && "active-menu"}>
              <Link className="flex items-center justify-between" to="buyed">
                <span>دوره های من</span>
                <HiMiniChevronLeft className="text-5xl" />
              </Link>
            </li>
            <li className={pageName["*"] === "tickets" && "active-menu"}>
              <Link className="flex items-center justify-between" to="tickets">
                <span>تیکت های پشتیبانی</span>
                <HiMiniChevronLeft className="text-5xl" />
              </Link>
            </li>
          </ul>
          <div className="hover:bg-red-500/80 hover:text-white dark:hover:bg-red-500/80 dark:hover:text-white bg-red-300/40 dark:bg-red-500/20 rounded-md text-red-300 dark:text-red-100 mt-4 mb-8 mx-3 font-EstedadMedium">
            <Button
              className="flex items-center justify-between px-5 py-5 text-2xl w-full"
              onClick={logoutUser}
            >
              خروج از حساب کاربری
              <span className="text-4xl">
                <HiOutlineLogout />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </aside>
  );
}
