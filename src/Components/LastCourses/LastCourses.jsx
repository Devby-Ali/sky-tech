import React, { useEffect, useState } from "react";
import CourseBox from "../CourseBox/CourseBox";
import SectionHeader from "../SectionHeader/SectionHeader";

export default function LastCourses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/v1/courses`)
      .then((res) => res.json())
      .then((allCourses) => {
        setCourses(allCourses);
        console.log(allCourses);
      });
  }, []);

  return (
    <>
      <div className="my-16">
        <div className="container">
          <SectionHeader
            title="جدیدترین دوره ها"
            desc="سکوی پرتاپ شما به سمت موفقیت"
            btnTitle="تمامی دوره ها"
            btnHref="courses"
          />

          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 sm:gap-10">
              {courses.splice(0, 8).map((course) => (
                <CourseBox {...course} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
