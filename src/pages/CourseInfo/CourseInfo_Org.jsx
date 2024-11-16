import React, { useEffect, useState } from "react";
// import Topbar from "./../../Components/Topbar/Topbar";
import Navbar from "./../../Components/Navbar/Navbar";
import Footer from "./../../Components/Footer/Footer";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import CourseDetailBox from "../../Components/CourseDetailBox/CourseDetailBox";
import CommentsTextArea from "../../Components/CommentsTextArea/CommentsTextArea";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import { FaCommentAlt } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { BsInfoCircle } from "react-icons/bs";
import { FaRegClock } from "react-icons/fa";
import { IoCalendarOutline } from "react-icons/io5";
import { MdBookmarkAdded } from "react-icons/md";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

export default function CourseInfo_Org() {
  const [open, setOpen] = useState(0);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const [comments, setComments] = useState([]);
  const [sessions, setSessions] = useState([]);
  const [createdAt, setCreatedAt] = useState("");
  const [updatedAt, setUpdatedAt] = useState("");
  const [courseDetails, setCourseDetails] = useState({});

  const { courseName } = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/v1/courses/${courseName}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("user")).token
        }`,
      },
    })
      .then((res) => res.json())
      .then((courseInfo) => {
        console.log(courseInfo);
        setComments(courseInfo.comments);
        setSessions(courseInfo.sessions);
        setCourseDetails(courseInfo);
      });
  }, []);

  return (
    <>
      {/* <Topbar /> */}
      <Navbar />

      <section className="container pt-36 lg:pt-44">
        <Breadcrumb
          links={[
            {
              id: 2,
              title: "آموزش برنامه نویسی فرانت‌اند",
              to: "category-info/frontend",
            },
            {
              id: 3,
              title: "دوره متخصص جاوا اسکریپت",
              to: "course-info/js-expert",
            },
          ]}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-4.5 gap-x-6 sm:gap-x-7 lg:items-center xl:items-stretch rounded-2xl p-4.5  bg-white lg:!bg-transparent dark:border-none lg:border-none">
          <div className="flex flex-col justify-between order-2 lg:order-1">
            <div>
              <h1 className="font-EstedadBold text-4xl sm:text-5xl mb-4.5">
                {courseDetails.name}
              </h1>
              <p className="sm:text-lg md:text-2xl line-clamp-4 sm:line-clamp-3">
                {courseDetails.description}
              </p>
            </div>
            <div className="space-y-4 lg:space-y-8 mt-4">
              <div className="flex justify-center xl:items-center lg:justify-between flex-wrap-reverse gap-y-4 gap-x-6">
                {/* when Registered */}
                <div className="flex items-center gap-x-1">
                  <FaRegUser className="text-5xl" />
                  <p className="font-EstedadMedium text-3xl">
                    شما دانشجوی دوره هستید
                  </p>
                </div>
                <Link to={"/"} className="button-primary text-white">
                  <MdBookmarkAdded className="text-4xl" />
                  مشاهده ی دوره
                </Link>
              </div>
            </div>
          </div>

          <div className="course_intro_wrap order-1 w-full xl:h-[360px] rounded-2xl overflow-hidden">
            <video
              src=""
              poster="/images/courses/js_project.png"
              className="w-full rounded-2xl"
              controls
            ></video>
          </div>
        </div>
      </section>

      <main className="main mt-8">
        <div className="container">
          <div className="row">
            <div className="col-8">
              <div className="course">
                <div className="course-boxes">
                  <div className="row">
                    <CourseDetailBox
                      icon={<BsInfoCircle />}
                      title="وضعیت دوره:"
                      text="به اتمام رسیده"
                    />
                    <CourseDetailBox
                      icon={<FaRegClock />}
                      title=" مدت زمان دوره:"
                      text="19 ساعت"
                    />
                    <CourseDetailBox
                      icon={<IoCalendarOutline />}
                      title="آخرین بروزرسانی:"
                      text="1401/03/02"
                    />
                  </div>
                </div>
                {/* Start Course Progress */}
                <div className="rounded-2xl my-12 px-8 pt-8 pb-5 bg-slate-100">
                  <div className="flex items-center mb-6">
                    <FaChartLine className="text-4xl text-zinc-500" />
                    <span className="mr-6 text-zinc-500 text-2xl">
                      درصد پیشرفت دوره: 100%
                    </span>
                  </div>
                  <div className="progress rounded-full h-16">
                    <div
                      className="bg-emerald-400 progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      aria-label="Animated striped example"
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                </div>
                {/* Finish Course Progress */}

                {/* Start Introduction */}

                <div className="p-12 rounded-lg shadow-normal">
                  <div className="introduction__item">
                    <span className="introduction__title title">
                      آموزش 20 کتابخانه جاوا اسکریپت مخصوص بازار کار
                    </span>
                    <img
                      src="/images/info/1.gif"
                      alt="course info image"
                      className="mt-12 block rounded-2xl img-fluid"
                    />
                    <p className="mt-8 text-2xl text-zinc-500">
                      کتابخانه های بسیار زیادی برای زبان جاوا اسکریپت وجود دارد
                      و سالانه چندین کتابخانه جدید نیز به این لیست اضافه می شود
                      که در بازار کار به شدت از آن ها استفاده می شود و اگر بدون
                      بلد بودن این کتابخانه ها وارد بازار کار شوید، خیلی اذیت
                      خواهید شد و حتی ممکن است ناامید شوید!
                    </p>
                    <p className="mt-8 text-2xl text-zinc-500">
                      در این دوره نحوه کار با 20 مورد از پر استفاده ترین
                      کتابخانه های جاوا اسکریپت به صورت پروژه محور به شما عزیزان
                      آموزش داده می شود تا هیچ مشکلی برای ورود به بازار کار
                      نداشته باشید
                    </p>
                  </div>
                  <div className="introduction__item">
                    <span className="introduction__title title">
                      هدف از این دوره چیست؟ (تنها راه ورود به بازار کار و کسب
                      درآمد)
                    </span>
                    <img
                      src="/images/info/2.jpg"
                      alt="course info image"
                      className="mt-12 block rounded-2xl img-fluid"
                    />
                    <p className="mt-8 text-2xl text-zinc-500">
                      وقتی برای اولین بار وارد یکی از شرکت های برنامه نویسی شدم،
                      از کتابخانه هایی به اسم Lodash و Formik استفاده می شد، در
                      حالی که من اولین بارم بود اسم Formik را می شنیدم و تا اون
                      موقع از این کتابخانه ها استفاده نکرده بودم.
                    </p>
                    <p className="mt-8 text-2xl text-zinc-500">
                      همینجا بود که متوجه شدم کتابخانه های جاوا اسکریپت یکی از
                      مهم ترین مباحثی هستند که هر برنامه نویس وب برای ورود به
                      بازار کار و کسب درآمد بهتر، راحت و بیشتر باید با آن ها کار
                      کرده باشد{" "}
                    </p>
                    <p className="mt-8 text-2xl text-zinc-500">
                      همان طور که از اسم این دوره مشخص است، هدف از این دوره
                      آموزش 20 مورد از کاربردی ترین و پر استفاده ترین کتابخانه
                      های جاوا اسکریپت است تا شما بتوانید بعد از این دوره با
                      قدرت و آمادگی بیشتر ادامه مسیر برنامه نویسی وب را ادامه
                      دهید، ری اکت یا نود یا … را راحت تر یاد بگیرید و در نهایت
                      وارد بازار کار شده و کسب درآمد کنید.
                    </p>
                    <p className="mt-8 text-2xl text-zinc-500">
                      شا به عنوان یک برنامه نویس وب، حداقل اگر با کتابخانه خاصی
                      کار نکرده باشید، باید بلد باشید که چطور باید یک کتابخانه
                      جدید را یاد بگیرید. فرض کنید یک یک کتابخانه جدید ساخته شد.
                      آیا شما باید منتظر دوره آموزشی باشید؟! قطعا نه.
                    </p>
                    <p className="mt-8 text-2xl text-zinc-500">
                      در این دوره سعی کردیم علاوه بر آموزش مستقیم هر کتابخانه،
                      نحوه یادگیری یک کتابخانه جدید را نیز به شما عزیزان آموزش
                      دهیم تا بعد از گذراندن دوره، دیگر وابسته هیچ دوره یا شخص
                      خاصی نباشید و اگر کتابخانه جدیدی به دنیای جاوا اسکریپت و
                      وب اضافه شد، به راحتی بتوانید آن را یاد بگیرید.
                    </p>
                  </div>
                  <div className="mt-16">
                    <a
                      href="#"
                      className="text-lightishBlue-500 border border-2 border-lightishBlue-500 rounded-lg py-3 px-6 font-EstedadBold m-2 text-2xl hover:text-white bg-lightishBlue-500"
                    >
                      دانلود همگانی ویدیوها
                    </a>
                    <a
                      href="#"
                      className="text-lightishBlue-500 border border-2 border-lightishBlue-500 rounded-lg py-3 px-6 font-EstedadBold m-2 text-2xl hover:text-white bg-lightishBlue-500"
                    >
                      دانلود همگانی پیوست‌ها
                    </a>
                  </div>

                  <div className="mt-16">
                    <Accordion
                      open={open === 1}
                      icon={<Icon id={1} open={open} />}
                    >
                      <AccordionHeader onClick={() => handleOpen(1)}>
                        معرفی دوره
                      </AccordionHeader>
                      <AccordionBody>
                        <div className="flex items-center">
                          <span className="w-14 h-14 border border-zinc-400 text-zinc-500 flex-center rounded-3xl">
                            1
                          </span>
                          <FaYoutube className="mx-6 text-zinc-400 text-3xl" />
                          <a href="#" className="text-zinc-700">
                            معرفی دوره + چرا یادگیری کتابخانه ها ضروری است؟
                          </a>
                        </div>
                        <div className="introduction__accordion-left">
                          <span className="text-zinc-400">18:34</span>
                        </div>
                      </AccordionBody>
                    </Accordion>
                    <Accordion
                      open={open === 2}
                      icon={<Icon id={2} open={open} />}
                    >
                      <AccordionHeader onClick={() => handleOpen(2)}>
                        اصطلاحات مقدماتی مربوط به بک‌اند
                      </AccordionHeader>
                      <AccordionBody>
                        <div className="flex items-center">
                          <span className="w-14 h-14 border border-zinc-400 text-zinc-500 flex-center rounded-3xl">
                            1
                          </span>
                          <FaYoutube className="mx-6 text-zinc-400 text-3xl" />
                          <a href="#" className="text-zinc-700">
                            معرفی دوره + چرا یادگیری کتابخانه ها ضروری است؟
                          </a>
                        </div>
                        <div className="introduction__accordion-left">
                          <span className="text-zinc-400">18:34</span>
                        </div>
                      </AccordionBody>
                    </Accordion>
                    <Accordion
                      open={open === 3}
                      icon={<Icon id={3} open={open} />}
                    >
                      <AccordionHeader onClick={() => handleOpen(3)}>
                        اصطلاحات مقدماتی مربوط به بک‌اند
                      </AccordionHeader>
                      <AccordionBody>
                        <div className="flex items-center">
                          <span className="w-14 h-14 border border-zinc-400 text-zinc-500 flex-center rounded-3xl">
                            1
                          </span>
                          <FaYoutube className="mx-6 text-zinc-400 text-3xl" />
                          <a href="#" className="text-zinc-700">
                            جلسه دوم این فصل
                          </a>
                        </div>
                        <div className="introduction__accordion-left">
                          <span className="text-zinc-400">18:34</span>
                        </div>
                      </AccordionBody>
                    </Accordion>
                  </div>
                </div>
                {/* Finish Introduction */}

                {/* Start Teacher Details */}

                <div className="rounded-lg p-8 mt-14 mb-8 shadow-normal">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center">
                      <img
                        src="/images/info/teacher.jfif"
                        alt="Teacher Profile"
                        className="w-[62px] rounded-3xl shadow-normal"
                      />
                      <div className="flex flex-col mr-8">
                        <a href="#" className="text-zinc-400">
                          محمدامین سعیدی راد
                        </a>
                        <span className="text-lg text-zinc-500">
                          Front End & Back End Developer
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center text-white bg-lightishBlue-500 py-2 px-4 rounded-lg">
                      <FaChalkboardTeacher className="text-3xl" />
                      <span className="text-2xl font-EstedadBold mr-2">
                        مدرس
                      </span>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-zinc-400">
                    اول از همه برنامه نویسی اندروید رو شروع کردم و نزدیک به 2
                    سال با زبان جاوا اندروید کار میکردم .بعد تصمیم گرفتم در
                    زمینه وب فعالیت داشته باشم.و..
                  </p>
                </div>

                {/* Finish Teacher Details */}

                <CommentsTextArea />
              </div>
            </div>

            <div className="col-4">
              <div className="sticky top-8">
                <div className="rounded-lg mt-4 p-8 shadow-normal border border-slate-200">
                  <div className="text-center bg-emerald-500 py-2 px-4 rounded-lg shadow-normal">
                    <span className="text-3xl font-EstedadBold text-white">
                      <FaGraduationCap />
                      دانشجوی دوره هستید
                    </span>
                  </div>
                </div>
                <div className="rounded-lg mt-4 p-8 shadow-normal border border-slate-200">
                  <div className="course-info__total">
                    <div className="flex-center p-6 rounded-2xl border border-slate-300">
                      <div className="text-4xl text-zinc-500">
                        <FaUserGraduate />
                        <span>تعداد دانشجو :</span>
                        <span className="text-white bg-slate-400 rounded-lg py-2 px-6">
                          178
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-evenly mt-8 text-zinc-500">
                      <div className="course-info__total-comment relative flex items-center">
                        <FaCommentAlt className="text-4xl" />
                        <span className="text-2xl mr-4">67 دیدگاه</span>
                      </div>
                      <div className="course-info__total-view relative flex items-center">
                        <FaEye className="text-4xl" />
                        <span className="text-2xl mr-4">14,234 بازدید</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg mt-4 p-8 shadow-normal border border-slate-200">
                  <div className="flex items-center text-zinc-500">
                    <FaLink className="text-4xl" />
                    <span className="text-3xl mr-2">لینک کوتاه</span>
                  </div>
                  <span className="block my-4 border border-slate-300 text-zinc-400 rounded-lg text-2xl py-2 px-4">
                    https://sabzlearn.ir/?p=117472
                  </span>
                </div>
                <div className="rounded-lg mt-4 p-8 shadow-normal border border-slate-200">
                  <span className="block text-3xl text-zinc-700">
                    سرفصل های دوره
                  </span>
                  <span className="text-zinc-500 text-2xl">
                    برای مشاهده و یا دانلود دوره روی کلمه
                    <a href="#" style={{ color: "blue", fontWeight: "bold" }}>
                      لینک
                    </a>
                    کلیک کنید
                  </span>
                </div>
                <div className="rounded-lg mt-4 p-8 shadow-normal border border-slate-200">
                  <span className="text-3xl block mb-6 text-zinc-700">
                    دوره های مرتبط
                  </span>
                  <ul className="course-info__courses-list">
                    <li className="mb-8">
                      <a href="#" className="flex items-center">
                        <img
                          src="/images/courses/js_project.png"
                          alt="Course Cover"
                          className="w-[70px] rounded-lg"
                        />
                        <span className="text-xl mr-2 font-EstedadBold text-zinc-400">
                          پروژه های تخصصی با جاوا اسکریپت
                        </span>
                      </a>
                    </li>
                    <li className="mb-8">
                      <a href="#" className="flex items-center">
                        <img
                          src="/images/courses/fareelancer.png"
                          alt="Course Cover"
                          className="w-[70px] rounded-lg"
                        />
                        <span className="text-xl mr-2 font-EstedadBold text-zinc-400">
                          تعیین قیمت پروژه های فریلنسری
                        </span>
                      </a>
                    </li>
                    <li className="mb-8">
                      <a href="#" className="flex items-center">
                        <img
                          src="/images/courses/nodejs.png"
                          alt="Course Cover"
                          className="w-[70px] rounded-lg"
                        />
                        <span className="text-xl mr-2 font-EstedadBold text-zinc-400">
                          دوره Api نویسی
                        </span>
                      </a>
                    </li>
                    <li className="mb-8">
                      <a href="#" className="flex items-center">
                        <img
                          src="/images/courses/jango.png"
                          alt="Course Cover"
                          className="w-[70px] rounded-lg"
                        />
                        <span className="text-xl mr-2 font-EstedadBold text-zinc-400">
                          متخصص جنگو
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
