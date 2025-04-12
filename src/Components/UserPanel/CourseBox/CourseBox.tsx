import React from "react";
import { LiaUserSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { UserCourse as Course } from "types/Courses.types";

interface UserCourse {
  _id: string;
  course: Course;
  createdAt: string;
  price: number;
  updatedAt: string;
  user: string;
}

const CourseBox = ({ course }: UserCourse): React.JSX.Element => {
  return (
    <div
      key={course._id}
      className="course flex flex-col bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-lg h-full"
    >
      {/* <!-- Course Banner --> */}
      <div className="relative h-[15rem] group">
        <Link
          className="block w-full h-full rounded-t-lg overflow-hidden"
          to={`/course-info/${course.shortName}`}
          title={"props.name"}
        >
          <img
            className="block w-full h-full object-cover"
            src={`http://localhost:4000/courses/covers/${course.cover}`}
            alt={"props.name"}
          />
        </Link>
      </div>
      <div className={`grow px-6 py-6`}>
        {/* <!-- Course Title --> */}
        <h3 className="font-EstedadMedium text-[1.75rem] line-clamp-2">
          <Link to={`/course-info/${course.shortName}`}>
            {course.name}
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
            {course.isComplete === 1 ? "تکمیل شده" : "در حال برگزاری"}
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
  );
};

export default CourseBox;
