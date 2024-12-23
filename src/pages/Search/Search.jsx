import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { useParams } from "react-router-dom";
import SectionHeader from "../../Components/SectionHeader/SectionHeader";
import CourseBox from "../../Components/CourseBox/CourseBox";
import ArticleBox from "../../Components/ArticleBox/ArticleBox";

export default function Search() {
  const [courses, setCourses] = useState([]);
  const [articles, setArticles] = useState([]);
  const { value } = useParams();

  fetch(`http://localhost:4000/v1/search/${value}`)
    .then((res) => res.json())
    .then((dataSearch) => {
      setArticles(dataSearch.allResultArticles);
      setCourses(dataSearch.allResultCourses);
    });

  return (
    <>
      <Navbar />

      <div className="mb-40 mt-72">
        <div className="container">
          <SectionHeader
            title="نتیجه دوره‌ها برای جستجوی شما"
            desc="سکوی پرتاپ شما به سمت موفقیت"
          />

          <div className="container">
            {courses.length === 0 ? (
              <div className="bg-amber-400/10 px-6 py-8 text-3xl text-amber-700 rounded-2xl">
                دوره‌ای برای جستجوی شما وجود ندارد
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 sm:gap-10">
                {courses.map((course) => (
                  <CourseBox key={course._id} {...course} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <section className="mb-48">
        <div className="container">
          <SectionHeader
            title="نتیجه مقالات برای جستجوی شما"
            desc="پیش به سوی ارتقای دانش"
          />

          <div className="container">
            {articles.length === 0 ? (
              <div className="bg-amber-400/10 px-6 py-8 text-3xl text-amber-700 rounded-2xl">
                مقاله‌ای برای جستجوی شما وجود ندارد
              </div>
            ) : (
              <div className="grid grid-rows-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 sm:gap-10">
                {articles.map((article) => (
                  <ArticleBox {...article} key={article._id} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
