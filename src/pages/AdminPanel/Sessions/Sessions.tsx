import React, { useEffect, useState } from "react";
import { useForm } from "../../../hooks/useForm";
import Input from "../../../Components/Form/Input";
import { minValidator } from "../../../validators/rules";
import Button from "../../../Components/Form/Button";
import Swal from "sweetalert2";
import DataTable from "../../../Components/AdminPanel/DataTable/DataTable";
import { HiMiniPlus, HiXMark } from "react-icons/hi2";
import Course from "types/Courses.types";
import { FormState } from "hooks/useForm.types";
import {
  fetchAllCourses,
  fetchCustomOfCourses,
  fetchNewSession,
  removeSession,
} from "../../../Services/Axios/Requests/Courses";

interface SessionCourse {
  _id: string;
  name: string;
}

interface Session {
  _id: string;
  course: SessionCourse;
  createdAt: string;
  free: 0 | 1;
  time: string;
  title: string;
  updatedAt: string;
  video?: string;
}

const Sessions = (): React.JSX.Element => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [sessionCourse, setSessionCourse] = useState<string>("-1");
  const [sessionVideo, setSessionVideo] = useState<File>({} as File);
  const [sessionFree, setSessionFree] = useState<string>({} as string);
  const [sessions, setSessions] = useState<Session[]>([]);
  const [showAddSession, setShowAddSession] = useState<boolean>(false);

  const [formState, onInputHandler] = useForm<FormState>(
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

    const getCourses = async () => {
      try {
        const res = await fetchAllCourses();
        setCourses(res);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };
    getCourses();
  }, []);

  const getAllSessions = async () => {
    try {
      const res = await fetchCustomOfCourses("sessions");
      setSessions(res);
    } catch (error) {
      console.error("Error fetching Sessions:", error);
    }
  };

  const addSessionHandler = () => {
    setShowAddSession(!showAddSession);
  };

  const createSession = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("title", formState.inputs.title.value);
    formData.append("time", formState.inputs.time.value);
    formData.append("video", sessionVideo);
    formData.append("free", sessionFree);

    try {
      await fetchNewSession(sessionCourse, formData);
      Swal.fire({
        title: "جلسه مورد نظر با موفقیت اضافه شد",
        icon: "success",
        confirmButtonText: "Ok",
      }).then(() => {
        getAllSessions();
        setShowAddSession(false);
      });
    } catch (error) {
      console.error("Error Create Session Course:", error);
    }
  };

  const removeSessionHandler = (sessionID: string) => {
    Swal.fire({
      title: "از حذف جلسه مطمعنی؟",
      icon: "warning",
      confirmButtonText: "آره",
      showDenyButton: true,
      denyButtonText: "نه",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await removeSession(sessionID);
          Swal.fire({
            title: "جلسه مورد نظر با موفقیت حذف شد",
            icon: "success",
            cancelButtonText: "Ok",
          }).then(() => {
            getAllSessions();
          });
        } catch (error) {
          console.error("Error Session Course:", error);
        }
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
                    onChange={(event) => {
                      if (event.target.files) {
                        setSessionVideo(event.target.files[0]);
                      }
                    }}
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
                    onClick={() => removeSessionHandler(session._id)}
                    className="inline-flex items-center justify-center bg-red-100 dark:bg-red-500/10 text-red-500 dark:text-red-100 font-EstedadMedium text-xl md:text-2xl py-2 px-5 xl:px-6 rounded-sm select-none cursor-pointer"
                  >
                    حذف
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </DataTable>
    </>
  );
};

export default Sessions;
