import React from "react";
import { Link } from "react-router-dom";
import { GrHomeRounded } from "react-icons/gr";

export default function Breadcrumb({ links }) {
  return (
    <div className="breadcrumb mt-44 lg:mt-52 2xl:mt-56">
      <div className="breadcrumb__item">
        <Link to={"/"}>
          <GrHomeRounded className="text-3xl" />
        </Link>
      </div>
      {links.map((link) => (
        <div className="breadcrumb__item">
          <Link
            to={`/${link.to}`}
            className="flex items-center text-2xl text-zinc-500 hover:text-emerald-500"
          >
            {link.title}
            {/* {link.id !== links.length ? (
              <FiChevronLeft classNameName="text-zinc-500 text-2xl mx-3" />
            ) : null} */}
          </Link>
        </div>
      ))}
    </div>
  );
}
