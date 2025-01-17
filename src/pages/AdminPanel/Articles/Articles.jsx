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
import { Card, Typography } from "@material-tailwind/react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { HiOutlineCheckCircle } from "react-icons/hi2";

const TABLE_HEAD = [
  "شناسه",
  "عنوان",
  "لینک",
  "نویسنده",
  "وضعیت",
  "مشاهده",
  "ویرایش",
  "حذف",
];

export default function Articles() {
  const [articles, setArticles] = useState([]);
  const [categories, setCategories] = useState([]);
  const [articleCategory, setArticleCategory] = useState("-1");
  const [articleCover, setArticleCover] = useState({});
  const [articleBody, setArticleBody] = useState("محتوا");

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
        });
      }
    });
  };

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
                  <Input
                    id="title"
                    className="bg-transparent outline-none"
                    type="text"
                    placeholder="عنوان"
                    validations={[minValidator(5)]}
                    onInputHandler={onInputHandler}
                  />
                </div>
                <div className="min-h-20 flex items-center justify-between px-4 bg-white dark:bg-[#333c4c] rounded-2xl">
                  <Input
                    id="shortName"
                    className="bg-transparent outline-none"
                    type="text"
                    placeholder="لینک"
                    validations={[minValidator(5)]}
                    onInputHandler={onInputHandler}
                  />
                </div>
                <div className="h-20 flex items-center justify-between px-4 bg-white dark:bg-[#333c4c] rounded-2xl">
                  <Input
                    id="description"
                    element="textarea"
                    className="bg-transparent outline-none"
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
                      onChange={(event) => {
                        console.log(event.target.files[0]);
                        setArticleCover(event.target.files[0]);
                      }}
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
                      onChange={(event) =>
                        setArticleCategory(event.target.value)
                      }
                    >
                      <option value={"-1"}>را انتخاب نمایید</option>
                      {categories.map((category) => (
                        <>
                          <option
                            className="text-darkColor text-[1.6rem]"
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
              <div className="flex w-[80%] gap-x-6 items-center">
                <Button
                  className={`h-20 w-full mt-4 rounded-lg ${
                    formState.isFormValid
                      ? "bg-light-blue-600/40 hover:bg-light-blue-600/60"
                      : "bg-[#333c4c]/30"
                  }`}
                  type="submit"
                  onClick={createArticle}
                  disabled={!formState.isFormValid}
                >
                  <span className="mx-auto">انتشار</span>
                </Button>
                <Button
                  className={`h-20 w-full mt-4 rounded-lg ${
                    formState.isFormValid
                      ? "bg-light-blue-600/40 hover:bg-light-blue-600/60"
                      : "bg-[#333c4c]/30"
                  }`}
                  type="submit"
                  onClick={saveArticleAsDraft}
                  disabled={!formState.isFormValid}
                >
                  <span className="mx-auto">پیش نویس</span>
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <DataTable title="مقاله‌ها">
        <Card className="h-full w-full rounded-md overflow-scroll dark:bg-darkBox">
          <table className="w-full min-w-max table-auto text-center">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-b-4 border-b-darkBox/30 dark:border-[#333c4c] pb-10 pt-12"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="text-4xl font-EstedadBold leading-none text-darkColor dark:text-white/70 mx-10"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {articles.map((article, index) => {
                const isLast = index === articles.length - 1;
                const classes = isLast
                  ? "py-6"
                  : "py-6 border-b border-gray-400";

                return (
                  <tr
                    key={article.title}
                    className="bg-gradient-to-l h-28 from-lightishBlue-500/15 via-transparent via-20% to-light-blue-700/15 hover:bg-light-blue-50 dark:hover:bg-light-blue-200/5"
                  >
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="text-2xl font-EstedadBold text-darkColor dark:text-white/90"
                      >
                        {index + 1}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        className="text-darkBox dark:text-white/90 text-[1.6rem] font-EstedadLight"
                      >
                        {article.title}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        className="text-darkBox dark:text-white/90 text-[1.6rem] font-EstedadLight"
                      >
                        {article.shortName}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        className="text-darkBox dark:text-white/90 text-[1.6rem] font-EstedadLight"
                      >
                        {article.creator.name}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        className="text-darkBox dark:text-white/90 text-[1.6rem] font-EstedadLight"
                      >
                        {article.publish === 1 ? "منتشر شده" : "پیش‌نویس"}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        className="text-darkBox dark:text-white/90 text-[1.6rem] font-EstedadLight"
                      >
                        {article.publish === 1 ? (
                          <div className="flex-center text-light-blue-600 dark:text-light-blue-100/90 text-6xl">
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
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        className="text-darkBox dark:text-white/90 text-[1.6rem] font-EstedadLight"
                      >
                        <button type="button">ویرایش</button>
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        className="text-darkBox dark:text-white/90 text-[1.6rem] font-EstedadLight"
                      >
                        <button
                          type="button"
                          onClick={() => removeArticle(article._id)}
                        >
                          حذف
                        </button>
                      </Typography>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Card>
      </DataTable>
    </>
  );
}
