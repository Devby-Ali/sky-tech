import React, { useEffect, useState } from "react";
import { HiArrowUpTray, HiChevronLeft } from "react-icons/hi2";
import { Link, useNavigate } from "react-router-dom";
import { getUserCourses } from "../../../Services/Axios/Requests/Users";
import Swal from "sweetalert2";
import { UserCourse } from "types/Courses.types";
import {
  getDepartments,
  getDepartmentsSub,
  sendTicket,
} from "../../../Services/Axios/Requests/Tickets";

interface Department {
  _id: string;
  createdAt: string;
  title: "ارتباط با مدیریت" | "پشتیبانی" | "مشاوره" | "مالی";
  updatedAt: string;
}

interface DepartmentsSubs {
  _id: string;
  createdAt: string;
  parent: string;
  title:
    | "پیشنهادات و انتقادات"
    | "بخش مالی"
    | "مشاوره رایگان در زمینه برنامه نویسی"
    | "پشتیبانی دوره‌ها"
    | "پشتیبانی سایت";
  updatedAt: string;
}

interface UserCourseTicket {
  _id: string;
  course: UserCourse;
  createdAt: string;
  price: number;
  updatedAt: string;
  user: string;
}

const SendTicket = (): React.JSX.Element => {
  const [departments, setDepartments] = useState<Department[]>([]);
  const [departmentsSubs, setDepartmentsSubs] = useState<DepartmentsSubs[]>([]);
  const [courses, setCourses] = useState<UserCourseTicket[]>([]);
  const [ticketTypeID, setTicketTypeID] = useState<string>("");
  const [departmentID, setDepartmentID] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [priority, setPriority] = useState<string>("1");
  const [body, setBody] = useState<string>("");
  const [courseID, setCourseID] = useState<string>("");

  const navigate = useNavigate();

  useEffect(() => {
    const getDepartmentsHandler = async () => {
      try {
        const res = await getDepartments();
        setDepartments(res);
        userCoursesHandler();
      } catch (error) {
        console.error("Error fetching departments:", error);
      }
    };
    getDepartmentsHandler();
  }, []);

  const userCoursesHandler = async () => {
    try {
      const userCourses = await getUserCourses();
      setCourses(userCourses);
    } catch (error) {
      console.error("Error fetching user courses:", error);
    }
  };

  const setDepartmentsSubsHandler = async (departmentID: string) => {
    try {
      const res = await getDepartmentsSub(departmentID);
      setDepartmentsSubs(res);
    } catch (error) {
      console.error("Error fetching departments sub:", error);
    }
  };

  const sendTicketHandler = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();

    const newTicketInfos = {
      departmentID,
      departmentSubID: ticketTypeID,
      title,
      body,
      priority,
    };

    try {
      await sendTicket(newTicketInfos);
      Swal.fire({
        title: "تیکت ثبت شد",
        icon: "success",
        confirmButtonText: "باشه",
      }).then(() => {
        navigate("/my-account/tickets");
      });
    } catch (error) {
      console.error("Error send ticket:", error);
    }
  };

  return (
    <main className="pb-5 md:pb-8 mx-auto mt-8 md:mt-14 2xl:px-24">
      <div className="flex items-center justify-between bg-white dark:bg-slate-800 h-20 md:h-28 pl-2.5 rounded-xl mb-8">
        <div className="flex items-center gap-x-3 md:gap-x-6 h-full">
          <span className="w-1 md:w-1.5 h-full bg-sky-600 rounded-r-full shadowLightBlue"></span>
          <span className="text-sky-500 text-2xl md:text-3xl font-EstedadMedium md:font-EstedadBold select-none pr-4">
            ارسال تیکت جدید (3)
          </span>
        </div>
        <Link
          to="/my-account/ticket"
          className="flex items-center gap-x-1 md:gap-x-2 text-sky-500 text-[1.4rem] md:text-[1.7rem] font-EstedadBold md:ml-6"
        >
          بازگشت به تیکت ها
          <div className="text-4xl">
            <HiChevronLeft />
          </div>
        </Link>
      </div>

      <section className="mt-6 md:mt-10">
        <form className="block space-y-8 md:space-y-9 md:pr-6">
          <div className="flex flex-wrap sm:flex-nowrap gap-8 md:gap-9">
            <select
              name="department"
              id="department"
              className="w-full sm:w-1/2 h-19 text-slate-800/70 dark:text-white/60 bg-white dark:bg-slate-800 text-2xl p-5 rounded-lg border-l-[14px] border-l-transparent"
              onChange={(event) => {
                setDepartmentsSubsHandler(event.target.value);
                setDepartmentID(event.target.value);
              }}
            >
              <option>دپارتمان را انتخاب کنید:</option>
              {departments.map((department) => (
                <option key={department._id} value={department._id}>
                  {department.title}
                </option>
              ))}
            </select>

            <select
              name="department"
              id="department"
              className="w-full sm:w-1/2 h-19 text-slate-800/70 dark:text-white/60 bg-white dark:bg-slate-800 text-2xl p-5 rounded-lg border-l-[14px] border-l-transparent"
              onChange={(event) => setTicketTypeID(event.target.value)}
            >
              <option>نوع تیکت را انتخاب کنید:</option>
              {departmentsSubs.length &&
                departmentsSubs.map((sub) => (
                  <option key={sub._id} value={sub._id}>
                    {sub.title}
                  </option>
                ))}
            </select>
          </div>

          <div className="flex flex-wrap sm:flex-nowrap gap-8 md:gap-9">
            <input
              type="text"
              className="w-full sm:w-1/2 lg:w-full placeholder:text-slate-800/70 dark:placeholder:text-white/60 text-slate-900 dark:text-white bg-white dark:bg-slate-800 text-2xl p-5 rounded-lg"
              placeholder="موضوع تیکت:"
              onChange={(event) => setTitle(event.target.value)}
              id="title"
              name="title"
            />
            {ticketTypeID === "63b688c5516a30a651e98156" && (
              <select
                name="department"
                id="department"
                className="w-full sm:w-1/2 lg:w-1/3 h-19 text-slate-800/70 dark:text-white/60 bg-white dark:bg-slate-800 text-2xl p-5 rounded-lg border-l-[14px] border-l-transparent"
                onChange={(event) => {
                  setCourseID(event.target.value);
                  console.log(event.target.value);
                }}
              >
                <option>دوره را انتخاب کنید:</option>
                {courses.map((course) => (
                  <option value={course._id} key={course._id}>
                    {course.course.name}
                  </option>
                ))}
              </select>
            )}
          </div>

          <textarea
            className="w-full min-h-72 placeholder:text-slate-800/70 dark:placeholder:text-white/60 text-slate-900 dark:text-white bg-white dark:bg-slate-800 text-2xl p-5 rounded-lg"
            placeholder="متن تیکت:"
            onChange={(event) => setBody(event.target.value)}
            id="text"
            name="text"
            required={true}
          ></textarea>

          <div className="flex flex-wrap gap-6 items-center justify-between mt-8 md:pr-5">
            {/* <!-- Attach --> */}
            <div className="attachments_btnwrap attachments_button flex items-center justify-between w-full sm:w-80 h-20 px-8 border border-sky-500 text-sky-500 bg-transparent cursor-pointer rounded-lg">
              <span className="font-EstedadBold text-[1.7rem] select-none">
                آپلود پیوست
              </span>
              <div className="text-4xl">
                <HiArrowUpTray />
              </div>
            </div>

            <button
              onClick={sendTicketHandler}
              className="bg-sky-800 text-3xl h-20 w-full sm:w-80 mr-auto rounded-lg"
            >
              ارسال تیکت
            </button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default SendTicket;
