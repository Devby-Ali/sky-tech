import React, { useContext, useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { GoTriangleDown } from "react-icons/go";
import {
  HiBars3,
  HiChevronRight,
  HiMiniChevronLeft,
  HiOutlineBell,
  HiOutlineMoon,
  HiOutlineSun,
  HiOutlineUser,
} from "react-icons/hi2";
import { Link, useNavigate, useParams } from "react-router-dom";
import Button from "../../Form/Button";
import AuthContext from "../../../context/authContext";
import Swal from "sweetalert2";
import { HiOutlineLogout } from "react-icons/hi";

export default function Topbar() {
  const [navOpen, setNavOpen] = useState(false);
  const [overlay, setOverlay] = useState(false);
  const [dark, setDark] = useState(false);
  const [openCollapseInfo, setOpenCollapseInfo] = useState(false);
  const [userInfo, setUserInfo] = useState("");

  const authContext = useContext(AuthContext);

  const pageName = useParams();

  const navigate = useNavigate();

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

  const overlayOnClick = () => {
    setNavOpen(false);
    setOpenCollapseInfo(false);
    setOverlay(false);
  };

  const navOpenHandler = () => {
    setNavOpen(!navOpen);
    setOverlay(!overlay);
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

  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    if (localStorageData) {
      fetch(`http://localhost:4000/v1/auth/me`, {
        headers: {
          Authorization: `Bearer ${localStorageData.token}`,
        },
      })
        .then((res) => res.json())
        .then((userData) => {
          console.log(userData);
          setUserInfo(userData.name);
        });
    }
  }, []);

  const toggleOpenInfo = () => {
    setOpenCollapseInfo((cur) => !cur);
  };

  return (
    <>
      <div
        className={`nav fixed top-0 bottom-0 w-[240px] min-h-screen px-7 bg-white dark:bg-slate-900 overflow-y-auto transition-all z-50 md:hidden ${
          navOpen ? "right-0" : "-right-[240px]"
        }`}
      >
        <div className="sticky top-0 pt-1 transition-all text-slate-900 dark:text-white h-[90vh]">
          <div className="flex items-center justify-between xl:gap-x-14 text-slate-900 dark:text-white mx-2 2xl:mx-3.5 my-[.7rem] 2xl:my-5">
            <Link to={"/"} className="text-sky-600 dark:text-sky-500 size-24">
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
                className="flex-center p-2 rounded-lg toggle-theme cursor-pointer bg-stone-100 dark:bg-slate-800"
                onClick={() => themeHandler()}
              >
                <HiOutlineSun className="hidden dark:inline-block" />
                <HiOutlineMoon className="inline-block dark:hidden" />
              </div>
              <div
                className="flex-center p-2 rounded-lg toggle-theme cursor-pointer bg-stone-100 dark:bg-slate-800"
                onClick={navOpenHandler}
              >
                <HiChevronRight />
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
                <Link
                  className="flex items-center justify-between"
                  to="tickets"
                >
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
      </div>

      <header className="w-full flex items-center h-[8rem] 2xl:h-36 dark:bg-linear-to-tr from-sky-800/5 via-sky-900/5 to-sky-900/5 backdrop-blur-[4px] shadow-lg">
        <div className="h-full w-full flex items-center justify-between px-6 lg:px-12 xl:px-24 py-4">
          <div className="flex items-center gap-x-6 2xl:gap-x-8">
            <div
              className="md:hidden p-3 bg-gray-300/40 dark:bg-white/10 text-slate-900 dark:text-white rounded-lg cursor-pointer text-4xl"
              onClick={navOpenHandler}
            >
              <HiBars3 />
            </div>
            <form
              action="#"
              className="flex items-center justify-between text-2xl border w-[70%] border-gray-400 dark:border-white/10 bg-transparent py-2.5 p-4 rounded-md"
            >
              <input
                type="text"
                className="w-[70%] bg-transparent"
                placeholder="جستجو ..."
              />
              <FaSearch className="text-3xl text-slate-900/70 dark:text-white/60 cursor-pointer" />
            </form>

            <div className="hidden lg:block text-nowrap text-slate-900 dark:text-white lg:text-3xl mr-3">
              <h4>
                {userInfo} عزیز‚ به پنل کاربری{" "}
                <span className="text-sky-400 mx-1.5">Sky Tech</span> خوش اومدی
              </h4>
            </div>
          </div>

          <div className="hidden xs:flex items-center gap-x-3 xl:px-6 p-3 xl:py-4  rounded-lg mr-4 bg-gray-300/40 dark:bg-white/5 text-4xl text-slate-900 dark:text-white">
            <Link to="#" className="text-2xl">
              {userInfo}
            </Link>
            <HiOutlineUser />
          </div>

          <Link
            to="#"
            className={`relative flex xs:hidden mr-6 items-center justify-center p-3 text-slate-900 dark:text-white text-4xl rounded-lg transition-all duration-200 cursor-pointer ${
              openCollapseInfo
                ? "bg-white dark:bg-[#333c4c]"
                : "bg-gray-300/40 dark:bg-white/10"
            }`}
            onClick={toggleOpenInfo}
          >
            <HiOutlineUser />
            <div
              className={`absolute top-32 left-0 w-96 z-50  shadow-xl ${
                openCollapseInfo ? "block visible" : "hidden invisible"
              }`}
            >
              <div className="py-8 px-10 mx-auto bg-white dark:bg-slate-800 text-slate-900 dark:text-white/80">
                <span className="text-2xl">{userInfo}</span>
              </div>
            </div>
          </Link>
        </div>
      </header>

      <div
        onClick={overlayOnClick}
        className={overlay ? "overlay overlay--visible" : "overlay"}
      ></div>
    </>
  );
}
