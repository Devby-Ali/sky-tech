import React, { useEffect, useState } from "react";
import { useForm } from "../../../hooks/useForm";
import Input from "../../../Components/Form/Input";
import { minValidator } from "../../../validators/rules";
import Button from "../../../Components/Form/Button";
import Swal from "sweetalert2";
import DataTable from "../../../Components/AdminPanel/DataTable/DataTable";
import { HiMiniPlus, HiXMark } from "react-icons/hi2";

export default function Sessions() {
  const [courses, setCourses] = useState([]);
  const [sessionCourse, setSessionCourse] = useState("-1");
  const [sessionVideo, setSessionVideo] = useState({});
  const [sessionFree, setSessionFree] = useState(null);
  const [sessions, setSessions] = useState([]);
  const [showAddSession, setShowAddSession] = useState(false);

  const [formState, onInputHandler] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      time: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  useEffect(() => {
    getAllSessions();

    fetch("http://localhost:4000/v1/courses")
      .then((res) => res.json())
      .then((allCourses) => {
        console.log(allCourses);
        setCourses(allCourses);
      });
  }, []);

  function getAllSessions() {
    fetch("http://localhost:4000/v1/courses/sessions")
      .then((res) => res.json())
      .then((allSessions) => {
        setSessions(allSessions);
        console.log(allSessions);
      });
  }

  const addSessionHandler = () => {
    setShowAddSession(!showAddSession);
  };

  const createSession = (event) => {
    event.preventDefault();

    const localStorageData = JSON.parse(localStorage.getItem("user"));

    let formData = new FormData();
    formData.append("title", formState.inputs.title.value);
    formData.append("time", formState.inputs.time.value);
    formData.append("video", sessionVideo);
    formData.append("free", sessionFree);

    fetch(`http://localhost:4000/v1/courses/${sessionCourse}/sessions`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorageData.token}`,
      },
      body: formData,
    }).then((res) => {
      if (res.ok) {
        Swal.fire({
          title: "جلسه مورد نظر با موفقیت اضافه شد",
          icon: "success",
          confirmButtonText: "Ok",
        }).then(() => {
          getAllSessions();
          setShowAddSession(false);
        });
      }
    });
  };

  const removeSession = (sessionID) => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));

    Swal.fire({
      title: "از حذف جلسه مطمعنی؟",
      icon: "warning",
      confirmButtonText: "آره",
      showDenyButton: true,
      denyButtonText: "نه",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:4000/v1/courses/sessions/${sessionID}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorageData.token}`,
          },
        }).then((res) => {
          if (res.ok) {
            Swal.fire({
              title: "جلسه مورد نظر با موفقیت حذف شد",
              icon: "success",
              cancelButtonText: "Ok",
            }).then(() => {
              getAllSessions();
            });
          }
        });
      }
    });
  };

  return (
    <>
      {showAddSession && (
        <section className="fixed left-0 right-0 md:right-[24rem] top-0 bottom-0 backdrop-blur-xs flex-center overflow-hidden z-50">
          <div className="mx-auto flex flex-col items-center w-min">
            <div className="flex flex-col items-center text-slate-900 dark:text-white bg-sky-950/20 dark:bg-slate-950/40 backdrop-blur-xs px-20 py-14 rounded-xl">
              <span className="flex items-center justify-between w-full font-EstedadMedium text-4xl mb-20">
                افزودن جلسه جدید
                <span
                  onClick={addSessionHandler}
                  className="rounded-full border border-slate-900 dark:border-white p-0.5 text-4xl cursor-pointer"
                >
                  <HiXMark />
                </span>
              </span>
              <form action="#" className="w-full flex flex-col gap-y-8">
                <div className="h-20 flex items-center justify-between px-8 bg-white dark:bg-[#333c4c] rounded-lg">
                  <Input
                    id="title"
                    className="bg-transparent outline-hidden"
                    type="text"
                    placeholder="عنوان"
                    validations={[minValidator(5)]}
                    onInputHandler={onInputHandler}
                  />
                </div>
                <div className="h-20 flex items-center justify-between px-8 bg-white dark:bg-[#333c4c] rounded-lg">
                  <Input
                    id="time"
                    className="bg-transparent outline-hidden"
                    type="text"
                    placeholder="مدت زمان"
                    validations={[minValidator(2)]}
                    onInputHandler={onInputHandler}
                  />
                </div>
                <div className="h-20 flex items-center justify-between px-8 bg-white dark:bg-[#333c4c] rounded-lg">
                  <div className="flex items-center gap-x-2">
                    <label className="text-slate-900 dark:text-white/70">
                      دوره
                    </label>
                    <select
                      className="text-slate-900 dark:text-white/70 dark:bg-white/10 rounded-md py-2.5 px-1"
                      onChange={(event) => setSessionCourse(event.target.value)}
                    >
                      <option value="-1">مدنظر را انتخاب کنید</option>
                      {courses.map((course) => (
                        <option
                          className="text-slate-900 text-[1.8rem]"
                          value={course._id}
                          key={course._id}
                        >
                          {course.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="min-h-20 flex items-center px-8 bg-white dark:bg-[#333c4c] rounded-lg">
                  <div className="flex items-center justify-between w-[20rem] text-slate-900 dark:text-white/70">
                    <label className="text-3xl">وضعیت</label>
                    <div className="radios flex gap-x-6 items-center">
                      <div className="available">
                        <label className="flex items-center gap-x-1">
                          <span>رایگان</span>
                          <input
                            type="radio"
                            value="1"
                            name="condition"
                            onChange={(event) =>
                              setSessionFree(event.target.value)
                            }
                          />
                        </label>
                      </div>
                      <div className="unavailable">
                        <label className="flex items-center gap-x-1">
                          <span>پولی</span>
                          <input
                            type="radio"
                            value="0"
                            name="condition"
                            onChange={(event) =>
                              setSessionFree(event.target.value)
                            }
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="min-h-20 flex items-center justify-between px-8 bg-white dark:bg-[#333c4c] rounded-lg overflow-x-auto">
                  <label>بارگذاری</label>
                  <input
                    type="file"
                    onChange={(event) => setSessionVideo(event.target.files[0])}
                  />
                </div>

                <Button
                  className={`h-20 rounded-lg ${
                    formState.isFormValid
                      ? "bg-sky-600/40 hover:bg-sky-600/60"
                      : "bg-[#333c4c]/30"
                  }`}
                  type="submit"
                  onClick={createSession}
                  disabled={!formState.isFormValid}
                >
                  <span className="mx-auto font-EstedadMedium">افزودن</span>
                </Button>
              </form>
            </div>
          </div>
        </section>
      )}

      <DataTable
        title="جلسات"
        eventHandler={addSessionHandler}
        btnTitle={"جلسه جدید"}
        icon={<HiMiniPlus />}
      >
        <div className="pb-2 md:pb-4 md:pr-5 overflow-x-auto">
          <div className="min-w-[840px] md:min-w-[900px] grid grid-cols-12 text-xl md:text-2xl font-EstedadMedium items-center text-center bg-white dark:bg-slate-800 h-16 md:h-20 px-3 mb-6 rounded-lg">
            <div className="col-span-1 text-nowrap">شناسه</div>
            <div className="col-span-4">دوره</div>
            <div className="col-span-4">عنوان</div>
            <div className="col-span-2">زمان</div>
            <div className="col-span-1">حذف</div>
          </div>

          <div
            className="min-w-[840px] md:min-w-[900px] space-y-6"
            id="container_orders"
          >
            {sessions.map((session, index) => (
              <>
                <div
                  key={session._id}
                  className="grid grid-cols-12 items-center text-xl md:text-2xl text-center bg-white dark:bg-slate-800 h-16 md:h-20 rounded-lg divide-x divide-x-reverse divide-sky-400/80 dark:divide-[#333c4c] *:px-3"
                >
                  <div className="col-span-1">{index + 1}</div>

                  <div className="col-span-4">{session.course.name}</div>

                  <div className="col-span-4">{session.title}</div>

                  <div className="col-span-2">{session.time}</div>

                  <div className="col-span-1">
                    <div
                      onClick={() => removeSession(session._id)}
                      className="inline-flex items-center justify-center bg-red-100 dark:bg-red-500/10 text-red-500 dark:text-red-100 font-EstedadMedium text-xl md:text-2xl py-2 px-5 xl:px-6 rounded-sm select-none cursor-pointer"
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
