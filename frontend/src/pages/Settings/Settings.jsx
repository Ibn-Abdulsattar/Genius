import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import BreakModule from "./BreakModule";
import settingPage from "../../data/setting";
import DocsTitle from "../../components/DocsTitle";

export default function Settings() {
  const [isBreak, setIsBreak] = useState(false);
const navigate = useNavigate();

  return (
    <div className="page-content font-serif w-full">
      <div className=" bg-[#d9d9d9] rounded-2xl md:rounded-3xl min-h-[77.9vh] overflow-x-hidden overflow-y-auto">
        {/* All Content */}
        <div className="All-Content ">
          {/* Setting-Top */}
          <div className="Setting-Top  ">
            {/* Title */}
            <DocsTitle title="Settings" />
          </div>
          {/* Setting-bottom */}
          <div className="Surveys-bottom">
            <div className="flex flex-col lg:flex-row item-center md:justify-between lg:justify-start gap-2 sm:gap-5 ">
              {/* <!-- Setting-bottom-left --> */}
              <div className="Setting-bottom-left text-[#012331] flex flex-col gap-3 md:gap-6 w-[100%]  lg:w-[70%]  rounded-lg">
                {settingPage.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => navigate(`${item.url}`)}
                    className="w-full Setting-bottom-left-pg flex justify-between items-center cursor-pointer text-left bg-white rounded-lg text-base sm:text-lg md:text-xl  font-medium hover:bg-gray-50 transition-all duration-200"
                  >
                    {item.title}
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8"
                      viewBox="0 0 25 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.4567 15.239C16.2305 15.0081 16.1035 14.695 16.1035 14.3686C16.1035 14.0422 16.2305 13.7292 16.4567 13.4983L20.8366 9.03155H1.20768C0.887386 9.03155 0.580207 8.90179 0.353722 8.67081C0.127238 8.43984 0 8.12657 0 7.79992C0 7.47327 0.127238 7.16 0.353722 6.92902C0.580207 6.69805 0.887386 6.56828 1.20768 6.56828H20.8333L16.4567 2.1032C16.3445 1.9888 16.2555 1.85298 16.1948 1.7035C16.1341 1.55403 16.1029 1.39382 16.1029 1.23203C16.1029 0.905274 16.2301 0.591903 16.4567 0.360853C16.6833 0.129803 16.9905 0 17.3109 0C17.6313 0 17.9386 0.129803 18.1652 0.360853L24.6061 6.92956C24.7183 7.0438 24.8073 7.17947 24.868 7.32882C24.9287 7.47816 24.96 7.63825 24.96 7.79992C24.96 7.96159 24.9287 8.12168 24.868 8.27102C24.8073 8.42036 24.7183 8.55603 24.6061 8.67027L18.1652 15.239C18.053 15.3534 17.9198 15.4442 17.7733 15.5062C17.6267 15.5681 17.4696 15.6 17.3109 15.6C17.1523 15.6 16.9952 15.5681 16.8486 15.5062C16.702 15.4442 16.5688 15.3534 16.4567 15.239Z"
                        fill="#CDCDCD"
                      />
                    </svg>
                  </button>
                ))}

                {/* Logout-button */}
                <div className="flex justify-center lg:justify-start">
                  <button onClick={()=> setIsBreak(true)} className="w-[90%] active:scale-95 sm:w-[60%] lg:w-[30%] cursor-pointer onerem text-left px-4 py-2 bg-red-500 flex justify-center items-center text-white rounded-lg hover:bg-red-600 mt-2">
                    Logout
                  </button>
                </div>
              </div>

              {/* <!-- Setting-bottom-Right --> */}
              <div className="Setting-bottom-Right  w-[100%]  lg:w-[30%] flex flex-col justify-center items-center  gap-3">
                <div className="relative font-[lato]">
                  <img
                    src="/image/img-6.jpg"
                    alt="User"
                    className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full object-cover shadow-lg"
                  />
                  <div className="absolute left-1/2 -translate-x-1/2 pointthreerem -bottom-3 flex items-center gap-1 bg-white font-normal shadow-md rounded-2xl">
                    <img
                      src="/image/img-22.png"
                      className="w-5 h-5 object-contain"
                      alt="Points"
                    />
                    <span className="text-base sm:text-lg font-semibold text-[#012331]">
                      250
                    </span>
                  </div>
                </div>

                <div className="flex font-[lato] flex-col items-center gap-1 mt-4 text-center">
                  <h2 className="text-xl sm:text-2xl font-semibold text-[#012331]">
                    Ellington Thom
                  </h2>
                  <p className="text-base sm:text-lg text-gray-500">
                    123-456-7890
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Logout Module */}
          <BreakModule isBreak={isBreak} setIsBreak={setIsBreak} />
        </div>
      </div>
    </div>
  );
}
