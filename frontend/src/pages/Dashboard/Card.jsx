// import React from "react";

// export default function Card({ title, num }) {
//   return (
//     <div
//       className="stats-card font-sans bg-[#012331E6]
//  text-white rounded-lg flex justify-between items-center"
//     >
//       <p className="text-xl font-normal tracking-wide whitespace-pre-line text-gray-300">
//         {title}
//       </p>
//       <h2 className="text-4xl font-bold text-right">{num}</h2>
//     </div>
//   );
// }


import React from "react";

export default function Card({ title, num }) {
  return (
    <div
      className="stats-card font-sans bg-[#012331E6] text-white rounded-lg 
        flex flex-row justify-between items-start sm:items-center 
        p-4 sm:p-6 gap-3 sm:gap-4 w-full"
    >
      <p className="text-base sm:text-lg md:text-xl font-normal tracking-wide 
        whitespace-pre-line text-gray-300 flex-1">
        {title}
      </p>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-right 
        self-end sm:self-auto">
        {num}
      </h2>
    </div>
  );
}