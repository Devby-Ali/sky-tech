import React from "react";
import CourseBox from "../CourseBox/CourseBox";
import SectionHeader from "../SectionHeader/SectionHeader";

export default function LastCourses() {
  return (
    <>
      <div className="my-16">
        <div className="container">
          <SectionHeader
            title="جدیدترین دوره ها"
            desc="سکوی پرتاپ شما به سمت موفقیت"
            btnTitle="تمامی دوره ها"
            btnHref='courses'
          />

          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 md:gap-5">
              <CourseBox />
              <CourseBox />
              <CourseBox />
              <CourseBox />
              <CourseBox />
              <CourseBox />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
