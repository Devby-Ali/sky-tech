import React, { useContext, useState, useEffect } from "react";
import AuthContext from "../../context/authContext";
import { Link, useNavigate, useParams } from "react-router-dom";
import { GrUserAdmin } from "react-icons/gr";
import {
  HiBars3,
  HiChevronLeft,
  HiChevronRight,
  HiMiniChevronLeft,
  HiOutlineArrowLeftEndOnRectangle,
  HiOutlineChatBubbleLeftEllipsis,
  HiOutlineFolder,
  HiOutlineHome,
  HiOutlineMoon,
  HiOutlineShoppingBag,
  HiOutlineSun,
  HiOutlineUser,
  HiPower,
} from "react-icons/hi2";
import Button from "../Form/Button";
import Swal from "sweetalert2";

export default function Header() {
  const [dark, setDark] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [openCollapse, setOpenCollapse] = useState(false);
  const [overlay, setOverlay] = useState(false);

  const [allMenus, setAllMenus] = useState([]);

  const navigate = useNavigate();

  const categoryName = useParams();

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

  const toggleOpen = () => {
    setOpenCollapse((cur) => !cur);
    setOverlay(!overlay);
  };

  const overlayOnClick = () => {
    setNavOpen(false);
    setOpenCollapse(false);
    setOverlay(false);
  };

  const navOpenHandler = () => {
    setNavOpen(!navOpen);
    setOverlay(!overlay);
  };

  const authContext = useContext(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:4000/v1/menus`)
      .then((res) => res.json())
      .then((menus) => {
        setAllMenus(menus);
      });
  }, []);

  return (
    <>
      <div
        className={`nav fixed top-0 bottom-0 w-100 min-h-screen px-9 bg-white dark:bg-slate-900 overflow-y-auto transition-all z-50 lg:hidden ${
          navOpen ? "right-0" : "-right-100"
        }`}
      >
        <div className="flex items-center text-[1.7rem] justify-between gap-x-4 h-20 mb-3 text-slate-900 dark:text-white px-1 pt-16 pb-14">
          {authContext.userInfos.name ? (
            <Link to="/my-account" className="mr-3 hover:text-sky-500">
              {authContext.userInfos.name}
            </Link>
          ) : (
            <Link
              to={"/login"}
              className="text-3xl text-sky-600 dark:text-sky-400 mr-3"
            >
              ورود/ثبت نام
            </Link>
          )}

          <div
            className="flex-center p-4 rounded-xl text-3xl cursor-pointer bg-stone-100 dark:bg-white/5"
            onClick={navOpenHandler}
          >
            <HiChevronRight />
          </div>
        </div>
        <div className="w-full h-px bg-gray-300 dark:bg-white/10"></div>
        <ul className="*:transition-all px-3 *:py-3 space-y-1.5 mt-5 mb-5 text-[1.4rem] text-slate-900 dark:text-white border-b-slate-800/30">
          <li>
            <span className="text-sky-600 dark:text-sky-500 font-EstedadMedium">
              دسترسی سریع
            </span>
          </li>
          {authContext.userInfos.role === "ADMIN" && (
            <li className="hover:text-sky-500">
              <Link className="flex items-center justify-between" to="/p-admin">
                <span>پنل مدیریت</span>
                <HiChevronRight className="text-2xl rotate-180" />
              </Link>
            </li>
          )}
          <li className="hover:text-sky-500">
            <Link
              className="flex items-center justify-between"
              to="/my-account/buyed"
            >
              <span>دوره های من</span>
              <HiChevronRight className="text-2xl rotate-180" />
            </Link>
          </li>
          <li className="hover:text-sky-500">
            <Link
              className="flex items-center justify-between"
              to="/my-account/tickets"
            >
              <span>تیکت های من</span>
              <HiChevronRight className="text-2xl rotate-180" />
            </Link>
          </li>
        </ul>
        <div className="w-full h-px bg-gray-300 dark:bg-white/10"></div>
        <ul className="*:transition-all px-3 *:py-3 *:px-5 *:-mx-5 space-y-1.5 mb-5 mt-5 text-[1.4rem] text-slate-900 dark:text-white border-b-slate-800/30">
          <li>
            <span className="text-sky-600 dark:text-sky-500 font-EstedadMedium">
              دسته بندی ها
            </span>
          </li>
          {allMenus.map((menu) => (
            <li
              key={menu._id}
              className={`rounded-md hover:bg-sky-500/70 dark:hover:bg-sky-900 ${
                categoryName["categoryName"] === menu.href &&
                "bg-sky-500/50 dark:bg-sky-900/70"
              }`}
            >
              <Link
                to={`/category-info/${menu.href}/1`}
                className={`flex items-center justify-between`}
              >
                <span>{menu.title}</span>
                <HiChevronRight className="text-2xl rotate-180" />
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/articles/1"
              className="py-3 -mx-5 px-5 w-full rounded-md hover:bg-sky-400/80 dark:hover:bg-sky-900"
            >
              <span className="w-full inline-block">مقالات</span>
            </Link>
          </li>
        </ul>
        <div className="w-full h-px bg-gray-300 dark:bg-white/10"></div>
        <div
          className="px-2.5 py-6 toggle-theme text-slate-900 dark:text-white text-[1.4rem] cursor-pointer"
          onClick={() => themeHandler()}
        >
          <span className="hidden dark:flex items-center gap-x-3">
            <HiOutlineSun className="text-4xl" />
            تم روشن
          </span>
          <span className="flex items-center gap-x-3 dark:hidden">
            <HiOutlineMoon className="text-4xl" />
            تم تیره
          </span>
        </div>
      </div>

      <header className="md:fixed md:flex md:top-5 2xl:top-7 md:right-0 md:left-0 z-40 justify-between items-center w-full md:w-97/100 lg:w-94/100 h-30 2xl:h-32 md:mx-auto md:rounded-2xl bg-linear-to-l from-sky-400/15 dark:from-sky-400/5 from-0% via-transparent via-50% md:via-65% to-sky-400/15 dark:to-sky-400/5 to-100% backdrop-blur-[6px] shadow-md">
        <div className="w-full h-full">
          <div className="h-full flex items-center justify-between px-10 py-4">
            <div
              className="md:hidden flex-center p-4 text-slate-900 dark:text-white cursor-pointer text-5xl"
              onClick={navOpenHandler}
            >
              <HiBars3 />
            </div>

            <div className="flex gap-x-6 xl:gap-x-14">
              <Link
                to={"/"}
                className="text-sky-600 dark:text-sky-400 mb-1 2xl:mb-0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="65"
                  height="65"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path stroke="none" d="M0 0h24v24H0z"></path>
                  <path d="M18.316 5H5.684L2.266 9.019a1.09 1.09 0 0 0 .019 1.447L11.999 21l9.715-10.49a1.09 1.09 0 0 0 .024-1.444z"></path>
                  <path d="m9 11 3 3 3-3"></path>
                </svg>
              </Link>

              <ul className="hidden md:flex gap-x-7 xl:gap-x-12 text-slate-900 dark:text-white text-[1.7rem] xl:text-[1.8rem]">
                <li className="main-header__item group/menu flex-center relative">
                  <span className="cursor-pointer">
                    دوره های آموزشی
                    <ul className="main-header__dropdown group-hover/menu:main-header__dropdown-hover text-slate-900 dark:text-white">
                      {allMenus.map((menu) => (
                        <li
                          className="main-header__dropdown-item header__item group/submenu"
                          key={menu._id}
                        >
                          <Link
                            to={`/category-info/${menu.href}/1`}
                            className="flex items-center justify-between py-2.5 px-4 text-[1.6rem] duration-200"
                          >
                            {menu.title}
                            {menu.submenus.length !== 0 && (
                              <>
                                <HiMiniChevronLeft className="mt-1 text-4xl xl:mr-1" />
                                <ul className="header__dropdown group-hover/submenu:header__dropdown-hover text-slate-900 dark:text-white font-EstedadLight -mr-[.5px]">
                                  {menu.submenus.map((submenu) => (
                                    <li key={menu._id}>
                                      <Link
                                        to={submenu.href}
                                        className="block px-8 py-2 text-[1.6rem] duration-200"
                                      >
                                        {submenu.title}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </>
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </span>
                </li>
                <li className="main-header__item flex-center relative">
                  <Link to={"/courses/1"}>همه دوره ها</Link>
                </li>
                <li className="main-header__item flex-center relative">
                  <Link to={"/articles/1"} className="flex-center">
                    مقالات
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex items-center text-slate-900 dark:text-white">
              <div
                className="hidden md:flex-center p-4 text-[2.75rem] rounded-xl toggle-theme cursor-pointer"
                onClick={() => themeHandler()}
              >
                <HiOutlineSun className="hidden dark:inline-block text-[2.9rem]" />
                <HiOutlineMoon className="inline-block dark:hidden " />
              </div>

              <Link
                to="#"
                className="flex-center p-4 text-[2.75rem] mr-4 rounded-xl"
              >
                <HiOutlineShoppingBag />
              </Link>

              {authContext.userInfos.name ? (
                <>
                  <Link
                    to="#"
                    className={`relative hidden md:flex-center items-center justify-center p-4 rounded-xl mr-4 transition-all duration-200 ${
                      openCollapse && "z-40 bg-white/10 dark:bg-white/5"
                    }`}
                    onClick={toggleOpen}
                  >
                    <HiOutlineUser className="text-[2.75rem]" />
                    <div
                      className={`absolute top-32 left-0 w-96 z-50 ${
                        openCollapse ? "block visible" : "hidden invisible"
                      }`}
                    >
                      <div className="pt-8 pb-6 px-6 mx-auto bg-white dark:bg-slate-800 text-slate-900 dark:text-white/80 rounded-lg">
                        <span className="text-3xl inline-block w-full pr-4 pb-10 pt-3 border-b dark:border-b-white/15 border-b-slate-800/30">
                          {authContext.userInfos.name}
                        </span>
                        <ul className="*:transition-all *:pr-4 *:py-4 py-4 border-b dark:border-b-white/15 border-b-slate-800/30">
                          {authContext.userInfos.role === "ADMIN" && (
                            <li className="rounded-md hover:bg-sky-600 dark:hover:bg-sky-800 hover:text-white">
                              <Link
                                className="flex items-center gap-x-4"
                                to="/p-admin"
                              >
                                <span className="text-4xl">
                                  <GrUserAdmin />
                                </span>
                                <span>پنل مدیریت</span>
                              </Link>
                            </li>
                          )}
                          <li className="rounded-md hover:bg-sky-600 dark:hover:bg-sky-800 hover:text-white">
                            <Link
                              className="flex items-center gap-x-4"
                              to="/my-account"
                            >
                              <span className="text-4xl">
                                <HiOutlineHome />
                              </span>
                              <span>پیشخوان</span>
                            </Link>
                          </li>
                          <li className="rounded-md hover:bg-sky-600 dark:hover:bg-sky-800 hover:text-white">
                            <Link
                              className="flex items-center gap-x-4"
                              to="/my-account/buyed"
                            >
                              <span className="text-4xl">
                                <HiOutlineFolder />
                              </span>
                              <span>دوره های من</span>
                            </Link>
                          </li>
                          <li className="rounded-md hover:bg-sky-600 dark:hover:bg-sky-800 hover:text-white">
                            <Link
                              className="flex items-center gap-x-4"
                              to="/my-account/tickets"
                            >
                              <span className="text-4xl">
                                <HiOutlineChatBubbleLeftEllipsis />
                              </span>
                              <span>تیکت های من</span>
                            </Link>
                          </li>
                          <li className="rounded-md hover:bg-sky-600 dark:hover:bg-sky-800 hover:text-white">
                            <Link
                              className="flex items-center gap-x-4"
                              to="/my-account/edit-account"
                            >
                              <span className="text-4xl">
                                <HiOutlineUser />
                              </span>
                              <span>جزئیات حساب</span>
                            </Link>
                          </li>
                        </ul>
                        <Button
                          className="flex w-full items-center gap-x-4 pr-4 py-[.8rem] mt-4.5 mb-0.5 rounded-md hover:bg-red-600/85 dark:hover:bg-red-700/60 hover:text-white"
                          onClick={logoutUser}
                        >
                          <span className="text-4xl">
                            <HiPower />
                          </span>
                          <div>خروج</div>
                        </Button>
                      </div>
                    </div>
                  </Link>
                </>
              ) : (
                <Link
                  to="/login"
                  className="flex-center w-[4.5rem] h-[4.5rem] text-slate-900 dark:text-white text-5xl rounded-lg mr-4 transition-all duration-200"
                >
                  <HiOutlineArrowLeftEndOnRectangle />
                </Link>
              )}
            </div>
          </div>
        </div>
      </header>
      <div
        onClick={overlayOnClick}
        className={overlay ? "overlay overlay--visible" : "overlay"}
      ></div>
    </>
  );
}
