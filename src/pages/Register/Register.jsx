import React, { useContext } from "react";
import Input from "../../Components/Form/Input";
import Button from "../../Components/Form/Button";
import { useForm } from "../../hooks/useForm";
import AuthContext from "../../context/authContext";
import {
  requiredValidator,
  maxValidator,
  minValidator,
  emailValidator,
  mobileNumberValidator,
} from "../../validators/rules";
import { HiOutlinePhone, HiOutlineUser } from "react-icons/hi2";
import { FiMail } from "react-icons/fi";
import { BiLockOpenAlt } from "react-icons/bi";
import { Link } from "react-router-dom";



export default function Register() {

  const authContext = useContext(AuthContext);
  console.log(authContext);

  const [formState, onInputHandler] = useForm(
    {
      name: {
        value: "",
        isValid: false,
      },
      username: {
        value: "",
        isValid: false,
      },
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
      mobileNumber: {
        value: "",
        isValid: false,
      }
    },
    false
  );

  console.log(formState);

  const registerUser = (event) => {
    event.preventDefault();

    const newUserInfo = {
      username: formState.inputs.username.value,
      email: formState.inputs.email.value,
      password: formState.inputs.password.value,
      confirmPassword: formState.inputs.password.value,
      name: formState.inputs.name.value,
      phone: formState.inputs.mobileNumber.value,
    };

    fetch(`http://localhost:4000/v1/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUserInfo),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result, result.accessToken);
        authContext.login(result.user, result.accessToken);
      });

    console.log("User Register");
  };

  return (
    <>
      {/* <Topbar /> */}
      {/* <Navbar /> */}
      <section className="relative flex-center h-screen overflow-hidden">
        <div className="container">
          <div className="relative mx-auto flex flex-col items-center w-min">
            <div className="flex items-center flex-col text-light-blue-600 font-MikhakWoff2one mb-12">
              <Link
                to={"/"}
                className="text-7xl font-bold mb-4 tracking-tight"
              >
                اسکای لرن
              </Link>
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
                عضویت
              </span>
              <div className="flex-center text-[1.7rem] gap-x-2 mb-8">
                <span>قبلا ثبت‌نام کرده‌اید؟ </span>
                <Button
                  className="font-EstedadBold text-light-blue-700 dark:text-light-blue-400"
                  to="/login"
                >
                  وارد شوید
                </Button>
              </div>
              <form action="#" className="w-full flex flex-col gap-y-8">
                <div className="h-20 flex items-center justify-between px-4 bg-white dark:bg-[#333c4c] rounded-2xl">
                  <Input
                    id="name"
                    className="bg-transparent outline-none"
                    type="text"
                    placeholder="نام مستعار"
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
                    id="username"
                    className="bg-transparent outline-none"
                    type="text"
                    placeholder="نام کاربری"
                    validations={[
                      requiredValidator(),
                      minValidator(8),
                      maxValidator(20),
                    ]}
                    onInputHandler={onInputHandler}
                  />
                  <span className="text-[2rem] opacity-50">@</span>
                </div>
                <div className="h-20 flex items-center justify-between px-4 bg-white dark:bg-[#333c4c] rounded-2xl">
                  <Input
                    id="email"
                    className="bg-transparent outline-none"
                    type="email"
                    placeholder="آدرس ایمیل"
                    validations={[
                      requiredValidator(),
                      maxValidator(25),
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
                    validations={[
                      requiredValidator(),
                      mobileNumberValidator()
                    ]}
                    onInputHandler={onInputHandler}
                  />
                  <HiOutlinePhone className="w-10 h-10 opacity-50" />
                </div>
                <div className="h-20 flex items-center justify-between px-4 bg-white dark:bg-[#333c4c] rounded-2xl">
                  <Input
                    id="password"
                    className="bg-transparent outline-none"
                    type="text"
                    placeholder="رمز عبور"
                    validations={[
                      requiredValidator(),
                      minValidator(8),
                      maxValidator(18),
                    ]}
                    onInputHandler={onInputHandler}
                  />
                  <BiLockOpenAlt className="w-10 h-10 opacity-50" />
                </div>
                <Button
                  className={`h-20 rounded-4xl ${
                    formState.isFormValid
                      ? "bg-light-blue-600/40 hover:bg-light-blue-600/60"
                      : "bg-[#333c4c]/30"
                  }`}
                  type="submit"
                  onClick={registerUser}
                  disabled={!formState.isFormValid}
                >
                  <span className="mx-auto">ادامه</span>
                </Button>
              </form>
            </div>
            <p className="mt-12 font-EstedadMedium text-center text-darkColor dark:text-white text-[1.6rem]">
              با عضویت در سایت، تمامی قوانین و شرایط استفاده از خدمات{" "}
              <Button
                to={"/"}
                className="text-light-blue-700 dark:text-light-blue-400"
              >
                اسکای لرن
              </Button>{" "}
              را پذیرفته اید.
            </p>
          </div>
        </div>
        <div className="absolute top-0 -left-80 2xl:left-0 w-[340px] h-[340px] bg-yellow-500 opacity-30 dark:opacity-15 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 -right-80 2xl:right-0 w-[340px] h-[340px] bg-light-blue-500 opacity-30 dark:opacity-15 blur-[120px] rounded-full"></div>
      </section>
    </>
  );
}
