import React, { useEffect, useState } from "react";
import Button from "../../Components/Form/Button";
import Header from "../../Components/Header/Header";
import SectionHeader from "../../Components/SectionHeader/SectionHeader";
import CourseBox from "../../Components/CourseBox/CourseBox";
import CategoryList from "../../Components/CategoryList/CategoryList";
import Pagination from "../../Components/Pagination/Pagination";
import Footer from "../../Components/Footer/Footer";
import {
  HiArrowsUpDown,
  HiMagnifyingGlass,
  HiOutlineFunnel,
  HiOutlineTrash,
} from "react-icons/hi2";
import SortedCourses from "../../Components/SortedCourses/SortedCourses";
import FilteredCourses from "../../Components/FilteredCourses/FilteredCourses";
import { FaSquare } from "react-icons/fa";
import { CourseBoxProp } from "types/Courses.types";
import { fetchCourses } from "../../Services/Axios/Requests/Courses";

type FilterStatus = "default" | "free" | "preSale" | "purchased";

const Courses = (): React.JSX.Element => {
  const [courses, setCourses] = useState<CourseBoxProp[]>([]);
  const [orderedCourses, setOrderedCourses] = useState<CourseBoxProp[]>([]);
  const [shownCourses, setShownCourses] = useState<CourseBoxProp[]>([]);
  const [status, setStatus] = useState<string>("default");
  const [statusFilter, setStatusFilter] = useState<FilterStatus>("default");
  const [statusTitle, setStatusTitle] = useState<string>("همه دوره ها");
  const [searchValue, setSearchValue] = useState<string>("");
  const [openSortCourses, setOpenSortCourses] = useState<boolean>(false);
  const [openFilteredCourses, setOpenFilteredCourses] =
    useState<boolean>(false);
  const [overlay, setOverlay] = useState<boolean>(false);

  const openDrawerSort: () => void = () => {
    setOpenSortCourses(true);
    setOverlay(!overlay);
  };
  const closeDrawerSort: () => void = () => {
    setOpenSortCourses(false);
    setOverlay(!overlay);
  };

  const openDrawerFilter: () => void = () => {
    setOpenFilteredCourses(true);
    setOverlay(!overlay);
  };

  const closeDrawerFilter: () => void = () => {
    setOpenFilteredCourses(false);
    setOverlay(!overlay);
  };

  const overlayOnClick: () => void = () => {
    setOpenSortCourses(false);
    setOpenFilteredCourses(false);
    setOverlay(false);
  };

  useEffect(() => {
    const getCourses = async () => {
      try {
        const response = await fetchCourses();
        setCourses(response);
        setOrderedCourses(response);
        setStatusTitle("همه دوره ها");
        setStatus("default");
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };
    getCourses();
  }, []);

  useEffect(() => {
    switch (status) {
      case "free": {
        const freeCourses = courses.filter((course) => course.price === 0);
        setOrderedCourses(freeCourses);
        break;
      }
      case "preSale": {
        setOrderedCourses(courses);
        break;
      }
      case "purchased": {
        setOrderedCourses(courses);
        break;
      }
      case "cheapest": {
        const freeCourses = courses.filter((course) => course.price === 0);
        setOrderedCourses(freeCourses);
        break;
      }
      case "expensive": {
        const notFreeCourses = courses.filter((course) => course.price !== 0);
        setOrderedCourses(notFreeCourses);
        break;
      }
      case "last": {
        const lastCourses = courses.filter((course) => course.isComplete === 0);
        setOrderedCourses(lastCourses);
        break;
      }
      default: {
        setOrderedCourses(courses);
      }
    }
  }, [status, courses]);

  useEffect(() => {
    switch (statusFilter) {
      case "free": {
        const freeCourses = courses.filter((course) => course.price === 0);
        setOrderedCourses(freeCourses);
        break;
      }
      case "preSale": {
        setOrderedCourses(courses);
        break;
      }
      case "purchased": {
        setOrderedCourses(courses);
        break;
      }
      default: {
        setOrderedCourses(courses);
      }
    }
  }, [statusFilter, courses]);

  const statusTitleChangeHandler = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setStatusTitle(event.currentTarget.textContent || "");
  };

  const searchValueChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchValue(event.target.value);
    const filtredCourses = courses.filter((course) =>
      course.name.includes(event.target.value)
    );
    setOrderedCourses(filtredCourses);
  };

  return (
    <>
      <Header />
      <section className="pt-16 md:pt-52 2xl:pt-56">
        <div className="container">
          <SectionHeader
            title={"دوره ها"}
            titleValue={`${courses.length} دوره ی آموزشی`}
          />

          <section className="grid grid-cols-12 gap-y-5 md:gap-x-12 text-slate-900 dark:text-white -mt-6 lg:mt-0">
            {/* <!-- Sidebar --> */}
            <aside className="col-span-full lg:col-span-4 xl:col-span-3 lg:sticky space-y-6">
              {/* <!-- SearchBox --> */}
              <form id="archive_filters" className="space-y-9">
                <div className="h-[6.8rem] bg-white dark:bg-slate-800 rounded-xl p-7 md:px-8">
                  <div className="flex items-center gap-x-8 justify-between h-full text-[#64748b] dark:text-white text-[1.7rem]">
                    <input
                      type="text"
                      value={searchValue}
                      onChange={searchValueChangeHandler}
                      className="tracking-tight py-2 placeholder-[#64748b] bg-transparent grow outli"
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
                <div
                  className="h-[6.8rem] bg-white dark:bg-slate-800 rounded-xl p-7 md:px-8 hidden md:block cursor-pointer"
                  onClick={() => {
                    setStatusFilter("default");
                  }}
                >
                  <div className="flex items-center justify-between h-full">
                    <span className="font-EstedadMedium text-[1.7rem]">
                      حذف فیلتر
                    </span>
                    <span className="text-4xl">
                      <HiOutlineTrash />
                    </span>
                  </div>
                </div>
                <div
                  className="h-[6.8rem] bg-white dark:bg-slate-800 rounded-xl p-7 md:px-8 hidden md:block cursor-pointer"
                  onClick={() => {
                    setStatusFilter("free");
                  }}
                >
                  <div className="flex items-center justify-between h-full">
                    <span className="font-EstedadMedium text-[1.7rem]">
                      فقط دوره های رایگان
                    </span>
                    <span
                      className={`opacity-70 ${
                        statusFilter === "free" ? "text-sky-500" : "text-white"
                      }`}
                    >
                      <FaSquare />
                    </span>
                  </div>
                </div>
                <div
                  className="h-[6.8rem] bg-white dark:bg-slate-800 rounded-xl p-7 md:px-8 hidden md:block cursor-pointer"
                  onClick={() => {
                    setStatusFilter("preSale");
                  }}
                >
                  <div className="flex items-center justify-between h-full">
                    <span className="font-EstedadMedium text-[1.7rem]">
                      در حال پیش فروش
                    </span>
                    <input
                      className="outline-hidden w-6 h-6"
                      type="checkbox"
                      onClick={() => {
                        closeDrawerFilter();
                        setStatusFilter("preSale");
                      }}
                      disabled={true}
                      name=""
                      id=""
                    />
                  </div>
                </div>
                <div
                  className="h-[6.8rem] bg-white dark:bg-slate-800 rounded-xl p-7 md:px-8 hidden md:block cursor-pointer"
                  onClick={() => {
                    setStatusFilter("purchased");
                  }}
                >
                  <div className="flex items-center justify-between h-full">
                    <span className="font-EstedadMedium text-[1.7rem]">
                      دوره ها خریداری شده
                    </span>
                    <input
                      className="outline-hidden w-6 h-6"
                      type="checkbox"
                      onClick={() => {
                        closeDrawerFilter();
                        setStatusFilter("purchased");
                      }}
                      disabled={true}
                      name=""
                      id=""
                    />
                  </div>
                </div>
                <CategoryList />
              </form>
            </aside>
            {/* <!-- Content --> */}
            <section className="col-span-full lg:col-span-8 xl:col-span-9 order-1 lg:order-2">
              {/* <!-- Sort & Filter in Mobile Size --> */}
              <div className="flex md:hidden items-center gap-8 mb-14 -mt-6">
                <Button
                  onClick={openDrawerFilter}
                  className="flex-center bg-white dark:bg-slate-800 py-5 gap-4 rounded-lg w-1/2"
                  id="filter-btn"
                >
                  <div className="text-4xl shrink-0">
                    <HiOutlineFunnel />
                  </div>
                  <span>فیلتر</span>
                </Button>
                <Button
                  onClick={openDrawerSort}
                  className="flex-center bg-white dark:bg-slate-800 py-5 gap-4 rounded-lg w-1/2"
                  id="sort-btn"
                >
                  <div className="text-4xl shrink-0">
                    <HiArrowsUpDown />
                  </div>
                  <span className="active_sort_title">{statusTitle}</span>
                </Button>
              </div>
              {/* <!-- Course Sort --> */}
              <div className="hidden md:flex items-center gap-x-6 h-[6.3rem] bg-white dark:bg-slate-800 shadow-normal dark:shadow-none rounded-xl px-7 md:px-8 mt-4 lg:mt-0 mb-16 lg:mb-11">
                <div className="flex items-center shrink-0 gap-x-2">
                  <div className="text-5xl">
                    <HiArrowsUpDown />
                  </div>
                  <span className="">مرتب سازی بر اساس :</span>
                </div>
                <div className="flex items-center gap-x-7 lg:gap-x-8 h-full *:transition-all">
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
                      setStatus("cheapest");
                      statusTitleChangeHandler(event);
                    }}
                    className={`sort-btn ${
                      status === "cheapest" && "sort-btn--active"
                    }`}
                  >
                    ارزان ترین
                  </Button>
                  <Button
                    onClick={(event) => {
                      setStatus("expensive");
                      statusTitleChangeHandler(event);
                    }}
                    className={`sort-btn ${
                      status === "expensive" && "sort-btn--active"
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
                      <CourseBox key={course._id} {...course} />
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
      </section>

      <Footer />

      <SortedCourses
        openSortCourses={openSortCourses}
        closeDrawerSort={closeDrawerSort}
        setStatus={setStatus}
        status={status}
        statusTitleChangeHandler={statusTitleChangeHandler}
      />

      <FilteredCourses
        openFilteredCourses={openFilteredCourses}
        closeDrawerFilter={closeDrawerFilter}
        setStatusFilter={setStatusFilter}
        statusFilter={statusFilter}
      />

      <div
        onClick={overlayOnClick}
        className={
          overlay ? "overlay overlay--visible backdrop-blur-[2px]" : "overlay"
        }
      ></div>
    </>
  );
};

export default Courses;
