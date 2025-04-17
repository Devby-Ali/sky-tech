// import React, { useState } from "react";
import { useEffect, useState } from "react";
import LastCourses from "../../Components/LastCourses/LastCourses";
import AboutUs from "../../Components/AboutUs/AboutUs";
import PopularCourses from "../../Components/PopularCourses/PopularCourses";
import PresellCourses from "../../Components/PresellCourses/PresellCourses";
import LastArticles from "../../Components/LastArticles/LastArticles";
import Footer from "../../Components/Footer/Footer";
import Landing from "../../Components/Landing/Landing";
import { getIndexPageInfos } from "../../Services/Axios/Requests/Infos";

interface Info {
  coursesCount: number;
  totalTime: number;
  usersCount: number;
}

const Index = (): React.JSX.Element => {
  const [indexInfo, setIndexInfo] = useState<Info>({} as Info);

  useEffect(() => {
        const getInfosHandler = async () => {
          try {
            const res = await getIndexPageInfos();
            setIndexInfo(res)
          } catch (error) {
            console.error("Error fetching index page infos:", error);
          }
        };
        getInfosHandler();
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
};
export default Index;
