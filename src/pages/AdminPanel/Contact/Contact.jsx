import React, { useEffect, useState } from "react";
import DataTable from "../../../Components/AdminPanel/DataTable/DataTable";
import Swal from "sweetalert2";

export default function Contact() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    getAllContacnts();
  }, []);

  function getAllContacnts() {
    fetch("http://localhost:4000/v1/contact")
      .then((res) => res.json())
      .then((allContacts) => {
        console.log(allContacts);
        setContacts(allContacts);
      });
  }

  const showContactBody = (body) => {
    Swal.fire({
      title: body,
      confirmButtonText: "Ok",
    });
  };

  const sendAnwserToUser = (contactEmail) => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    Swal.fire({
      title: "پاسخ:",
      input: "textarea",
      confirmButtonText: "ارسال ایمیل",
      showCancelButton: true,
    }).then((result) => {
      console.log(result);
      if (result.isConfirmed) {
        const anwserInfo = {
          email: contactEmail,
          answer: result.value,
        };

        fetch("http://localhost:4000/v1/contact/answer", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorageData.token}`,
          },
          body: JSON.stringify(anwserInfo),
        })
          .then((res) => {
            console.log(res);
            if (res.ok) {
              getAllContacnts();
              return res.json();
            }
          })
          .then((result) => console.log(result));
      }
    });
  };

  const removeContact = (contactID) => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    Swal.fire({
      title: "از حذف پیام مطمعنی؟",
      icon: "warning",
      showDenyButton: true,
      confirmButtonText: "آره",
      denyButtonText: "نه",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:4000/v1/contact/${contactID}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorageData.token}`,
          },
        }).then((res) => {
          if (res.ok) {
            Swal.fire({
              title: "پیغام مورد نظر با موفقیت حذف شد",
              icon: "success",
              confirmButtonText: "Ok",
            }).then(() => {
              getAllContacnts();
            });
          }
        });
      }
    });
  };

  return (
    <>
      <DataTable title="پیام ها">
        <div className="pb-2 md:pb-4 md:pr-5 overflow-x-auto">
          <div className="min-w-[840px] md:min-w-[900px] grid grid-cols-12 text-xl md:text-2xl font-EstedadMedium items-center text-center bg-white dark:bg-slate-800 h-16 md:h-20 px-3 mb-6 rounded-xl">
            <div className="col-span-1 text-nowrap">شناسه</div>
            <div className="col-span-3">نام و نام خانوادگی</div>
            <div className="col-span-3">ایمیل</div>
            <div className="col-span-2">شماره تماس</div>
            <div className="col-span-1">مشاهده</div>
            <div className="col-span-1">پاسخ</div>
            <div className="col-span-1">حذف</div>
          </div>

          <div
            className="min-w-[840px] md:min-w-[900px] space-y-6"
            id="container_orders"
          >
            {contacts.map((contact, index) => (
              <>
                <div
                  key={contact.name}
                  className="grid grid-cols-12 items-center text-xl md:text-2xl text-center bg-white dark:bg-slate-800 h-16 md:h-20 rounded-xl divide-x divide-x-reverse divide-sky-400/80 dark:divide-[#333c4c] *:px-3"
                >
                  <div className="col-span-1">{index + 1}</div>

                  <div className="col-span-3">{contact.name}</div>

                  <div className="col-span-3">{contact.email}</div>

                  <div className="col-span-2">{contact.phone}</div>

                  <div className="col-span-1 flex-center">
                    <div
                      onClick={() => showContactBody(contact.body)}
                      className="inline-flex items-center justify-center bg-sky-100/80 dark:bg-white/10 text-sky-800 dark:text-white/70 font-EstedadMedium text-xl md:text-2xl py-2 px-3.5 xl:px-5 rounded-sm select-none cursor-pointer"
                    >
                      مشاهده
                    </div>
                  </div>
                  <div className="col-span-1">
                    <div
                      onClick={() => sendAnwserToUser(contact.email)}
                      className="inline-flex items-center justify-center bg-sky-100/80 dark:bg-white/10 text-sky-800 dark:text-white/70 font-EstedadMedium text-xl md:text-2xl py-2 px-5 xl:px-6 rounded-sm select-none cursor-pointer"
                    >
                      پاسخ
                    </div>
                  </div>
                  <div className="col-span-1">
                    <div
                      onClick={() => removeContact(contact._id)}
                      className="inline-flex items-center justify-center bg-red-100 dark:bg-red-500/10 text-red-500 dark:text-red-200 font-EstedadMedium text-xl md:text-2xl py-2 px-5 xl:px-6 rounded-sm select-none cursor-pointer"
                    >
                      حذف
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </DataTable>
    </>
  );
}
