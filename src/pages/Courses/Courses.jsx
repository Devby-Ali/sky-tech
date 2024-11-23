import React from "react";
import Topbar from "./../../Components/Topbar/Topbar";
import Navbar from "./../../Components/Navbar/Navbar";
import Footer from "./../../Components/Footer/Footer";
import SectionHeader from "../../Components/SectionHeader/SectionHeader";
import {
  HiArrowsUpDown,
  HiChevronDown,
  HiChevronRight,
  HiMagnifyingGlass,
  HiOutlineFolderOpen,
  HiOutlineFunnel,
} from "react-icons/hi2";
import CourseBox from "../../Components/CourseBox/CourseBox";
import CoursesFilter from "../../Components/CoursesFilter/CoursesFilter";

export default function Courses() {
  return (
    <>
      {/* <Topbar /> */}
      <Navbar />
      <div className="pt-[11.5rem]">
        <div className="-mb-6">
          <SectionHeader title={"دوره ها"} titleValue={"۶۴ دوره ی آموزشی"} />
        </div>
        <div className="container">
          <section className="grid grid-cols-12 gap-y-5 md:gap-x-12 text-darkColor dark:text-white ">
            {/* <!-- Sidebar --> */}
            <aside className="col-span-full lg:col-span-4 xl:col-span-3 lg:sticky top-6 space-y-6">
              {/* <!-- SearchBox --> */}
              <form id="archive_filters" className="space-y-9">
                <div className="h-[6.8rem] bg-white dark:bg-darkBox rounded-[1.2rem] p-7 md:px-8 mb-3">
                  <div className="flex items-center justify-between h-full text-[#64748b] dark:text-white text-[1.7rem]">
                    <input
                      type="text"
                      name="s"
                      className="md:font-danaMedium tracking-tight placeholder-[#64748b] bg-transparent flex-grow"
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
                <div className="h-[6.8rem] bg-white dark:bg-darkBox rounded-[1.2rem] p-7 md:px-8 mb-3 hidden md:block">
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
                <div className="h-[6.8rem] bg-white dark:bg-darkBox rounded-[1.2rem] p-7 md:px-8 mb-3 hidden md:block">
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
                <div className="h-[6.8rem] bg-white dark:bg-darkBox rounded-[1.2rem] p-7 md:px-8 mb-3 hidden md:block">
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
                <CoursesFilter />
              </form>
            </aside>
            {/* <!-- Content --> */}
            <section className="col-span-full lg:col-span-8 xl:col-span-9 order-1 lg:order-2">
              {/* <!-- Sort & Filter in Mobile Size --> */}
              <div className="flex md:hidden items-center gap-8 mb-14">
                <div
                  className="flex-center bg-white dark:bg-darkBox py-5 gap-4 rounded-3xl w-1/2"
                  id="filter-btn"
                >
                  <div className="text-4xl shrink-0">
                    <HiOutlineFunnel />
                  </div>
                  <span>فیلتر</span>
                </div>
                <div
                  className="flex-center bg-white dark:bg-darkBox py-5 gap-4 rounded-3xl w-1/2"
                  id="sort-btn"
                >
                  <div className="text-4xl shrink-0">
                    <HiArrowsUpDown />
                  </div>
                  <span className="active_sort_title">همه دوره ها</span>
                </div>
              </div>
              {/* <!-- Course Sort --> */}
              <div className="hidden md:flex items-center gap-x-6 px-5 mb-8 h-16 bg-white dark:bg-darkBox shadow-normal dark:shadow-none rounded-[1.2rem]">
                <div className="flex items-center shrink-0 gap-x-2">
                  <div className="w-7 h-7">
                    <HiArrowsUpDown />
                  </div>
                  <span className="font-danaMedium">مرتب سازی بر اساس :</span>
                </div>
                <div className="flex gap-x-5 lg:gap-x-8 h-full">
                  <a
                    href="javascript:setArchiveSort('default', 'همه دوره ها')"
                    data-id="default"
                    className="sort-btn sort-btn--active"
                    role="button"
                  >
                    همه دوره ها
                  </a>
                  <a
                    href="javascript:setArchiveSort('cheapest', 'ارزان ترین')"
                    data-id="cheapest"
                    className="sort-btn "
                    role="button"
                  >
                    ارزان ترین
                  </a>
                  <a
                    href="javascript:setArchiveSort('expensive', 'گران ترین')"
                    data-id="expensive"
                    className="sort-btn "
                    role="button"
                  >
                    گران ترین
                  </a>
                  <a
                    href="javascript:setArchiveSort('popular', 'پرمخاطب ها')"
                    data-id="popular"
                    className="sort-btn "
                    role="button"
                  >
                    پرمخاطب ها
                  </a>
                </div>
              </div>
              {/* <!-- Course List --> */}
              <div className="posts_wrap grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 sm:gap-11">
                <CourseBox />
                <CourseBox />
                <CourseBox />
                <CourseBox />
                <CourseBox />
              </div>
              {/* <!-- Show more Button --> */}
              <div className="my-12">
                <ul className="flex-center">
                  <li className="courses__pagination-item">
                    <a
                      href="#"
                      className="courses__pagination-link rounded-lg w-16 h-16 flex-center text-2xl mx-2 bg-slate-200 hover:text-white hover:bg-lightishBlue-500"
                    >
                      <HiChevronRight />
                    </a>
                  </li>
                  <li className="courses__pagination-item">
                    <a
                      href="#"
                      className="courses__pagination-link rounded-lg w-16 h-16 flex-center text-2xl mx-2 bg-slate-200 hover:text-white hover:bg-lightishBlue-500 courses__pagination-link--active"
                    >
                      1
                    </a>
                  </li>
                  <li className="courses__pagination-item">
                    <a
                      href="#"
                      className="courses__pagination-link rounded-lg w-16 h-16 flex-center text-2xl mx-2 bg-slate-200 hover:text-white hover:bg-lightishBlue-500"
                    >
                      2
                    </a>
                  </li>
                  <li className="courses__pagination-item">
                    <a
                      href="#"
                      className="courses__pagination-link rounded-lg w-16 h-16 flex-center text-2xl mx-2 bg-slate-200 hover:text-white hover:bg-lightishBlue-500"
                    >
                      3
                    </a>
                  </li>
                </ul>
              </div>
              <div className="archive_empty flex items-center justify-center flex-col px-7 py-8 md:py-20 rounded-2xl border border-[#64748b] border-dashed hidden">
                <p className="text-lg md:text-xl text-center font-danaDemiBold text-[#64748b] dark:text-white mt-8 md:mt-12">
                  متاسفانه دوره ای مطابق با جستجوی شما پیدا نشد ):
                </p>
              </div>
            </section>
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
}

