import React, { useEffect, useState } from "react";
import Topbar from "./../../Components/Topbar/Topbar";
import Button from "../../Components/Form/Button";
import Navbar from "./../../Components/Navbar/Navbar";
import SectionHeader from "../../Components/SectionHeader/SectionHeader";
import CourseBox from "../../Components/CourseBox/CourseBox";
import CoursesFilter from "../../Components/CoursesFilter/CoursesFilter";
import Pagination from "../../Components/Pagination/Pagination";
import Footer from "./../../Components/Footer/Footer";
import {
  HiArrowsUpDown,
  HiMagnifyingGlass,
  HiOutlineCheckCircle,
  HiOutlineFunnel,
  HiXMark,
} from "react-icons/hi2";
import { Drawer, Typography, IconButton } from "@material-tailwind/react";
import { useParams } from "react-router-dom";

export default function Courses() {
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
    fetch(`http://localhost:4000/v1/courses`)
      .then((res) => res.json())
      .then((allCourses) => {
        setCourses(allCourses);
      });
  }, []);

  return (
    <>
      {/* <Topbar /> */}
      <Navbar />
      <section className="pt-12 md:pt-48">
        <div>
          <SectionHeader title={"دوره ها"} titleValue={"۶۴ دوره ی آموزشی"} />
        </div>
        <div className="container">
          <section className="grid grid-cols-12 gap-y-5 md:gap-x-12 text-darkColor dark:text-white ">
            {/* <!-- Sidebar --> */}
            <aside className="col-span-full lg:col-span-4 xl:col-span-3 lg:sticky top-6 space-y-6">
              {/* <!-- SearchBox --> */}
              <form id="archive_filters" className="space-y-9">
                <div className="h-[6.8rem] bg-white dark:bg-darkBox rounded-xl p-7 md:px-8">
                  <div className="flex items-center justify-between h-full text-[#64748b] dark:text-white text-[1.7rem]">
                    <input
                      type="text"
                      name="s"
                      className="tracking-tight placeholder-[#64748b] bg-transparent flex-grow"
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
                <CoursesFilter />
              </form>
            </aside>
            {/* <!-- Content --> */}
            <section className="col-span-full lg:col-span-8 xl:col-span-9 order-1 lg:order-2">
              {/* <!-- Sort & Filter in Mobile Size --> */}
              <div className="flex md:hidden items-center gap-8 mb-14 -mt-6">
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
                  <span className="active_sort_title">همه دوره ها</span>
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
                <div className="flex items-center gap-x-7 lg:gap-x-8 h-full">
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
                {shownCourses.map((course) => (
                  <CourseBox {...course} />
                ))}
              </div>
              {/* <!-- Show more Button --> */}
              <Pagination
                items={courses}
                itemsCount={6}
                pathName="/courses"
                setShownItems={setShownCourses}
              />
              <div className="archive_empty items-center justify-center flex-col px-7 py-8 md:py-20 rounded-2xl border border-[#64748b] border-dashed hidden">
                <p className="text-lg md:text-xl text-center  text-[#64748b] dark:text-white mt-8 md:mt-12">
                  متاسفانه دوره ای مطابق با جستجوی شما پیدا نشد ):
                </p>
              </div>
            </section>
          </section>
        </div>
      </section>



      <Footer />

      <Drawer
        placement="bottom"
        open={openBottom}
        onClose={closeDrawerBottom}
        className="rounded-t-3xl"
      >
        <div className="text-darkColor dark:text-white bg-white dark:bg-darkBox rounded-t-3xl overflow-hidden">
          <div className="flex items-center justify-between bg-[#333c4c] p-8">
            <span className="font-EstedadBold text-[2rem]">مرتب سازی بر اساس</span>
            <button className="">
              <div onClick={closeDrawerBottom} className="text-4xl">
                <HiXMark/>
              </div>
            </button>
          </div>
          <div className="text-3xl px-8 space-y-7 divide-y divide-darkBox/30 dark:divide-white/20">
            <Button
              href="javascript:setArchiveSort('default', 'همه دوره ها')"
              data-id="default"
              className="flex items-center justify-between pt-6"
            >
              <div>همه دوره ها</div>
              <span className="text-5xl">
                <HiOutlineCheckCircle/>
              </span>
            </Button>
            <Button
              href="javascript:setArchiveSort('cheapest', 'ارزان ترین')"
              data-id="cheapest"
              className="flex items-center justify-between pt-6"
            >
              <div>ارزان ترین</div>
            </Button>
            <Button
              href="javascript:setArchiveSort('expensive', 'گران ترین')"
              data-id="expensive"
              className="flex items-center justify-between pt-6"
            >
              <div>گران ترین</div>
            </Button>
            <Button
              href="javascript:setArchiveSort('popular', 'پرمخاطب ها')"
              data-id="popular"
              className="flex items-center justify-between pt-6 pb-7"
            >
              <div>پرمخاطب ها</div>
            </Button>
          </div>
        </div>
      </Drawer>
    </>
  );
}
