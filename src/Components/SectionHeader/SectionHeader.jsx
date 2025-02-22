import React from "react";
import { Link } from "react-router-dom";
import { HiArrowUpLeft, HiOutlineChevronLeft } from "react-icons/hi2";

export default function SectionHeader({ title, desc, titleValue, btnTitle, btnHref }) {
  return (
    <div className="container">
      <div className="flex-center sm:justify-between flex-wrap flex-col mb-14 sm:mb-20 sm:flex-row gap-x-4 gap-y-7 text-darkColor dark:text-white">
        <div className="space-y-2 sm:space-y-3 sm:self-start mb-6 sm:mb-0">
          <div className="flex-center sm:justify-start gap-x-2.5">
            {/* <span className="hidden sm:inline-block w-8 h-8 bg-cyan-600 rounded-full mt-3"></span> */}
            <span className="hidden sm:block w-1 h-16 bg-light-blue-600 rounded-r-full shadowLightBlue ml-2 mt-3"></span>
            <h3 className="font-EstedadBold text-[2.4rem] sm:text-[2.7rem]">{title}</h3>
          </div>
          {desc ? (
          <p className="font-Dirooz sm:text-3xl text-center sm:text-right opacity-70">
            {desc}
          </p>
          ) : null}
        </div>
        {btnTitle ? (
          <div className="courses-header__left sm:self-end">
            <Link
              to={`/${btnHref}`}
              className="relative flex text-[1.7rem] md:text-3xl tracking-tighter text-light-blue-700 hover:text-purple-200 group"
            >
              <div className="font-EstedadMedium pb-2 pl-5 border-b-2 border-b-light-blue-700 group-hover:border-b-pink-200 transition-colors">
                {btnTitle}
              </div>
              <HiArrowUpLeft className="absolute -left-[2.3rem] -bottom-2 text-5xl transition-colors" />
            </Link>
          </div>
        ) : null}
        {titleValue ? (
          <div className="courses-header__left">
            <p className="text-[1.7rem] sm:text-[2rem] text-[#64748b] font-EstedadBold -mt-8 sm:mt-0">
              {titleValue}
            </p>
          </div>
        ) : null}
        {}
      </div>
    </div>
  );
}
