import React from "react";
import { useNavigate } from "react-router-dom";

export default function SurveysFormPg() {
  const navigate = useNavigate();
  const surveyData = [
    { title: "Name", placeholder: "Short answer text" },
    { title: "Address", placeholder: "Long answer text" },
    { title: "Phone Number", placeholder: "Short answer text" },
    { title: "Comments", placeholder: "Long answer text" },
  ];
  return (
    <div className="page-content font-serif w-full">
      <div className=" bg-[#d9d9d9] rounded-2xl md:rounded-3xl min-h-[78.2vh] overflow-x-hidden overflow-y-auto">
        {/* All Content */}
        <div className="All-Content ">
          {/* Survey-Top */}
          <div className="Surveys-Top  ">
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
            <h2 className="text-2xl Surveys-Top-title  inline-block sm:text-3xl lg:text-4xl font-medium text-[#012331] border-b-4 border-yellow-400 whitespace-nowrap">
              Surveys
            </h2>
          </div>

          {/* Surveys-bottom */}
          <div className="Surveys-bottom ">
            {/* Survey-banner */}
            <div className="w-full">
              <div
                className="relative rounded-2xl Survey-banner sm:rounded-3xl flex items-center justify-center 
  h-[200px] sm:h-[250px] md:h-[280px] lg:h-[330px] 
  bg-[#012331] overflow-hidden "
              >
                <div className="relative flex items-center justify-center bg-[url(/image/img-23.png)] w-full h-full bg-cover sm:bg-contain md:bg-contain bg-center bg-no-repeat">
                <img
                  src="/image/img-1.png"
                  alt="Genius Logo"
                  className="relative z-10 
    w-full max-w-[150px] h-auto
    sm:max-w-[200px] 
    md:max-w-[250px] 
    object-contain"
                />
    </div>

              </div>
            </div>

            {/* Survey-Qs */}
            <div className="survey-qs space-y-3 sm:space-y-4 md:space-y-5">
              <h4
                className="font-medium 
        tracking-wide sm:tracking-wider md:tracking-[1px] 
        text-base sm:text-lg md:text-xl lg:text-2xl 
        text-[#012331] 
        leading-tight sm:leading-snug"
              >
                What is Bike Angels?
              </h4>

              <p
                className="opacity-60 
        font-[lato] font-normal 
        text-xs sm:text-sm md:text-base 
        tracking-wide sm:tracking-wider md:tracking-widest 
        leading-relaxed sm:leading-relaxed md:leading-loose
        max-w-full"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>

            {/* Survey-Support */}
            {surveyData.map((e, idx) => (
              <div
                key={idx}
                className="survey-support bg-white w-full rounded-xl"
              >
                <div className="w-full">
                  <label className="block">
                    <span className="text-gray-800 text-base sm:text-lg md:text-xl lg:text-2xl font-medium">
                      {e.title}
                      <sup className="text-yellow-500 text-sm sm:text-base md:text-lg lg:text-xl">
                        *
                      </sup>
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder={e.placeholder}
                    className="survey-support-input w-full px-2 py-2 sm:py-3
    border-0 border-b-[1.2px] border-gray-300 
    placeholder:text-gray-400 
    placeholder:text-sm sm:placeholder:text-base md:placeholder:text-lg 
    placeholder:font-[lato]
    text-sm sm:text-base md:text-lg
    focus:outline-none focus:border-b-2 focus:border-[#012331]
    transition-colors duration-200"
                  />
                </div>
              </div>
            ))}

            {/* Survey-button */}
            <div className="Survey-button flex justify-center">
              <div className="flex justify-center cursor-pointer w-full sm:w-[50%] lg:w-[30%] xl:w-[20%] gap-3 sm:gap-4 md:gap-5 items-center rounded-xl sm:rounded-2xl bg-[#007D69] halfrem hover:bg-[#006558] transition-colors duration-200 active:scale-95">
                <span className="text-white font-[lato] halfrem text-sm sm:text-base md:text-md font-semibold">
                  Survey Submit
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

