import React from "react";
import Card from "./Card";
import starFallStore from "../../data/starfallStore";
import DocsTitle from "../../components/DocsTitle";

export default function StarfallStore() {
  return (
    <div className="page-content font-serif w-full">
      <div className="dashboard bg-[#d9d9d9] rounded-2xl md:rounded-3xl max-h-[77.9vh] side-scroll overflow-x-hidden overflow-y-auto p-3 sm:p-4 md:p-6 lg:p-8">
        {/* All Content */}
        <div className="All-Content ">
          {/* Activity-Top */}
          <div className="Activity-Top flex items-center">
            {/* Title */}
            <DocsTitle title="Starfall Store" />
          </div>

          {/* Activity-bottom */}
          <div className=" Surveys-bottom rounded-2xl  relative">
            {/* All Cards */}
            <div className="grid starfall-card grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-7">
              {starFallStore.map((item, idx) => (
                <Card
                  key={idx}
                  img={item.img}
                  title={item.title}
                  rate={item.rate}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
