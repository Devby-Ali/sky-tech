import React, { useEffect, useState } from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import CourseBox from "../CourseBox/CourseBox";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { CourseBoxProp } from "types/Courses.types";
import { fetchingCustomOfCourses } from "../../Services/Axios/Requests/Courses";

const PresellCourses = (): React.JSX.Element => {
  const [PresellCourses, setpresellCourses] = useState<CourseBoxProp[]>([]);

  useEffect(() => {
    const getPresellCourses = async () => {
      try {
        const res = await fetchingCustomOfCourses("/courses/presell");
        setpresellCourses(res);
      } catch (error) {
        console.error("Error fetching presell courses:", error);
      }
    };
    getPresellCourses();
  }, []);

  return (
    <div className="mb-48">
      <div className="relative container">
        <SectionHeader
          title="دوره های در حال پیش فروش"
          desc="متن تستی برای توضیحات دوره های پیش فروش"
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
          {PresellCourses.map((course) => (
            <SwiperSlide key={course._id}>
              <CourseBox {...course} isSlider={true} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="hidden lg:block absolute right-0 -top-10 translate-x-1/3 -translate-y-6/10 size-75 bg-sky-400 opacity-35 blur-[125px] -z-10 rounded-full"></div>
      </div>
    </div>
  );
};

export default PresellCourses;
