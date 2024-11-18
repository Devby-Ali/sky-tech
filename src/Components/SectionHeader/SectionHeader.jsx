import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

export default function SectionHeader({ title, desc, btnTitle, btnHref }) {
  return (
    <div className="flex-center sm:justify-between flex-wrap flex-col mb-14 sm:mb-16 sm:flex-row gap-x-4 gap-y-7 text-darkColor dark:text-white">
      <div className="space-y-2 sm:space-y-3 sm:self-start mb-6 sm:mb-0">
        <div className="flex-center sm:justify-start gap-x-2.5">
          {/* <span className="hidden sm:inline-block w-8 h-8 bg-cyan-600 rounded-full mt-3"></span> */}
          <span className="block w-1 h-16 bg-light-blue-600 rounded-r-full shadowLightBlue ml-2 mt-3"></span>
          <h3 className="font-EstedadBold text-5xl mb-5">{title}</h3>
        </div>
        <p className="text-slate-500 font-Dirooz sm:text-3xl text-center sm:text-right text-blue-gray-700 dark:text-blue-gray-400">
          {desc}
        </p>
      </div>
      {btnTitle ? (
        <div className="courses-header__left rounded-md rounded-l-full overflow-hidden">
          <Link
            to={`/${btnHref}`}
            className="flex-center text-2xl md:text-3xl tracking-tighter bg-light-blue-800 hover:bg-light-blue-900 text-darkColor dark:text-white rounded-md py-3 px-3 md:py-4 md:px-5 transition-all"
          >
            {btnTitle}
            <IoIosArrowBack className="text-4xl mr-2" />
          </Link>
        </div>
      ) : null}
    </div>
  );
}
