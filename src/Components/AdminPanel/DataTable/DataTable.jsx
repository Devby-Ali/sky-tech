import React from "react";

export default function DataTable({ children, title }) {
  return (
    <section className="mt-16 md:mt-20 text-darkColor dark:text-white/95">
      <div className="flex items-center justify-between bg-white dark:bg-darkBox h-20 md:h-28 pl-2.5 rounded mb-12">
        <div className="flex items-center gap-x-3 md:gap-x-6 h-full">
          <span className="w-1 md:w-1.5 h-full bg-light-blue-600 rounded-r-full shadowLightBlue"></span>
          <span className="text-light-blue-500 text-2xl md:text-3xl font-EstedadMedium md:font-EstedadBold select-none pr-4">
            {title}
          </span>
        </div>
      </div>
      {children}
    </section>
  );
}
