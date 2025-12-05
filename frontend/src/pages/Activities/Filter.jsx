import React, { useState } from "react";

export default function Filter({ filter, setFilter }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");
    const [subject, setsubject] = useState(false);
  const [select, setSelect] = useState("");
  const options = ["q1", "q2"];
  return (
    <>
      {filter && (
        <div
          id="Activity-filter-model"
          className="fixed inset-0 z-50 bg-[rgba(0,0,0,0.20)] flex items-center justify-center p-2 sm:p-4"
        >
          {/* Modal Container */}
          <div className="bg-[#F4F4F4]  tworem activity-modal-container w-[87%] sm:w-[85%] md:w-[75%] lg:w-[65%] xl:w-[60%] max-w-[900px] h-auto max-h-[80vh] sm:max-h-[70vh] md:h-[63%] rounded-2xl sm:rounded-3xl shadow-lg overflow-y-auto">
            <h2 className="text-center flex justify-center text-2xl sm:text-xl md:text-2xl font-semibold mb-4 sm:mb-6 relative">
              <span className="border-b-2 text-[#012331] border-yellow-400 pb-1">
                Filter
              </span>
            </h2>

            <div className="grid halfrem font-sans grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              {/* Start Date */}
              <div className="flex marginy flex-col">
                <label className="text-sm sm:text-md text-black font-semibold activitylabel">
                  Start Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    className="w-full bg-white onerem border border-gray-300 rounded-xl sm:rounded-2xl text-sm sm:text-base text-gray-700 outline-none appearance-none [&::-webkit-calendar-picker-indicator]:hidden"
                    value="2024-08-12"
                  />
                  <span className="absolute right-2 sm:right-3 top-3 sm:top-5 text-gray-400 pointer-events-none">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 sm:w-5 sm:h-5"
                    >
                      <path
                        d="M8.51828 1.11111C8.51828 0.497467 8.02082 0 7.40717 0C6.79353 0 6.29606 0.497467 6.29606 1.11111V3.45076C4.16372 3.6215 2.76387 4.04055 1.73542 5.06899C0.70698 6.09744 0.287928 7.49729 0.117188 9.62963H29.5119C29.3412 7.49729 28.9221 6.09744 27.8937 5.06899C26.8652 4.04055 25.4654 3.6215 23.3331 3.45076V1.11111C23.3331 0.497467 22.8356 0 22.222 0C21.6084 0 21.1109 0.497467 21.1109 1.11111V3.35244C20.1252 3.33333 19.0205 3.33333 17.7775 3.33333H11.8516C10.6086 3.33333 9.50387 3.33333 8.51828 3.35244V1.11111Z"
                        fill="black"
                        fillOpacity="0.4"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 15.1854C0 13.9424 1.68328e-07 12.8377 0.0191113 11.8521H29.6105C29.6296 12.8377 29.6296 13.9424 29.6296 15.1854V18.1483C29.6296 23.7353 29.6296 26.5289 27.8939 28.2645C26.1584 30.0002 23.3647 30.0002 17.7778 30.0002H11.8519C6.26483 30.0002 3.47133 30.0002 1.73566 28.2645C1.76606e-07 26.5289 0 23.7353 0 18.1483V15.1854ZM22.2222 18.1483C23.0404 18.1483 23.7037 17.4851 23.7037 16.6669C23.7037 15.8486 23.0404 15.1854 22.2222 15.1854C21.404 15.1854 20.7407 15.8486 20.7407 16.6669C20.7407 17.4851 21.404 18.1483 22.2222 18.1483ZM22.2222 24.0743C23.0404 24.0743 23.7037 23.411 23.7037 22.5928C23.7037 21.7746 23.0404 21.1113 22.2222 21.1113C21.404 21.1113 20.7407 21.7746 20.7407 22.5928C20.7407 23.411 21.404 24.0743 22.2222 24.0743ZM16.2963 16.6669C16.2963 17.4851 15.633 18.1483 14.8148 18.1483C13.9966 18.1483 13.3333 17.4851 13.3333 16.6669C13.3333 15.8486 13.9966 15.1854 14.8148 15.1854C15.633 15.1854 16.2963 15.8486 16.2963 16.6669ZM16.2963 22.5928C16.2963 23.411 15.633 24.0743 14.8148 24.0743C13.9966 24.0743 13.3333 23.411 13.3333 22.5928C13.3333 21.7746 13.9966 21.1113 14.8148 21.1113C15.633 21.1113 16.2963 21.7746 16.2963 22.5928ZM7.40741 18.1483C8.2256 18.1483 8.88889 17.4851 8.88889 16.6669C8.88889 15.8486 8.2256 15.1854 7.40741 15.1854C6.58921 15.1854 5.92593 15.8486 5.92593 16.6669C5.92593 17.4851 6.58921 18.1483 7.40741 18.1483ZM7.40741 24.0743C8.2256 24.0743 8.88889 23.411 8.88889 22.5928C8.88889 21.7746 8.2256 21.1113 7.40741 21.1113C6.58921 21.1113 5.92593 21.7746 5.92593 22.5928C5.92593 23.411 6.58921 24.0743 7.40741 24.0743Z"
                        fill="black"
                        fillOpacity="0.4"
                      />
                    </svg>
                  </span>
                </div>
              </div>

              {/* End Date */}
              <div className="flex marginy flex-col">
                <label className="text-sm sm:text-md text-black font-semibold activitylabel">
                  End Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    className="w-full bg-white onerem border border-gray-300 rounded-xl sm:rounded-2xl text-sm sm:text-base text-gray-700 outline-none appearance-none [&::-webkit-calendar-picker-indicator]:hidden"
                    value="2024-08-22"
                  />
                  <span className="absolute right-2 sm:right-3 top-3 sm:top-5 text-gray-400 pointer-events-none">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 sm:w-5 sm:h-5"
                    >
                      <path
                        d="M8.51828 1.11111C8.51828 0.497467 8.02082 0 7.40717 0C6.79353 0 6.29606 0.497467 6.29606 1.11111V3.45076C4.16372 3.6215 2.76387 4.04055 1.73542 5.06899C0.70698 6.09744 0.287928 7.49729 0.117188 9.62963H29.5119C29.3412 7.49729 28.9221 6.09744 27.8937 5.06899C26.8652 4.04055 25.4654 3.6215 23.3331 3.45076V1.11111C23.3331 0.497467 22.8356 0 22.222 0C21.6084 0 21.1109 0.497467 21.1109 1.11111V3.35244C20.1252 3.33333 19.0205 3.33333 17.7775 3.33333H11.8516C10.6086 3.33333 9.50387 3.33333 8.51828 3.35244V1.11111Z"
                        fill="black"
                        fillOpacity="0.4"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 15.1854C0 13.9424 1.68328e-07 12.8377 0.0191113 11.8521H29.6105C29.6296 12.8377 29.6296 13.9424 29.6296 15.1854V18.1483C29.6296 23.7353 29.6296 26.5289 27.8939 28.2645C26.1584 30.0002 23.3647 30.0002 17.7778 30.0002H11.8519C6.26483 30.0002 3.47133 30.0002 1.73566 28.2645C1.76606e-07 26.5289 0 23.7353 0 18.1483V15.1854ZM22.2222 18.1483C23.0404 18.1483 23.7037 17.4851 23.7037 16.6669C23.7037 15.8486 23.0404 15.1854 22.2222 15.1854C21.404 15.1854 20.7407 15.8486 20.7407 16.6669C20.7407 17.4851 21.404 18.1483 22.2222 18.1483ZM22.2222 24.0743C23.0404 24.0743 23.7037 23.411 23.7037 22.5928C23.7037 21.7746 23.0404 21.1113 22.2222 21.1113C21.404 21.1113 20.7407 21.7746 20.7407 22.5928C20.7407 23.411 21.404 24.0743 22.2222 24.0743ZM16.2963 16.6669C16.2963 17.4851 15.633 18.1483 14.8148 18.1483C13.9966 18.1483 13.3333 17.4851 13.3333 16.6669C13.3333 15.8486 13.9966 15.1854 14.8148 15.1854C15.633 15.1854 16.2963 15.8486 16.2963 16.6669ZM16.2963 22.5928C16.2963 23.411 15.633 24.0743 14.8148 24.0743C13.9966 24.0743 13.3333 23.411 13.3333 22.5928C13.3333 21.7746 13.9966 21.1113 14.8148 21.1113C15.633 21.1113 16.2963 21.7746 16.2963 22.5928ZM7.40741 18.1483C8.2256 18.1483 8.88889 17.4851 8.88889 16.6669C8.88889 15.8486 8.2256 15.1854 7.40741 15.1854C6.58921 15.1854 5.92593 15.8486 5.92593 16.6669C5.92593 17.4851 6.58921 18.1483 7.40741 18.1483ZM7.40741 24.0743C8.2256 24.0743 8.88889 23.411 8.88889 22.5928C8.88889 21.7746 8.2256 21.1113 7.40741 21.1113C6.58921 21.1113 5.92593 21.7746 5.92593 22.5928C5.92593 23.411 6.58921 24.0743 7.40741 24.0743Z"
                        fill="black"
                        fillOpacity="0.4"
                      />
                    </svg>
                  </span>
                </div>
              </div>

              {/* Select Subject */}
              <div className="flex marginy flex-col">
                <label
                  className="text-sm sm:text-md text-black font-semibold activitylabel"
                  htmlFor="Quarter"
                >
                  Select Subject
                </label>

                <div className="relative w-full ">
                  {/* Dropdown button */}
                  <button
                    onClick={() => setsubject(!subject)}
                    className="w-full bg-white border border-gray-300 onerem cursor-pointer rounded-xl flex justify-between items-center text-gray-700 focus:outline-none"
                  >
                    <span>{selected || "Select..."}</span>
                    <svg
                      className={`w-4 h-4 transition-transform ${
                        subject ? "rotate-180" : "rotate-0"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {/* Dropdown menu */}
                  {subject && (
                    <ul className="absolute left-0 w-full bg-white border border-gray-200 rounded-xl shadow-lg z-10">
                      {options.map((option) => (
                        <li
                          key={option}
                          onClick={() => {
                            setSelect(option);
                            setIsOpen(false);
                          }}
                          className={`halfrem cursor-pointer hover:bg-gray-100 ${
                            select === option ? "bg-gray-50 font-medium" : ""
                          }`}
                        >
                          {option}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              {/* Quarter */}
              <div className="flex marginy flex-col">
                <label
                  className="text-sm sm:text-md text-black font-semibold activitylabel"
                  htmlFor="Quarter"
                >
                  Quarter
                </label>

                <div className="relative w-full ">
                  {/* Dropdown button */}
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full bg-white border border-gray-300 onerem cursor-pointer rounded-xl flex justify-between items-center text-gray-700 focus:outline-none"
                  >
                    <span>{selected || "Select..."}</span>
                    <svg
                      className={`w-4 h-4 transition-transform ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {/* Dropdown menu */}
                  {isOpen && (
                    <ul className="absolute left-0 mt-1 w-full   bg-white border border-gray-200 rounded-xl shadow-lg z-10">
                      {options.map((option) => (
                        <li
                          key={option}
                          onClick={() => {
                            setSelected(option);
                            setIsOpen(false);
                          }}
                          className={`halfrem cursor-pointer hover:bg-gray-100 ${
                            selected === option ? "bg-gray-50 font-medium" : ""
                          }`}
                        >
                          {option}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex Buttons justify-center">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 md:gap-7 w-full sm:w-auto px-4 sm:px-0">
                <button
                  onClick={() => {
                    setFilter(null);
                  }}
                  className="cursor-pointer filter-btn w-full sm:w-[12rem] md:w-[15rem] h-[3.5rem] sm:h-[4rem] bg-gray-200 text-gray-800 text-base sm:text-lg md:text-xl font-sans rounded-xl sm:rounded-2xl font-medium hover:bg-gray-300 active:bg-gray-400 transition-colors touch-manipulation"
                >
                  Cancel
                </button>
                <button className="cursor-pointer filter-btn w-full sm:w-[12rem] md:w-[15rem] h-[3.5rem] sm:h-[4rem] text-base sm:text-lg md:text-xl font-sans bg-emerald-700 text-white rounded-xl sm:rounded-2xl font-medium hover:bg-emerald-800 active:bg-emerald-900 transition-colors touch-manipulation">
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
