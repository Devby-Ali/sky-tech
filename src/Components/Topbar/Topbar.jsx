import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

export default function Topbar() {
  const [allTopbarLinks, setAllTopbarLinks] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/v1/menus/topbar`)
      .then((res) => res.json())
      .then((data) => setAllTopbarLinks(data));
  }, []);

  const getRandomItemsFromArray = (arr, randomCount) => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, randomCount);
  };

  return (
    <div className="text-zinc-500 py-8 bg-slate-100">
      <div className="container">
        <div className="flex justify-between px-6">
          <div className="flex">
            <ul className="flex">
              {getRandomItemsFromArray(allTopbarLinks, 5).map((link) => (
                <li key={link._id} className="top-bar__item">
                  <Link
                    to={link.href}
                    className="text-zinc-500 transition-all text-2xl px-4"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex">
            <div className="flex items-center">
              <a
                href="#"
                className="px-4 text-zinc-500 transition-all text-2xl px-4"
              >
                sabzlearn@gmail.com
              </a>
              <FaEnvelope className="text-3xl bg-lightishBlue-500" />
            </div>
            <div className="flex items-center">
              <a
                href="#"
                className="px-4 text-zinc-500 transition-all text-2xl px-4"
              >
                09921558293
              </a>
              <FaPhoneAlt className="text-3xl bg-lightishBlue-500" />{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
