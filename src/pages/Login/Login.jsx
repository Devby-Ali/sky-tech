import React, { useContext, useState } from "react";
import Input from "../../Components/Form/Input";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import Button from "../../Components/Form/Button";
import {
  requiredValidator,
  maxValidator,
  minValidator,
  emailValidator,
} from "../../validators/rules";
import { useForm } from "../../hooks/useForm";
import AuthContext from "../../context/authContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
// import Topbar from "../../Components/Topbar/Topbar";
import { FaRegUser } from "react-icons/fa";
import { BiLockOpenAlt } from "react-icons/bi";
import { FaSignInAlt } from "react-icons/fa";

export default function Login() {
  const navigate = useNavigate();

  const authContext = useContext(AuthContext);
  const [isGoogleRecaptchaVerify, setIsGoogleRecaptchaVerify] = useState(false)

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

  console.log(formState);

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
        authContext.login({}, result.accessToken);
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
    setIsGoogleRecaptchaVerify(true)
  }


  return (
    <>
      {/* <Topbar /> */}
      <Navbar />

      <section className="relative flex justify-center overflow-hidden pt-40">
        <div className="flex flex-col items-center bg-gradient-to-tr from-lightishBlue-500/50 via-emerald-400/10 to-transparent backdrop-blur-[4px]  my-16 p-10 rounded-lg rounded-tl-4xl rounded-br-4xl w-[50rem] border-b-8 border-l-8 border-lightishBlue-500 shadow-lightishBlue-500 shadow-normal">
          <span className="block text-4xl text-zinc-600">
            ورود به حساب کاربری
          </span>
          <span className="block text-2xl text-zinc-500">
            خوشحالیم دوباره میبینیمت دوست عزیز :)
          </span>
          <div className="bg-gray-100 my-6 rounded-md w-full flex-center py-6">
            <span className="text-2xl text-zinc-500">حساب کاربری ندارید؟</span>
            <Button
              className="bg-gray-400 text-gray-600 text-xl mr-3 rounded-md py-1 px-3 hover:bg-emerald-400"
              to="/register"
            >
              ثبت نام
            </Button>
          </div>
          <form action="#" className="w-full">
            <div className="relative">
              <Input
                id="username"
                className="w-full py-3 px-4 shadow-normal my-2 rounded-md text-2xl outline-none"
                type="text"
                placeholder="نام کاربری یا آدرس ایمیل"
                validations={[
                  requiredValidator(),
                  minValidator(8),
                  maxValidator(20),
                ]}
                onInputHandler={onInputHandler}
              />
              <FaRegUser className="absolute left-6 top-7 text-4xl text-gray-300" />
            </div>
            <div className="relative">
              <Input
                id="password"
                className="w-full py-3 px-4 shadow-normal my-2 rounded-md text-2xl outline-none"
                type="text"
                placeholder="رمز عبور"
                validations={[
                  requiredValidator(),
                  minValidator(8),
                  maxValidator(18),
                ]}
                onInputHandler={onInputHandler}
              />
              <BiLockOpenAlt className="absolute left-4.5 top-5 text-5xl text-gray-300" />
            </div>
            <div className="mt-2">
            <ReCAPTCHA sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" onChange={onChangeHandler} />
            </div>
            <Button
              className={`relative w-full border-none rounded-md py-3 mt-3 flex items-center ${
                (formState.isFormValid && isGoogleRecaptchaVerify) ? "bg-blue-500" : "bg-slate-500"
              }`}
              type="submit"
              onClick={userLogin}
              disabled={(!formState.isFormValid || !isGoogleRecaptchaVerify)}
            >
              <FaSignInAlt className="absolute right-4 text-3xl text-white" />
              <span className="text-white mx-auto">ورود</span>
            </Button>
            <div className="flex justify-between items-center my-4">
              <label className="flex items-center">
                <input className="ml-4" type="checkbox" />
                <span className="text-2xl text-zinc-500">
                  مرا به خاطر داشته باش
                </span>
              </label>
              <label className="">
                <Button
                  className="text-2xl text-zinc-500"
                  href="#"
                  onClick={userLogin}
                >
                  رمز عبور را فراموش کرده اید؟
                </Button>
              </label>
            </div>
          </form>
          <div className="mt-12 w-full text-xl text-zinc-500">
            <span className="">سلام کاربر محترم:</span>
            <ul className="mt-4 mr-8 list-disc">
              <li className="">
                لطفا از مرورگر های مطمئن و بروز مانند گوگل کروم و فایرفاکس
                استفاده کنید.
              </li>
              <li className="">
                ما هرگز اطلاعات محرمانه شمارا از طریق ایمیل درخواست نمیکنیم.
              </li>
              <li className="">
                لطفا کلمه عبور خود را در فواصل زمانی کوتاه تغییر دهید.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
