import React, { useState } from "react";

export default function CustomDropdown({label, options}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(label);

  return (
    <div className="relative z-10 w-[45%] lg:w-[47.9%]">
      {/* Dropdown button */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white border border-gray-300 rounded-md halfrem flex justify-between items-center cursor-pointer text-gray-700  transition"
      >
        <span className="text-sm md:text-base">{selected}</span>
        <svg
          className={`w-4 h-4 ml-2 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      {/* Dropdown list */}
      {isOpen && (
        <ul className="absolute left-0 w-full bg-white border border-gray-200 rounded-md shadow-lg z-10">
          {options.map((option) => (
            <li
              key={option}
              onClick={() => {
                setSelected(option);
                setIsOpen(false);
              }}
              className={`halfrem text-sm md:text-base cursor-pointer hover:bg-gray-100 ${
                selected === option ? "bg-gray-50 font-medium" : ""
              }`}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
