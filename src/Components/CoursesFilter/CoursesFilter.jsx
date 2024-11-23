import React, { useState } from "react";
import { HiChevronDown, HiOutlineFolderOpen } from "react-icons/hi2";

export default function CoursesFilter() {
  const [filterOpen, setFilterOpen] = useState(false);

  const filterOpenHandler = () => {
    setFilterOpen(!filterOpen);
  }

  return (
    <div>

      {!filterOpen ? (
        // Category Filter Close
              <div className="hidden md:flex items-center justify-between h-[6.8rem] bg-white dark:bg-darkBox rounded-[1.2rem] p-7 md:px-8">
              <div className="flex items-center gap-x-4 font-EstedadMedium text-[1.7rem]">
                <div className="text-[2.7rem]">
                  <HiOutlineFolderOpen />
                </div>
                دسته بندی دوره ها{" "}
              </div>
              <button
                type="button"
                data-collapse="#category-collapse"
                data-height="h-16"
              >
                <div className="text-4xl">
                  <HiChevronDown onClick={() => filterOpenHandler()} />
                </div>
              </button>
            </div>
      ) : (
        // Category Filter Open
        <div
        className="bg-white dark:bg-darkBox rounded-[1.2rem] hidden md:block overflow-hidden"
        id="category-collapse"
      >
        <div className="hidden md:flex items-center justify-between h-[6.8rem] bg-white dark:bg-darkBox py-7 mx-8 border-b border-b-gray-300 dark:border-b-white/10">
          <div className="flex items-center gap-x-4 font-EstedadMedium text-[1.7rem]">
            <div className="text-[2.7rem]">
              <HiOutlineFolderOpen />
            </div>
            دسته بندی دوره ها{" "}
          </div>
          <button
            type="button"
            data-collapse="#category-collapse"
            data-height="h-16"
          >
            <div className="text-4xl rotate-180">
              <HiChevronDown onClick={() => filterOpenHandler()} />
            </div>
          </button>
        </div>
        <div className="flex flex-col space-y-6 mx-8 my-8">
          <label className="flex items-center gap-x-2">
            <input
              className="w-6 h-6 opacity-40"
              name="category[4]"
              value="yes"
              type="checkbox"
            />
            <span className="checkbox__marker"></span>
            <span className="text-[1.7rem] select-none">فرانت اند</span>
          </label>
          <label className="flex items-center gap-x-2">
            <input
              className="w-6 h-6 opacity-40"
              name="category[49]"
              value="yes"
              type="checkbox"
            />
            <span className="checkbox__marker"></span>
            <span className="text-[1.7rem] select-none">ارتقای مهارت ها</span>
          </label>
          <label className="flex items-center gap-x-2">
            <input
              className="w-6 h-6 opacity-40"
              name="category[6]"
              value="yes"
              type="checkbox"
            />
            <span className="checkbox__marker"></span>
            <span className="text-[1.7rem] select-none">بک اند</span>
          </label>
          <label className="flex items-center gap-x-2">
            <input
              className="w-6 h-6 opacity-40"
              name="category[8]"
              value="yes"
              type="checkbox"
            />
            <span className="checkbox__marker"></span>
            <span className="text-[1.7rem] select-none">امنیت</span>
          </label>
          <label className="flex items-center gap-x-2">
            <input
              className="w-6 h-6 opacity-40"
              name="category[7]"
              value="yes"
              type="checkbox"
            />
            <span className="checkbox__marker"></span>
            <span className="text-[1.7rem] select-none">پایتون</span>
          </label>
          <label className="flex items-center gap-x-2">
            <input
              className="w-6 h-6 opacity-40"
              name="category[9]"
              value="yes"
              type="checkbox"
            />
            <span className="checkbox__marker"></span>
            <span className="text-[1.7rem] select-none">مهارت های نرم</span>
          </label>
          <label className="flex items-center gap-x-2">
            <input
              className="w-6 h-6 opacity-40"
              name="category[50]"
              value="yes"
              type="checkbox"
            />
            <span className="checkbox__marker"></span>
            <span className="text-[1.7rem] select-none">پی اچ پی</span>
          </label>
          <label className="flex items-center gap-x-2">
            <input
              className="w-6 h-6 opacity-40"
              name="category[14]"
              value="yes"
              type="checkbox"
            />
            <span className="checkbox__marker"></span>
            <span className="text-[1.7rem] select-none">هوش مصنوعی</span>
          </label>
        </div>
      </div>
      )}
    </div>
  );
}
