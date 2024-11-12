import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";

export default function PopularCourses() {
  return (
    <div className="my-5">
      <div className="container">
        <SectionHeader
          title="محبوب ترین دوره ها"
          desc="دوره های محبوب بر اساس امتیاز دانشجوها"
        />
      </div>
    </div>
  );
}
