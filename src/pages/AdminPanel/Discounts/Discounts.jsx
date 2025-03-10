import React, { useState } from "react";
import Swal from "sweetalert2";

export default function Discounts() {
  const [discount, setDiscount] = useState("");

  const setDiscounts = (event) => {
    event.preventDefault();
    const reqBody = {
      discount,
    };

    fetch(`http://localhost:4000/v1/offs/all`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("user")).token
        }`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reqBody),
    }).then((res) => {
      console.log(res);
      if (res.ok) {
        Swal.fire({
          title: "کمپین ایجاد شد",
          icon: "success",
          buttons: "Ok",
        });
      }
    });
  };

  return (
    <section className="mt-16 md:mt-20 text-slate-900 dark:text-white/95">
      <div className="flex items-center justify-between bg-white dark:bg-slate-800 h-20 md:h-28 pl-2.5 rounded-xl mb-20">
        <div className="flex items-center gap-x-3 md:gap-x-6 h-full">
          <span className="w-1 md:w-1.5 h-full bg-sky-600 rounded-r-full shadowLightBlue"></span>
          <span className="text-sky-500 text-2xl md:text-3xl font-EstedadMedium md:font-EstedadBold select-none pr-4">
            ایحاد تخفیف همگانی
          </span>
        </div>
      </div>
      <form className="lg:px-36 xl:mx-56 2xl:mx-96">
        <div>
          <label className="inline-block font-EstedadMedium text-slate-900 dark:text-white text-3xl mb-8">
            درصد تخفیف
          </label>
          <div className="flex items-center bg-white dark:bg-slate-800 px-5 py-4 rounded-md">
            <input
              type="text"
              id="phone"
              className="w-full placeholder:text-slate-900/70 dark:placeholder:text-white/60 text-slate-900 dark:text-white bg-transparent outline-hidden text-3xl"
              value={discount}
              onChange={(event) => setDiscount(event.target.value)}
            />
            <div className="my-auto text-5xl text-slate-900/60 dark:text-white/60">
              %
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center mt-12">
          <button
            onClick={setDiscounts}
            className="h-20 bg-sky-600 dark:bg-sky-900 w-full text-white font-EstedadMedium rounded-md"
          >
            اعمال تخفیف
          </button>
        </div>
      </form>
    </section>
  );
}
