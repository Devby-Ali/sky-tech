import React, { useEffect, useState } from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import CourseBox from "../CourseBox/CourseBox";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

export default function PopularCourses() {
  const [popularCourses, setPopularCourses] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/v1/courses/popular`)
      .then((res) => res.json())
      .then((allPopular) => {
        setPopularCourses(allPopular);
      });
  }, []);

  return (
    <div className="mb-48">
      <div className="container">
        <div className="relative">
          <SectionHeader
            title="محبوب ترین دوره ها"
            desc="دوره های محبوب بر اساس امتیاز دانشجوها"
            Page={"Index"}
          />

          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={false}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 25,
              },
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 4,
              },
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {popularCourses.map((course) => (
              <SwiperSlide key={course._id}>
                <CourseBox {...course} isSlider={true} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="hidden lg:block absolute left-0 top-0 -translate-x-1/3 -translate-y-6/10 size-75 bg-green-500 opacity-25 blur-[125px] -z-10 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
