// import React, { useState } from "react";
import React, { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import LastCourses from "../../Components/LastCourses/LastCourses";
import AboutUs from "../../Components/AboutUs/AboutUs";
import PopularCourses from "../../Components/PopularCourses/PopularCourses";
import PresellCourses from "../../Components/PresellCourses/PresellCourses";
import LastArticles from "../../Components/LastArticles/LastArticles";
import Footer from "../../Components/Footer/Footer";
import Landing from "../../Components/Landing/Landing";

export default function Index() {
  const [indexInfo, setIndexInfo] = useState({});

  useEffect(() => {
    fetch("http://localhost:4000/v1/infos/index")
      .then((res) => res.json())
      .then((allInfos) => setIndexInfo(allInfos));
  }, []);

  return (
    <>
    <Landing info={indexInfo} />
      <div className="absolute -z-10 opacity-40 dark:opacity-20">
        <img src="/images/sky.png" alt="/" />
      </div>
      <LastCourses />
      <AboutUs />
      <PopularCourses />
      <PresellCourses />
      <LastArticles />
      <Footer />
    </>
  );
}
