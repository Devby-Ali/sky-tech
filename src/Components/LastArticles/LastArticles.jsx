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
              title="بهترین زبان برنامه نویسی برای مهاجرت به کانادا"
              cover="images/blog/4.png"
              desc="تصور کنید در کشوری زندگی می‌کنید که فرصت‌های شغلی جذاب و متنوعی برای شما وجود دارد، حقوق و مزایا بسیار رقابتی است و از استانداردهای بالای زندگی بهره‌مند هستید..."
            />
            <ArticleBox
              title="4 مورد از آسان ترین زبان های برنامه نویسی برای یادگیری"
              cover="images/blog/3.jpg"
              desc="شاید برایتان جالب باشد بدانید که اولین کد برنامه‌نویسی دنیا چطور نوشته شد؛ نه پیچیده بود، نه طولانی. تنها چند خط ساده که شروع انقلاب فناوری شد. حالا شما هم…"
            />
            <ArticleBox
              title="برنامه نویسی را از چه سنی شروع کنیم"
              cover="images/blog/2.jpg"
              desc="برنامه‌نویسی دیگر فقط یک مهارت تخصصی نیست. بلکه تبدیل به یکی از مهم‌ترین توانایی‌های قرن ۲۱ شده است. از طراحی وب‌سایت‌ها گرفته تا ساخت اپلیکیشن‌های ... "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
