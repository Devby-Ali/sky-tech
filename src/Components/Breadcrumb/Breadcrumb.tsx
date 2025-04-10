import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineHome } from "react-icons/hi2";

interface Link {
  id: number;
  title: string;
  to: string;
}

interface BreadcrumbLinks {
  links: Link[];
}

const Breadcrumb = ({ links }: BreadcrumbLinks): React.JSX.Element => {
  return (
    <div className="breadcrumb">
      <div className="breadcrumb__item before:breadcrumb__item-before after:breadcrumb__item-after dark:after:bg-slate-900 dark:before:bg-slate-900 -mr-10 pl-3">
        <Link to={"/"} className="text-[2.5rem] xl:text-[2.7rem]">
          <HiOutlineHome />
        </Link>
      </div>
      {links.map((link) => (
        <div
          key={link.id}
          className="breadcrumb__item dark:after:bg-slate-900 dark:before:bg-slate-900 last:before:hidden last:after:hidden"
        >
          <Link
            to={`/${link.to}`}
            className="flex items-center hover:text-purple-400"
          >
            {link.title}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Breadcrumb;
