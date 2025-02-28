import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineHome } from "react-icons/hi2";

export default function Breadcrumb({ links }) {
  return (
    <div className="breadcrumb">
      <div className="breadcrumb__item before:breadcrumb__item-before after:breadcrumb__item-after dark:after:bg-darkColor dark:before:bg-darkColor -mr-10 pl-3">
        <Link to={"/"} className="text-[2.5rem] xl:text-[2.7rem]">
          <HiOutlineHome />
        </Link>
      </div>
      {links.map((link) => (
        <>
        <div className="breadcrumb__item dark:after:bg-darkColor dark:before:bg-darkColor last:before:hidden last:after:hidden">
          <Link
          key={link.id}
            to={`/${link.to}`}
            className="flex items-center hover:text-light-blue-800 dark:hover:text-light-blue-500"
          >
            {link.title}
          </Link>
        </div>
        </>
      ))}
    </div>
  );
}
