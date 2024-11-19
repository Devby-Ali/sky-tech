import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineChevronLeft } from "react-icons/hi2";

export default function SectionHeader({ title, desc, btnTitle, btnHref }) {
  return (
    <div className="container">
      <div className="flex-center sm:justify-between flex-wrap flex-col mb-14 sm:mb-20 sm:flex-row gap-x-4 gap-y-7 text-darkColor dark:text-white">
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
          <div className="courses-header__left">
            <Link
              to={`/${btnHref}`}
              className="relative flex text-[1.7rem] md:text-3xl tracking-tighter text-light-blue-700 transition-all"
            >
              <div className="flex flex-col font-EstedadBold gap-y-1 md:gap-y-1.5">
                {btnTitle}
                <span className="inline-block h-[2px] w-40 md:w-44 bg-light-blue-700"></span>
              </div>
              <HiOutlineChevronLeft className="absolute -left-4 -bottom-[1.4rem] text-5xl" />
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  );
}
