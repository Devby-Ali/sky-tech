import React, { useContext, useEffect, useState } from "react";
import { Card, Collapse } from "@material-tailwind/react";
import { FaSearch } from "react-icons/fa";
import { GoTriangleDown } from "react-icons/go";
import {
  HiBars3,
  HiChevronRight,
  HiMiniChevronLeft,
  HiOutlineBell,
  HiOutlineMoon,
  HiOutlineShoppingBag,
  HiOutlineSun,
  HiOutlineUser,
} from "react-icons/hi2";
import { Link, useNavigate, useParams } from "react-router-dom";
import AuthContext from "../../../context/authContext";
import Swal from "sweetalert2";
import Button from "../../Form/Button";
import { HiOutlineLogout } from "react-icons/hi";

export default function Topbar() {
  const [adminInfo, setAdminInfo] = useState({});
  const [adminNotif, setAdminNotif] = useState({});
  const [navOpen, setNavOpen] = useState(false);
  const [overlay, setOverlay] = useState(false);
  const [dark, setDark] = useState(false);
  const [openCollapseNotif, setOpenCollapseNotif] = useState(false);
  const [openCollapseInfo, setOpenCollapseInfo] = useState(false);

  const authContext = useContext(AuthContext);

   const pageName = useParams()

  const navigate = useNavigate();

  const logoutAdmin = () => {
    Swal.fire({
      title: "با موفقیت logout شدید",
      icon: "success",
      confirmButtonText: "OK",
    }).then(() => {
      authContext.logout();
      navigate("/");
    });
  };

  const overlayOnClick = () => {
    setNavOpen(false);
    setOpenCollapseInfo(false);
    setOpenCollapseNotif(false);
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
          console.log(userData.notifications);
          setAdminInfo(userData);
          setAdminNotif(userData.notifications);
        });
    }
  }, []);

  function seeNotification(notficationID) {
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    fetch(`http://localhost:4000/v1/notifications/see/${notficationID}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${localStorageData.token}`,
      },
    })
      .then((res) => res.json())
      .then((err) => {
        console.log(err);
      });
  }

  const toggleOpenNotif = () => {
    setOpenCollapseNotif((cur) => !cur);
  };

  const toggleOpenInfo = () => {
    setOpenCollapseInfo((cur) => !cur);
  };

  return (
    <>
      <div
        className={`nav fixed top-0 bottom-0 w-[240px] min-h-screen px-7 bg-white dark:bg-darkColor overflow-y-auto transition-all z-50 md:hidden ${
          navOpen ? "right-0" : "-right-[240px]"
        }`}
      >
        <div className="sticky top-0 pt-1 transition-all text-darkColor dark:text-white h-[90vh]">
          <div className="flex items-center justify-between  xl:gap-x-14 text-darkColor dark:text-white mx-2 2xl:mx-3.5 my-[.7rem] 2xl:my-5">
            <Link
              to={"/"}
              className="text-light-blue-600 dark:text-light-blue-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="55"
                height="55"
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
                className="flex-center p-2 rounded-lg toggle-theme cursor-pointer bg-blue-gray-50 dark:bg-darkBox"
                onClick={() => themeHandler()}
              >
                <HiOutlineSun className="hidden dark:inline-block" />
                <HiOutlineMoon className="inline-block dark:hidden" />
              </div>
              <div
                className="flex-center p-2 rounded-lg toggle-theme cursor-pointer bg-blue-gray-50 dark:bg-darkBox"
                onClick={navOpenHandler}
              >
                <HiChevronRight />
              </div>
            </div>
          </div>
          <div className="w-full h-px bg-gray-300 dark:bg-white/10"></div>

        <div className="h-full flex flex-col justify-between">
          <ul className="child:transition-all child:pr-6 child:pl-3 child:py-[.3rem] child:my-6 2xl:child:my-9 mt-7 text-2xl 2xl:text-[1.7rem] font-EstedadMedium">
            <li className={pageName["*"] === "" && "active-menu"}>
              <Link className="flex items-center justify-between" to="/p-admin">
                <span>صفحه اصلی</span>
                <HiMiniChevronLeft className="text-5xl"/>
              </Link>
            </li>
            <li className={pageName["*"] === "courses" && "active-menu"}>
              <Link className="flex items-center justify-between" to="courses">
                <span>دوره ها</span>
                <HiMiniChevronLeft className="text-5xl"/>
              </Link>
            </li>
            <li className={pageName["*"] === "sessions" && "active-menu"}>
              <Link className="flex items-center justify-between" to="sessions">
                <span>جلسات</span>
                <HiMiniChevronLeft className="text-5xl"/>
              </Link>
            </li>
            <li className={pageName["*"] === "menus" && "active-menu"}>
              <Link className="flex items-center justify-between" to="menus">
                <span>منو ها</span>
                <HiMiniChevronLeft className="text-5xl"/>
              </Link>
            </li>
            <li className={pageName["*"] === "articles" && "active-menu"}>
              <Link className="flex items-center justify-between" to="articles">
                <span>مقاله ها</span>
                <HiMiniChevronLeft className="text-5xl"/>
              </Link>
            </li>
            <li className={pageName["*"] === "users" && "active-menu"}>
              <Link className="flex items-center justify-between" to="users">
                <span>کاربران</span>
                <HiMiniChevronLeft className="text-5xl"/>
              </Link>
            </li>
            <li className={pageName["*"] === "comments" && "active-menu"}>
              <Link className="flex items-center justify-between" to="comments">
                <span>کامنت‌ها</span>
                <HiMiniChevronLeft className="text-5xl"/>
              </Link>
            </li>
            <li className={pageName["*"] === "tickets" && "active-menu"}>
              <Link className="flex items-center justify-between" to="tickets">
                <span>تیکت‌ها</span>
                <HiMiniChevronLeft className="text-5xl"/>
              </Link>
            </li>
            <li className={pageName["*"] === "offs" && "active-menu"}>
              <Link className="flex items-center justify-between" to="offs">
                <span>کدهای تخفیف</span>
                <HiMiniChevronLeft className="text-5xl"/>
              </Link>
            </li>
            <li className={pageName["*"] === "discounts" && "active-menu"}>
              <Link className="flex items-center justify-between" to="discounts">
                <span>تخفیف همگانی</span>
                <HiMiniChevronLeft className="text-5xl"/>
              </Link>
            </li>
            <li className={pageName["*"] === "category" && "active-menu"}>
              <Link className="flex items-center justify-between" to="category">
                <span>دسته‌بندی‌ها</span>
                <HiMiniChevronLeft className="text-5xl"/>
              </Link>
            </li>
            <li className={pageName["*"] === "contacts" && "active-menu"}>
              <Link className="flex items-center justify-between" to="contacts">
                <span>پیغام‌ها</span>
                <HiMiniChevronLeft className="text-5xl"/>
              </Link>
            </li>
          </ul>
          <div className="hover:bg-red-500/80 hover:text-white dark:hover:bg-red-500/80 dark:hover:text-white bg-red-300/40 dark:bg-red-500/20 rounded-md text-red-300 dark:text-red-100 mt-4 mb-8 mx-3 font-EstedadMedium">
            <Button
              className="flex items-center justify-between px-5 py-5 text-2xl w-full"
              onClick={logoutAdmin}
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

      <header className="w-full flex items-center h-[8rem] 2xl:h-36 dark:bg-gradient-to-tr from-light-blue-800/5 via-light-blue-900/5 to-light-blue-900/5 backdrop-blur-[4px] shadow-lg">
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

            <div
              className={`relative flex items-center justify-center p-3 text-darkColor dark:text-white text-4xl rounded-lg transition-all duration-200 cursor-pointer ${
                openCollapseNotif
                  ? "bg-white dark:bg-[#333c4c]"
                  : "bg-gray-300/40 dark:bg-white/10"
              }`}
              onClick={toggleOpenNotif}
            >
              <HiOutlineBell />
              <Collapse
                className="absolute top-[5.9rem] 2xl:top-[6.4rem] w-auto"
                open={openCollapseNotif}
              >
                {adminNotif.length === 0 ? (
                  <Card className="py-8 px-10 mx-auto bg-white dark:bg-darkBox text-darkColor dark:text-white/80 rounded-b-lg rounded-t-none">
                    <span className="text-2xl text-nowrap">
                      نوتیفی برای نمایش وجود ندارد
                    </span>
                  </Card>
                ) : (
                  <>
                    <Card className="py-2.5 px-4 mx-auto bg-white dark:bg-darkBox text-darkColor dark:text-white/80 rounded-b-lg rounded-t-none">
                      <div className="flex items-center justify-between gap-x-12 text-3xl bg-darkBox/30 dark:bg-white/10 my-2 px-6 py-4 rounded-md">
                        <span className="truncate hover:text-clip">
                          blablabl
                        </span>
                        <a className="text-2xl" href="javascript:void(0)">
                          دیدم
                        </a>
                      </div>
                      <div className="flex items-center justify-between gap-x-12 text-3xl bg-darkBox/30 dark:bg-white/10 my-2 px-6 py-4 rounded-md">
                        <span className="truncate hover:text-clip">
                          blablabl
                        </span>
                        <a className="text-2xl" href="javascript:void(0)">
                          دیدم
                        </a>
                      </div>
                      <div className="flex items-center justify-between gap-x-12 text-3xl bg-darkBox/30 dark:bg-white/10 my-2 px-6 py-4 rounded-md">
                        <span className="truncate hover:text-clip">
                          blablabl
                        </span>
                        <a className="text-2xl" href="javascript:void(0)">
                          دیدم
                        </a>
                      </div>
                      <div className="flex items-center justify-between gap-x-12 text-3xl bg-darkBox/30 dark:bg-white/10 my-2 px-6 py-4 rounded-md">
                        <span className="truncate hover:text-clip">
                          blablabl
                        </span>
                        <a className="text-2xl" href="javascript:void(0)">
                          دیدم
                        </a>
                      </div>
                    </Card>
                  </>
                )}
              </Collapse>
            </div>
            <div className="hidden lg:block text-nowrap text-darkColor dark:text-white text-3xl mr-3">
              <h4>{adminInfo.name} عزیز‚ به پنل مدیریت <span className="text-light-blue-400 mx-1.5">Sky Tech</span> خوش اومدی</h4>
            </div>
      
          </div>

          <div className="hidden xs:flex items-center gap-x-3 xl:px-6 p-3 xl:py-4  rounded-lg mr-4 bg-gray-300/40 dark:bg-white/5 text-4xl text-darkColor dark:text-white">
            <Link to="#" className="text-2xl">
              {adminInfo.name}
            </Link>
            <HiOutlineUser />
          </div>

          <Link
            to="#"
            className={`relative flex xs:hidden mr-6 items-center justify-center p-3 text-darkColor dark:text-white text-4xl rounded-lg transition-all duration-200 cursor-pointer z-50 ${
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
                <span className="text-2xl">{authContext.userInfos.name}</span>
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
