import React, { useEffect, useState } from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import CourseBox from "../CourseBox/CourseBox";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

export default function PresellCourses() {
  const [PresellCourses, setpresellCourses] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/v1/courses/presell`)
      .then((res) => res.json())
      .then((allpresell) => {
        setpresellCourses(allpresell);
      });
  }, []);

  return (
    <div className="mb-48">
      <div className="container">
        <SectionHeader
          title="دوره های در حال پیش فروش"
          desc="متن تستی برای توضیحات دوره های پیش فروش"
        />
        <div className="container">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
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
            {PresellCourses.map((course) => (
              <>
                <SwiperSlide key={course._id}>
                  <CourseBox {...course} isSlider={true} />
                </SwiperSlide>
              </>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
