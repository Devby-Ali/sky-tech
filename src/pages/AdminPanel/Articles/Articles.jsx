import React, { useEffect, useState } from "react";
import DataTable from "./../../../Components/AdminPanel/DataTable/DataTable";
import { Card, Typography } from "@material-tailwind/react";
import Swal from "sweetalert2";

const TABLE_HEAD = ["شناسه", "عنوان", "لینک", "نویسنده", "ویرایش", "حذف"];

export default function Articles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getAllArticles();
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

  return (
    <>
      <DataTable title="مقاله‌ها">
        <Card className="h-full w-full rounded-md overflow-scroll px-6">
          <table className="w-full min-w-max table-auto text-center">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-b-4 border-gray-400 pb-10 pt-12"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="text-4xl font-EstedadBold leading-none"
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
                  <tr key={article.title} className="hover:bg-gray-50">
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="text-2xl font-EstedadBold"
                      >
                        {index + 1}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        className="text-darkBox text-[1.6rem] font-EstedadLight"
                      >
                        {article.title}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        className="text-darkBox text-[1.6rem] font-EstedadLight"
                      >
                        {article.shortName}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        className="text-darkBox text-[1.6rem] font-EstedadLight"
                      >
                        {article.creator.name}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        className="text-darkBox text-[1.6rem] font-EstedadLight"
                      >
                        <button type="button">ویرایش</button>
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        className="text-darkBox text-[1.6rem] font-EstedadLight"
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
