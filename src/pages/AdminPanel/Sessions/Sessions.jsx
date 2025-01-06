import React, { useEffect, useState } from "react";
import { useForm } from "../../../hooks/useForm";
import Input from "../../../Components/Form/Input";
import { minValidator } from "../../../validators/rules";
import Button from "../../../Components/Form/Button";
import Swal from "sweetalert2";
import { Card, Typography } from "@material-tailwind/react";
import DataTable from "../../../Components/AdminPanel/DataTable/DataTable";

const TABLE_HEAD = ["شناسه", "دوره", "عنوان", "زمان", "حذف"];

export default function Sessions() {
  const [courses, setCourses] = useState([]);
  const [sessionCourse, setSessionCourse] = useState("-1");
  const [sessionVideo, setSessionVideo] = useState({});
  const [sessionFree, setSessionFree] = useState(null);
  const [sessions, setSessions] = useState([]);

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
      .then((allSessions) => setSessions(allSessions));
  }

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
            }).then((result) => {
              getAllSessions();
            });
          }
        });
      }
    });
  };

  return (
    <>
      <section className="flex-center overflow-hidden mt-40">
        <div className="mx-auto flex flex-col items-center w-min">
          <div className="flex flex-col items-center text-darkColor dark:text-white bg-light-blue-500/20 dark:bg-[#2f3749]/40 backdrop-blur-[4px] px-10 pb-10 pt-8 rounded-3xl w-[33rem] sm:w-[37rem] lg:w-[40rem] z-10">
            <span className="block font-EstedadMedium text-4xl mb-14 mt-4">
              افزودن جلسه جدید
            </span>
            <form action="#" className="w-full flex flex-col gap-y-8">
              <div className="h-20 flex items-center justify-between px-4 bg-white dark:bg-[#333c4c] rounded-2xl">
                <Input
                  id="title"
                  className="bg-transparent outline-none"
                  type="text"
                  placeholder="عنوان"
                  validations={[minValidator(5)]}
                  onInputHandler={onInputHandler}
                />
              </div>
              <div className="h-20 flex items-center justify-between px-4 bg-white dark:bg-[#333c4c] rounded-2xl">
                <Input
                  id="time"
                  className="bg-transparent outline-none"
                  type="text"
                  placeholder="مدت زمان"
                  validations={[minValidator(2)]}
                  onInputHandler={onInputHandler}
                />
              </div>
              <div className="h-20 flex items-center justify-between px-4 bg-white dark:bg-[#333c4c] rounded-2xl">
                <div className="flex items-center gap-x-2">
                  <label className="text-darkColor dark:text-white/70">
                    دوره
                  </label>
                  <select
                    className="text-darkColor dark:text-white/70 dark:bg-white/10 rounded-md py-2.5 px-1"
                    onChange={(event) => setSessionCourse(event.target.value)}
                  >
                    <option value="-1">مدنظر را انتخاب کنید</option>
                    {courses.map((course) => (
                      <option
                        className="text-darkColor text-[1.8rem]"
                        value={course._id}
                        key={course._id}
                      >
                        {course.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="min-h-20 flex items-center px-4 bg-white dark:bg-[#333c4c] rounded-2xl">
                <div className="flex items-center justify-between w-[20rem] text-darkColor dark:text-white/70">
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

              <div className="min-h-20 flex items-center justify-between px-4 bg-white dark:bg-[#333c4c] rounded-2xl">
                <label>بارگذاری</label>
                <input
                  type="file"
                  onChange={(event) => setSessionVideo(event.target.files[0])}
                />
              </div>

              <Button
                className={`h-20 rounded-4xl ${
                  formState.isFormValid
                    ? "bg-light-blue-600/40 hover:bg-light-blue-600/60"
                    : "bg-[#333c4c]/30"
                }`}
                type="submit"
                onClick={createSession}
                disabled={!formState.isFormValid}
              >
                <span className="mx-auto">افزودن</span>
              </Button>
            </form>
          </div>
        </div>
      </section>

      <DataTable title="جلسات">
        <Card className="h-full w-full rounded-md overflow-scroll px-6">
          <table className="w-full min-w-max table-auto text-center">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-b-4 border-gray-400 pb-10 pt-12"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="text-4xl font-EstedadBold leading-none"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sessions.map((session, index) => {
                const isLast = index === sessions.length - 1;
                const classes = isLast
                  ? "py-6"
                  : "py-6 border-b border-gray-400";

                return (
                  <tr key={session._id} className="hover:bg-gray-50">
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="text-2xl font-EstedadBold"
                      >
                        {index + 1}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        className="text-darkBox text-[1.6rem] font-EstedadLight"
                      >
                        {session.course.name}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        className="text-darkBox text-[1.6rem] font-EstedadLight"
                      >
                        {session.title}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        className="text-darkBox text-[1.6rem] font-EstedadLight"
                      >
                        {session.time}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        className="text-darkBox text-[1.6rem] font-EstedadLight"
                      >
                        <button type="button" onClick={() => removeSession(session._id)}>حذف</button>
                      </Typography>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Card>
      </DataTable>
    </>
  );
}
