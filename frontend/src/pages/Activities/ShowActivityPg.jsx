import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useModule } from "../../context/moduleContext";
import ReviewModel from "../../components/ReviewModel";

export default function ShowActivityPg() {
  const [answer, setAnswer] = useState(null);
  const { reviewModel, setReviewModel } = useModule();
  const dropdownRef = useRef(null);
  const attachButtonRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    function handleOutside(e) {
      if (
        answer &&
        dropdownRef &&
        !dropdownRef.current.contains(e.target) &&
        !attachButtonRef.current.contains(e.target)
      ) {
        setAnswer(false);
      }
    }

    document.addEventListener("click", handleOutside);
    return () => {
      document.removeEventListener("click", handleOutside);
    };
  }, [answer]);

  const uploadButtons = [
    {
      id: 1,
      label: "PDF",
      icon: `
      <svg
                        width="25"
                        height="25"
                        viewBox="0 0 30 39"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.63084 8.45546V0.470215L0.447266 9.65432H8.4319C9.29489 9.65432 9.63084 9.31837 9.63084 8.45546Z"
                          fill="#012331"
                        />
                        <path
                          d="M14.4274 19.383C14.5941 19.2557 14.7621 18.1715 15.0956 16.5412C15.4303 14.9122 15.0115 13.91 14.136 14.0366C13.2578 14.1607 13.0504 15.1629 13.1343 16.2077C13.2171 17.2513 13.7592 18.4209 14.0939 19.0896C14.0939 19.0896 14.2607 19.5077 14.4274 19.383Z"
                          fill="#012331"
                        />
                        <path
                          d="M10.338 27.8197C10.0542 27.9247 8.16813 28.4885 7.04059 29.5734C5.91168 30.6603 5.99444 31.6198 6.49719 31.954C6.99735 32.2875 8.4176 31.2858 9.29574 30.2423C10.1726 29.1968 10.7568 28.1532 10.7568 27.9865C10.7568 27.8197 10.674 27.6938 10.338 27.8197Z"
                          fill="#012331"
                        />
                        <path
                          d="M13.4707 26.0234C14.3031 25.6899 17.3103 25.0205 17.3103 25.0205C17.3103 25.0205 15.3491 22.6833 15.0972 22.2231C15.0972 22.2231 13.9276 25.2706 13.4707 26.0234Z"
                          fill="#012331"
                        />
                        <path
                          d="M27.9081 0H11.408V9.52394C11.408 10.5745 10.5528 11.4304 9.50286 11.4304H0V37.4231C0 38.2802 0.69741 38.9776 1.55385 38.9776H27.9081C28.7645 38.9776 29.4619 38.2802 29.4619 37.4231V1.55332C29.4619 0.696725 28.7646 0 27.9081 0ZM22.8251 28.9873C21.3539 28.7869 19.5657 27.2578 18.0513 25.9235C18.0067 25.9082 17.9673 25.8993 17.938 25.8993C17.6924 25.8993 14.96 26.6864 12.883 27.2763C9.84901 32.7016 6.82642 34.2505 5.40739 32.4554C4.66164 31.5105 4.94925 29.2807 8.54067 27.6097C9.26222 27.2763 10.2663 26.8812 11.4372 26.5241C12.4375 24.7074 13.4468 22.1972 14.0119 20.7113C13.0904 18.9487 12.3421 17.0919 12.2581 16.2093C12.0902 14.4536 12.8423 12.866 14.3465 12.866C16.2631 12.866 17.686 14.7037 15.4397 21.1668C16.1396 22.3155 17.0865 23.7084 18.1785 24.8137C20.0659 24.4542 21.9519 24.3428 22.7359 24.3899C25.439 24.5528 26.0003 25.8147 26.083 26.7755C26.1671 27.7363 24.9555 29.2807 22.8251 28.9873Z"
                          fill="#012331"
                        />
                        <path
                          d="M22.5324 25.2705C21.5245 25.2056 18.899 25.5625 19.1904 25.6872C19.1904 25.6872 21.3208 27.1935 22.5718 27.3589C23.8279 27.5257 24.2873 26.9835 24.2873 26.4407C24.2873 25.8973 23.8279 25.3545 22.5324 25.2705Z"
                          fill="#012331"
                        />
                      </svg>
    `,
    },
    {
      id: 2,
      label: "Image",
      icon: `
      <svg
                        width="25"
                        height="25"
                        viewBox="0 0 41 34"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 33.4136V0H40.8816V33.4136H0ZM36.7197 22.353V4.1637H4.16188V19.6161L13.0567 14.3139L24.6884 20.6433L29.4214 17.8499L36.7197 22.353ZM29.0802 13.9143C27.2556 13.9143 25.8306 12.4309 25.8306 10.6063C25.8306 8.78172 27.2556 7.29834 29.0802 7.29834C30.9048 7.29834 32.3298 8.78172 32.3298 10.6063C32.3298 12.4309 30.9048 13.9143 29.0802 13.9143Z"
                          fill="#012331"
                        />
                      </svg>
    `,
    },
    {
      id: 3,
      label: "Video",
      icon: `
      <svg
                        width="25"
                        height="25"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M26.1771 10.8853H13.1054C6.47688 10.8853 3.16258 10.8853 1.30088 12.8235C-0.560818 14.7618 -0.122796 17.7564 0.753264 23.7454L1.58403 29.4249C2.27105 34.1215 2.61455 36.4698 4.37675 37.8761C6.13895 39.2825 8.73802 39.2825 13.9362 39.2825H25.3463C30.5446 39.2825 33.1437 39.2825 34.9059 37.8761C36.6681 36.4698 37.0115 34.1215 37.6985 29.4249L38.5294 23.7454C39.4054 17.7564 39.8434 14.7618 37.9818 12.8235C36.12 10.8853 32.8057 10.8853 26.1771 10.8853ZM24.7111 27.0937C25.8079 26.4137 25.8079 24.6536 24.7111 23.9736L18.0889 19.8684C17.0229 19.2077 15.713 20.0678 15.713 21.4283V29.639C15.713 30.9995 17.0229 31.8596 18.0889 31.1989L24.7111 27.0937Z"
                          fill="#012331"
                        />
                        <path
                          opacity="0.4"
                          d="M12.7838 1.43241e-05H26.4937C26.9502 -0.000103524 27.3004 -0.000181976 27.6064 0.0297514C29.7823 0.242604 31.5633 1.55083 32.3186 3.31305H6.95898C7.71421 1.55083 9.49519 0.242604 11.6711 0.0297514C11.9771 -0.000181976 12.3272 -0.000103524 12.7838 1.43241e-05Z"
                          fill="#012331"
                        />
                        <path
                          opacity="0.7"
                          d="M8.46436 5.34766C5.733 5.34766 3.49336 6.99703 2.74595 9.18515C2.73038 9.23076 2.71545 9.27662 2.70117 9.32268C3.48319 9.08587 4.29705 8.93115 5.12094 8.82554C7.24293 8.55349 9.92463 8.55363 13.0398 8.5538H26.5768C29.6919 8.55363 32.3737 8.55349 34.4956 8.82554C35.3195 8.93115 36.1334 9.08587 36.9154 9.32268C36.9012 9.27662 36.8861 9.23076 36.8706 9.18515C36.1232 6.99703 33.8835 5.34766 31.1522 5.34766H8.46436Z"
                          fill="#012331"
                        />
                      </svg>
    `,
    },
    {
      id: 4,
      label: "Document",
      icon: `
      <svg
                        width="25"
                        height="25"
                        viewBox="0 0 37 46"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M0 6.1582V38.1551C0 41.9419 3.06977 45.0116 6.85649 45.0116H29.7115C33.4983 45.0116 36.568 41.9419 36.568 38.1551V15.3002C36.568 11.5134 33.4983 8.4437 29.7115 8.4437H2.2855C1.02326 8.4437 0 7.42044 0 6.1582ZM7.42787 22.1566C7.42787 21.2099 8.19531 20.4425 9.14199 20.4425H27.426C28.3726 20.4425 29.1401 21.2099 29.1401 22.1566C29.1401 23.1032 28.3726 23.8707 27.426 23.8707H9.14199C8.19531 23.8707 7.42787 23.1032 7.42787 22.1566ZM7.42787 30.1558C7.42787 29.2092 8.19531 28.4417 9.14199 28.4417H21.7122C22.6589 28.4417 23.4263 29.2092 23.4263 30.1558C23.4263 31.1025 22.6589 31.87 21.7122 31.87H9.14199C8.19531 31.87 7.42787 31.1025 7.42787 30.1558Z"
                          fill="#012331"
                        />
                        <path
                          opacity="0.5"
                          d="M31.997 4.57186V8.83353C31.2821 8.58087 30.5128 8.4434 29.7115 8.4434H2.2855C1.02326 8.4434 0 7.42014 0 6.1579V5.99552C0 4.7773 0.895755 3.74449 2.10172 3.5722L26.7796 0.0468025C29.5332 -0.3466 31.997 1.79018 31.997 4.57186Z"
                          fill="#012331"
                        />
                      </svg>
    `,
    },
  ];

  return (
    <div className="page-content font-serif w-full">
      <div className=" bg-[#d9d9d9] rounded-2xl md:rounded-3xl min-h-[78.2vh] overflow-x-hidden overflow-y-auto p-3 sm:p-4 md:p-6 lg:p-8">
        {/* All Content */}
        <div className="All-Content ">
          {/* Activity-Top */}
          <div className="Activity-Top flex ">
            {/* Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-[#012331] border-b-4 border-yellow-400 whitespace-nowrap">
              Activities
            </h2>
          </div>

          {/* Activity-bottom */}
          <div className="Activity-bottom bg-white rounded-2xl shadow-md  relative">
            {/* Back-Button */}
            <button
              onClick={() => {
                navigate(-1);
              }}
              className="group Back-Button cursor-pointer flex items-center"
            >
              <svg
                className="w-10 h-10 text-green -ml-4 transition-all duration-300 group-hover:text-purple-300 group-hover:-translate-x-1"
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
