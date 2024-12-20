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
  const [orderedCourses, setOrderedCourses] = useState([]);
  const [shownCourses, setShownCourses] = useState([]);
  const [status, setStatus] = useState("default");
  const [statusTitle, setStatusTitle] = useState("همه دوره ها");
  const [searchValue, setSearchValue] = useState("");

  const { categoryName } = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/v1/courses/category/${categoryName}`)
      .then((res) => res.json())
      .then((allCourses) => {
        setCourses(allCourses);
        setOrderedCourses(allCourses);
      });
  }, [categoryName]);

  useEffect(() => {
    switch (status) {
      case "free": {
        const freeCourses = courses.filter((course) => course.price === 0);
        setOrderedCourses(freeCourses);
        break;
      }
      case "money": {
        const notFreeCourses = courses.filter((course) => course.price !== 0);
        setOrderedCourses(notFreeCourses);
        break;
      }
      case "last": {
        setOrderedCourses(courses);
        break;
      }
      case "first": {
        const reversedCourses = courses.slice().reverse();
        setOrderedCourses(reversedCourses);
        break;
      }
      default: {
        setOrderedCourses(courses);
      }
    }
  }, [status]);

  const statusTitleChangeHandler = (event) => {
    setStatusTitle(event.target.textContent);
  };

  const searchValueChangeHandler = (event) => {
    setSearchValue(event.target.value);
    const filtredCourses = courses.filter((course) =>
      course.name.includes(event.target.value)
    );
    setOrderedCourses(filtredCourses);
  };

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
                    <span className="flex justify-between items-center courses-top-bar__selection-title h-14 rounded-md py-3 px-8 border border-gray-400 dark:border-white/30 text-darkColor/70 dark:text-white/70 transition-all hover:text-light-blue-600 dark:hover:text-light-blue-300 min-w-[230px]">
                      {statusTitle}
                      <GoTriangleDown className="mr-2" />
                    </span>
                    <ul className="courses-top-bar__selection-list absolute shadow-normal bg-gray-300 dark:bg-[#333c4c] text-darkColor/90 dark:text-white/70 w-full py-3 z-20 rounded-b-2xl transition-all text-center">
                      <li
                        className="text-[1.4rem] py-4 px-5 transition-all hover:text-light-blue-400 courses-top-bar__selection-item--active"
                        onClick={(event) => {
                          setStatus("All");
                          statusTitleChangeHandler(event);
                        }}
                      >
                        همه دوره ها
                      </li>
                      <li
                        className="text-[1.4rem] py-4 px-5 transition-all hover:text-light-blue-400"
                        onClick={(event) => {
                          setStatus("free");
                          statusTitleChangeHandler(event);
                        }}
                      >
                        مرتب سازی بر اساس رایگان
                      </li>
                      <li
                        className="text-[1.4rem] py-4 px-5 transition-all hover:text-light-blue-400"
                        onClick={(event) => {
                          setStatus("money");
                          statusTitleChangeHandler(event);
                        }}
                      >
                        مرتب سازی بر اساس پولی
                      </li>
                      <li
                        className="text-[1.4rem] py-4 px-5 transition-all hover:text-light-blue-400"
                        onClick={(event) => {
                          setStatus("last");
                          statusTitleChangeHandler(event);
                        }}
                      >
                        مرتب سازی بر اساس آخرین
                      </li>
                      <li
                        className="text-[1.4rem] py-4 px-5 transition-all hover:text-light-blue-400"
                        onClick={(event) => {
                          setStatus("first");
                          statusTitleChangeHandler(event);
                        }}
                      >
                        مرتب سازی بر اساس اولین
                      </li>
                      <li
                        className="text-[1.4rem] py-4 px-5 transition-all hover:text-light-blue-400"
                        onClick={() => setStatus("cheapest")}
                      >
                        مرتب سازی بر اساس ارزان ترین
                      </li>
                      <li
                        className="text-[1.4rem] py-4 px-5 transition-all hover:text-light-blue-400 mb-1"
                        onClick={() => setStatus("expensive")}
                      >
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
                      value={searchValue}
                      onChange={searchValueChangeHandler}
                    />
                    <FaSearch className="absolute left-4 top-4 text-3xl text-darkColor/70 dark:text-white/60 cursor-pointer" />
                  </form>
                </div>
              </div>

              <div className="courses-content">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 sm:gap-11">
                  {shownCourses.length !== 0 ? (
                    <>
                      {shownCourses.map((course) => (
                        <CourseBox {...course} />
                      ))}
                    </>
                  ) : (
                    <div className="bg-amber-400/20 px-6 py-8 text-3xl text-amber-700 rounded-2xl w-full">
                      هنوز دوره ای برای {statusTitle} وجود ندارد
                    </div>
                  )}
                </div>
              </div>

              <Pagination
                items={orderedCourses}
                itemsCount={3}
                pathName={`/category-info/${categoryName}`}
                setShownItems={setShownCourses}
              />
            </>
          ) : (
            <div className="bg-amber-400/20 px-6 py-8 text-3xl text-amber-700 rounded-2xl">
              هنوز دوره ای به این دسته بندی اضافه نشده
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
