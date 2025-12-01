import React from "react";

export default function DocsCard({ heading, descrip }) {
  return (
    <div className="docsCard font-[lato]">
      {heading && <div className="heading font-medium text-lg sm:text-xl text-black">
        {heading}
      </div>}

      <p className="description opacity-46 tracking-wide font-normal text-base sm:text-md md:text-lg">
        {descrip}
      </p>
    </div>
  );
}
