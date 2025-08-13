import React, { useEffect, useState } from "react";
import CourseBox from "../CourseBox/CourseBox";
import SectionHeader from "../SectionHeader/SectionHeader";
import { CourseBoxProp } from "types/Courses.types";
import { fetchAllCourses } from "../../Services/Axios/Requests/Courses";

const LastCourses = (): React.JSX.Element => {
  const [courses, setCourses] = useState<CourseBoxProp[]>([]);

  useEffect(() => {
    const getCourses = async () => {
      try {
        const res = await fetchAllCourses();
        setCourses(res);
      } catch (error) {
        console.error("Error fetching last courses:", error);
      }
    };
    getCourses();
  }, []);

  return (
    <>
      <section className="container mb-48">
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
      </section>
    </>
  );
};

export default LastCourses;
