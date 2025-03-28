import { Link } from "react-router-dom";
import { HiChevronLeft } from "react-icons/hi2";
import { PiUserLight } from "react-icons/pi";
import { HiOutlineCalendar } from "react-icons/hi";

export default function ArticleBox(props) {
  return (
    <div className="blog flex flex-col bg-white dark:bg-slate-800 text-slate-900 dark:text-white overflow-hidden rounded-lg">
      {/* <!-- Blog Banner --> */}
      <div className="blog__banner relative h-[182px] overflow-hidden">
        <Link to={`/article-info/${props.shortName}`}>
          <img
            src={`http://localhost:4000/courses/covers/${props.cover}`}
            className="block w-full h-full object-cover"
            alt="Article-Image"
            loading="lazy"
          />
        </Link>
        <div className="absolute bottom-0 right-0 left-0 h-44 bg-linear-to-t from-white dark:from-slate-800 from-0% via-white/[55%] dark:via-slate-800/[55%] via-40% to-white/0 dark:to-slate-800/0 to-100%"></div>
      </div>
      {/* <!-- Blog Title & Description --> */}
      <div className="grow px-7 py-6">
        {/* <!-- Blog Title --> */}
        <h3 className="font-EstedadMedium text-[1.7rem] line-clamp-2 mb-5">
          <Link to={`/article-info/${props.shortName}`}>{props.title}</Link>
        </h3>
        {/* <!-- Blog Description --> */}
        <p className="text-2xl line-clamp-4 opacity-70">{props.description}</p>
      </div>
      {/* <!-- Blog Footer --> */}
      <div className="px-7 pb-8">
        {/* <!-- Blog Author & Date --> */}
        <div className="flex justify-between items-center text-blue-gray-700 dark:text-white/70 text-xl pb-6 border-b border-b-gray-400/70 dark:border-b-white/10">
          <div className="flex items-center gap-x-1">
            <div className="text-3xl">
              <PiUserLight />
            </div>
            <Link to={`/user/${props.creator._id}`}>{props.creator.name}</Link>
          </div>
          <div className="flex items-center gap-x-1">
            <div className="text-3xl">
              <HiOutlineCalendar />
            </div>
            <span>{props.createdAt.slice(0, 10)}</span>
          </div>
        </div>
        {/* <!-- Blog Link Address --> */}
        <div className="flex justify-center mt-7">
          <Link
            to={`/article-info/${props.shortName}`}
            className="flex items-center gap-x-1 text-3xl text-sky-600 dark:text-sky-400 hover:text-purple-400 font-EstedadMedium transition-colors"
          >
            <span>مطالعه مقاله</span>
            <HiChevronLeft />
          </Link>
        </div>
      </div>
    </div>
  );
}
