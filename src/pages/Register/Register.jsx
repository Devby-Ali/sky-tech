import React, { useContext } from "react";
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
// import Topbar from "../../Components/Topbar/Topbar";
import { FaRegUser } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { BiLockOpenAlt } from "react-icons/bi";
import { FiUserPlus } from "react-icons/fi";

export default function Register() {

  const authContext = useContext(AuthContext)
  console.log(authContext)

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
    },
    false
  );

  console.log(formState);

  const registerUser = (event) => {
    event.preventDefault();

    const newUserInfo = {
      name: formState.inputs.name.value,
      username: formState.inputs.username.value,
      email: formState.inputs.email.value,
      password: formState.inputs.password.value,
      confirmPassword: formState.inputs.password.value,
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
        console.log(result.accessToken);
        authContext.login(result.user, result.accessToken)
      });

    console.log("User Login");
  };

  return (
    <>
      {/* <Topbar /> */}
      <Navbar />

      <section className="relative flex justify-center overflow-hidden pt-40">
        <div className="flex flex-col items-center bg-gradient-to-tr from-lightishBlue-500/50 via-emerald-400/10 to-transparent backdrop-blur-[4px]  my-16 p-10 rounded-lg rounded-tl-4xl rounded-br-4xl w-[50rem] border-b-8 border-l-8 border-lightishBlue-500 shadow-lightishBlue-500 shadow-normal">
          <span className="block text-4xl text-zinc-600">ساخت حساب کاربری</span>
          <span className="block text-2xl text-zinc-500">
            خوشحالیم قراره به جمع ما بپیوندی
          </span>
          <div className="bg-gray-100 my-6 rounded-md w-full flex-center py-6">
            <span className="text-2xl text-zinc-500">
              قبلا ثبت‌نام کرده‌اید؟{" "}
            </span>
            <Button
              className="bg-gray-400 text-white text-xl mr-3 rounded-md py-1 px-3 hover:bg-emerald-400"
              to="/login"
            >
              وارد شوید
            </Button>
          </div>
          <form action="#" className="w-full">
            <div className="relative">
              <Input
                id="name"
                className="w-full py-3 px-4 shadow-normal my-2 rounded-md text-2xl outline-none"
                type="text"
                placeholder="نام مستعار"
                validations={[
                  requiredValidator(),
                  minValidator(3),
                  maxValidator(20),
                ]}
                onInputHandler={onInputHandler}
              />
              <Input
                id="username"
                className="w-full py-3 px-4 shadow-normal my-2 rounded-md text-2xl outline-none"
                type="text"
                placeholder="نام کاربری"
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
                id="email"
                className="w-full py-3 px-4 shadow-normal my-2 rounded-md text-2xl outline-none"
                type="email"
                placeholder="آدرس ایمیل"
                validations={[
                  requiredValidator(),
                  maxValidator(25),
                  emailValidator(),
                ]}
                onInputHandler={onInputHandler}
              />
              <FiMail className="absolute left-5 top-7 text-4xl text-gray-300" />
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
              <BiLockOpenAlt className="absolute left-5 top-7 text-4xl text-gray-300" />
            </div>
            <Button
              className={`relative w-full border-none rounded-md py-3 mt-3 flex items-center ${
                formState.isFormValid ? "bg-blue-500" : "bg-slate-500"
              }`}
              type="submit"
              onClick={registerUser}
              disabled={!formState.isFormValid}
            >
              <FiUserPlus className="absolute right-4 text-4xl text-white" />
              <span className="text-white mx-auto">عضویت</span>
            </Button>
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
