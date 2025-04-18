import { useCallback, useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import Button from "../../Components/Form/Button";
import CourseDetailBox from "../../Components/CourseDetailBox/CourseDetailBox";
import CommentsTextArea from "../../Components/CommentsTextArea/CommentsTextArea";
import Footer from "../../Components/Footer/Footer";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import {
  HiChevronDown,
  HiOutlineAcademicCap,
  HiOutlineDocumentText,
  HiOutlineLockClosed,
  HiOutlinePlay,
  HiOutlineClipboardDocument,
} from "react-icons/hi2";
import { PiBriefcase, PiStarBold } from "react-icons/pi";
import { LiaUserSolid } from "react-icons/lia";
import { PiUsersThree } from "react-icons/pi";
import { PiEye } from "react-icons/pi";
import { BsInfoCircle } from "react-icons/bs";
import { BsClock } from "react-icons/bs";
import { IoCalendarOutline } from "react-icons/io5";
import { MdOutlineLaptopChromebook } from "react-icons/md";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import { FaRegObjectGroup } from "react-icons/fa";
import { BiSolidLeftArrow } from "react-icons/bi";
import Comment from "types/Comments.types";
import Creator from "types/Creator.types";
import Course from "types/Courses.types";
import { Session } from "types/Courses.types";
import Category from "types/Category.types";
import { fetchCustomOfCourses } from "../../Services/Axios/Requests/Courses";
import {
  registerOffs,
  registerCourse,
} from "../../Services/Axios/Requests/Register";
import { submitComment } from "../../Services/Axios/Requests/Comments";

type RelatedCourse = Omit<
  Course,
  | "sessions"
  | "isUserRegisteredToThisCourse"
  | "courseStudentsCount"
  | "comments"
>;

const CourseInfo = (): React.JSX.Element => {
  const [open, setOpen] = useState(0);
  const [comments, setComments] = useState<Comment[]>([]);
  const [sessions, setSessions] = useState<Session[]>([]);
  const [createdAt, setCreatedAt] = useState<string>("");
  const [updatedAt, setUpdatedAt] = useState<string>("");
  const [courseDetails, setCourseDetails] = useState<Course>({} as Course);
  const [courseTeacher, setCourseTeacher] = useState<Creator>({} as Creator);
  const [category, setCategory] = useState<Category>({} as Category);
  const [price, setPrice] = useState<number>({} as number);
  const [relatedCourses, setRelatedCourses] = useState<RelatedCourse[]>([]);
  const [showDescription, setShowDescription] = useState<boolean>(false);

  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  const { courseName } = useParams<{ courseName: string }>();

  const showDescriptionHandler = () => {
    setShowDescription(!showDescription);
  };

  const getCourseDetails = useCallback(async () => {
    try {
      const res = await fetchCustomOfCourses(courseName as string);
      setCourseDetails(res);
      setComments(res.comments);
      setSessions(res.sessions);
      setCreatedAt(res.createdAt);
      setUpdatedAt(res.updatedAt);
      setCourseTeacher(res.creator);
      setCategory(res.categoryID);
      setPrice(res.price);
    } catch (error) {
      console.error("Error fetching course details:", error);
    }
  }, [courseName]);

  useEffect(() => {
    getCourseDetails();

    const getRelatedCourses = async () => {
      try {
        const res = await fetchCustomOfCourses(`related/${courseName}`);
        setRelatedCourses(res);
      } catch (error) {
        console.error("Error fetching related courses:", error);
      }
    };

    getRelatedCourses();
  }, [courseName, getCourseDetails]);

  const submitCommentHandler = async (
    newCommentBody: string,
    commentScore: string
  ) => {
    const commentBody = {
      body: newCommentBody,
      courseShortName: courseName,
      score: commentScore,
    };
    
    try {
      await submitComment(commentBody);
      Swal.fire({
        title: "کامنت ثبت شد",
        icon: "success",
        confirmButtonText: "تایید",
      });
    } catch (error) {
      console.error("Error submit Comment:", error);
    }
  };

  const registerInCourse = async (course: Course) => {
    if (course.price === 0) {
      await registerCourse(course);
      Swal.fire({
        title: "ثبت نام با موفقیت انجام شد",
        icon: "success",
        confirmButtonText: "Ok",
      }).then(() => {
        getCourseDetails();
      });
    } else {
      Swal.fire({
        title: "در صورت داشتن کد تخفیف وارد کنید:",
        input: "text",
        confirmButtonText: "ثبت‌نام",
        showDenyButton: true,
        denyButtonText: "نه",
      }).then(async (code) => {
        if (code.isConfirmed) {
          if (code.value === "") {
            await registerCourse(course);
            Swal.fire({
              title: "ثبت نام با موفقیت انجام شد",
              icon: "success",
              confirmButtonText: "Ok",
            }).then(() => {
              getCourseDetails();
            });
          } else {
            registerOffs(course, code.value, getCourseDetails);
          }
        }
      });
    }
  };

  return (
    <>
      <Header />
      <main className="max-w-[1920px] mx-auto overflow-x-hidden pt-14 md:pt-52 2xl:pt-56">
        <div className="container">
          <Breadcrumb
            links={[
              {
                id: 2,
                title: category.title,
                to: `category-info/${category.name}/1`,
              },
              {
                id: 3,
                title: courseDetails.name,
                to: `course-info/${courseDetails.shortName}`,
              },
            ]}
          />
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-y-7 gap-x-6 sm:gap-x-7 lg:items-center xl:items-stretch mt-12 md:mt-15 rounded-3xl p-7 lg:p-0 bg-white dark:bg-slate-800 lg:bg-transparent! border border-gray-100 dark:border-none lg:border-none">
            <div className="flex flex-col lg:h-full justify-between order-2 lg:order-1 text-slate-900 dark:text-white">
              <div>
                <h1 className="font-EstedadBold text-4xl sm:text-5xl mb-7">
                  {courseDetails.name}
                </h1>
                <p className="text-3xl/loose line-clamp-4 sm:line-clamp-3 mb-12 lg:mb-0">
                  {courseDetails.description}
                </p>
              </div>
              <div className="space-y-4 lg:space-y-8 lg:px-12">
                {courseDetails.isUserRegisteredToThisCourse === true ? (
                  <div className="flex justify-center lg:items-center lg:justify-between gap-y-4 gap-x-14">
                    <div className="flex items-center gap-x-2">
                      <LiaUserSolid className="text-6xl mb-1" />
                      <p className="font-EstedadBold text-3xl lg:text-2xl xl:text-3xl">
                        شما دانشجوی دوره هستید
                      </p>
                    </div>
                    <Button
                      to={"/"}
                      className="button-primary hover:  py-4 text-white lg:w-80"
                    >
                      <MdOutlineLaptopChromebook className="text-4xl" />
                      مشاهده دوره
                    </Button>
                  </div>
                ) : (
                  <div className="flex justify-center lg:items-center lg:justify-between gap-y-4 gap-x-14">
                    <Button
                      className="button-primary hover:  h-[4.5rem] lg:h-20 lg:px-14 sm:text-3xl w-full sm:w-auto cursor-pointer"
                      onClick={() => registerInCourse(courseDetails)}
                    >
                      <div className="text-4xl sm:text-5xl">
                        <HiOutlineAcademicCap />
                      </div>
                      ثبت نام
                    </Button>
                    <div className="flex items-end gap-x-5">
                      {price === 0 ? (
                        <div>رایگان</div>
                      ) : (
                        <div className="flex-center gap-x-3">
                          {courseDetails.discount ? (
                            <>
                              <span className="text-4xl text-blue-gray-600 dark:text-white/70 -mb-1.5 line-through">
                                {price.toLocaleString()}
                              </span>
                              <span className="flex gap-x-1 text-green-500 font-EstedadMedium text-5xl">
                                {(
                                  price -
                                  (price * courseDetails.discount) / 100
                                ).toLocaleString()}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="30"
                                  height="30"
                                  fill="none"
                                  viewBox="0 0 14 16"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M1.149 6.918q.443 0 .775-.14.343-.142.575-.383.232-.243.352-.565.12-.312.141-.664H1.985q-.514 0-.846-.111a1.2 1.2 0 0 1-.524-.323 1.2 1.2 0 0 1-.272-.503 3 3 0 0 1-.07-.675q0-.382.11-.726t.323-.604q.21-.262.523-.413.322-.162.736-.161.332 0 .634.11a1.4 1.4 0 0 1 .534.353q.232.232.363.615.141.372.141.906v.836h.967q.12 0 .161.091.05.081.05.252 0 .181-.05.272-.04.08-.16.08h-.988q-.02.495-.202.937a2.4 2.4 0 0 1-.483.776 2.3 2.3 0 0 1-.746.524 2.3 2.3 0 0 1-.977.201H.141l-.06-.685zM.897 3.513q0 .252.05.434.06.18.192.302.141.11.372.171.233.05.585.05h.906v-.755q0-.745-.292-1.068-.292-.322-.806-.322-.483 0-.745.322-.262.323-.262.866m5.372.957q.13 0 .171.091.05.081.05.252 0 .181-.05.272-.04.08-.171.08H4.607q-.132 0-.172-.08a.5.5 0 0 1-.05-.252q0-.18.05-.272.04-.09.172-.09zm1.663 0q.13 0 .17.091.051.081.051.252 0 .181-.05.272-.04.08-.171.08H6.269q-.13 0-.17-.08a.5.5 0 0 1-.051-.252q0-.18.05-.272.04-.09.171-.09zm1.662 0q.131 0 .171.091.05.081.05.252 0 .181-.05.272-.04.08-.17.08H7.931q-.13 0-.171-.08a.5.5 0 0 1-.05-.252q0-.18.05-.272.04-.09.17-.09zm1.663 0q.13 0 .171.091.05.081.05.252 0 .181-.05.272-.04.08-.171.08H9.595q-.132 0-.172-.08a.5.5 0 0 1-.05-.252q0-.18.05-.272.04-.09.172-.09zm.907 0q.393 0 .624-.211.242-.212.242-.584v-1.39h.655v1.39q0 .715-.403 1.108-.393.383-1.078.383h-.947q-.13 0-.171-.081a.5.5 0 0 1-.05-.252q0-.18.05-.272.04-.09.171-.09zM13.786.995h-.806V.28h.806zm-1.28 0H11.7V.28h.806zm-6.864 11.97q0 .542-.171 1.017a2.42 2.42 0 0 1-1.28 1.41 2.4 2.4 0 0 1-1.027.212h-.595q-1.128 0-1.753-.696-.624-.695-.624-1.904v-1.763h.644v1.743q0 .433.101.786.111.353.333.604.232.263.574.403t.826.141h.443q.474 0 .826-.16.352-.152.585-.414a1.6 1.6 0 0 0 .352-.614q.12-.352.121-.736v-2.71h.645zm-2.428-2.902h-.846v-.736h.846zm5.031 3.103q-.261 0-.503-.071a1.16 1.16 0 0 1-.434-.262 1.3 1.3 0 0 1-.292-.473 2.2 2.2 0 0 1-.11-.746V6.92h.654v4.573q0 .423.182.705.19.273.614.272h.171q.222 0 .222.343 0 .353-.222.353zm.448-.696q.393 0 .595-.191a.68.68 0 0 0 .201-.514v-.383q0-.875.443-1.37.454-.493 1.25-.493.413 0 .725.13.313.132.514.374.21.24.312.574.1.332.1.735 0 .867-.453 1.35t-1.239.484q-.402 0-.775-.152a1.2 1.2 0 0 1-.585-.564q-.09.232-.221.373a1.2 1.2 0 0 1-.272.222q-.141.07-.303.1-.15.02-.292.02h-.16q-.132 0-.172-.08a.5.5 0 0 1-.05-.252q0-.18.05-.272.04-.09.171-.09zm3.496-1.078q0-.523-.232-.846-.232-.332-.796-.332-1.047 0-1.047 1.219 0 .512.282.776.292.261.745.261.514 0 .776-.282.272-.282.272-.796"
                                    className="text-green-500"
                                  ></path>
                                </svg>
                              </span>
                            </>
                          ) : (
                            <span className="flex gap-x-1 text-green-500 font-EstedadMedium text-5xl">
                              {price.toLocaleString()}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="30"
                                fill="none"
                                viewBox="0 0 14 16"
                              >
                                <path
                                  fill="currentColor"
                                  d="M1.149 6.918q.443 0 .775-.14.343-.142.575-.383.232-.243.352-.565.12-.312.141-.664H1.985q-.514 0-.846-.111a1.2 1.2 0 0 1-.524-.323 1.2 1.2 0 0 1-.272-.503 3 3 0 0 1-.07-.675q0-.382.11-.726t.323-.604q.21-.262.523-.413.322-.162.736-.161.332 0 .634.11a1.4 1.4 0 0 1 .534.353q.232.232.363.615.141.372.141.906v.836h.967q.12 0 .161.091.05.081.05.252 0 .181-.05.272-.04.08-.16.08h-.988q-.02.495-.202.937a2.4 2.4 0 0 1-.483.776 2.3 2.3 0 0 1-.746.524 2.3 2.3 0 0 1-.977.201H.141l-.06-.685zM.897 3.513q0 .252.05.434.06.18.192.302.141.11.372.171.233.05.585.05h.906v-.755q0-.745-.292-1.068-.292-.322-.806-.322-.483 0-.745.322-.262.323-.262.866m5.372.957q.13 0 .171.091.05.081.05.252 0 .181-.05.272-.04.08-.171.08H4.607q-.132 0-.172-.08a.5.5 0 0 1-.05-.252q0-.18.05-.272.04-.09.172-.09zm1.663 0q.13 0 .17.091.051.081.051.252 0 .181-.05.272-.04.08-.171.08H6.269q-.13 0-.17-.08a.5.5 0 0 1-.051-.252q0-.18.05-.272.04-.09.171-.09zm1.662 0q.131 0 .171.091.05.081.05.252 0 .181-.05.272-.04.08-.17.08H7.931q-.13 0-.171-.08a.5.5 0 0 1-.05-.252q0-.18.05-.272.04-.09.17-.09zm1.663 0q.13 0 .171.091.05.081.05.252 0 .181-.05.272-.04.08-.171.08H9.595q-.132 0-.172-.08a.5.5 0 0 1-.05-.252q0-.18.05-.272.04-.09.172-.09zm.907 0q.393 0 .624-.211.242-.212.242-.584v-1.39h.655v1.39q0 .715-.403 1.108-.393.383-1.078.383h-.947q-.13 0-.171-.081a.5.5 0 0 1-.05-.252q0-.18.05-.272.04-.09.171-.09zM13.786.995h-.806V.28h.806zm-1.28 0H11.7V.28h.806zm-6.864 11.97q0 .542-.171 1.017a2.42 2.42 0 0 1-1.28 1.41 2.4 2.4 0 0 1-1.027.212h-.595q-1.128 0-1.753-.696-.624-.695-.624-1.904v-1.763h.644v1.743q0 .433.101.786.111.353.333.604.232.263.574.403t.826.141h.443q.474 0 .826-.16.352-.152.585-.414a1.6 1.6 0 0 0 .352-.614q.12-.352.121-.736v-2.71h.645zm-2.428-2.902h-.846v-.736h.846zm5.031 3.103q-.261 0-.503-.071a1.16 1.16 0 0 1-.434-.262 1.3 1.3 0 0 1-.292-.473 2.2 2.2 0 0 1-.11-.746V6.92h.654v4.573q0 .423.182.705.19.273.614.272h.171q.222 0 .222.343 0 .353-.222.353zm.448-.696q.393 0 .595-.191a.68.68 0 0 0 .201-.514v-.383q0-.875.443-1.37.454-.493 1.25-.493.413 0 .725.13.313.132.514.374.21.24.312.574.1.332.1.735 0 .867-.453 1.35t-1.239.484q-.402 0-.775-.152a1.2 1.2 0 0 1-.585-.564q-.09.232-.221.373a1.2 1.2 0 0 1-.272.222q-.141.07-.303.1-.15.02-.292.02h-.16q-.132 0-.172-.08a.5.5 0 0 1-.05-.252q0-.18.05-.272.04-.09.171-.09zm3.496-1.078q0-.523-.232-.846-.232-.332-.796-.332-1.047 0-1.047 1.219 0 .512.282.776.292.261.745.261.514 0 .776-.282.272-.282.272-.796"
                                  className="text-green-500"
                                ></path>
                              </svg>
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="course_intro_wrap order-1 rounded-2xl overflow-hidden">
              <video
                src=""
                poster={`http://localhost:4000/courses/covers/${courseDetails.cover}`}
                className="w-full h-[34rem] rounded-2xl"
                controls
              ></video>
            </div>
          </section>

          <section className="grid grid-cols-12 gap-6 sm:gap-11 mt-10 lg:mt-28">
            <div className="col-span-12 lg:col-span-8">
              {/* <!-- Course Box Info | Summary --> */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-10">
                <CourseDetailBox
                  icon={<BsInfoCircle />}
                  title={"وضعیت دوره"}
                  text={`${
                    courseDetails.status === "presell"
                      ? "پیش فروش"
                      : courseDetails.isComplete === 1
                      ? "تکمیل شده"
                      : "در حال برگزاری"
                  }`}
                />
                <CourseDetailBox
                  icon={<BsClock />}
                  title={"زمان برگزاری"}
                  text={createdAt.slice(0, 10)}
                />
                <CourseDetailBox
                  icon={<IoCalendarOutline />}
                  title={"بروزرسانی"}
                  text={updatedAt.slice(0, 10)}
                />
                <CourseDetailBox
                  icon={<PiUsersThree />}
                  title={"روش پشتیبانی"}
                  text={courseDetails.support}
                />
                <CourseDetailBox
                  icon={<PiBriefcase />}
                  title={"پیش نیاز"}
                  text={"JS"}
                />
                <CourseDetailBox
                  icon={<PiEye />}
                  title={"نوع مشاهده"}
                  text={"آنلاین"}
                />
              </div>
              {/* <!-- Description --> */}
              <div className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-3xl p-7 sm:p-10 mt-12">
                <div className="mt-2 sm:mt-0 flex items-center gap-x-3 mb-16 sm:mb-20 relative">
                  <span className="absolute -right-8 sm:-right-11 block w-1 h-16 bg-sky-600 rounded-r-full shadowLightBlue"></span>
                  <span className="hidden md:inline-block text-sky-700 dark:text-sky-500 text-6xl">
                    <HiOutlineDocumentText />
                  </span>
                  <div className="font-EstedadBold text-3xl md:text-4xl">
                    توضیحات
                  </div>
                </div>
                <img
                  src={`http://localhost:4000/courses/covers/${courseDetails.cover}`}
                  className="block w-full max-h-[450px] object-cover rounded-2xl mb-8 sm:mb-12"
                  alt="Course-Image"
                  loading="lazy"
                />
                <div className="relative overflow-hidden">
                  <div
                    className={`${
                      showDescription ? "h-full" : "max-h-[350px]"
                    } tracking-wide text-[1.6rem]/loose text-slate-900/90 dark:text-white/80`}
                  >
                    {courseDetails.description}
                  </div>
                  <div
                    className={`${
                      showDescription ? "hidden" : "absolute"
                    } bottom-0 right-0 left-0 h-44 bg-linear-to-t from-white dark:from-slate-800 from-0% via-white/[55%] dark:via-slate-800/[55%] via-70% to-white/0 dark:to-slate-800/0 to-100%`}
                  ></div>
                </div>
                <Button
                  type="button"
                  onClick={showDescriptionHandler}
                  className="button-primary py-4 w-full sm:w-auto mx-auto mt-14"
                >
                  {showDescription ? (
                    <>
                      <span>مشاهده کمتر مطلب</span>
                      <div className="text-5xl">
                        <GoTriangleUp />
                      </div>
                    </>
                  ) : (
                    <>
                      <span>مشاهده بیشتر مطلب</span>
                      <div className="text-5xl">
                        <GoTriangleDown />
                      </div>
                    </>
                  )}
                </Button>
              </div>
              {/* <!-- Headlines --> */}
              <div className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-3xl p-7 sm:p-10 mt-12">
                <div className="mt-2 sm:mt-0 flex items-center gap-x-3 mb-16 sm:mb-20 relative">
                  <span className="absolute -right-8 sm:-right-11 block w-1 h-16 bg-sky-600 rounded-r-full shadowLightBlue"></span>
                  <div className="hidden md:inline-block ml-1 text-sky-700 dark:text-sky-500 text-7xl">
                    <HiOutlineAcademicCap />
                  </div>
                  <div
                    id="lessons"
                    className="font-EstedadBold text-3xl md:text-4xl"
                  >
                    سرفصل ها
                  </div>
                </div>
                <div className="space-y-4 md:space-y-5">
                  <div>
                    <div
                      className={`flex items-center justify-between cursor-pointer pr-6 pl-8 py-7 rounded-2xl border-none ${
                        open === 1
                          ? "rounded-b-none bg-sky-400 dark:bg-sky-800"
                          : "bg-gray-200 dark:bg-[#333c4c]"
                      }`}
                      onClick={() => handleOpen(1)}
                    >
                      <span className="topic__title text-[1.6rem] text-slate-900 dark:text-white inline-block font-EstedadLight lg:line-clamp-3">
                        جلسات دوره
                      </span>
                      <div className="flex items-center gap-x-2.5 shrink-0">
                        <div className="topic__time ltr-text hidden lg:flex items-center gap-x-1.5 text-xl font-EstedadThin -tracking-tighter text-slate-900 dark:text-white *:transition-colors">
                          <span>23 lesson</span>
                          <span className="topic__time-dot block size-1 bg-slate-500/50 dark:bg-white/50 rounded-full"></span>
                          <span>3h 39m </span>
                        </div>
                      </div>
                      <span
                        className={`text-4xl transition-all ${
                          open === 1 && "rotate-180"
                        }`}
                      >
                        <HiChevronDown />
                      </span>
                    </div>
                    <div
                      className={`${
                        open === 1 ? "block visible" : "hidden invisible"
                      } divide-y divide-gray-600 -mt-1`}
                    >
                      {sessions.map((session, index) => (
                        <div
                          key={session._id}
                          className="flex last:rounded-b-2xl items-center justify-between gap-x-5 gap-y-3 flex-wrap lg:flex-nowrap px-7 py-8 group bg-stone-100 dark:bg-[#333c4c] text-slate-900 dark:text-white font-EstedadLight"
                        >
                          {session.free === 1 ||
                          courseDetails.isUserRegisteredToThisCourse ? (
                            <>
                              <div className="flex items-center grow gap-x-3 md:gap-x-3.5 *:transition-colors">
                                <div className="flex-center w-12 h-9 md:h-10 text-xl font-EstedadBold bg-white dark:bg-white/10 group-hover:bg-blue-400 group-hover:text-white rounded-xs">
                                  {index + 1}
                                </div>
                                <Link
                                  to={`/${courseName}/${session._id}`}
                                  className="inline-block mb-1 lg:max-w-3/4 text-xl md:text-2xl group-hover:text-blue-400 "
                                >
                                  {session.title}
                                </Link>
                              </div>
                              <div className="flex items-center gap-x-3 mr-auto group-hover:text-blue-400 *:transition-colors">
                                <span className="text-xl md:2xl">
                                  {session.time}
                                </span>
                                <div className="text-3xl">
                                  <HiOutlinePlay />
                                </div>
                              </div>
                            </>
                          ) : (
                            <>
                              <div className="flex items-center grow gap-x-3 md:gap-x-3.5 *:transition-colors">
                                <div className="flex-center w-12 h-9 md:h-10 text-xl font-EstedadBold bg-white dark:bg-white/10 group-hover:bg-blue-400 group-hover:text-white rounded-xs">
                                  {index + 1}
                                </div>
                                <span className="inline-block mb-1 lg:max-w-3/4 text-xl md:text-2xl group-hover:text-blue-400 ">
                                  {session.title}
                                </span>
                              </div>
                              <div className="flex items-center gap-x-3 mr-auto group-hover:text-blue-400 *:transition-colors">
                                <span className="text-xl md:2xl">
                                  {session.time}
                                </span>
                                <div className="text-3xl">
                                  <HiOutlineLockClosed />
                                </div>
                              </div>
                            </>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div
                      className={`flex items-center justify-between cursor-pointer pr-6 pl-8 py-7 rounded-2xl border-none ${
                        open === 2
                          ? "rounded-b-none bg-sky-400 dark:bg-sky-800"
                          : "bg-gray-200 dark:bg-[#333c4c]"
                      }`}
                      onClick={() => handleOpen(2)}
                    >
                      <span className="topic__title text-[1.6rem] text-slate-900 dark:text-white inline-block font-EstedadLight lg:line-clamp-3">
                        سرفصل ها
                      </span>
                      <div className="flex items-center gap-x-2.5 shrink-0">
                        <div className="topic__time ltr-text hidden lg:flex items-center gap-x-1.5 text-xl font-EstedadThin -tracking-tighter text-slate-900 dark:text-white *:transition-colors">
                          <span>23 lesson</span>
                          <span className="topic__time-dot block size-1 bg-slate-500/50 dark:bg-white/50 rounded-full"></span>
                          <span>3h 39m </span>
                        </div>
                      </div>
                      <span
                        className={`text-4xl transition-all ${
                          open === 2 && "rotate-180"
                        }`}
                      >
                        <HiChevronDown />
                      </span>
                    </div>
                    <div
                      className={`${
                        open === 2 ? "block visible" : "hidden invisible"
                      } divide-y divide-gray-600 -mt-1`}
                    >
                      <div className="flex last:rounded-b-2xl items-center justify-between gap-x-5 gap-y-3 flex-wrap lg:flex-nowrap px-7 py-8 group bg-stone-100 dark:bg-[#333c4c] text-slate-900 dark:text-white font-EstedadLight">
                        <div className="flex items-center grow gap-x-3 md:gap-x-3.5 *:transition-colors">
                          <div className="flex-center w-12 h-9 md:h-10 text-xl font-EstedadBold bg-white dark:bg-white/10 group-hover:bg-blue-400 group-hover:text-white rounded-xs">
                            1
                          </div>
                          <a
                            href=""
                            className="inline-block mb-1 lg:max-w-3/4 text-xl md:text-2xl group-hover:text-blue-400 "
                          >
                            ویدیوی معرفی
                          </a>
                        </div>
                        <div className="flex items-center gap-x-3 mr-auto group-hover:text-blue-400 *:transition-colors">
                          <span className="text-xl md:2xl">08:26 </span>
                          <div className="text-3xl">
                            <HiOutlinePlay />
                          </div>
                        </div>
                      </div>
                      <div className="flex first:rounded-t-2xl last:rounded-b-2xl items-center justify-between gap-x-5 gap-y-3 flex-wrap lg:flex-nowrap px-7 py-8 group bg-stone-100 dark:bg-[#333c4c] text-slate-900 dark:text-white font-EstedadLight">
                        <div className="flex items-center grow gap-x-3 md:gap-x-3.5 *:transition-colors">
                          <div className="flex-center w-12 h-9 md:h-10 text-xl font-EstedadBold bg-white dark:bg-white/10 group-hover:bg-blue-400 group-hover:text-white rounded-xs">
                            1
                          </div>
                          <a
                            href=""
                            className="inline-block mb-1 lg:max-w-3/4 text-xl md:text-2xl group-hover:text-blue-400 "
                          >
                            ویدیوی معرفی
                          </a>
                        </div>
                        <div className="flex items-center gap-x-3 mr-auto group-hover:text-blue-400 *:transition-colors">
                          <span className="text-xl md:2xl">08:26 </span>
                          <div className="text-3xl">
                            <HiOutlinePlay />
                          </div>
                        </div>
                      </div>
                      <div className="flex first:rounded-t-2xl last:rounded-b-2xl items-center justify-between gap-x-5 gap-y-3 flex-wrap lg:flex-nowrap px-7 py-8 group bg-stone-100 dark:bg-[#333c4c] text-slate-900 dark:text-white font-EstedadLight">
                        <div className="flex items-center grow gap-x-3 md:gap-x-3.5 *:transition-colors">
                          <div className="flex-center w-12 h-9 md:h-10 text-xl font-EstedadBold bg-white dark:bg-white/10 group-hover:bg-blue-400 group-hover:text-white rounded-xs">
                            1
                          </div>
                          <a
                            href=""
                            className="inline-block mb-1 lg:max-w-3/4 text-xl md:text-2xl group-hover:text-blue-400 "
                          >
                            ویدیوی معرفی
                          </a>
                        </div>
                        <div className="flex items-center gap-x-3 mr-auto group-hover:text-blue-400 *:transition-colors">
                          <span className="text-xl md:2xl">08:26 </span>
                          <div className="text-3xl">
                            <HiOutlinePlay />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Related Courses --> */}
              {relatedCourses.length !== 0 && (
                <div className="hidden lg:block bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-3xl p-10 mt-12">
                  <div className="mt-2 sm:mt-0 flex items-center gap-x-3 mb-16 sm:mb-20 relative">
                    <span className="absolute -right-11 block w-1 h-16 bg-sky-600 rounded-r-full shadowLightBlue"></span>
                    <span className="text-sky-700 dark:text-sky-500 mx-2 text-[3.4rem]">
                      <FaRegObjectGroup />
                    </span>
                    <div className="font-EstedadBold text-3xl md:text-4xl">
                      دوره های مرتبط
                    </div>
                  </div>

                  <div className="space-y-4 md:space-y-5 text-slate-900 dark:text-white">
                    {relatedCourses.map((course) => (
                      <div
                        key={course._id}
                        className="flex items-center justify-between flex-wrap bg-gray-200 dark:bg-[#333c4c] rounded-lg py-3.5 pr-3.5 pl-6"
                      >
                        <div className="flex items-center gap-x-4 w-4/5">
                          <img
                            className="w-36 rounded-md aspect-video"
                            src={`http://localhost:4000/courses/covers/${course.cover}`}
                            alt="Course Cover"
                          />
                          <span className="line-clamp-2">{course.name}</span>
                        </div>
                        <Button
                          className="flex items-center justify-between sm:justify-normal text-sky-700 dark:text-sky-500 font-EstedadMedium text-xl"
                          to={`/course-info/${course.shortName}`}
                        >
                          مشاهده
                          <div className="text-2xl mr-2">
                            <BiSolidLeftArrow />
                          </div>
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* <!-- Comments --> */}
              <CommentsTextArea
                comments={comments}
                submitComment={submitCommentHandler}
              />
            </div>

            {/* <!-- Aside --> */}
            <aside className="col-span-12 lg:col-span-4 space-y-12">
              {/* <!-- Students & Rating & Progress --> */}
              <div className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-2xl p-7">
                <div className="flex gap-x-6">
                  <div className="flex flex-col sm:flex-row items-center text-center md:text-right gap-y-3 gap-x-7 grow p-4 sm:p-6 bg-gray-200 dark:bg-[#333c4c] rounded-xl">
                    <div className="text-6xl md:text-7xl text-blue-500">
                      <PiUsersThree />
                    </div>
                    <div>
                      <span className="block font-bold text-xl md:text-2xl">
                        {courseDetails.courseStudentsCount}
                      </span>
                      <span className="block text-2xl opacity-70">دانشجو</span>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center text-center md:text-right gap-y-3 gap-x-7 grow p-4 sm:p-6 bg-gray-200 dark:bg-[#333c4c] rounded-xl">
                    <div className="text-5xl md:text-6xl text-amber-500">
                      <PiStarBold />
                    </div>
                    <div>
                      <span className="block font-bold text-xl md:text-2xl">
                        5.0
                      </span>
                      <span className="block text-2xl opacity-70">رضایت</span>
                    </div>
                  </div>
                </div>
                <div className="mt-7 sm:mt-12">
                  <div className="flex items-center justify-between font-EstedadMedium text-2xl sm:text-[1.6rem] mb-5">
                    <span>درصد تکمیل دوره</span>
                    <span>100%</span>
                  </div>
                  <progress value="100" max="100"></progress>
                </div>
              </div>
              {/* <!-- Course Teacher --> */}
              <div className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-2xl pt-10 px-7 pb-12 text-center">
                <img
                  className="block mb-6 mx-auto object-cover rounded-full"
                  width="90"
                  height="90"
                  src={courseTeacher.profile}
                  alt="teache img"
                />
                <span className="block font-EstedadMedium text-2xl sm:text-3xl mb-8">
                  {courseTeacher.name} | مدرس دوره
                </span>
                <p className="mt-2"></p>
                <Button
                  to="#"
                  className="button-primary hover:  mx-auto mt-4 w-77 py-3"
                >
                  مشاهده پروفایل من
                </Button>
              </div>
              {/* <!-- Course Short Link --> */}
              <div className="hidden lg:block bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-2xl p-7 text-center">
                <span className="font-EstedadMedium text-2xl">
                  لینک کوتاه آموزش
                </span>
                <div className="flex items-center justify-between gap-x-3 p-4 mt-7 bg-sky-50 dark:bg-sky-500/10 text-sky-500 border border-dashed border-sky-500 rounded-lg">
                  <button>
                    <HiOutlineClipboardDocument className="w-8 h-8" />
                  </button>
                  <span className="font-EstedadMedium text-lg w-64 text-ltr text-left truncate">
                    {window.location.href}
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

export default CourseInfo;
