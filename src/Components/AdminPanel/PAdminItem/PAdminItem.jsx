import React from "react";
import { HiBookOpen, HiUserPlus } from "react-icons/hi2";
import { MdPlayLesson } from "react-icons/md";

export default function PAdminItem({ title, count }) {
  return (
    <>
      <div className="w-full flex flex-col gap-6 bg-white dark:bg-darkBox rounded-xl p-8 lg:p-12">
        <div className="flex items-center justify-between text-7xl pl-8">
          <div>
            <p className="text-5xl lg:text-6xl mb-2">{title}</p>
            <span className="text-3xl lg:text-4xl">{count}</span>
          </div>
          {title === "ثبت نامی‌ها"  && <HiUserPlus />}
          {title === "دوره‌ها"  && <HiBookOpen />}
          {title === "جلسات"  && <MdPlayLesson />}
        </div>
        <p className="text-3xl sm:text-2xl md:text-3xl">
          {title} در یک ماه گذشته
        </p>
      </div>
    </>
  );
}
