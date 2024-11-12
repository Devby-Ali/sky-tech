import React from "react";
import Topbar from "./../../Components/Topbar/Topbar";
import Navbar from "./../../Components/Navbar/Navbar";
import Footer from "./../../Components/Footer/Footer";
import Breadcrumb from "./../../Components/Breadcrumb/Breadcrumb";
import CommentsTextArea from "../../Components/CommentsTextArea/CommentsTextArea";
import { FaTelegramPlane } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaFolder } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { BsClockFill } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
import { IoMdArrowDropright } from "react-icons/io";
import { IoMdArrowDropleft } from "react-icons/io";

export default function ArticleInfo() {
  return (
    <>
      <Topbar />
      <Navbar />

      <Breadcrumb
        links={[
          { id: 1, title: "خانه", to: "" },
          {
            id: 2,
            title: "مقاله ها",
            to: "category-info/frontend",
          },
          {
            id: 3,
            title: "ویو Vs ری‌اکت",
            to: "course-info/js-expert",
          },
        ]}
      />

      <main className="main-section">
        <div className="container">
          <div className="rows-1">
            <div className="cols-8">
              <div className="p-9 shadow-normal rounded-lg">
                <h1 className="font-EstedadBold text-4xl text-zinc-600 border border-b-2 border-b-zinc-600 pb-4">
                  معرفی بهترین سایت آموزش جاوا اسکریپت [ تجربه محور ] + آموزش
                  رایگان
                </h1>
                <div className="flex items-center pt-4">
                  <div className="article-header__category ml-8">
                    <FaFolder classNameName="text-3xl text-slate-50" />
                    <a href="#" className="text-lg text-zinc-400">
                      جاوا اسکریپت
                    </a>
                  </div>
                  <div className="article-header__category ml-8">
                  <FaUser classNameName="text-3xl text-slate-50" />
                    <span className="text-lg text-zinc-400">
                      {" "}
                      ارسال شده توسط قدیر
                    </span>
                  </div>
                  <div className="article-header__category ml-8">
                  <BsClockFill classNameName="text-3xl text-slate-50" />
                    <span className="text-lg text-zinc-400">
                      {" "}
                      ارسال شده توسط قدیر
                    </span>
                  </div>
                  <div className="article-header__category ml-8">
                  <FaEye classNameName="text-3xl text-slate-50" />
                    <span className="text-lg text-zinc-400"> 2.14k بازدید</span>
                  </div>
                </div>
                <img
                  src="/images/blog/1.jpg"
                  alt="Article Cover"
                  className="mt-16"
                />
                <div className="flex items-center my-8">
                  <div className="ml-1">
                    <img
                      src="/images/svgs/star_fill.svg"
                      className="article__score-icon"
                    />
                    <img
                      src="/images/svgs/star_fill.svg"
                      className="article__score-icon"
                    />
                    <img
                      src="/images/svgs/star_fill.svg"
                      className="article__score-icon"
                    />
                    <img
                      src="/images/svgs/star_fill.svg"
                      className="article__score-icon"
                    />
                    <img
                      src="/images/svgs/star.svg"
                      className="article__score-icon"
                    />
                  </div>
                  <span className="mr-8 text-2xl text-zinc-400">4.2/5 - (5 امتیاز)</span>
                </div>

                <p className="article__paragraph text-2xl/10 text-zinc-500">
                  جاوا اسکریپت یکی از زبان‌های برنامه‌نویسی اصلی حوزه فرانت‌اند
                  است که به واسطه فریم ورک‌های آن می‌توان انواع وب سایت‌ها،
                  اپلیکیشن‌ها و وب اپلیکیشن‌ها را طراحی کرد. به طور کلی بعد از
                  یادگیری html و css معمولاً باید آموزش جاوا اسکریپت را نیز فرا
                  بگیرید. . چرا که این زبان تکمیل‌کننده html و css بوده و در
                  چنین شرایطی موقعیت‌های شغلی بیشتر را در اختیار خواهید داشت و
                  همچنین می‌توانید پروژه‌های گسترده‌تری را انجام دهید. در حال
                  حاضر با وجود منابع رایگان موجود در وب شما به راحتی می‌توانید
                  زبان جاوا اسکریپت را به صورت حرفه‌ای فرا بگیرید. به همین واسطه
                  در ادامه مطلب قصد داریم سایت‌های شاخص آموزش این زبان
                  برنامه‌نویسی در جهان را به شما معرفی کنیم و در آخر بگوییم که
                  بهترین سایت آموزش جاوا اسکریپت کدام است.
                </p>

                <div className="bg-slate-100 rounded-4xl py-8 px-12 my-12">
                  <span className="block text-zinc-800 text-2xl mb-2 font-EstedadBold">
                    آنچه در این مقاله خواهید خواند
                  </span>
                  <ul className="article-read__list">
                    <li className="article-read__item">
                      <a href="#" className="text-2xl text-lightishBlue-500 hover:text-fuchsia-500">
                        معرفی بهترین سایت ‌های آموزش جاوا اسکریپت:
                      </a>
                    </li>
                    <li className="article-read__item">
                      <a href="#" className="text-2xl text-lightishBlue-500 hover:text-fuchsia-500">
                        یک راه آسان‌تر، دوره‌ های جاوا اسکریپت آکادمی سبزلرن!
                      </a>
                    </li>
                    <li className="article-read__item">
                      <a href="#" className="text-2xl text-lightishBlue-500 hover:text-fuchsia-500">
                        ثبت نام در دوره‌ های جاوا اسکریپت سبزلرن:
                      </a>
                    </li>
                  </ul>
                </div>

                <img
                  src="/images/blog/2.jpg"
                  alt="Article Image"
                  className="block mx-auto"
                />
                <div className="my-20">
                  <h2 className="text-4xl/5 text-emerald-600 font-EstedadBold">
                    معرفی بهترین سایت ‌های آموزش جاوا اسکریپت:
                  </h2>
                  <p className="paragraph my-8">
                    توجه داشته باشید که تمام وب سایت‌هایی که به عنوان بهترین
                    سایت آموزش جاوا اسکریپت در ادامه معرفی می‌کنیم، بین‌المللی
                    هستند و منابع موجود در آن‌ها به زبان انگلیسی است. در نتیجه
                    شما باید یا تسلط متوسط و حداقلی به زبان انگلیسی داشته باشید
                    و یا اینکه با استفاده از گوگل ترنسلیت منابع موجود را ترجمه
                    کرده و از آن‌ها استفاده کنید. به همین دلیل در انتهای محتوا
                    به شما خواهیم گفت که راه آسان دیگری برای یادگیری زبان جاوا
                    اسکریپت وجود دارد که شما بتوانید به واسطه آن به صورت رایگان
                    و به زبان فارسی این زبان را یاد بگیرید.
                  </p>
                  <img
                    src="/images/blog/4.png"
                    alt="article body img"
                    className="block mx-auto"
                  />
                </div>
                <div className="my-20">
                  <h2 className="text-4xl/5 text-emerald-600 font-EstedadBold">
                    معرفی بهترین سایت ‌های آموزش جاوا اسکریپت:
                  </h2>
                  <p className="paragraph my-8">
                    توجه داشته باشید که تمام وب سایت‌هایی که به عنوان بهترین
                    سایت آموزش جاوا اسکریپت در ادامه معرفی می‌کنیم، بین‌المللی
                    هستند و منابع موجود در آن‌ها به زبان انگلیسی است. در نتیجه
                    شما باید یا تسلط متوسط و حداقلی به زبان انگلیسی داشته باشید
                    و یا اینکه با استفاده از گوگل ترنسلیت منابع موجود را ترجمه
                    کرده و از آن‌ها استفاده کنید. به همین دلیل در انتهای محتوا
                    به شما خواهیم گفت که راه آسان دیگری برای یادگیری زبان جاوا
                    اسکریپت وجود دارد که شما بتوانید به واسطه آن به صورت رایگان
                    و به زبان فارسی این زبان را یاد بگیرید.
                  </p>
                </div>
                <div className="my-20">
                  <h2 className="text-4xl/5 text-emerald-600 font-EstedadBold">
                    معرفی بهترین سایت ‌های آموزش جاوا اسکریپت:
                  </h2>
                  <p className="paragraph my-8">
                    توجه داشته باشید که تمام وب سایت‌هایی که به عنوان بهترین
                    سایت آموزش جاوا اسکریپت در ادامه معرفی می‌کنیم، بین‌المللی
                    هستند و منابع موجود در آن‌ها به زبان انگلیسی است. در نتیجه
                    شما باید یا تسلط متوسط و حداقلی به زبان انگلیسی داشته باشید
                    و یا اینکه با استفاده از گوگل ترنسلیت منابع موجود را ترجمه
                    کرده و از آن‌ها استفاده کنید. به همین دلیل در انتهای محتوا
                    به شما خواهیم گفت که راه آسان دیگری برای یادگیری زبان جاوا
                    اسکریپت وجود دارد که شما بتوانید به واسطه آن به صورت رایگان
                    و به زبان فارسی این زبان را یاد بگیرید.
                  </p>
                  <img
                    src="/images/blog/3.jpg"
                    alt="article body img"
                    className="block mx-auto"
                  />
                </div>

                <div className="flex items-center">
                  <span className="text-2xl text-zinc-500">اشتراک گذاری :</span>
                  <a href="#" className="flex items-center m-2 text-zinc-500">
                    <FaTelegramPlane />
                  </a>
                  <a href="#" className="flex items-center m-2 text-zinc-500">
                    <FaTwitter />
                  </a>
                  <a href="#" className="flex items-center m-2 text-zinc-500">
                    <FaFacebook />
                  </a>
                </div>

              </div>

              <div className="my-16 py-14 px-10 rounded-lg bg-slate-100">
                <div className="rows-1">
                  <div className="cols-6">
                    <div className="relative suggestion-articles__right flex items-center">
                      <a href="#" className="text-slate-300">
                      <IoMdArrowDropright />
                      </a>
                      <a href="#" className="text-center mx-8">
                        سریع ترین و بهترین راه یادگیری جاوا اسکریپت چیست؟ | تجربه برنامه نویسان
                      </a>
                    </div>
                  </div>
                  <div className="cols-6">
                    <div className="relative suggestion-articles__left flex flex-row-reverse items-center">
                      <a href="#" className="text-slate-300">
                      <IoMdArrowDropleft />
                      </a>
                      <a href="#" className="text-center mx-8">
                        سریع ترین و بهترین راه یادگیری جاوا اسکریپت چیست؟ | تجربه برنامه نویسان
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <CommentsTextArea />

            </div>
            <div className="cols-4"></div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
