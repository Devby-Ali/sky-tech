import React from "react";
import { FaArrowLeft } from "react-icons/fa";

export default function Pagination() {
  return (
    <div className="my-12">
      <ul className="flex-center">
        <li className="courses__pagination-item">
          <a
            href="#"
            className="rounded-lg w-16 h-16 flex-center text-2xl mx-2 bg-slate-200 text-white hover:bg-cyan-700"
          >
            {/* <i className="fas fa-long-arrow-alt-right courses__pagination-icon"></i> */}
            hello
          </a>
        </li>
        <li className="courses__pagination-item">
          <a
            href="#"
            className="rounded-lg w-16 h-16 flex-center text-2xl mx-2 bg-slate-200 text-white hover:bg-cyan-700"
          >
            1
          </a>
        </li>
        <li className="courses__pagination-item">
          <a
            href="#"
            className="rounded-lg w-16 h-16 flex-center text-2xl mx-2 bg-slate-200 text-white hover:bg-cyan-700"
          >
            2
          </a>
        </li>
        <li className="courses__pagination-item">
          <a
            href="#"
            className="rounded-lg w-16 h-16 flex-center text-2xl mx-2 bg-slate-200 text-white hover:bg-cyan-700 active"
          >
            3
          </a>
        </li>
        <li className="courses__pagination-item">
          <a
            href="#"
            className="rounded-lg w-16 h-16 flex-center text-2xl mx-2 bg-slate-200 text-white hover:bg-cyan-700"
          >
            <FaArrowLeft />
          </a>
        </li>
      </ul>
    </div>
  );
}
