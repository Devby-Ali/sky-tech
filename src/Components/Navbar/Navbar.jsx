import React, { useContext, useState, useEffect } from "react";
import AuthContext from "../../context/authContext";
import Input from "../Form/Input";
import { Link } from "react-router-dom";
import { GoTriangleDown } from "react-icons/go";
import { IoSunnyOutline } from "react-icons/io5";
import { BsMoon } from "react-icons/bs";
import { RiShoppingCartFill } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { PiMagnifyingGlass } from "react-icons/pi";
import { Collapse, Card } from "@material-tailwind/react";
import { HiOutlineUser } from "react-icons/hi2";

export default function Navbar() {
  const [dark, setDark] = useState(false);

  const [allMenus, setAllMenus] = useState([]);

  const [navOpen, setNavOpen] = useState(false);

  const [open, setOpen] = useState(false);

  const [overlay, setOverlay] = useState(false);

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
    setOpen((cur) => !cur);
    setOverlay(!overlay);
  };

  const overlayOnClick = () => {
    setNavOpen(false);
    setOpen(false);
    setOverlay(false);
  };

  const authContext = useContext(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:4000/v1/menus`)
      .then((res) => res.json())
      .then((menus) => {
        setAllMenus(menus);
      });
  }, []);

  const navOpenHandler = () => {
    setNavOpen(!navOpen);
    setOverlay(!overlay);
  };

  return (
    <>
      <Collapse className="absolute top-48 left-0 w-96 z-50" open={open}>
        <Card className="py-8 px-10 mx-auto bg-white dark:bg-darkBox text-darkColor dark:text-white/80">
          <span className="text-2xl">{authContext.userInfos.name}</span>
        </Card>
      </Collapse>

      <div
        className={`nav fixed flex-col top-0 bottom-0 w-[263px] min-h-screen px-7 bg-white dark:bg-darkColor overflow-y-auto transition-all z-50 ${
          navOpen ? "right-0" : "-right-[263px]"
        }`}
      >
        <div className="flex items-center justify-between gap-x-14 h-20 mb-3 text-darkColor dark:text-white px-1 py-16">
          <Link
            to={"/"}
            onClick={navOpenHandler}
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
          <div className="flex items-center gap-x-6 text-4xl text-blue-gray-500 dark:text-white">
            <div
              className="flex-center p-5 rounded-full toggle-theme cursor-pointer bg-blue-gray-50 dark:bg-darkBox"
              onClick={() => themeHandler()}
            >
              <IoSunnyOutline className="hidden dark:inline-block" />

              <BsMoon className="inline-block dark:hidden" />
            </div>
            <div
              className="flex-center p-5 rounded-full cursor-pointer bg-blue-gray-50 dark:bg-darkBox"
              onClick={navOpenHandler}
            >
              <IoIosArrowForward />
            </div>
          </div>
        </div>
        <div className="w-full h-px bg-gray-300 dark:bg-white/10"></div>
        <form action="https://" method="get">
          <label className="relative py-5 mt-10 block bg-gray-100 text-gray-700 dark:bg-white/5 dark:text-white text-2xl rounded-tl-4xl rounded-br-4xl">
            <input
              className="bg-transparent pr-4 pl-12 w-72 h-full outline-none"
              type="text"
              placeholder="چیو میخوای یاد بگیری؟"
              name="s"
            />
            <button
              className="absolute left-4 top-0 bottom-0 my-auto text-gray-700 dark:text-white"
              type="submit"
              role="button"
            >
              <div className="text-4xl">
                <PiMagnifyingGlass />
              </div>
            </button>
          </label>
        </form>

        <ul className="child:transition-all child:pr-2.5 space-y-12 mt-12 text-darkColor dark:text-white ">
          {allMenus.map((menu) => (
            <li key={menu._id} className="flex items-center justify-between">
              <Link to={menu.href} className="flex items-center gap-x-2">
                {menu.title}
              </Link>
              <IoIosArrowBack className="text-3xl" />
            </li>
          ))}
        </ul>
      </div>

      <header
        className="lg:fixed lg:flex lg:top-7 lg:right-0 lg:left-0 z-40 justify-between items-center w-full lg:w-[95%] h-[8.5rem] md:h-40 2xl:h-36 lg:mx-auto lg:rounded-4xl shadow-lg bg-gradient-to-tr from-light-blue-900 via-darkBox to-light-blue-900 lg:from-lightishBlue-400/50 lg:via-darkBox/80 via-60% lg:to-lightishBlue-400/50 lg:backdrop-blur-[4px]"
      >
        <div className="w-full h-full">
          <div className="h-full flex items-center justify-between px-12 xl:px-24 py-4">
            <div
              className="lg:hidden bg-gray-300 dark:bg-white/10 text-gray-500 dark:text-white cursor-pointer text-5xl p-4 rounded-full"
              onClick={navOpenHandler}
            >
              <IoMenu />
            </div>

            <div className="flex gap-x-14">
              <Link to={"/"} className="text-light-blue-500">
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

              <ul className="hidden lg:flex gap-x-12 text-white text-[1.7rem]">
                <li className="main-header__item flex-center relative">
                  <Link to={"/"} className="flex-center text-da">
                    صفحه اصلی
                  </Link>
                </li>

                {allMenus.map((menu) => (
                  <li
                    key={menu._id}
                    className="main-header__item flex-center relative"
                  >
                    <Link
                      to={menu.href}
                      className="flex-center hover:text-light-blue-400"
                    >
                      {menu.title}
                      {menu.submenus.length !== 0 && (
                        <>
                          <GoTriangleDown className="mt-1 mx-1" />
                          <ul className="main-header__dropdown absolute top-24 left-0 right-0 w-96 bg-white dark:bg-darkBox text-darkColor dark:text-white transition-all shadow-2xl rounded-4xl py-4 border-b-8 border-r-8 border-light-blue-700 dark:border-light-blue-400">
                            {menu.submenus.map((submenu) => (
                              <li key={menu._id}>
                                <Link
                                  to={submenu.href}
                                  className="block py-2 px-8 text-[1.6rem] text-zinc-600 duration-200"
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
            </div>

            <div className="flex items-center">
              <div
                className="hidden lg:flex-center w-16 h-16 bg-lightishBlue-500 text-white text-4xl rounded-lg toggle-theme cursor-pointer"
                onClick={() => themeHandler()}
              >
                <IoSunnyOutline className="hidden dark:inline-block w-8 h-8" />

                <BsMoon className="inline-block dark:hidden w-8 h-8 " />
              </div>
              <Link
                to="#"
                className="flex-center w-16 h-16 bg-gray-200 text-4xl mr-4 rounded-lg"
              >
                <RiShoppingCartFill />
              </Link>

              {authContext.isLoggedIn ? (
                <>
                  <Link
                    to="#"
                    className="relative flex items-center justify-center h-16 w-16 bg-lightishBlue-500 rounded-lg mr-4 transition-all duration-200 text-white"
                    onClick={toggleOpen}
                  >
                    <HiOutlineUser className="text-4xl" />
                  </Link>
                </>
              ) : (
                <Link
                  to="/login"
                  className="flex items-center h-16 px-3 bg-lightishBlue-500 rounded-lg mr-4 transition-all duration-200 text-white"
                >
                  <span className="text-xl">ورود | ثبت نام</span>
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
