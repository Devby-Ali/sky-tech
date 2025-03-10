import React, { useEffect, useState } from "react";
import Input from "../../../Components/Form/Input";
import Button from "../../../Components/Form/Button";
import { requiredValidator, minValidator } from "./../../../validators/rules";
import Swal from "sweetalert2";
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "../../../hooks/useForm";

export default function Draft() {
  const [draft, setDraft] = useState([]);
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

  const { shortName } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:4000/v1/articles/${shortName}`)
      .then((res) => res.json())
      .then((draft) => {
        setDraft(draft);
        setArticleCategory(draft.categoryID._id);
        console.log(draft);
      });
    fetch(`http://localhost:4000/v1/category`)
      .then((res) => res.json())
      .then((allCategories) => {
        setCategories(allCategories);
      });
  }, []);

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
          navigate("/p-admin/articles");
        });
      }
    });
  };

  return (
    <>
      <section className="flex-center overflow-hidden mt-12">
        <div className="mx-auto flex flex-col items-center w-min">
          <div className="flex flex-col items-center text-slate-900 dark:text-white bg-sky-500/20 dark:bg-[#2f3749]/40 backdrop-blur-[4px] px-10 pb-10 pt-8 rounded-3xl z-10">
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
                    className="bg-transparent outline-hidden"
                    type="text"
                    placeholder={draft.title}
                    validations={[minValidator(5)]}
                    onInputHandler={onInputHandler}
                  />
                </div>
                <div className="min-h-20 flex items-center justify-between px-4 bg-white dark:bg-[#333c4c] rounded-2xl">
                  <Input
                    id="shortName"
                    className="bg-transparent outline-hidden"
                    type="text"
                    placeholder={draft.shortName}
                    validations={[minValidator(5)]}
                    onInputHandler={onInputHandler}
                  />
                </div>
                <div className="h-20 flex items-center justify-between px-4 bg-white dark:bg-[#333c4c] rounded-2xl">
                  <Input
                    id="description"
                    element="textarea"
                    className="bg-transparent outline-hidden"
                    type="text"
                    placeholder={draft.description}
                    validations={[minValidator(5)]}
                    onInputHandler={onInputHandler}
                  />
                </div>
              </div>

              <div className="flex items-center gap-x-6">
                {/* <Editor value={draft.body} setValue={setArticleBody} /> */}
              </div>

              <div className="flex items-center gap-x-6">
                <div className="h-20 flex items-center justify-between px-4 bg-white dark:bg-[#333c4c] rounded-2xl">
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
                <div className="h-20 flex items-center justify-between px-4 bg-white dark:bg-[#333c4c] rounded-2xl">
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

              <Button
                className={`h-20 w-[51%] mt-4 rounded-lg ${
                  formState.isFormValid
                    ? "bg-sky-600/40 hover:bg-sky-600/60"
                    : "bg-[#333c4c]/30"
                }`}
                type="submit"
                onClick={createArticle}
                disabled={!formState.isFormValid}
              >
                <span className="mx-auto">انتشار</span>
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
