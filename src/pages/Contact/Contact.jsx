import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Input from "../../Components/Form/Input";
import Button from "../../Components/Form/Button";
import {
  requiredValidator,
  maxValidator,
  minValidator,
  emailValidator,
  mobileNumberValidator,
} from "../../validators/rules";
import { HiOutlinePhone, HiOutlineUser } from "react-icons/hi2";
import { FiMail } from "react-icons/fi";
import { useForm } from "../../hooks/useForm";

export default function Contact() {
  const [formState, onInputHandler] = useForm(
    {
      name: {
        value: "",
        isValid: false,
      },
      email: {
        value: "",
        isValid: false,
      },
      mobileNumber: {
        value: "",
        isValid: false,
      },
      body: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const addNewContact = () => {
    console.log("درخواست شما برای مدیران ثبت شد");
  };

  return (
    <>
      <Navbar />

      <section className="relative flex-center overflow-hidden -mb-40 sm:-mb-60 pt-14 lg:pt-60 2xl:pt-72 pb-24">
        <div className="container">
          <div className="relative mx-auto flex flex-col items-center w-min">
            <div className="flex items-center flex-col text-light-blue-600 font-MikhakWoff2one mb-12">
              <Button
                to={"/"}
                className="text-7xl font-bold mb-4 tracking-tight"
              >
                اسکای لرن
              </Button>
              <span className="tracking-[0.5rem]">skylearn.com</span>
            </div>
            <div className="absolute top-20 -right-[7.5rem] text-light-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="150"
                height="150"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="icon icon-tabler icons-tabler-outline icon-tabler-brand-my-oppo"
                viewBox="0 0 24 24"
              >
                <path stroke="none" d="M0 0h24v24H0z"></path>
                <path d="M18.316 5H5.684L2.266 9.019a1.09 1.09 0 0 0 .019 1.447L11.999 21l9.715-10.49a1.09 1.09 0 0 0 .024-1.444z"></path>
                <path d="m9 11 3 3 3-3"></path>
              </svg>
            </div>
            <div className="flex flex-col items-center text-darkColor dark:text-white bg-light-blue-500/20 dark:bg-[#2f3749]/40 backdrop-blur-[4px] px-10 pb-10 pt-8 rounded-3xl w-[33rem] sm:w-[37rem] lg:w-[40rem] z-10">
              <span className="block font-EstedadMedium text-4xl mb-9">
                تماس با ما
              </span>
              <div className="flex-center text-3xl gap-x-2 mb-8 font-EstedadThin">
                <span>نظر یا انتقادتو بنویس برامون</span>

              </div>
              <form action="#" className="w-full flex flex-col gap-y-8">
                <div className="h-20 flex items-center justify-between px-4 bg-white dark:bg-[#333c4c] rounded-2xl">
                  <Input
                    id="name"
                    className="bg-transparent outline-none"
                    type="text"
                    placeholder="نام و نام خانوادگی"
                    validations={[
                      requiredValidator(),
                      minValidator(3),
                      maxValidator(20),
                    ]}
                    onInputHandler={onInputHandler}
                  />
                  <HiOutlineUser className="w-10 h-10 opacity-50" />
                </div>
                <div className="h-20 flex items-center justify-between px-4 bg-white dark:bg-[#333c4c] rounded-2xl">
                  <Input
                    id="email"
                    className="bg-transparent outline-none"
                    type="email"
                    placeholder="آدرس ایمیل"
                    validations={[
                      requiredValidator(),
                      minValidator(8),
                      maxValidator(40),
                      emailValidator(),
                    ]}
                    onInputHandler={onInputHandler}
                  />
                  <FiMail className="w-9 h-9 opacity-50" />
                </div>
                <div className="h-20 flex items-center justify-between px-4 bg-white dark:bg-[#333c4c] rounded-2xl">
                  <Input
                    id="mobileNumber"
                    className="bg-transparent outline-none text-right"
                    type="tel"
                    placeholder="شماره موبایل"
                    validations={[requiredValidator(), mobileNumberValidator()]}
                    onInputHandler={onInputHandler}
                  />
                  <HiOutlinePhone className="w-10 h-10 opacity-50" />
                </div>
                <div className="w-full pr-4 pt-4 bg-white dark:bg-[#333c4c] rounded-2xl rounded-bl-none">
                  <Input
                    element="textarea"
                    id="body"
                    className="bg-transparent outline-none w-full"
                    type="text"
                    placeholder="متن خود را وارد کنید"
                    validations={[
                      requiredValidator(),
                      minValidator(10),
                    ]}
                    onInputHandler={onInputHandler}
                  />
                </div>
                <Button
                  className={`h-20 rounded-4xl ${
                    formState.isFormValid
                      ? "bg-light-blue-600/40 hover:bg-light-blue-600/60"
                      : "bg-[#333c4c]/30"
                  }`}
                  type="submit"
                  onClick={addNewContact}
                  disabled={!formState.isFormValid}
                >
                  <span className="mx-auto">ارسال</span>
                </Button>
              </form>
            </div>
          </div>
        </div>
        <div className="absolute top-0 -left-80 2xl:left-0 w-[340px] h-[340px] bg-yellow-500 opacity-30 dark:opacity-15 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 -right-80 2xl:right-0 w-[340px] h-[340px] bg-light-blue-500 opacity-30 dark:opacity-15 blur-[120px] rounded-full"></div>
      </section>

      <Footer />
    </>
  );
}
