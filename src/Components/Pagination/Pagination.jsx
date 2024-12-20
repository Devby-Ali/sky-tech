import React, { useEffect, useState } from "react";
import { HiChevronLeft } from "react-icons/hi2";
import { Link, useParams } from "react-router-dom";

export default function Pagination({
  items,
  itemsCount,
  pathName,
  setShownItems,
}) {
  const [pagesCount, setPagesCount] = useState(null);

  const { page } = useParams();

  useEffect(() => {
    let endIndex = itemsCount * page;
    let startIndex = endIndex - itemsCount;
    let PaginatedItems = items.slice(startIndex, endIndex);
    setShownItems(PaginatedItems);
    let pagesNumber = Math.ceil(items.length / itemsCount);
    setPagesCount(pagesNumber);
  }, [page, items]);

  return (
    <div className="my-12">
      <ul className="flex-center text-darkColor dark:text-white">
        {Array(pagesCount)
          .fill(0)
          .map((item, index) => (
            <>
            <li className="courses__pagination-item">
              <Link
                to={`${pathName}/${index + 1}`}
                className={`rounded-lg w-16 h-16 flex-center text-2xl mx-2 ${
                  index + 1 === Number(page) ? "bg-light-blue-500" : null
                } hover:bg-light-blue-400/70`}
              >
                {index + 1}
              </Link>
            </li>
            </>
          ))}
      </ul>
    </div>
  );
}
