import React, { useEffect, useState } from "react";
import DataTable from "../../../Components/AdminPanel/DataTable/DataTable";
import Swal from "sweetalert2";

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
        <div className="pb-2 md:pb-4 md:pr-5 overflow-x-auto">
          <div className="min-w-[840px] md:min-w-[900px] grid grid-cols-12 text-xl md:text-2xl font-EstedadMedium items-center text-center bg-white dark:bg-slate-800 h-16 md:h-20 px-3 mb-6 rounded-xl">
            <div className="col-span-1 text-nowrap">شناسه</div>
            <div className="col-span-2">کاربر</div>
            <div className="col-span-3">دوره</div>
            <div className="col-span-1">امتیاز</div>
            <div className="col-span-1">مشاهده</div>
            <div className="col-span-1">پاسخ</div>
            <div className="col-span-1">تایید</div>
            <div className="col-span-1">بن</div>
            <div className="col-span-1">حذف</div>
          </div>

          <div
            className="min-w-[840px] md:min-w-[900px] space-y-6"
            id="container_orders"
          >
            {comments.map((comment, index) => (
              <>
                <div
                  key={index}
                  className="grid grid-cols-12 items-center text-xl md:text-2xl text-center bg-white dark:bg-slate-800 h-16 md:h-20 rounded-xl divide-x divide-x-reverse divide-sky-400/80 dark:divide-[#333c4c] *:px-3"
                >
                  <div className="col-span-1">{index + 1}</div>

                  <div className="col-span-2">{comment.creator.name}</div>

                  <div className="col-span-3">{comment.course}</div>
                  <div className="col-span-1 *:w-5 xl:child:w-6 flex-center">
                    {Array(5 - comment.score)
                      .fill(0)
                      .map((item) => (
                        <>
                          <img src="/images/svgs/star.svg" alt="score" />
                        </>
                      ))}
                    {Array(comment.score)
                      .fill(0)
                      .map((item) => (
                        <>
                          <img src="/images/svgs/star_fill.svg" alt="score" />
                        </>
                      ))}
                  </div>

                  <div className="col-span-1">
                    <div
                      onClick={() => showCommentBody(comment.body)}
                      className="inline-flex items-center justify-center bg-sky-100/80 dark:bg-white/10 text-sky-800 dark:text-white/70 font-EstedadMedium text-xl md:text-2xl py-2 px-3 xl:px-5 rounded-sm select-none cursor-pointer"
                    >
                      مشاهده
                    </div>
                  </div>
                  <div className="col-span-1">
                    <div
                      onClick={() => answerToComment(comment._id)}
                      className="inline-flex items-center justify-center bg-sky-100/80 dark:bg-white/10 text-sky-800 dark:text-white/70 font-EstedadMedium text-xl md:text-2xl py-2 px-5 rounded-sm select-none cursor-pointer"
                    >
                      پاسخ
                    </div>
                  </div>
                  {comment.answer === 1 ? (
                    <div className="col-span-1">
                      <div
                        onClick={() => rejectComment(comment._id)}
                        className="inline-flex items-center justify-center bg-amber-100/60 dark:bg-amber-500/10 text-amber-900 dark:text-amber-300 font-EstedadMedium text-xl md:text-2xl py-2 px-5 xl:px-11 rounded-sm select-none cursor-pointer"
                      >
                        رد
                      </div>
                    </div>
                  ) : (
                    <div className="col-span-1">
                      <div
                        onClick={() => acceptComment(comment._id)}
                        className="inline-flex items-center justify-center bg-green-50 dark:bg-green-500/10 text-green-700 dark:text-green-400 font-EstedadMedium text-xl md:text-2xl py-2 px-5 xl:px-8 rounded-sm select-none cursor-pointer"
                      >
                        تایید
                      </div>
                    </div>
                  )}

                  <div className="col-span-1">
                    <div
                      onClick={() => banUser(comment.creator._id)}
                      className="inline-flex items-center justify-center bg-red-100 dark:bg-red-500/10 text-red-500 dark:text-red-100 font-EstedadMedium text-xl md:text-2xl py-2 px-5 xl:px-8 rounded-sm select-none cursor-pointer"
                    >
                      بن
                    </div>
                  </div>
                  <div className="col-span-1">
                    <div
                      onClick={() => removeComment(comment._id)}
                      className="inline-flex items-center justify-center bg-red-100 dark:bg-red-500/10 text-red-500 dark:text-red-100 font-EstedadMedium text-xl md:text-2xl py-2 px-5 xl:px-8 rounded-sm select-none cursor-pointer"
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
