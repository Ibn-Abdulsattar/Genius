import React from "react";
import Card from "./Card";

export default function Dashboard() {
  const Dashboard_Stats = [
    { title: "Activities \nCompleted", num: "10" },
    { title: "Stars \nEarned ", num: "25" },
    { title: "Pending \nActivities", num: "10" },
    { title: "Surveys \nCompleted", num: "05" },
    { title: "Stars \nPending", num: "05" },
    { title: "Surveys \nPending", num: "05" },
  ];

  return (
    <div className="page-content font-serif w-full">
      <div className="dashboard bg-white rounded-3xl min-h-[78.2vh] side-scroll overflow-x-hidden overflow-y-auto">
        {/* All Content */}
        <div className="All-Content">
          <div className="flex flex-col relative lg:flex-row justify-between items-start gap-6 lg:gap-8">
            {/* Left Section */}
            <div className="dashboard-left space-y-4 w-full lg:w-1/2">
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
                  <h2 className="font-bold tracking-[0.16px] text-lg sm:text-xl text-gray-800 truncate">
                    Welcome Christina Dykes
                  </h2>
                  <p className="text-sm sm:text-md font-normal text-gray-500">
                    Discover the Statistics of Your Genius™
                  </p>
                </div>
              </div>

              <h3 className="text-xl dashboard-title sm:text-2xl font-semibold text-gray-700 border-b-2 border-[#FED302] inline-block ">
                Dashboard
              </h3>

              {/* Stats Grid - on mobile */}
              <div className="block lg:hidden mt-6">
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
            <div className="hidden dashboard-stats lg:block absolute bottom-10 left-10 w-[91%] lg:h-[57%] ">
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
