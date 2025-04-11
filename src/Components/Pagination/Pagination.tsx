import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CourseBoxProp } from "types/Courses.types";
import Article from "types/Atricles.types";

interface PaginationProps {
  items: Article[] | CourseBoxProp[];
  itemsCount: number;
  pathName: string;
  setShownItems: React.Dispatch<
    React.SetStateAction<Article[] | CourseBoxProp[]>
  >;
}

const Pagination = ({
  items,
  itemsCount,
  pathName,
  setShownItems,
}: PaginationProps) => {
  const [pagesCount, setPagesCount] = useState<number | null>(null);

  const { page } = useParams<{ page: string }>();

  useEffect(() => {
    const endIndex = itemsCount * Number(page);
    const startIndex = endIndex - itemsCount;
    const PaginatedItems = items.slice(startIndex, endIndex);
    setShownItems(PaginatedItems);
    const pagesNumber = Math.ceil(items.length / itemsCount);
    setPagesCount(pagesNumber);
  }, [page, items, itemsCount, setShownItems]);

  return (
    <div className="my-12">
      <ul className="flex-center text-slate-900 dark:text-white">
        {Array(pagesCount)
          .fill(0)
          .map((item, index) => (
            <li key={`page-${index}`} className="courses__pagination-item">
              <Link
                to={`${pathName}/${index + 1}`}
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
};

export default Pagination;
