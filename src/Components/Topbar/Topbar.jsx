import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

export default function Topbar() {
  const [allTopbarLinks, setAllTopbarLinks] = useState([]);
  const [indexInfo, setIndexInfo] = useState({});

  useEffect(() => {
    fetch(`http://localhost:4000/v1/menus/topbar`)
      .then((res) => res.json())
      .then((data) => setAllTopbarLinks(data));
    fetch("http://localhost:4000/v1/infos/index")
      .then((res) => res.json())
      .then((allInfos) => setIndexInfo(allInfos));
  }, []);

  const getRandomItemsFromArray = (arr, randomCount) => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, randomCount);
  };

  return (
    <div className="lg:fixed lg:flex lg:top-44 lg:right-0 lg:left-0 z-40 justify-between items-center lg:mx-auto dark:text-white">
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
                className="text-zinc-500 transition-all text-2xl px-4"
              >
                {indexInfo.email}
              </a>
              <FaEnvelope className="text-3xl" />
            </div>
            <div className="flex items-center">
              <a
                href="#"
                className="text-zinc-500 transition-all text-2xl px-4"
              >
                {indexInfo.phone}
              </a>
              <FaPhoneAlt className="text-3xl" />{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
