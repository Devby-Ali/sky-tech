import React from "react";
import { Link } from "react-router-dom";
import { HiArrowUpLeft, HiOutlineChevronLeft } from "react-icons/hi2";

export default function SectionHeader({
  title,
  desc,
  titleValue,
  btnTitle,
  btnHref,
  Page,
}) {
  return (
    <div className="flex-center sm:justify-between flex-wrap flex-col mb-14 sm:mb-20 sm:flex-row gap-x-4 gap-y-7 text-slate-900 dark:text-white">
      <div className="space-y-2 sm:space-y-3 sm:self-start mb-6 sm:mb-0">
        <div className="flex-center sm:justify-start gap-x-2.5">
          {Page && (
            <span className="hidden sm:block w-[3px] h-18 bg-sky-500 rounded-r-full shadowLightBlue -ml-2.5"></span>
          )}
          <h3
            className={`font-EstedadBold ${
              Page
                ? "sm:bg-gradient-to-l from-sky-600/25 dark:from-sky-500/5 to-transparent pr-4 py-1"
                : "sm:border-b-1 sm:border-t-1 sm:border-r-1 sm:border-sky-500/20 pl-10 pr-9 pt-1.5 sm:pb-3 rounded-xl sm:bg-gradient-to-l from-sky-600/25 dark:from-sky-500/15 to-transparent"
            } text-[2.4rem] sm:text-[2.5rem]`}
          >
            {title}
          </h3>
        </div>
        {desc && (
          <p className="font-Dirooz sm:text-[1.7rem] text-center sm:text-right opacity-70">
            {desc}
          </p>
        )}
      </div>
      {btnTitle && (
        <div className="courses-header__left sm:self-end sm:ml-8">
          <Link
            to={`/${btnHref}`}
            className="relative flex text-[1.6rem] tracking-tighter text-sky-700 dark:text-sky-500 hover:text-purple-400 group"
          >
            <div className="font-Dirooz pb-1 pl-3 border-b-2 border-b-sky-600 dark:border-b-sky-600 group-hover:border-b-purple-400/80 transition-colors">
              {btnTitle}
            </div>
            <HiArrowUpLeft className="absolute -left-[1.8rem] -bottom-1 text-4xl transition-colors" />
          </Link>
        </div>
      )}
      {titleValue && (
        <div className="courses-header__left">
          <p className="sm:text-[1.8rem] text-slate-500 font-EstedadMedium -mt-8 sm:mt-0">
            {titleValue}
          </p>
        </div>
      )}
    </div>
  );
}
