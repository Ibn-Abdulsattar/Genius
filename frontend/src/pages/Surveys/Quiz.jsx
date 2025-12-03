import React from "react";
import { useNavigate } from "react-router-dom";
import useModule from "../../hooks/useModule";

export default function Quiz({
  qs,
  order,
  num,
  rate,
  setStart,
  student,
}) {
  const { reviewModel, setReviewModel } = useModule();

  const navigate = useNavigate();
  return (
    <div className="flex flex-col lg:flex-row text-[#012331] items-start lg:items-center lg:gap-3 quiz-activity justify-between bg-white border-b border-gray-200">
      {/* Question Section */}
      <div className="flex halfrem items-start gap-2 md:gap-3 flex-1 w-full lg:w-auto min-w-0">
        <span className="font-medium text-base md:text-lg lg:text-xl flex-shrink-0 mt-0.5">
          {num}.
        </span>
        <h3 className="font-medium text-base md:text-lg lg:text-xl break-words leading-relaxed">
          {qs}
        </h3>
      </div>

      {/* Action Buttons Section */}
      <div className="flex items-center halfrem gap-3 w-full lg:w-auto justify-between sm:justify-end lg:justify-start flex-shrink-0 ml-0 lg:ml-4">
        <button
          onClick={() => setReviewModel(!reviewModel)}
          className="cursor-pointer flex rounded-lg md:rounded-xl gap-2 tracking-[2px] w-[42px] h-[42px] md:w-[48px] md:h-[48px] lg:w-[52px] lg:h-[52px] items-center justify-center  transition-all touch-manipulation flex-shrink-0"
        >
                  <img src="/image/img-22.png" className="w-7 h-7" alt="icon" />

          <span className="font-medium text-xl font-serif md:text-2xl">
            {rate}
          </span>
        </button>

        {student  && <button
          onClick={() => {
            order === "Get Started"
              ? setStart(true)
              : navigate("/surveysformpg");
          }}
          className="cursor-pointer halfrem px-3 md:px-4 lg:px-5 py-1.5 md:py-2 bg-teal-600 text-xs md:text-sm lg:text-base text-white rounded-md font-medium hover:bg-teal-700 active:bg-teal-800 transition-colors whitespace-nowrap touch-manipulation"
        >
          {order}
        </button>}
      </div>
    </div>
  );
}
