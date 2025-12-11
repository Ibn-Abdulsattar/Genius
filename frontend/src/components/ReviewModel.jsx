import React, { useRef, useEffect } from "react";
import useModule from "../hooks/useModule";
export default function ReviewModel({
  img,
  title,
  descrip,
  btnText,
  star,
  bgcolor,
}) {
  const { reviewModel, setReviewModel } = useModule();

  const modalRef = useRef(null);

  useEffect(() => {
    const preventScroll = (e) => {
      e.preventDefault();
      modalRef.current?.scrollBy(0, e.deltaY);
    };

    const handleModalScroll = (e) => {
      e.preventDefault();
      e.stopPropagation();
    };

    if (reviewModel) {
      document.body.style.overflow = "hidden";
      window.addEventListener("wheel", preventScroll, { passive: false });
      modalRef.current.addEventListener("wheel", handleModalScroll, {
        passive: false,
      });
    } else {
      document.body.style.overflow = "auto";
      window.removeEventListener("wheel", preventScroll);
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("wheel", preventScroll);
    };
  }, [reviewModel]);
  return (
    <>
      {reviewModel && (
        <div className="fixed inset-0 z-50 bg-[rgba(0,0,0,0.20)] flex items-center justify-center">
          {/* Modal Container */}
          <div
            ref={modalRef}
            className={`bg-[${
              bgcolor ? bgcolor : "#fff"
            }] reviewModel relative activity-modal-container w-[70%] sm:w-[60%] md:w-[50%] lg:w-[45%] xl:w-[40%] 2xl:w-[40%] max-w-[600px] h-auto max-h-[95vh]  rounded-2xl sm:rounded-3xl shadow-lg overflow-y-auto`}
            style={{ backgroundColor: bgcolor ? bgcolor : "#fff" }}
          >
            {/* Back Button */}
            <div className="absolute top-5 left-5">
              <button
                onClick={() => {
                  setReviewModel(false);
                }}
                className="group Back-Button border border-gray-200 rounded-full cursor-pointer flex items-center"
              >
                <svg
                  className="w-8 h-8 sm:w-10 sm:h-10 text-[#012331] -ml-4 transition-all duration-300 group-hover:text-purple-300 group-hover:-translate-x-1"
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
            </div>

            <div className="flex flex-col justify-center items-center">
              {/* Review image */}
              <img
                src={img}
                className="w-[65%] sm:w-[60%] md:w-[55%] lg:w-[50%] h-[12rem] sm:h-[14rem] md:h-[15rem] lg:h-[16rem] object-cover bg-center pointthreerem"
                alt="ReviewImg"
              />

              {/* Review title */}
              <h3 className="font-medium pointthreerem text-lg sm:text-xl md:text-2xl lg:text-2xl text-center px-4">
                {title}
              </h3>

              {/* Review descrip */}
              <p className="font-[lato] text-xs sm:text-sm md:text-base Review-descrip tracking-wider opacity-60 text-center px-4   max-w-[90%] lg:max-w-[80%]">
                {descrip}
              </p>
            </div>

            {/* Review button */}
            <div className="flex justify-center px-4 sm:px-6 md:px-8">
              <div
                className="flex justify-center cursor-pointer w-full sm:w-[90%] md:w-[80%] lg:w-[60%] xl:w-[53%] gap-3 sm:gap-4 md:gap-5 items-center rounded-xl sm:rounded-2xl bg-[#007D69] pointthreerem hover:bg-[#006558] transition-colors duration-200 active:scale-95"
                onClick={() => {
                  setReviewModel(false);
                }}
              >
                {star && (
                  <button className="flex bg-white rounded-lg md:rounded-xl border border-[#d9d9d9] w-[30px] h-[30px] sm:w-[36px] sm:h-[36px] md:w-[40px] md:h-[40px] lg:w-[42px] lg:h-[42px] flex-col items-center justify-center transition-all touch-manipulation flex-shrink-0">
                    <span className="text-yellow-400 font-medium text-base sm:text-lg md:text-xl leading-none">
                      ★
                    </span>
                  </button>
                )}
                <span
                  className={`text-white  ${
                    btnText === "Thank You For Participating"
                      ? "text-xs "
                      : "text-sm "
                  }  sm:text-base halfrem md:text-lg font-medium`}
                >
                  {btnText}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
