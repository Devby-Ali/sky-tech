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
    fetch("http://localhost:4000/v1/contact")
      .then((res) => res.json())
      .then((allContacts) => {
        console.log(allContacts);
        setContacts(allContacts);
      });
  }, []);

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
            return res.json();
          }
        })
        .then((result) => console.log(result));
    });
  };

  return (
    <>
      <DataTable title="پیام ها">
        <Card className="h-full w-full rounded-md overflow-scroll px-6">
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
                      className="text-4xl font-EstedadBold leading-none"
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
                  <tr key={contact.name} className="hover:bg-gray-50">
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="text-2xl font-EstedadBold"
                      >
                        {index + 1}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        className="text-darkBox text-[1.6rem] font-EstedadLight"
                      >
                        {contact.name}
                      </Typography>
                    </td>

                    <td className={classes}>
                      <Typography
                        variant="small"
                        className="text-darkBox text-[1.6rem] font-EstedadLight"
                      >
                        {contact.email}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        className="text-darkBox text-[1.6rem] font-EstedadLight"
                      >
                        {contact.phone}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        className="text-darkBox text-[1.6rem] font-EstedadLight"
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
                        className="text-darkBox text-[1.6rem] font-EstedadLight"
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
                        className="text-darkBox text-[1.6rem] font-EstedadLight"
                      >
                        <button type="button">حذف</button>
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
