import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineHome } from "react-icons/hi2";

export default function Breadcrumb({ links }) {
  return (
    <div className="breadcrumb">
      <div className="breadcrumb__item">
        <Link to={"/"}>
          <HiOutlineHome className="text-4xl" />
        </Link>
      </div>
      {links.map((link) => (
        <div className="breadcrumb__item">
          <Link
            to={`/${link.to}`}
            className="flex items-center hover:text-light-blue-500"
          >
            {link.title}
          </Link>
        </div>
      ))}
    </div>
  );
}
