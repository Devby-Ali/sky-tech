import React, { useEffect, useState } from "react";
import CourseBox from "../CourseBox/CourseBox";
import SectionHeader from "../SectionHeader/SectionHeader";

export default function LastCourses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/v1/courses`)
      .then((res) => res.json())
      .then((allCourses) => {
        console.log(allCourses);
        setCourses(allCourses);
      });
  }, []);

  return (
    <>
      <div className="mb-48">
        <div className="container">
          <SectionHeader
            title="جدیدترین دوره ها"
            desc="سکوی پرتاپ شما به سمت موفقیت"
            btnTitle="تمامی دوره ها"
            btnHref="courses/1"
            Page={"Index"}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 sm:gap-10">
            {courses
              .slice()
              .reverse()
              .splice(0, 12)
              .map((course) => (
                <CourseBox {...course} key={course._id} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
