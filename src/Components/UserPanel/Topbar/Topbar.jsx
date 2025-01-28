import React, { useContext, useEffect, useState } from "react";
import { Card, Collapse } from "@material-tailwind/react";
import { FaSearch } from "react-icons/fa";
import { GoTriangleDown } from "react-icons/go";
import {
  HiBars3,
  HiChevronRight,
  HiOutlineBell,
  HiOutlineMoon,
  HiOutlineSun,
  HiOutlineUser,
} from "react-icons/hi2";
import { Link, useNavigate, useParams } from "react-router-dom";
import Button from "../../Form/Button";
import AuthContext from "../../../context/authContext";
import Swal from "sweetalert2";

export default function Topbar() {
  const [navOpen, setNavOpen] = useState(false);
  const [overlay, setOverlay] = useState(false);
  const [dark, setDark] = useState(false);
  const [openCollapseInfo, setOpenCollapseInfo] = useState(false);
  const [userInfo, setUserInfo] = useState("");

  const authContext = useContext(AuthContext);

  const pageName = useParams()

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
        className={`nav fixed top-0 bottom-0 w-[263px] min-h-screen px-7 bg-white dark:bg-darkColor overflow-y-auto transition-all z-50 md:hidden ${
          navOpen ? "right-0" : "-right-[263px]"
        }`}
      >
        <div className="sticky top-0 pt-1 transition-all text-darkColor dark:text-white">
          <div className="flex items-center justify-between xl:gap-x-14 text-darkColor dark:text-white mx-2 2xl:mx-3.5 my-[.7rem] 2xl:my-5">
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
                className="flex-center p-3.5 rounded-lg toggle-theme cursor-pointer bg-blue-gray-50 dark:bg-darkBox"
                onClick={() => themeHandler()}
              >
                <HiOutlineSun className="hidden dark:inline-block" />
                <HiOutlineMoon className="inline-block dark:hidden" />
              </div>
              <div
                className="flex-center p-3.5 rounded-lg toggle-theme cursor-pointer bg-blue-gray-50 dark:bg-darkBox"
                onClick={navOpenHandler}
              >
                <HiChevronRight />
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
            <li className={pageName["*"] === "#" && "active-menu"}>
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
            <Button className="pr-2.5 py-4" onClick={logoutUser}>
              خروج
            </Button>
          </div>
        </div>
      </div>

      <header className="w-full flex items-center h-[8rem] 2xl:h-36 dark:bg-gradient-to-tr from-light-blue-800/5 to-light-blue-800/5 backdrop-blur-[4px] shadow-lg">
        <div className="h-full w-full flex items-center justify-between px-6 lg:px-12 xl:px-24 py-4">
          <div className="flex items-center gap-x-6 2xl:gap-x-8">
            <div
              className="md:hidden p-3 bg-gray-300/40 dark:bg-white/10 text-darkColor dark:text-white rounded-lg cursor-pointer text-4xl"
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
              <FaSearch className="text-3xl text-darkColor/70 dark:text-white/60 cursor-pointer" />
            </form>

            <ul className="hidden gap-x-7 xl:gap-x-12 text-white text-[1.55rem] xl:text-[1.7rem]">
              <li className="main-header__item flex-center relative">
                <Link to={"/"} className="flex-center">
                  صفحه اصلی
                </Link>
              </li>

              <li className="main-header__item flex-center hover:text-light-blue-400 cursor-pointer relative">
                <Link to={`/category-info`} className="flex-center">
                  <GoTriangleDown className="mt-1 xl:mr-1" />
                  <ul className="main-header__dropdown absolute top-24 left-0 right-0 w-96 b bg-gradient-to-t from-darkBox/60 via-lightishBlue-400/20 via-60% to-transparent backdrop-blur-[5px] text-darkColor dark:text-white transition-all shadow-2xl rounded-4xl py-4 border-b-4 border-r-4 border-light-blue-700 dark:border-light-blue-400 delay-75">
                    <li>
                      <Link
                        to={"/"}
                        className="block py-2 px-8 text-[1.6rem] text-zinc-600 duration-200"
                      >
                        cgxjnf
                      </Link>
                    </li>
                  </ul>
                </Link>
              </li>
            </ul>
          </div>

          <div className="hidden xs:flex items-center gap-x-3 xl:px-6 p-3 xl:py-4  rounded-lg mr-4 bg-gray-300/40 dark:bg-white/5 text-4xl text-darkColor dark:text-white">
            <Link to="#" className="text-2xl">
              {userInfo}
            </Link>
            <HiOutlineUser />
          </div>

          <Link
            to="#"
            className={`relative flex xs:hidden mr-6 items-center justify-center p-3 text-darkColor dark:text-white text-4xl rounded-lg transition-all duration-200 cursor-pointer ${
              openCollapseInfo
                ? "bg-white dark:bg-[#333c4c]"
                : "bg-gray-300/40 dark:bg-white/10"
            }`}
            onClick={toggleOpenInfo}
          >
            <HiOutlineUser />
            <Collapse
              className="absolute top-32 left-0 w-96 z-50"
              open={openCollapseInfo}
            >
              <Card className="py-8 px-10 mx-auto bg-white dark:bg-darkBox text-darkColor dark:text-white/80">
                <span className="text-2xl">{userInfo}</span>
              </Card>
            </Collapse>
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
