import React, { useEffect, useState } from "react";
import {
  HiOutlineCheckCircle,
  HiOutlineMagnifyingGlassCircle,
  HiOutlinePlusCircle,
} from "react-icons/hi2";
import { Link } from "react-router-dom";

export default function Tickets() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/v1/tickets/user`, {
      headers: {
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("user")).token
        }`,
      },
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => setTickets(data));
  }, []);

  return (
    <main className="pb-5 md:pb-8 mx-auto mt-6 md:mt-12 2xl:px-24">
      <div className="flex items-center sm:flex-row-reverse justify-between gap-y-8 flex-wrap  text-slate-900 dark:text-white mb-12 pt-2">
        <Link
          className="flex items-center justify-between gap-x-3 w-full sm:w-auto md:w-full lg:w-auto xl:w-96 text-2xl sm:text-[1.6rem] text-teal-300 bg-transparent border border-teal-300 h-24 sm:h-[8.8rem] md:h-[6.9rem] px-5 lg:px-7 font-EstedadBold rounded-lg my-1"
          to="/my-account/send-ticket"
        >
          ارسال تیکت جدید
          <div className="text-5xl">
            <HiOutlinePlusCircle />
          </div>
        </Link>

        <div className="flex flex-col sm:flex-row w-full sm:w-auto md:w-full lg:w-auto gap-x-5 xl:gap-x-10 2xl:gap-x-12 gap-y-8 items-center">
          <div className="flex items-center gap-x-4 w-full sm:w-56 md:w-full lg:w-auto xl:w-80 bg-white dark:bg-slate-800 rounded-md px-7 py-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="none"
              viewBox="0 0 48 48"
            >
              <path
                fill="#22C55E"
                d="M33.625 4C27.343 4 22.25 9.044 22.25 15.266s5.092 11.267 11.375 11.267c2.765 0 5.436-.998 7.513-2.807a.86.86 0 0 0 .122-1.22.88.88 0 0 0-1.278-.08c-3.992 3.478-10.073 3.092-13.584-.862a9.47 9.47 0 0 1 .87-13.454c3.991-3.478 10.073-3.092 13.584.862a9.48 9.48 0 0 1 2.398 6.295v23.4c0 1.436-1.175 2.6-2.625 2.6H7.375c-1.45 0-2.625-1.164-2.625-2.6V16.294l14.652 9.235-9.146 9.058a.86.86 0 0 0-.021 1.226.88.88 0 0 0 1.259 0l9.42-9.33 2.616 1.646a.88.88 0 0 0 1.209-.266.86.86 0 0 0-.27-1.197L5.286 14.573a2.62 2.62 0 0 1 2.09-1.04h12.25a.87.87 0 0 0 .875-.866.87.87 0 0 0-.875-.867H7.375C4.96 11.803 3.003 13.74 3 16.133v22.534c.003 2.392 1.96 4.33 4.375 4.333h33.25c2.415-.003 4.372-1.941 4.375-4.333v-23.4C44.993 9.047 39.904 4.007 33.625 4"
              ></path>
              <path
                fill="#22C55E"
                d="M38.256 11.188 31 18.375l-2.006-1.987a.88.88 0 0 0-1.238.02.86.86 0 0 0 0 1.205l2.625 2.6a.88.88 0 0 0 1.238 0l7.875-7.8a.86.86 0 0 0-.022-1.225.88.88 0 0 0-1.216 0"
              ></path>
            </svg>
            <div className="flex flex-col gap-y-4">
              <span className="text-xl sm:text-2xl text-slate-900/90 dark:text-white/70">
                پاسخ داده شده
              </span>
              <span className="text-2xl font-EstedadBold">0</span>
            </div>
          </div>

          <div className="flex items-center gap-x-4 w-full sm:w-56 md:w-full lg:w-auto xl:w-80 bg-white dark:bg-slate-800 rounded-md px-7 py-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="none"
              viewBox="0 0 48 48"
            >
              <path
                fill="#FBBF24"
                d="M44.124 23.507a.865.865 0 0 0-.875.853v15.37c0 1.416-1.175 2.563-2.625 2.563H7.374c-1.449 0-2.624-1.147-2.624-2.562V17.398l14.69 9.353-9.186 8.967a.84.84 0 0 0-.022 1.207.89.89 0 0 0 1.259 0l9.446-9.223 2.583 1.644a.89.89 0 0 0 1.096-.112l2.625-2.562a.84.84 0 0 0-.021-1.207.89.89 0 0 0-1.216 0l-2.123 2.071L5.258 15.68l2.993-2.92v2.207c0 .472.392.854.875.854a.865.865 0 0 0 .875-.854V4.72h14a.865.865 0 0 0 .875-.853.865.865 0 0 0-.875-.854H10c-.947-.02-1.73.713-1.75 1.637v5.694l-4.994 4.874A.84.84 0 0 0 3 15.82v23.91c.003 2.357 1.96 4.267 4.375 4.27h33.25c2.414-.003 4.371-1.913 4.374-4.27V24.36a.865.865 0 0 0-.875-.855"
              ></path>
              <path
                fill="#FBBF24"
                d="M22.284 14.955c.43 5.457 4.874 9.793 10.466 10.214v3.602c-1.083.32-1.805 1.317-1.75 2.42v6.83c-.041 1.375 1.067 2.522 2.475 2.562q.075.003.15 0h1.093q.153 0 .296-.05c1.255-.192 2.163-1.273 2.11-2.511V31.19a.865.865 0 0 0-.875-.854.865.865 0 0 0-.875.854v6.832a.787.787 0 0 1-.718.853 1 1 0 0 1-.157 0h-.874a.796.796 0 0 1-.875-.7 1 1 0 0 1 0-.153V31.19a.787.787 0 0 1 .718-.854 1 1 0 0 1 .157 0 .865.865 0 0 0 .875-.854V25.17c6.263-.471 10.949-5.809 10.466-11.921-.483-6.113-5.953-10.686-12.216-10.215-6.264.472-10.95 5.81-10.466 11.922M33.624 4.72c5.316 0 9.625 4.205 9.625 9.393s-4.309 9.393-9.624 9.393S24 19.3 24 14.112c.006-5.185 4.312-9.387 9.625-9.393"
              ></path>
              <path
                fill="#FBBF24"
                d="M27.5 14.965a.865.865 0 0 0 .875-.854c.002-2.828 2.351-5.12 5.25-5.123a.865.865 0 0 0 .874-.854.865.865 0 0 0-.875-.854c-3.864.004-6.995 3.06-7 6.831 0 .472.392.854.875.854"
              ></path>
            </svg>
            <div className="flex flex-col gap-y-4">
              <span className="text-xl sm:text-2xl text-slate-900/90 dark:text-white/70">
                در حال بررسی
              </span>
              <span className="text-2xl font-EstedadBold">0 </span>
            </div>
          </div>

          <div className="flex items-center gap-x-4 w-full sm:w-56 md:w-full lg:w-auto xl:w-80 bg-white dark:bg-slate-800 rounded-md px-7 py-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="none"
              viewBox="0 0 48 48"
            >
              <path
                fill="#EF4444"
                d="M33.625 4C27.343 4 22.25 9.044 22.25 15.266s5.092 11.267 11.375 11.267c2.765 0 5.436-.998 7.513-2.807a.86.86 0 0 0 .122-1.22.88.88 0 0 0-1.278-.08c-3.992 3.478-10.073 3.092-13.584-.862a9.47 9.47 0 0 1 .87-13.454c3.991-3.478 10.073-3.092 13.584.862a9.48 9.48 0 0 1 2.398 6.295v23.4c0 1.436-1.175 2.6-2.625 2.6H7.375c-1.45 0-2.625-1.164-2.625-2.6V16.294l14.652 9.235-9.146 9.058a.86.86 0 0 0-.021 1.226.88.88 0 0 0 1.259 0l9.42-9.33 2.616 1.646a.88.88 0 0 0 1.209-.266.86.86 0 0 0-.27-1.197L5.286 14.573a2.62 2.62 0 0 1 2.09-1.04h12.25a.87.87 0 0 0 .875-.866.87.87 0 0 0-.875-.867H7.375C4.96 11.803 3.003 13.74 3 16.133v22.534c.003 2.392 1.96 4.33 4.375 4.333h33.25c2.415-.003 4.372-1.941 4.375-4.333v-23.4C44.993 9.047 39.904 4.007 33.625 4"
              ></path>
              <path
                fill="#EF4444"
                d="M37.744 11.187a.88.88 0 0 0-1.237 0l-2.882 2.854-2.881-2.854a.88.88 0 0 0-1.237.021.86.86 0 0 0 0 1.204l2.881 2.854-2.881 2.854a.86.86 0 0 0-.022 1.226.88.88 0 0 0 1.238.02l.021-.02 2.881-2.854 2.882 2.854a.88.88 0 0 0 1.237-.022.86.86 0 0 0 0-1.204l-2.881-2.854 2.881-2.854a.86.86 0 0 0 0-1.225"
              ></path>
            </svg>
            <div className="flex flex-col gap-y-4">
              <span className="text-xl sm:text-2xl text-slate-900/90 dark:text-white/70">
                بسته شده
              </span>
              <span className="text-2xl font-EstedadBold">9 </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between bg-white dark:bg-slate-800 h-20 md:h-28 pl-3.5 rounded-md mb-8">
        <div className="flex items-center gap-x-3 md:gap-x-6 h-full">
          <span className="w-1 md:w-1.5 h-full bg-sky-600 rounded-r-full shadowLightBlue"></span>
          <span className="text-sky-500 text-[1.7rem] md:text-3xl font-EstedadMedium md:font-EstedadBold select-none pr-4">
            تیکت های من ({tickets.length})
          </span>
        </div>
        <select
          id="filters"
          className="bg-sky-50 dark:bg-[#333c4c] text-slate-900 dark:text-white text-2xl md:text-[1.6rem] w-1/2 md:w-80 h-[3.1rem] md:h-20 pr-6 border-l-[14px] border-l-transparent rounded-sm"
        >
          <option value="">مرتب سازی بر اساس:</option>
          <option value="">منتظر پاسخ</option>
          <option value="">پاسخ داده شده</option>
          <option value="">جدیدترین</option>
          <option value="">قدیمی ترین</option>
        </select>
      </div>

      <div className="space-y-4 md:space-y-6 md:pr-5" id="container_tickets">
        {tickets.map((ticket) => (
          <>
            <div className="flex items-start lg:items-center justify-between flex-col lg:flex-row gap-y-6 bg-white dark:bg-slate-800 text-slate-900 dark:text-white p-5 md:py-9 md:px-7 rounded-md">
              <Link
                to={`answer/${ticket._id}`}
                className="block lg:w-1/2 lg:truncate text-xl md:text-3xl"
              >
                {ticket.title}
              </Link>
              <div className="flex items-center justify-between lg:justify-start gap-x-3 md:gap-x-5 w-full lg:w-auto text-slate-500 dark:text-gray-400 text-lg md:text-2xl">
                <span className="select-none">
                  {" "}
                  <span>{ticket.departmentSubID}</span>{" "}
                  <span>
                    {ticket.answer === 0 ? "پاسخ داده نشده" : "پاسخ داده شده"}
                  </span>{" "}
                </span>
                <span className="select-none mr-auto lg:mr-0">
                  {ticket.createdAt.slice(0, 10)}
                </span>

                {ticket.answer === 0 ? (
                  <>
                    <div className="text-3xl md:text-5xl text-amber-500">
                      <HiOutlineMagnifyingGlassCircle />
                    </div>
                  </>
                ) : (
                  <>
                    <div className=" text-3xl md:text-5xl text-green-500">
                      <HiOutlineCheckCircle />
                    </div>
                  </>
                )}
              </div>
            </div>
          </>
        ))}
      </div>
    </main>
  );
}
