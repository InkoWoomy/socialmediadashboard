import React, { useState, useEffect } from "react";
import { OverallInterface } from "../interface/CardInterface";
import iconyoutubesvg from "../assets/images/icon-youtube.svg";
import icontwittersvg from "../assets/images/icon-twitter.svg";
import iconinstagramsvg from "../assets/images/icon-instagram.svg";
import iconfacebooksvg from "../assets/images/icon-facebook.svg";

const OverallCardComponent: React.FC<OverallInterface> = ({cardColor, mediaType, title, stats, statType, update, isIncreasing}) => {
  const textStyle = isIncreasing ? "text-green-500" : "text-red-500";
  const arrowType = isIncreasing ? "▲" : "▼";

  const mediaSelect =
    mediaType === "youtube"
      ? iconyoutubesvg
      : mediaType === "twitter"
      ? icontwittersvg
      : mediaType === "instagram"
      ? iconinstagramsvg
      : iconfacebooksvg;
  console.log(mediaType);

  return (
    <div className="text-center mx-10 mb-4 lg:mb-0">
      <a
        href="#"
        className={`block max-w-sm pt-2 shadow dark:text-white ${cardColor}  rounded-xl`}
      >
        <div className="bg-slate-50 hover:bg-slate-100 pt-10 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700  rounded-b-lg">
          <div className="flex justify-center mb-4 ">
            <img
              src={mediaSelect}
              alt={mediaType}
              className="self-center"
            />
            <h1 className="font-light ml-2">{`${title || "title"}`}</h1>
          </div>

          <h2 className="mb-2 text-5xl font-bold tracking-tighter text-gray-900 dark:text-white">
            {stats || "STATS"}
          </h2>
          <h3
            className="font-normal text-gray-700 dark:text-gray-400"
            style={{ letterSpacing: "0.2em" }}
          >
            {statType || "StatType"}
          </h3>
          <h4 className={`mt-12 py-3 font-light ${textStyle}`}>
            {`${arrowType} ${update} Today` || "Today"}
          </h4>
        </div>
      </a>
    </div>
  );
};

export default OverallCardComponent;
