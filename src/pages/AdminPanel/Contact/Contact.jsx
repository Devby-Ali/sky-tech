import React, { useEffect, useState } from "react";
import DataTable from "../../../Components/AdminPanel/DataTable/DataTable";
import { Card, Typography } from "@material-tailwind/react";
import Swal from "sweetalert2";

const TABLE_HEAD = [
  "شناسه",
  "نام و نام خانوادگی",
  "ایمیل",
  "شماره تماس",
  "مشاهده",
  "پاسخ",
  "حذف",
];

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
      title: "متن پاسخ را وارد کنید",
      input: "textarea",
      confirmButtonText: "ارسال ایمیل",
      showCancelButton: true,
    }).then((result) => {
      console.log(result);

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
            getAllContacnts()
            return res.json();
          }
        })
        .then((result) => console.log(result));
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
        <Card className="h-full w-full rounded-md overflow-scroll px-6 dark:bg-darkBox">
          <table className="w-full min-w-max table-auto text-center">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-b-4 border-gray-400 pb-10 pt-12"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="text-4xl font-EstedadBold leading-none text-darkColor dark:text-white/70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact, index) => {
                const isLast = index === contacts.length - 1;
                const classes = isLast
                  ? "py-6"
                  : "py-6 border-b border-gray-400";

                return (
                  <tr key={contact.name} className={` ${contact.answer === 1 ? 'from-green-400/50' : 'from-red-400/50'} bg-gradient-to-l via-transparent via-5% to-light-blue-700/15 hover:bg-gray-200`}>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="text-2xl font-EstedadBold text-darkColor dark:text-white/90"
                      >
                        {index + 1}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        className="text-darkBox dark:text-white/90 text-[1.6rem] font-EstedadLight"
                      >
                        {contact.name}
                      </Typography>
                    </td>

                    <td className={classes}>
                      <Typography
                        variant="small"
                        className="text-darkBox dark:text-white/90 text-[1.6rem] font-EstedadLight"
                      >
                        {contact.email}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        className="text-darkBox dark:text-white/90 text-[1.6rem] font-EstedadLight"
                      >
                        {contact.phone}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        className="text-darkBox dark:text-white/90 text-[1.6rem] font-EstedadLight"
                      >
                        <button
                          type="button"
                          onClick={() => showContactBody(contact.body)}
                        >
                          مشاهده پیغام
                        </button>
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        className="text-darkBox dark:text-white/90 text-[1.6rem] font-EstedadLight"
                      >
                        <button
                          type="button"
                          onClick={() => sendAnwserToUser(contact.email)}
                        >
                          پاسخ
                        </button>
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        className="text-darkBox  dark:text-white/90 text-[1.6rem] font-EstedadLight"
                      >
                        <button
                          type="button"
                          onClick={() => removeContact(contact._id)}
                        >
                          حذف
                        </button>
                      </Typography>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Card>
      </DataTable>
    </>
  );
}
