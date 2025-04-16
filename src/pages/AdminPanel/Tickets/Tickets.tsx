import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import DataTable from "../../../Components/AdminPanel/DataTable/DataTable";
import {
  getUsersTickets,
  setAnswerToTicket,
} from "../../../Services/Axios/Requests/Tickets";

interface Ticket {
  _id: string;
  answer: 0 | 1;
  body: string;
  course: null;
  createdAt: string;
  departmentID: string;
  departmentSubID: string;
  isAnswer: 0 | 1;
  priority: 0 | 1;
  title: string;
  updatedAt: string;
  user: string;
}

const Tickets = (): React.JSX.Element => {
  const [tickets, setTickets] = useState<Ticket[]>([]);

  const getUsersTicketsHandler = async () => {
    try {
      const res = await getUsersTickets();
      setTickets(res);
    } catch (error) {
      console.error("Error fetching Tickets:", error);
    }
  };

  useEffect(() => {
    getUsersTicketsHandler();
  }, []);

  const showTicketBody = (body: string) => {
    Swal.fire({
      title: body,
      confirmButtonText: "دیدم",
    });
  };

  const AnswerTicketHandler = (ticketID: string) => {
    Swal.fire({
      title: "پاسخ:",
      input: "textarea",
      confirmButtonText: "ثبت",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const ticketAnswerInfos = {
          ticketID,
          body: result.value,
        };

        try {
          await setAnswerToTicket(ticketAnswerInfos);
          Swal.fire({
            title: "پاسخ مورد نظر با موفقیت ثبت شد",
            icon: "success",
            confirmButtonText: "ok",
          });
        } catch (error) {
          console.error("Error set answer to ticket:", error);
        }
      }
    });
  };

  return (
    <DataTable title={"تیکت ها"}>
      <div className="pb-2 md:pb-4 md:pr-5 overflow-x-auto">
        <div className="min-w-[840px] md:min-w-[900px] grid grid-cols-12 text-xl md:text-2xl font-EstedadMedium items-center text-center bg-white dark:bg-slate-800 h-16 md:h-20 px-3 mb-6 rounded-xl">
          <div className="col-span-1 text-nowrap">شناسه</div>
          <div className="col-span-3">کاربر</div>
          <div className="col-span-4">عنوان</div>
          <div className="col-span-2">نوع تیکت</div>
          <div className="col-span-1">مشاهده</div>
          <div className="col-span-1">پاسخ</div>
        </div>

        <div
          className="min-w-[840px] md:min-w-[900px] space-y-6"
          id="container_orders"
        >
          {tickets.map((ticket, index) => (
            <div
              key={ticket._id}
              className="grid grid-cols-12 items-center text-xl md:text-2xl text-center bg-white dark:bg-slate-800 h-16 md:h-20 rounded-xl divide-x divide-x-reverse divide-sky-400/80 dark:divide-[#333c4c] *:px-3"
            >
              <div className="col-span-1">{index + 1}</div>

              <div className="col-span-3">{ticket.user}</div>

              <div className="col-span-4">{ticket.title}</div>

              <div className="col-span-2">{ticket.departmentSubID}</div>

              <div className="col-span-1">
                <div
                  onClick={() => showTicketBody(ticket.body)}
                  className="inline-flex items-center justify-center bg-sky-100/80 dark:bg-white/10 text-sky-800 dark:text-white/70 font-EstedadMedium text-xl md:text-2xl py-2 px-3.5 xl:px-5 rounded-sm select-none cursor-pointer"
                >
                  مشاهده
                </div>
              </div>
              <div className="col-span-1">
                <div
                  onClick={() => AnswerTicketHandler(ticket._id)}
                  className="inline-flex items-center justify-center bg-sky-100/80 dark:bg-white/10 text-sky-800 dark:text-white/70 font-EstedadMedium text-xl md:text-2xl py-2 px-5 xl:px-6 rounded-sm select-none cursor-pointer"
                >
                  پاسخ
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DataTable>
  );
};

export default Tickets;
