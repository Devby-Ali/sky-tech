import React from "react";

export default function DataTable({
  children,
  title,
  btnTitle,
  icon,
  eventHandler,
}) {
  return (
    <section className="mt-16 md:mt-20 text-slate-900 dark:text-white/95">
      <div className="flex items-center justify-between bg-white dark:bg-slate-800 h-20 md:h-28 pl-2.5 rounded-sm mb-12">
        <div className="flex items-center gap-x-3 md:gap-x-6 h-full">
          <span className="w-1 md:w-1.5 h-full bg-sky-600 rounded-r-full shadowLightBlue"></span>
          <span className="text-sky-500 text-2xl md:text-[2rem] font-EstedadMedium md:font-EstedadBold select-none pr-4">
            {title}
          </span>
        </div>
        <div
          onClick={eventHandler}
          className="flex items-center font-EstedadMedium text-sky-500 cursor-pointer ml-10"
        >
          {btnTitle && <div className="text-[1.7rem]">{btnTitle}</div>}
          {icon && <span className="text-4xl mr-2 -ml-3">{icon}</span>}
        </div>
      </div>
      {children}
    </section>
  );
}
