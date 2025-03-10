import React, { useEffect, useState } from "react";
import PAdminItem from "../../../Components/AdminPanel/PAdminItem/PAdminItem";
import DataTable from "../../../Components/AdminPanel/DataTable/DataTable";

export default function Index() {
  const [infos, setInfos] = useState([]);
  const [lastRegisteredUsers, setLastRegisteredUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/v1/infos/p-admin", {
      headers: {
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("user")).token
        }`,
      },
    })
      .then((res) => res.json())
      .then((pageInfo) => {
        console.log(pageInfo);
        setInfos(pageInfo.infos);
        setLastRegisteredUsers(pageInfo.lastUsers);
      });
  }, []);

  return (
    <section className="mt-16 md:mt-20 text-slate-900 dark:text-white">
      <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row items-center gap-8 lg:gap-12 justify-center mt-12">
        {infos.map((item) => (
          <>
            <PAdminItem {...item} />
          </>
        ))}
      </div>

      <DataTable title={"افراد اخیرا ثبت‌نام شده"}>
        <div className="pb-2 md:pb-4 md:pr-5 overflow-x-auto">
          <div className="min-w-[840px] md:min-w-[900px] grid grid-cols-12 text-xl md:text-2xl font-EstedadMedium items-center text-center bg-white dark:bg-slate-800 h-16 md:h-20 px-3 mb-6 rounded-xl">
            <div className="col-span-1 text-nowrap">شناسه</div>
            <div className="col-span-3">نام‌ و نام‌خانوادگی</div>
            <div className="col-span-2">عنوان</div>
            <div className="col-span-3">ایمیل</div>
            <div className="col-span-3">همراه</div>
          </div>

          <div
            className="min-w-[840px] md:min-w-[900px] space-y-6"
            id="container_orders"
          >
            {lastRegisteredUsers.map((user, index) => (
              <>
                <div
                  key={user._id}
                  className="grid grid-cols-12 items-center text-xl md:text-2xl text-center bg-white dark:bg-slate-800 h-16 md:h-20 rounded-xl divide-x divide-x-reverse divide-sky-400/80 dark:divide-[#333c4c] *:px-3"
                >
                  <div className="col-span-1">{index + 1}</div>

                  <div className="col-span-3">{user.username}</div>

                  <div className="col-span-2"> {user.role}</div>

                  <div className="col-span-3">{user.email}</div>

                  <div className="col-span-3"> {user.phone}</div>
                </div>
              </>
            ))}
          </div>
        </div>
      </DataTable>
    </section>
  );
}
