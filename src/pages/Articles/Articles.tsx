import { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import SectionHeader from "../../Components/SectionHeader/SectionHeader";
import ArticleBox from "../../Components/ArticleBox/ArticleBox";
import Pagination from "../../Components/Pagination/Pagination";
import Footer from "../../Components/Footer/Footer";
import { HiArrowsUpDown, HiOutlineFunnel } from "react-icons/hi2";
import Article from "types/Atricles.types";
import { getAllArticles } from "../../Services/Axios/Requests/Articles";

const Articles = (): React.JSX.Element => {
  const [articles, setArticles] = useState<Article[]>([]);

  const [shownArticles, setShownArticles] = useState<Article[]>([]);

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
    <>
      <Header />
      <div className="pt-16 md:pt-52 2xl:pt-60">
        <div className="container">
          <SectionHeader
            title={"مقاله ها"}
            titleValue={`${articles.length} مقاله آموزشی`}
          />

          <section className="text-slate-900 dark:text-white -mt-6">
            {/* <!-- Content --> */}

            {/* <!-- Sort & Filter in Mobile Size --> */}
            <div className="flex md:hidden items-center gap-8 mb-14 -mt-6">
              <div
                className="flex-center bg-white dark:bg-slate-800 py-5 gap-4 rounded-3xl w-1/2"
                id="filter-btn"
              >
                <div className="text-4xl shrink-0">
                  <HiOutlineFunnel />
                </div>
                <span>فیلتر</span>
              </div>
              <div
                className="flex-center bg-white dark:bg-slate-800 py-5 gap-4 rounded-3xl w-1/2"
                id="sort-btn"
              >
                <div className="text-4xl shrink-0">
                  <HiArrowsUpDown />
                </div>
                <span className="active_sort_title">همه دوره ها</span>
              </div>
            </div>
            {/* <!-- Course Sort --> */}
            <div className="hidden md:flex items-center gap-x-6 h-[6.3rem] bg-white dark:bg-slate-800 shadow-normal dark:shadow-none rounded-xl px-7 md:px-8 mt-4 lg:mt-0 mb-16 lg:mb-11">
              <div className="flex items-center shrink-0 gap-x-2">
                <div className="text-5xl">
                  <HiArrowsUpDown />
                </div>
                <span className="">مرتب سازی بر اساس :</span>
              </div>
              <div className="flex items-center gap-x-7 lg:gap-x-8 h-full">
                <a href="#">همه مقاله ها</a>
                <a href="#">جدیدترین</a>
                <a href="#">ویژه</a>
                <a href="#">پرمخاطب ها</a>
              </div>
            </div>
            {/* <!-- Course List --> */}
            <div className="posts_wrap grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 sm:gap-11 mb-24 mt-16">
              {shownArticles.map((article) => (
                <ArticleBox key={article._id} {...article} />
              ))}
            </div>
            {/* <!-- Show more Button --> */}
            <Pagination
              items={articles}
              itemsCount={4}
              pathName="/articles"
              setShownItems={setShownArticles}
            />
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Articles;
