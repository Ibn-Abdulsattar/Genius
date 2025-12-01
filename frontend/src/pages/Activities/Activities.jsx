import React, { useState } from "react";
import Quiz from "./Quiz";
import Filter from "./Filter";
import GetStartedModel from "./GetStartedModel";
import ReviewModel from "../../components/ReviewModel";

export default function Activities() {
  const [activity, setActivity] = useState("Todo");
  const [filter, setFilter] = useState(null);
  const [start, setStart] = useState(null);

  const activities = [
    {
      id: "01",
      question: "What benefits will I receive as a Lyft Pink member?",
      buttonText: "Get Started",
      stars: 25,
    },
    {
      id: "02",
      question: "How does the free Priority Pickup upgrades benefit work?",
      buttonText: "Get Started",
      stars: 25,
    },
    {
      id: "03",
      question: "Which rides does member-exclusive pricing apply to?",
      buttonText: "Get Started",
      stars: 20,
    },
    {
      id: "04",
      question: "Do discounts impact driver pay?",
      buttonText: "Get Started",
      stars: 20,
    },
    {
      id: "05",
      question: "How does the bike benefit work and where is it available?",
      buttonText: "Get Started",
      stars: 15,
    },
    {
      id: "06",
      question: "What is Bike Angels?",
      buttonText: "Get Started",
      stars: 15,
    },
  ];

  const handleActive = (state) => {
    setActivity(state);
  };

  return (
    <div className="page-content font-serif w-full">
      <div className=" bg-[#d9d9d9] rounded-2xl md:rounded-3xl min-h-[78.2vh] overflow-x-hidden overflow-y-auto p-3 sm:p-4 md:p-6 lg:p-8">
        {/* All Content */}
        <div className="All-Content ">
          {/* Activity-Top */}
          <div className="Activity-Top flex flex-col lg:flex-row gap-4 lg:gap-6 items-stretch lg:items-center">
            {/* Left section */}
            <div className="flex flex-col z-2 lg:w-[50%] sm:flex-row items-start sm:items-center gap-3 md:gap-4 flex-1">
              {/* Title */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-[#012331] border-b-4 border-yellow-400 pb-1 whitespace-nowrap">
                Activities
              </h2>

              {/* Dropdowns */}
              {activity === "Todo" && (
                <div className="flex flex-wrap gap-4 md:gap-3 halfrem w-full lg:w-[80%]">
                  <div className="bg-white cursor-pointer halfrem border border-gray-300 rounded-md p-2 flex-1 sm:flex-none w-[48%] lg:w-[50%]">
                    <select className="cursor-pointer  w-full text-sm md:text-base text-gray-600 focus:outline-none bg-transparent">
                      <option>Select Subject</option>
                      <option>Math</option>
                      <option>Science</option>
                    </select>
                  </div>

                  <div className="bg-white cursor-pointer halfrem border border-gray-300 rounded-md p-2 flex-1 sm:flex-none w-[48%] lg:w-[40%]">
                    <select className="cursor-pointer w-full text-sm md:text-base text-gray-600 focus:outline-none bg-transparent">
                      <option>Quarter</option>
                      <option>Q1</option>
                      <option>Q2</option>
                      <option>Q3</option>
                      <option>Q4</option>
                    </select>
                  </div>
                </div>
              )}
            </div>

            {/* Right section */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full lg:w-[50%]">
              {/* Toggle Buttons */}
              <div className="flex items-center halfrem bg-white rounded-xl shadow-sm w-full lg:w-[50%]">
                <button
                  onClick={() => handleActive("Todo")}
                  className={`${
                    activity === "Todo"
                      ? "bg-slate-900 text-white"
                      : "text-gray-600 bg-white"
                  } flex-1 w-auto halfrem  rounded-xl cursor-pointer text-xs  font-medium transition-all`}
                >
                  To-Do
                </button>
                <button
                  onClick={() => handleActive("Completed")}
                  className={`${
                    activity === "Completed"
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
                {activity === "Todo" ? (
                  <button
                    onClick={() => setFilter(true)}
                    className="cursor-pointer bg-slate-900 halfrem rounded-lg text-white hover:bg-slate-800 transition-colors flex-shrink-0 touch-manipulation"
                  >
                    <svg
                      width="20"
                      height="18"
                      viewBox="0 0 25 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 md:w-5 md:h-5"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.6238 17.0476C7.6238 16.5618 7.22995 16.168 6.74413 16.168H0.879669C0.393845 16.168 0 16.5618 0 17.0476C0 17.5334 0.393845 17.9273 0.879669 17.9273H6.74413C7.22995 17.9273 7.6238 17.5334 7.6238 17.0476Z"
                        fill="white"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M17.377 4.51541C17.377 4.02959 17.7708 3.63574 18.2566 3.63574H24.1211C24.6069 3.63574 25.0008 4.02959 25.0008 4.51541C25.0008 5.00123 24.6069 5.39508 24.1211 5.39508H18.2566C17.7708 5.39508 17.377 5.00123 17.377 4.51541Z"
                        fill="white"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M24.9999 17.0476C24.9999 16.5618 24.6061 16.168 24.1203 16.168H13.5642C13.0784 16.168 12.6846 16.5618 12.6846 17.0476C12.6846 17.5334 13.0784 17.9273 13.5642 17.9273H24.1203C24.6061 17.9273 24.9999 17.5334 24.9999 17.0476Z"
                        fill="white"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 4.51541C0 4.02959 0.393845 3.63574 0.879669 3.63574H11.4357C11.9215 3.63574 12.3154 4.02959 12.3154 4.51541C12.3154 5.00123 11.9215 5.39508 11.4357 5.39508H0.879669C0.393845 5.39508 0 5.00123 0 4.51541Z"
                        fill="white"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M14.5525 16.9306C14.5525 14.5014 12.5834 12.5322 10.1542 12.5322C7.72506 12.5322 5.75586 14.5014 5.75586 16.9306C5.75586 19.3597 7.72506 21.3289 10.1542 21.3289C12.5834 21.3289 14.5525 19.3597 14.5525 16.9306Z"
                        fill="white"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.4482 4.39834C10.4482 1.9692 12.4174 0 14.8466 0C17.2758 0 19.2449 1.9692 19.2449 4.39834C19.2449 6.82749 17.2758 8.79669 14.8466 8.79669C12.4174 8.79669 10.4482 6.82749 10.4482 4.39834Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                ) : (
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
                )}
              </div>
            </div>
          </div>

          {/* Activity-Bottom */}
          <div className="Activity-bottom bg-white rounded-lg md:rounded-xl overflow-hidden shadow-sm">
            {activities.map((item, idx) => (
              <Quiz
                key={idx}
                qs={item.question}
                num={item.id}
                order={`${
                  activity === "Todo" ? item.buttonText : "Show Results"
                }`}
                rate={item.stars}
                setStart={setStart}
                start={start}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Filter Module */}
      <Filter filter={filter} setFilter={setFilter} />

      {/* GetStartedModel Module */}
      <GetStartedModel start={start} setStart={setStart} />

      <ReviewModel
        img={"/image/img-13.png"}
        title={"Review in Progress"}
        descrip={
          "Great job on completing your activity! Our team is reviewing your submission. Once approved, you'll see your earned stars in your account. Keep up the great work and try another activity while you wait!"
        }
        btnText={"Pending Review"}
        star={true}
        bgcolor={"#fff"}
      />
    </div>
  );
}
