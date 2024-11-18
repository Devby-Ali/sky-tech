import React, { useState } from "react";
import CircleSpinner from "../CircleSpinner/CircleSpinner";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

export default function CourseBox() {
  const [isImgShow, setIsImgShow] = useState(false);

  const onImageLoaded = () => setIsImgShow(true);

  const onImageError = () => {
    // Codes
  };

  return (
    <div className="relative">
      {/* <!-- Course Banner --> */}
      <div className="-mb-5 group">
        <a href="block w-full h-full">
          <img
            className="block w-full h-full object-cover rounded-2xl"
            src="https://sabzlearn.ir/wp-content/uploads/2023/11/Course-thumbnail-Algorithm-1-768x432.webp"
            alt="آموزش الگوریتم و ساختمان داده به زبان ساده"
          />
        </a>
        {/* <!-- Offer percent  --> */}
        <span className="absolute right-5 top-5 flex-center w-20 h-12 bg-green-500 text-white font-danaMedium text-sm rounded-full">
          20%
        </span>
      </div>
      <div className="course flex flex-col bg-white dark:bg-darkBox rounded-2xl">
        {/* <!-- Course Title & Description --> */}
        <div className="flex-grow px-4.5 pt-4 pb-3">
          {/* <!-- Course Title --> */}
          <h3 className="font-danaDemiBold line-clamp-2 mb-3">
            <a href="https://sabzlearn.ir/course/algorithm/">
              آموزش الگوریتم و ساختمان داده به زبان ساده
            </a>
          </h3>
          {/* <!-- Course Description --> */}
          <p className="text-sm line-clamp-2 opacity-70">
            ساختمان داده و الگوریتم، یک مهارت ضروری برای ورود به دنیای برنامه
            نویسیه که دیدگاه شما رو به مسائل مختلف…
          </p>
        </div>
        {/* <!-- Course Footer --> */}
        <div className="px-4.5 pb-3">
          {/* <!-- Teacher & Rating --> */}
          <div className="flex justify-between gap-2.5 text-slate-500 dark:text-white/70 text-sm pb-3 border-b border-b-neutral-200/70 dark:border-b-white/10">
            <div className="flex items-center gap-x-0.5 hover:text-green-500 transition-colors">
              <svg className="w-5 h-5">
                <use href="#user"></use>
              </svg>
              <a href="https://sabzlearn.ir/teacher/rezadolati01">رضا دولتی</a>
            </div>
            {/* <!-- Rating --> */}
            <div className="flex items-center gap-x-0.5 text-amber-500">
              <span className="font-danaMedium">5.0</span>
              <svg className="w-5 h-5">
                <use href="#star-mini"></use>
              </svg>
            </div>
          </div>
          <div className="flex items-end justify-between mt-1.5">
            <span className="flex items-center gap-x-0.5 text-slate-500 dark:text-white/70 text-sm">
              <svg className="w-5 h-5">
                <use href="#users"></use>
              </svg>
              499{" "}
            </span>
            {/* <!-- Price --> */}
            <div className="flex flex-col">
              <span className="text-sm text-slate-500 dark:text-white/70 -mb-1.5 line-through">
                2,300,000{" "}
              </span>
              <span className="text-green-500 font-danaDemiBold text-lg">
                1,840,000{" "}
                <svg className="w-3.5 h-3.5">
                  <use href="#toman"></use>
                </svg>{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
