import React, { useState } from "react";
import Editor from "../../../Components/Form/Editor/Editor";

export default function Draft() {

  const [articleBody, setArticleBody] = useState("")

  return (
    <>

          <section className="flex-center overflow-hidden mt-12">
            <div className="mx-auto flex flex-col items-center w-min">
              <div className="flex flex-col items-center text-darkColor dark:text-white bg-light-blue-500/20 dark:bg-[#2f3749]/40 backdrop-blur-[4px] px-10 pb-10 pt-8 rounded-3xl z-10">
                <span className="block font-EstedadMedium text-4xl mb-14 mt-4">
                  افزودن مقاله جدید
                </span>
                <form
                  action="#"
                  className="w-full flex items-center flex-col gap-y-8"
                >
                  <div className="flex items-center gap-x-6">
                    <div className="h-20 flex items-center justify-between px-4 bg-white dark:bg-[#333c4c] rounded-2xl">
                      <input
                      className="bg-transparent outline-none"
                        type="text"
                        placeholder="عنوان"
                      />
                    </div>
                    <div className="min-h-20 flex items-center justify-between px-4 bg-white dark:bg-[#333c4c] rounded-2xl">
                      <input
                        className="bg-transparent outline-none"
                        type="text"
                        placeholder="لینک"
                      />
                    </div>
                    <div className="h-20 flex items-center justify-between px-4 bg-white dark:bg-[#333c4c] rounded-2xl">
                      <input
                        className="bg-transparent outline-none"
                        type="text"
                        placeholder="چکیده"
                      />
                    </div>
                  </div>
    
                  <div className="flex items-center gap-x-6">
                    <Editor value={articleBody} setValue={setArticleBody} />
                  </div>
    
                  <div className="flex items-center gap-x-6">
                    <div className="h-20 flex items-center justify-between px-4 bg-white dark:bg-[#333c4c] rounded-2xl">
                      <div className="flex items-center gap-x-2 w-[19.1rem]">
                        <label className="text-darkColor dark:text-white/70">
                          کاور
                        </label>
                        <input
                          type="file"
                          id="file"
                          className="w-full bg-white/10 rounded-md p-1"
                        />
                      </div>
                    </div>
                    <div className="h-20 flex items-center justify-between px-4 bg-white dark:bg-[#333c4c] rounded-2xl">
                      <div className="flex items-center gap-x-2">
                        <label className="text-xl text-darkColor dark:text-white/70">
                          دسته‌بندی
                        </label>
                        <select
                          className="text-xl text-darkColor dark:text-white/70 dark:bg-white/10 rounded-md py-2.5 px-1"
                        >
                          <option value={"-1"}>را انتخاب نمایید</option>
                          {/* {categories.map((category) => (
                            <>
                              <option
                                className="text-darkColor text-[1.6rem]"
                                value={category._id}
                              >
                                {category.title}
                              </option>
                            </>
                          ))} */}
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-[80%] gap-x-6 items-center">
                    <button
                      className={`h-20 w-full mt-4 rounded-lg bg-light-blue-600/40 hover:bg-light-blue-600/60`}
                      type="submit"
                    >
                      <span className="mx-auto">انتشار</span>
                    </button>
                    <button
                      className={`h-20 w-full mt-4 rounded-lg bg-light-blue-600/40 hover:bg-light-blue-600/60`}
                      type="submit"
                    >
                      <span className="mx-auto">پیش نویس</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </section>

    </>
  );
}
