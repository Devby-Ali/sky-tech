import React, { useEffect, useState } from "react";
import DataTable from "../../../Components/AdminPanel/DataTable/DataTable";
import Swal from "sweetalert2";
import {
  getContact,
  sendAnwserToUser,
  removeContact,
} from "../../../Services/Axios/Requests/Contact";

interface Contact {
  _id: string;
  answer: 0 | 1;
  body: string;
  createdAt: string;
  email: string;
  name: string;
  phone: string;
  updatedAt: string;
}

const Contact = (): React.JSX.Element => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    getAllContacnts();
  }, []);

  const getAllContacnts = async () => {
    try {
      const res = await getContact();
      setContacts(res);
    } catch (error) {
      console.error("Error fetching contact", error);
    }
  };

  const showContactBody = (body: string) => {
    Swal.fire({
      title: body,
      confirmButtonText: "Ok",
    });
  };

  const sendAnwser = (contactEmail: string) => {
    Swal.fire({
      title: "پاسخ:",
      input: "textarea",
      confirmButtonText: "ارسال ایمیل",
      showCancelButton: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        const anwserInfo = {
          email: contactEmail,
          answer: result.value,
        };

        try {
          await sendAnwserToUser(anwserInfo);
          getAllContacnts();
          Swal.fire({
            title: "پاسخ ارسال شد",
            confirmButtonText: "باشه",
          });
        } catch (error) {
          console.error("Error send answer to user:", error);
        }
      }
    });
  };

  const removeContactHandler = (contactID: string) => {
    const localStorageData: { token: string } = JSON.parse(
      localStorage.getItem("user")!
    );
    Swal.fire({
      title: "از حذف پیام مطمعنی؟",
      icon: "warning",
      showDenyButton: true,
      confirmButtonText: "آره",
      denyButtonText: "نه",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await removeContact(contactID);
          Swal.fire({
            title: "پیغام مورد نظر با موفقیت حذف شد",
            icon: "success",
            confirmButtonText: "Ok",
          });
          getAllContacnts();
        } catch (error) {
          console.error("Error remove contact:", error);
        }
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
              <div
                key={contact._id}
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
                    onClick={() => sendAnwser(contact.email)}
                    className="inline-flex items-center justify-center bg-sky-100/80 dark:bg-white/10 text-sky-800 dark:text-white/70 font-EstedadMedium text-xl md:text-2xl py-2 px-5 xl:px-6 rounded-sm select-none cursor-pointer"
                  >
                    پاسخ
                  </div>
                </div>
                <div className="col-span-1">
                  <div
                    onClick={() => removeContactHandler(contact._id)}
                    className="inline-flex items-center justify-center bg-red-100 dark:bg-red-500/10 text-red-500 dark:text-red-200 font-EstedadMedium text-xl md:text-2xl py-2 px-5 xl:px-6 rounded-sm select-none cursor-pointer"
                  >
                    حذف
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </DataTable>
    </>
  );
};

export default Contact;
