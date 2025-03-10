import React, { useEffect, useState } from "react";
import Input from "../../../Components/Form/Input";
import Button from "../../../Components/Form/Button";
import { useForm } from "../../../hooks/useForm";
import { minValidator, requiredValidator } from "../../../validators/rules";
import DataTable from "../../../Components/AdminPanel/DataTable/DataTable";
import Swal from "sweetalert2";
import { HiPlus, HiXMark } from "react-icons/hi2";

export default function Offs() {
  const [courses, setCourses] = useState([]);
  const [offs, setOffs] = useState([]);
  const [showCreateOff, setShowCreateOff] = useState(false);
  const [offCourse, setOffCourse] = useState("-1");
  const [formState, onInputHandler] = useForm(
    {
      code: {
        value: "",
        isValid: false,
      },
      percent: {
        value: "",
        isValid: false,
      },
      max: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  useEffect(() => {
    getAllOffs();

    fetch(`http://localhost:4000/v1/courses`)
      .then((res) => res.json())
      .then((allCourses) => setCourses(allCourses));
  }, []);

  function getAllOffs() {
    fetch(`http://localhost:4000/v1/offs`, {
      headers: {
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("user")).token
        }`,
      },
    })
      .then((res) => res.json())
      .then((allOffs) => {
        setOffs(allOffs);
      });
  }

  const showCreateOffHandler = () => {
    setShowCreateOff(!showCreateOff);
  };

  const createOff = (event) => {
    event.preventDefault();

    const newOffInfos = {
      code: formState.inputs.code.value,
      percent: formState.inputs.percent.value,
      course: offCourse,
      max: formState.inputs.max.value,
    };

    fetch(`http://localhost:4000/v1/offs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("user")).token
        }`,
      },
      body: JSON.stringify(newOffInfos),
    }).then((res) => {
      console.log(res);
      if (res.ok) {
        Swal.fire({
          title: "کد تخفیف با موفقیت ایجاد شد",
          icon: "success",
          confirmButtonText: "Ok",
        }).then(() => {
          getAllOffs();
          setShowCreateOff(false);
        });
      }
    });
  };

  const removeOff = (offID) => {
    Swal.fire({
      title: "از حذف کد تخفیف مطمعنی؟",
      icon: "warning",
      confirmButtonText: "آره",
      showDenyButton: true,
      denyButtonText: "نه",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:4000/v1/offs/${offID}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${
              JSON.parse(localStorage.getItem("user")).token
            }`,
          },
        }).then((res) => {
          if (res.ok) {
            Swal.fire({
              title: "کد تخفیف حذف شد",
              icon: "success",
              confirmButtonText: "Ok",
            }).then(() => {
              getAllOffs();
            });
          }
        });
      }
    });
  };

  return (
    <>
      {showCreateOff && (
        <section className="fixed left-0 right-0 md:right-[24rem] top-0 bottom-0 backdrop-blur-xs flex-center overflow-hidden z-50">
          <div className="mx-auto flex flex-col items-center w-min">
            <div className="flex flex-col items-center text-slate-900 dark:text-white bg-sky-950/20 dark:bg-slate-950/40 backdrop-blur-xs px-20 py-14 rounded-xl">
              <span className="flex items-center justify-between w-full font-EstedadMedium text-4xl mb-20">
                افزودن کد تخفیف
                <span
                  onClick={showCreateOffHandler}
                  className="rounded-full border border-slate-900 dark:border-white p-0.5 text-4xl cursor-pointer"
                >
                  <HiXMark />
                </span>
              </span>
              <form action="#" className="w-full flex flex-col gap-y-8">
                <div className="h-20 flex items-center px-8 bg-white dark:bg-[#333c4c] rounded-lg">
                  <Input
                    id="code"
                    className="bg-transparent outline-hidden"
                    type="text"
                    placeholder="کد تخفیف"
                    validations={[minValidator(5)]}
                    onInputHandler={onInputHandler}
                  />
                </div>
                <div className="h-20 flex items-center px-8 bg-white dark:bg-[#333c4c] rounded-lg">
                  <Input
                    id="percent"
                    className="bg-transparent outline-hidden"
                    type="text"
                    placeholder="درصد تخفیف"
                    validations={[requiredValidator()]}
                    onInputHandler={onInputHandler}
                  />
                </div>
                <div className="h-20 flex items-center px-8 bg-white dark:bg-[#333c4c] rounded-lg">
                  <Input
                    id="max"
                    className="bg-transparent outline-hidden"
                    type="text"
                    placeholder="حداکثر استفاده"
                    validations={[requiredValidator()]}
                    onInputHandler={onInputHandler}
                  />
                </div>
                <div className="h-20 flex items-center px-8 bg-white dark:bg-[#333c4c] rounded-lg">
                  <div className="flex items-center gap-x-2">
                    <label className="text-slate-900 dark:text-white/70">
                      دوره
                    </label>
                    <select
                      className="text-slate-900 dark:text-white/70 dark:bg-white/10 rounded-md py-2.5 px-1"
                      onChange={(event) => setOffCourse(event.target.value)}
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

                <Button
                  className={`h-20 rounded-lg ${
                    formState.isFormValid
                      ? "bg-sky-600/40 hover:bg-sky-600/60"
                      : "bg-[#333c4c]/30"
                  }`}
                  type="submit"
                  onClick={createOff}
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
        title="کد های تخفیف"
        btnTitle={"ایجاد تخفیف"}
        icon={<HiPlus />}
        eventHandler={showCreateOffHandler}
      >
        <div className="pb-2 md:pb-4 md:pr-5 overflow-x-auto">
          <div className="min-w-[840px] md:min-w-[900px] grid grid-cols-12 text-xl md:text-2xl font-EstedadMedium items-center text-center bg-white dark:bg-slate-800 h-16 md:h-20 px-3 mb-6 rounded-xl">
            <div className="col-span-1 text-nowrap">شناسه</div>
            <div className="col-span-2">کد</div>
            <div className="col-span-1">درصد</div>
            <div className="col-span-2">حداکثر استفاده</div>
            <div className="col-span-2">دفعات استفاده</div>
            <div className="col-span-3">سازنده</div>
            <div className="col-span-1">حذف</div>
          </div>

          <div
            className="min-w-[840px] md:min-w-[900px] space-y-6"
            id="container_orders"
          >
            {offs.map((off, index) => (
              <>
                <div
                  key={off._id}
                  className="grid grid-cols-12 items-center text-xl md:text-2xl text-center bg-white dark:bg-slate-800 h-16 md:h-20 rounded-xl divide-x divide-x-reverse divide-sky-400/80 dark:divide-[#333c4c] *:px-3"
                >
                  <div className="col-span-1">{index + 1}</div>

                  <div className="col-span-2">{off.code}</div>

                  <div className="col-span-1">{off.percent}</div>

                  <div className="col-span-2">{off.max}</div>

                  <div className="col-span-2">{off.uses}</div>

                  <div className="col-span-3">{off.creator}</div>

                  <div className="col-span-1">
                    <div
                      onClick={() => removeOff(off._id)}
                      className="inline-flex items-center justify-center bg-red-100 dark:bg-red-500/10 text-red-500 dark:text-red-200 font-EstedadMedium text-xl md:text-2xl py-2 px-5 xl:px-6 rounded-sm select-none cursor-pointer"
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
