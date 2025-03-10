import React from "react";
import { HiOutlineCheckCircle, HiOutlineXCircle } from "react-icons/hi2";
import Button from "../Form/Button";

export default function SortedCourses({
  openSortCourses,
  closeDrawerSort,
  setStatus,
  status,
  statusTitleChangeHandler,
}) {
  return (
    <div
      className={`fixed right-0 left-0 md:hidden transition-all z-50 ${
        openSortCourses === true
          ? "visible bottom-0"
          : "invisible -bottom-[36rem]"
      }`}
    >
      <div className="text-slate-900 dark:text-white bg-white dark:bg-slate-800 rounded-t-4xl overflow-hidden">
        <div className="flex items-center justify-between bg-[#333c4c] p-8">
          <span className="font-EstedadBold text-[2rem]">
            مرتب سازی بر اساس
          </span>
          <button className="">
            <div onClick={closeDrawerSort} className="text-[3.5rem]">
              <HiOutlineXCircle />
            </div>
          </button>
        </div>
        <div className="text-[1.7rem] px-8 space-y-9 divide-y divide-slate-800/30 dark:divide-white/20">
          <Button
            onClick={(event) => {
              closeDrawerSort();
              setStatus("default");
              statusTitleChangeHandler(event);
            }}
            className={`flex items-center justify-between w-full pt-9 ${
              status === "default" && "text-sky-600"
            }`}
          >
            <div>همه دوره ها</div>
            {status === "default" && (
              <span className="text-5xl">
                <HiOutlineCheckCircle />
              </span>
            )}
          </Button>
          <Button
            onClick={(event) => {
              closeDrawerSort();
              setStatus("cheapest");
              statusTitleChangeHandler(event);
            }}
            className={`flex items-center justify-between w-full pt-8 ${
              status === "cheapest" && "text-sky-600"
            }`}
          >
            <div>ارزان ترین</div>
            {status === "cheapest" && (
              <span className="text-5xl">
                <HiOutlineCheckCircle />
              </span>
            )}
          </Button>
          <Button
            onClick={(event) => {
              closeDrawerSort();
              setStatus("expensive");
              statusTitleChangeHandler(event);
            }}
            className={`flex items-center justify-between w-full pt-8 ${
              status === "expensive" && "text-sky-600"
            }`}
          >
            <div>گران ترین</div>
            {status === "expensive" && (
              <span className="text-5xl">
                <HiOutlineCheckCircle />
              </span>
            )}
          </Button>
          <Button
            onClick={(event) => {
              closeDrawerSort();
              setStatus("last");
              statusTitleChangeHandler(event);
            }}
            className={`flex items-center justify-between pt-8 w-full pb-12 ${
              status === "last" && "text-sky-600"
            }`}
          >
            <div>پرمخاطب ها</div>
            {status === "last" && (
              <span className="text-5xl">
                <HiOutlineCheckCircle />
              </span>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
