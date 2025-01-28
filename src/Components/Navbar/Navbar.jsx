import React, { useContext, useState, useEffect } from "react";
import AuthContext from "../../context/authContext";
import Input from "../Form/Input";
import { Link, useNavigate } from "react-router-dom";
import { GrUserAdmin } from "react-icons/gr";
import { Collapse, Card } from "@material-tailwind/react";
import {
  HiBars3,
  HiChevronLeft,
  HiChevronRight,
  HiMagnifyingGlass,
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

// import Topbar from "../Topbar/Topbar"

export default function Navbar() {
  const [dark, setDark] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [openCollapse, setOpenCollapse] = useState(false);
  const [overlay, setOverlay] = useState(false);

  const [allMenus, setAllMenus] = useState([]);

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
      {/* <Topbar /> */}
      <div
        className={`nav fixed top-0 bottom-0 w-[263px] min-h-screen px-9 bg-white dark:bg-darkColor overflow-y-auto transition-all z-50 lg:hidden ${
          navOpen ? "right-0" : "-right-[263px]"
        }`}
      >
        <div className="flex items-center text-[1.7rem] justify-between gap-x-4 h-20 mb-3 text-darkColor dark:text-white px-1 pt-16 pb-14">
          {authContext.userInfos.name}
          <div className="flex items-center gap-x-4 text-4xl text-blue-gray-500 dark:text-white">
            <div
              className="flex-center p-4 rounded-xl toggle-theme cursor-pointer bg-blue-gray-50 dark:bg-white/5"
              onClick={() => themeHandler()}
            >
              <HiOutlineSun className="hidden dark:inline-block" />
              <HiOutlineMoon className="inline-block dark:hidden" />
            </div>
            <div
              className="flex-center p-4 rounded-xl cursor-pointer bg-blue-gray-50 dark:bg-white/5"
              onClick={navOpenHandler}
            >
              <HiChevronRight />
            </div>
          </div>
        </div>
        <div className="w-full h-px bg-gray-300 dark:bg-white/10"></div>
        <ul className="child:transition-all px-3 child:pr-2.5 space-y-9 mt-8 text-2xl text-darkColor dark:text-white border-b-darkBox/30">
          {authContext.userInfos.role === "ADMIN" && (
            <li>
              <Link
                className="flex items-center justify-between hover:text-light-blue-500"
                to="/p-admin"
              >
                <span>پنل مدیریت</span>
                <HiChevronRight className="text-2xl rotate-180" />
              </Link>
            </li>
          )}
          <li>
            <Link
              className="flex items-center justify-between hover:text-light-blue-500"
              to="/my-account"
            >
              <span>پیشخوان</span>
              <HiChevronRight className="text-2xl rotate-180" />
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center justify-between hover:text-light-blue-500"
              to="/my-account/buyed"
            >
              <span>دوره های من</span>
              <HiChevronRight className="text-2xl rotate-180" />
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center justify-between hover:text-light-blue-500"
              to="/my-account/tickets"
            >
              <span>تیکت های من</span>
              <HiChevronRight className="text-2xl rotate-180" />
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center justify-between hover:text-light-blue-500"
              to="/my-account/edit-account"
            >
              <span>جزئیات حساب</span>
              <HiChevronRight className="text-2xl rotate-180" />
            </Link>
          </li>
          <div className="w-full h-px bg-gray-300 dark:bg-white/10"></div>
          {allMenus.map((menu) => (
            <li key={menu._id}>
              <Link  to={`/category-info/${menu.href}/1`} className="flex items-center justify-between hover:text-light-blue-500">
                <span>{menu.title}</span>
                <HiChevronRight className="text-2xl rotate-180" />
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <header className="md:fixed md:flex md:top-5 md:right-0 md:left-0 z-40 justify-between items-center w-full md:w-[95%] h-28 2xl:h-32 md:mx-auto md:rounded-2xl shadow-md bg-gradient-to-tr from-light-blue-900/20 via-darkBox/30 to-light-blue-900/20 md:from-lightishBlue-400/10 md:via-darkBox/40 via-60% md:to-lightishBlue-400/10 backdrop-blur-[3px]">
        <div className="w-full h-full">
          <div className="h-full flex items-center justify-between px-12 py-4">
            <div
              className="md:hidden flex-center p-4 text-lightishBlue-900 dark:text-white cursor-pointer text-5xl"
              onClick={navOpenHandler}
            >
              <HiBars3 />
            </div>

            <div className="flex gap-x-6 xl:gap-x-14">
              <Link
                to={"/"}
                className="text-light-blue-700 dark:text-light-blue-400 mb-1 2xl:mb-0"
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

              <ul className="hidden md:flex gap-x-7 xl:gap-x-12 text-lightishBlue-900 dark:text-white text-[1.7rem] xl:text-[1.8rem] font-EstedadMedium dark:font-EstedadLight">
                <li className="main-header__item flex-center relative">
                  <Link to={"/"} className="flex-center">
                    صفحه اصلی
                  </Link>
                </li>
                <li className="main-header__item flex-center relative">
                  <span className="cursor-pointer">
                    دوره های آموزشی
                    <ul className="main-header__dropdown absolute top-24 right-0 w-96 b bg-gradient-to-t from-darkBox/60 via-lightishBlue-400/20 via-60% to-transparent backdrop-blur-[5px] text-darkColor dark:text-white transition-all shadow-2xl rounded-4xl py-4 border-b-4 border-r-4 border-light-blue-700 dark:border-light-blue-400 delay-75">
                      {allMenus.map((menu) => (
                        <li
                          className="header__item hover:bg-light-blue-800/60 rounded-l-sm rounded-r-2xl mx-4"
                          key={menu._id}
                        >
                          <Link
                            to={`/category-info/${menu.href}/1`}
                            className="flex items-center justify-between py-2.5 px-4 text-[1.6rem] text-zinc-600 duration-200"
                          >
                            {menu.title}
                            {menu.submenus.length !== 0 && (
                              <>
                                <HiChevronLeft className="mt-1 xl:mr-1" />
                                <ul className="header__dropdown absolute top-0 right-[23.6rem] h-[27.9rem] overflow-y-auto w-96 b bg-gradient-to-t from-darkBox/60 via-lightishBlue-400/20 via-60% to-transparent backdrop-blur-[5px] text-darkColor dark:text-white transition-all shadow-2xl rounded-4xl py-4 border-t-4 border-l-4 border-light-blue-700 dark:border-light-blue-400 delay-150">
                                  {menu.submenus.map((submenu) => (
                                    <li key={menu._id}>
                                      <Link
                                        to={submenu.href}
                                        className="block px-8 py-2 text-[1.6rem] text-zinc-600 duration-200"
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

            <div className="flex items-center text-lightishBlue-900 dark:text-white">
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

              {authContext.isLoggedIn ? (
                <>
                  <Link
                    to="#"
                    className={`relative hidden md:flex-center items-center justify-center p-4 rounded-xl mr-4 transition-all duration-200 ${
                      openCollapse && "z-40 bg-white/10 dark:bg-white/5"
                    }`}
                    onClick={toggleOpen}
                  >
                    <HiOutlineUser className="text-[2.75rem]" />
                    <Collapse
                      className="absolute top-32 left-0 w-96 z-50"
                      open={openCollapse}
                    >
                      <Card className="pt-8 pb-6 px-6 mx-auto bg-white dark:bg-darkBox text-darkColor dark:text-white/80">
                        <span className="text-3xl pr-4 pb-10 pt-3 border-b dark:border-b-white/15 border-b-darkBox/30">
                          {authContext.userInfos.name}
                        </span>
                        <ul className="child:transition-all child:pr-4 child:py-4 py-4 border-b dark:border-b-white/15 border-b-darkBox/30">
                          {authContext.userInfos.role === "ADMIN" && (
                            <li className="rounded-md hover:bg-light-blue-600 dark:hover:bg-light-blue-800 hover:text-white">
                              <Link
                                className="flex items-center gap-x-3"
                                to="/p-admin"
                              >
                                <span className="text-4xl">
                                  <GrUserAdmin />
                                </span>
                                <span>پنل مدیریت</span>
                              </Link>
                            </li>
                          )}
                          <li className="rounded-md hover:bg-light-blue-600 dark:hover:bg-light-blue-800 hover:text-white">
                            <Link
                              className="flex items-center gap-x-3"
                              to="/my-account"
                            >
                              <span className="text-4xl">
                                <HiOutlineHome />
                              </span>
                              <span>پیشخوان</span>
                            </Link>
                          </li>
                          <li className="rounded-md hover:bg-light-blue-600 dark:hover:bg-light-blue-800 hover:text-white">
                            <Link
                              className="flex items-center gap-x-3"
                              to="/my-account/buyed"
                            >
                              <span className="text-4xl">
                                <HiOutlineFolder />
                              </span>
                              <span>دوره های من</span>
                            </Link>
                          </li>
                          <li className="rounded-md hover:bg-light-blue-600 dark:hover:bg-light-blue-800 hover:text-white">
                            <Link
                              className="flex items-center gap-x-3"
                              to="/my-account/tickets"
                            >
                              <span className="text-4xl">
                                <HiOutlineChatBubbleLeftEllipsis />
                              </span>
                              <span>تیکت های من</span>
                            </Link>
                          </li>
                          <li className="rounded-md hover:bg-light-blue-600 dark:hover:bg-light-blue-800 hover:text-white">
                            <Link
                              className="flex items-center gap-x-3"
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
                          className="flex items-center gap-x-3 pr-4 py-[1rem] mt-4 rounded-md hover:bg-red-600/85 dark:hover:bg-red-700/60 hover:text-white"
                          onClick={logoutUser}
                        >
                          <span className="text-4xl">
                            <HiPower />
                          </span>
                          <div>خروج</div>
                        </Button>
                      </Card>
                    </Collapse>
                  </Link>
                </>
              ) : (
                <Link
                  to="/login"
                  className="flex-center w-[4.5rem] h-[4.5rem] bg-gray-300/40 dark:bg-white/10 text-darkColor dark:text-white text-5xl rounded-lg mr-4 transition-all duration-200"
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
