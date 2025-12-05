import React from "react";
import { useNavigate } from "react-router-dom";

export default function BackButton() {
  const navigate = useNavigate();
  return (
    // {/* Back-Button */}
    <button
      onClick={() => {
        navigate(-1);
      }}
      className="group Back-Button border border-gray-200 rounded-full cursor-pointer flex items-center"
    >
      <svg
        className="w-8 h-8 sm:w-10 sm:h-10 text-[#012331] -ml-4 transition-all duration-300 group-hover:text-purple-300 group-hover:-translate-x-1"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2.5}
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>
  );
}
