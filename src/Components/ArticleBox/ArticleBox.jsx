import React from "react";
import { LiaUserSolid } from "react-icons/lia";
import { CiCalendar } from "react-icons/ci";
import { GoTriangleLeft } from "react-icons/go";

export default function ArticleBox({ title, desc, cover }) {
  return (
    <div className="blog flex flex-col bg-white dark:bg-darkBox text-darkColor dark:text-white overflow-hidden rounded-3xl">
      {/* <!-- Blog Banner --> */}
      <div className="blog__banner relative h-[182px] overflow-hidden">
        <img
          src={cover}
          className="block w-full h-full object-cover"
          alt="Article-Image"
          loading="lazy"
        />
        <div className="absolute bottom-0 right-0 left-0 h-44 bg-gradient-to-t from-white dark:from-darkBox from-0% via-white/[55%] dark:via-darkBox/[55%] via-40% to-white/0 dark:to-darkBox/0 to-100%"></div>
      </div>
      {/* <!-- Blog Title & Description --> */}
      <div className="flex-grow px-7 py-6">
        {/* <!-- Blog Title --> */}
        <h3 className="font-EstedadMedium text-[1.7rem] line-clamp-2 mb-5">
          <a href="">{title}</a>
        </h3>
        {/* <!-- Blog Description --> */}
        <p className="text-2xl line-clamp-4 opacity-70">{desc}</p>
      </div>
      {/* <!-- Blog Footer --> */}
      <div className="px-7 pb-8">
        {/* <!-- Blog Author & Date --> */}
        <div className="flex justify-between items-center text-blue-gray-700 dark:text-white/70 text-xl pb-6 border-b border-b-gray-400/70 dark:border-b-white/10">
          <div className="flex items-center gap-x-1">
            <div className="text-3xl">
              <LiaUserSolid />
            </div>
            <a href="">شهرام خندقی</a>
          </div>
          <div className="flex items-center gap-x-1">
            <div className="text-3xl">
              <CiCalendar />
            </div>
            <span>1403/08/21</span>
          </div>
        </div>
        {/* <!-- Blog Link Address --> */}
        <div className="flex justify-center mt-7">
          <a
            href="#"
            className="flex items-center gap-x-1 text-3xl hover:text-light-blue-600 font-EstedadMedium transition-colors"
          >
            <span>مطالعه مقاله</span>
            <GoTriangleLeft />
          </a>
        </div>
      </div>
    </div>
  );
}

