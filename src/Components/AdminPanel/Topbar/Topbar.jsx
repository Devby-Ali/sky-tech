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

  const [adminInfo, setAdminInfo] = useState({})

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
            console.log(userData)
            setAdminInfo(userData);
          });
      }
    }, []);


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

    <header className="z-50 justify-between items-center h-[8rem] 2xl:h-36 shadow-lg bg-gradient-to-tr from-lightishBlue-400/50 via-darkBox/80 via-60% to-lightishBlue-400/50 backdrop-blur-[4px]">
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

            <div className="flex-center p-3 bg-gray-300/40 dark:bg-white/10 text-darkColor dark:text-white text-4xl rounded-lg cursor-pointer">

            <HiOutlineBell />
            </div>

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
              className="flex-center p-3 bg-gray-300/40 dark:bg-white/10 text-darkColor dark:text-white text-4xl mr-4 rounded-lg"
            >
              <HiOutlineShoppingBag />
            </Link>

            <div className="flex items-center gap-x-3 px-4 py-3 rounded-lg mr-4 z-40 bg-gray-300/40 dark:bg-white/10 text-darkColor dark:text-white">
            <Link
              to="#"
              className=""
            >
              {adminInfo.name}
            </Link>
            <HiOutlineUser className="text-4xl" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
