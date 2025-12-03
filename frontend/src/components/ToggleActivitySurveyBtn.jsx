import React from "react";

export default function ToggleActivitySurveyBtn({ activity, handleActive, setStudent }) {
  return (
    <>
      {" "}
      <button
        onClick={() => {handleActive("Todo"); console.log("activity =",activity)}}
        className={`${
          activity === "Todo"
            ? "bg-slate-900 text-white"
            : "text-gray-600 bg-white"
        } flex-1 w-auto halfrem  rounded-xl cursor-pointer text-xs  font-medium transition-all`}
      >
        To-Do
      </button>
      <button
        onClick={() => {
          handleActive("Completed");
          setStudent?.(false);
          console.log("activity =",activity);
        }}
        className={`${
          activity === "Completed"
            ? "bg-slate-900 text-white"
            : "text-gray-600 bg-white"
        } flex-1 sm:w-auto halfrem rounded-xl text-xs md:text-sm cursor-pointer font-medium transition-all`}
      >
        Completed
      </button>
    </>
  );
}
