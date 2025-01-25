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
      console.log(res)
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
    <section>
      <div className="flex-center my-10 md:my-16 xs:pt-6 md:pt-0 text-4xl text-darkColor dark:text-white font-EstedadBold">
        <span>ایجاد تخفیف همگانی</span>
      </div>
        <form className="lg:px-36 xl:mx-56 2xl:mx-96">
          <div>
            <label className="inline-block font-EstedadMedium text-darkColor dark:text-white text-3xl mb-8">
              درصد تخفیف
            </label>
            <div className="flex items-center bg-white dark:bg-darkBox px-5 py-4 rounded-md">
              <input
                type="text"
                id="phone"
                className="w-full placeholder:text-darkColor/70 dark:placeholder:text-white/60 text-darkColor dark:text-white bg-transparent outline-none text-3xl"
                value={discount}
                onChange={(event) => setDiscount(event.target.value)}
              />
              <div className="my-auto text-5xl text-darkColor/60 dark:text-white/60">
                %
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center mt-12">
            <button
              onClick={setDiscounts}
              className="h-20 bg-light-blue-600 dark:bg-light-blue-900 w-full text-white font-EstedadMedium rounded-md"
            >
              اعمال تخفیف
            </button>
          </div>
        </form>
    </section>
  );
}
