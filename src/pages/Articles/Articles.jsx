import React, { useEffect, useState } from "react";
import Navbar from "./../../Components/Navbar/Navbar";
import SectionHeader from "../../Components/SectionHeader/SectionHeader";
import ArticleBox from "../../Components/ArticleBox/ArticleBox";
import Pagination from "../../Components/Pagination/Pagination";
import Footer from "./../../Components/Footer/Footer";
import {
  HiArrowsUpDown,
  HiOutlineFunnel,
} from "react-icons/hi2";

export default function Articles() {
  const [articles, setArticles] = useState([]);

  const [shownArticles, setShownArticles] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/v1/articles`)
      .then((res) => res.json())
      .then((allArticles) => {
        setArticles(allArticles);
      });
  }, []);


  return (
    <>
      {/* <Topbar /> */}
      <Navbar />
      <div className="pt-[11.5rem]">
        <div className="-mb-6">
          <SectionHeader title={"مقاله ها"} titleValue={`${articles.length} مقاله آموزشی`} />
        </div>
        <div className="container">
          <section className="text-darkColor dark:text-white ">
            {/* <!-- Content --> */}

            {/* <!-- Sort & Filter in Mobile Size --> */}
            <div className="flex md:hidden items-center gap-8 mb-14 -mt-6">
              <div
                className="flex-center bg-white dark:bg-darkBox py-5 gap-4 rounded-3xl w-1/2"
                id="filter-btn"
              >
                <div className="text-4xl shrink-0">
                  <HiOutlineFunnel />
                </div>
                <span>فیلتر</span>
              </div>
              <div
                className="flex-center bg-white dark:bg-darkBox py-5 gap-4 rounded-3xl w-1/2"
                id="sort-btn"
              >
                <div className="text-4xl shrink-0">
                  <HiArrowsUpDown />
                </div>
                <span className="active_sort_title">همه دوره ها</span>
              </div>
            </div>
            {/* <!-- Course Sort --> */}
            <div className="hidden md:flex items-center gap-x-6 h-[6.3rem] bg-white dark:bg-darkBox shadow-normal dark:shadow-none rounded-xl px-7 md:px-8 mt-4 lg:mt-0 mb-16 lg:mb-11">
              <div className="flex items-center shrink-0 gap-x-2">
                <div className="text-5xl">
                  <HiArrowsUpDown />
                </div>
                <span className="">مرتب سازی بر اساس :</span>
              </div>
              <div className="flex items-center gap-x-7 lg:gap-x-8 h-full">
                <a
                  href="javascript:setArchiveSort('default', 'همه دوره ها')"
                  data-id="default"
                  className="sort-btn sort-btn--active"
                  role="button"
                >
                  همه دوره ها
                </a>
                <a
                  href="javascript:setArchiveSort('cheapest', 'ارزان ترین')"
                  data-id="cheapest"
                  className="sort-btn "
                  role="button"
                >
                  ارزان ترین
                </a>
                <a
                  href="javascript:setArchiveSort('expensive', 'گران ترین')"
                  data-id="expensive"
                  className="sort-btn "
                  role="button"
                >
                  گران ترین
                </a>
                <a
                  href="javascript:setArchiveSort('popular', 'پرمخاطب ها')"
                  data-id="popular"
                  className="sort-btn "
                  role="button"
                >
                  پرمخاطب ها
                </a>
              </div>
            </div>
            {/* <!-- Course List --> */}
            <div className="posts_wrap grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 sm:gap-11 mb-24 mt-16">
              {shownArticles
                .filter((article) => article.publish === 1)
                .map((article) => (
                  <ArticleBox key={article._id} {...article} />
                ))}
            </div>
            {/* <!-- Show more Button --> */}
            <Pagination
              items={articles}
              itemsCount={5}
              pathName="/articles"
              setShownItems={setShownArticles}
            />
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
}
