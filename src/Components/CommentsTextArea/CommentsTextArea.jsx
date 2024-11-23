import React, { useState } from "react";
import { BiUserCircle } from "react-icons/bi";
import { BsExclamationTriangle } from "react-icons/bs";
import { GoTriangleDown } from "react-icons/go";
import { HiOutlineArrowUturnLeft } from "react-icons/hi2";
import { LiaUserSolid } from "react-icons/lia";
import { PiChatCenteredTextLight, PiChats } from "react-icons/pi";
import { RiGraduationCapFill } from "react-icons/ri";

export default function CommentsTextArea() {
  
  const [openTextArea, setOpenTextArea] = useState(false);

  const textAreaHandler = () => {
    setOpenTextArea(true);
    console.log(openTextArea);
  };

  return (
    <div
      className="bg-white dark:bg-darkBox text-darkColor dark:text-white rounded-3xl p-7 sm:p-10 mt-12"
      id="course-comments"
    >
      {/* <!-- Comment Head --> */}
      <div className="flex items-start justify-between mb-8">
        <div className="mt-2 sm:mt-0 flex items-center gap-x-3 relative">
          <span className="absolute -right-8 sm:-right-11 block w-1 h-16 bg-light-blue-600 rounded-r-full shadowLightBlue"></span>
          <div className="hidden md:inline-block ml-1 text-light-blue-700 dark:text-light-blue-500 text-7xl">
            <PiChats />
          </div>
          <div className="font-EstedadBold text-3xl md:text-4xl">نظرات</div>
        </div>

        {/* <!-- New Comment Button --> */}
        <button
          className="button-primary px-8 py-3 sm:py-4"
          type="button"
          id="comment-create-btn"
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
            : " bg-light-blue-100 text-light-blue-600 dark:bg-light-blue-500/10 p-7 rounded-xl text-2xl/10 md:font-EstedadMedium mb-6"
        }
      >
        دانشجوی عزیز؛ سوالات مرتبط به پشتیبانی دوره در قسمت نظرات تایید نخواهد
        شد، لطفا در بخش مشاهده آنلاین هر ویدیو سوالات خود را مطرح کنید.
      </div>
      {/* <!-- Comment Form --> */}
      <div className={openTextArea ? "mb-14" : "hidden"} id="comment-form">
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
        <input type="hidden" value="" id="comment-id" />
        <input type="hidden" value="" id="comment-is-reply" />
        <div className="flex items-center gap-x-3 bg-red-500/20 text-white px-6 py-5 rounded-xl mb-5">
          <div className="shrink-0 text-red-400">
            <BsExclamationTriangle className="w-10 h-10" />
          </div>
          <p className="text-[1.4rem]/10 text-red-100">
            لطفا پرسش مربوط به هر درس یا ویدئو دوره را در صفحه همان ویدئو مطرح
            کنید.
          </p>
        </div>
        <textarea
          rows="6"
          id="comment-textarea"
          className="w-full block p-7 md:p-4 bg-gray-200 dark:bg-[#333c4c] text-gray-900 dark:text-white placeholder:text-slate-500/70 font-EstedadMedium text-[1.4rem]/10 rounded-xl rounded-br-sm sm:rounded-xl"
          placeholder="نظر خود را بنویسید ..."
        ></textarea>
        <div className="flex gap-x-2 justify-end mt-2 sm:mt-6">
          <button
            className="flex-grow sm:grow-0 sm:w-36 button-primary button-outline rounded-br-[3rem] rounded-l-sm rounded-tr-sm sm:rounded-sm sm:rounded-tr-4xl"
            id="comment-cancel-btn"
          >
            لغو
          </button>
          <button
            className="flex-grow sm:grow-0 sm:w-36 button-primary rounded-bl-2xl rounded-tl-sm rounded-r-sm sm:rounded-sm sm:rounded-bl-4xl"
            id="comment-submit-btn"
          >
            ارسال
          </button>
        </div>
      </div>
      {/* <!-- Comment List --> */}
      <div className="comments_wrap space-y-7 sm:space-y-6 child:bg-gray-200  dark:child:bg-[#333c4c]">
        {/* <!-- Comments --> */}
        <div id="comment-56773" className="p-8 md:p-5 rounded-xl">
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-b-gray-300 dark:border-white/10">
            <div className="flex items-center gap-x-4">
              <div className="hidden border-2 border-light-blue-700 sm:flex-center w-20 h-20 rounded-full relative">
                <div className="absolute -top-0.5 -right-0.5 flex-center w-8 h-8 bg-light-blue-700 rounded-full">
                  <div className="text-[1.4rem] mb-0.5 mr-0.5">
                    <RiGraduationCapFill />
                  </div>
                </div>
                <div className="text-6xl text-light-blue-700 dark:text-light-blue-500">
                  <BiUserCircle />
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-x-1 ">
                  <span className="inline-block max-w-40 truncate">
                    Alirezzaa
                  </span>
                  <span className="font-EstedadThin">| دانشجو</span>
                </div>
                <span className="text-xl opacity-70">1403/08/07</span>
              </div>
            </div>
            <button
              type="button"
              className="flex-center border border-light-blue-700 dark:border-light-blue-500 p-3 rounded-full"
            >
              <div className="text-3xl text-light-blue-700 dark:text-light-blue-400">
                <HiOutlineArrowUturnLeft />
              </div>
            </button>
          </div>
          <p className="font-EstedadLight text-xl/10 sm:text-2xl/10 break-words">
            سلام ممنونم از دوره عالیتون🙏
          </p>
          {/* <!-- Replies --> */}
        </div>
        <div id="comment-56731" className="p-8 md:p-5 rounded-xl">
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-b-gray-300 dark:border-white/10">
            <div className="flex items-center gap-x-4">
              <div className="hidden border-2 border-light-blue-700 sm:flex-center w-20 h-20 rounded-full relative">
                <div className="absolute -top-0.5 -right-0.5 flex-center w-8 h-8 bg-light-blue-700 rounded-full">
                  <div className="text-[1.4rem] mb-0.5 mr-0.5">
                    <RiGraduationCapFill />
                  </div>
                </div>
                <div className="text-6xl text-light-blue-700 dark:text-light-blue-500">
                  <BiUserCircle />
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-x-1 ">
                  <span className="inline-block max-w-40 truncate">
                    arashk ashkani
                  </span>
                  <span className="font-EstedadThin">| دانشجو</span>
                </div>
                <span className="text-xl opacity-70">1403/08/05</span>
              </div>
            </div>
            <button
              type="button"
              className="flex-center border border-light-blue-700 dark:border-light-blue-500 p-3 rounded-full"
            >
              <div className="text-3xl text-light-blue-700 dark:text-light-blue-400">
                <HiOutlineArrowUturnLeft />
              </div>
            </button>
          </div>
          <p className="font-EstedadLight text-xl/10 sm:text-2xl/10 break-words">
            دوره خوب بود ولی کامل نبود متاسفانه. مباحث لینک کردن به پروژه وجود
            نداشت
          </p>
          {/* <!-- Replies --> */}
          <div className="mt-4 space-y-4">
            <div
              id="comment-56733"
              className="p-7 md:p-5 bg-gray-300 dark:bg-darkBox rounded-xl"
            >
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-b-gray-400/50 dark:border-white/10">
                <div className="flex items-center gap-x-3.5">
                  <div className="hidden border-2 border-light-blue-700 sm:flex-center w-20 h-20 rounded-full relative">
                    <div className="absolute -top-0.5 -right-0.5 flex-center w-8 h-8 bg-light-blue-700 rounded-full">
                      <div className="text-[1.4rem] mb-0.5 mr-0.5">
                        <RiGraduationCapFill />
                      </div>
                    </div>
                    <div className="text-6xl text-light-blue-700 dark:text-light-blue-500">
                      <BiUserCircle />
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-x-1">
                      <span className="inline-block max-w-40 truncate">
                        محمدامین سعیدی راد
                      </span>
                      <strong className="font-EstedadThin">| مدرس</strong>
                    </div>
                    <span className="text-xl opacity-70">1403/08/05</span>
                  </div>
                </div>
              </div>
              <p className="font-EstedadLight text-xl/10 sm:text-2xl/10 break-words">
                سلام آرش جان.
                <br />
                منظورتون از لینک کردن به پروژه چیه؟
              </p>
            </div>
          </div>
        </div>
        <div id="comment-56639" className="p-8 md:p-5 rounded-xl">
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-b-gray-300 dark:border-white/10">
            <div className="flex items-center gap-x-4">
              <div className="hidden border-2 border-light-blue-700 sm:flex-center w-20 h-20 rounded-full relative">
                <div className="absolute -top-0.5 -right-0.5 flex-center w-8 h-8 bg-light-blue-700 rounded-full">
                  <div className="text-[1.4rem] mb-0.5 mr-0.5">
                    <RiGraduationCapFill />
                  </div>
                </div>
                <div className="text-6xl text-light-blue-700 dark:text-light-blue-500">
                  <BiUserCircle />
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-x-1 ">
                  <span className="inline-block max-w-40 truncate">
                    zahra_0901
                  </span>
                  <span className="font-EstedadThin">| دانشجو</span>
                </div>
                <span className="text-xl opacity-70">1403/07/26</span>
              </div>
            </div>
            <button
              type="button"
              className="flex-center border border-light-blue-700 dark:border-light-blue-500 p-3 rounded-full"
            >
              <div className="text-3xl text-light-blue-700 dark:text-light-blue-400">
                <HiOutlineArrowUturnLeft />
              </div>
            </button>
          </div>
          <p className="font-EstedadLight text-xl/10 sm:text-2xl/10 break-words">
            باسلام خدمتت تیم فوق العاده اسکای لرن و استاد سعیدی راد خیلی خیلی
            عالی بود، واقعا آدم وقتی آموزش های اسکای لرن رو آقای راد رو میبینه
            از کیفیت آموزش لذت میبره ، تشکر فراوان بابت زحماتتون🌹🌹🌹🌹
          </p>
          {/* <!-- Replies --> */}
        </div>
        <div id="comment-56446" className="p-8 md:p-5 rounded-xl">
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-b-gray-300 dark:border-white/10">
            <div className="flex items-center gap-x-4">
              <div className="hidden border-2 border-light-blue-700 sm:flex-center w-20 h-20 rounded-full relative">
                <div className="absolute -top-0.5 -right-0.5 flex-center w-8 h-8 bg-light-blue-700 rounded-full">
                  <div className="text-[1.4rem] mb-0.5 mr-0.5">
                    <RiGraduationCapFill />
                  </div>
                </div>
                <div className="text-6xl text-light-blue-700 dark:text-light-blue-500">
                  <BiUserCircle />
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-x-1 ">
                  <span className="inline-block max-w-40 truncate">SIPAN</span>
                  <span className="font-EstedadThin">| دانشجو</span>
                </div>
                <span className="text-xl opacity-70">1403/07/11</span>
              </div>
            </div>
            <button
              type="button"
              className="flex-center border border-light-blue-700 dark:border-light-blue-500 p-3 rounded-full"
            >
              <div className="text-3xl text-light-blue-700 dark:text-light-blue-400">
                <HiOutlineArrowUturnLeft />
              </div>
            </button>
          </div>
          <p className="font-EstedadLight text-xl/10 sm:text-2xl/10 break-words">
            بسیار عالی . کاربردی 👌
          </p>
          {/* <!-- Replies --> */}
        </div>
        <div id="comment-55916" className="p-8 md:p-5 rounded-xl">
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-b-gray-300 dark:border-white/10">
            <div className="flex items-center gap-x-4">
              <div className="hidden border-2 border-light-blue-700 sm:flex-center w-20 h-20 rounded-full relative">
                <div className="absolute -top-0.5 -right-0.5 flex-center w-8 h-8 bg-light-blue-700 rounded-full">
                  <div className="text-[1.4rem] mb-0.5 mr-0.5">
                    <RiGraduationCapFill />
                  </div>
                </div>
                <div className="text-6xl text-light-blue-700 dark:text-light-blue-500">
                  <BiUserCircle />
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-x-1 ">
                  <span className="inline-block max-w-40 truncate">
                    Ernesto
                  </span>
                  <span className="font-EstedadThin">| دانشجو</span>
                </div>
                <span className="text-xl opacity-70">1403/06/08</span>
              </div>
            </div>
            <button
              type="button"
              className="flex-center border border-light-blue-700 dark:border-light-blue-500 p-3 rounded-full"
            >
              <div className="text-3xl text-light-blue-700 dark:text-light-blue-400">
                <HiOutlineArrowUturnLeft />
              </div>
            </button>
          </div>
          <p className="font-EstedadLight text-xl/10 sm:text-2xl/10 break-words">
            مثل همیشه ،آقای سعیدی راد عالی هستی و پرطرفدار
          </p>
          {/* <!-- Replies --> */}
        </div>
      </div>
      {/* <!-- Load more --> */}
      <button
        data-id="78"
        type="button"
        className="button-primary w-full sm:w-auto mt-10 mx-auto"
      >
        مشاهده بیشتر
        <div className="text-5xl">
          <GoTriangleDown />
        </div>
      </button>
    </div>
  );
}

// <div className="flex flex-col">
// <span className="text-xl text-slate-700">دیدگاهتان را بنویسید</span>
// <span className="my-6 text-2xl">
//   <a href="#">با عنوان محمدامین سعیدی راد وارد شده اید.</a>
//   <a href="#">خارج میشوید? </a>
//   بخش های موردنیاز علامت گذاری شده اند *
// </span>
// <div className="flex flex-col">
//   <span className="text-2xl text-zinc-600">دیدگاه *</span>
//   <textarea className="h-72 rounded-lg border border-red-600 shadow-normal"></textarea>
// </div>
// <button type="submit" className="mt-8 max-w-60 py-3 px-7 bg-cyan-600 text-white border-none rounded-lg text-2xl mb-12" onClick={() => console.log('کامنت ثبت شد')}>
//   فرستادن دیدگاه
// </button>
// </div>
