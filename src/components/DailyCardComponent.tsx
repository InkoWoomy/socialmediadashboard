import React, { useState, useEffect } from "react";
import { StatInterface } from "../interface/CardInterface";
import iconyoutubesvg from "../assets/images/icon-youtube.svg";
import icontwittersvg from "../assets/images/icon-twitter.svg";
import iconinstagramsvg from "../assets/images/icon-instagram.svg";
import iconfacebooksvg from "../assets/images/icon-facebook.svg";

const DailyCardComponent: React.FC<StatInterface> = ({mediaType, title, stats, update, isIncreasing}) => {
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
    <div className="m-5">
      <a href="#">
        <div className="bg-slate-50 justify-around hover:bg-slate-100 p-10 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 rounded-lg grid grid-cols-2 gap-2">

          <div className="flex justify-around"> 
            <h1 className="font-extrabold text-slate-400 ml-2">{`${title || "title"}`}</h1>    
          </div>

          <div className="flex justify-around"> 
            <img src={mediaSelect} alt={mediaType} className="bg-white rounded-full"/>
          </div>

          <div className="flex justify-around">
            <h2 className="mb-2 text-5xl font-bold tracking-tighter text-gray-900 dark:text-white">
              {stats || "STATS"}
            </h2>
          </div>
            
          <div className="flex justify-around mt-4">
            <h3 className={`font-light ${textStyle}`}>
              {`${arrowType} ${update}%` || "0%"}
            </h3> 
          </div>
        </div>
      </a>
    </div>
  );
};

export default DailyCardComponent;
