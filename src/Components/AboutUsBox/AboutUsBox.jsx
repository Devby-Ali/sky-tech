import React from "react";


export default function AboutUsBox({ title, desc, icon }) {
  return (
    <div className="flex flex-col lg:flex-row items-center p-5 lg:p-6 gap-x-6 gap-y-6 shadow-normal rounded-lg my-3 mx-3 py-10 px-6 bg-white">
      <div>
        <span className="text-8xl">{icon}</span>
      </div>
      <div className="flex items-center lg:items-start flex-col gap-y-4">
        <span className="font-EstedadBold lg:text-3xl">{title}</span>
        <span className="about-us__box-text text-right text-zinc-600 text-xl sm:text-2xl">{desc}</span>
      </div>
    </div>
  );
}
