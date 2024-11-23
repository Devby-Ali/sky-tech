import React from "react";
import Topbar from "./../../Components/Topbar/Topbar";
import Navbar from "./../../Components/Navbar/Navbar";
import Footer from "./../../Components/Footer/Footer";
import Breadcrumb from "./../../Components/Breadcrumb/Breadcrumb";
import CommentsTextArea from "../../Components/CommentsTextArea/CommentsTextArea";

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

          <section className="grid grid-cols-1 lg:grid-cols-12 gap-x-7 gap-y-8 mt-8 md:mt-10">
            {/* <!-- Content --> */}
            <div className="col-span-full lg:col-span-8 xl:col-span-9">
              <div className="bg-white dark:bg-darker rounded-2xl p-4.5 sm:p-5 ">
                {/* <!-- head --> */}
                <div className="flex items-center gap-x-2 mb-5 sm:mb-6 pb-5 sm:pb-6 border-b border-b-neutral-200/60 dark:border-b-white/10 relative">
                  <span className="absolute -right-6 sm:-right-[26px] block w-1.5 h-[34px] md:h-9.5 bg-sky-500 rounded-r-sm"></span>
                  <h1 className="font-danaDemiBold text-xl md:text-[1.625rem]/10">
                    زبان برنامه نویسی بازی counter Strike 2
                  </h1>
                </div>
                {/* <!-- info --> */}
                <div className="grid sm:flex grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-3 mb-6 text-slate-500 font-danaMedium text-sm sm:text-base">
                  {/* <!-- author --> */}
                  <div className="flex items-center gap-x-1.5">
                    <svg className="size-6 sm:size-7">
                      <use href="#user"></use>
                    </svg>
                    <span>شهرام خندقی</span>
                  </div>
                  {/* <!-- date --> */}
                  <div className="flex items-center gap-x-1.5">
                    <svg className="size-6 sm:size-7">
                      <use href="#calendar"></use>
                    </svg>
                    <span>1403/08/30</span>
                  </div>
                  {/* <!-- category --> */}
                  {/* <!-- view count --> */}
                  <div className="flex items-center gap-x-1.5">
                    <svg className="size-6 sm:size-7">
                      <use href="#eye"></use>
                    </svg>
                    <span>246</span>
                  </div>
                </div>
                {/* <!-- thumbnail --> */}
                <img
                  src=""
                  className="aspect-video object-cover rounded-2xl"
                  alt="زبان برنامه نویسی بازی counter Strike 2"
                />
                <div
                  className="rounded-lg !rounded-tr-none border border-neutral-300 dark:border-slate-500 mt-8 overflow-hidden mb-6 md:mb-8"
                  id="toc-collapse"
                >
                  <div className="flex items-center justify-between px-4 py-5 ">
                    <div className="flex items-center gap-x-2">
                      <svg className="size-6">
                        <use href="#bars-4"></use>
                      </svg>
                      <span className="text-sm md:text-base md:font-danaMedium">
                        سرفصل های این مقاله:{" "}
                      </span>
                    </div>
                    <button
                      className="flex-center bg-neutral-300 dark:bg-slate-500  size-6 md:size-7 rounded-full"
                      data-collapse="#toc-collapse"
                      data-height="h-16 md:h-17"
                    >
                      <svg className="size-4 md:size-5">
                        <use href="#chevron-down"></use>
                      </svg>
                    </button>
                  </div>
                  <div className="flex flex-col gap-2.5 border-t border-neutral-300 dark:border-slate-500 p-5">
                    <a
                      href="#h_1"
                      className="text-sm md:text-base font-danaDemiBold"
                    >
                      موتور بازی‌سازی Source 2؛ قلب تپنده Counter-Strike 2
                    </a>
                    <a
                      href="#h_2"
                      className="text-sm md:text-base font-danaDemiBold"
                    >
                      زبان‌های برنامه‌نویسی اصلی مورد استفاده در Counter-Strike
                      2
                    </a>
                    <a
                      href="#h_3"
                      className="text-sm md:text-base font-danaDemiBold"
                    >
                      مقایسه سریع زبان‌ها
                    </a>
                    <a
                      href="#h_4"
                      className="text-sm md:text-base font-danaDemiBold"
                    >
                      چرا C++ زبان اصلی توسعه Counter-Strike 2 است؟
                    </a>
                    <a
                      href="#h_5"
                      className="text-sm md:text-base font-danaDemiBold"
                    >
                      نتیجه‌گیری
                    </a>
                  </div>
                  {/*					<!-- Full Description --> */}
                  {/* <div className="wp-content">
                  <meta charset="utf8" />
                  <p>
                    <span style="font-weight: 400">
                      تصور کنید در دنیایی هستید که هر حرکت شما با دقت
                      برنامه‌ریزی شده، هر گلوله‌ای که شلیک می‌کنید، مسیری کاملاً
                      محاسبه‌شده دارد، و هر جزییاتی که می‌بینید، نتیجه هزاران خط
                      کد است. این همان دنیای بازی{" "}
                    </span>
                    <a
                      href="https://www.counter-strike.net/cs2"
                      rel="nofollow noopener"
                      target="_blank"
                    >
                      <b>Counter-Strike 2</b>
                    </a>
                    <span style="font-weight: 400">
                      {" "}
                      است؛ شاهکاری در دنیای بازی‌های ویدیویی که قلب آن با
                      زبان‌های برنامه‌نویسی می‌تپد.
                    </span>
                  </p>
                  <p>
                    <span style="font-weight: 400">شاید بپرسید: </span>
                    <b>چطور این بازی ساخته شده؟</b>
                    <span style="font-weight: 400"> یا </span>
                    <b>زبان برنامه‌نویسی اصلی Counter-Strike 2 چیست؟</b>
                    <span style="font-weight: 400"> جواب کوتاه: </span>
                    <b>C++</b>
                    <span style="font-weight: 400">
                      . این زبان قدرتمند، مغز متفکر پشت Source 2، موتوری است که
                      این بازی را به حرکت در می‌آورد. اما این تنها بخشی از
                      داستان است؛ در کنار C++، زبان Lua نقش بازیگردانی را ایفا
                      می‌کند تا تجربه بازی شما روان و جذاب باشد.
                    </span>
                  </p>
                  <p>
                    <span style="font-weight: 400">
                      اما این همه ماجرا نیست! دنیای برنامه‌نویسی بازی‌ها پر از
                      راز و رمزهایی است که با کمی کنجکاوی می‌توانید به آن‌ها پی
                      ببرید. اگر دوست دارید بدانید چطور یک بازی مثل
                      Counter-Strike 2 خلق می‌شود یا حتی می‌خواهید اولین قدم‌های
                      خود را در برنامه‌نویسی بازی‌ها بردارید، این مقاله از وب
                      سایت سبزلرن دقیقاً برای شماست. آیا آماده سفر به پشت‌صحنه
                      دنیای بازی‌سازی هستید؟ 🎮
                    </span>
                  </p>
                  <p>&nbsp;</p>
                  <p>
                    <img
                      decoding="async"
                      loading="lazy"
                      className="alignnone wp-image-5399 size-full"
                      src="https://sabzlearn.ir/wp-content/uploads/2024/11/2.jpg"
                      alt=""
                      width="1200"
                      height="630"
                      sizes="(max-width: 1200px) 100vw, 1200px"
                    />
                  </p>
                  <h2 id="h_1">
                    <b>موتور بازی‌سازی Source 2؛ قلب تپنده Counter-Strike 2</b>
                  </h2>
                  <p>
                    <span style="font-weight: 400">
                      وقتی به بازی شگفت‌انگیزی مثل{" "}
                    </span>
                    <b>Counter-Strike 2</b>
                    <span style="font-weight: 400">
                      {" "}
                      فکر می‌کنیم، اولین چیزی که به ذهن می‌رسد گرافیک
                      خیره‌کننده، فیزیک دقیق و گیم‌پلی روان آن است. اما راز
                      موفقیت این بازی در چه چیزی نهفته است؟ پاسخ در{" "}
                    </span>
                    <a
                      href="https://developer.valvesoftware.com/wiki/Source_2"
                      rel="nofollow noopener"
                      target="_blank"
                    >
                      <b>موتور بازی‌سازی Source 2</b>
                    </a>
                    <span style="font-weight: 400">
                      {" "}
                      است؛ پلتفرمی قدرتمند که توسط کمپانی Valve توسعه یافته و
                      هسته اصلی توسعه این بازی است.
                    </span>
                  </p>
                  <p>
                    <b>Source 2</b>
                    <span style="font-weight: 400">
                      {" "}
                      تنها یک موتور بازی‌سازی نیست، بلکه ابزاری همه‌جانبه برای
                      خلق دنیاهای مجازی است. این موتور با ویژگی‌هایی مانند
                      پشتیبانی از گرافیک پیشرفته، ابزارهای اسکریپت‌نویسی قوی و
                      بهینه‌سازی عملکرد، به توسعه‌دهندگان این امکان را می‌دهد که
                      بازی‌هایی در سطح بالای فنی و هنری تولید کنند.
                    </span>
                  </p>
                  <h3>
                    <b>ویژگی‌های کلیدی Source 2 و نقش آن در Counter-Strike 2</b>
                  </h3>
                  <p>
                    <span style="font-weight: 400">
                      در جدول زیر برخی از ویژگی‌های شاخص این موتور و نقش آن‌ها
                      در توسعه بازی را مشاهده می‌کنید:
                    </span>
                  </p>
                  <table style="width: 70.6683%;height: 366px">
                    <tbody>
                      <tr>
                        <td style="text-align: center">
                          <b>ویژگی Source 2</b>
                        </td>
                        <td style="text-align: center">
                          <b>کاربرد در Counter-Strike 2</b>
                        </td>
                      </tr>
                      <tr>
                        <td style="text-align: center">
                          <b>پشتیبانی از گرافیک پیشرفته</b>
                        </td>
                        <td style="text-align: center">
                          <span style="font-weight: 400">
                            ایجاد گرافیک واقع‌گرایانه و نورپردازی دقیق
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td style="text-align: center">
                          <b>سیستم بهینه‌سازی عملکرد</b>
                        </td>
                        <td style="text-align: center">
                          <span style="font-weight: 400">
                            تضمین اجرای روان بازی روی سیستم‌های مختلف
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td style="text-align: center">
                          <b>ابزارهای اسکریپت‌نویسی قوی</b>
                        </td>
                        <td style="text-align: center">
                          <span style="font-weight: 400">
                            سفارشی‌سازی تعاملات و گیم‌پلی منحصربه‌فرد
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td style="text-align: center">
                          <b>مدیریت بهینه حافظه</b>
                        </td>
                        <td style="text-align: center">
                          <span style="font-weight: 400">
                            استفاده بهینه از منابع سخت‌افزاری
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <h3></h3>
                  <h3>
                    <b>
                      چرا Source 2 انتخابی ایده‌آل برای Counter-Strike 2 است؟
                    </b>
                  </h3>
                  <ul>
                    <li style="font-weight: 400">
                      <b>عملکرد بی‌نقص:</b>
                      <span style="font-weight: 400">
                        {" "}
                        این موتور توانایی پردازش حجم بالایی از داده‌ها را با
                        کمترین میزان تأخیر دارد.
                      </span>
                    </li>
                    <li style="font-weight: 400">
                      <b>انعطاف‌پذیری بالا:</b>
                      <span style="font-weight: 400">
                        {" "}
                        توسعه‌دهندگان می‌توانند به راحتی محتواهای جدید و
                        بهینه‌سازی‌های مداوم را در بازی پیاده کنند.
                      </span>
                    </li>
                    <li style="font-weight: 400">
                      <b>جامعه گسترده توسعه‌دهندگان:</b>
                      <span style="font-weight: 400">
                        {" "}
                        ابزارهای Source 2 به گونه‌ای طراحی شده‌اند که حتی
                        توسعه‌دهندگان تازه‌کار نیز بتوانند از آن استفاده کنند.
                      </span>
                    </li>
                  </ul>
                  <p>&nbsp;</p>
                  <h2 id="h_2">
                    <b>
                      زبان‌های برنامه‌نویسی اصلی مورد استفاده در Counter-Strike
                      2
                    </b>
                  </h2>
                  <p>
                    <span style="font-weight: 400">
                      برای ساخت یک بازی شاهکار مثل{" "}
                    </span>
                    <b>Counter-Strike 2</b>
                    <span style="font-weight: 400">
                      ، صرفاً داشتن یک موتور بازی‌سازی قدرتمند مانند{" "}
                    </span>
                    <b>Source 2</b>
                    <span style="font-weight: 400">
                      {" "}
                      کافی نیست؛ زبان‌های برنامه‌نویسی نیز نقش اساسی در این
                      فرآیند دارند. هر زبان برنامه‌نویسی با ویژگی‌های خاص خود،
                      بخشی از این پازل پیچیده را تکمیل می‌کند. در این بخش، به
                      زبان‌های اصلی مورد استفاده در توسعه این بازی می‌پردازیم.
                    </span>
                  </p>
                  <p>&nbsp;</p>
                  <h3>
                    <b>1. زبان برنامه نویسی C++</b>
                  </h3>
                  <p>
                    <b>C++</b>
                    <span style="font-weight: 400">
                      {" "}
                      زبان اصلی برای توسعه موتور Source 2 است و هسته اصلی تمام
                      سیستم‌های پیچیده این بازی را تشکیل می‌دهد. دلایل استفاده
                      گسترده از این زبان عبارت‌اند از:
                    </span>
                  </p>
                  <ul>
                    <li style="font-weight: 400">
                      <b>عملکرد بالا:</b>
                      <span style="font-weight: 400">
                        {" "}
                        C++ بهینه‌ترین زبان برای پردازش حجم زیادی از داده‌ها و
                        اجرای محاسبات سنگین در بازی‌های ویدیویی است.
                      </span>
                    </li>
                    <li style="font-weight: 400">
                      <b>مدیریت دقیق حافظه:</b>
                      <span style="font-weight: 400">
                        {" "}
                        در بازی‌هایی مثل Counter-Strike 2 که به گرافیک پیشرفته و
                        هوش مصنوعی پیچیده نیاز دارند، کنترل حافظه اهمیت بالایی
                        دارد.
                      </span>
                    </li>
                    <li style="font-weight: 400">
                      <b>قابلیت شی‌ءگرایی:</b>
                      <span style="font-weight: 400">
                        {" "}
                        برای طراحی سیستم‌های پیچیده‌ای مثل فیزیک بازی،
                        انیمیشن‌ها و گیم‌پلی، ویژگی‌های شی‌ءگرایانه C++ ایده‌آل
                        هستند.
                      </span>
                    </li>
                  </ul>
                  <p>
                    <b>مثال در دنیای واقعی:</b>
                    <span style="font-weight: 400">
                      {" "}
                      وقتی بازیکنی در CS2 یک تیر شلیک می‌کند، مسیر تیر، برخورد
                      با اشیا و حتی تأثیرات فیزیکی به لطف کدهای C++ محاسبه
                      می‌شود.
                    </span>
                  </p>
                  <h3>
                    <b>2. Lua: مکملی برای C++</b>
                  </h3>
                  <p>
                    <b>Lua</b>
                    <span style="font-weight: 400">
                      {" "}
                      به عنوان یک زبان اسکریپت‌نویسی سبک و انعطاف‌پذیر، برای
                      ایجاد تعاملات درون بازی و سفارشی‌سازی بخش‌های مختلف
                      استفاده می‌شود.
                    </span>
                    <span style="font-weight: 400">
                      <br />
                    </span>
                    <span style="font-weight: 400">
                      ویژگی‌های{" "}
                      <a
                        href="https://www.lua.org/"
                        rel="nofollow noopener"
                        target="_blank"
                      >
                        Lua
                      </a>{" "}
                      که آن را برای این کار مناسب می‌کند:
                    </span>
                  </p>
                  <ul>
                    <li style="font-weight: 400">
                      <b>سبک و سریع:</b>
                      <span style="font-weight: 400">
                        {" "}
                        Lua با سرعت اجرا و حجم کم خود، فشار زیادی روی سیستم وارد
                        نمی‌کند.
                      </span>
                    </li>
                    <li style="font-weight: 400">
                      <b>مناسب برای اسکریپت‌نویسی:</b>
                      <span style="font-weight: 400">
                        {" "}
                        توسعه‌دهندگان می‌توانند با استفاده از Lua، رفتارهای خاصی
                        را در بازی ایجاد کنند، مانند اسکریپت‌های مربوط به
                        گیم‌پلی یا هوش مصنوعی دشمنان.
                      </span>
                    </li>
                    <li style="font-weight: 400">
                      <b>سادگی یادگیری:</b>
                      <span style="font-weight: 400">
                        {" "}
                        Lua نسبت به C++ ساده‌تر است و توسعه‌دهندگان جدید
                        می‌توانند به سرعت با آن کار کنند.
                      </span>
                    </li>
                  </ul>
                  <p>
                    <b>مثال در دنیای بازی:</b>
                    <span style="font-weight: 400">
                      {" "}
                      وقتی یک بازیکن وارد منطقه‌ای خاص در نقشه می‌شود و یک
                      رویداد خاص (مانند نمایش پیام یا فعال شدن یک تله) اتفاق
                      می‌افتد، این عملکرد معمولاً با Lua پیاده‌سازی شده است.
                    </span>
                  </p>
                  <h3>
                    <b>3. Python: ابزار کمکی پشت صحنه</b>
                  </h3>
                  <p>
                    <span style="font-weight: 400">
                      اگرچه{" "}
                      <a href="https://sabzlearn.ir/blog/what-is-python-2022/">
                        پایتون
                      </a>{" "}
                      زبان اصلی توسعه Counter-Strike 2 نیست، اما در فرآیند ساخت
                      ابزارهای کمکی و تست بازی نقش دارد.
                    </span>
                  </p>
                  <ul>
                    <li style="font-weight: 400">
                      <b>استفاده در ابزارهای تست و اتوماسیون:</b>
                      <span style="font-weight: 400">
                        {" "}
                        Python برای اجرای تست‌های خودکار و شناسایی باگ‌ها به کار
                        می‌رود.
                      </span>
                    </li>
                    <li style="font-weight: 400">
                      <b>ابزارهای جانبی:</b>
                      <span style="font-weight: 400">
                        {" "}
                        برخی از ابزارهای مرتبط با توسعه محتوا یا مدیریت پایگاه
                        داده‌ها با Python نوشته می‌شوند.
                      </span>
                    </li>
                  </ul>
                  <p>&nbsp;</p>
                  <h2 id="h_3">
                    <b>مقایسه سریع زبان‌ها</b>
                  </h2>
                  <p>
                    <span style="font-weight: 400">
                      در جدول زیر می‌توانید نقش و ویژگی‌های هر زبان را در توسعه
                      Counter-Strike 2 مشاهده کنید:
                    </span>
                  </p>
                  <table style="width: 64.0026%;height: 210px">
                    <tbody>
                      <tr>
                        <td style="text-align: center">
                          <b>زبان برنامه‌نویسی</b>
                        </td>
                        <td style="text-align: center">
                          <b>نقش در توسعه</b>
                        </td>
                        <td style="text-align: center">
                          <b>ویژگی کلیدی</b>
                        </td>
                      </tr>
                      <tr>
                        <td style="text-align: center">
                          <b>C++</b>
                        </td>
                        <td style="text-align: center">
                          <span style="font-weight: 400">
                            هسته اصلی سیستم‌ها و موتور بازی
                          </span>
                        </td>
                        <td style="text-align: center">
                          <span style="font-weight: 400">
                            عملکرد بالا و کنترل حافظه
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td style="text-align: center">
                          <b>Lua</b>
                        </td>
                        <td style="text-align: center">
                          <span style="font-weight: 400">
                            اسکریپت‌نویسی و تعاملات درون بازی
                          </span>
                        </td>
                        <td style="text-align: center">
                          <span style="font-weight: 400">
                            سبک، سریع و انعطاف‌پذیر
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td style="text-align: center">
                          <b>Python</b>
                        </td>
                        <td style="text-align: center">
                          <span style="font-weight: 400">
                            تست و توسعه ابزارهای جانبی
                          </span>
                        </td>
                        <td style="text-align: center">
                          <span style="font-weight: 400">
                            سادگی و مناسب برای اتوماسیون فرآیندها
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p>
                    <img
                      decoding="async"
                      loading="lazy"
                      className="alignnone wp-image-5400 size-full"
                      src="https://sabzlearn.ir/wp-content/uploads/2024/11/3.jpg"
                      alt=""
                      width="1200"
                      height="630"
                      sizes="(max-width: 1200px) 100vw, 1200px"
                    />
                  </p>
                  <h2 id="h_4">
                    <b>چرا C++ زبان اصلی توسعه Counter-Strike 2 است؟</b>
                  </h2>
                  <p>
                    <span style="font-weight: 400">
                      اگر قرار باشد زبان‌های برنامه‌نویسی را به ابزارهای یک
                      معمار تشبیه کنیم،{" "}
                    </span>
                    <b>C++</b>
                    <span style="font-weight: 400">
                      {" "}
                      مانند ابزار چندکاره‌ای است که برای هر چالشی یک راه‌حل
                      دارد. این زبان، که به‌عنوان ستون فقرات موتور{" "}
                    </span>
                    <b>Source 2</b>
                    <span style="font-weight: 400">
                      {" "}
                      عمل می‌کند، نقشی کلیدی در ساخت بازی‌هایی مانند{" "}
                    </span>
                    <b>Counter-Strike 2</b>
                    <span style="font-weight: 400">
                      {" "}
                      ایفا می‌کند. اما چرا C++؟ در این بخش به بررسی ویژگی‌ها و
                      دلایلی می‌پردازیم که باعث شده این زبان انتخاب اصلی
                      توسعه‌دهندگان برای چنین بازی‌های پیچیده‌ای باشد.
                    </span>
                  </p>
                  <h3>
                    <b>1. عملکرد و کارایی بالا</b>
                  </h3>
                  <p>
                    <b>C++</b>
                    <span style="font-weight: 400">
                      {" "}
                      بهینه‌ترین زبان برای پردازش وظایف سنگین است، به‌ویژه در
                      بازی‌هایی که نیاز به گرافیک پیچیده و سیستم‌های فیزیکی دقیق
                      دارند. این ویژگی به Counter-Strike 2 امکان می‌دهد:
                    </span>
                  </p>
                  <ul>
                    <li style="font-weight: 400">
                      <span style="font-weight: 400">
                        بازی را روی سخت‌افزارهای متنوع اجرا کند.
                      </span>
                    </li>
                    <li style="font-weight: 400">
                      <span style="font-weight: 400">
                        لگ (تاخیر) را به حداقل برساند.
                      </span>
                    </li>
                    <li style="font-weight: 400">
                      <span style="font-weight: 400">
                        تجربه‌ای روان و بدون قطعی به بازیکنان ارائه دهد.
                      </span>
                    </li>
                  </ul>
                  <h3>
                    <b>2. کنترل دقیق حافظه</b>
                  </h3>
                  <p>
                    <span style="font-weight: 400">
                      یکی از ویژگی‌های برجسته C++، امکان مدیریت دقیق حافظه است.
                      این قابلیت در بازی‌هایی با حجم بالای داده‌های گرافیکی و
                      فیزیکی اهمیت زیادی دارد.
                    </span>
                  </p>
                  <p>
                    <b>مثال عملی:</b>
                    <span style="font-weight: 400">
                      {" "}
                      هنگام شبیه‌سازی پرتاب نارنجک در بازی، مسیر، انفجار، و
                      تاثیرات فیزیکی آن در لحظه توسط کدهای بهینه C++ پردازش و
                      نمایش داده می‌شود.
                    </span>
                  </p>
                  <h3>
                    <b>3. مناسب برای سیستم‌های پیچیده</b>
                  </h3>
                  <p>
                    <span style="font-weight: 400">C++ با پشتیبانی از </span>
                    <b>شی‌ءگرایی</b>
                    <span style="font-weight: 400">
                      ، توسعه سیستم‌های پیچیده‌ای مانند هوش مصنوعی دشمنان،
                      شبیه‌سازی‌های فیزیکی و مدیریت چندین بازیکن آنلاین را تسهیل
                      می‌کند.
                    </span>
                  </p>
                  <p>
                    <b>مثال:</b>
                    <span style="font-weight: 400">
                      {" "}
                      در Counter-Strike 2، رفتار دشمنان (Bots) و تصمیم‌گیری‌های
                      آن‌ها توسط الگوریتم‌های مبتنی بر شی‌ءگرایی مدیریت می‌شود.
                    </span>
                  </p>
                  <h3>
                    <b>4. پشتیبانی گسترده و جامعه قوی</b>
                  </h3>
                  <p>
                    <span style="font-weight: 400">
                      C++ یکی از پرکاربردترین زبان‌ها در صنعت بازی‌سازی است و
                      منابع آموزشی و ابزارهای زیادی برای آن در دسترس است. این
                      امر باعث می‌شود توسعه‌دهندگان به‌راحتی از این زبان استفاده
                      کنند و مشکلات احتمالی را برطرف کنند.
                    </span>
                  </p>
                  <p>&nbsp;</p>
                  <h2 id="h_5">
                    <b>نتیجه‌گیری</b>
                  </h2>
                  <p>
                    <span style="font-weight: 400">
                      برنامه‌نویسی بازی‌های ویدیویی مثل{" "}
                    </span>
                    <b>Counter-Strike 2</b>
                    <span style="font-weight: 400">
                      {" "}
                      سفری هیجان‌انگیز به دنیایی است که در آن خلاقیت و تکنولوژی
                      دست به دست هم می‌دهند. با یادگیری زبان‌های قدرتمندی مثل{" "}
                    </span>
                    <b>C++</b>
                    <span style="font-weight: 400">
                      {" "}
                      برای سیستم‌های پیچیده و{" "}
                    </span>
                    <b>Lua</b>
                    <span style="font-weight: 400">
                      {" "}
                      برای تعاملات درون بازی، شما نیز می‌توانید اولین قدم‌ها را
                      به سمت تبدیل ایده‌های خود به واقعیت بردارید. این مسیر شاید
                      چالش‌برانگیز باشد، اما با ابزارهای مناسب و منابع آموزشی در
                      دسترس، هر چیزی ممکن است.
                    </span>
                  </p>
                  <p>
                    <span style="font-weight: 400">
                      حالا که می‌دانید چگونه این بازی محبوب ساخته شده و چه
                      ابزارهایی برای ورود به دنیای بازی‌سازی نیاز دارید، وقت آن
                      است که قدم اول را بردارید. آیا آماده‌اید تا کدهای خود را
                      بنویسید و دنیاهای جدید خلق کنید؟ نظرات و سوالات خود را با
                      ما در میان بگذارید و در این مسیر یادگیری با ما همراه شوید.
                      دنیا منتظر بازی بعدی شماست!
                    </span>
                  </p>
                  <p>&nbsp;</p>
                </div> */}
                </div>
                {/* <!-- Related Blogs --> */}
                <div className="bg-white dark:bg-darker rounded-2xl p-4.5 sm:p-5 mt-8">
                  <div className="flex items-center gap-x-3 mb-6 sm:mb-7 relative">
                    <span className="absolute -right-6 sm:-right-[26px] block w-1.5 h-[34px] md:h-9.5 bg-amber-400 rounded-r-sm"></span>
                    <svg className="hidden md:inline-block text-amber-400 w-9.5 h-9.5">
                      <use href="#book-open-fill"></use>
                    </svg>
                    <h3 className="font-danaDemiBold text-xl md:text-2xl">
                      پیشنهاد مطالعه
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
                    <div className="flex items-center gap-x-4 bg-gray-100 dark:bg-dark p-3.5 rounded-xl">
                      <img
                        src=""
                        className="h-20 rounded-lg"
                        alt="برنامه نویسی را از چه سنی شروع کنیم"
                      />
                      <div>
                        <a
                          href="https://sabzlearn.ir/blog/%d8%a8%d8%b1%d9%86%d8%a7%d9%85%d9%87-%d9%86%d9%88%db%8c%d8%b3%db%8c-%d8%b1%d8%a7-%d8%a7%d8%b2-%da%86%d9%87-%d8%b3%d9%86%db%8c-%d8%b4%d8%b1%d9%88%d8%b9-%da%a9%d9%86%db%8c%d9%85/"
                          className="font-danaMedium line-clamp-1"
                        >
                          برنامه نویسی را از چه سنی شروع کنیم
                        </a>
                        <div className="flex items-center gap-x-1 text-slate-500 mt-4.5">
                          <svg className="size-5">
                            <use href="#calendar"></use>
                          </svg>
                          <span className="font-danaMedium text-sm">
                            1403/09/01
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-x-4 bg-gray-100 dark:bg-dark p-3.5 rounded-xl">
                      <img
                        src=""
                        className="h-20 rounded-lg"
                        alt="برنامه‌ نویسی به عنوان شغل دوم: مزایا و چالش‌ها"
                      />
                      <div>
                        <a
                          href="https://sabzlearn.ir/blog/%d8%a8%d8%b1%d9%86%d8%a7%d9%85%d9%87-%d9%86%d9%88%db%8c%d8%b3%db%8c-%d8%a8%d9%87-%d8%b9%d9%86%d9%88%d8%a7%d9%86-%d8%b4%d8%ba%d9%84-%d8%af%d9%88%d9%85/"
                          className="font-danaMedium line-clamp-1"
                        >
                          برنامه‌ نویسی به عنوان شغل دوم: مزایا و چالش‌ها
                        </a>
                        <div className="flex items-center gap-x-1 text-slate-500 mt-4.5">
                          <svg className="size-5">
                            <use href="#calendar"></use>
                          </svg>
                          <span className="font-danaMedium text-sm">
                            1403/08/21
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-x-4 bg-gray-100 dark:bg-dark p-3.5 rounded-xl">
                      <img
                        src="https://sabzlearn.ir/wp-content/uploads/2024/11/54.فرمول-طلایی-تعادل-بین-کار-و-زندگی-برای-برنامه‌-نویسان_-از-استرس-تا-آرامش.webp"
                        className="h-20 rounded-lg"
                        alt="فرمول طلایی تعادل بین کار و زندگی برای برنامه‌ نویسان: از استرس تا آرامش"
                      />
                      <div>
                        <a
                          href="https://sabzlearn.ir/blog/%d8%aa%d8%b9%d8%a7%d8%af%d9%84-%da%a9%d8%a7%d8%b1-%d9%88-%d8%b2%d9%86%d8%af%da%af%db%8c-%d8%a8%d8%b1%d8%a7%db%8c-%d8%a8%d8%b1%d9%86%d8%a7%d9%85%d9%87-%d9%86%d9%88%db%8c%d8%b3%d8%a7%d9%86/"
                          className="font-danaMedium line-clamp-1"
                        >
                          فرمول طلایی تعادل بین کار و زندگی برای برنامه‌ نویسان:
                          از استرس تا آرامش
                        </a>
                        <div className="flex items-center gap-x-1 text-slate-500 mt-4.5">
                          <svg className="size-5">
                            <use href="#calendar"></use>
                          </svg>
                          <span className="font-danaMedium text-sm">
                            1403/08/18
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-x-4 bg-gray-100 dark:bg-dark p-3.5 rounded-xl">
                      <img
                        src="https://sabzlearn.ir/wp-content/uploads/2024/11/تعیین-هدف_-چرا-می‌خواهید-برنامه‌نویسی-یاد-بگیرید؟.webp"
                        className="h-20 rounded-lg"
                        alt="5 نکته مهم در انتخاب اولین زبان برنامه‌نویسی برای یادگیری"
                      />
                      <div>
                        <a
                          href="https://sabzlearn.ir/blog/%d8%a7%d9%86%d8%aa%d8%ae%d8%a7%d8%a8-%d8%a7%d9%88%d9%84%db%8c%d9%86-%d8%b2%d8%a8%d8%a7%d9%86-%d8%a8%d8%b1%d9%86%d8%a7%d9%85%d9%87-%d9%86%d9%88%db%8c%d8%b3%db%8c/"
                          className="font-danaMedium line-clamp-1"
                        >
                          5 نکته مهم در انتخاب اولین زبان برنامه‌نویسی برای
                          یادگیری
                        </a>
                        <div className="flex items-center gap-x-1 text-slate-500 mt-4.5">
                          <svg className="size-5">
                            <use href="#calendar"></use>
                          </svg>
                          <span className="font-danaMedium text-sm">
                            1403/08/17
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Comments --> */}
                <div
                  className="bg-white dark:bg-darker rounded-2xl p-4.5 sm:p-5 mt-8"
                  id="course-comments"
                >
                  {/* <!-- Comment Head --> */}
                  <div className="flex items-center justify-between mb-6 sm:mb-7">
                    <div className="flex items-center gap-x-3 relative">
                      <span className="absolute -right-6 sm:-right-[26px] block w-1.5 h-[34px] md:h-9.5 bg-red-500 rounded-r-sm "></span>
                      <svg className="hidden md:inline-block text-red-500 w-9.5 h-9.5">
                        <use href="#chat-bubble-left-right-fill"></use>
                      </svg>
                      <div className="font-danaDemiBold text-xl md:text-2xl">
                        نظرات
                      </div>
                    </div>
                    {/* <!-- New Comment Button --> */}
                    <button
                      className="button-xs sm:button-sm button-primary"
                      type="button"
                      id="comment-create-btn"
                    >
                      ایجاد نظر جدید
                      <svg className="w-5 h-5">
                        <use href="#chat-bubble-bottom-center-text"></use>
                      </svg>
                    </button>
                  </div>
                  {/* <!-- Comment Form --> */}
                  <div id="comment-form" className="active">
                    <div className="flex gap-x-3.5 mb-4.5 sm:mb-5">
                      <div className="flex-center p-1.5 border border-gray-100 dark:border-dark rounded-full">
                        <div className="flex-center w-11 sm:w-12 h-11 sm:h-12 bg-gray-100 dark:bg-dark rounded-full">
                          <svg className="w-5 sm:w-6 h-5 sm:h-6 text-slate-500">
                            <use href="#user-mini"></use>
                          </svg>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="font-danaMedium">Theotherali</span>
                        <span
                          className="font-danaLight text-sm opacity-70"
                          id="comment-to"
                        >
                          ثبت نظر جدید
                        </span>
                      </div>
                    </div>
                    <input type="hidden" value="5397" id="comment-id" />
                    <input type="hidden" value="no" id="comment-is-reply" />
                    <textarea
                      rows="6"
                      id="comment-textarea"
                      className="w-full block p-4.5 md:p-4 bg-gray-100 dark:bg-dark text-gray-900 dark:text-white placeholder:text-slate-500/70 font-danaMedium text-sm rounded-xl"
                      placeholder="نظر خود را بنویسید ..."
                    ></textarea>
                    <div className="flex gap-x-4 justify-end mt-4.5 sm:mt-6">
                      <button
                        className="flex-grow sm:grow-0 sm:w-36 button-lg button-primary button-outline"
                        id="comment-cancel-btn"
                      >
                        لغو
                      </button>
                      <button
                        className="flex-grow sm:grow-0 sm:w-36 button-lg button-primary"
                        id="comment-submit-btn"
                      >
                        ارسال
                      </button>
                    </div>
                  </div>
                  {/* <!-- Comment List --> */}
                  <div className="comments_wrap space-y-4.5 sm:space-y-5">
                    {/* <!-- Comments --> */}
                    <div className="flex flex-col items-center justify-center py-5 bg-gray-100 dark:bg-dark rounded-xl">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="112"
                        height="100"
                        fill="none"
                        viewBox="0 0 112 100"
                      >
                        <path
                          fill="#EAEEF9"
                          d="M56.467 95.44c24.94 0 45.157-20.272 45.157-45.278S81.406 4.884 56.467 4.884c-24.94 0-45.158 20.272-45.158 45.278s20.218 45.277 45.158 45.277"
                        ></path>
                        <g filter="url(#filter0_d_2116_10189)">
                          <path
                            fill="#CED7E2"
                            d="M30.936 38.944h49.882a3.553 3.553 0 0 1 3.544 3.553v31.521c0 1.913-1.545 3.553-3.544 3.553H30.936a3.553 3.553 0 0 1-3.544-3.553V42.497c0-1.913 1.636-3.553 3.544-3.553"
                          ></path>
                        </g>
                        <path
                          fill="#EAEEF9"
                          d="M109.016 38.85a3.47 3.47 0 0 0 .22-4.89 3.446 3.446 0 0 0-4.878-.22 3.47 3.47 0 0 0-.219 4.89 3.445 3.445 0 0 0 4.877.22M109.272 23.458a1.46 1.46 0 0 0 .092-2.06 1.45 1.45 0 0 0-2.054-.092 1.46 1.46 0 0 0-.092 2.06 1.45 1.45 0 0 0 2.054.092M72.595 2.156A1.004 1.004 0 0 0 72.658.74a1 1 0 0 0-1.412-.064 1.004 1.004 0 0 0-.063 1.416 1 1 0 0 0 1.412.064"
                        ></path>
                        <path
                          fill="#fff"
                          d="M102.457 22.346 90.01 44.483c-.455.729-1.363 1.002-2.09.547L66.659 32.64c-.727-.456-1-1.367-.546-2.095L82.468 2.303c.454-.729 1.363-1.002 2.09-.547l15.446 9.02z"
                        ></path>
                        <path
                          fill="#CED7E2"
                          d="m99.913 10.684-3.543 6.013c-.454.911-.182 1.913.636 2.46l5.361 3.097"
                        ></path>
                        <path
                          fill="#fff"
                          d="m22.592 12.69 14.265 14.849c.454.546.454 1.275-.091 1.822L22.228 43.117c-.545.456-1.272.456-1.817-.091L2.33 23.804c-.454-.547-.454-1.276.09-1.822l10.54-9.93z"
                        ></path>
                        <path
                          fill="#CED7E2"
                          d="m12.96 11.96 3.908 4.1c.545.547 1.454.547 2.09 0l3.634-3.462"
                        ></path>
                        <path
                          fill="#fff"
                          d="M59.663 36.103 54.12 55.87c-.182.638-.908 1.094-1.544.82l-19.172-5.648c-.636-.182-1.09-.91-.818-1.549l7.45-25.417c.182-.638.91-1.093 1.545-.82l13.902 4.1z"
                        ></path>
                        <path
                          fill="#CED7E2"
                          d="m55.483 27.448-1.636 5.466c-.181.729.273 1.549 1 1.822l4.816 1.457"
                        ></path>
                        <path
                          fill="#fff"
                          d="m104.637 69.88-18.121 9.823c-.587.314-1.415.111-1.654-.536L75.8 61.474c-.304-.584-.088-1.418.56-1.667L99.883 47.41c.587-.314 1.416-.111 1.654.536l6.568 12.832z"
                        ></path>
                        <path
                          fill="#CED7E2"
                          d="m108.009 60.841-5.075 2.641c-.652.379-.934 1.276-.634 1.988l2.246 4.47"
                        ></path>
                        <path
                          fill="#FBBF24"
                          d="m59.39 11.505-.545-.091c-.273 0-.454-.183-.545-.456-.09-.182-.091-.364-.182-.455-.09-.183-.09-.456.091-.638l.273-.456c.181-.273.181-.637-.091-.82l-.909-.91c-.273-.274-.636-.274-.818-.092l-.454.274c-.182.182-.454.182-.727.09-.181-.09-.363-.181-.454-.181-.273-.092-.364-.274-.454-.547l-.091-.547c-.091-.364-.364-.547-.636-.547h-1.272c-.364 0-.636.274-.636.547l-.091.547c0 .273-.182.455-.454.547-.182.09-.364.09-.455.181-.181.092-.454.092-.636-.09l-.454-.274c-.273-.182-.636-.182-.818.091l-.909.911c-.272.274-.272.638-.09.82l.272.456c.182.182.182.455.091.638-.09.182-.182.364-.182.455-.09.273-.272.364-.545.456l-.545.09c-.363.092-.545.365-.545.638v1.276c0 .364.273.638.545.638l.545.09c.273 0 .455.183.545.456.091.182.091.365.182.456.09.182.091.455-.09.728l-.273.456a.7.7 0 0 0 .09.91l.909.912c.273.273.636.273.818.091l.454-.273a.56.56 0 0 1 .636-.091c.182.09.364.182.455.182.272.09.363.273.454.546l.09.547c.092.364.364.547.637.547h1.272c.363 0 .636-.274.636-.547l.09-.547c0-.273.182-.455.455-.546.182-.091.363-.091.454-.182.182-.091.455-.091.727.09l.454.274c.273.182.636.182.818-.091l.909-.911a.7.7 0 0 0 .09-.911l-.272-.456c-.182-.182-.182-.455-.091-.728.09-.182.182-.365.182-.456.09-.273.272-.364.545-.455l.545-.091c.364-.092.545-.365.545-.638v-1.276c0-.364-.181-.637-.545-.637m-5.997 3.461a2.25 2.25 0 0 1-2.271-2.277c0-1.275 1-2.278 2.271-2.278a2.25 2.25 0 0 1 2.272 2.278c-.091 1.275-1.09 2.278-2.272 2.278M14.778 60.79l-.363-.09c-.182 0-.273-.183-.364-.274 0-.091-.09-.273-.181-.364-.091-.182-.091-.365.09-.456l.182-.273a.78.78 0 0 0 0-.638l-.636-.638a.44.44 0 0 0-.636 0l-.272.183c-.182.09-.364.09-.455 0-.09-.091-.273-.092-.363-.183-.182-.09-.273-.182-.273-.364l-.09-.364c0-.182-.182-.365-.455-.365h-.818c-.272 0-.454.183-.454.365l-.09.364c0 .182-.183.273-.274.364-.09 0-.272.092-.363.183-.182.09-.363.09-.454 0l-.273-.183c-.181-.182-.454-.09-.636 0l-.636.638a.44.44 0 0 0 0 .638l.182.273c.09.182.09.274 0 .456-.09.09-.09.273-.182.364-.09.182-.182.274-.363.274l-.364.09c-.181 0-.363.183-.363.456v.82c0 .273.182.456.363.456l.364.09c.181 0 .272.183.363.274 0 .091.091.273.182.364.09.183.09.365 0 .456l-.182.273a.78.78 0 0 0 0 .638l.636.638a.44.44 0 0 0 .636 0l.273-.183c.09-.09.272-.09.454-.09.091.09.273.09.364.182.181.09.272.182.272.364l.091.364c0 .182.182.365.454.365h.818c.273 0 .454-.183.454-.365l.091-.364c0-.182.182-.273.273-.364.09 0 .272-.092.363-.183.182-.09.364-.09.454.091l.273.183a.77.77 0 0 0 .636 0l.636-.638a.44.44 0 0 0 0-.638l-.182-.273a1 1 0 0 1-.09-.456c.09-.09.09-.273.181-.364.091-.182.182-.274.364-.274l.363-.09c.182 0 .364-.182.364-.456v-.82c.09-.273-.091-.456-.364-.456m-4.18 2.46c-.817 0-1.544-.729-1.544-1.549s.727-1.548 1.545-1.548c.817 0 1.544.729 1.544 1.548s-.636 1.55-1.544 1.55"
                        ></path>
                        <path
                          stroke="#1676EE"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="3"
                          d="M85.285 59.242V74.82c0 2.004-1.635 3.644-3.634 3.644H30.406c-2 0-3.635-1.64-3.635-3.644V57.966"
                        ></path>
                        <g filter="url(#filter1_d_2116_10189)">
                          <path
                            fill="#fff"
                            d="M83.312 49.266h-17.58a7.43 7.43 0 0 0-4.643 1.658l-4.643 3.768a7.43 7.43 0 0 1-4.643 1.658H31.787c-1.979 0-3.653 1.583-3.653 3.618 0 .15 0 .377.076.527l3.653 19.293c.304 1.808 1.826 3.165 3.653 3.165h42.62a3.67 3.67 0 0 0 3.654-3.09l5.1-26.376c.304-1.96-.99-3.844-3.045-4.145-.152-.076-.38-.076-.533-.076"
                          ></path>
                        </g>
                        <g filter="url(#filter2_d_2116_10189)">
                          <path
                            fill="#fff"
                            d="M88.193 45.758h-20.99a8.8 8.8 0 0 0-5.542 2.005l-5.542 4.555a8.8 8.8 0 0 1-5.542 2.004H26.68a4.37 4.37 0 0 0-4.36 4.373c0 .182 0 .456.09.638l4.361 23.322c.364 2.186 2.18 3.826 4.361 3.826h50.882c2.18 0 3.998-1.549 4.361-3.735l6.088-31.886c.363-2.368-1.181-4.646-3.634-5.01-.182-.092-.455-.092-.636-.092"
                          ></path>
                        </g>
                        <path
                          fill="#111827"
                          d="M60 73h-6v1.534h6zM47.487 69.991a2.275 2.275 0 0 0 2.272-2.277 2.275 2.275 0 0 0-2.272-2.278 2.275 2.275 0 0 0-2.271 2.278 2.275 2.275 0 0 0 2.271 2.277M65.296 69.9a2.275 2.275 0 0 0 2.271-2.277 2.275 2.275 0 0 0-2.271-2.278 2.275 2.275 0 0 0-2.272 2.278 2.275 2.275 0 0 0 2.272 2.277"
                        ></path>
                        <path
                          fill="#FBBF24"
                          d="M97.403 84.59a21 21 0 0 1-1.09 3.373 2.7 2.7 0 0 1-.365.73c-1.545 3.008-4 5.47-7 6.928-.364.182-.728.364-1 .456-2.91 1.185-6.183 1.64-9.456.911-8.638-1.823-14.184-10.301-12.366-18.962 1.819-8.66 10.274-14.221 18.912-12.398 3.091.638 5.819 2.188 8.092 4.376 3.819 3.737 5.455 9.298 4.273 14.586"
                        ></path>
                        <path
                          fill="#fff"
                          fillRule="evenodd"
                          d="M74 81c0-3.966 3.69-7 8-7s8 3.034 8 7-3.69 7-8 7a9 9 0 0 1-1.504-.123 5.98 5.98 0 0 1-3.936 1.108.75.75 0 0 1-.583-1.144 3.5 3.5 0 0 0 .522-1.756c-1.52-1.26-2.5-3.06-2.5-5.084"
                          clipRule="evenodd"
                        ></path>
                        <defs>
                          <filter
                            id="filter0_d_2116_10189"
                            width="100.969"
                            height="82.627"
                            x="5.392"
                            y="27.944"
                            colorInterpolationFilters="sRGB"
                            filterUnits="userSpaceOnUse"
                          >
                            <feFlood
                              floodOpacity="0"
                              result="BackgroundImageFix"
                            ></feFlood>
                            <feColorMatrix
                              in="SourceAlpha"
                              result="hardAlpha"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            ></feColorMatrix>
                            <feOffset dy="11"></feOffset>
                            <feGaussianBlur stdDeviation="11"></feGaussianBlur>
                            <feColorMatrix values="0 0 0 0 0.397708 0 0 0 0 0.47749 0 0 0 0 0.575 0 0 0 0.18 0"></feColorMatrix>
                            <feBlend
                              in2="BackgroundImageFix"
                              result="effect1_dropShadow_2116_10189"
                            ></feBlend>
                            <feBlend
                              in="SourceGraphic"
                              in2="effect1_dropShadow_2116_10189"
                              result="shape"
                            ></feBlend>
                          </filter>
                          <filter
                            id="filter1_d_2116_10189"
                            width="68.8"
                            height="43.687"
                            x="23.134"
                            y="39.266"
                            colorInterpolationFilters="sRGB"
                            filterUnits="userSpaceOnUse"
                          >
                            <feFlood
                              floodOpacity="0"
                              result="BackgroundImageFix"
                            ></feFlood>
                            <feColorMatrix
                              in="SourceAlpha"
                              result="hardAlpha"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            ></feColorMatrix>
                            <feOffset dy="-5"></feOffset>
                            <feGaussianBlur stdDeviation="2.5"></feGaussianBlur>
                            <feColorMatrix values="0 0 0 0 0.397708 0 0 0 0 0.47749 0 0 0 0 0.575 0 0 0 0.18 0"></feColorMatrix>
                            <feBlend
                              in2="BackgroundImageFix"
                              result="effect1_dropShadow_2116_10189"
                            ></feBlend>
                            <feBlend
                              in="SourceGraphic"
                              in2="effect1_dropShadow_2116_10189"
                              result="shape"
                            ></feBlend>
                          </filter>
                          <filter
                            id="filter2_d_2116_10189"
                            width="114.197"
                            height="84.723"
                            x="0.319"
                            y="34.758"
                            colorInterpolationFilters="sRGB"
                            filterUnits="userSpaceOnUse"
                          >
                            <feFlood
                              floodOpacity="0"
                              result="BackgroundImageFix"
                            ></feFlood>
                            <feColorMatrix
                              in="SourceAlpha"
                              result="hardAlpha"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            ></feColorMatrix>
                            <feOffset dy="11"></feOffset>
                            <feGaussianBlur stdDeviation="11"></feGaussianBlur>
                            <feColorMatrix values="0 0 0 0 0.397708 0 0 0 0 0.47749 0 0 0 0 0.575 0 0 0 0.18 0"></feColorMatrix>
                            <feBlend
                              in2="BackgroundImageFix"
                              result="effect1_dropShadow_2116_10189"
                            ></feBlend>
                            <feBlend
                              in="SourceGraphic"
                              in2="effect1_dropShadow_2116_10189"
                              result="shape"
                            ></feBlend>
                          </filter>
                        </defs>
                      </svg>
                      <p className="font-danaMedium text-center text-slate-500 mt-3">
                        نظری برای این مقاله ثبت نشده است
                      </p>
                    </div>
                  </div>
                  {/* <!-- Load more --> */}
                </div>
              </div>
              {/* <!-- Sidebar --> */}
              <aside className="col-span-full lg:col-span-4 xl:col-span-3 space-y-8">
                {/* <!-- Course Short Link --> */}
                <div
                  className="bg-white dark:bg-darker rounded-xl p-5 overflow-hidden"
                  id="shortlink-collapse"
                >
                  <div className="flex items-center justify-between mb-5 pb-5 border-b border-b-neutral-200/60 dark:border-b-white/10">
                    <div className="flex items-center gap-x-2 font-danaDemiBold">
                      <svg className="w-7 h-7">
                        <use href="#share"></use>
                      </svg>
                      اشتراک گذاری مطلب
                    </div>
                    <button
                      type="button"
                      data-collapse="#shortlink-collapse"
                      data-height="h-17"
                    >
                      <svg className="w-5.5 h-5.5 rotate-180">
                        <use href="#chevron-down"></use>
                      </svg>
                    </button>
                  </div>
                  <div className="flex items-center justify-between gap-x-3 p-4 mt-4.5 bg-sky-50 dark:bg-sky-500/10 text-sky-500 border border-dashed border-sky-500 rounded-lg">
                    <button>
                      <svg className="w-8 h-8">
                        <use href="#clipboard-document"></use>
                      </svg>
                    </button>
                    <span className="font-danaMedium text-lg w-64 text-ltr text-left truncate">
                      sabzlearn.ir/?p=5397
                    </span>
                  </div>
                </div>
                {/* <!--Related Products--> */}
              </aside>
            </div>
          </section>
        </div>
      </main>
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
