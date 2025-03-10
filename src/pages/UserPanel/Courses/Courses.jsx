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
        console.log(data);
        setCourses(data);
      });
  }, []);

  return (
    <main className="pb-5 md:pb-8 mx-auto mt-6 md:mt-12">
      <div className="flex items-center justify-between bg-white dark:bg-slate-800 h-20 md:h-28 pl-2.5 rounded-xl mb-8">
        <div className="flex items-center gap-x-3 md:gap-x-6 h-full">
          <span className="w-1 md:w-1.5 h-full bg-sky-600 rounded-r-full shadowLightBlue"></span>
          <span className="text-sky-500 text-2xl md:text-3xl font-EstedadMedium md:font-EstedadBold select-none pr-4">
            دوره های من ({courses.length})
          </span>
        </div>
      </div>

      {courses.length !== 0 ? (
        <section className="posts_wrap grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 sm:gap-11 px-6 md:p-1">
          {courses.map((course) => (
            <>
              <div className="course flex flex-col bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-lg h-full">
                {/* <!-- Course Banner --> */}
                <div className="relative h-[15rem] group">
                  <Link
                    className="block w-full h-full rounded-t-lg overflow-hidden"
                    to={`/course-info/${course.course.shortName}`}
                    title={"props.name"}
                  >
                    <img
                      className="block w-full h-full object-cover"
                      src={`http://localhost:4000/courses/covers/${course.course.cover}`}
                      alt={"props.name"}
                    />
                  </Link>
                </div>
                <div className={`grow px-6 py-6`}>
                  {/* <!-- Course Title --> */}
                  <h3 className="font-EstedadMedium text-[1.75rem] line-clamp-2">
                    <Link to={`/course-info/${course.course.shortName}`}>
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
                      <a href="https:/">course.creator</a>
                    </div>
                    {/* <!-- Rating --> */}
                    <div className="flex items-center gap-x-1 text-xl text-blue-gray-600 dark:text-white/70">
                      {course.course.isComplete === 1
                        ? "تکمیل شده"
                        : "در حال برگزاری"}
                    </div>
                  </div>
                  <div className="flex items-center gap-x-3 h-12 -mx-3 px-3 mt-auto">
                    <div className="w-36 text-xl text-green-500 shrink-0">
                      <span className="font-EstedadMedium">75%</span>
                      مشاهده دوره
                    </div>
                    <div className="grow h-1.5 bg-gray-100 dark:bg-dark rounded-sm overflow-hidden direction-ltr">
                      <div className="bg-green-500 h-full rounded-sm w-3/4"></div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </section>
      ) : (
        <div className="w-full text-3xl px-8 py-6 text-amber-600 bg-amber-500/10 rounded-lg">
          هنوز هیچ دوره ای ثبت نام نکردی!
        </div>
      )}
    </main>
  );
}
