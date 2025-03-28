import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Pagination(props) {
  const [pagesCount, setPagesCount] = useState(null);

  const { page } = useParams();

  useEffect(() => {
    let endIndex = props.itemsCount * page;
    let startIndex = endIndex - props.itemsCount;
    let PaginatedItems = props.items.slice(startIndex, endIndex);
    props.setShownItems(PaginatedItems);
    let pagesNumber = Math.ceil(props.items.length / props.itemsCount);
    setPagesCount(pagesNumber);
  }, [page, props.items]);

  return (
    <div className="my-12">
      <ul className="flex-center text-slate-900 dark:text-white">
        {Array(pagesCount)
          .fill(0)
          .map((item, index) => (
            <li key={`page-${index}`} className="courses__pagination-item">
              <Link
                to={`${props.pathName}/${index + 1}`}
                className={`rounded-lg w-16 h-16 flex-center text-2xl mx-2 ${
                  index + 1 === Number(page) ? "bg-sky-500" : null
                } hover:bg-sky-400/70`}
              >
                {index + 1}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
