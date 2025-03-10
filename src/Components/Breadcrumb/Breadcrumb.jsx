import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineHome } from "react-icons/hi2";

export default function Breadcrumb({ links }) {
  return (
    <div className="breadcrumb">
      <div className="breadcrumb__item before:breadcrumb__item-before after:breadcrumb__item-after dark:after:bg-slate-900 dark:before:bg-slate-900 -mr-10 pl-3">
        <Link to={"/"} className="text-[2.5rem] xl:text-[2.7rem]">
          <HiOutlineHome />
        </Link>
      </div>
      {links.map((link) => (
        <>
          <div className="breadcrumb__item dark:after:bg-slate-900 dark:before:bg-slate-900 last:before:hidden last:after:hidden">
            <Link
              key={link.id}
              to={`/${link.to}`}
              className="flex items-center hover:text-purple-400"
            >
              {link.title}
            </Link>
          </div>
        </>
      ))}
    </div>
  );
}
