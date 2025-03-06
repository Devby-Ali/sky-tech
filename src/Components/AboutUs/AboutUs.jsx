import React from "react";
import AboutUsBox from "../AboutUsBox/AboutUsBox";
import SectionHeader from "../SectionHeader/SectionHeader";
import { BiSupport } from "react-icons/bi";
import { MdOutlineContentCopy } from "react-icons/md";
import { GiCutDiamond } from "react-icons/gi";
import { IoCodeWorking } from "react-icons/io5";

export default function AboutUs() {
  return (
    <div className="relative container">
      <SectionHeader
        title="ما چه کمکی بهتون میکنیم؟"
        desc="از اونجایی که آکادمی آموزشی اسکای تک یک آکادمی خصوصی هست"
        Page={"Index"}
      />

      <div className="grid grid-rows-2 md:grid-cols-2 gap-8 sm:gap-10 cursor-default mb-36">
        <AboutUsBox
          title="پشتیبانی دائمی"
          desc="هرجا سوالی داشتی به مشکل خوردی بچه های تیم آمادن که مشکلت رو حل کنن تلاشمون اینه بدون نگرانی دوره رو کامل کنی."
          icon={<BiSupport className="text-emerald-400" />}
        />
        <AboutUsBox
          title="تضمین کاملترین محتوا"
          desc="بزار خیالت راحت کنم توی دوره هامون به ریز ترین موارد پرداختیم بعداز دیدن این دوره نیاز به هیچ آموزش دیگه ای نداری."
          icon={<MdOutlineContentCopy className="text-amber-400" />}
        />
        <AboutUsBox
          title="سراغ حرفه ای ها رفتیم"
          desc="به جرعت میتونم بگم سخت گیرترین شرایط جذب مدرس داریم چون برامون مهمه محتوا خیلی ساده و روان بیان بشه که توی یادگیری به مشکل نخورید."
          icon={<GiCutDiamond className="text-sky-400" />}
        />
        <AboutUsBox
          title="پروژه محور در راستای بازار کار"
          desc="کل تمرکز ما رو این هستش بعداز تموم شدن دوره شخص بتونه با اعتماد به نفس کامل پروژه بزنه واقدام کنه برای کسب درآمد."
          icon={<IoCodeWorking className="text-purple-400" />}
        />
      </div>
      <div className="hidden lg:block absolute right-0 -top-40 translate-x-1/3 -translate-y-6/10 size-75 bg-red-500 opacity-25 blur-[125px] -z-10 rounded-full"></div>
    </div>
  );
}
