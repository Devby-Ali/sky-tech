import React, { useEffect, useState } from "react";
import { HiArrowUpTray, HiChevronLeft } from "react-icons/hi2";
import { Link } from "react-router-dom";

export default function SendTicket() {
  const [departments, setDepartments] = useState([]);
  const [departmentsSubs, setDepartmentsSubs] = useState([]);
  const [courses, setCourses] = useState([]);
  const [ticketTypeID, setTicketTypeID] = useState("");

  useEffect(() => {
    fetch(`http://localhost:4000/v1/tickets/departments`)
      .then((res) => res.json())
      .then((data) => setDepartments(data));

    fetch(`http://localhost:4000/v1/users/courses/`, {
      headers: {
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("user")).token
        }`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
      });
  }, []);

  const getDepartmentsSub = (departmentID) => {
    fetch(`http://localhost:4000/v1/tickets/departments-subs/${departmentID}`)
      .then((res) => res.json())
      .then((subs) => setDepartmentsSubs(subs));
  };

  return (
    <main className="pb-5 md:pb-8 mx-auto mt-6 md:mt-12">
      <div className="flex items-center justify-between bg-white dark:bg-darkBox h-20 md:h-28 pl-2.5 rounded-xl mb-8">
        <div className="flex items-center gap-x-3 md:gap-x-6 h-full">
          <span className="w-1 md:w-1.5 h-full bg-light-blue-600 rounded-r-full shadowLightBlue"></span>
          <span className="text-light-blue-500 text-2xl md:text-3xl font-EstedadMedium md:font-EstedadBold select-none pr-4">
            ارسال تیکت جدید (3)
          </span>
        </div>
        <Link
          to="/my-account/ticket"
          className="flex items-center gap-x-1 md:gap-x-2 text-light-blue-500 text-[1.4rem] md:text-[1.7rem] font-EstedadBold md:ml-6"
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
              className="w-full sm:w-1/2 h-13 text-darkBox/70 dark:text-white/60 bg-white dark:bg-darkBox text-2xl p-5 rounded-lg border-l-[14px] border-l-transparent"
              onChange={(event) => getDepartmentsSub(event.target.value)}
            >
              <option>دپارتمان را انتخاب کنید:</option>
              {departments.map((department) => (
                <>
                  <option value={department._id}>{department.title}</option>
                </>
              ))}
            </select>

            <select
              name="department"
              id="department"
              className="w-full sm:w-1/2 h-13 text-darkBox/70 dark:text-white/60 bg-white dark:bg-darkBox text-2xl p-5 rounded-lg border-l-[14px] border-l-transparent"
              onChange={(event) => setTicketTypeID(event.target.value)}
            >
              <option>نوع تیکت را انتخاب کنید:</option>
              {departmentsSubs.length &&
                departmentsSubs.map((sub) => (
                  <>
                    <option value={sub._id}>{sub.title}</option>
                  </>
                ))}
            </select>
          </div>

          <div className="flex flex-wrap sm:flex-nowrap gap-8 md:gap-9">
            <input
              type="text"
              className="w-full sm:w-1/2 lg:w-full placeholder:text-darkBox/70 dark:placeholder:text-white/60 text-darkColor dark:text-white bg-white dark:bg-darkBox text-2xl p-5 rounded-lg"
              placeholder="موضوع تیکت:"
              id="title"
              name="title"
              required=""
            />
            {ticketTypeID === "63b688c5516a30a651e98156" && (
              <select
                name="department"
                id="department"
                className="w-full sm:w-1/2 lg:w-1/3 h-13 text-darkBox/70 dark:text-white/60 bg-white dark:bg-darkBox text-2xl p-5 rounded-lg border-l-[14px] border-l-transparent"
                onChange={(event) => getDepartmentsSub(event.target.value)}
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
            className="w-full min-h-72 placeholder:text-darkBox/70 dark:placeholder:text-white/60 text-darkColor dark:text-white bg-white dark:bg-darkBox text-2xl p-5 rounded-lg"
            placeholder="متن تیکت:"
            id="text"
            name="text"
            required=""
          ></textarea>

          <div className="flex flex-wrap gap-5 items-center justify-between mt-8 md:pr-5">
            {/* <!-- Attach --> */}
            <div className="attachments_btnwrap attachments_button flex items-center justify-between w-full sm:w-80 h-20 px-8 border border-light-blue-500 text-light-blue-500 bg-transparent cursor-pointer rounded-lg">
              <span className="font-EstedadBold text-[1.7rem] select-none">
                آپلود پیوست
              </span>
              <div className="text-4xl">
                <HiArrowUpTray />
              </div>
            </div>

            <button className="bg-light-blue-800 text-3xl h-20 w-full sm:w-80 mr-auto rounded-lg">
              ارسال تیکت
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
