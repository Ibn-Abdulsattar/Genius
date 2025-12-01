import React from "react";
import { useNavigate } from "react-router-dom";

export default function Card({ img, title, rate }) {
  const navigate = useNavigate();
  return (
    <div
      className={`w-full bg-[url(${img})]  relative flex items-end rounded-lg sm:rounded-xl md:rounded-2xl max-w-full sm:max-w-[320px] md:max-w-[350px] lg:max-w-[380px] h-[16rem] sm:h-[17rem] md:h-[18rem] lg:h-[19rem] bg-cover bg-center`}
      style={{ backgroundImage: `url(${img})` }}
    >
      {/* Star Rating */}
      <button className="cursor-pointer z-10 bg-white top-3 right-3 sm:top-4 sm:right-4 absolute flex rounded-lg md:rounded-md border border-[#d9d9d9] halfrem flex-col items-center justify-center hover:border-teal-600 transition-all touch-manipulation flex-shrink-0 hover:shadow-lg active:scale-95">
        <span className="font-medium text-sm sm:text-md leading-tight">
          {rate}
        </span>
      </button>

      {/* Gradient Overlay */}
      <div className="bg-gradient-to-b from-black/0 via-black/70 to-black/80 w-full h-full absolute z-1 rounded-lg sm:rounded-xl md:rounded-2xl"></div>

      {/* Content Section */}
      <div className="w-[100%] halfrem relative z-10">
        <p className="starfall-card onerem text-white text-center text-base md:text-md lg:text-lg font-medium  leading-snug ">
          {title}
        </p>

      </div>
    </div>
  );
}