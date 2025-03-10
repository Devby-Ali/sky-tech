import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import DataTable from "../../../Components/AdminPanel/DataTable/DataTable";

export default function Tickets() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/v1/tickets`, {
      headers: {
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("user")).token
        }`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTickets(data);
      });
  }, []);

  const showTicketBody = (body) => {
    Swal.fire({
      title: body,
      confirmButtonText: "دیدم",
    });
  };

  const setAnswerToTicket = (ticketID) => {
    Swal.fire({
      title: "پاسخ:",
      input: "textarea",
      confirmButtonText: "ثبت",
    }).then((result) => {
      console.log(result);
      if (result.isConfirmed) {
        const ticketAnswerInfos = {
          ticketID,
          body: result.value,
        };

        fetch(`http://localhost:4000/v1/tickets/answer`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${
              JSON.parse(localStorage.getItem("user")).token
            }`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(ticketAnswerInfos),
        }).then((res) => {
          if (res.ok) {
            Swal.fire({
              title: "پاسخ مورد نظر با موفقیت ثبت شد",
              icon: "success",
              confirmButtonText: "ok",
            });
          }
        });
      }
    });
  };

  return (
    <DataTable title={"تیکت ها"}>
      <div className="pb-2 md:pb-4 md:pr-5 overflow-x-auto">
        <div className="min-w-[840px] md:min-w-[900px] grid grid-cols-12 text-xl md:text-2xl font-EstedadMedium items-center text-center bg-white dark:bg-slate-800 h-16 md:h-20 px-3 mb-6 rounded-xl">
          <div className="col-span-1 text-nowrap">شناسه</div>
          <div className="col-span-3">کاربر</div>
          <div className="col-span-2">عنوان</div>
          <div className="col-span-2">نوع تیکت</div>
          <div className="col-span-2">مشاهده</div>
          <div className="col-span-2">پاسخ</div>
        </div>

        <div
          className="min-w-[840px] md:min-w-[900px] space-y-6"
          id="container_orders"
        >
          {tickets.map((ticket, index) => (
            <>
              <div
                key={ticket._id}
                className="grid grid-cols-12 items-center text-xl md:text-2xl text-center bg-white dark:bg-slate-800 h-16 md:h-20 rounded-xl divide-x divide-x-reverse divide-sky-400/80 dark:divide-[#333c4c] *:px-3"
              >
                <div className="col-span-1">{index + 1}</div>

                <div className="col-span-3">{ticket.user}</div>

                <div className="col-span-2">{ticket.title}</div>

                <div className="col-span-2">{ticket.departmentSubID}</div>

                <div className="col-span-2">
                  <div
                    onClick={() => showTicketBody(ticket.body)}
                    className="inline-flex items-center justify-center bg-sky-100/90 dark:bg-white/10 font-EstedadMedium text-sky-900 dark:text-white/70 text-xl md:text-2xl py-2 px-5 md:px-8 rounded-sm select-none cursor-pointer"
                  >
                    مشاهده
                  </div>
                </div>
                <div className="col-span-2">
                  <div
                    onClick={() => setAnswerToTicket(ticket._id)}
                    className="inline-flex items-center justify-center bg-sky-100/90 dark:bg-white/10 font-EstedadMedium text-sky-900 dark:text-white/70 text-xl md:text-2xl py-2 px-5 md:px-8 rounded-sm select-none cursor-pointer"
                  >
                    پاسخ
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </DataTable>
  );
}
