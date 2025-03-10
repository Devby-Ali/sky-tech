import React from "react";
import {
  HiOutlineCheckCircle,
  HiOutlineTrash,
  HiOutlineXCircle,
} from "react-icons/hi2";
import Button from "../Form/Button";
import { FaSquare } from "react-icons/fa";

export default function FilteredCourses({
  openFilteredCourses,
  closeDrawerFilter,
  setStatusFilter,
  statusFilter,
}) {
  return (
    <div
      className={`fixed right-0 left-0 md:hidden transition-all z-50 ${
        openFilteredCourses === true
          ? "visible bottom-0"
          : "invisible -bottom-[36rem]"
      }`}
    >
      <div className="text-slate-900 dark:text-white bg-white dark:bg-slate-800 rounded-t-4xl overflow-hidden">
        <div className="flex items-center justify-between bg-[#333c4c] p-8">
          <span className="font-EstedadBold text-[2rem]">فیلتر ها</span>
          <button className="">
            <div onClick={closeDrawerFilter} className="text-[3.5rem]">
              <HiOutlineXCircle />
            </div>
          </button>
        </div>
        <div className="text-[1.7rem] px-8 space-y-9 divide-y divide-slate-800/30 dark:divide-white/20">
          <div
            className="flex items-center justify-between w-full pt-8"
            onClick={() => {
              closeDrawerFilter();
              setStatusFilter("default");
            }}
          >
            <span className="font-EstedadMedium text-[1.7rem]">حذف فیلتر</span>
            <span className="text-4xl">
              <HiOutlineTrash />
            </span>
          </div>
          <div
            className="flex items-center justify-between w-full pt-8"
            onClick={() => {
              closeDrawerFilter();
              setStatusFilter("free");
            }}
          >
            <div>فقط دوره های رایگان</div>
            <span
              className={`opacity-70 ${
                statusFilter === "free" ? "text-sky-500" : "text-white"
              }`}
            >
              <FaSquare />
            </span>
          </div>
          <Button
            className={`flex items-center justify-between w-full pt-8 ${
              statusFilter === "preSale" && "text-sky-600"
            }`}
          >
            <div>در حال پیش فروش</div>
            <input
              className="outline-hidden w-6 h-6"
              type="checkbox"
              onClick={() => {
                closeDrawerFilter();
                setStatusFilter("preSale");
              }}
              disabled={true}
              name=""
              id=""
            />
          </Button>
          <Button
            className={`flex items-center justify-between pt-8 w-full pb-12 ${
              statusFilter === "purchased" && "text-sky-600"
            }`}
          >
            <div>دوره ها خریداری شده</div>
            <input
              className="outline-hidden w-6 h-6"
              type="checkbox"
              onClick={() => {
                closeDrawerFilter();
                setStatusFilter("purchased");
              }}
              disabled={true}
              name=""
              id=""
            />
          </Button>
        </div>
      </div>
    </div>
  );
}
