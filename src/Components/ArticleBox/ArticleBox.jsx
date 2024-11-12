import React from "react";

export default function ArticleBox({ title, desc, cover }) {
  return (
    <div className="flex flex-col bg-white shadow-normal overflow-hidden rounded-2xl transition-all hover:-translate-y-2">
      <div className="flex-center">
        <a className="h-96 overflow-hidden" href="#">
          <img
            src={cover}
            className="rounded-t-2xl object-cover bg-bottom"
            alt="Article Cover"
            loading="lazy"
          />
        </a>
      </div>
      <div className="flex-grow px-5 py-3">
        <a href="#" className="font-EstedadBold line-clamp-2 mb-3">
          {title}
        </a>
        <p className="text-zinc-500 text-xl line-clamp-4">{desc}</p>
      </div>
      <div className="mt-4">
        <a
          href="#"
          className="flex-center text-white text-3xl tracking-tighter bg-cyan-600 rounded-b-2xl h-20 md:h-16 px-3 md:px-5 hover:bg-emerald-500 hover:text-white transition-all"
        >
          بیشتر بخوانید
        </a>
      </div>
    </div>
  );
}
