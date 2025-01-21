import React, { useEffect, useState } from "react";
import CourseBox from "../../../Components/CourseBox/CourseBox";
import { Link } from "react-router-dom";
import { LiaUserSolid } from "react-icons/lia";
import { PiUsersThree } from "react-icons/pi";

export default function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/v1/users/courses/`, {
      headers: {
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("user")).token
        }`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
      });
  }, []);

  return (
    <div className="max-w-[1400px] w-full pb-5 md:pb-8 mx-auto">
      <section className="mt-6 md:mt-10">
        <div className="flex items-center justify-between bg-white dark:bg-darker h-12 md:h-18 pl-2.5 mb-5 rounded">
          <div className="flex items-center gap-x-3 md:gap-x-6 h-full">
            <div className="w-2 md:w-2.5 h-full bg-sky-500 rounded-sm"></div>
            <span className="text-sky-500 text-sm md:text-lg font-danaBold md:font-danaDemiBold select-none">
              دوره های من (47)
            </span>
          </div>
        </div>

        {/* <div
          className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:pr-5"
        >
          <div className="flex flex-col bg-white dark:bg-darker px-3 pt-3 rounded">
            <div className="relative aspect-video -mx-3 -mt-3 mb-3">
              <img
                src="https://sabzlearn.ir/wp-content/uploads/2024/01/IMAGE-1402-11-04-18_57_18-1-768x432.webp"
                className="size-full object-cover rounded"
                alt="بهینه نویسی کد ها در پایتون"
              />
              <a
                href="https://sabzlearn.ir/course/python-code-optimization/"
                target="_blank"
              >
                svg
              </a>
            </div>
            <a
              href="https://sabzlearn.ir/course/python-code-optimization/"
              className="block h-12 md:h-14 text-sm md:text-base line-clamp-2 font-danaDemiBold"
            >
              بهینه نویسی کد ها در پایتون
            </a>
            <div className="flex justify-between gap-2.5 text-slate-500 dark:text-white/70 text-sm pb-3 mt-3 border-b border-b-neutral-200/70 dark:border-b-white/10">
              <div className="flex items-center gap-x-0.5 hover:text-green-500 transition-colors">
                svg
                <a href="https://sabzlearn.ir/teacher/rezadolati01">
                  رضا دولتی
                </a>
              </div>

              <div className="flex items-center gap-x-0.5 text-yellow-500">
                <span className="font-danaMedium">5.0</span>
                svg
              </div>
            </div>
            <div className="flex items-center gap-x-3 h-12 -mx-3 px-3 mt-auto">
              <div className="w-24 md:w-28 text-xs md:text-sm text-green-500 shrink-0">
                <span className="font-danaDemiBold">0%</span>
                مشاهده دوره
              </div>
              <div className="flex-grow h-1.5 bg-gray-100 dark:bg-dark rounded overflow-hidden direction-ltr">
                <div
                  className="bg-green-500 h-full rounded"
                ></div>
              </div>
            </div>
          </div>

        </div> */}

        <div className="posts_wrap grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 sm:gap-11">
          <div className="course flex flex-col  bg-white dark:bg-darkBox text-darkColor dark:text-white rounded-3xl h-full">
            {/* <!-- Course Banner --> */}
            <div className="relative h-[17rem] group">
              <Link
                className="block w-full h-full rounded-3xl overflow-hidden"
                to={`/course-info/props.shortName`}
                title={"props.name"}
              >
                <img
                  className="block w-full h-full object-cover"
                  alt={"props.name"}
                />
              </Link>
              {/* <!-- Offer percent  --> */}
              <span className="absolute right-5 top-5 flex-center w-20 h-12 bg-green-500 text-white font-EstedadBold text-xl rounded-full">
                20%
              </span>
            </div>
            <div className={`flex-grow px-6 py-6 mb-6 `}>
              {/* <!-- Course Title --> */}
              <h3 className="font-EstedadMedium text-[1.75rem] line-clamp-2">
                <Link to={`/course-info/`} href="">
                  props.name
                </Link>
              </h3>
            </div>
            {/* <!-- Course Footer --> */}
            <div className="px-6 pb-6">
              {/* <!-- Teacher & Rating --> */}
              <div className="flex justify-between gap-5 text-blue-gray-600 dark:text-white/70 text-xl pb-5 border-b border-b-gray-300 dark:border-b-white/10">
                <div className="flex items-center gap-x-1 hover:text-green-500 transition-colors">
                  <div className="text-3xl">
                    <LiaUserSolid />
                  </div>
                  <a href="https:/">props.creator</a>
                </div>
                {/* <!-- Rating --> */}
                <div className="flex items-center gap-x-1 text-3xl opacity-65 text-amber-500">
                  {/* <span className="font-EstedadMedium mt-1">
                              {props.courseAverageScore}
                            </span>
                            <div className="text-3xl">
                              <HiStar />
                            </div> */}
                  svg
                </div>
              </div>
              <div className="flex items-end justify-between mt-3">
                <span className="flex items-center gap-x-2 text-blue-gray-600 dark:text-white/70 text-xl">
                  <div className="text-4xl">
                    <PiUsersThree />
                  </div>
                  props.registers
                </span>
                {/* <!-- Price --> */}
                price
              </div>
              <div className="flex items-center gap-x-3 h-12 -mx-3 px-3 mt-auto">
                <div className="w-24 md:w-28 text-xs md:text-sm text-green-500 shrink-0">
                  <span className="font-danaDemiBold">75%</span>
                  مشاهده دوره
                </div>
                <div className="flex-grow h-1.5 bg-gray-100 dark:bg-dark rounded overflow-hidden direction-ltr">
                  <div className="bg-green-500 h-full rounded w-3/4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
