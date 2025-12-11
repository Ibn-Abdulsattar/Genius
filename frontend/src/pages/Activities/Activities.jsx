import React, { useState } from "react";
import Quiz from "./Quiz";
import Filter from "./Filter";
import GetStartedModel from "./GetStartedModel";
import ReviewModel from "../../components/ReviewModel";
import activities from "../../data/activities";
import DocsTitle from "../../components/DocsTitle";
import useActivities from "../../hooks/useActivities";
import SearchFilter from "../../components/SearchFilter";
import ToggleActivitySurveyBtn from "../../components/ToggleActivitySurveyBtn";
import CustomDropdown from "../../components/CustomDropdown";

export default function Activities() {
  const {
    activity,
    setActivity,
    filter,
    setFilter,
    start,
    setStart,
    handleActive,
  } = useActivities();

  return (
    <div className="page-content font-serif w-full">
      <div className=" dashboard bg-[#d9d9d9] rounded-2xl md:rounded-3xl max-h-[77.9vh] side-scroll overflow-x-hidden">
        {/* All Content */}
        <div className="All-Content overflow-y-auto">
          {/* Activity-Top */}
          <div className="Activity-Top flex flex-col lg:flex-row gap-4 lg:gap-6 items-stretch lg:items-center">
            {/* Left section */}
            <div className="flex flex-col z-2 lg:w-[50%] sm:flex-row items-start sm:items-center gap-3 md:gap-4 flex-1">
              {/* Title */}
              <DocsTitle title="Activities" />

              {/* Dropdowns */}
              {activity === "Todo" && (
                <div className="flex flex-wrap gap-2 md:gap-3  w-full lg:w-[80%]">
                  <CustomDropdown
                    label="Select Subject"
                    options={["Math", "Science"]}
                  />
                  <CustomDropdown label="Quarter" options={["Q1", "Q2"]} />
                </div>
              )}
            </div>

            {/* Right section */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full lg:w-[50%]">
              {/* Toggle Buttons */}
              <div className="flex items-center halfrem bg-white rounded-xl shadow-sm w-full lg:w-[50%]">
                <ToggleActivitySurveyBtn
                  activity={activity}
                  handleActive={handleActive}
                />
              </div>

              {/* Search */}
              <div className="flex rounded-lg bg-white items-center halfrem  w-full sm:min-w-[250px] lg:min-w-[300px]">
                <SearchFilter activity={activity} setFilter={setFilter} />
              </div>
            </div>
          </div>

          {/* Activity-Bottom */}
          <div className="Activity-bottom relative  bg-white rounded-lg md:rounded-xl overflow-hidden shadow-sm">
            {activities.map((item, idx) => (
              <Quiz
                key={idx}
                qs={item.question}
                num={item.id}
                order={`${
                  activity === "Todo" ? item.buttonText : "Show Results"
                }`}
                rate={item.stars}
                setStart={setStart}
                start={start}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Filter Module */}
      <Filter filter={filter} setFilter={setFilter} />

      {/* GetStartedModel Module */}
      <GetStartedModel start={start} setStart={setStart} />

      <ReviewModel
        img={"/image/img-13.png"}
        title={"Review in Progress"}
        descrip={
          "Great job on completing your activity! Our team is reviewing your submission. Once approved, you'll see your earned stars in your account. Keep up the great work and try another activity while you wait!"
        }
        btnText={"Pending Review"}
        star={true}
        bgcolor={"#fff"}
      />
    </div>
  );
}
