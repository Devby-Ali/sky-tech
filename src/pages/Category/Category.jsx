import React, { useEffect, useState } from "react";
// import Topbar from "./../../Components/Topbar/Topbar";
import Navbar from "./../../Components/Navbar/Navbar";
import CourseBox from "../../Components/CourseBox/CourseBox";
import Pagination from "../../Components/Pagination/Pagination";
import Footer from "./../../Components/Footer/Footer";
import { TbBorderAll } from "react-icons/tb";
import { FaAlignLeft } from "react-icons/fa";
import { GoTriangleDown } from "react-icons/go";
import { FaSearch } from "react-icons/fa";
import { useParams } from "react-router-dom";

export default function Category() {
  const [courses, setCourses] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/v1/courses/category/${categoryName}`)
      .then((res) => res.json())
      .then((allCourses) => {
        setCourses(allCourses);
      });
  }, [categoryName]);

  return (
    <>
      {/* <Topbar /> */}
      <Navbar />

      <section className="pt-56">
        <div className="container">
          {courses.length ? (
            <>
              <div className="flex justify-between items-center p-9 shadow-normal text-darkBox dark:text-white bg-white dark:bg-darkBox rounded-2xl mb-12">
                <div className="flex items-center">
                  <div className="courses-top-bar__row-btn flex-center text-4xl w-20 h-14 rounded-md text-darkColor/70 dark:text-white/60 cursor-pointer border border-gray-400 dark:border-white/30 ml-4 courses-top-bar__icon--active">
                    <TbBorderAll />
                  </div>
                  <div className="courses-top-bar__column-btn flex-center text-3xl w-20 h-14 rounded-md text-darkColor/70 dark:text-white/60 cursor-pointer border border-gray-400 dark:border-white/30 ml-4">
                    <FaAlignLeft />
                  </div>

                  <div className="courses-top-bar__selection relative cursor-pointer">
                    <span className="courses-top-bar__selection-title flex items-center h-14 rounded-md py-3 px-8 border border-gray-400 dark:border-white/30 text-darkColor/70 dark:text-white/70 transition-all hover:text-light-blue-600 dark:hover:text-light-blue-300">
                      مرتب سازی پیش فرض
                      <GoTriangleDown className="mr-2" />
                    </span>
                    <ul className="courses-top-bar__selection-list absolute shadow-normal bg-gray-300 dark:bg-[#333c4c] text-darkColor/90 dark:text-white/70 w-full py-3 z-20 rounded-b-2xl transition-all text-center">
                      <li className="text-[1.4rem] py-4 px-5 transition-all hover:text-light-blue-400 courses-top-bar__selection-item--active">
                        مرتب سازی پیش فرض
                      </li>
                      <li className="text-[1.4rem] py-4 px-5 transition-all hover:text-light-blue-400">
                        مرتب سازی بر اساس محبوبیت
                      </li>
                      <li className="text-[1.4rem] py-4 px-5 transition-all hover:text-light-blue-400">
                        مرتب سازی بر اساس امتیاز
                      </li>
                      <li className="text-[1.4rem] py-4 px-5 transition-all hover:text-light-blue-400">
                        مرتب سازی بر اساس آخرین
                      </li>
                      <li className="text-[1.4rem] py-4 px-5 transition-all hover:text-light-blue-400">
                        مرتب سازی بر اساس ارزان ترین
                      </li>
                      <li className="text-[1.4rem] py-4 px-5 transition-all hover:text-light-blue-400 mb-1">
                        مرتب سازی بر اساس گران ترین
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="courses-top-bar__left">
                  <form action="#" className="relative w-96">
                    <input
                      type="text"
                      className="text-2xl w-full border border-gray-400 dark:border-white/30 bg-transparent py-3 pr-6 pl-16 rounded-md"
                      placeholder="جستجوی دوره ..."
                    />
                    <FaSearch className="absolute left-4 top-4 text-3xl text-darkColor/70 dark:text-white/60 cursor-pointer" />
                  </form>
                </div>
              </div>

              <div className="courses-content">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 sm:gap-11">
                  {courses.map((course) => (
                    <CourseBox {...course} />
                  ))}
                </div>
              </div>

              <Pagination />
            </>
          ) : (
            <div className="bg bg-amber-400/20 px-6 py-8 text-3xl text-amber-700 rounded-2xl">هنوز دوره ای به این دسته بندی اضافه نشده</div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
