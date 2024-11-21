import React from "react";
import Topbar from "./../../Components/Topbar/Topbar";
import Navbar from "./../../Components/Navbar/Navbar";
import Footer from "./../../Components/Footer/Footer";
import CourseBox from "./../../Components/CourseBox/CourseBox";
import { FaLongArrowAltRight } from "react-icons/fa";
import SectionHeader from "../../Components/SectionHeader/SectionHeader";



export default function Courses() {
  return (
    <>
      {/* <Topbar /> */}
      <Navbar />

      {/* <!--------------------------------  Courses-Section  --------------------------------> */}
      <section className="courses pt-48">
        <SectionHeader title={"دوره ها"} titleValue={"۶۴ دوره ی آموزشی"} />
        <div className="container">
          <div className="courses-content">
            <div className="container">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5 md:gap-5">
                <CourseBox />
                <CourseBox />
                <CourseBox />
                <CourseBox />
                <CourseBox />
                <CourseBox />
                <CourseBox />
                <CourseBox />
              </div>
            </div>
          </div>

          <div className="my-12">
            <ul className="flex-center">
              <li className="courses__pagination-item">
                <a href="#" className="courses__pagination-link rounded-lg w-16 h-16 flex-center text-2xl mx-2 bg-slate-200 hover:text-white hover:bg-lightishBlue-500">
                <FaLongArrowAltRight />
                </a>
              </li>
              <li className="courses__pagination-item">
                <a
                  href="#"
                  className="courses__pagination-link rounded-lg w-16 h-16 flex-center text-2xl mx-2 bg-slate-200 hover:text-white hover:bg-lightishBlue-500 courses__pagination-link--active"
                >
                  1
                </a>
              </li>
              <li className="courses__pagination-item">
                <a href="#" className="courses__pagination-link rounded-lg w-16 h-16 flex-center text-2xl mx-2 bg-slate-200 hover:text-white hover:bg-lightishBlue-500">
                  2
                </a>
              </li>
              <li className="courses__pagination-item">
                <a href="#" className="courses__pagination-link rounded-lg w-16 h-16 flex-center text-2xl mx-2 bg-slate-200 hover:text-white hover:bg-lightishBlue-500">
                  3
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* <!--------------------------------  Courses-Section  --------------------------------> */}

      <Footer />
    </>
  );
}
