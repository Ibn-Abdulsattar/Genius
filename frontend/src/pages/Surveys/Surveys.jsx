import React from "react";
import { useState } from "react";
import Quiz from "./Quiz";
import surveys from "../../data/surveys";
import DocsTitle from "../../components/DocsTitle";
import useSurvey from "../../hooks/useSurvey";
import SearchFilter from "../../components/SearchFilter";
import ToggleActivitySurveyBtn from "../../components/ToggleActivitySurveyBtn";

export default function Surveys() {
  const { survey, setSurvey, student, setStudent, handleActive } = useSurvey();

  return (
    <div className="page-content font-serif w-full">
      <div className=" bg-[#d9d9d9] rounded-2xl md:rounded-3xl min-h-[78.2vh] overflow-x-hidden overflow-y-auto p-3 sm:p-4 md:p-6 lg:p-8">
        {/* All Content */}
        <div className="All-Content ">
          {/* Survey-Top */}
          <div className="Activity-Top flex flex-col lg:flex-row gap-4 lg:gap-6 items-stretch lg:items-center">
            {/* Left section */}
            <div className="flex flex-col z-2 lg:w-[50%] sm:flex-row items-start sm:items-center gap-3 md:gap-4 flex-1">
              {/* Title */}
              <DocsTitle title="Surveys" />

              {/* Dropdowns */}
              {survey === "Todo" && (
                <div className="flex items-center font-[lato] z-1  halfrem bg-white rounded-xl shadow-sm w-full lg:w-[70%] xl:w-[50%]">
                  <button
                    onClick={() => {
                      setStudent(false);
                    }}
                    className={`${
                      !student
                        ? "bg-[#007D69] text-white"
                        : "text-gray-600 bg-white"
                    } flex-1 w-auto halfrem  rounded-2xl cursor-pointer text-sm md:text-md  font-medium transition-all`}
                  >
                    Family surveys
                  </button>
                  <button
                    onClick={() => {
                      setStudent(true);
                    }}
                    className={`${
                      student
                        ? "bg-[#007D69] text-white"
                        : "text-gray-600 bg-white"
                    } flex-1 sm:w-auto halfrem rounded-2xl text-sm md:text-md cursor-pointer font-medium transition-all`}
                  >
                    Student surveys
                  </button>
                </div>
              )}
            </div>

            {/* Right section */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full lg:w-[50%]">
              {/* Toggle Buttons */}
              <div className="flex items-center z-1 halfrem bg-white rounded-xl shadow-sm w-full lg:w-[50%]">
                <ToggleActivitySurveyBtn
                  activity={survey}
                  handleActive={handleActive}
                  setStudent={setStudent}
                />
              </div>

              {/* Search */}
              <div className="flex rounded-lg bg-white items-center halfrem  w-full sm:min-w-[250px] lg:min-w-[300px]">
                <SearchFilter survey={survey} setSurvey={setSurvey} />
              </div>
            </div>
          </div>

          {/* Survey-Bottom */}
          <div className="Activity-bottom bg-white rounded-lg md:rounded-xl overflow-hidden shadow-sm">
            {surveys.map((item, idx) => (
              <Quiz
                key={idx}
                qs={item.question}
                num={item.id}
                rate={20}
                order={"Start survey"}
                student={student}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
