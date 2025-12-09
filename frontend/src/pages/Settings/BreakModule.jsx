import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function BreakModule({ isBreak, setIsBreak }) {
  const navigate = useNavigate();

  const modalRef = useRef(null);

  useEffect(() => {
    const preventScroll = (e) => {
      e.preventDefault();
      modalRef.current?.scrollBy(0, e.deltaY);
    };

    if (isBreak) {
      document.body.style.overflow = "hidden";
      window.addEventListener("wheel", preventScroll, { passive: false });
    } else {
      document.body.style.overflow = "auto";
      window.removeEventListener("wheel", preventScroll);
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("wheel", preventScroll);
    };
  }, [isBreak]);

  return (
    <>
      {isBreak && (
        <div className="fixed inset-0 z-50 bg-[rgba(0,0,0,0.20)] flex items-center justify-center p-2 sm:p-4">
          {/* Modal Container */}
          <div
            ref={modalRef}
            className={`bg-[#fff]
             reviewModel activity-modal-container w-[70%] sm:w-[60%] md:w-[50%] lg:w-[45%] xl:w-[40%] 2xl:w-[40%] max-w-[600px] max-h-[95vh] sm:max-h-[90vh] md:h-[80%] lg:h-[70%] md:max-h-[95vh] rounded-2xl sm:rounded-3xl shadow-lg overflow-y-auto`}
          >
            <div className="flex flex-col justify-center items-center">
              {/* Review image */}
              <img
                src="/image/img-15.png"
                className="w-[65%] sm:w-[60%] md:w-[55%] lg:w-[50%] h-[10rem] sm:h-[14rem] md:h-[15rem] lg:h-[16rem] object-cover xs:object-fit sm:object-contain bg-center pointthreerem"
                alt="ReviewImg"
              />

              {/* Review title */}
              <h3 className="font-medium pointthreerem text-lg sm:text-xl md:text-2xl lg:text-2xl text-center px-4">
                Taking a break?
              </h3>
            </div>

            {/* Review button */}
            <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-5 break-btn ">
              <div
                className="flex justify-center cursor-pointer w-full sm:w-[48%] gap-3 sm:gap-4 md:gap-5 items-center rounded-xl sm:rounded-2xl bg-[#E1E1E1]  hover:bg-[#E2E2E2] transition-colors duration-200 active:scale-95"
                onClick={() => {
                  setIsBreak(false);
                }}
              >
                <span className=" halfrem text-sm sm:text-base md:text-lg font-medium">
                  Go Back
                </span>
              </div>

              <div
                onClick={() => {
                  navigate("/login");
                  setIsBreak(false);
                }}
                className="flex justify-center cursor-pointer w-full sm:w-[48%] gap-3 sm:gap-4 md:gap-5 items-center rounded-xl sm:rounded-2xl bg-[#007D69] hover:bg-[#006558] transition-colors duration-200 active:scale-95"
              >
                <span className="text-white halfrem text-sm sm:text-base md:text-lg font-medium">
                  Return To Login
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
