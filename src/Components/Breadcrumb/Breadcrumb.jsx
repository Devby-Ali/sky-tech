import React from "react";
import { Link } from "react-router-dom";
import { GrHomeRounded } from "react-icons/gr";



export default function Breadcrumb({ links }) {
  return (
    // <section className="mb-8 pt-36">
    //   <div className="container">
    //     <div className="flex bg-gray-100 py-6 px-8 rounded-2xl">
    //       <div className="flex-center w-16 h-16 rounded-2xl bg-white">
    //       <RiHomeLine classNameName="text-2xl text-zinc-500" />
    //       </div>
    //       <ul className="flex items-center mr-6">
    //         {links.map((link) => (
    //           <li className="list-none">
    //             <Link to={`/${link.to}`} className="flex items-center text-2xl text-zinc-500 hover:text-emerald-500">
    //               {link.title}
    //               {
    //                   link.id !== links.length ? (
    //                     <FiChevronLeft classNameName="text-zinc-500 text-2xl mx-3" />
    //                   ) : null
    //               }
    //             </Link>
    //           </li>
    //         ))}
    //       </ul>
    //     </div>
    //   </div>
    // </section>

    <div className="breadcrumb mt-44 lg:mt-48">
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
