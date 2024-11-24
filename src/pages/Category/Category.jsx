import React from "react";
// import Topbar from "./../../Components/Topbar/Topbar";
import Navbar from "./../../Components/Navbar/Navbar";
import Footer from "./../../Components/Footer/Footer";
import CourseBox from "../../Components/CourseBox/CourseBox";
import Pagination from "../../Components/Pagination/Pagination";
import { TbBorderAll } from "react-icons/tb";
import { FaAlignLeft } from "react-icons/fa";
import { GoTriangleDown } from "react-icons/go";
import { FaSearch } from "react-icons/fa";

export default function Category() {
  return (
    <>
      {/* <Topbar /> */}
      <Navbar />

      <section className="pt-56">
        <div className="container">
          <div className="flex justify-between items-center p-9 shadow-normal text-darkBox dark:text-white bg-white dark:bg-darkBox rounded-2xl mb-12">
            <div className="flex items-center">
              <div className="courses-top-bar__row-btn py-3 px-4 flex-center w-16 h-14 rounded-md text-black cursor-pointer border border-gray-500 ml-4 courses-top-bar__icon--active">
                <TbBorderAll />
              </div>
              <div className="courses-top-bar__column-btn py-3 px-4 flex-center w-16 h-14 rounded-md text-darkColor dark:text-white cursor-pointer border border-gray-500 ml-4">
                <FaAlignLeft />
              </div>

              <div className="courses-top-bar__selection relative cursor-pointer">
                <span className="courses-top-bar__selection-title flex items-center h-14 rounded-md py-3 px-8 border border-gray-500 text-zinc-500 transition-all hover:bg-lightishBlue-500 hover:text-white">
                  مرتب سازی پیش فرض
                  <GoTriangleDown className="mr-2" />
                </span>
                <ul className="courses-top-bar__selection-list absolute shadow-normal bg-gray-300 dark:bg[#333c4c] w-full py-3 z-50 transition-all">
                  <li className="text-darkColor/90 text-xl py-4 px-5 transition-all hover:bg-white courses-top-bar__selection-item--active">
                    مرتب سازی پیش فرض
                  </li>
                  <li className="text-darkColor/90 text-xl py-4 px-5 transition-all hover:bg-white">
                    مرتب سازی بر اساس محبوبیت
                  </li>
                  <li className="text-darkColor/90 text-xl py-4 px-5 transition-all hover:bg-white">
                    مرتب سازی بر اساس امتیاز
                  </li>
                  <li className="text-darkColor/90 text-xl py-4 px-5 transition-all hover:bg-white">
                    مرتب سازی بر اساس آخرین
                  </li>
                  <li className="text-darkColor/90 text-xl py-4 px-5 transition-all hover:bg-white">
                    مرتب سازی بر اساس ارزان ترین
                  </li>
                  <li className="text-darkColor/90 text-xl py-4 px-5 transition-all hover:bg-white">
                    مرتب سازی بر اساس گران ترین
                  </li>
                </ul>
              </div>
            </div>

            <div className="courses-top-bar__left">
              <form action="#" className="relative w-96">
                <input
                  type="text"
                  className="text-2xl w-full border border-gray-500 bg-transparent py-3 pr-6 pl-16 rounded-md"
                  placeholder="جستجوی دوره ..."
                />
                <FaSearch className="absolute left-4 top-4 text-3xl text-darkColor/90 dark:text-white/70 cursor-pointer" />
              </form>
            </div>
          </div>

          <div className="courses-content">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 sm:gap-11">
              <CourseBox />
              <CourseBox />
              <CourseBox />
              <CourseBox />
            </div>
          </div>

          <Pagination />
        </div>
      </section>

      <Footer />
    </>
  );
}
