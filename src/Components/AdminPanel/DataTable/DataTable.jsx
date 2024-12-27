import React from "react";

export default function DataTable({ children, title }) {
  return (
    <div className="container">
      <div className="text-darkColor dark:text-white/90">
        <div className="text-center font-EstedadBold my-12 text-5xl">
          <span>
            لیست <span className="signup">{title}</span>
          </span>
        </div>
        <div>
          {children}
        </div>
      </div>
    </div>
  );
}
