import { Card, Collapse } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { GoTriangleDown } from "react-icons/go";
import {
  HiOutlineBell,
  HiOutlineShoppingBag,
  HiOutlineUser,
} from "react-icons/hi2";
import { Link } from "react-router-dom";

export default function Topbar() {
  const [adminInfo, setAdminInfo] = useState({});
  const [adminNotif, setAdminNotif] = useState({});
  const [openCollapse, setOpenCollapse] = useState(false);

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

  const toggleOpen = () => {
    setOpenCollapse((cur) => !cur);
  };

  return (
    // <div className="container-fluid">
    //   <div className="container">
    //     <div className="home-header">
    //       <div className="home-right">
    //         <div className="home-searchbar">
    //           <input type="text" className="search-bar" placeholder="جستجو..." />
    //         </div>
    //         <div className="home-notification">
    //           <button type="button">
    //             <i className="far fa-bell"></i>
    //           </button>
    //         </div>
    //         <div className="home-notification-modal">
    //           <ul className="home-notification-modal-list">
    //             <li className="home-notification-modal-item">
    //               <span className="home-notification-modal-text">پیغام ها</span>
    //               <label className="switch">
    //                 <input type="checkbox" checked />
    //                 <span className="slider round"></span>
    //               </label>
    //             </li>
    //             <li className="home-notification-modal-item">
    //               <span className="home-notification-modal-text">پیغام ها</span>
    //               <label className="switch">
    //                 <input type="checkbox" checked />
    //                 <span className="slider round"></span>
    //               </label>
    //             </li>
    //             <li className="home-notification-modal-item">
    //               <span className="home-notification-modal-text">پیغام ها</span>
    //               <label className="switch">
    //                 <input type="checkbox" checked />
    //                 <span className="slider round"></span>
    //               </label>
    //             </li>
    //             <li className="home-notification-modal-item">
    //               <span className="home-notification-modal-text">پیغام ها</span>
    //               <label className="switch">
    //                 <input type="checkbox" checked />
    //                 <span className="slider round"></span>
    //               </label>
    //             </li>
    //           </ul>
    //         </div>
    //       </div>
    //       <div className="home-left">
    //         <div className="home-profile">
    //           <div className="home-profile-image">
    //             <a href="#">
    //               <img src="/images/profile.png" alt="" />
    //             </a>
    //           </div>
    //           <div className="home-profile-name">
    //             <a href="#">محمدامین سعیدی راد</a>
    //           </div>
    //           <div className="home-profile-icon">
    //             <i className="fas fa-angle-down"></i>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <>
      <header className="justify-between items-center h-[8rem] 2xl:h-36 shadow-lg bg-gradient-to-tr from-lightishBlue-400/50 via-darkBox/80 via-60% to-lightishBlue-400/50 backdrop-blur-[4px] z-40">
        <div className="w-full h-full">
          <div className="h-full flex items-center justify-between px-6 lg:px-12 xl:px-24 py-4">
            <div className="flex items-center gap-x-6 2xl:gap-x-8">
              <form action="#" className="relative w-96">
                <input
                  type="text"
                  className="text-2xl w-full border border-gray-400 dark:border-white/30 bg-transparent py-3 pr-6 pl-16 rounded-md"
                  placeholder="جستجو ..."
                />
                <FaSearch className="absolute left-4 top-4 text-3xl text-darkColor/70 dark:text-white/60 cursor-pointer" />
              </form>

              <div
                className={`relative flex items-center justify-center p-3 text-darkColor dark:text-white text-4xl rounded-lg transition-all duration-200 cursor-pointer ${
                  openCollapse
                    ? "bg-white dark:bg-[#333c4c]"
                    : "bg-gray-300/40 dark:bg-white/10"
                }`}
                onClick={toggleOpen}
              >
                <HiOutlineBell />
                <Collapse
                  className="absolute top-[5.9rem] 2xl:top-[6.4rem] w-[350px]"
                  open={openCollapse}
                >
                  <Card className="py-2.5 px-4 mx-auto bg-white dark:bg-darkBox text-darkColor dark:text-white/80 rounded-b-lg rounded-t-none">
                    <div className="flex items-center justify-between gap-x-12 text-3xl bg-darkBox/30 dark:bg-white/10 my-2 px-6 py-4 rounded-md">
                      <span className="truncate hover:text-clip">blablabl</span>
                      <a className="text-2xl" href="javascript:void(0)">دیدم</a>
                    </div>
                    <div className="flex items-center justify-between gap-x-12 text-3xl bg-darkBox/30 dark:bg-white/10 my-2 px-6 py-4 rounded-md">
                      <span className="truncate hover:text-clip">blablabl</span>
                      <a className="text-2xl" href="javascript:void(0)">دیدم</a>
                    </div>
                    <div className="flex items-center justify-between gap-x-12 text-3xl bg-darkBox/30 dark:bg-white/10 my-2 px-6 py-4 rounded-md">
                      <span className="truncate hover:text-clip">blablabl</span>
                      <a className="text-2xl" href="javascript:void(0)">دیدم</a>
                    </div>
                    <div className="flex items-center justify-between gap-x-12 text-3xl bg-darkBox/30 dark:bg-white/10 my-2 px-6 py-4 rounded-md">
                      <span className="truncate hover:text-clip">blablabl</span>
                      <a className="text-2xl" href="javascript:void(0)">دیدم</a>
                    </div>
                  </Card>
                  {/* {adminNotif.map((notification) => (
                    <>
                      <Card className="py-8 px-10 mx-auto bg-white dark:bg-darkBox text-darkColor dark:text-white/80 rounded-b-lg rounded-t-none">
                        <span className="text-2xl">{notification}</span>
                        <a href="javascript:void(0)">دیدم</a>
                      </Card>
                    </>
                  ))} */}
                </Collapse>
              </div>

              {/* <Link
                    to="#"
                    className={`relative flex items-center justify-center p-4 text-darkColor dark:text-white rounded-3xl mr-4 transition-all duration-200 ${
                      openCollapse
                        ? "z-40 bg-white dark:bg-[#333c4c]"
                        : "z-0 bg-gray-300/40 dark:bg-white/10"
                    }`}
                    onClick={toggleOpen}
                  >
                    <HiOutlineUser className="text-[2.75rem]" />
                    <Collapse
                      className="absolute top-32 left-0 w-96 z-50"
                      open={openCollapse}
                    >
                      <Card className="py-8 px-10 mx-auto bg-white dark:bg-darkBox text-darkColor dark:text-white/80">
                        <span className="text-2xl">
                          {authContext.userInfos.name}
                        </span>
                      </Card>
                    </Collapse>
                  </Link> */}

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

            <div className="flex items-center">
              <Link
                to="#"
                className="flex-center p-3 bg-gray-300/40 dark:bg-white/10 text-darkColor dark:text-white text-4xl rounded-lg"
              >
                <HiOutlineShoppingBag />
              </Link>

              <div className="flex items-center gap-x-3 px-4 py-3 rounded-lg mr-4 bg-gray-300/40 dark:bg-white/10 text-darkColor dark:text-white">
                <Link to="#" className="">
                  {adminInfo.name}
                </Link>
                <HiOutlineUser className="text-4xl" />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
