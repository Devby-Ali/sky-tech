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
import {
  HiArrowsUpDown,
  HiMagnifyingGlass,
  HiOutlineCheckCircle,
  HiOutlineFunnel,
  HiOutlineXCircle,
} from "react-icons/hi2";
import Button from "../../Components/Form/Button";
import CoursesFilter from "../../Components/CoursesFilter/CoursesFilter";
import SectionHeader from "../../Components/SectionHeader/SectionHeader";

export default function Category() {
  const [courses, setCourses] = useState([]);
  const [orderedCourses, setOrderedCourses] = useState([]);
  const [shownCourses, setShownCourses] = useState([]);
  const [status, setStatus] = useState("default");
  const [statusTitle, setStatusTitle] = useState("همه دوره ها");
  const [searchValue, setSearchValue] = useState("");
  const [openBottom, setOpenBottom] = useState(false);

  const { categoryName } = useParams();

  const openDrawerBottom = () => setOpenBottom(true);
  const closeDrawerBottom = () => setOpenBottom(false);

  useEffect(() => {
    fetch(`http://localhost:4000/v1/courses/category/${categoryName}`)
      .then((res) => res.json())
      .then((allCourses) => {
        setCourses(allCourses);
        setOrderedCourses(allCourses);
        setStatusTitle("همه دوره ها");
        setStatus("default");
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
      <section className="pt-16 md:pt-52">
        {courses.length ? (
          <>
            <div>
              <SectionHeader
                title={`دوره های ${categoryName}`}
                titleValue={"۶۴ دوره ی آموزشی"}
              />
            </div>
            <div className="container">
              <section className="grid grid-cols-12 gap-y-5 md:gap-x-12 text-darkColor dark:text-white ">
                {/* <!-- Sidebar --> */}
                <aside className="col-span-full lg:col-span-4 xl:col-span-3 lg:sticky top-6 space-y-6">
                  {/* <!-- SearchBox --> */}
                  <form id="archive_filters" className="space-y-9">
                    <div className="h-[6.8rem] bg-white dark:bg-darkBox rounded-xl p-7 md:px-8">
                      <div className="flex items-center gap-x-8 justify-between h-full text-[#64748b] dark:text-white text-[1.7rem]">
                        <input
                          type="text"
                          value={searchValue}
                          onChange={searchValueChangeHandler}
                          className="tracking-tight py-2 placeholder-[#64748b] bg-transparent flex-grow outli"
                          placeholder="جستجو بین دوره ها"
                        />
                        <button type="submit">
                          <div className="text-5xl">
                            <HiMagnifyingGlass />
                          </div>
                        </button>
                      </div>
                    </div>
                    {/* <!-- Toggle Box Container --> */}
                    <div className="h-[6.8rem] bg-white dark:bg-darkBox rounded-xl p-7 md:px-8 hidden md:block">
                      <div className="flex items-center justify-between h-full">
                        <span className="font-EstedadMedium text-[1.7rem]">
                          فقط دوره های رایگان
                        </span>
                        <label className="toggle">
                          <input
                            className="w-7 h-7 opacity-60 mt-2"
                            type="checkbox"
                            name="only_free"
                            value="yes"
                          />
                        </label>
                      </div>
                    </div>
                    <div className="h-[6.8rem] bg-white dark:bg-darkBox rounded-xl p-7 md:px-8 hidden md:block">
                      <div className="flex items-center justify-between h-full">
                        <span className="font-EstedadMedium text-[1.7rem]">
                          در حال پیش فروش
                        </span>
                        <label className="toggle">
                          <input
                            className="w-7 h-7 opacity-60 mt-2"
                            type="checkbox"
                            name="presell"
                            value="yes"
                          />
                        </label>
                      </div>
                    </div>
                    <div className="h-[6.8rem] bg-white dark:bg-darkBox rounded-xl p-7 md:px-8 hidden md:block">
                      <div className="flex items-center justify-between h-full">
                        <span className="font-EstedadMedium text-[1.7rem]">
                          دوره ها خریداری شده
                        </span>
                        <label className="toggle">
                          <input
                            className="w-7 h-7 opacity-60 mt-2"
                            type="checkbox"
                            name="enrolled"
                            value="yes"
                          />
                        </label>
                      </div>
                    </div>
                  </form>
                </aside>
                {/* <!-- Content --> */}
                <section className="col-span-full lg:col-span-8 xl:col-span-9 order-1 lg:order-2">
                  {/* <!-- Sort & Filter in Mobile Size --> */}
                  <div className="flex md:hidden items-center gap-8 mb-14 mt-3">
                    <Button
                      className="flex-center bg-white dark:bg-darkBox py-5 gap-4 rounded-lg w-1/2"
                      id="filter-btn"
                    >
                      <div className="text-4xl shrink-0">
                        <HiOutlineFunnel />
                      </div>
                      <span>فیلتر</span>
                    </Button>
                    <Button
                      onClick={openDrawerBottom}
                      className="flex-center bg-white dark:bg-darkBox py-5 gap-4 rounded-lg w-1/2"
                      id="sort-btn"
                    >
                      <div className="text-4xl shrink-0">
                        <HiArrowsUpDown />
                      </div>
                      <span className="active_sort_title">{statusTitle}</span>
                    </Button>
                  </div>
                  {/* <!-- Course Sort --> */}
                  <div className="hidden md:flex items-center gap-x-6 h-[6.3rem] bg-white dark:bg-darkBox shadow-normal dark:shadow-none rounded-xl px-7 md:px-8 mt-4 lg:mt-0 mb-16 lg:mb-11">
                    <div className="flex items-center shrink-0 gap-x-2">
                      <div className="text-5xl">
                        <HiArrowsUpDown />
                      </div>
                      <span className="">مرتب سازی بر اساس :</span>
                    </div>
                    <div className="flex items-center gap-x-7 lg:gap-x-8 h-full child:transition-all">
                      <Button
                        onClick={(event) => {
                          setStatus("default");
                          statusTitleChangeHandler(event);
                        }}
                        className={`sort-btn ${
                          status === "default" && "sort-btn--active"
                        }`}
                      >
                        همه دوره ها
                      </Button>
                      <Button
                        onClick={(event) => {
                          setStatus("free");
                          statusTitleChangeHandler(event);
                        }}
                        className={`sort-btn ${
                          status === "free" && "sort-btn--active"
                        }`}
                      >
                        ارزان ترین
                      </Button>
                      <Button
                        onClick={(event) => {
                          setStatus("money");
                          statusTitleChangeHandler(event);
                        }}
                        className={`sort-btn ${
                          status === "money" && "sort-btn--active"
                        }`}
                      >
                        گران ترین
                      </Button>
                      <Button
                        onClick={(event) => {
                          setStatus("last");
                          statusTitleChangeHandler(event);
                        }}
                        className={`sort-btn ${
                          status === "last" && "sort-btn--active"
                        }`}
                      >
                        پرمخاطب ها
                      </Button>
                    </div>
                  </div>
                  {/* <!-- Course List --> */}

                  {shownCourses.length !== 0 ? (
                    <>
                      <div className="posts_wrap grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 sm:gap-11">
                        {shownCourses.map((course) => (
                          <CourseBox {...course} />
                        ))}
                      </div>
                    </>
                  ) : (
                    <div className="archive_empty items-center justify-center flex-col px-7 py-8 md:py-20 rounded-2xl border border-[#64748b] border-dashed">
                      <p className="text-2xl md:text-3xl text-center text-[#64748b] dark:text-white my-8 md:my-12">
                        دوره ای مطابق با جستجوی شما پیدا نشد!
                      </p>
                    </div>
                  )}
                  {/* <!-- Show more Button --> */}
                  <Pagination
                    items={orderedCourses}
                    itemsCount={6}
                    pathName="/courses"
                    setShownItems={setShownCourses}
                  />
                </section>
              </section>
            </div>
          </>
        ) : (
          <div className="container">
            <div className="archive_empty items-center justify-center flex-col px-7 py-8 md:py-20 rounded-2xl border border-[#64748b] border-dashed">
              <p className="text-2xl md:text-3xl text-center text-[#64748b] dark:text-white my-8 md:my-12">
                هنوز دوره ای به دسته‌بندی {categoryName} اضافه نشده
              </p>
            </div>
          </div>
        )}
      </section>

      <Footer />

      <div
        className={`fixed right-0 left-0 md:hidden transition-all ${
          openBottom === true ? "visible bottom-0" : "invisible -bottom-[36rem]"
        }`}
      >
        <div className="text-darkColor dark:text-white bg-white dark:bg-darkBox rounded-t-4xl overflow-hidden">
          <div className="flex items-center justify-between bg-[#333c4c] p-8">
            <span className="font-EstedadBold text-[2rem]">
              مرتب سازی بر اساس
            </span>
            <button className="">
              <div onClick={closeDrawerBottom} className="text-[3.5rem]">
                <HiOutlineXCircle />
              </div>
            </button>
          </div>
          <div className="text-[1.7rem] px-8 space-y-9 divide-y divide-darkBox/30 dark:divide-white/20">
            <Button
              onClick={(event) => {
                setStatus("default");
                statusTitleChangeHandler(event);
              }}
              className={`flex items-center justify-between w-full pt-9 ${
                status === "default" && "text-light-blue-600"
              }`}
            >
              <div>همه دوره ها</div>
              {status === "default" && (
                <span className="text-5xl">
                  <HiOutlineCheckCircle />
                </span>
              )}
            </Button>
            <Button
              onClick={(event) => {
                setStatus("free");
                statusTitleChangeHandler(event);
              }}
              className={`flex items-center justify-between w-full pt-8 ${
                status === "free" && "text-light-blue-600"
              }`}
            >
              <div>ارزان ترین</div>
              {status === "free" && (
                <span className="text-5xl">
                  <HiOutlineCheckCircle />
                </span>
              )}
            </Button>
            <Button
              onClick={(event) => {
                setStatus("money");
                statusTitleChangeHandler(event);
              }}
              className={`flex items-center justify-between w-full pt-8 ${
                status === "money" && "text-light-blue-600"
              }`}
            >
              <div>گران ترین</div>
              {status === "money" && (
                <span className="text-5xl">
                  <HiOutlineCheckCircle />
                </span>
              )}
            </Button>
            <Button
              onClick={(event) => {
                setStatus("last");
                statusTitleChangeHandler(event);
              }}
              className={`flex items-center justify-between pt-8 w-full pb-12 ${
                status === "last" && "text-light-blue-600"
              }`}
            >
              <div>پرمخاطب ها</div>
              {status === "last" && (
                <span className="text-5xl">
                  <HiOutlineCheckCircle />
                </span>
              )}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
