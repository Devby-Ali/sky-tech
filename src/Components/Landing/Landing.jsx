import React, { useContext, useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import { FaSearch } from "react-icons/fa";
import LandingCounter from "../LandingCounter/LandingCounter";
import Input from "../Form/Input";
import { useForm } from "../../hooks/useForm";
import Button from "../Form/Button";
import { Link, useNavigate, useParams } from "react-router-dom";
import { requiredValidator } from "../../validators/rules";
import {
  HiBars3,
  HiChevronDown,
  HiChevronLeft,
  HiChevronRight,
  HiOutlineArrowLeftEndOnRectangle,
  HiOutlineChatBubbleLeftEllipsis,
  HiOutlineFolder,
  HiOutlineHome,
  HiOutlineMoon,
  HiOutlineShoppingBag,
  HiOutlineSun,
  HiOutlineUser,
  HiPower,
} from "react-icons/hi2";
import Swal from "sweetalert2";
import AuthContext from "../../context/authContext";
import { GrUserAdmin } from "react-icons/gr";

export default function Landing({ info }) {
  const [dark, setDark] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [openCollapse, setOpenCollapse] = useState(false);
  const [overlay, setOverlay] = useState(false);
  const [allMenus, setAllMenus] = useState([]);

  const [formState, onInputHandler] = useForm(
    {
      search: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const categoryName = useParams();

  const logoutUser = () => {
    Swal.fire({
      title: "مطمعنی میخوای از سیستم خارج بشی؟",
      icon: "warning",
      confirmButtonText: "آره",
      showDenyButton: true,
      denyButtonText: "نه",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "با موفقیت logout شدید",
          icon: "success",
          confirmButtonText: "OK",
        }).then(() => {
          authContext.logout();
          navigate("/");
        });
      }
    });
  };

  const themeHandler = () => {
    if (localStorage.theme === "dark") {
      setDark(false);
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    } else {
      setDark(true);
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  const toggleOpen = () => {
    setOpenCollapse((cur) => !cur);
    setOverlay(!overlay);
  };

  const overlayOnClick = () => {
    setNavOpen(false);
    setOpenCollapse(false);
    setOverlay(false);
  };

  const navOpenHandler = () => {
    setNavOpen(!navOpen);
    setOverlay(!overlay);
  };

  const authContext = useContext(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:4000/v1/menus`)
      .then((res) => res.json())
      .then((menus) => {
        setAllMenus(menus);
      });
    console.log(authContext);
  }, []);

  const navigate = useNavigate();

  const search = (event) => {
    event.preventDefault();
    navigate(`search/${formState.inputs.search.value}`);
  };

  return (
    <section className="relative bg-landing pb-28 xl:pb-24  2xl:pb-48 overflow-hidden mb-14 sm:mb-36 lg:mb-48">
      <div
        className={`nav fixed top-0 bottom-0 w-[263px] min-h-screen px-9 bg-white dark:bg-darkColor overflow-y-auto transition-all z-50 lg:hidden ${
          navOpen ? "right-0" : "-right-[263px]"
        }`}
      >
        <div className="flex items-center text-[1.7rem] justify-between gap-x-4 h-20 mb-3 text-darkColor dark:text-white px-1 pt-16 pb-14">
          {authContext.userInfos.name ? (
            <span className="mr-3">{authContext.userInfos.name}</span>
          ) : (
            <Link
              to={"/login"}
              className="text-3xl text-light-blue-600 dark:text-light-blue-400 mr-3"
            >
              ورود/ثبت نام
            </Link>
          )}

          <div
            className="flex-center p-4 rounded-xl text-3xl cursor-pointer bg-blue-gray-50 dark:bg-white/5"
            onClick={navOpenHandler}
          >
            <HiChevronRight />
          </div>
        </div>
        <div className="w-full h-px bg-gray-300 dark:bg-white/10"></div>
        <ul className="child:transition-all px-3 *:pr-2.5 space-y-9 mt-8 mb-6 text-2xl text-darkColor dark:text-white border-b-darkBox/30">
          {authContext.userInfos.role === "ADMIN" && (
            <li>
              <Link
                className="flex items-center justify-between hover:text-light-blue-500"
                to="/p-admin"
              >
                <span>پنل مدیریت</span>
                <HiChevronRight className="text-2xl rotate-180" />
              </Link>
            </li>
          )}
          <li>
            <Link
              className="flex items-center justify-between hover:text-light-blue-500"
              to="/my-account"
            >
              <span>پیشخوان</span>
              <HiChevronRight className="text-2xl rotate-180" />
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center justify-between hover:text-light-blue-500"
              to="/my-account/buyed"
            >
              <span>دوره های من</span>
              <HiChevronRight className="text-2xl rotate-180" />
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center justify-between hover:text-light-blue-500"
              to="/my-account/tickets"
            >
              <span>تیکت های من</span>
              <HiChevronRight className="text-2xl rotate-180" />
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center justify-between hover:text-light-blue-500"
              to="/my-account/edit-account"
            >
              <span>جزئیات حساب</span>
              <HiChevronRight className="text-2xl rotate-180" />
            </Link>
          </li>
        </ul>
        <div className="w-full h-px bg-gray-300 dark:bg-white/10"></div>
        <ul className="child:transition-all px-3 *:pr-2.5 space-y-2 my-4 text-2xl text-darkColor dark:text-white border-b-darkBox/30">
          {allMenus.map((menu) => (
            <li key={menu._id}>
              <Link
                to={`/category-info/${menu.href}/1`}
                className={`flex items-center justify-between py-3 -mx-5 px-5 rounded-md hover:bg-light-blue-400/80 dark:hover:bg-light-blue-900 ${
                  categoryName["categoryName"] === menu.href &&
                  "bg-light-blue-400/50 dark:bg-light-blue-900/70"
                }`}
              >
                <span>{menu.title}</span>
                <HiChevronRight className="text-2xl rotate-180" />
              </Link>
            </li>
          ))}
        </ul>
        <div className="w-full h-px bg-gray-300 dark:bg-white/10"></div>
        <div
          className="px-4 py-6 toggle-theme text-darkColor dark:text-white text-2xl cursor-pointer"
          onClick={() => themeHandler()}
        >
          <span className="hidden dark:flex items-center gap-x-3">
            <HiOutlineSun className="text-4xl" />
            تم روشن
          </span>
          <span className="flex items-center gap-x-3 dark:hidden">
            <HiOutlineMoon className="text-4xl" />
            تم تیره
          </span>
        </div>
      </div>

      <header className="lg:container md:flex justify-between items-center w-full md:mx-auto mb-24 xl:mb-16 2xl:mb-36">
        <div className="w-full h-full">
          <div className="h-full flex items-center justify-between px-12 py-4 md:py-8">
            <div
              className="md:hidden flex-center p-4 text-white cursor-pointer text-5xl"
              onClick={navOpenHandler}
            >
              <HiBars3 />
            </div>

            <div className="flex gap-x-8 xl:gap-x-14">
              <Link
                to={"/"}
                className="text-light-blue-300 mb-1 2xl:mb-0 size-24 md:size-28"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path stroke="none" d="M0 0h24v24H0z"></path>
                  <path d="M18.316 5H5.684L2.266 9.019a1.09 1.09 0 0 0 .019 1.447L11.999 21l9.715-10.49a1.09 1.09 0 0 0 .024-1.444z"></path>
                  <path d="m9 11 3 3 3-3"></path>
                </svg>
              </Link>

              <ul className="hidden md:flex gap-x-12 xl:gap-x-12 text-white text-[1.7rem] xl:text-[1.8rem] font-EstedadMedium dark:font-EstedadLight">
                <li className="main-header__item flex-center relative">
                  <Link to={"/"} className="flex-center">
                    صفحه اصلی
                  </Link>
                </li>
                <li className="main-header__item flex-center relative">
                  <span className="cursor-pointer">
                    دوره های آموزشی
                    <ul className="main-header__dropdown absolute top-24 -right-4 w-96 bg-linear-to-t from-darkBox/30 via-lightishBlue-400/15 via-60% to-transparent backdrop-blur-[6px] text-white transition-all shadow-2xl rounded-4xl py-4 border-b-4 border-r-4 border-light-blue-700 dark:border-light-blue-400 delay-75 z-50">
                      {allMenus.map((menu) => (
                        <li
                          className="header__item hover:bg-light-blue-800/60 rounded-l-sm rounded-r-2xl mx-4"
                          key={menu._id}
                        >
                          <Link
                            to={`/category-info/${menu.href}/1`}
                            className="flex items-center justify-between py-2.5 px-4 text-[1.6rem] text-zinc-600 duration-200"
                          >
                            {menu.title}
                            {menu.submenus.length !== 0 && (
                              <>
                                <HiChevronLeft className="mt-1 xl:mr-1" />
                                <ul className="header__dropdown absolute top-0 right-[23.6rem] h-[27.9rem] overflow-y-auto w-96 bg-linear-to-t from-darkBox/30 via-lightishBlue-400/15 via-60% to-transparent backdrop-blur-[6px] text-white transition-all shadow-2xl rounded-4xl py-4 border-t-4 border-l-4 border-light-blue-700 dark:border-light-blue-400 delay-150">
                                  {menu.submenus.map((submenu) => (
                                    <li key={menu._id}>
                                      <Link
                                        to={submenu.href}
                                        className="block px-8 py-2 text-[1.6rem] text-zinc-600 duration-200"
                                      >
                                        {submenu.title}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </>
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </span>
                </li>
                <li className="main-header__item flex-center relative">
                  <Link to={"/courses/1"}>همه دوره ها</Link>
                </li>
                <li className="main-header__item flex-center relative">
                  <Link to={"/articles/1"} className="flex-center">
                    مقالات
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex gap-x-6 items-center text-white">
              <div
                className="hidden md:flex-center p-4 text-[2.75rem] rounded-xl toggle-theme cursor-pointer"
                onClick={() => themeHandler()}
              >
                <HiOutlineSun className="hidden dark:inline-block text-[2.9rem]" />
                <HiOutlineMoon className="inline-block dark:hidden " />
              </div>

              <Link
                to="#"
                className="flex-center p-4 text-[2.75rem] rounded-xl"
              >
                <HiOutlineShoppingBag />
              </Link>

              {authContext.userInfos.name ? (
                <>
                  <Link
                    to="#"
                    className={`relative hidden md:flex-center items-center justify-center p-4 rounded-xl transition-all duration-200 ${
                      openCollapse && "z-40 bg-white/10 dark:bg-white/5"
                    }`}
                    onClick={toggleOpen}
                  >
                    <HiOutlineUser className="text-[2.75rem]" />
                    <div className={`absolute top-32 left-0 w-96 z-50 ${openCollapse ? "block visible" : "hidden invisible"}`}>
                    <div className="pt-8 pb-6 px-6 mx-auto bg-white dark:bg-darkBox text-darkColor dark:text-white/80 rounded-lg">
                        <span className="text-3xl inline-block w-full pr-4 pb-10 pt-3 border-b dark:border-b-white/15 border-b-darkBox/30">
                          {authContext.userInfos.name}
                        </span>
                        <ul className="*:transition-all *:pr-4 *:py-4 py-4 border-b dark:border-b-white/15 border-b-darkBox/30">
                          {authContext.userInfos.role === "ADMIN" && (
                            <li className="rounded-md hover:bg-light-blue-600 dark:hover:bg-light-blue-800 hover:text-white">
                              <Link
                                className="flex items-center gap-x-4"
                                to="/p-admin"
                              >
                                <span className="text-4xl">
                                  <GrUserAdmin />
                                </span>
                                <span>پنل مدیریت</span>
                              </Link>
                            </li>
                          )}
                          <li className="rounded-md hover:bg-light-blue-600 dark:hover:bg-light-blue-800 hover:text-white">
                            <Link
                              className="flex items-center gap-x-4"
                              to="/my-account"
                            >
                              <span className="text-4xl">
                                <HiOutlineHome />
                              </span>
                              <span>پیشخوان</span>
                            </Link>
                          </li>
                          <li className="rounded-md hover:bg-light-blue-600 dark:hover:bg-light-blue-800 hover:text-white">
                            <Link
                              className="flex items-center gap-x-4"
                              to="/my-account/buyed"
                            >
                              <span className="text-4xl">
                                <HiOutlineFolder />
                              </span>
                              <span>دوره های من</span>
                            </Link>
                          </li>
                          <li className="rounded-md hover:bg-light-blue-600 dark:hover:bg-light-blue-800 hover:text-white">
                            <Link
                              className="flex items-center gap-x-4"
                              to="/my-account/tickets"
                            >
                              <span className="text-4xl">
                                <HiOutlineChatBubbleLeftEllipsis />
                              </span>
                              <span>تیکت های من</span>
                            </Link>
                          </li>
                          <li className="rounded-md hover:bg-light-blue-600 dark:hover:bg-light-blue-800 hover:text-white">
                            <Link
                              className="flex items-center gap-x-4"
                              to="/my-account/edit-account"
                            >
                              <span className="text-4xl">
                                <HiOutlineUser />
                              </span>
                              <span>جزئیات حساب</span>
                            </Link>
                          </li>
                        </ul>
                        <Button
                          className="flex w-full items-center gap-x-4 pr-4 py-[.8rem] mt-4.5 mb-0.5 rounded-md hover:bg-red-600/85 dark:hover:bg-red-700/60 hover:text-white"
                          onClick={logoutUser}
                        >
                          <span className="text-4xl">
                            <HiPower />
                          </span>
                          <div>خروج</div>
                        </Button>
                      </div>
                    </div>
                  </Link>
                </>
              ) : (
                <Link
                  to="/login"
                  className="flex-center w-[4.5rem] h-[4.5rem] text-darkColor dark:text-white text-5xl rounded-lg mr-4 transition-all duration-200"
                >
                  <HiOutlineArrowLeftEndOnRectangle />
                </Link>
              )}
            </div>
          </div>
        </div>
      </header>
      <div className="flex-center">
        <div className="container space-y-16 md:space-y-20 xl:space-y-40 text-center text-white">
          <div>
            <h2 className="text-3xl sm:text-5xl mb-6 sm:mb-20 font-EstedadBold font-bold">
              <Typewriter
                onInit={(typeWriter) => {
                  typeWriter
                    .typeString("ما به هر قیمتی دوره آموزشی تولید نمی‌کنیم!")
                    .start()
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString("Sky Tech - آکادمی خصوصی برنامه نویسی")
                    .start()
                    .pauseFor(2000);
                }}
                options={{
                  loop: true,
                }}
              />
            </h2>
            <h3 className="text-xl/relaxed xs:text-2xl sm:text-3xl px-10 xs:px-0">
              با اسکای آکادمی، برنامه نویسی تخصصی رو به صورت حرفه ای یاد بگیر .
            </h3>
          </div>
          <div className="px-6 md:px-0">
            <div className="max-w-[700px] mx-auto">
              <form
                className="flex items-center backdrop-blur-[7px] justify-between border dark:border border-white/10 rounded-md py-5 sm:h-[6.5rem] md:h-28 pl-4 sm:pl-7 pr-8"
                action="#"
              >
                <Input
                  type="text"
                  id="search"
                  className="w-full bg-transparent text-2xl xs:text-3xl outline-hidden"
                  placeholder="چی دوست داری یاد بگیری ..."
                  validations={[requiredValidator()]}
                  onInputHandler={onInputHandler}
                />
                <Button
                  className="text-4xl sm:text-5xl text-white/80"
                  type="submit"
                  onClick={search}
                >
                  <FaSearch />
                </Button>
              </form>
            </div>
          </div>
          <div className="flex px-10 sm:px-20 md:px-0 max-w-[65rem] mx-auto justify-between items-center *:text-white/60">
            <div className="flex-center flex-col">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-16 sm:size-24 lg:size-32"
                viewBox="0 0 512 512"
                fill="currentColor"
              >
                <path d="M403.802 334.499l-30.049-8.823-65.376-42.701v-9.784c18.928-14.277 31.926-36.1 34.342-61.115 9.493-1.528 16.766-9.777 16.766-19.693v-26.905c0-.104-.011-.206-.016-.31v-34.082a14.787 14.787 0 006.182-12.067v-31.19l45.117-7.685c7.415-1.263 12.747-7.152 13.271-14.655.522-7.503-3.941-14.075-11.108-16.354L260.834.757a15.914 15.914 0 00-9.698-.001L99.037 49.135c-7.167 2.279-11.631 8.851-11.108 16.353.332 4.767 2.61 8.877 6.126 11.569v40.787h-.372c-8.565 0-15.533 6.968-15.533 15.533v20.246l-10.027 58.852c-1.733 10.179 6.107 19.496 16.457 19.496h33.949c10.327 0 18.194-9.295 16.457-19.497l-10.027-58.851v-20.246c0-8.565-6.968-15.533-15.533-15.533h-.371V81.481l37.294 6.352v31.186c0 4.927 2.389 9.331 6.153 12.043l.014 34.419v26.902c0 9.917 7.273 18.165 16.766 19.693 2.415 25.001 15.399 46.814 34.309 61.092v9.83l-65.362 42.693-30.025 8.813c-32.129 9.43-54.815 38.927-54.815 73.215v22.352c0 4.142 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-22.352c0-27.024 18.109-51.213 44.04-58.823l27.976-8.212 111.766 66.413c2.269 1.348 5.271 1.42 7.662 0l111.773-66.417 27.973 8.212c25.927 7.612 44.036 31.8 44.036 58.822v72.438c0 9.291-7.559 16.85-16.85 16.85h-33.057v-32.328a7.5 7.5 0 00-7.5-7.5 7.5 7.5 0 00-7.5 7.5v32.328H133.26v-32.328c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v32.328H85.237c-9.291 0-16.85-7.559-16.85-16.85V465.13c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v15.021c0 17.562 14.287 31.849 31.849 31.849h341.527c17.562 0 31.849-14.287 31.849-31.849v-72.438c0-33.48-21.912-63.555-54.81-73.214zM118.528 216.971H84.58a1.69 1.69 0 01-1.671-1.978l9.07-53.236h19.15l9.07 53.235a1.69 1.69 0 01-1.671 1.979zm-8.569-83.594v13.381H93.148v-13.381c0-.295.239-.534.534-.534h15.742a.533.533 0 01.535.534zm119.218 239.794l2.985 4.588-76.569-45.497 48.601-31.745c2.204 25.86 10.728 50.745 24.983 72.654zm-.052-32.375c17.653 2.508 36.087 2.51 53.75 0a143.248 143.248 0 01-12.624 24.196L256 386.896l-14.251-21.904a143.248 143.248 0 01-12.624-24.196zm53.698 32.375c14.255-21.909 22.779-46.794 24.982-72.654l48.601 31.744-76.568 45.498zm43.871-239.292h17.776v24.098h-8.823c-4.937 0-8.954-4.016-8.954-8.953v-15.145zm-223.111-70.45l152.101-48.38a.986.986 0 01.603.001l152.1 48.379c.314.1.745.236.69 1.017-.055.78-.5.855-.826.911l-50.288 8.565-18.88-2.335a7.5 7.5 0 00-1.84 14.886l13.41 1.659v30.748l-189.305-.007V88.131l77.607-9.603a138.926 138.926 0 0134.06 0l29.373 3.633a7.5 7.5 0 001.842-14.886l-29.373-3.633a153.855 153.855 0 00-37.743 0L154.02 73.924l-50.303-8.567c-.326-.056-.771-.131-.826-.911-.054-.781.377-.918.692-1.017zm63.928 94.548l-.01-24.098h17.805v15.146c0 4.936-4.016 8.953-8.954 8.953h-8.841zm16.507 50.244c-.386-6.107-5.462-10.891-11.555-10.891a4.954 4.954 0 01-4.949-4.948v-19.405h8.838c13.207 0 23.953-10.745 23.953-23.952v-15.146h111.389v15.146c0 13.207 10.746 23.952 23.953 23.952h8.838v19.405a4.954 4.954 0 01-4.949 4.948c-6.093 0-11.169 4.784-11.555 10.892-2.389 37.869-34.007 67.534-71.982 67.534s-69.592-29.665-71.981-67.535zM256 290.755a86.566 86.566 0 0037.378-8.473v4.753c0 12.823-1.73 25.472-5.061 37.672-20.382 3.886-43.425 4.043-64.634 0a142.926 142.926 0 01-5.061-37.672c0-.159-.022-.314-.032-.471-.002-.031.001-.062-.001-.093v-4.204A86.577 86.577 0 00256 290.755z"></path>
              </svg>
              <LandingCounter count={126740} />
              <span className="text-xl sm:text-2xl font-EstedadBold mt-2 sm:mt-4">
                کاربر ثبت نام کردن
              </span>
            </div>

            <div className="flex-center flex-col">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-16 sm:size-24 lg:size-32"
                x="0"
                y="0"
                enableBackground="new 0 0 512 512"
                viewBox="0 0 512 512"
                xmlSpace="preserve"
                fill="currentColor"
              >
                <path d="M460.8 200.748V51.2c-.015-14.132-11.468-25.585-25.6-25.6h-8.533c-.015-14.132-11.468-25.585-25.6-25.6H256a33.918 33.918 0 00-25.6 11.796A33.918 33.918 0 00204.8 0H59.733c-14.132.015-25.585 11.468-25.6 25.6H25.6C11.468 25.615.015 37.068 0 51.2v315.733c.015 14.132 11.468 25.585 25.6 25.6h281.6V435.2c.049 42.395 34.405 76.751 76.8 76.8h51.2c42.395-.049 76.751-34.405 76.8-76.8V273.067c-.057-32.508-20.558-61.465-51.2-72.319zM426.667 42.667h8.533a8.544 8.544 0 018.533 8.533v145.57a76.766 76.766 0 00-8.533-.503h-8.533v-153.6zm-341.334-25.6h51.2v112.208l-18.938-23.671a8.528 8.528 0 00-13.324 0l-18.938 23.671V17.067zM51.2 25.6a8.544 8.544 0 018.533-8.533h8.533V153.6a8.53 8.53 0 0015.196 5.329l27.471-34.337 27.471 34.337a8.522 8.522 0 006.662 3.204 8.528 8.528 0 008.533-8.533V17.067h51.2c9.422.009 17.057 7.645 17.067 17.067v278.34a33.644 33.644 0 00-17.879-5.274H51.2V25.6zm0 298.667h152.788c9.391.329 17.019 7.693 17.678 17.067H51.2v-17.067zm256 51.2H25.6a8.544 8.544 0 01-8.533-8.533V51.2a8.544 8.544 0 018.533-8.533h8.533v307.2a8.533 8.533 0 008.533 8.533H307.2v17.067zm0-34.134h-68.066c.671-9.384 8.317-16.748 17.72-17.067H307.2v17.067zm0-34.133h-50.346a33.712 33.712 0 00-17.921 5.286V34.133c.009-9.422 7.645-17.057 17.067-17.067h145.067a8.544 8.544 0 018.533 8.533v170.667H384c-42.395.049-76.751 34.405-76.8 76.8V307.2zm93.867-93.867v110.933h-76.8v-51.2c.037-32.974 26.759-59.696 59.733-59.733h17.067zM494.933 435.2c-.037 32.974-26.759 59.696-59.733 59.733H384c-32.974-.037-59.696-26.759-59.733-59.733v-93.867h170.667V435.2zm0-110.933h-76.8V213.333H435.2c32.974.037 59.696 26.759 59.733 59.733v51.201z"></path>
              </svg>
              <LandingCounter count={info.coursesCount} />
              <span className="text-xl sm:text-2xl font-EstedadBold mt-2 sm:mt-4">
                دوره آموزشی داریم
              </span>
            </div>

            <div className="flex-center flex-col">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-16 sm:size-24 lg:size-32"
                x="0"
                y="0"
                enableBackground="new 0 0 511.992 511.992"
                viewBox="0 0 511.992 511.992"
                xmlSpace="preserve"
                fill="currentColor"
              >
                <g>
                  <g>
                    <path d="M511.005 279.646c-4.597-46.238-25.254-89.829-58.168-122.744-28.128-28.127-62.556-46.202-98.782-54.239V77.255c14.796-3.681 25.794-17.074 25.794-32.993 0-18.748-15.252-34-34-34h-72c-18.748 0-34 15.252-34 34 0 15.918 10.998 29.311 25.793 32.993v25.479c-36.115 8.071-70.429 26.121-98.477 54.169a202.966 202.966 0 00-16.979 19.269 9.99 9.99 0 00-.758-.038H78.167c-5.522 0-10 4.477-10 10s4.478 10 10 10h58.412a200.467 200.467 0 00-17.744 38.436H10c-5.522 0-10 4.477-10 10s4.478 10 10 10h103.184a203.324 203.324 0 00-4.963 38.437H64c-5.522 0-10 4.477-10 10s4.478 10 10 10h44.54a203.025 203.025 0 006.244 38.437H50c-5.522 0-10 4.477-10 10s4.478 10 10 10h71.166c9.81 25.951 25.141 50.274 45.999 71.132 32.946 32.946 76.582 53.608 122.868 58.181 6.606.652 13.217.975 19.819.975 39.022 0 77.548-11.293 110.238-32.581 4.628-3.014 5.937-9.209 2.923-13.837s-9.209-5.937-13.837-2.923c-71.557 46.597-167.39 36.522-227.869-23.957-70.962-70.962-70.962-186.425 0-257.388 70.961-70.961 186.424-70.961 257.387 0 60.399 60.4 70.529 156.151 24.086 227.673-3.008 4.632-1.691 10.826 2.94 13.833 4.634 3.008 10.826 1.691 13.833-2.941 24.814-38.215 35.984-84.37 31.452-129.965zM259.849 44.263c0-7.72 6.28-14 14-14h72c7.72 0 14 6.28 14 14s-6.28 14-14 14h-72c-7.72 0-14-6.281-14-14zm25.793 55.033V78.263h48.413V99.26a203.755 203.755 0 00-48.413.036z"></path>
                    <path d="M445.77 425.5c-2.64 0-5.21 1.07-7.069 2.93a10.034 10.034 0 00-2.931 7.07c0 2.63 1.061 5.21 2.931 7.07a10.013 10.013 0 007.069 2.93c2.63 0 5.2-1.06 7.07-2.93 1.86-1.86 2.93-4.44 2.93-7.07s-1.069-5.21-2.93-7.07a10.095 10.095 0 00-7.07-2.93z"></path>
                    <path d="M310.001 144.609c-85.538 0-155.129 69.59-155.129 155.129s69.591 155.129 155.129 155.129 155.129-69.59 155.129-155.129-69.591-155.129-155.129-155.129zm0 290.258c-74.511 0-135.129-60.619-135.129-135.129s60.618-135.129 135.129-135.129S445.13 225.228 445.13 299.738s-60.618 135.129-135.129 135.129z"></path>
                    <path d="M373.257 222.34l-49.53 49.529a30.885 30.885 0 00-13.726-3.205 30.882 30.882 0 00-13.726 3.205l-22.167-22.167c-3.906-3.905-10.236-3.905-14.143 0-3.905 3.905-3.905 10.237 0 14.142l22.167 22.167a30.871 30.871 0 00-3.205 13.726c0 17.134 13.939 31.074 31.074 31.074s31.074-13.94 31.074-31.074c0-4.925-1.157-9.584-3.205-13.726l48.076-48.076 1.453-1.453c3.905-3.905 3.905-10.237 0-14.142s-10.235-3.905-14.142 0zm-63.256 88.472c-6.106 0-11.074-4.968-11.074-11.074s4.968-11.074 11.074-11.074 11.074 4.968 11.074 11.074-4.968 11.074-11.074 11.074z"></path>
                    <path d="M416.92 289.86h-9.265c-5.522 0-10 4.477-10 10s4.478 10 10 10h9.265c5.522 0 10-4.477 10-10s-4.478-10-10-10z"></path>
                    <path d="M212.346 289.616h-9.264c-5.522 0-10 4.477-10 10s4.478 10 10 10h9.264c5.522 0 10-4.477 10-10s-4.478-10-10-10z"></path>
                    <path d="M310.123 212.083c5.522 0 10-4.477 10-10v-9.264c0-5.523-4.478-10-10-10s-10 4.477-10 10v9.264c0 5.523 4.478 10 10 10z"></path>
                    <path d="M309.879 387.393c-5.522 0-10 4.477-10 10v9.264c0 5.523 4.478 10 10 10s10-4.477 10-10v-9.264c0-5.523-4.478-10-10-10z"></path>
                    <path d="M10 351.44c-2.63 0-5.21 1.07-7.07 2.93A10.076 10.076 0 000 361.44c0 2.64 1.069 5.21 2.93 7.07s4.44 2.93 7.07 2.93 5.21-1.07 7.069-2.93c1.86-1.86 2.931-4.44 2.931-7.07s-1.07-5.21-2.931-7.07A10.072 10.072 0 0010 351.44z"></path>
                  </g>
                </g>
              </svg>
              <LandingCounter count={info.totalTime} />
              <span className="text-xl sm:text-2xl font-EstedadBold mt-2 sm:mt-4">
                دقیقه آموزش تولید کردیم
              </span>
            </div>
          </div>
          {/* <div className="hidden lg:block absolute -top-20 left-0 w-[250px] h-[250px] bg-purple-600 opacity-25 blur-[120px] rounded-full"></div>
            <div className="hidden lg:block absolute -bottom-44 -right-17 w-[250px] h-[250px] bg-light-blue-600 opacity-25 blur-[120px] rounded-full"></div> */}
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="curve-footer"
        width="100"
        height="22"
        fill="none"
        viewBox="0 0 100 22"
        className="absolute -bottom-1 right-0 left-0 mx-auto hidden lg:inline-block w-[130px] h-[28px] text-blue-gray-50 dark:text-darkColor rotate-180 z-10"
      >
        <path
          fill="currentColor"
          d="M50 22C31 22 19 0 0 0h100C81.25 0 69 22 50 22"
        ></path>
      </svg>
      <div className="absolute bottom-3 right-0 left-0 mx-auto translate-y-1/2 hidden lg:block h-12 w-12 text-5xl text-darkColor dark:text-white z-10">
        <HiChevronDown />
      </div>

      <div
        onClick={overlayOnClick}
        className={overlay ? "overlay overlay--visible" : "overlay"}
      ></div>
    </section>
  );
}
