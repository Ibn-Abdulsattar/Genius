import React from "react";
import Card from "./Card";
import { useNavigate } from "react-router-dom";
import { earningCards } from "../../data/common";
import DocsTitle from "../../components/DocsTitle";
import RedemptionStatus from "../../components/RedemptionStatus";
import BackButton from "../../components/BackButton";

export default function EarningOverviewPg() {
  const navigate = useNavigate();

  return (
    <div className="page-content font-serif w-full">
      <div className="dashboard bg-[#d9d9d9] rounded-2xl md:rounded-3xl max-h-[77.9vh] side-scroll overflow-x-hidden overflow-y-auto">
        {/* All Content */}
        <div className="All-Content ">
          {/* Earning-Top */}
          <div className="Earning-Top  flex">
            {/* Back-button */}
            <BackButton />
            {/* Title */}
            <div className=" flex justify-center sm:justify-start">
              <DocsTitle title="Earnings Overview" />
            </div>
          </div>
          {/* Earning-bottom */}
          <div className="Surveys-bottom ">
            {/* Redemption-status */}
            <div className="w-full">
              <div className="Redemption-status flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0">
                {/* Redemption-status-left */}
                <div className="w-full  md:w-[50%] lg:w-[60%] xl:w-[70%]">
                  <p className="font-medium text-2xl text-black sm:text-3xl font-[lato] text-gray-800">
                    Redemption Status
                  </p>
                </div>

                {/* Redemption-status-right */}
                <div className="w-full md:w-[50%] lg:w-[40%] xl:w-[30%] flex gap-5 sm:gap-8 md:gap-5 justify-start md:justify-end">
                  {/* Star Badge */}
                  <RedemptionStatus
                    title={"Available Star Power"}
                    num={350}
                    bgcolor={"#fed302"}
                    color={"#000"}
                  />

                  {/* Pending Delivery Badge */}
                  <RedemptionStatus
                    title={"Pending Delivery"}
                    num={150}
                    bgcolor={"#ff5A5A"}
                    color={"#fff"}
                  />
                </div>
              </div>
            </div>

            {/* Earning Cards */}
            <div className="grid Redemption-status grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-7">
              {earningCards.map((item, idx) => (
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
