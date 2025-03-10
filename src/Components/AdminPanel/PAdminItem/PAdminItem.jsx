import React from "react";
import { HiBookOpen, HiUserPlus } from "react-icons/hi2";
import { MdPlayLesson } from "react-icons/md";

export default function PAdminItem({ title, count }) {
  return (
    <>
      <div className="w-full h-96 flex justify-between flex-col bg-white dark:bg-slate-800 rounded-xl p-8 lg:p-12">
        <p className="text-4xl lg:text-[2.7rem]">{title}</p>

        <div className="flex w-full items-center justify-between text-7xl pl-8">
          <span className="text-3xl lg:text-4xl">{count}</span>
          {title === "ثبت نامی‌ها" && <HiUserPlus />}
          {title === "دوره‌ها" && <HiBookOpen />}
          {title === "جلسات" && <MdPlayLesson />}
        </div>

        <p className="text-3xl sm:text-xl md:text-3xl">
          {title} در یک ماه گذشته
        </p>
      </div>
    </>
  );
}
