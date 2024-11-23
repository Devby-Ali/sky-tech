import React from "react";
import Topbar from "./../../Components/Topbar/Topbar";
import Navbar from "./../../Components/Navbar/Navbar";
import Footer from "./../../Components/Footer/Footer";
import Breadcrumb from "./../../Components/Breadcrumb/Breadcrumb";
import CommentsTextArea from "../../Components/CommentsTextArea/CommentsTextArea";
import { LiaUser, LiaUserSolid } from "react-icons/lia";
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
import { PiChatCenteredTextLight, PiChats } from "react-icons/pi";
import { BsExclamationTriangle } from "react-icons/bs";

export default function ArticleInfo() {
  return (
    <>
      <Navbar />
      <main className="max-w-[1920px] mx-auto overflow-x-hidden">
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
                title: "زبان برنامه نویسی بازی counter Strike 2",
                to: "course-info/js-expert",
              },
            ]}
          />

          <section className="grid grid-cols-1 lg:grid-cols-12 gap-x-7 gap-y-8">
            {/* <!-- Content --> */}
            <div className="col-span-full lg:col-span-8 xl:col-span-9">
              <div className="bg-white dark:bg-darkBox text-darkColor dark:text-white rounded-3xl p-7 sm:p-10 mt-12">
                {/* <!-- head --> */}
                <div className="mt-4 sm:mt-2 flex items-center gap-x-3 mb-10 relative border-b border-b-gray-300 dark:border-b-white/10 pb-10 sm:pb-12">
                  <span className="absolute -right-8 sm:-right-11 block w-1 h-16 bg-light-blue-600 rounded-r-full shadowLightBlue"></span>
                  <h1 className="font-EstedadBold text-3xl md:text-4xl">
                    زبان برنامه نویسی بازی counter Strike 2
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
                      شهرام خندقی
                    </span>
                  </div>
                  {/* <!-- date --> */}
                  <div className="flex items-center gap-x-2">
                    <div>
                      <HiMiniCalendar />
                    </div>
                    <span className="text-[1.35rem] sm:text-2xl mt-2">
                      1403/08/30
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
                  src="/images/blog/article-1.jpg"
                  className="aspect-video object-cover rounded-2xl"
                  alt="زبان برنامه نویسی بازی counter Strike 2"
                />
                <div
                  className="rounded-4xl !rounded-tr-none border border-gray-400 dark:border-white/30 mt-14 overflow-hidden mb-10 md:mb-12 tracking-wide"
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
                    <button
                      className="flex-center bg-neutral-300 dark:bg-slate-500  size-6 md:size-7 rounded-full"
                      data-collapse="#toc-collapse"
                      data-height="h-16 md:h-17"
                    >
                      <div className="text-4xl md:text-[2.4rem]">
                        <HiChevronDown />
                      </div>
                    </button>
                  </div>
                  <div className="flex flex-col gap-2.5 border-t border-gray-400 dark:border-white/30 px-6 py-8">
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
                <p className=" tracking-wider text-blue-gray-900/95 dark:text-white/70 leading-[2.6rem]">
                  چرا C++ زبان اصلی توسعه Counter-Strike 2 است؟ اگر قرار باشد
                  زبان‌های برنامه‌نویسی را به ابزارهای یک معمار تشبیه کنیم، C++
                  مانند ابزار چندکاره‌ای است که برای هر چالشی یک راه‌حل دارد.
                  این زبان، که به‌عنوان ستون فقرات موتور Source 2 عمل می‌کند،
                  نقشی کلیدی در ساخت بازی‌هایی مانند Counter-Strike 2 ایفا
                  می‌کند. اما چرا C++؟ در این بخش به بررسی ویژگی‌ها و دلایلی
                  می‌پردازیم که باعث شده این زبان انتخاب اصلی توسعه‌دهندگان برای
                  چنین بازی‌های پیچیده‌ای باشد. 1. عملکرد و کارایی بالا C++
                  بهینه‌ترین زبان برای پردازش وظایف سنگین است، به‌ویژه در
                  بازی‌هایی که نیاز به گرافیک پیچیده و سیستم‌های فیزیکی دقیق
                  دارند. این ویژگی به Counter-Strike 2 امکان می‌دهد: بازی را روی
                  سخت‌افزارهای متنوع اجرا کند. لگ (تاخیر) را به حداقل برساند.
                  تجربه‌ای روان و بدون قطعی به بازیکنان ارائه دهد. 2. کنترل دقیق
                  حافظه یکی از ویژگی‌های برجسته C++، امکان مدیریت دقیق حافظه
                  است. این قابلیت در بازی‌هایی با حجم بالای داده‌های گرافیکی و
                  فیزیکی اهمیت زیادی دارد. مثال عملی: هنگام شبیه‌سازی پرتاب
                  نارنجک در بازی، مسیر، انفجار، و تاثیرات فیزیکی آن در لحظه توسط
                  کدهای بهینه C++ پردازش و نمایش داده می‌شود. 3. مناسب برای
                  سیستم‌های پیچیده C++ با پشتیبانی از شی‌ءگرایی، توسعه سیستم‌های
                  پیچیده‌ای مانند هوش مصنوعی دشمنان، شبیه‌سازی‌های فیزیکی و
                  مدیریت چندین بازیکن آنلاین را تسهیل می‌کند. مثال: در
                  Counter-Strike 2، رفتار دشمنان (Bots) و تصمیم‌گیری‌های آن‌ها
                  توسط الگوریتم‌های مبتنی بر شی‌ءگرایی مدیریت می‌شود. 4.
                  پشتیبانی گسترده و جامعه قوی C++ یکی از پرکاربردترین زبان‌ها در
                  صنعت بازی‌سازی است و منابع آموزشی و ابزارهای زیادی برای آن در
                  دسترس است. این امر باعث می‌شود توسعه‌دهندگان به‌راحتی از این
                  زبان استفاده کنند و مشکلات احتمالی را برطرف کنند. نتیجه‌گیری
                  برنامه‌نویسی بازی‌های ویدیویی مثل Counter-Strike 2 سفری
                  هیجان‌انگیز به دنیایی است که در آن خلاقیت و تکنولوژی دست به
                  دست هم می‌دهند. با یادگیری زبان‌های قدرتمندی مثل C++ برای
                  سیستم‌های پیچیده و Lua برای تعاملات درون بازی، شما نیز
                  می‌توانید اولین قدم‌ها را به سمت تبدیل ایده‌های خود به واقعیت
                  بردارید. این مسیر شاید چالش‌برانگیز باشد، اما با ابزارهای
                  مناسب و منابع آموزشی در دسترس، هر چیزی ممکن است. حالا که
                  می‌دانید چگونه این بازی محبوب ساخته شده و چه ابزارهایی برای
                  ورود به دنیای بازی‌سازی نیاز دارید، وقت آن است که قدم اول را
                  بردارید. آیا آماده‌اید تا کدهای خود را بنویسید و دنیاهای جدید
                  خلق کنید؟ نظرات و سوالات خود را با ما در میان بگذارید و در این
                  مسیر یادگیری با ما همراه شوید. دنیا منتظر بازی بعدی شماست!
                </p>
              </div>
              {/* <!-- Related Blogs --> */}
              <div className="bg-white dark:bg-darkBox text-darkColor dark:text-white rounded-3xl p-7 sm:p-10 mt-12">
                <div className="mt-2 sm:mt-0 flex items-center gap-x-3 relative pb-10 sm:pb-12">
                  <span className="absolute -right-8 sm:-right-11 block w-1 h-16 bg-light-blue-600 rounded-r-full shadowLightBlue"></span>
                  <div className="hidden md:block text-6xl text-light-blue-700 dark:text-light-blue-600">
                  <HiBookOpen />
                  </div>
                  <h1 className="font-EstedadBold text-3xl md:text-4xl">
                    پیشنهاد مطالعه
                  </h1>
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                  <div className="flex items-center gap-x-4 bg-gray-100 dark:bg-[#333c4c] p-6 rounded-2xl">
                    <img
                      src="/images/blog/2.jpg"
                      className="h-32 rounded-xl"
                      alt="برنامه نویسی را از چه سنی شروع کنیم"
                    />
                    <div>
                      <a href="" className="font-EstedadMedium line-clamp-1">
                        برنامه نویسی را از چه سنی شروع کنیم
                      </a>
                      <div className="flex items-center gap-x-2 mt-8 text-blue-gray-800/80 dark:text-white/50">
                        <div className="text-3xl">
                          <HiOutlineCalendar />
                        </div>
                        <span className="font-EstedadMedium text-[1.35rem] mt-2.5 mt-2.5">
                          1403/09/01
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-x-4 bg-gray-100 dark:bg-[#333c4c] p-6 rounded-2xl">
                    <img
                      src="/images/blog/3.jpeg"
                      className="h-32 rounded-xl"
                      alt="برنامه‌ نویسی به عنوان شغل دوم: مزایا و چالش‌ها"
                    />
                    <div>
                      <a href="" className="font-EstedadMedium line-clamp-1">
                        برنامه‌ نویسی به عنوان شغل دوم: مزایا و چالش‌ها
                      </a>
                      <div className="flex items-center gap-x-2 mt-8 text-blue-gray-800/80 dark:text-white/50">
                        <div className="text-3xl">
                          <HiOutlineCalendar />
                        </div>
                        <span className="font-EstedadMedium text-[1.35rem] mt-2.5">
                          1403/08/21
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-x-4 bg-gray-100 dark:bg-[#333c4c] p-6 rounded-2xl">
                    <img
                      src="/images/blog/2.jpg"
                      className="h-32 rounded-xl"
                      alt="فرمول طلایی تعادل بین کار و زندگی برای برنامه‌ نویسان: از استرس تا آرامش"
                    />
                    <div>
                      <a href="" className="font-EstedadMedium line-clamp-1">
                        فرمول طلایی تعادل بین کار و زندگی برای برنامه‌ نویسان:
                        از استرس تا آرامش
                      </a>
                      <div className="flex items-center gap-x-2 mt-8 text-blue-gray-800/80 dark:text-white/50">
                        <div className="text-3xl">
                          <HiOutlineCalendar />
                        </div>
                        <span className="font-EstedadMedium text-[1.35rem] mt-2.5">
                          1403/08/18
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-x-4 bg-gray-100 dark:bg-[#333c4c] p-6 rounded-2xl">
                    <img
                      src="/images/blog/3.jpeg"
                      className="h-32 rounded-xl"
                      alt="5 نکته مهم در انتخاب اولین زبان برنامه‌نویسی برای یادگیری"
                    />
                    <div>
                      <a href="" className="font-EstedadMedium line-clamp-1">
                        5 نکته مهم در انتخاب اولین زبان برنامه‌نویسی برای
                        یادگیری
                      </a>
                      <div className="flex items-center gap-x-2 mt-8 text-blue-gray-800/80 dark:text-white/50">
                        <div className="text-3xl">
                          <HiOutlineCalendar />
                        </div>
                        <span className="font-EstedadMedium text-[1.35rem] mt-2.5">
                          1403/08/17
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Comments --> */}

              <CommentsTextArea />

              {/* <!-- Sidebar --> */}
              <aside className="col-span-full lg:col-span-4 xl:col-span-3 space-y-8">
                {/* <!-- Course Short Link --> */}
                <div
                  className="bg-white dark:bg-darkBox text-darkColor dark:text-white rounded-3xl p-7 sm:p-10 mt-12"
                >
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
                  <div className="flex items-center justify-between gap-x-3 p-4 mt-8 bg-light-blue-300/10 text-light-blue-300 border border-dashed border-sky-500 rounded-lg">
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
                {/* <!--Related Products--> */}
              </aside>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

// import React from "react";
// import Topbar from "./../../Components/Topbar/Topbar";
// import Navbar from "./../../Components/Navbar/Navbar";
// import Footer from "./../../Components/Footer/Footer";
// import Breadcrumb from "./../../Components/Breadcrumb/Breadcrumb";
// import CommentsTextArea from "../../Components/CommentsTextArea/CommentsTextArea";
// import { FaTelegramPlane } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
// import { FaFacebook } from "react-icons/fa";
// import { FaFolder } from "react-icons/fa";
// import { FaUser } from "react-icons/fa";
// import { BsClockFill } from "react-icons/bs";
// import { FaEye } from "react-icons/fa";
// import { IoMdArrowDropright } from "react-icons/io";
// import { IoMdArrowDropleft } from "react-icons/io";

// export default function ArticleInfo() {
//   return (
//     <>
//       {/* <Topbar /> */}
//       <Navbar />

//       <Breadcrumb
//         links={[
//           { id: 1, title: "خانه", to: "" },
//           {
//             id: 2,
//             title: "مقاله ها",
//             to: "category-info/frontend",
//           },
//           {
//             id: 3,
//             title: "ویو Vs ری‌اکت",
//             to: "course-info/js-expert",
//           },
//         ]}
//       />

//       <main className="main-section text-darkColor dark: text-white">
//         <div className="container">
//           <div className="rows-1">
//             <div className="cols-8">
//               <div className="p-9 shadow-normal rounded-lg">
//                 <h1 className="font-EstedadBold text-4xl text-zinc-600 border border-b-2 border-b-zinc-600 pb-4">
//                   معرفی بهترین سایت آموزش جاوا اسکریپت [ تجربه محور ] + آموزش
//                   رایگان
//                 </h1>
//                 <div className="flex items-center pt-4">
//                   <div className="article-header__category ml-8">
//                     <FaFolder classNameName="text-3xl text-slate-50" />
//                     <a href="#" className="text-lg text-zinc-400">
//                       جاوا اسکریپت
//                     </a>
//                   </div>
//                   <div className="article-header__category ml-8">
//                   <FaUser classNameName="text-3xl text-slate-50" />
//                     <span className="text-lg text-zinc-400">
//                       {" "}
//                       ارسال شده توسط قدیر
//                     </span>
//                   </div>
//                   <div className="article-header__category ml-8">
//                   <BsClockFill classNameName="text-3xl text-slate-50" />
//                     <span className="text-lg text-zinc-400">
//                       {" "}
//                       ارسال شده توسط قدیر
//                     </span>
//                   </div>
//                   <div className="article-header__category ml-8">
//                   <FaEye classNameName="text-3xl text-slate-50" />
//                     <span className="text-lg text-zinc-400"> 2.14k بازدید</span>
//                   </div>
//                 </div>
//                 <img
//                   src="/images/blog/1.jpg"
//                   alt="Article Cover"
//                   className="mt-16"
//                 />
//                 <div className="flex items-center my-8">
//                   <div className="ml-1">
//                     <img
//                       src="/images/svgs/star_fill.svg"
//                       className="article__score-icon"
//                     />
//                     <img
//                       src="/images/svgs/star_fill.svg"
//                       className="article__score-icon"
//                     />
//                     <img
//                       src="/images/svgs/star_fill.svg"
//                       className="article__score-icon"
//                     />
//                     <img
//                       src="/images/svgs/star_fill.svg"
//                       className="article__score-icon"
//                     />
//                     <img
//                       src="/images/svgs/star.svg"
//                       className="article__score-icon"
//                     />
//                   </div>
//                   <span className="mr-8 text-2xl text-zinc-400">4.2/5 - (5 امتیاز)</span>
//                 </div>

//                 <p className="article__paragraph text-2xl/10 text-zinc-500">
//                   جاوا اسکریپت یکی از زبان‌های برنامه‌نویسی اصلی حوزه فرانت‌اند
//                   است که به واسطه فریم ورک‌های آن می‌توان انواع وب سایت‌ها،
//                   اپلیکیشن‌ها و وب اپلیکیشن‌ها را طراحی کرد. به طور کلی بعد از
//                   یادگیری html و css معمولاً باید آموزش جاوا اسکریپت را نیز فرا
//                   بگیرید. . چرا که این زبان تکمیل‌کننده html و css بوده و در
//                   چنین شرایطی موقعیت‌های شغلی بیشتر را در اختیار خواهید داشت و
//                   همچنین می‌توانید پروژه‌های گسترده‌تری را انجام دهید. در حال
//                   حاضر با وجود منابع رایگان موجود در وب شما به راحتی می‌توانید
//                   زبان جاوا اسکریپت را به صورت حرفه‌ای فرا بگیرید. به همین واسطه
//                   در ادامه مطلب قصد داریم سایت‌های شاخص آموزش این زبان
//                   برنامه‌نویسی در جهان را به شما معرفی کنیم و در آخر بگوییم که
//                   بهترین سایت آموزش جاوا اسکریپت کدام است.
//                 </p>

//                 <div className="bg-slate-100 rounded-4xl py-8 px-12 my-12">
//                   <span className="block text-zinc-800 text-2xl mb-2 font-EstedadBold">
//                     آنچه در این مقاله خواهید خواند
//                   </span>
//                   <ul className="article-read__list">
//                     <li className="article-read__item">
//                       <a href="#" className="text-2xl text-lightishBlue-500 hover:text-fuchsia-500">
//                         معرفی بهترین سایت ‌های آموزش جاوا اسکریپت:
//                       </a>
//                     </li>
//                     <li className="article-read__item">
//                       <a href="#" className="text-2xl text-lightishBlue-500 hover:text-fuchsia-500">
//                         یک راه آسان‌تر، دوره‌ های جاوا اسکریپت آکادمی سبزلرن!
//                       </a>
//                     </li>
//                     <li className="article-read__item">
//                       <a href="#" className="text-2xl text-lightishBlue-500 hover:text-fuchsia-500">
//                         ثبت نام در دوره‌ های جاوا اسکریپت سبزلرن:
//                       </a>
//                     </li>
//                   </ul>
//                 </div>

//                 <img
//                   src="/images/blog/2.jpg"
//                   alt="Article Image"
//                   className="block mx-auto"
//                 />
//                 <div className="my-20">
//                   <h2 className="text-4xl/5 text-emerald-600 font-EstedadBold">
//                     معرفی بهترین سایت ‌های آموزش جاوا اسکریپت:
//                   </h2>
//                   <p className="paragraph my-8">
//                     توجه داشته باشید که تمام وب سایت‌هایی که به عنوان بهترین
//                     سایت آموزش جاوا اسکریپت در ادامه معرفی می‌کنیم، بین‌المللی
//                     هستند و منابع موجود در آن‌ها به زبان انگلیسی است. در نتیجه
//                     شما باید یا تسلط متوسط و حداقلی به زبان انگلیسی داشته باشید
//                     و یا اینکه با استفاده از گوگل ترنسلیت منابع موجود را ترجمه
//                     کرده و از آن‌ها استفاده کنید. به همین دلیل در انتهای محتوا
//                     به شما خواهیم گفت که راه آسان دیگری برای یادگیری زبان جاوا
//                     اسکریپت وجود دارد که شما بتوانید به واسطه آن به صورت رایگان
//                     و به زبان فارسی این زبان را یاد بگیرید.
//                   </p>
//                   <img
//                     src="/images/blog/4.png"
//                     alt="article body img"
//                     className="block mx-auto"
//                   />
//                 </div>
//                 <div className="my-20">
//                   <h2 className="text-4xl/5 text-emerald-600 font-EstedadBold">
//                     معرفی بهترین سایت ‌های آموزش جاوا اسکریپت:
//                   </h2>
//                   <p className="paragraph my-8">
//                     توجه داشته باشید که تمام وب سایت‌هایی که به عنوان بهترین
//                     سایت آموزش جاوا اسکریپت در ادامه معرفی می‌کنیم، بین‌المللی
//                     هستند و منابع موجود در آن‌ها به زبان انگلیسی است. در نتیجه
//                     شما باید یا تسلط متوسط و حداقلی به زبان انگلیسی داشته باشید
//                     و یا اینکه با استفاده از گوگل ترنسلیت منابع موجود را ترجمه
//                     کرده و از آن‌ها استفاده کنید. به همین دلیل در انتهای محتوا
//                     به شما خواهیم گفت که راه آسان دیگری برای یادگیری زبان جاوا
//                     اسکریپت وجود دارد که شما بتوانید به واسطه آن به صورت رایگان
//                     و به زبان فارسی این زبان را یاد بگیرید.
//                   </p>
//                 </div>
//                 <div className="my-20">
//                   <h2 className="text-4xl/5 text-emerald-600 font-EstedadBold">
//                     معرفی بهترین سایت ‌های آموزش جاوا اسکریپت:
//                   </h2>
//                   <p className="paragraph my-8">
//                     توجه داشته باشید که تمام وب سایت‌هایی که به عنوان بهترین
//                     سایت آموزش جاوا اسکریپت در ادامه معرفی می‌کنیم، بین‌المللی
//                     هستند و منابع موجود در آن‌ها به زبان انگلیسی است. در نتیجه
//                     شما باید یا تسلط متوسط و حداقلی به زبان انگلیسی داشته باشید
//                     و یا اینکه با استفاده از گوگل ترنسلیت منابع موجود را ترجمه
//                     کرده و از آن‌ها استفاده کنید. به همین دلیل در انتهای محتوا
//                     به شما خواهیم گفت که راه آسان دیگری برای یادگیری زبان جاوا
//                     اسکریپت وجود دارد که شما بتوانید به واسطه آن به صورت رایگان
//                     و به زبان فارسی این زبان را یاد بگیرید.
//                   </p>
//                   <img
//                     src="/images/blog/3.jpg"
//                     alt="article body img"
//                     className="block mx-auto"
//                   />
//                 </div>

//                 <div className="flex items-center">
//                   <span className="text-2xl text-zinc-500">اشتراک گذاری :</span>
//                   <a href="#" className="flex items-center m-2 text-zinc-500">
//                     <FaTelegramPlane />
//                   </a>
//                   <a href="#" className="flex items-center m-2 text-zinc-500">
//                     <FaTwitter />
//                   </a>
//                   <a href="#" className="flex items-center m-2 text-zinc-500">
//                     <FaFacebook />
//                   </a>
//                 </div>

//               </div>

//               <div className="my-16 py-14 px-10 rounded-lg bg-slate-100">
//                 <div className="rows-1">
//                   <div className="cols-6">
//                     <div className="relative suggestion-articles__right flex items-center">
//                       <a href="#" className="text-slate-300">
//                       <IoMdArrowDropright />
//                       </a>
//                       <a href="#" className="text-center mx-8">
//                         سریع ترین و بهترین راه یادگیری جاوا اسکریپت چیست؟ | تجربه برنامه نویسان
//                       </a>
//                     </div>
//                   </div>
//                   <div className="cols-6">
//                     <div className="relative suggestion-articles__left flex flex-row-reverse items-center">
//                       <a href="#" className="text-slate-300">
//                       <IoMdArrowDropleft />
//                       </a>
//                       <a href="#" className="text-center mx-8">
//                         سریع ترین و بهترین راه یادگیری جاوا اسکریپت چیست؟ | تجربه برنامه نویسان
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <CommentsTextArea />

//             </div>
//             <div className="cols-4"></div>
//           </div>
//         </div>
//       </main>

//       <Footer />
//     </>
//   );
// }
