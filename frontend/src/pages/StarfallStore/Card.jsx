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
      <button className="cursor-pointer bg-white top-3 z-10 right-3 sm:top-4 sm:right-4 absolute flex rounded-lg md:rounded-xl border border-[#d9d9d9] w-[32px] h-[32px] sm:w-[36px] sm:h-[36px] md:w-[38px] md:h-[38px] lg:w-[42px] lg:h-[42px] flex-col items-center justify-center hover:border-teal-600 transition-all touch-manipulation flex-shrink-0 hover:shadow-lg active:scale-95">
        <span className="text-yellow-400 font-medium text-sm sm:text-base md:text-lg leading-none">
          ★
        </span>
        <span className="font-medium text-[10px] sm:text-xs font-[lato] md:text-sm leading-tight">
          {rate}
        </span>
      </button>

      {/* Gradient Overlay */}
      <div className="bg-gradient-to-b from-black/0 via-black/30 to-black/80 w-full h-full absolute z-1 rounded-lg sm:rounded-xl md:rounded-2xl"></div>

      {/* Content Section */}
      <div className="w-[100%] halfrem relative z-10 px-3 sm:px-4 md:px-5 pb-3 sm:pb-4 md:pb-5">
        <p className="starfall-card onerem text-white text-center text-sm sm:text-base md:text-lg lg:text-lg font-medium  leading-snug ">
          {title}
        </p>
        <button
        onClick={()=>{
          navigate("/cartpg")
        }}
        className="onerem cursor-pointer w-full rounded-xl sm:rounded-2xl text-white text-sm sm:text-base md:text-lg font-semibold w-full bg-[#012331] hover:bg-[#013d52] active:scale-98 transition-all duration-200 shadow-md hover:shadow-lg">
          Redeem
        </button>
      </div>
    </div>
  );
}