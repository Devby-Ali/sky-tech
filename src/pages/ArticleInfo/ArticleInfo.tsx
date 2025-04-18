import React, { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import Footer from "../../Components/Footer/Footer";
import { LiaUser } from "react-icons/lia";
import {
  HiBars4,
  HiBookOpen,
  HiChevronDown,
  HiEye,
  HiMiniCalendar,
  HiOutlineCalendar,
  HiOutlineClipboardDocument,
  HiShare,
} from "react-icons/hi2";
import { Link, useParams } from "react-router-dom";
import domPurify from "dompurify";
import Article from "types/Atricles.types";
import Category from "types/Category.types";
import Creator from "types/Creator.types";
import {
  getAllArticles,
  getArticleInfo,
} from "../../Services/Axios/Requests/Articles";

const ArticleInfo = (): React.JSX.Element => {
  const { articleName } = useParams<{ articleName: string }>();

  const [articleDetails, setArticleDetails] = useState<Article>({} as Article);
  const [articleCategory, setArticleCategory] = useState<Category>(
    {} as Category
  );
  const [articleCreator, setArticleCreator] = useState<Creator>({} as Creator);
  const [articleCreatedAt, setArticleCreatedAt] = useState<string>("");
  const [relatedArticles, setRelatedArticles] = useState<Article[]>([]);
  const [showSubTitle, setShowSubTitle] = useState<boolean>(false);

  const getAllArticlesHandler = React.useCallback(async () => {
    try {
      const res = await getAllArticles();
      const allRelatedArticles = await res.filter(
        (article: Article) => article._id !== articleDetails._id
      );
      setRelatedArticles(allRelatedArticles);
    } catch (error) {
      console.error("Error related fetching Articles:", error);
    }
  }, [articleDetails._id]);

  useEffect(() => {
    const getAtricleDatails = async () => {
      try {
        const articleInfo = await getArticleInfo(articleName as string);
        setArticleDetails(articleInfo);
        setArticleCategory(articleInfo.categoryID);
        setArticleCreator(articleInfo.creator);
        setArticleCreatedAt(articleInfo.createdAt);
        getAllArticlesHandler();
      } catch (error) {
        console.error("Error fetching Article Details:", error);
      }
    };
    getAtricleDatails();
  }, [articleName, getAllArticlesHandler]);

  const subTitleHandle = () => {
    setShowSubTitle(!showSubTitle);
  };

  console.log(relatedArticles);

  return (
    <>
      <Header />
      <main className="max-w-[1920px] mx-auto overflow-x-hidden pt-12 sm:pt-15 md:pt-50 2xl:pt-52">
        <div className="container">
          <Breadcrumb
            links={[
              {
                id: 2,
                title: "وبلاگ",
                to: "category-info/frontend",
              },
              {
                id: 3,
                title: articleDetails.title,
                to: "course-info/js-expert",
              },
            ]}
          />

          <section className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-8">
            {/* <!-- Content --> */}
            <div className="col-span-full lg:col-span-8 xl:col-span-9">
              <div className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-3xl p-7 sm:p-10 mt-12">
                {/* <!-- head --> */}
                <div className="mt-4 sm:mt-2 flex items-center gap-x-3 mb-10 relative border-b border-b-gray-300 dark:border-b-white/10 pb-10 sm:pb-12">
                  <span className="absolute -right-8 sm:-right-11 block w-1 h-16 bg-sky-600 rounded-r-full shadowLightBlue"></span>
                  <h1 className="font-EstedadBold text-3xl md:text-4xl">
                    {articleDetails.title}
                  </h1>
                </div>
                {/* <!-- info --> */}
                <div className="flex items-center gap-x-8 sm:gap-x-10 text-4xl sm:text-5xl opacity-40 mb-10">
                  {/* <!-- author --> */}
                  <div className="flex items-center gap-x-1.5">
                    <div>
                      <LiaUser />
                    </div>
                    <span className="text-[1.35rem] sm:text-2xl">
                      {articleCreator.name}
                    </span>
                  </div>
                  {/* <!-- date --> */}
                  <div className="flex items-center gap-x-2">
                    <div>
                      <HiMiniCalendar />
                    </div>
                    <span className="text-[1.35rem] sm:text-2xl mt-2">
                      {articleCreatedAt.slice(0, 10)}
                    </span>
                  </div>
                  {/* <!-- view count --> */}
                  <div className="flex items-center gap-x-2">
                    <div>
                      <HiEye />
                    </div>
                    <span className="text-[1.35rem] sm:text-2xl mt-2">246</span>
                  </div>
                </div>
                {/* <!-- thumbnail --> */}
                <img
                  src={`http://localhost:4000/courses/covers/${articleDetails.cover}`}
                  className="block w-full h-full object-cover"
                  alt="Article-Image"
                  loading="lazy"
                />
                {/* category */}
                <div className="mt-8">
                  دسته‌بندی:
                  <span className=" mr-4 text-[1.35rem] sm:text-2xl mt-2 bg-sky-600/20 rounded-md px-3 py-1.5">
                    {articleCategory.title}
                  </span>
                </div>
                <div
                  className="rounded-4xl rounded-tr-none! border border-gray-400 dark:border-white/30 mt-14 overflow-hidden mb-10 md:mb-12 tracking-wide"
                  id="toc-collapse"
                >
                  <div className="flex items-center justify-between p-6 ">
                    <div className="flex items-center gap-x-2">
                      <div className="text-5xl">
                        <HiBars4 />
                      </div>
                      <span className="text-[1.35rem] md:text-[1.7rem] md:font-EstedadMedium">
                        سرفصل های این مقاله:
                      </span>
                    </div>
                    <div
                      onClick={subTitleHandle}
                      className="flex-center bg-neutral-300 dark:bg-slate-500 p-5 size-6 md:size-7 rounded-full cursor-pointer"
                    >
                      <div
                        className={`text-4xl md:text-[2.4rem] ${
                          !showSubTitle && "rotate-180"
                        }`}
                      >
                        <HiChevronDown />
                      </div>
                    </div>
                  </div>
                  <div
                    className={`${
                      showSubTitle ? "hidden" : "flex"
                    } flex-col gap-2.5 border-t border-gray-400 dark:border-white/30 px-6 py-8`}
                  >
                    <a
                      href="#h_1"
                      className="text-[1.35rem] md:text-[1.7rem] leading-10"
                    >
                      موتور بازی‌سازی Source 2؛ قلب تپنده Counter-Strike 2
                    </a>
                    <a
                      href="#h_2"
                      className="text-[1.35rem] md:text-[1.7rem] leading-10"
                    >
                      زبان‌های برنامه‌نویسی اصلی مورد استفاده در Counter-Strike
                      2
                    </a>
                    <a
                      href="#h_3"
                      className="text-[1.35rem] md:text-[1.7rem] leading-10"
                    >
                      مقایسه سریع زبان‌ها
                    </a>
                    <a
                      href="#h_4"
                      className="text-[1.35rem] md:text-[1.7rem] leading-10"
                    >
                      چرا C++ زبان اصلی توسعه Counter-Strike 2 است؟
                    </a>
                    <a
                      href="#h_5"
                      className="text-[1.35rem] md:text-[1.7rem] leading-10"
                    >
                      نتیجه‌گیری
                    </a>
                  </div>
                </div>
                {/*					<!-- Full Description --> */}
                <div
                  className="tracking-wide text-[1.6rem]/loose text-slate-900/90 dark:text-white/80 overflow-auto"
                  dangerouslySetInnerHTML={{
                    __html: domPurify.sanitize(articleDetails.body),
                  }}
                ></div>
              </div>
              {/* <!-- Related Blogs --> */}
              <div className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-3xl p-7 sm:p-10 mt-12">
                <div className="mt-2 sm:mt-0 flex items-center gap-x-3 relative pb-10 sm:pb-12">
                  <span className="absolute -right-8 sm:-right-11 block w-1 h-16 bg-sky-600 rounded-r-full shadowLightBlue"></span>
                  <div className="hidden md:block text-6xl text-sky-700 dark:text-sky-600">
                    <HiBookOpen />
                  </div>
                  <h1 className="font-EstedadBold text-3xl md:text-4xl">
                    پیشنهاد مطالعه
                  </h1>
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                  {relatedArticles.slice(0, 4).map((article) => (
                    <>
                      <div className="flex items-center gap-x-4 bg-gray-100 dark:bg-[#333c4c] p-6 rounded-2xl">
                        <img
                          src={`http://localhost:4000/courses/covers/${article.cover}`}
                          className="h-32 rounded-xl"
                          alt="Article-Image"
                          loading="lazy"
                        />
                        <div>
                          <Link
                            className="font-EstedadMedium line-clamp-1"
                            to={`/article-info/${article.shortName}`}
                          >
                            {article.title}
                          </Link>

                          <div className="flex items-center gap-x-2 mt-8 text-blue-gray-800/80 dark:text-white/50">
                            <div className="text-3xl">
                              <HiOutlineCalendar />
                            </div>
                            <span className="font-EstedadMedium text-[1.35rem] mt-2.5">
                              {articleCategory.createdAt.slice(0, 10)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>
            {/* <!-- Sidebar --> */}
            <aside className="col-span-full lg:col-span-4 xl:col-span-3 space-y-8">
              {/* <!-- Course Short Link --> */}
              <div className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-3xl p-7 sm:p-10 mt-12">
                <div className="flex items-center justify-between mb-8 pb-8 border-b border-b-gray-300 dark:border-b-white/10">
                  <div className="flex items-center gap-x-3 font-EstedadMedium">
                    <div className="text-5xl">
                      <HiShare />
                    </div>
                    اشتراک گذاری مطلب
                  </div>
                  <button
                    type="button"
                    data-collapse="#shortlink-collapse"
                    data-height="h-17"
                  >
                    <div className="text-4xl rotate-180">
                      <HiChevronDown />
                    </div>
                  </button>
                </div>
                <div className="flex items-center justify-between gap-x-3 p-4 mt-8 bg-sky-300/10 text-sky-300 border border-dashed border-sky-500 rounded-lg">
                  <button>
                    <div className="text-4xl">
                      <HiOutlineClipboardDocument />
                    </div>
                  </button>
                  <span className="font-EstedadMedium text-lg w-64 text-ltr text-left truncate">
                    skytech.ir/?p=5397
                  </span>
                </div>
              </div>
            </aside>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ArticleInfo;
