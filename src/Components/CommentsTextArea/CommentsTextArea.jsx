import React from "react";


export default function CommentsTextArea() {
  return (
    <div className="flex flex-col">
      <span className="text-xl text-slate-700">دیدگاهتان را بنویسید</span>
      <span className="my-6 text-2xl">
        <a href="#">با عنوان محمدامین سعیدی راد وارد شده اید.</a>
        <a href="#">خارج میشوید? </a>
        بخش های موردنیاز علامت گذاری شده اند *
      </span>
      <div className="flex flex-col">
        <span className="text-2xl text-zinc-600">دیدگاه *</span>
        <textarea className="h-72 rounded-lg border border-red-600 shadow-normal"></textarea>
      </div>
      <button type="submit" className="mt-8 max-w-60 py-3 px-7 bg-cyan-600 text-white border-none rounded-lg text-2xl mb-12" onClick={() => console.log('کامنت ثبت شد')}>
        فرستادن دیدگاه
      </button>
    </div>
  );
}


// export default function CommentsTextArea() {
//   return (
//     <div className="flex flex-col">
//       <span className="text-xl text-slate-700">دیدگاهتان را بنویسید</span>
//       <span className="my-6 text-2xl">
//         <a href="#">با عنوان محمدامین سعیدی راد وارد شده اید.</a>
//         <a href="#">خارج میشوید? </a>
//         بخش های موردنیاز علامت گذاری شده اند *
//       </span>
//       <div className="flex flex-col">
//         <span className="text-2xl text-zinc-600">دیدگاه *</span>
//         <textarea className="h-72 rounded-lg border border-red-600 shadow-normal"></textarea>
//       </div>
//       <button type="submit" className="mt-8 max-w-60 py-3 px-7 bg-cyan-600 text-white border-none rounded-lg text-2xl mb-12" onClick={() => console.log('کامنت ثبت شد')}>
//         فرستادن دیدگاه
//       </button>
//     </div>
//   );
// }
