import React, { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { useParams } from "react-router-dom";
import SectionHeader from "../../Components/SectionHeader/SectionHeader";
import CourseBox from "../../Components/CourseBox/CourseBox";
import ArticleBox from "../../Components/ArticleBox/ArticleBox";
import { CourseBoxProp } from "types/Courses.types";
import Article from "types/Atricles.types";
import { getSearchInfo } from "../../Services/Axios/Requests/Search";

const Search = (): React.JSX.Element => {
  const [courses, setCourses] = useState<CourseBoxProp[]>([]);
  const [articles, setArticles] = useState<Article[]>([]);
  const { value } = useParams<{ value: string }>();

  useEffect(() => {
    const serachInfoHandler = async (value: string) => {
      try {
        const res = await getSearchInfo(value);
        setArticles(res.allResultArticles);
        setCourses(res.allResultCourses);
      } catch (error) {
        console.error("Error fetching search result:", error);
      }
    };
    serachInfoHandler(value as string);
  }, [value]);

  return (
    <>
      <Header />

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
};

export default Search;
