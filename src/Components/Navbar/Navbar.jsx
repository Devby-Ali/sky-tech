import React, { useContext, useState, useEffect } from "react";
import AuthContext from "../../context/authContext";
import { Link } from "react-router-dom";
import { GoTriangleDown } from "react-icons/go";
import { IoSunnyOutline } from "react-icons/io5";
import { BsMoon } from "react-icons/bs";
import { RiShoppingCartFill } from "react-icons/ri";
import { SiMicrosoftacademic } from "react-icons/si";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

export default function Navbar() {
  const [allMenus, setAllMenus] = useState([]);

  const [navOpen, setNavOpen] = useState(false);

  const navOpenHandler = () => {
    setNavOpen(!navOpen);
  };

  const authContext = useContext(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:4000/v1/menus`)
      .then((res) => res.json())
      .then((menus) => {
        console.log(menus);
        setAllMenus(menus);
      });
  }, []);

  return (
    <>
      <header className="fixed hidden lg:flex top-7 right-0 left-0 z-50 justify-between items-center w-[98%] lg:w-[95%] h-32 mx-auto rounded-4xl bg-gradient-to-tr from-lightishBlue-400/80 via-teal-600/50 to-purple-500/80 backdrop-blur-[4px]">
        <div className="container">
          <div className="flex items-center justify-between px-8 py-4">
            <div className="flex gap-x-10 xl:gap-x-14">
              <Link to={"/"} className="flex-center text-lightishBlue-600">
                <SiMicrosoftacademic className="w-16 h-16" />
                <span className="font-MikhakWoff2one text-5xl mr-2">Cyan</span>
              </Link>

              <ul className="flex gap-x-10">
                <li className="main-header__item flex-center relative">
                  <Link to={"/"} className="flex-center text-zinc-800">
                    صفحه اصلی
                  </Link>
                </li>

                {allMenus.map((menu) => (
                  <li key={menu._id} className="main-header__item flex-center relative">
                    <Link to={menu.href} className="flex-center text-zinc-800 hover:text-lightishBlue-500">
                      {menu.title}
                      {menu.submenus.length !== 0 && (
                        <>
                          <GoTriangleDown className="mt-1 mx-1" />
                          <ul className="main-header__dropdown absolute top-24 left-0 right-0 w-96 bg-white transition-all duration-200 shadow-2xl rounded-lg py-4">
                            {
                              menu.submenus.map(submenu => (
                                <li key={menu._id}>
                                <Link
                                  to={submenu.href}
                                  className="block py-2 px-8 text-2xl text-zinc-600 transition-all duration-200 text-gray-800"
                                >
                                  {submenu.title}
                                </Link>
                              </li>
                              ))
                            }
                          </ul>
                        </>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center">
              <div className="flex-center w-16 h-16 bg-lightishBlue-500 text-white text-4xl rounded-lg toggle-theme cursor-pointer">
                <IoSunnyOutline className="inline-block dark:hidden w-8 h-8" />

                <BsMoon className="hidden dark:inline-block w-8 h-8" />
              </div>
              <Link
                to="#"
                className="flex-center w-16 h-16 bg-gray-200 text-4xl mr-4 rounded-lg"
              >
                <RiShoppingCartFill />
              </Link>

              {authContext.isLoggedIn ? (
                <Link
                  to="#"
                  className="flex items-center h-16 px-3 bg-lightishBlue-500 rounded-lg mr-4 transition-all duration-200 text-white"
                >
                  <span className="text-xl">{authContext.userInfos.name}</span>
                </Link>
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

      {/* Mobile Menu */}

      {/* <div className="flex lg:hidden fixed w-full z-30 items-center justify-between h-32 px-4 bg-gradient-to-tr from-purple-700/80 via-teal-800/80 to-lightishBlue-600/80 backdrop-blur-[4px]"> */}
      <div className="flex items-center justify-between lg:hidden fixed mx-auto w-full h-32 z-30 px-4 lg:px-12 bg-gradient-to-tr from-purple-700/80 via-teal-800/80 to-lightishBlue-600/80 backdrop-blur-[4px]">
        <div
          className="bg-gray-300/20 p-[10px] rounded-full"
          onClick={navOpenHandler}
        >
          <IoMenu className="text-white text-5xl cursor-pointer" />
        </div>

        <div
          className={`nav fixed flex-col top-0 bottom-0 w-[256px] min-h-screen pt-3 px-4 bg-teal-300 overflow-y-auto transition-all ${
            navOpen ? "right-0" : "-right-[256px]"
          }`}
        >
          <div className="flex items-center gap-x-14 h-20 justify-between mb-8 border-b border-b-gray-100 px-2 p-14 ">
            <Link
            to={"/"}
              onClick={navOpenHandler}
              className="flex-center text-lightishBlue-500"
            >
              <SiMicrosoftacademic className="w-16 h-16" />
            </Link>
            <div className="bg-gray-300/70 p-[10px] rounded-full">
              <IoIosArrowForward
                onClick={navOpenHandler}
                className="text-gray-600 text-5xl"
              />
            </div>
          </div>

          {/* <div className="flex text-xl items-center bg-orange-200/20 text-amber-200 mb-4 pr-2.5 rounded-md">
            <a onClick={navOpenHandler} className="flex items-center gap-x-2 text-gray-700">
              خانه
            </a>
          </div> */}

          <ul className="child-hover:text-amber-200 child:transition-all child:pr-2.5 space-y-12 mt-12">
            {
              allMenus.map((menu) => (
                <li key={menu._id} className="flex items-center justify-between">
                <Link
                  to={menu.href}
                  className="flex items-center gap-x-2 text-gray-700"
                >
                  {menu.title}
                </Link>
                <IoIosArrowBack className="text-gray-700 text-3xl" />
              </li>
              ))
            }
          </ul>

          {/* <div className="flex flex-col items-start gap-y-6 text-orange-300 py-8 px-2.5 mt-8 border-t border-t-gray-100">

          </div> */}
        </div>

        <div className="logo">
          <Link to={"/"} className="flex-center text-lightishBlue-300">
            <SiMicrosoftacademic className="w-16 h-16" />
          </Link>
        </div>
        <div className="flex gap-x-4">
          <Link to="#" className="bg-gray-300/20 p-[10px] rounded-full">
            <RiShoppingCartFill className="text-5xl text-white" />
          </Link>
          <Link to={"#"} className="bg-gray-300/20 p-[10px] rounded-full">
            <CgProfile className="text-5xl text-white" />
          </Link>
        </div>
      </div>
      <div
        onClick={navOpenHandler}
        className={navOpen ? "overlay overlay--visible" : "overlay"}
      ></div>
    </>
  );
}
