import React, { useState, useEffect } from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import { Link, useParams } from "react-router-dom";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import { HiChevronDown, HiOutlineDocumentText } from "react-icons/hi2";
import { HiOutlineChatBubbleLeftEllipsis } from "react-icons/hi2";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

export default function Session() {
  const { courseName, sessionID } = useParams();
  const [session, setSession] = useState({});
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/v1/courses/${courseName}/${sessionID}`, {
      headers: {
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("user")).token
        }`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setSession(data.session);
        setSessions(data.sessions);
        console.log(data);
      });
  }, []);

  const [open, setOpen] = React.useState(0);
  const [alwaysOpen, setAlwaysOpen] = React.useState(true);

  const handleAlwaysOpen = () => setAlwaysOpen((cur) => !cur);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <Navbar />

      <main className="max-w-[1920px] mx-auto overflow-x-hidden pt-12 lg:pt-52 2xl:pt-56">
        <div className="container">
          <Breadcrumb
            links={[
              {
                id: 2,
                title: session.title,
                to: `course-info/${courseName}`,
              },
              {
                id: 3,
                title: session.title,
                to: `course-info/${courseName}`,
              },
            ]}
          />

          <div className="aspect-video mt-11 sm:mt-12 overflow-hidden rounded-lg">
            <video
              className="w-full h-full"
              controls
              src={`http://localhost:4000/courses/covers/${session.video}`}
            ></video>
          </div>

          <div className="grid grid-cols-12 gap-y-6 gap-x-8 lg:gap-x-12 mt-10 lg:mt-12 text-darkColor dark:text-white">
            <div className="col-span-full order-last md:order-none md:col-span-7 xl:col-span-8">
              <div className="hidden md:block bg-white dark:bg-darkBox text-darkColor dark:text-white rounded-xl p-7 sm:p-10 mb-9 lg:mb-12">
                <div className="mt-2 sm:mt-0 flex items-center gap-x-3 mb-12 sm:mb-16 relative">
                  <span className="absolute -right-8 sm:-right-11 block w-1 h-16 bg-light-blue-600 rounded-r-full shadowLightBlue"></span>
                  <h3 className="font-EstedadBold text-[2rem] md:text-4xl tracking-wide">
                    کد نویسی سریع html css با Emmet
                  </h3>
                </div>

                <div className="flex gap-x-2 pb-7 sm:pb-8 mb-8 sm:mb-10 border-b border-b-neutral-200/80 dark:border-b-white/10">
                  <div className="inline-flex items-center shrink-0 h-10 bg-light-blue-100/70 text-light-blue-500 dark:bg-light-blue-300/15 text-2xl px-1.5 font-EstedadBold rounded-md">
                    6
                  </div>
                  <h4 className="text-3xl/10 sm:text-[1.9rem]">Sibling</h4>
                </div>

                <div className="flex justify-between gap-6 flex-wrap">
                  <a
                    href="#lesson-qaa"
                    className="w-full sm:w-60 sm:text-[1.7rem] dark:bg-[#333c4c] rounded-lg p-4 text-center"
                  >
                    سوال دارم!
                  </a>
                  <div className="flex gap-y-3.5 gap-x-4 justify-end flex-grow flex-wrap">
                    <a
                      href="/"
                      className="w-full sm:w-60 sm:text-[1.7rem] bg-light-blue-700 rounded-lg p-4 text-center"
                    >
                      دانلود ویدیو
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="bg-white dark:bg-darkBox text-darkColor dark:text-white rounded-xl p-7 sm:p-10"
                id="lesson-qaa"
              >
                <div className="flex items-center justify-between mb-6 sm:mb-7">
                  <div className="flex items-center gap-x-3 relative">
                    <span className="absolute -right-8 sm:-right-11 block w-1 h-16 bg-light-blue-600 rounded-r-full shadowLightBlue"></span>
                    <HiOutlineChatBubbleLeftEllipsis />
                    <h3 className="font-kalamehSemiBold text-xl md:text-2xl">
                      {" "}
                      پرسش و پاسخ
                    </h3>
                  </div>
                </div>

                <div className="mb-8 pb-8 border-b border-b-neutral-200 dark:border-b-white/10">
                  <h5 className="font-danaBold mb-3">
                    چگونه سوال خود را مطرح کنم تا به بهترین پاسخ ممکن برسم؟
                  </h5>
                  <div className="dark:text-gray-400">
                    برای اینکه مهارت حل مسئله و دیباگ کردن‌تون رو بالا ببرید،
                    قبل از اینکه سوالی بپرسید، با دقت و تمرکز سعی کنید مشکل رو
                    خودتون حل کنید. اگه به جواب نرسیدید، می‌تونید از گوگل کمک
                    بگیرید. اگه با خطایی مواجه شدید یا نیاز به نمونه‌ای داشتید،
                    با استفاده از کلمات کلیدی مختلف توی گوگل سرچ کنید و از
                    سایت‌هایی مثل Stack Overflow کمک بگیرید. (جواب 99٪ سوالات با
                    این روش زیر 5 دقیقه پیدا میشه)
                    <br />
                    از پرسیدن سوالات کلی مثل «من مثل شما انجام دادم ولی کار
                    نکرد» یا «کد من مشکل داره و اجرا نمیشه» که جزئیات ندارن،
                    خودداری کنید. وقتی سوال می‌پرسید، لطفاً اون رو با مستندات و
                    به صورت شفاف و واضح بیان کنید تا قابل تحلیل و بررسی باشه.
                    سعی کنید سوالاتتون مفهومی و دقیق باشه تا مکالمه‌ای که دارید
                    خلاصه و مفید باشه. همچنین قبل از اینکه سوال ارسال کنید، یه
                    بار خودتون اون رو بخونید و مطمئن بشید که سوالتون خوانا و
                    واضحه.
                  </div>
                  <h5 className="font-danaBold mb-3 mt-6">
                    چه انتظاراتی از پشتیبانان باید داشته باشم؟
                  </h5>
                  <div className="dark:text-gray-400">
                    از مدرسین و پشتیبانان انتظارات منطقی و مرتبط با خدمات
                    دریافتی خود داشته باشید. حل مشکلات خارج از مباحث و پروژه های
                    دوره در حیطه وظایف پشتیبانان/مدرسین نیست. اگر نیاز به مشاوره
                    دارید میتوانید از طریق تیکت ها به واحد مشاوره پیام دهید
                  </div>
                </div>

                <div className="mb-8 sm:mb-10">
                  <div className="flex gap-x-3.5 mb-3">
                    <div className="flex-center p-1.5 border border-gray-100 dark:border-dark rounded-full">
                      <div className="flex-center w-11 sm:w-12 h-11 sm:h-12 bg-gray-100 dark:bg-darkBox rounded-full">
                        {/* User mini icon */}
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="font-danaMedium">Theotherali</span>
                      <span
                        className="font-danaLight text-sm text-gray-700 dark:text-gray-400"
                        id="qa-to"
                        data-newtxt="پرسش جدید"
                      >
                        پرسش جدید
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-x-2 text-red-500 mb-4">
                    <svg className="size-6 shrink-0 hidden sm:inline-block">
                      <use href="#exclamation-triangle"></use>
                    </svg>
                    <p className="text-sm md:font-danaMedium">
                      لطفا قبل از ثبت پرسش بالاتر بخش قوانین ایجاد سوال را
                      مطالعه کنید.
                    </p>
                  </div>
                  <form id="submit-question">
                    <input type="hidden" name="nonce" value="426393f9b0" />
                    <input type="hidden" name="lesson_id" value="23933" />
                    <input type="hidden" name="course_id" value="12" />
                    <input type="hidden" name="question_id" value="" />
                    <textarea
                      id="editor"
                      dir="rtl"
                      rows="6"
                      className="w-full block p-4.5 md:p-4 bg-gray-100 dark:bg-darkBox text-darkColor dark:text-white placeholder:text-slate-500/70 font-danaMedium text-sm rounded-lg"
                      placeholder="سوال خود را بپرسید ..."
                    ></textarea>
                    <div className="flex items-center justify-between flex-wrap gap-4.5 mt-4.5 sm:mt-6">
                      <div className="w-full sm:w-auto">
                        <div className="attachments_btnwrap attachments_button flex items-center gap-x-2 sm:gap-x-1.5 cursor-pointer">
                          <svg className="size-6 sm:size-7">
                            <use href="#arrow-up-tray"></use>
                          </svg>
                          <span className="font-danaMedium text-sm sm:text-base">
                            اگر فایل ضمیمه ای دارید لطفا آپلود کنید
                          </span>
                        </div>
                        <div className="attachment_item hidden flex items-center justify-between gap-x-2 w-full sm:w-72 bg-green-50 dark:bg-green-500/10 text-green-500 px-3.5 py-2.5 rounded-xl">
                          {/* trash icon */}
                          {/* close icon */}
                          <div className="flex items-center gap-x-1.5">
                            <span className="up_percent"></span>
                            <span className="hidden"></span>
                            <span className="max-w-34 truncate en-value file_name"></span>
                          </div>
                        </div>
                      </div>
                      <button
                        className="w-full sm:w-36 btn btn-primary btn-outline"
                        type="submit"
                        id="qa-submit-btn"
                      >
                        ارسال
                      </button>
                    </div>
                  </form>
                  <form id="attachments_form" className="hidden">
                    <input type="hidden" className="api_url" value="/" />
                    <input
                      type="file"
                      name="file"
                      className="hidden"
                      id="attachments_file"
                    />
                    <input type="hidden" name="action" value="POST" />
                    <input
                      type="hidden"
                      name="key"
                      value="eac614f85053e52907f310b5f0a8b75e"
                    />
                    <input type="hidden" name="valid" value="1736245749" />
                    <input type="hidden" name="uid" value="42501" />
                    <input
                      type="hidden"
                      name="exts"
                      value="zip,rar,png,jpg,jpeg"
                    />
                    <input type="hidden" name="max" value="15" />
                  </form>
                </div>

                <div className="space-y-4.5 sm:space-y-5">
                  <p className="text-zinc-700 dark:text-white font-danaLight leading-7 mt-3.5">
                    هنوز برای این جلسه سوالی نپرسیده‌اید!
                  </p>
                </div>
              </div>
            </div>

            <aside className="col-span-full order-first md:order-none md:col-span-5 xl:col-span-4">
              <div className="bg-white dark:bg-darkBox text-darkColor dark:text-white rounded-xl p-7 sm:p-10 md:hidden">
                <div className="mt-2 sm:mt-0 flex items-center gap-x-3 mb-12 sm:mb-16 relative">
                  <span className="absolute -right-8 sm:-right-11 block w-1 h-16 bg-light-blue-600 rounded-r-full shadowLightBlue"></span>
                  <h3 className="font-EstedadBold text-[2rem] md:text-5xl tracking-wide">
                    کد نویسی سریع html css با Emmet
                  </h3>
                </div>

                <div className="flex gap-x-2 pb-7 sm:pb-8 mb-8 sm:mb-10 border-b border-b-neutral-200/80 dark:border-b-white/10">
                  <div className="inline-flex items-center shrink-0 h-10 bg-light-blue-100/70 text-light-blue-500 dark:bg-light-blue-300/15 text-2xl px-1.5 font-EstedadBold rounded-md">
                    6
                  </div>
                  <h4 className="text-3xl/10 sm:text-[2rem]">Sibling</h4>
                </div>

                <div className="flex justify-between gap-6 flex-wrap">
                  <a
                    href="#lesson-qaa"
                    className="w-full sm:w-60 sm:text-[1.7rem] dark:bg-[#333c4c] rounded-lg p-4 text-center"
                  >
                    سوال دارم!
                  </a>
                  <div className="flex gap-y-3.5 gap-x-4 justify-end flex-grow flex-wrap">
                    <a
                      href="/"
                      className="w-full sm:w-60 sm:text-[1.7rem] bg-light-blue-700 rounded-lg p-4 text-center"
                    >
                      دانلود ویدیو
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-light-blue-50 dark:bg-darkBox text-darkColor dark:text-white rounded-xl p-7 sm:p-10 mt-10 md:mt-0">
                <div className="flex items-center gap-x-2 mb-5 pb-5 border-b border-b-neutral-200/60 dark:border-b-white/10">
                  <HiOutlineDocumentText />
                  <span className="font-danaDemiBold text-lg">
                    سرفصل های دوره
                  </span>
                </div>
                <div className="chapters">
                  <Accordion open={alwaysOpen}>
                    <AccordionHeader
                      className="flex items-center dark:bg-[#333c4c] border-none text-darkBox dark:text-white rounded-lg p-5"
                      onClick={handleAlwaysOpen}
                    >
                      <div className="w-full flex items-center justify-between">
                        <span className="font-EstedadMedium font-normal">
                          سرفصل ها
                        </span>
                        <HiChevronDown />
                      </div>
                    </AccordionHeader>
                    <AccordionBody>
                    <div className="lesson ">
                        <a href="/" className="block line-clamp-2">
                          معرفی Emmet
                        </a>
                        <div className="flex items-center justify-between mt-3 sm:mt-2">
                          <div className="lesson__status">
                            <svg className="size-3">
                              <use href="#check"></use>
                            </svg>
                          </div>
                          <div className="min-w-14 text-center text-sm font-danaMedium py-1 px-2.5 text-green-500 bg-transparent border border-green-500 rounded-full">
                            02:31{" "}
                          </div>
                        </div>
                      </div>
                      
                      <div className="lesson ">
                        <a href="/" className="block line-clamp-2">
                          Abbreviation
                        </a>
                        <div className="flex items-center justify-between mt-3 sm:mt-2">
                          <div className="lesson__status">
                            <svg className="size-3">
                              <use href="#check"></use>
                            </svg>
                          </div>
                          <div className="min-w-14 text-center text-sm font-danaMedium py-1 px-2.5 text-green-500 bg-transparent border border-green-500 rounded-full">
                            02:03{" "}
                          </div>
                        </div>
                      </div>
                      <div className="lesson  lesson--watching">
                        <a href="\" className="block line-clamp-2">
                          Sibling
                        </a>
                        <div className="flex items-center justify-between mt-3 sm:mt-2">
                          <div className="lesson__status">
                            <svg className="size-3">
                              <use href="#check"></use>
                            </svg>
                          </div>
                          <div className="min-w-14 text-center text-sm font-danaMedium py-1 px-2.5 text-green-500 bg-transparent border border-green-500 rounded-full">
                            00:44{" "}
                          </div>
                        </div>
                      </div>
                      <div className="lesson ">
                        <a href="/" className="block line-clamp-2">
                          Multiple
                        </a>
                        <div className="flex items-center justify-between mt-3 sm:mt-2">
                          <div className="lesson__status">
                            <svg className="size-3">
                              <use href="#check"></use>
                            </svg>
                          </div>
                          <div className="min-w-14 text-center text-sm font-danaMedium py-1 px-2.5 text-green-500 bg-transparent border border-green-500 rounded-full">
                            01:00{" "}
                          </div>
                        </div>
                      </div>
                      <div className="lesson ">
                        <a href="/" className="block line-clamp-2">
                          Lorem Ipsum
                        </a>
                        <div className="flex items-center justify-between mt-3 sm:mt-2">
                          <div className="lesson__status">
                            <svg className="size-3">
                              <use href="#check"></use>
                            </svg>
                          </div>
                          <div className="min-w-14 text-center text-sm font-danaMedium py-1 px-2.5 text-green-500 bg-transparent border border-green-500 rounded-full">
                            01:47{" "}
                          </div>
                        </div>
                      </div>
                    </AccordionBody>
                  </Accordion>
                  <Accordion open={open === 1}>
                    <AccordionHeader onClick={() => handleOpen(1)}>
                      How to use Material Tailwind?
                    </AccordionHeader>
                    <AccordionBody>
                      We&apos;re not always in the position that we want to be
                      at. We&apos;re constantly growing. We&apos;re constantly
                      making mistakes. We&apos;re constantly trying to express
                      ourselves and actualize our dreams.
                    </AccordionBody>
                  </Accordion>

                </div>
              </div>

              <div className="grid grid-cols-3 gap-3.5 mt-6 lg:mt-8">
                <div className="text-center pb-3.5 sm:pb-2.5 pt-4 sm:3.5 bg-white dark:bg-darkBox rounded-lg">
                  <svg className="w-10 h-10 text-green-500 mb-2.5 sm:mb-1.5">
                    <use href="#information-circle"></use>
                  </svg>
                  <span className="block font-danaDemiBold text-sm sm:text-base mb-0.5 sm:mb-0">
                    وضعیت دوره
                  </span>
                  <span className="text-gray-700 dark:text-gray-400 text-sm">
                    تکمیل شده
                  </span>
                </div>
                <div className="text-center pb-3.5 sm:pb-2.5 pt-4 sm:3.5 bg-white dark:bg-darkBox rounded-lg">
                  <svg className="w-10 h-10 text-green-500 mb-2.5 sm:mb-1.5">
                    <use href="#clock"></use>
                  </svg>
                  <span className="block font-danaDemiBold text-sm sm:text-base mb-0.5 sm:mb-0">
                    زمان دوره
                  </span>
                  <span className="text-gray-700 dark:text-gray-400 text-sm">
                    00:33
                  </span>
                </div>
                <div className="text-center pb-3.5 sm:pb-2.5 pt-4 sm:3.5 bg-white dark:bg-darkBox rounded-lg">
                  <svg className="w-10 h-10 text-green-500 mb-2.5 sm:mb-1.5">
                    <use href="#video-camera"></use>
                  </svg>
                  <span className="block font-danaDemiBold text-sm sm:text-base mb-0.5 sm:mb-0">
                    جلسات دوره
                  </span>
                  <span className="text-gray-700 dark:text-gray-400 text-sm">
                    20
                  </span>
                </div>
              </div>

              <div className="bg-white dark:bg-darkBox p-4.5 sm:p-5 rounded-lg mt-6 lg:mt-8">
                <p className="text-sm mb-4">
                  وقتی 70 درصد یک ویدیو را بصورت آنلاین تماشا میکنید، میزان
                  پیشرفت شما بصورت خودکار بروزرسانی میشود.
                </p>
                <div className="flex items-center justify-between mb-4.5 font-danaDemiBold text-green-500">
                  <span>میزان پیشرفت شما</span>
                  <span>0%</span>
                </div>
                <progress value="0" max="100"></progress>
              </div>

              <div className="bg-white dark:bg-darkBox p-4.5 sm:p-5 rounded-lg mt-6 lg:mt-8">
                <img
                  src="/"
                  className="mx-auto rounded-full object-cover"
                  width="90"
                  height="90"
                  alt="کاربر"
                />
                <p className="font-danaDemiBold text-lg my-4.5 text-center">
                  کاربر | مدرس دوره
                </p>
                <a
                  href="/"
                  className="flex items-center justify-center gap-x-2.5 text-green-500 font-danaMedium"
                >
                  مشاهده پروفایل من
                  <svg className="w-7 h-7">
                    <use href="#arrow-left-circle"></use>
                  </svg>
                </a>
              </div>

              <div className="bg-white dark:bg-darkBox p-4.5 sm:p-5 text-center rounded-lg mt-6 lg:mt-8">
                <div className="flex-center w-[90px] h-[90px] mx-auto bg-light-blue-50 dark:bg-light-blue-500/10 rounded-full">
                  <svg className="w-8 h-8 text-light-blue-500">
                    <use href="#arrow-down-tray-mini"></use>
                  </svg>
                </div>
                <span className="inline-block my-4.5 text-lg font-danaDemiBold">
                  دانلود همگانی ویدیو ها
                </span>
                <a
                  target="_blank"
                  href="/"
                  className="w-full btn btn-secondary"
                >
                  دانلود
                </a>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
