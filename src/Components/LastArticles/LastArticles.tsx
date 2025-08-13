import React, { useEffect, useState } from "react";
import ArticleBox from "../ArticleBox/ArticleBox";
import SectionHeader from "../SectionHeader/SectionHeader";
import Article from "types/Atricles.types";
import { getAllArticles } from "../../Services/Axios/Requests/Articles";

const LastArticles = (): React.JSX.Element => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const getAllArticlesHandler = async () => {
      try {
        const res = await getAllArticles();
        setArticles(res);
      } catch (error) {
        console.error("Error fetching Articles:", error);
      }
    };
    getAllArticlesHandler();
  }, []);

  return (
    <section className="container relative mb-48">
     
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
     
    </section>
  );
};

export default LastArticles;
