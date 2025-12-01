import React from "react";
import Card from "./Card";
import { useNavigate } from "react-router-dom";

export default function EarningOverviewPg() {
  const navigate = useNavigate();

  const earnCards = [
    {
      img: "/image/img-18.png",
      title: "Variety party hundreds celebration yummy",
      rate: "Pending",
    },
    {
      img: "/image/img-19.png",
      title: "Lollipops candies and sugar jelly multi colored, Colorful sweets",
      rate: "Delivered",
    },
    {
      img: "/image/img-18.png",
      title: "Variety party hundreds celebration yummy",
      rate: "Pending",
    },
    {
      img: "/image/img-19.png",
      title: "Lollipops candies and sugar jelly multi colored, Colorful sweets",
      rate: "Delivered",
    },
  ];

  return (
    <div className="page-content font-serif w-full">
      <div className=" bg-[#d9d9d9] rounded-2xl md:rounded-3xl min-h-[78.2vh] overflow-x-hidden overflow-y-auto">
        {/* All Content */}
        <div className="All-Content ">
          {/* Earning-Top */}
          <div className="Earning-Top  ">
                        {/* Back-Button */}
            <button
              onClick={() => {
                navigate(-1);
              }}
              className="group Back-Button cursor-pointer flex items-center"
            >
              <svg
                className="w-10 h-10 text-[#012331] -ml-4 transition-all duration-300 group-hover:text-purple-300 group-hover:-translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            {/* Title */}
            <div className=" flex justify-center sm:justify-start">
            <h2 className="text-2xl Surveys-Top-title border-b-4 border-yellow-400  inline-block sm:text-3xl lg:text-4xl font-medium text-[#012331]  whitespace-nowrap">
              Earnings Overview
            </h2></div>
          </div>
          {/* Earning-bottom */}
          <div className="Surveys-bottom ">
            {/* Redemption-status */}
            <div className="w-full">
              <div className="Redemption-status flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0">
                {/* Redemption-status-left */}
                <div className="w-full  md:w-[50%] lg:w-[60%] xl:w-[70%]">
                  <p className="font-medium text-2xl text-black sm:text-3xl font-[lato] text-gray-800">
                    Redemption Status
                  </p>
                </div>

                {/* Redemption-status-right */}
                <div className="w-full md:w-[50%] lg:w-[40%] xl:w-[30%] flex gap-5 sm:gap-8 md:gap-5 justify-start md:justify-end">
                  {/* Star Badge */}
                  <div className="status relative bg-[#fed302] w-full sm:w-[48%] lg:w-[45%] pointthreerem flex items-center rounded-md rounded-l-2xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="star relative -left-[10%] pointthreerem bg-white border border-[#d9d9d9] border-2 rounded-full flex-shrink-0">
                      <img
                        src="/image/img-22.png"
                        className="w-5 sm:w-8 h-5 sm:h-8"
                        alt="star"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] font-thin text-[#404040] whitespace-nowrap overflow-hidden text-ellipsis">
                        Available Star Power
                      </p>
                      <p className="font-medium text-base sm:text-xl leading-tight">350</p>
                    </div>
                  </div>

                  {/* Pending Delivery Badge */}
                  <div className="status relative text-white bg-[#ff5A5A] w-full sm:w-[48%] lg:w-[45%] pointthreerem flex items-center rounded-md rounded-l-2xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="star relative -left-[10%] pointthreerem bg-white border border-[#d9d9d9] border-2 rounded-full flex-shrink-0">
                      <img
                        src="/image/img-22.png"
                        className="w-5 sm:w-8 h-5 sm:h-8"
                        alt="star"
                      />
                    </div>
                    <div className="ml-2 min-w-0">
                      <p className="text-[10px] font-thin whitespace-nowrap overflow-hidden text-ellipsis">
                        Pending Delivery
                      </p>
                      <p className="font-medium text-base sm:text-xl leading-tight">150</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Earning Cards */}
            <div className="grid Redemption-status grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-7">
              {earnCards.map((item, idx) => (
                <Card
                  key={idx}
                  img={item.img}
                  title={item.title}
                  rate={item.rate}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
