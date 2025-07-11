import React, { useContext, useState } from "react";
import { BiUserCircle } from "react-icons/bi";
import { BsExclamationTriangle } from "react-icons/bs";
import { GoTriangleDown } from "react-icons/go";
import { HiOutlineArrowUturnLeft } from "react-icons/hi2";
import { LiaUserSolid } from "react-icons/lia";
import { PiChatCenteredTextLight, PiChats } from "react-icons/pi";
import { RiGraduationCapFill } from "react-icons/ri";
import AuthContext from "../../contexts/authContext";
import { Link } from "react-router-dom";
import { AuthContextType } from "../../types/AuthContext.types";
import Comment from "types/Comments.types";
import Swal from "sweetalert2";

interface CommentsTextAreaProps {
  comments: Comment[];
  submitComment: (commentScore: string, newCommentBody: string) => void;
}

const CommentsTextArea = ({
  comments,
  submitComment,
}: CommentsTextAreaProps): React.JSX.Element => {
  const [openTextArea, setOpenTextArea] = useState<boolean>(false);
  const [newCommentBody, setNewCommentBody] = useState<string>("");
  const [commentScore, setCommentScore] = useState<string>("-1");

  const authContext = useContext<AuthContextType>(AuthContext);

  const textAreaHandler = (): void => {
    setOpenTextArea(!openTextArea);
  };

  const onChangeHandler = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setNewCommentBody(event.target.value);
  };

  const handleSubmit = (): void => {
    if (!authContext.userInfos) return;

    if (!newCommentBody.trim().length) {
      Swal.fire({
        title: "متن کامنت خالیه!",
        icon: "warning",
        confirmButtonText: "فهمیدم",
      });
    } else if (commentScore === "-1") {
      Swal.fire({
        title: "هنوز امتیاز رو مشخص نکردی!",
        icon: "warning",
        confirmButtonText: "فهمیدم",
      });
    } else {
      submitComment(newCommentBody, commentScore);
      setNewCommentBody("");
      setOpenTextArea(false);
    }
  };

  return (
    <div
      className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-3xl p-7 sm:p-10 mt-12"
      id="course-comments"
    >
      {/* <!-- Comment Head --> */}
      <div className="flex items-start justify-between mb-8">
        <div className="mt-2 sm:mt-0 flex items-center gap-x-3 relative">
          <span className="absolute -right-8 sm:-right-11 block w-1 h-16 bg-sky-600 rounded-r-full shadowLightBlue"></span>
          <div className="hidden md:inline-block ml-1 text-sky-700 dark:text-sky-500 text-7xl">
            <PiChats />
          </div>
          <div className="font-EstedadBold text-3xl md:text-4xl">نظرات</div>
        </div>

        {/* <!-- New Comment Button --> */}
        <button
          className="button-primary hover:  px-8 py-3 sm:py-4 cursor-pointer"
          type="button"
          onClick={() => textAreaHandler()}
        >
          ایجاد نظر جدید
          <div className="text-4xl">
            <PiChatCenteredTextLight />
          </div>
        </button>
      </div>
      {/* <!-- Comment Alert --> */}
      <div
        id="comment-alert"
        className={
          openTextArea
            ? "hidden"
            : " bg-sky-100 text-sky-600 dark:bg-sky-500/10 p-7 rounded-xl text-2xl/10 md:font-EstedadMedium mb-6"
        }
      >
        دانشجوی عزیز؛ سوالات مرتبط به پشتیبانی دوره در قسمت نظرات تایید نخواهد
        شد، لطفا در بخش مشاهده آنلاین هر ویدیو سوالات خود را مطرح کنید.
      </div>
      {/* <!-- Comment Form --> */}
      <div className={openTextArea ? "mb-14" : "hidden"} id="comment-form">
        {authContext.isLoggedIn ? (
          <>
            <div className="flex gap-x-4 mb-8 sm:mb-5">
              <div className="flex-center p-2 border border-gray-100 dark:border-[#333c4c] rounded-full">
                <div className="flex-center w-14 sm:w-16 h-14 sm:h-16 bg-gray-200 dark:bg-[#333c4c] rounded-full">
                  <div className="text-4xl text-gray-300">
                    <LiaUserSolid />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <span className="font-EstedadMedium tracking-wider">
                  Theotherali
                </span>
                <span
                  className="font-EstedadThin text-2xl opacity-70"
                  id="comment-to"
                >
                  ثبت نظر جدید
                </span>
              </div>
            </div>
            <div className="flex items-center gap-x-3 bg-red-500/20 text-white px-6 py-5 rounded-xl mb-5">
              <div className="shrink-0 text-red-400">
                <BsExclamationTriangle className="w-10 h-10" />
              </div>
              <p className="text-[1.4rem]/10 text-red-100">
                لطفا پرسش مربوط به هر درس یا ویدئو دوره را در صفحه همان ویدئو
                مطرح کنید.
              </p>
            </div>
            <textarea
              className="w-full block p-7 md:p-4 bg-gray-200 dark:bg-[#333c4c] text-gray-900 dark:text-white placeholder:text-slate-500/70 font-EstedadMedium text-[1.4rem]/10 rounded-xl rounded-br-sm sm:rounded-xl"
              placeholder="نظر خود را بنویسید ..."
              onChange={onChangeHandler}
              value={newCommentBody}
            />
            <div className="flex items-center justify-between mt-2 sm:mt-6">
              <select
                className="bg-white dark:bg-[#333c4c] py-2 pr-6 rounded-lg text-2xl ml-2"
                onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
                  setCommentScore(event.target.value)
                }
              >
                <option value="-1">امتیاز شما</option>
                <option value="5">عالی</option>
                <option value="4">خیلی خوب</option>
                <option value="3">خوب</option>
                <option value="2">ضعیف</option>
                <option value="1">بد</option>
              </select>
              <div className="flex gap-x-2 *:cursor-pointer">
                <button
                  className="grow sm:grow-0 sm:w-36 button-primary hover:  button-outline py-2"
                  id="comment-cancel-btn"
                  onClick={() => textAreaHandler()}
                >
                  لغو
                </button>
                <button
                  className="grow sm:grow-0 sm:w-36 button-primary hover:  py-2"
                  onClick={() => handleSubmit()}
                >
                  ارسال
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="mb-8 sm:mb-5 text-3xl py-6 px-4 rounded-xl bg-amber-400/20 text-amber-700">
            لطفا ابتدا در سایت{" "}
            {
              <Link className="text-sky-500" to={"/login"}>
                وارد
              </Link>
            }{" "}
            شوید
          </div>
        )}
      </div>
      {/* <!-- Comment List --> */}
      <div className="comments_wrap space-y-7 sm:space-y-6 *:bg-gray-200  dark:*:bg-[#333c4c]">
        {/* <!-- Comments --> */}

        {comments.length === 0 ? (
          <div className="py-6 text-center text-amber-300 rounded-xl">
            هنوز کامنتی برای این دوره ثبت نشده
          </div>
        ) : (
          <>
            {comments.map((comment) => (
              <div
                key={comment._id}
                id="comment-56773"
                className="p-8 md:p-5 rounded-xl"
              >
                <div className="flex items-center justify-between pb-6 mb-6 border-b border-b-gray-300 dark:border-white/10">
                  <div className="flex items-center gap-x-4">
                    <div className="hidden border-2 border-sky-700 sm:flex-center w-20 h-20 rounded-full relative">
                      <div className="absolute -top-0.5 -right-0.5 flex-center w-8 h-8 bg-sky-700 rounded-full">
                        <div className="text-[1.4rem] mb-0.5 mr-0.5">
                          <RiGraduationCapFill />
                        </div>
                      </div>
                      <div className="text-6xl text-sky-700 dark:text-sky-500">
                        <BiUserCircle />
                      </div>
                    </div>
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-x-2 ">
                        <span className="inline-block max-w-40 truncate">
                          {comment.creator?.name}
                        </span>
                        <span className="font-EstedadThin">
                          |
                          {comment.creator?.role === "ADMIN"
                            ? " مدیر"
                            : " دانشجو"}
                        </span>
                      </div>
                      <span className="text-xl opacity-70">
                        {comment.createdAt?.slice(0, 10)}
                      </span>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="flex-center border border-sky-700 dark:border-sky-500 p-3 rounded-full"
                  >
                    <div className="text-3xl text-sky-700 dark:text-sky-400">
                      <HiOutlineArrowUturnLeft />
                    </div>
                  </button>
                </div>
                <p className="font-EstedadLight text-xl/10 sm:text-2xl/10 break-words">
                  {comment.body}
                </p>
                {/* <!-- Replies --> */}
                {comment.answerContent ? (
                  <div className="mt-4 space-y-4">
                    <div
                      id="comment-56733"
                      className="p-7 md:p-5 bg-gray-300 dark:bg-slate-800 rounded-xl"
                    >
                      <div className="flex items-center justify-between pb-6 mb-6 border-b border-b-gray-400/50 dark:border-white/10">
                        <div className="flex items-center gap-x-3.5">
                          <div className="hidden border-2 border-sky-700 sm:flex-center w-20 h-20 rounded-full relative">
                            <div className="absolute -top-0.5 -right-0.5 flex-center w-8 h-8 bg-sky-700 rounded-full">
                              <div className="text-[1.4rem] mb-0.5 mr-0.5">
                                <RiGraduationCapFill />
                              </div>
                            </div>
                            <div className="text-6xl text-sky-700 dark:text-sky-500">
                              <BiUserCircle />
                            </div>
                          </div>
                          <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-x-1">
                              <span className="inline-block max-w-40 truncate">
                                {comment.answerContent.creator.name}
                              </span>
                              <strong className="font-EstedadThin">
                                {comment.answerContent.creator.role === "ADMIN"
                                  ? " مدیر"
                                  : " دانشجو"}
                              </strong>
                            </div>
                            <span className="text-xl opacity-70">
                              {comment.answerContent.createdAt.slice(0, 10)}
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="font-EstedadLight text-xl/10 sm:text-2xl/10 break-words">
                        {comment.answerContent.body}
                      </p>
                    </div>
                  </div>
                ) : null}
              </div>
            ))}
            <button
              data-id="78"
              type="button"
              className="button-primary hover:  w-full sm:w-auto mt-10 mx-auto h-18"
            >
              مشاهده بیشتر
              <div className="text-5xl">
                <GoTriangleDown />
              </div>
            </button>
          </>
        )}
      </div>
      {/* <!-- Load more --> */}
    </div>
  );
};

export default CommentsTextArea;
