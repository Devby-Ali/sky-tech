import React, { useContext, useState } from "react";
import Input from "../../Components/Form/Input";
import Button from "../../Components/Form/Button";
import { useForm } from "../../hooks/useForm";
import AuthContext from "../../context/authContext";
import {
  requiredValidator,
  maxValidator,
  minValidator,
  emailValidator,
} from "../../validators/rules";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import ReCAPTCHA from "react-google-recaptcha";
// import Topbar from "../../Components/Topbar/Topbar";
import { BiLockOpenAlt } from "react-icons/bi";

export default function Login() {
  const navigate = useNavigate();

  const authContext = useContext(AuthContext);

  console.log(authContext);

  const [isGoogleRecaptchaVerify, setIsGoogleRecaptchaVerify] = useState(false);

  const [formState, onInputHandler] = useForm(
    {
      username: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const userLogin = (event) => {
    event.preventDefault();

    const userData = {
      identifier: formState.inputs.username.value,
      password: formState.inputs.password.value,
    };

    fetch(`http://localhost:4000/v1/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => {
        console.log(res);
        if (!res.ok) {
          return res.text().then((text) => {
            throw new Error(text);
          });
        } else {
          return res.json();
        }
      })
      .then((result) => {
        Swal.fire({
          title: "با موفقیت لاگین شدید",
          icon: "success",
          confirmButtonText: "ورود به پنل",
        }).then((value) => {
          navigate("/");
        });
        fetch(`http://localhost:4000/v1/auth/me`, {
          headers: {
            Authorization: `Bearer ${result.accessToken}`,
          },
        })
          .then((res) => res.json())
          .then((userData) => {
            console.log(userData);
            authContext.login(userData, result.accessToken);
          });
        console.log(result);
      })
      .catch((err) => {
        Swal.fire({
          title: "نام کاربری یا رمز اشتباه است!",
          icon: "error",
          confirmButtonText: "تلاش دوباره",
        });
      });
  };

  const onChangeHandler = () => {
    setIsGoogleRecaptchaVerify(true);
  };

  return (
    <>
      {/* <Topbar /> */}
      {/* <Header /> */}

      <section className="relative flex-center h-screen overflow-hidden">
        <div className="container">
          <div className="relative mx-auto flex flex-col items-center w-min">
            <div className="flex items-center flex-col text-sky-600 font-MikhakWoff2one mb-12">
              <Button
                to={"/"}
                className="text-7xl font-bold mb-4 tracking-tight"
              >
                اسکای لرن
              </Button>
              <span className="tracking-[0.5rem]">skylearn.com</span>
            </div>
            <div className="absolute top-20 -right-[7.5rem] text-sky-600">
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
            <div className="flex flex-col items-center text-slate-900 dark:text-white bg-sky-500/20 dark:bg-[#2f3749]/40 backdrop-blur-[4px] px-10 pb-10 pt-8 rounded-3xl w-[33rem] sm:w-[37rem] lg:w-[40rem] z-10">
              <span className="block font-EstedadMedium text-4xl mb-9">
                ورود | login
              </span>
              <div className="flex-center text-[1.7rem] gap-x-2 mb-8">
                <span>حساب کاربری ندارید؟</span>
                <Button
                  className="font-EstedadBold text-sky-700 dark:text-sky-400"
                  to="/register"
                >
                  ثبت نام کنید
                </Button>
              </div>
              <form action="#" className="w-full flex flex-col gap-y-8">
                <div className="h-20 flex items-center justify-between px-4 bg-white dark:bg-[#333c4c] rounded-2xl">
                  <Input
                    id="username"
                    className="bg-transparent outline-hidden"
                    type="text"
                    placeholder="نام کاربری یا آدرس ایمیل"
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
                    id="password"
                    className="bg-transparent outline-hidden"
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
                <div className="mt-2 opacity-40">
                  <ReCAPTCHA
                    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                    onChange={onChangeHandler}
                  />
                </div>
                <Button
                  className={`h-20 rounded-4xl ${
                    formState.isFormValid && isGoogleRecaptchaVerify
                      ? "bg-sky-600/40 hover:bg-sky-600/60"
                      : "bg-[#333c4c]/30"
                  }`}
                  type="submit"
                  onClick={userLogin}
                  disabled={!formState.isFormValid || !isGoogleRecaptchaVerify}
                >
                  <span className="mx-auto">ورود</span>
                </Button>
                <div className="flex justify-between items-center my-3 opacity-60">
                  <label className="flex items-center">
                    <input className="ml-3" type="checkbox" />
                    <span className="text-lg sm:text-xl lg:text-2xl">
                      مرا به خاطر داشته باش
                    </span>
                  </label>
                  <label className="">
                    <Button className="text-lg sm:text-xl lg:text-2xl" href="#">
                      رمز عبور را فراموش کرده اید؟
                    </Button>
                  </label>
                </div>
              </form>
            </div>
            <p className="mt-12 font-EstedadMedium text-center text-slate-900 dark:text-white text-[1.6rem]">
              با عضویت در سایت، تمامی قوانین و شرایط استفاده از خدمات{" "}
              <Button to={"/"} className="text-sky-700 dark:text-sky-400">
                اسکای لرن
              </Button>{" "}
              را پذیرفته اید.
            </p>
          </div>
        </div>
        <div className="absolute top-0 -left-80 2xl:left-0 w-[340px] h-[340px] bg-yellow-500 opacity-30 dark:opacity-15 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 -right-80 2xl:right-0 w-[340px] h-[340px] bg-sky-500 opacity-30 dark:opacity-15 blur-[120px] rounded-full"></div>
      </section>
      {/* <Footer /> */}
    </>
  );
}
