// import React, { useState } from "react";
import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import LastCourses from "../../Components/LastCourses/LastCourses";
import AboutUs from "../../Components/AboutUs/AboutUs";
import PopularCourses from "../../Components/PopularCourses/PopularCourses";
import PresellCourses from "../../Components/PresellCourses/PresellCourses";
import LastArticles from "../../Components/LastArticles/LastArticles";
import Footer from "../../Components/Footer/Footer";

export default function Index() {
  const [show, setModalShow] = useState(true);

  return (
    <>
      <div className="absolute -z-10 opacity-40 dark:opacity-20">
        <img src="/images/sky.png" alt="" />
      </div>
      <Header />
      <LastCourses />
      <AboutUs />
      <PopularCourses />
      <PresellCourses />
      <LastArticles />
      <Footer />
    </>
  );
}
