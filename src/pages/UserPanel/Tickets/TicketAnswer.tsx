import React, { useEffect, useState } from "react";
import {
  HiOutlineCheckCircle,
  HiOutlineMagnifyingGlassCircle,
} from "react-icons/hi2";
import { Link, useParams } from "react-router-dom";

export default function TicketAnswer() {
  const { id } = useParams();
  const [ticketInfo, setTicketInfo] = useState({});

  useEffect(() => {
    fetch(`http://localhost:4000/v1/tickets/answer/${id}`, {
      headers: {
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("user")).token
        }`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTicketInfo(data);
      });
  }, []);

  return (
    <main className="pb-5 md:pb-8 mx-auto mt-6 md:mt-12 px-2 2xl:px-24">
      <section className="mt-10 md:mt-10">
        <div className="bg-white dark:bg-slate-800 p-9 rounded-md text-slate-900 dark:text-white">
          <div className="flex items-center justify-between gap-7 flex-wrap mb-9 pb-9 border-b border-b-neutral-200 dark:border-b-white/10">
            <span className="text-[1.7rem] sm:text-3xl font-EstedadMedium">
              وضعیت
            </span>
            <div className="flex items-center gap-x-1.5 text-2xl sm:text-[1.7rem] shrink-0 mr-auto">
              {ticketInfo.answer === null ? (
                <>
                  <div className="text-4xl text-amber-500">
                    <HiOutlineMagnifyingGlassCircle />
                  </div>
                  <span className="font-EstedadMedium text-amber-500">
                    در حال بررسی
                  </span>
                </>
              ) : (
                <>
                  <div className="text-4xl text-green-500">
                    <HiOutlineCheckCircle />
                  </div>
                  <span className="font-EstedadMedium text-green-500">
                    بسته شده
                  </span>
                </>
              )}
            </div>
          </div>

          <div className="space-y-9 md:space-y-12 md:pt-2 mb-16 md:mb-25">
            <div className="w-full lg:w-1/2 text-slate-800 dark:text-white/90 bg-sky-50 dark:bg-[#333c4c] p-8 rounded-md">
              <p className="text-2xl md:text-[1.7rem]">{ticketInfo.ticket}</p>

              <div className="flex items-center justify-between text-xl text-[#333c4c] dark:text-white/60 mt-6 sm:mt-8 pt-6 sm:pt-7 border-t border-t-neutral-200 dark:border-t-white/10">
                <span>1403/01/07</span>
                <span>13:38</span>
              </div>
            </div>

            {ticketInfo.answer !== null && (
              <div className="w-full lg:w-1/2 bg-sky-100 dark:bg-[#333c4c] p-8 rounded-sm text-white mr-auto">
                <div className="flex items-center gap-x-2 mb-5 md:mb-7 text-2xl md:text-[1.7rem] font-EstedadMedium">
                  <div className="w-2 h-6 rounded-full bg-green-500"></div>
                  پشتیبانی | Admin
                </div>
                {ticketInfo.answer}
                <div className="flex items-center justify-between text-xl text-[#333c4c] dark:text-white/60 mt-6 pt-6 sm:mt-8 sm:pt-7 border-t border-t-white/10">
                  <span>1403/01/07</span>
                  <span>15:32</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
