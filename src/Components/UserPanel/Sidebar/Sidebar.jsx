import React, { useContext, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Button from "../../Form/Button";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import Swal from "sweetalert2";
import AuthContext from "../../../context/authContext";

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
    <aside className="nav w-[27rem] h-full px-7">
      <div className="sticky top-0 pt-1 transition-all text-darkColor dark:text-white">
        <div className="flex items-center justify-between xl:gap-x-14 text-darkColor dark:text-white mx-2 2xl:mx-3.5 my-[.55rem] 2xl:my-[1.05rem]">
          <Link
            to={"/"}
            className="text-light-blue-600 dark:text-light-blue-500"
          >
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

        <ul className="child:transition-all child:pr-2.5 child:py-6 mt-6 -ml-7">
          <li className={pageName["*"] === "" && "active-menu"}>
            <Link to="/my-account">
              <span>پیشخوان</span>
            </Link>
          </li>
          <li className={pageName["*"] === "orders" && "active-menu"}>
            <Link to="orders">
              <span>سفارش</span>
            </Link>
          </li>
          <li>
            <Link to="#">
              <span>کیف پول من</span>
            </Link>
          </li>
          <li className={pageName["*"] === "edit-account" && "active-menu"}>
            <Link to="edit-account">
              <span>جزئیات حساب کاربری</span>
            </Link>
          </li>
          <li className={pageName["*"] === "buyed" && "active-menu"}>
            <Link to="buyed">
              <span>دوره های من</span>
            </Link>
          </li>
          <li className={pageName["*"] === "tickets" && "active-menu"}>
            <Link to="tickets">
              <span>تیکت های پشتیبانی</span>
            </Link>
          </li>
        </ul>
        <div className="hover:bg-red-500/60 hover:text-white rounded-r-md text-red-200 mt-4 -mr-2 -ml-7">
          <Button className="px-5 py-4" onClick={logoutUser}>
            خروج
          </Button>
        </div>
      </div>
    </aside>
  );
}
