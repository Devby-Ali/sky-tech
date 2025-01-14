import React, { useEffect, useState } from "react";
import DataTable from "../../../Components/AdminPanel/DataTable/DataTable";
import { Card, Typography } from "@material-tailwind/react";
import Swal from "sweetalert2";

const TABLE_HEAD = [
  "شناسه",
  "کاربر",
  "دوره",
  "مشاهده",
  "پاسخ",
  "تایید",
  "ویرایش",
  "حذف",
  "بن",
];

export default function Comments() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getAllComments();
  }, []);

  function getAllComments() {
    fetch("http://localhost:4000/v1/comments")
      .then((res) => res.json())
      .then((allComments) => setComments(allComments));
  }

  const removeComment = (commentID) => {
    Swal.fire({
      title: "از حذف کامنت مطمعنی؟",
      icon: "warning",
      showDenyButton: true,
      confirmButtonText: "آره",
      denyButtonText: "نه",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:4000/v1/comments/${commentID}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${
              JSON.parse(localStorage.getItem("user")).token
            }`,
          },
        }).then((res) => {
          if (res.ok) {
            Swal.fire({
              title: "کامنت حذف شد",
              icon: "success",
              confirmButtonText: "Ok",
            }).then(() => getAllComments());
          }
        });
      }
    });
  };

  const showCommentBody = (commentBody) => {
    Swal.fire({
      title: commentBody,
      confirmButtonText: "Ok",
    });
  };

  const banUser = (userID) => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    Swal.fire({
      title: "از بن کاربر مطمعنی؟",
      icon: "warning",
      showDenyButton: true,
      confirmButtonText: "آره",
      denyButtonText: "نه",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:4000/v1/users/ban/${userID}`, {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${localStorageData.token}`,
          },
        }).then((res) => {
          if (res.ok) {
            Swal.fire({
              title: "کاربر با موفقیت بن شد",
              icon: "success",
              confirmButtonText: "Ok",
            }).then(() => getAllComments());
          }
        });
      }
    });
  };

  const acceptComment = (commentID) => {
    Swal.fire({
      title: "از تایید کامنت مطمعنی؟",
      icon: "warning",
      showDenyButton: true,
      confirmButtonText: "آره",
      denyButtonText: "نه",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:4000/v1/comments/accept/${commentID}`, {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${
              JSON.parse(localStorage.getItem("user")).token
            }`,
          },
        }).then((res) => {
          console.log(res);
          if (res.ok) {
            Swal.fire({
              title: "کامنت تایید شد",
              icon: "success",
              confirmButtonText: "Ok",
            }).then(() => {
              getAllComments();
            });
          }
        });
      }
    });
  };

  const rejectComment = (commentID) => {
    Swal.fire({
      title: "از رد کامنت مطمعنی؟",
      icon: "warning",
      showDenyButton: true,
      confirmButtonText: "آره",
      denyButtonText: "نه",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:4000/v1/comments/reject/${commentID}`, {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${
              JSON.parse(localStorage.getItem("user")).token
            }`,
          },
        }).then((res) => {
          console.log(res);
          if (res.ok) {
            Swal.fire({
              title: "کامنت رد شد",
              icon: "success",
              confirmButtonText: "Ok",
            }).then(() => {
              getAllComments();
            });
          }
        });
      }
    });
  };

  const answerToComment = (commentID) => {
    Swal.fire({
      title: "پاسخ مورد نظر را وارد کنید",
      input: "text",
      confirmButtonText: "ثبت پاسخ",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        const commentAnswer = {
          body: result.value,
        };

        fetch(`http://localhost:4000/v1/comments/answer/${commentID}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${
              JSON.parse(localStorage.getItem("user")).token
            }`,
          },
          body: JSON.stringify(commentAnswer),
        }).then((res) => {
          console.log(res);
          if (res.ok) {
            Swal.fire({
              title: "پاسخ مورد نظر با موفقیت ثبت شد",
              icon: "success",
              confirmButtonText: "Ok",
            }).then(() => {
              getAllComments();
            });
          }
        });
      }
    });
  };

  return (
    <>
      <DataTable title="کامنت ها">
        <Card className="h-full w-full rounded-md overflow-scroll px-6 dark:bg-darkBox">
          <table className="w-full min-w-max table-auto text-center">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-b-4 border-b-darkBox/30 dark:border-[#333c4c] pb-10 pt-12"
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
              {comments.map((comment, index) => {
                const isLast = index === comment.length - 1;
                const classes = isLast
                  ? "py-6"
                  : "py-6 border-b border-gray-400";

                return (
                  <tr
                    key={index}
                    className={` ${
                      comment.answer === 1
                        ? "from-green-400/50"
                        : "from-red-400/50"
                    } bg-gradient-to-l via-transparent via-5% to-light-blue-700/15 hover:bg-light-blue-50 dark:hover:bg-light-blue-400/10`}
                  >
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
                        {comment.creator.name}
                      </Typography>
                    </td>

                    <td className={classes}>
                      <Typography
                        variant="small"
                        className="text-darkBox dark:text-white/90 text-[1.6rem] font-EstedadLight"
                      >
                        {comment.course}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        className="text-darkBox dark:text-white/90 text-[1.6rem] font-EstedadLight"
                      >
                        <button
                          type="button"
                          onClick={() => showCommentBody(comment.body)}
                        >
                          مشاهده
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
                          onClick={() => answerToComment(comment._id)}
                        >
                          پاسخ
                        </button>
                      </Typography>
                    </td>
                    {comment.answer === 1 ? (
                      <>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            className="text-darkBox dark:text-white/90 text-[1.6rem] font-EstedadLight"
                          >
                            <button
                              type="button"
                              onClick={() => rejectComment(comment._id)}
                            >
                              رد
                            </button>
                          </Typography>
                        </td>
                      </>
                    ) : (
                      <>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            className="text-darkBox dark:text-white/90 text-[1.6rem] font-EstedadLight"
                          >
                            <button
                              type="button"
                              onClick={() => acceptComment(comment._id)}
                            >
                              تایید
                            </button>
                          </Typography>
                        </td>
                      </>
                    )}
                    <td className={classes}>
                      <Typography
                        variant="small"
                        className="text-darkBox dark:text-white/90 text-[1.6rem] font-EstedadLight"
                      >
                        <button type="button">ویرایش</button>
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        className="text-darkBox  dark:text-white/90 text-[1.6rem] font-EstedadLight"
                      >
                        <button
                          type="button"
                          onClick={() => removeComment(comment._id)}
                        >
                          حذف
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
                          onClick={() => banUser(comment.creator._id)}
                        >
                          بن
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
