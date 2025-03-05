import React from "react";
import { Link } from "react-router-dom";
import { HiArrowUpLeft, HiOutlineChevronLeft } from "react-icons/hi2";

export default function SectionHeader({
  title,
  desc,
  titleValue,
  btnTitle,
  btnHref,
}) {
  return (
    <div className="flex-center sm:justify-between flex-wrap flex-col mb-14 sm:mb-20 sm:flex-row gap-x-4 gap-y-7 text-slate-900 dark:text-white">
      <div className="space-y-2 sm:space-y-3 sm:self-start mb-6 sm:mb-0">
        <div className="flex-center sm:justify-start gap-x-2.5">
          {/* <span className="hidden sm:inline-block w-8 h-8 bg-cyan-600 rounded-full mt-3"></span> */}
          <span className="hidden sm:block w-[2px] h-16 bg-sky-500 rounded-r-full shadowLightBlue ml-2 mt-3"></span>
          <h3 className="font-EstedadBold text-[2.4rem] sm:text-[2.5rem]">
            {title}
          </h3>
        </div>
        {desc ? (
          <p className="font-Dirooz sm:text-[1.7rem] text-center sm:text-right opacity-70">
            {desc}
          </p>
        ) : null}
      </div>
      {btnTitle ? (
        <div className="courses-header__left sm:self-end sm:ml-8">
          <Link
            to={`/${btnHref}`}
            className="relative flex text-[1.6rem] tracking-tighter text-sky-700 dark:text-sky-500 hover:text-purple-500 group"
          >
            <div className="font-Dirooz pb-1 pl-3 border-b-2 border-b-sky-700 dark:border-b-sky-500 group-hover:border-b-purple-500 transition-colors">
              {btnTitle}
            </div>
            <HiArrowUpLeft className="absolute -left-[1.8rem] -bottom-1 text-4xl transition-colors" />
          </Link>
        </div>
      ) : null}
      {titleValue ? (
        <div className="courses-header__left">
          <p className="sm:text-[1.7rem] text-[#64748b] font-EstedadBold -mt-8 sm:mt-0">
            {titleValue}
          </p>
        </div>
      ) : null}
      {}
    </div>
  );
}
