import React, { useEffect, useState } from "react";
import { UserCourse as Course } from "types/Courses.types";
import CourseBox from "../../../Components/UserPanel/CourseBox/CourseBox";

interface UserCourse {
  _id: string;
  course: Course;
  createdAt: string;
  price: number;
  updatedAt: string;
  user: string;
}

const Courses = (): React.JSX.Element => {
  const [courses, setCourses] = useState<UserCourse[]>([]);

  useEffect(() => {
    fetch(`http://localhost:4000/v1/users/courses/`, {
      headers: {
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("user")!).token
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
            <CourseBox {...course} key={course._id} />
          ))}
        </section>
      ) : (
        <div className="w-full text-3xl px-8 py-6 text-amber-600 bg-amber-500/10 rounded-lg">
          هنوز هیچ دوره ای ثبت نام نکردی!
        </div>
      )}
    </main>
  );
};

export default Courses;
