import React, { useState } from "react";
import CircleSpinner from "../CircleSpinner/CircleSpinner";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";


export default function CourseBox() {

  const [isImgShow, setIsImgShow] = useState(false)

  const onImageLoaded = () => setIsImgShow(true)

  const onImageError = () => {
    // Codes
  }

  return (
    <div className="my-8 bg-white dark:bg-zinc-700 shadow-normal rounded-3xl hover:-translate-y-2 transition-all duration-300">
      <a href="#">
          <img
            src="/images/courses/fareelancer.png"
            alt="Course img"
            className="w-full rounded-t-2xl"
            onLoad={onImageLoaded}
            onError={onImageError}
          />
          {
            !isImgShow && (
              <CircleSpinner />
            )
          }
        </a>
      <div className="px-3 space-y-2 xs:space-y-6 my-4">
        <a href="#" className="text-lg xs:text-xl md:text-2xl lg:text-3xl block line-clamp-1">
          دوره پروژه محور متخصص جنگو
        </a>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
           <FaChalkboardTeacher className="text-zinc-500 text-3xl" />
            <a href="#" className="text-zinc-500 text-base xs:text-xl m-1.5">
              رضا دولتی
            </a>
          </div>
          <div className="flex child:w-5 child:h-5 xs:child:w-7 xs:child:h-7">
            <img
              src="/images/svgs/star.svg"
              alt="rating"
            />
            <img
              src="/images/svgs/star_fill.svg"
              alt="rating"
            />
            <img
              src="/images/svgs/star_fill.svg"
              alt="rating"
            />
            <img
              src="/images/svgs/star_fill.svg"
              alt="rating"
            />
            <img
              src="/images/svgs/star_fill.svg"
              alt="rating"
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex-center gap-x-2">
          <FaUsers className="text-zinc-500 text-3xl" />
            <span className="text-zinc-500 text-xl">500</span>
          </div>
        <span className="text-zinc-400 text-2xl xs:text-3xl">1,000,000</span>
        </div>
      </div>
      <span className="block w-full h-0.5 bg-zinc-200"></span>
      <div className="course-box__footer flex-center py-4.5">
        <a href="#" className="flex-center text-xl xs:text-2xl lg:text-3xl text-lightishBlue-400 hover:text-teal-500">
          مشاهده اطلاعات
          <FaChevronLeft className="mr-1" />
        </a>
      </div>
    </div>
  );
}
