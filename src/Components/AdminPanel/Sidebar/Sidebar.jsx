import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Sidebar.css";
import {
  HiChevronRight,
  HiMagnifyingGlass,
  HiOutlineMoon,
  HiOutlineSun,
} from "react-icons/hi2";

export default function Sidebar() {
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

  const [dark, setDark] = useState(false);

  return (

    <div className="transition-all">
      <div className="flex items-center justify-between  xl:gap-x-14 text-darkColor dark:text-white mx-2 2xl:mx-3.5 my-[.7rem] 2xl:my-5">
        <Link to={"/"} className="text-light-blue-600 dark:text-light-blue-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="65"
            height="65"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="icon icon-tabler icons-tabler-outline icon-tabler-brand-my-oppo"
            viewBox="0 0 24 24"
          >
            <path stroke="none" d="M0 0h24v24H0z"></path>
            <path d="M18.316 5H5.684L2.266 9.019a1.09 1.09 0 0 0 .019 1.447L11.999 21l9.715-10.49a1.09 1.09 0 0 0 .024-1.444z"></path>
            <path d="m9 11 3 3 3-3"></path>
          </svg>
        </Link>
        <div className="flex items-center gap-x-6 text-[2.75rem] text-blue-gray-500 dark:text-white">
          <div
            className="flex-center p-2.5 rounded-lg toggle-theme cursor-pointer bg-blue-gray-50 dark:bg-white/10"
            onClick={() => themeHandler()}
          >
            <HiOutlineSun className="hidden dark:inline-block" />
            <HiOutlineMoon className="inline-block dark:hidden" />
          </div>
        </div>
      </div>
      <div className="w-full h-px bg-gray-300 dark:bg-white/10"></div>


      <ul className="child:transition-all child:pr-2.5 child:py-8 mt-12 text-darkColor dark:text-white ">
        <li className="active-menu">
          <Link to="/p-admin">
            <span>صفحه اصلی</span>
          </Link>
        </li>
        <li>
          <Link to="courses">
            <span>دوره ها</span>
          </Link>
        </li>
        <li>
          <Link to="menus">
            <span>منو ها</span>
          </Link>
        </li>
        <li>
          <Link to="articles">
            <span>مقاله ها</span>
          </Link>
        </li>
        <li>
          <Link to="users">
            <span>کاربران</span>
          </Link>
        </li>
        <li>
          <a href="#">
            <span>کدهای تخفیف</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span>دسته‌بندی‌ها</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
