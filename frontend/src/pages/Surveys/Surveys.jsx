import React from "react";
import { useState } from "react";
import Quiz from "./Quiz";

export default function Surveys() {
  const [survey, setSurvey] = useState("Todo");
  const [student, setStudent] = useState(false);
  const [start, setStart] = useState(null);

  const handleActive = (state) => {
    setSurvey(state);
  };

  const surveys = [
    {
      id: "01",
      question: "What benefits will I receive as a Lyft Pink member?",
    },
    {
      id: "02",
      question: "How does the free Priority Pickup upgrades benefit work?",
    },
    {
      id: "03",
      question: "Which rides does member-exclusive pricing apply to?",
    },
    {
      id: "04",
      question: "Do discounts impact driver pay?",
    },
    {
      id: "05",
      question: "How does the bike benefit work and where is it available?",
    },
    {
      id: "06",
      question: "What is Bike Angels?",
    },
  ];

  return (
    <div className="page-content font-serif w-full">
      <div className=" bg-[#d9d9d9] rounded-2xl md:rounded-3xl min-h-[78.2vh] overflow-x-hidden overflow-y-auto p-3 sm:p-4 md:p-6 lg:p-8">
        {/* All Content */}
        <div className="All-Content ">
          {/* Survey-Top */}
          <div className="Activity-Top flex flex-col lg:flex-row gap-4 lg:gap-6 items-stretch lg:items-center">
            {/* Left section */}
            <div className="flex flex-col z-2 lg:w-[50%] sm:flex-row items-start sm:items-center gap-3 md:gap-4 flex-1">
              {/* Title */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-[#012331] border-b-4 border-yellow-400 pb-1 whitespace-nowrap">
                Surveys
              </h2>

              {/* Dropdowns */}
              {survey === "Todo" && (
                <div className="flex items-center font-[lato] z-1  halfrem bg-white rounded-xl shadow-sm w-full lg:w-[70%] xl:w-[50%]">
                  <button
                    onClick={() => {
                      setStudent(false);
                    }}
                    className={`${
                      !student
                        ? "bg-[#007D69] text-white"
                        : "text-gray-600 bg-white"
                    } flex-1 w-auto halfrem  rounded-2xl cursor-pointer text-sm md:text-md  font-medium transition-all`}
                  >
                    Family surveys
                  </button>
                  <button
                    onClick={() => {
                      setStudent(true);
                    }}
                    className={`${
                      student
                        ? "bg-[#007D69] text-white"
                        : "text-gray-600 bg-white"
                    } flex-1 sm:w-auto halfrem rounded-2xl text-sm md:text-md cursor-pointer font-medium transition-all`}
                  >
                    Student surveys
                  </button>
                </div>
              )}
            </div>

            {/* Right section */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full lg:w-[50%]">
              {/* Toggle Buttons */}
              <div className="flex items-center z-1 halfrem bg-white rounded-xl shadow-sm w-full lg:w-[50%]">
                <button
                  onClick={() => handleActive("Todo")}
                  className={`${
                    survey === "Todo"
                      ? "bg-slate-900 text-white"
                      : "text-gray-600 bg-white"
                  } flex-1 w-auto halfrem  rounded-xl cursor-pointer text-xs  font-medium transition-all`}
                >
                  To-Do
                </button>
                <button
                  onClick={() => {
                    handleActive("Completed");
                    setStudent(false);
                  }}
                  className={`${
                    survey === "Completed"
                      ? "bg-slate-900 text-white"
                      : "text-gray-600 bg-white"
                  } flex-1 sm:w-auto halfrem rounded-xl text-xs md:text-sm cursor-pointer font-medium transition-all`}
                >
                  Completed
                </button>
              </div>

              {/* Search */}
              <div className="flex rounded-lg bg-white items-center halfrem  w-full sm:min-w-[250px] lg:min-w-[300px]">
                <input
                  type="text"
                  placeholder="Searching..."
                  className="w-full px-2 text-sm md:text-base text-gray-600 focus:outline-none bg-transparent"
                />

                {/* Icon Button */}
                <button className="cursor-pointer bg-[#007D69] halfrem rounded-lg text-white transition-colors flex-shrink-0 touch-manipulation">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M25.328 23.6718L20.9996 19.3785C22.6798 17.2836 23.4934 14.6246 23.2733 11.9483C23.0531 9.27198 21.8159 6.78171 19.8161 4.98955C17.8162 3.19739 15.2058 2.23956 12.5214 2.31301C9.83702 2.38647 7.28282 3.48562 5.38398 5.38446C3.48513 7.28331 2.38598 9.83751 2.31253 12.5219C2.23907 15.2062 3.1969 17.8167 4.98906 19.8166C6.78122 21.8164 9.2715 23.0536 11.9478 23.2737C14.6242 23.4939 17.2831 22.6802 19.378 21.0001L23.6713 25.2935C23.7798 25.4028 23.9088 25.4896 24.051 25.5488C24.1931 25.6081 24.3456 25.6386 24.4996 25.6386C24.6537 25.6386 24.8062 25.6081 24.9483 25.5488C25.0905 25.4896 25.2195 25.4028 25.328 25.2935C25.5383 25.0759 25.6558 24.7852 25.6558 24.4826C25.6558 24.1801 25.5383 23.8893 25.328 23.6718ZM12.833 21.0001C11.2178 21.0001 9.63882 20.5212 8.29582 19.6238C6.95282 18.7264 5.90608 17.451 5.28796 15.9587C4.66985 14.4665 4.50812 12.8244 4.82323 11.2402C5.13834 9.65605 5.91614 8.20089 7.05827 7.05876C8.2004 5.91663 9.65556 5.13883 11.2397 4.82372C12.8239 4.50861 14.466 4.67033 15.9582 5.28845C17.4505 5.90657 18.726 6.95331 19.6233 8.29631C20.5207 9.63931 20.9996 11.2183 20.9996 12.8335C20.9996 14.9994 20.1392 17.0766 18.6077 18.6082C17.0761 20.1397 14.9989 21.0001 12.833 21.0001Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Survey-Bottom */}
          <div className="Activity-bottom bg-white rounded-lg md:rounded-xl overflow-hidden shadow-sm">
            {surveys.map((item, idx) => (
              <Quiz
                key={idx}
                qs={item.question}
                num={item.id}
                rate={20}
                order={"Start survey"}
                student={student}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
