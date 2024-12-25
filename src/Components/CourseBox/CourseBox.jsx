import React, { useState } from "react";
import CircleSpinner from "../CircleSpinner/CircleSpinner";
import { FaStar } from "react-icons/fa";
import { LiaUserSolid } from "react-icons/lia";
import { PiUsersThree } from "react-icons/pi";
import { Link } from "react-router-dom";

export default function CourseBox(props) {
  const [isImgShow, setIsImgShow] = useState(false);

  const onImageLoaded = () => setIsImgShow(true);

  const onImageError = () => {
    // Codes
  };

  return (
    <div className="course flex flex-col  bg-white dark:bg-darkBox text-darkColor dark:text-white rounded-3xl h-full">
      {/* <!-- Course Banner --> */}
      <div className="relative h-[17rem] group">
        <Link
          className="block w-full h-full rounded-3xl overflow-hidden"
          to={`/course-info/${props.shortName}`}
          title={props.name}
        >
          <img
            className="block w-full h-full object-cover"
            src={`/images/courses/${props.cover}`}
            alt={props.name}
            onLoad={onImageLoaded}
            onError={onImageError}
          />
          {!isImgShow && <CircleSpinner />}
        </Link>
        {/* <!-- Offer percent  --> */}
        <span className="absolute right-5 top-5 flex-center w-20 h-12 bg-green-500 text-white font-EstedadBold text-xl rounded-full">
          20%
        </span>
      </div>
      {/* <!-- Course Title & Description --> */}
      <div className={`flex-grow px-6 py-6 mb-6 ${props.isSlider && "h-48"}`}>
        {/* <!-- Course Title --> */}
        <h3 className="font-EstedadMedium text-[1.75rem] line-clamp-2 mb-5">
          <Link to={`/course-info/${props.shortName}`} href="">
            {props.name}
          </Link>
        </h3>
        {/* <!-- Course Description --> */}
        <p className="text-2xl/10 line-clamp-2 opacity-70">
          {props.description}
        </p>
      </div>
      {/* <!-- Course Footer --> */}
      <div className="px-6 pb-6">
        {/* <!-- Teacher & Rating --> */}
        <div className="flex justify-between gap-5 text-blue-gray-600 dark:text-white/70 text-xl pb-5 border-b border-b-gray-300 dark:border-b-white/10">
          <div className="flex items-center gap-x-1 hover:text-green-500 transition-colors">
            <div className="text-3xl">
              <LiaUserSolid />
            </div>
            <a href="https:/">{props.creator}</a>
          </div>
          {/* <!-- Rating --> */}
          <div className="flex items-center gap-x-2 text-amber-500">
            <span className="font-EstedadMedium mt-1">
              {props.courseAverageScore}
            </span>
            <div className="text-3xl">
              <FaStar />
            </div>
          </div>
        </div>
        <div className="flex items-end justify-between mt-3">
          <span className="flex items-center gap-x-2 text-blue-gray-600 dark:text-white/70 text-xl">
            <div className="text-4xl">
              <PiUsersThree />
            </div>
            {props.registers}
          </span>
          {/* <!-- Price --> */}

          {props.price === 0 ? (
            <div>رایگان</div>
          ) : (
            <div className="flex-center gap-x-3">
              {props.price >= 250_000 ? (
                <>
                  <span className="text-xl text-blue-gray-600 dark:text-white/70 -mb-1.5 line-through">
                    {(props.price - 20_000).toLocaleString()}
                  </span>
                  <span className="flex gap-x-1 text-green-500 font-EstedadMedium text-2xl">
                    {props.price.toLocaleString()}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="none"
                      className="w-8 h-8"
                      viewBox="0 0 14 16"
                    >
                      <path
                        fill="currentColor"
                        d="M1.149 6.918q.443 0 .775-.14.343-.142.575-.383.232-.243.352-.565.12-.312.141-.664H1.985q-.514 0-.846-.111a1.2 1.2 0 0 1-.524-.323 1.2 1.2 0 0 1-.272-.503 3 3 0 0 1-.07-.675q0-.382.11-.726t.323-.604q.21-.262.523-.413.322-.162.736-.161.332 0 .634.11a1.4 1.4 0 0 1 .534.353q.232.232.363.615.141.372.141.906v.836h.967q.12 0 .161.091.05.081.05.252 0 .181-.05.272-.04.08-.16.08h-.988q-.02.495-.202.937a2.4 2.4 0 0 1-.483.776 2.3 2.3 0 0 1-.746.524 2.3 2.3 0 0 1-.977.201H.141l-.06-.685zM.897 3.513q0 .252.05.434.06.18.192.302.141.11.372.171.233.05.585.05h.906v-.755q0-.745-.292-1.068-.292-.322-.806-.322-.483 0-.745.322-.262.323-.262.866m5.372.957q.13 0 .171.091.05.081.05.252 0 .181-.05.272-.04.08-.171.08H4.607q-.132 0-.172-.08a.5.5 0 0 1-.05-.252q0-.18.05-.272.04-.09.172-.09zm1.663 0q.13 0 .17.091.051.081.051.252 0 .181-.05.272-.04.08-.171.08H6.269q-.13 0-.17-.08a.5.5 0 0 1-.051-.252q0-.18.05-.272.04-.09.171-.09zm1.662 0q.131 0 .171.091.05.081.05.252 0 .181-.05.272-.04.08-.17.08H7.931q-.13 0-.171-.08a.5.5 0 0 1-.05-.252q0-.18.05-.272.04-.09.17-.09zm1.663 0q.13 0 .171.091.05.081.05.252 0 .181-.05.272-.04.08-.171.08H9.595q-.132 0-.172-.08a.5.5 0 0 1-.05-.252q0-.18.05-.272.04-.09.172-.09zm.907 0q.393 0 .624-.211.242-.212.242-.584v-1.39h.655v1.39q0 .715-.403 1.108-.393.383-1.078.383h-.947q-.13 0-.171-.081a.5.5 0 0 1-.05-.252q0-.18.05-.272.04-.09.171-.09zM13.786.995h-.806V.28h.806zm-1.28 0H11.7V.28h.806zm-6.864 11.97q0 .542-.171 1.017a2.42 2.42 0 0 1-1.28 1.41 2.4 2.4 0 0 1-1.027.212h-.595q-1.128 0-1.753-.696-.624-.695-.624-1.904v-1.763h.644v1.743q0 .433.101.786.111.353.333.604.232.263.574.403t.826.141h.443q.474 0 .826-.16.352-.152.585-.414a1.6 1.6 0 0 0 .352-.614q.12-.352.121-.736v-2.71h.645zm-2.428-2.902h-.846v-.736h.846zm5.031 3.103q-.261 0-.503-.071a1.16 1.16 0 0 1-.434-.262 1.3 1.3 0 0 1-.292-.473 2.2 2.2 0 0 1-.11-.746V6.92h.654v4.573q0 .423.182.705.19.273.614.272h.171q.222 0 .222.343 0 .353-.222.353zm.448-.696q.393 0 .595-.191a.68.68 0 0 0 .201-.514v-.383q0-.875.443-1.37.454-.493 1.25-.493.413 0 .725.13.313.132.514.374.21.24.312.574.1.332.1.735 0 .867-.453 1.35t-1.239.484q-.402 0-.775-.152a1.2 1.2 0 0 1-.585-.564q-.09.232-.221.373a1.2 1.2 0 0 1-.272.222q-.141.07-.303.1-.15.02-.292.02h-.16q-.132 0-.172-.08a.5.5 0 0 1-.05-.252q0-.18.05-.272.04-.09.171-.09zm3.496-1.078q0-.523-.232-.846-.232-.332-.796-.332-1.047 0-1.047 1.219 0 .512.282.776.292.261.745.261.514 0 .776-.282.272-.282.272-.796"
                        className="text-green-500"
                      ></path>
                    </svg>
                  </span>
                </>
              ) : (
                <span className="flex gap-x-1 text-green-500 font-EstedadMedium text-2xl">
                  {props.price.toLocaleString()}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="none"
                    className="w-8 h-8"
                    viewBox="0 0 14 16"
                  >
                    <path
                      fill="currentColor"
                      d="M1.149 6.918q.443 0 .775-.14.343-.142.575-.383.232-.243.352-.565.12-.312.141-.664H1.985q-.514 0-.846-.111a1.2 1.2 0 0 1-.524-.323 1.2 1.2 0 0 1-.272-.503 3 3 0 0 1-.07-.675q0-.382.11-.726t.323-.604q.21-.262.523-.413.322-.162.736-.161.332 0 .634.11a1.4 1.4 0 0 1 .534.353q.232.232.363.615.141.372.141.906v.836h.967q.12 0 .161.091.05.081.05.252 0 .181-.05.272-.04.08-.16.08h-.988q-.02.495-.202.937a2.4 2.4 0 0 1-.483.776 2.3 2.3 0 0 1-.746.524 2.3 2.3 0 0 1-.977.201H.141l-.06-.685zM.897 3.513q0 .252.05.434.06.18.192.302.141.11.372.171.233.05.585.05h.906v-.755q0-.745-.292-1.068-.292-.322-.806-.322-.483 0-.745.322-.262.323-.262.866m5.372.957q.13 0 .171.091.05.081.05.252 0 .181-.05.272-.04.08-.171.08H4.607q-.132 0-.172-.08a.5.5 0 0 1-.05-.252q0-.18.05-.272.04-.09.172-.09zm1.663 0q.13 0 .17.091.051.081.051.252 0 .181-.05.272-.04.08-.171.08H6.269q-.13 0-.17-.08a.5.5 0 0 1-.051-.252q0-.18.05-.272.04-.09.171-.09zm1.662 0q.131 0 .171.091.05.081.05.252 0 .181-.05.272-.04.08-.17.08H7.931q-.13 0-.171-.08a.5.5 0 0 1-.05-.252q0-.18.05-.272.04-.09.17-.09zm1.663 0q.13 0 .171.091.05.081.05.252 0 .181-.05.272-.04.08-.171.08H9.595q-.132 0-.172-.08a.5.5 0 0 1-.05-.252q0-.18.05-.272.04-.09.172-.09zm.907 0q.393 0 .624-.211.242-.212.242-.584v-1.39h.655v1.39q0 .715-.403 1.108-.393.383-1.078.383h-.947q-.13 0-.171-.081a.5.5 0 0 1-.05-.252q0-.18.05-.272.04-.09.171-.09zM13.786.995h-.806V.28h.806zm-1.28 0H11.7V.28h.806zm-6.864 11.97q0 .542-.171 1.017a2.42 2.42 0 0 1-1.28 1.41 2.4 2.4 0 0 1-1.027.212h-.595q-1.128 0-1.753-.696-.624-.695-.624-1.904v-1.763h.644v1.743q0 .433.101.786.111.353.333.604.232.263.574.403t.826.141h.443q.474 0 .826-.16.352-.152.585-.414a1.6 1.6 0 0 0 .352-.614q.12-.352.121-.736v-2.71h.645zm-2.428-2.902h-.846v-.736h.846zm5.031 3.103q-.261 0-.503-.071a1.16 1.16 0 0 1-.434-.262 1.3 1.3 0 0 1-.292-.473 2.2 2.2 0 0 1-.11-.746V6.92h.654v4.573q0 .423.182.705.19.273.614.272h.171q.222 0 .222.343 0 .353-.222.353zm.448-.696q.393 0 .595-.191a.68.68 0 0 0 .201-.514v-.383q0-.875.443-1.37.454-.493 1.25-.493.413 0 .725.13.313.132.514.374.21.24.312.574.1.332.1.735 0 .867-.453 1.35t-1.239.484q-.402 0-.775-.152a1.2 1.2 0 0 1-.585-.564q-.09.232-.221.373a1.2 1.2 0 0 1-.272.222q-.141.07-.303.1-.15.02-.292.02h-.16q-.132 0-.172-.08a.5.5 0 0 1-.05-.252q0-.18.05-.272.04-.09.171-.09zm3.496-1.078q0-.523-.232-.846-.232-.332-.796-.332-1.047 0-1.047 1.219 0 .512.282.776.292.261.745.261.514 0 .776-.282.272-.282.272-.796"
                      className="text-green-500"
                    ></path>
                  </svg>
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
