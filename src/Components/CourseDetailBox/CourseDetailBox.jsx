import React from "react";

export default function CourseDetailBox({ icon, title, text }) {
  return (
    <div className="flex flex-col md:flex-row text-center md:text-right items-center justify-center sm:justify-start gap-x-5 xl:gap-x-7 gap-y-5 bg-white dark:bg-darkBox pt-7 pb-6 sm:py-7 px-8 rounded-3xl text-darkColor dark:text-white">
      <div className="text-6xl text-lightishBlue-500">
      {icon}
      </div>
      <div className="space-y-2 sm:space-y-4">
        <span className="block font-EstedadBold text-2xl sm:text-[1.7rem]">
        {title}
        </span>
        <span className="block text-2xl opacity-70">{text}</span>
      </div>
    </div>
  );
}

