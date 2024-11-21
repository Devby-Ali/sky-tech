import React from "react";
import ArticleBox from "../ArticleBox/ArticleBox";
import SectionHeader from "../SectionHeader/SectionHeader";

export default function LastArticles() {
  return (
    <section className="my-5">
      <div className="container">
        <SectionHeader
          title="وبلاگ آموزشی SKY-Tech"
          desc="پیش به سوی ارتقای دانش"
          btnTitle="مشاهده همه مقالات"
        />

        <div className="articles__content">
          <div className="grid grid-rows-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 sm:gap-10">
            <ArticleBox
              title="نحوه نصب کتابخانه در پایتون | آموزش نصب کتابخانه پایتون"
              cover="images/blog/1.jpg"
              desc="در دنیای امروز، بسیاری از افراد به دنبال راهی برای افزایش درآمد و کسب مهارت‌های جدید هستند، بدون این‌که نیاز باشد از شغل اصلی خود دست بکشند."
            />
            <ArticleBox
              title="نحوه نصب کتابخانه در پایتون | آموزش نصب کتابخانه پایتون"
              cover="images/blog/4.png"
              desc="زبان پایتون هم مانند دیگر زبان­های برنامه نویسی رایج، دارای کتابخانه های مختلفی برای تسریع..."
            />
            <ArticleBox
              title="نحوه نصب کتابخانه در پایتون | آموزش نصب کتابخانه پایتون"
              cover="images/blog/3.jpg"
              desc="زبان پایتون هم مانند دیگر زبان­های برنامه نویسی رایج، دارای کتابخانه های مختلفی برای تسریع..."
            />
            <ArticleBox
              title="نحوه نصب کتابخانه در پایتون | آموزش نصب کتابخانه پایتون"
              cover="images/blog/2.jpg"
              desc="زبان پایتون هم مانند دیگر زبان­های برنامه نویسی رایج، دارای کتابخانه های مختلفی برای تسریع..."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
