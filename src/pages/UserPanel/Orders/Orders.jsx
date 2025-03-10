import React, { useEffect, useState } from "react";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/v1/orders`, {
      headers: {
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("user")).token
        }`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setOrders(data);
      });
  }, []);

  return (
    <main>
      <section className="mt-16 md:mt-20 text-slate-900 dark:text-white/95">
        <div className="flex items-center justify-between bg-white dark:bg-slate-800 h-20 md:h-28 pl-2.5 rounded-sm mb-12">
          <div className="flex items-center gap-x-3 md:gap-x-6 h-full">
            <span className="w-1 md:w-1.5 h-full bg-sky-600 rounded-r-full shadowLightBlue"></span>
            <span className="text-sky-500 text-2xl md:text-3xl font-EstedadMedium md:font-EstedadBold select-none pr-4">
              سفارشات من (2)
            </span>
          </div>
        </div>

        {orders.length !== 0 ? (
          <div className="payment-table pb-2 md:pb-4 md:pr-5 overflow-x-auto">
            <div className="min-w-[840px] md:min-w-[900px] grid grid-cols-12 text-xl md:text-2xl font-EstedadMedium items-center text-center bg-white dark:bg-slate-800 h-16 md:h-20 px-3 mb-6 rounded-xl">
              <div className="col-span-1 text-nowrap">شماره پیگیری</div>
              <div className="col-span-3">شرح سفارش</div>
              <div className="col-span-2">تاریخ سفارش</div>
              <div className="col-span-2">مبلغ سفارش</div>
              <div className="col-span-2">وضعیت سفارش</div>
              <div className="col-span-2">عملیات ها</div>
            </div>

            <div
              className="min-w-[840px] md:min-w-[900px] space-y-6"
              id="container_orders"
            >
              {orders.map((order, index) => (
                <>
                  <div className="grid grid-cols-12 items-center text-xl md:text-2xl text-center bg-white dark:bg-slate-800 h-16 md:h-20 rounded-xl divide-x divide-x-reverse divide-sky-400/80 dark:divide-[#333c4c] *:px-3">
                    <div className="col-span-1">{index + 1}</div>

                    <div className="col-span-3">{order.course.name}</div>

                    <div className="col-span-2">
                      {order.createdAt.slice(0, 10)}
                    </div>

                    <div className="col-span-2">
                      {order.price} &nbsp;
                      <span className="slms-price_symbol">تومان</span>
                    </div>

                    <div className="col-span-2">
                      <div className="inline-flex items-center justify-center bg-green-50 dark:bg-green-500/10 text-green-500  font-danaMedium text-xl md:text-2xl py-2 px-5 md:px-8 rounded-sm select-none">
                        پرداخت شده
                      </div>
                    </div>
                    <div className="col-span-2">
                      <a className="" href="#">
                        نمایش
                      </a>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        ) : (
          <div className="w-full text-3xl px-8 py-6 text-amber-600 bg-amber-500/10 rounded-lg">
            فعلا سفارشی ثبت نشده !
          </div>
        )}
      </section>
    </main>
  );
}
