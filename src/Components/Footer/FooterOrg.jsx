import React from "react";
import FooterItem from "../FooterItem/FooterItem";

export default function Footer() {
  return (
    <footer className="mt-8">
      <div className="container">
        <div className="bg-slate-200 rounded-2xl py-16 px-14 relative mb-20">
          <div className="grid grid-cols-3 gap-5">
            <FooterItem title="درباره ما">
              <p className="text-zinc-500">
                وقتی تازه شروع به یادگیری برنامه نویسی کردم. یکی از مشکلاتی که
                در فرآیند یادگیری داشتم، کمبود آموزش های خوب با پشتیبانی قابل
                قبول بود که باعث شد اون موقع تصمیم بگیرم اگر روزی توانایی مالی و
                فنی قابل قبولی داشتم یک وب سایت برای حل این مشکل راه اندازی کنم!
                و خب امروز آکادمی آموزش برنامه نویسی سبزلرن به عنوان یک آکادمی
                خصوصی فعالیت میکنه و این به این معنی هست که هر مدرسی اجازه تدریس
                در اون رو نداره و باید از فیلترینگ های خاص آکادمی سبزلرن رد شه!
                این به این معنی هست که ما برامون فن بیان و نحوه تعامل مدرس با
                دانشجو بسیار مهمه! ما در آکادمی سبزلرن تضمین پشتیبانی خوب و با
                کیفیت رو به شما میدیم . چرا که مدرسین وب سایت سبزلرن حتی برای
                پشتیبانی دوره های رایگان شون هم هزینه دریافت میکنند و متعهد
                هستند که هوای کاربر های عزیز رو داشته باشند !
              </p>
            </FooterItem>

            <FooterItem title="آخرین مطالب">
              <div className="flex flex-col">
                <a href="#" className="block mb-4">
                  نحوه نصب کتابخانه در پایتون | آموزش نصب کتابخانه پایتون
                </a>
                <a href="#" className="block mb-4">
                  چگونه پایتون را آپدیت کنیم؟ | آموزش صفر تا صد آپدیت کردن
                  پایتون
                </a>
                <a href="#" className="block mb-4">
                  آموزش نصب پایتون ( Python ) در در مک، ویندوز و لینوکس | گام به
                  گام و تصویری
                </a>
                <a href="#" className="block mb-4">
                  بهترین فریم ورک های فرانت اند | 16 فریم ورک Front end بررسی
                  معایب و مزایا
                </a>
                <a href="#" className="block mb-4">
                  معرفی بهترین سایت آموزش جاوا اسکریپت [ تجربه محور ] + آموزش
                  رایگان
                </a>
              </div>
            </FooterItem>

            <FooterItem title="دسترسی سریع">
              <div className="row">
                <div className="col-6">
                  <a href="#" className="block mb-4">
                    آموزش HTML
                  </a>
                </div>

                <div className="col-6">
                  <a href="#" className="block mb-4">
                    آموزش CSS
                  </a>
                </div>

                <div className="col-6">
                  <a href="#" className="block mb-4">
                    آموزش جاوا اسکریپت
                  </a>
                </div>
                <div className="col-6">
                  <a href="#" className="block mb-4">
                    آموزش بوت استرپ
                  </a>
                </div>
                <div className="col-6">
                  <a href="#" className="block mb-4">
                    آموزش ریکت
                  </a>
                </div>

                <div className="col-6">
                  <a href="#" className="block mb-4">
                    آموزش پایتون
                  </a>
                </div>
              </div>
            </FooterItem>
          </div>
        </div>
      </div>

      <div className="slex-center py-12 bg-slate-200">
        <span className="text-slate-400 font-EstedadBold">
          کلیه حقوق برای آکادمی آموزش برنامه نویسی سبز لرن محفوظ است.
        </span>
      </div>
    </footer>
  );
}