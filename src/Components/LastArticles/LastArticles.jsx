import React, { useEffect, useState } from "react";
import ArticleBox from "../ArticleBox/ArticleBox";
import SectionHeader from "../SectionHeader/SectionHeader";

export default function LastArticles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/v1/articles`)
      .then((res) => res.json())
      .then((allArticles) => {
        console.log(allArticles);
        setArticles(allArticles);
      });
  }, []);

  return (
    <section className="mb-48">
      <div className="container relative">
        <SectionHeader
          title="وبلاگ آموزشی SKY-Tech"
          desc="پیش به سوی ارتقای دانش"
          btnTitle="مشاهده همه مقالات"
          btnHref="articles/1"
          Page={"Index"}
        />

        <div className="grid grid-rows-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 sm:gap-10">
          {articles
            .filter((article) => article.publish === 1)
            .slice(0, 4)
            .map((article) => (
              <ArticleBox {...article} key={article._id} />
            ))}
        </div>
        <div className="hidden lg:block absolute left-0 top-0 -translate-x-1/3 -translate-y-6/10 size-75 bg-amber-400 opacity-25 blur-[125px] -z-10 rounded-full"></div>
      </div>
    </section>
  );
}