{
  /* <section className="courses">
<div className="courses-content">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5 md:gap-5">
    <CourseBoxOnFilter />
    <CourseBoxOnFilter />
    <CourseBoxOnFilter />
    <CourseBoxOnFilter />
    <CourseBoxOnFilter />
    <CourseBoxOnFilter />
    <CourseBoxOnFilter />
    <CourseBoxOnFilter />
  </div>
</div>

<div className="my-12">
  <ul className="flex-center">
    <li className="courses__pagination-item">
      <a
        href="#"
        className="courses__pagination-link rounded-lg w-16 h-16 flex-center text-2xl mx-2 bg-slate-200 hover:text-white hover:bg-lightishBlue-500"
      >
        <FaLongArrowAltRight />
      </a>
    </li>
    <li className="courses__pagination-item">
      <a
        href="#"
        className="courses__pagination-link rounded-lg w-16 h-16 flex-center text-2xl mx-2 bg-slate-200 hover:text-white hover:bg-lightishBlue-500 courses__pagination-link--active"
      >
        1
      </a>
    </li>
    <li className="courses__pagination-item">
      <a
        href="#"
        className="courses__pagination-link rounded-lg w-16 h-16 flex-center text-2xl mx-2 bg-slate-200 hover:text-white hover:bg-lightishBlue-500"
      >
        2
      </a>
    </li>
    <li className="courses__pagination-item">
      <a
        href="#"
        className="courses__pagination-link rounded-lg w-16 h-16 flex-center text-2xl mx-2 bg-slate-200 hover:text-white hover:bg-lightishBlue-500"
      >
        3
      </a>
    </li>
  </ul>
</div>
</section> */
}
