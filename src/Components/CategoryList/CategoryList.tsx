import { useEffect, useState } from "react";
import { HiChevronDown, HiOutlineFolderOpen } from "react-icons/hi2";
import Button from "../Form/Button";
import Category from "types/Category.types";

type ApiResponse = Category[];

const API_URL = "http://localhost:4000/v1/category";

const CoursesFilter = (): React.JSX.Element => {
  const [filterOpen, setFilterOpen] = useState<boolean>(false);
  const [category, setCategory] = useState<Category[]>([]);

  const filterOpenHandler = (): void => {
    setFilterOpen(!filterOpen);
  };

  useEffect(() => {
    const fetchCategories = async (): Promise<void> => {
      try {
        const response = await fetch(API_URL);
        const data: ApiResponse = await response.json();
        setCategory(data);
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error("Error fetching categories:", error.message);
        }
      }
    };
    fetchCategories();
  }, []);

  return (
    <div>
      {!filterOpen ? (
        // Category Filter Close
        <div className="hidden md:flex items-center justify-between h-[6.8rem] bg-white dark:bg-slate-800 rounded-[1.2rem] p-7 md:px-8">
          <div className="flex items-center gap-x-4 font-EstedadMedium text-[1.7rem] select-none">
            <div className="text-[2.7rem]">
              <HiOutlineFolderOpen />
            </div>
            دسته بندی دوره ها{" "}
          </div>
          <button onClick={() => filterOpenHandler()} className="text-4xl">
            <HiChevronDown />
          </button>
        </div>
      ) : (
        // Category Filter Open
        <div
          className="bg-white dark:bg-slate-800 rounded-[1.2rem] hidden md:block overflow-hidden"
          id="category-collapse"
        >
          <div className="hidden md:flex items-center justify-between h-[6.8rem] bg-white dark:bg-slate-800 py-7 mx-8 border-b border-b-gray-300 dark:border-b-white/10">
            <div className="flex items-center gap-x-4 font-EstedadMedium text-[1.7rem] select-none">
              <div className="text-[2.7rem]">
                <HiOutlineFolderOpen />
              </div>
              دسته بندی دوره ها{" "}
            </div>
            <button
              type="button"
              data-collapse="#category-collapse"
              data-height="h-16"
            >
              <div
                onClick={() => filterOpenHandler()}
                className="text-4xl rotate-180"
              >
                <HiChevronDown />
              </div>
            </button>
          </div>
          <div className="flex flex-col space-y-6 mx-8 my-8">
            {category.map((category) => (
              <Button
                key={category._id}
                to={`/category-info/${category.name}/1`}
                className="flex items-center gap-x-4"
              >
                <input className="w-7 h-7 opacity-50" type="checkbox" />
                <span className="text-[1.7rem] select-none">
                  {category.title}
                </span>
              </Button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CoursesFilter;
