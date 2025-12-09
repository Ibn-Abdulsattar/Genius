import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ReviewModel from "../../components/ReviewModel";
import { uploadButtons } from "../../data/common";
import useShowActivityPg from "../../hooks/useShowActivityPg";
import BackButton from "../../components/BackButton";

export default function ShowActivityPg() {
  const {
    answer,
    setAnswer,
    reviewModel,
    setReviewModel,
    dropdownRef,
    attachButtonRef,
    navigate,
  } = useShowActivityPg();

  return (
    <div className="page-content font-serif w-full">
      <div className=" bg-[#d9d9d9] rounded-2xl md:rounded-3xl min-h-[78.2vh] overflow-x-hidden overflow-y-auto p-3 sm:p-4 md:p-6 lg:p-8">
        {/* All Content */}
        <div className="All-Content ">
          {/* Activity-Top */}
          <div className="Activity-Top flex ">
                        {/* Back-Button */}
            <BackButton />
            {/* Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-[#012331] border-b-4 border-yellow-400 whitespace-nowrap">
              Activities
            </h2>
          </div>

          {/* Activity-bottom */}
          <div className="Activity-bottom bg-white rounded-2xl shadow-md  relative">

            {/* Question */}
            <div className="mb-3">
              <p className="text-gray-700 text-lg sm:text-xl font-medium">
                Question :
              </p>
              {/* Header */}
              <div className="StartedModel-header flex justify-between items-center gap-3 sm:gap-4">
                <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-[#012331] leading-tight flex-1 pr-2">
                  What benefits will I receive as a Lyft Pink member?
                </h2>
                <button className="flex rounded-lg md:rounded-xl border border-[#d9d9d9] w-[42px] h-[42px] md:w-[48px] md:h-[48px] lg:w-[52px] lg:h-[52px] flex-col items-center justify-center transition-all touch-manipulation flex-shrink-0 self-end sm:self-auto">
                  <span className="text-yellow-400 font-medium text-base md:text-lg leading-none">
                    ★
                  </span>
                  <span className="font-medium text-md font-[lato] md:text-sm">
                    25
                  </span>
                </button>
              </div>
            </div>

            {/* Description */}
            <div className="">
              <p className="text-gray-700 text-lg sm:text-xl font-medium ">
                Description :
              </p>
              <p className="Activity-bottom-description text-sm sm:text-base text-gray-600 leading-relaxed tracking-wide font-[lato] font-medium lg:tracking-widest">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            {/* Attachments */}
            <div className="Attachments">
              <p className="text-black Activity-bottom-attachments text-2xl font-normal font-[lato]">
                Attachments
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <img
                  src="/image/img-10.png"
                  alt="Attachment 1"
                  className="w-full  sm:w-[239px] h-[238px] object-cover rounded-lg shadow"
                />
                <img
                  src="/image/img-11.png"
                  alt="Attachment 2"
                  className="w-full sm:w-[239px] h-[238px] object-cover rounded-lg shadow"
                />
              </div>
            </div>

            {/* Answer box */}
            <div className="">
              <p className="Activity-bottom-answer text-lg sm:text-xl text-gray-600 font-medium mb-3">
                Answer:
              </p>
              <div className="relative">
                <textarea
                  onClick={() => setAnswer(false)}
                  className="w-full onerem  h-40 sm:h-48 md:h-56 lg:h-64 border border-gray-300 rounded-2xl sm:rounded-3xl p-3 sm:p-4 pr-12 sm:pr-16 text-sm sm:text-base text-gray-700 resize-none focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  placeholder="Type here..."
                />
                <button
                  ref={attachButtonRef}
                  onClick={() => setAnswer(!answer)}
                  className="absolute top-3 sm:top-4 right-3 sm:right-4 cursor-pointer rounded-lg transition-colors"
                  aria-label="Attach file"
                >
                  <svg
                    width="27"
                    height="26"
                    viewBox="0 0 27 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
                  >
                    <path
                      d="M6.56331 14.7369L17.117 4.34311C17.2304 4.23145 18.135 3.34056 19.5666 2.85829C21.564 2.22753 23.6 2.74663 25.221 4.34311C26.8794 5.9396 27.3691 7.90669 26.7287 9.87379C26.2764 11.285 25.3344 12.2495 25.221 12.3612L13.8761 23.5342C11.9161 25.4645 7.01561 27.9518 2.49261 23.5342C-1.993 19.1165 0.570034 14.2534 2.49261 12.3612L14.6673 0.334086C15.1196 -0.111362 15.8361 -0.111362 16.2884 0.334086C16.7407 0.779533 16.7407 1.48512 16.2884 1.93057L4.15105 13.9577C3.96289 14.1061 0.155124 18.0035 4.15105 21.9389C8.03359 25.7626 11.8401 22.3475 12.2551 21.9389L23.6 10.7279C23.6 10.7279 24.2404 10.0971 24.5419 9.20621C24.9195 8.01835 24.6553 6.97897 23.6 5.9396C21.3384 3.71236 19.1517 5.5678 18.738 5.9396L8.18436 16.2965C7.80684 16.6683 7.5439 17.2991 8.18436 17.9299C8.82481 18.5606 9.42788 18.2636 9.8054 17.9299L17.1182 10.7279C17.5705 10.3192 18.3243 10.3192 18.7392 10.7279C19.1915 11.1733 19.1915 11.9157 18.7392 12.3612L11.4264 19.5252C10.4085 20.4909 8.33512 21.2701 6.56452 19.5252C4.75532 17.7802 5.54534 15.7014 6.56331 14.7369Z"
                      fill="#012331"
                      fillOpacity="0.55"
                    />
                  </svg>
                </button>

                {/* Upload-Menu-Dropdown */}
                {answer && (
                  <div
                    ref={dropdownRef}
                    className="absolute top-8 right-8 bg-white rounded-tr-none rounded-2xl border border-gray-200 shadow-sm"
                  >
                    <div className="halfrem w-[10rem]">
                      {uploadButtons.map((btn) => (
                        <button
                          key={btn.id}
                          onClick={() => setAnswer(null)}
                          className="upload-activity-btn flex justify-center border-dashed border-b-2 border-gray-200  gap-2 font-semibold font-[lato] rounded-tr-xl rounded-tl-xl items-center hover:bg-gray-50 w-full cursor-pointer last:border-b-0 text-normal md:text-md text-gray-700"
                          dangerouslySetInnerHTML={{
                            __html: `${btn.icon}${btn.label}`,
                          }}
                        ></button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Submit button */}
            <div className="flex justify-center">
              <button
                onClick={() => {
                  setReviewModel(true);
                  setAnswer(false);
                }}
                className=" cursor-pointer show-activity-button onerem bg-emerald-700 hover:bg-emerald-800 active:scale-95 text-white font-medium py-3 sm:py-3.5 md:py-4 px-6 sm:px-8 md:px-10 rounded-xl sm:rounded-2xl transition-all duration-200 w-full sm:w-auto sm:min-w-[200px] md:min-w-[240px] text-sm sm:text-base md:text-lg shadow-lg hover:shadow-xl"
              >
                Submit Activity
              </button>
            </div>
          </div>
          <ReviewModel
            img={"/image/img-12.png"}
            title={"Mission Accomplished"}
            descrip={
              "Your hard work helped you navigate this challenge like a true astronaut Remember, every effort expands your universe of knowledge. What new constellation of skills will you explore next?"
            }
            btnText={"Pending Review"}
            star={true}
            bgcolor={"#F7F7F7"}
          />
        </div>
      </div>
    </div>
  );
}
