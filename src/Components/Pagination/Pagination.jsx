import React, { useEffect, useState } from "react";
import { HiChevronLeft } from "react-icons/hi2";
import { useParams } from "react-router-dom";

export default function Pagination({
  items,
  itemsCount,
  pathName,
  setShownCourses,
}) {
  const [pageCount, setPageCount] = useState(null);

  const { page } = useParams();

  useEffect(() => {
    let endIndex = itemsCount * page;
    let startIndex = endIndex - itemsCount;
    let PaginatedItems = items.slice(startIndex, endIndex);
    setShownCourses(PaginatedItems);
    let pagesNumber = Math.ceil(items.length / itemsCount);
    setPageCount(pagesNumber);
  }, [page, items]);

  return (
    <div className="my-12">
      <ul className="flex-center text-darkColor dark:text-white">
        <li className="courses__pagination-item">
          <a
            href="#"
            className="rounded-lg w-16 h-16 flex-center text-2xl mx-2 rotate-180 hover:bg-cyan-700"
          >
            <HiChevronLeft />
          </a>
        </li>
        <li className="courses__pagination-item">
          <a
            href="#"
            className="rounded-lg w-16 h-16 flex-center text-2xl mx-2 hover:bg-cyan-700"
          >
            1
          </a>
        </li>
        <li className="courses__pagination-item">
          <a
            href="#"
            className="rounded-lg w-16 h-16 flex-center text-2xl mx-2 hover:bg-cyan-700"
          >
            2
          </a>
        </li>
        <li className="courses__pagination-item">
          <a
            href="#"
            className="rounded-lg w-16 h-16 flex-center text-2xl mx-2 hover:bg-cyan-700 active"
          >
            3
          </a>
        </li>
        <li className="courses__pagination-item">
          <a
            href="#"
            className="rounded-lg w-16 h-16 flex-center text-2xl mx-2 hover:bg-cyan-700"
          >
            <HiChevronLeft />
          </a>
        </li>
      </ul>
    </div>
  );
}
