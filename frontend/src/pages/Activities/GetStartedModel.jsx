import React, { useState, useEffect, useRef } from "react";

export default function ActivityModal({ start, setStart }) {
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

    if (start) {
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
  }, [start]);

  return (
    <>
      {start && (
        <div className="fixed inset-0 z-50 bg-[rgba(0,0,0,0.20)] flex items-center justify-center p-2 sm:p-4">
          {/* Modal Container */}
          <div
            ref={modalRef}
            className="bg-white tworem activity-modal-container w-[85%] sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] max-w-[1000px] h-auto max-h-[85vh] sm:max-h-[90vh] md:max-h-[85vh] rounded-2xl sm:rounded-3xl shadow-lg overflow-y-auto"
          >
            {/* Modal Card */}
            <div className="bg-white StartedModel rounded-xl">
              {/* Header */}
              <div className="StartedModel-header flex justify-between items-start sm:items-center gap-3 sm:gap-4">
                <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-[#012331] leading-tight flex-1 pr-2">
                  What benefits will I receive as a Lyft Pink member?
                </h2>
                <button className="flex rounded-lg md:rounded-xl border border-[#d9d9d9] w-[42px] h-[42px] md:w-[48px] md:h-[48px] lg:w-[52px] lg:h-[52px] flex-col items-center justify-center  transition-all touch-manipulation flex-shrink-0 self-end sm:self-auto">
                  <span className="text-yellow-400 font-medium text-base md:text-lg leading-none">
                    ★
                  </span>
                  <span className="font-medium font-[lato] text-xs md:text-sm">
                    25
                  </span>
                </button>
              </div>

              {/* Content */}
              <div className="StartedModel-content flex flex-col lg:flex-row gap-4 md:gap-5 lg:gap-6 items-start">
                <p className="text-gray-600 font-[lato] font-medium opacity-90 tracking-wider text-xs sm:text-sm md:text-base leading-relaxed w-full  lg:w-[60%]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <img
                  src="/image/img-9.png"
                  alt="Child learning"
                  className="w-full lg:w-[40%] h-auto max-h-[200px] sm:max-h-[250px] lg:max-h-[16rem] object-cover rounded-lg shadow-sm"
                />
              </div>

              {/* Footer */}
              <div className="flex justify-center">
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 lg:gap-7 w-full sm:w-auto px-2 sm:px-0">
                  <button
                    onClick={() => {
                      setStart(null);
                    }}
                    className="cursor-pointer halfrem w-full sm:w-[11rem] md:w-[13rem] lg:w-[15rem] h-[2.5rem] sm:h-[3.5rem] md:h-[4rem] bg-gray-200 text-gray-800 text-sm sm:text-base md:text-lg font-sans rounded-xl sm:rounded-2xl font-medium hover:bg-gray-300 active:bg-gray-400 transition-colors touch-manipulation"
                  >
                    Cancel
                  </button>
                  <button className="cursor-pointer halfrem w-full sm:w-[11rem] md:w-[13rem] lg:w-[15rem] h-[2.5rem] sm:h-[3.5rem] md:h-[4rem] text-sm sm:text-base md:text-lg font-sans bg-emerald-700 text-white rounded-xl sm:rounded-2xl font-medium hover:bg-emerald-800 active:bg-emerald-900 transition-colors touch-manipulation">
                    Submit Activity
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
