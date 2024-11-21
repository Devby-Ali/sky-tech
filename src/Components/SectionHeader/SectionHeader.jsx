import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineChevronLeft } from "react-icons/hi2";

export default function SectionHeader({ title, desc, titleValue, btnTitle, btnHref }) {
  return (
    <div className="container">
      <div className="flex-center sm:justify-between flex-wrap flex-col mb-14 sm:mb-20 sm:flex-row gap-x-4 gap-y-7 text-darkColor dark:text-white">
        <div className="space-y-2 sm:space-y-3 sm:self-start mb-6 sm:mb-0">
          <div className="flex-center sm:justify-start gap-x-2.5">
            {/* <span className="hidden sm:inline-block w-8 h-8 bg-cyan-600 rounded-full mt-3"></span> */}
            <span className="hidden sm:block w-1 h-16 bg-light-blue-600 rounded-r-full shadowLightBlue ml-2 mt-3"></span>
            <h3 className="font-MikhakWoff2one font-bold text-[2.7rem] mb-5">{title}</h3>
          </div>
          {desc ? (
          <p className="font-Dirooz sm:text-3xl text-center sm:text-right opacity-70">
            {desc}
          </p>
          ) : null}
        </div>
        {btnTitle ? (
          <div className="courses-header__left">
            <Link
              to={`/${btnHref}`}
              className="relative flex text-[1.7rem] md:text-3xl tracking-tighter text-light-blue-700 hover:text-purple-200"
            >
              <div className="font-MikhakWoff2one font-bold pb-2 pl-8 border-b border-b-light-blue-700 hover:border-b-pink-200 transition-colors">
                {btnTitle}
              </div>
              <HiOutlineChevronLeft className="absolute -left-4 -bottom-[1.4rem] text-5xl transition-colors" />
            </Link>
          </div>
        ) : null}
        {titleValue ? (
          <div className="courses-header__left">
            <p className="text-[1.7rem] sm:text-[2rem] text-[#64748b] -mt-14 sm:mt-0">
              {titleValue}
            </p>
          </div>
        ) : null}
        {}
      </div>
    </div>
  );
}
