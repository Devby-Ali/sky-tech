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
              دوره های من ({courses.length})
            </span>
          </div>
        </div>

        <div className="posts_wrap grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 sm:gap-11">
          {courses.map((course) => (
            <>
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
                      src={`http://localhost:4000/courses/covers/${course.course.cover}`}
                      alt={"props.name"}
                    />
                  </Link>
                </div>
                <div className={`flex-grow px-6 py-6 mb-6 `}>
                  {/* <!-- Course Title --> */}
                  <h3 className="font-EstedadMedium text-[1.75rem] line-clamp-2">
                    <Link to={`/course-info/`} href="">
                      {course.course.name}
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
                    <div className="flex items-center gap-x-1 text-xl text-blue-gray-600 dark:text-white/70">
                      {course.course.isComplete === 1
                        ? "تکمیل شده"
                        : "در حال برگزاری"}
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
                    {course.course.price === 0 ? "رایگان" : course.course.price}
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
            </>
          ))}
        </div>
      </section>
    </div>
  );
}
