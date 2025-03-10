import React, { useEffect, useState } from "react";
import Input from "../../../Components/Form/Input";
import Button from "../../../Components/Form/Button";
import {
  requiredValidator,
  minValidator,
  maxValidator,
} from "./../../../validators/rules";
import { useForm } from "../../../hooks/useForm";
import Editor from "../../../Components/Form/Editor/Editor";
import DataTable from "./../../../Components/AdminPanel/DataTable/DataTable";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { HiMiniPlus, HiOutlineCheckCircle, HiXMark } from "react-icons/hi2";

export default function Articles() {
  const [articles, setArticles] = useState([]);
  const [categories, setCategories] = useState([]);
  const [articleCategory, setArticleCategory] = useState("-1");
  const [articleCover, setArticleCover] = useState({});
  const [articleBody, setArticleBody] = useState("محتوا");
  const [showAddArticle, setShowAddArticle] = useState(false);

  const [formState, onInputHandler] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      shortName: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  useEffect(() => {
    getAllArticles();
    fetch(`http://localhost:4000/v1/category`)
      .then((res) => res.json())
      .then((allCategories) => {
        setCategories(allCategories);
      });
  }, []);

  function getAllArticles() {
    fetch("http://localhost:4000/v1/articles")
      .then((res) => res.json())
      .then((allArticles) => {
        console.log(allArticles);
        setArticles(allArticles);
      });
  }

  const removeArticle = (articleID) => {
    const localStorageDate = JSON.parse(localStorage.getItem("user"));
    Swal.fire({
      title: "از حذف مقاله مطمعنی؟",
      icon: "warning",
      showDenyButton: true,
      confirmButtonText: "آره",
      denyButtonText: "نه",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:4000/v1/articles/${articleID}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorageDate.token}`,
          },
        }).then((res) => {
          if (res.ok) {
            Swal.fire({
              title: "مقاله مورد نظر با موفقیت حذف شد",
              icon: "success",
              confirmButtonText: "Ok",
            }).then(() => {
              getAllArticles();
            });
          }
        });
      }
    });
  };

  const addArticleHandler = () => {
    setShowAddArticle(!showAddArticle);
  };

  const createArticle = (event) => {
    event.preventDefault();
    const localStorageDate = JSON.parse(localStorage.getItem("user"));
    let formData = new FormData();
    formData.append("title", formState.inputs.title.value);
    formData.append("shortName", formState.inputs.shortName.value);
    formData.append("description", formState.inputs.description.value);
    formData.append("categoryID", articleCategory);
    formData.append("cover", articleCover);
    formData.append("body", articleBody);

    fetch(`http://localhost:4000/v1/articles`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorageDate.token}`,
      },
      body: formData,
    }).then((res) => {
      if (res.ok) {
        Swal.fire({
          title: "مقاله جدید منتشر شد",
          icon: "success",
          confirmButtonText: "Ok",
        }).then(() => {
          getAllArticles();
          setShowAddArticle(false);
        });
      }
    });
  };

  const saveArticleAsDraft = (event) => {
    event.preventDefault();
    const localStorageDate = JSON.parse(localStorage.getItem("user"));
    let formData = new FormData();
    formData.append("title", formState.inputs.title.value);
    formData.append("shortName", formState.inputs.shortName.value);
    formData.append("description", formState.inputs.description.value);
    formData.append("categoryID", articleCategory);
    formData.append("cover", articleCover);
    formData.append("body", articleBody);

    fetch(`http://localhost:4000/v1/articles/draft`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorageDate.token}`,
      },
      body: formData,
    }).then((res) => {
      if (res.ok) {
        Swal.fire({
          title: "مقاله جدید پیش نویس شد",
          icon: "success",
          confirmButtonText: "Ok",
        }).then(() => {
          getAllArticles();
          setShowAddArticle(false);
        });
      }
    });
  };

  return (
    <>
      {showAddArticle && (
        <section className="fixed left-0 right-0 md:right-[24rem] top-0 bottom-0 backdrop-blur-xs flex-center overflow-hidden z-50">
          <div className="mx-auto flex flex-col items-center w-min">
            <div className="flex flex-col items-center text-slate-900 dark:text-white bg-sky-950/20 dark:bg-slate-950/40 backdrop-blur-xs px-20 py-14 rounded-xl">
              <span className="flex items-center justify-between w-full font-EstedadMedium text-4xl mb-20">
                افزودن مقاله جدید
                <span
                  onClick={addArticleHandler}
                  className="rounded-full border border-slate-900 dark:border-white p-0.5 text-4xl cursor-pointer"
                >
                  <HiXMark />
                </span>
              </span>
              <form
                action="#"
                className="w-full flex items-center flex-col gap-y-8"
              >
                <div className="flex flex-col lg:flex-row items-center gap-x-6 gap-y-8">
                  <div className="h-20 flex items-center justify-between px-8 bg-white dark:bg-[#333c4c] rounded-lg">
                    <Input
                      id="title"
                      className="bg-transparent outline-hidden"
                      type="text"
                      placeholder="عنوان"
                      validations={[minValidator(5)]}
                      onInputHandler={onInputHandler}
                    />
                  </div>
                  <div className="min-h-20 flex items-center justify-between px-8 bg-white dark:bg-[#333c4c] rounded-lg">
                    <Input
                      id="shortName"
                      className="bg-transparent outline-hidden"
                      type="text"
                      placeholder="لینک"
                      validations={[minValidator(5)]}
                      onInputHandler={onInputHandler}
                    />
                  </div>
                  <div className="h-20 flex items-center justify-between px-8 bg-white dark:bg-[#333c4c] rounded-lg">
                    <Input
                      id="description"
                      element="textarea"
                      className="bg-transparent outline-hidden"
                      type="text"
                      placeholder="چکیده"
                      validations={[minValidator(5)]}
                      onInputHandler={onInputHandler}
                    />
                  </div>
                </div>

                <div className="flex items-center gap-x-6">
                  <Editor value={articleBody} setValue={setArticleBody} />
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-x-6 gap-y-8 w-full">
                  <div className="h-20 w-full flex items-center justify-between px-8 bg-white dark:bg-[#333c4c] rounded-lg">
                    <div className="flex items-center gap-x-2 w-[19.1rem]">
                      <label className="text-slate-900 dark:text-white/70">
                        کاور
                      </label>
                      <input
                        type="file"
                        id="file"
                        className="w-full bg-white/10 rounded-md p-1"
                        onChange={(event) => {
                          console.log(event.target.files[0]);
                          setArticleCover(event.target.files[0]);
                        }}
                      />
                    </div>
                  </div>
                  <div className="h-20 w-full flex items-center justify-between px-8 bg-white dark:bg-[#333c4c] rounded-lg">
                    <div className="flex items-center gap-x-2">
                      <label className="text-xl text-slate-900 dark:text-white/70">
                        دسته‌بندی
                      </label>
                      <select
                        className="text-xl text-slate-900 dark:text-white/70 dark:bg-white/10 rounded-md py-2.5 px-1"
                        onChange={(event) =>
                          setArticleCategory(event.target.value)
                        }
                      >
                        <option value={"-1"}>را انتخاب نمایید</option>
                        {categories.map((category) => (
                          <>
                            <option
                              className="text-slate-900 text-[1.6rem]"
                              value={category._id}
                            >
                              {category.title}
                            </option>
                          </>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
                <div className="flex w-full gap-x-6 items-center">
                  <Button
                    className={`h-20 w-full mt-4 rounded-lg ${
                      formState.isFormValid
                        ? "bg-sky-600/40 hover:bg-sky-600/60"
                        : "bg-[#333c4c]/30"
                    }`}
                    type="submit"
                    onClick={createArticle}
                    disabled={!formState.isFormValid}
                  >
                    <span className="mx-auto font-EstedadMedium">انتشار</span>
                  </Button>
                  <Button
                    className={`h-20 w-full mt-4 rounded-lg ${
                      formState.isFormValid
                        ? "bg-sky-600/40 hover:bg-sky-600/60"
                        : "bg-[#333c4c]/30"
                    }`}
                    type="submit"
                    onClick={saveArticleAsDraft}
                    disabled={!formState.isFormValid}
                  >
                    <span className="mx-auto font-EstedadMedium">پیش نویس</span>
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>
      )}

      <DataTable
        title="مقاله‌ها"
        btnTitle={"ایجاد مقاله"}
        icon={<HiMiniPlus />}
        eventHandler={addArticleHandler}
      >
        <div className="pb-2 md:pb-4 md:pr-5 overflow-x-auto">
          <div className="min-w-[840px] md:min-w-[900px] grid grid-cols-12 text-xl md:text-2xl font-EstedadMedium items-center text-center bg-white dark:bg-slate-800 h-16 md:h-20 px-3 mb-6 rounded-lg">
            <div className="col-span-1 text-nowrap">شناسه</div>
            <div className="col-span-3">عنوان</div>
            <div className="col-span-3">لینک</div>
            <div className="col-span-2">نویسنده</div>
            <div className="col-span-1">وضعیت</div>
            <div className="col-span-1">مشاهده</div>
            <div className="col-span-1">حذف</div>
          </div>

          <div
            className="min-w-[840px] md:min-w-[900px] space-y-6"
            id="container_orders"
          >
            {articles.map((article, index) => (
              <>
                <div
                  key={article.title}
                  className="grid grid-cols-12 items-center text-xl md:text-2xl text-center bg-white dark:bg-slate-800 h-16 md:h-20 rounded-lg divide-x divide-x-reverse divide-sky-400/80 dark:divide-[#333c4c] *:px-3"
                >
                  <div className="col-span-1">{index + 1}</div>

                  <div className="col-span-3">{article.title}</div>

                  <div className="col-span-3">{article.shortName}</div>

                  <div className="col-span-2">{article.creator.name}</div>

                  <div className="col-span-1">
                    {article.publish === 1 ? "منتشر شده" : "پیش‌نویس"}
                  </div>

                  <div className="col-span-1">
                    {article.publish === 1 ? (
                      <div className="flex-center text-sky-600 dark:text-sky-100/90 text-6xl">
                        <HiOutlineCheckCircle />
                      </div>
                    ) : (
                      <Link
                        to={`draft/${article.shortName}`}
                        class="btn btn-primary edit-btn"
                      >
                        ادامه نوشتن
                      </Link>
                    )}
                  </div>

                  <div className="col-span-1">
                    <div
                      onClick={() => removeArticle(article._id)}
                      className="inline-flex items-center justify-center bg-red-100 dark:bg-red-500/10 text-red-500 dark:text-red-200 font-EstedadMedium text-xl md:text-2xl py-2 px-5 xl:px-6 rounded-sm select-none cursor-pointer"
                    >
                      حذف
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </DataTable>
    </>
  );
}
