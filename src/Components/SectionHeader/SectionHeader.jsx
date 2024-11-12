import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDropleftCircle } from "react-icons/io";

export default function SectionHeader({ title, desc, btnTitle, btnHref }) {
  return (
    <div className="flex-center sm:justify-between flex-wrap flex-col mb-7 sm:mb-10 sm:flex-row gap-x-4 gap-y-7">
      <div className="space-y-2 sm:space-y-3 sm:self-start">
        <div className="flex-center sm:justify-start gap-x-2.5">
          <span className="hidden sm:inline-block w-8 h-8 bg-cyan-600 rounded-full mt-3"></span>
          <h3 className="font-EstedadBold text-3xl sm:text-4xl">{title}</h3>
        </div>
        <p className="text-slate-500 font-Dirooz sm:text-2xl text-center sm:text-right">
          {desc}
        </p>
      </div>
      {btnTitle ? (
        <div className="courses-header__left">
          <Link
            to={`/${btnHref}`}
            className="flex-center text-white text-base md:text-xl tracking-tighter bg-cyan-600 rounded-lg h-14 md:h-16 px-3 md:px-5 hover:bg-emerald-500 hover:text-white transition-all"
          >
            {btnTitle}
            <IoIosArrowDropleftCircle className="text-4xl mr-2" />
          </Link>
        </div>
      ) : null}
    </div>
  );
}
