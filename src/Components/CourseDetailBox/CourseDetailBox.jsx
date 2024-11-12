import React from "react";


export default function CourseDetailBox({ title, text, icon }) {
  return (
    <div className="grid grid-cols-4">
      <div className="flex rounded-lg shadow-normal my-4 py-7 px-8">
        <div className="flex-center text-4xl">
          {icon}
        </div>
        <div className="flex flex-col mr-6 child:text-2xl child:text-zinc-500">
          <span>{title}</span>
          <span>{text}</span>
        </div>
      </div>
    </div>
  );
}
