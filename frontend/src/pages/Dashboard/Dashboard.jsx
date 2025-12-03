import React from "react";
import Card from "./Card";
import Dashboard_Stats from "../../data/dashboard.js";
import DocsTitle from "../../components/DocsTitle.jsx";

export default function Dashboard() {
  return (
    <div className="page-content font-serif w-full">
      <div className="dashboard bg-white rounded-3xl max-h-[77.9vh] side-scroll overflow-x-hidden overflow-y-auto">
        {/* All Content */}
        <div className="All-Content">
          <div className="flex flex-col relative lg:flex-row justify-between items-start gap-6 lg:gap-8">
            {/* Left Section */}
            <div className="dashboard-left w-full lg:w-1/2">
              {/* Profile */}
              <div className="dashboard-profile flex items-center gap-3 flex-wrap">
                <div className="dashboard-profile-img rounded-full border-2 border-[#FED302]">
                  <img
                    src="/image/img-6.jpg"
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover"
                    alt="profile"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <h2 className="font-medium tracking-[0.16px] text-lg sm:text-2xl md:text-3xl text-gray-800 truncate">
                    Welcome Christina Dykes
                  </h2>
                  <p className="text-sm truncate sm:text-lg font-normal font-[lato] tracking-wide sm:tracking-wider md:tracking-[.19rem] text-gray-500">
                    Discover the Statistics of Your Genius™
                  </p>
                </div>
              </div>
              {/* Title */}
              <DocsTitle title="Dashboard" />

              {/* Stats Grid - on mobile */}
              <div className="block lg:hidden">
                <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                  {Dashboard_Stats.map((item, index) => (
                    <Card key={index} title={item.title} num={item.num} />
                  ))}
                </div>
              </div>
            </div>

            {/* Right Image for Desktop */}
            <div className="w-full lg:w-1/2 relative">
              <div className="relative w-full">
                <img
                  src="/image/img-5.png"
                  alt="Child learning illustration"
                  className="rounded-lg w-full  max-h-[auto] desktop-right-image lg:max-h-[78vh] md:object-cover"
                />
              </div>
            </div>
            {/* Dashboard Stats  - Desktop */}
            <div className="hidden dashboard-stats lg:block absolute bottom-7 left-10 w-[91%] lg:h-[57%] ">
              <div className="grid grid-cols-3 gap-5">
                {Dashboard_Stats.map((item, index) => (
                  <Card key={index} title={item.title} num={item.num} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
