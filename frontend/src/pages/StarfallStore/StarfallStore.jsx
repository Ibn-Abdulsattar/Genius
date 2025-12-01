import React from "react";
import Card from "./Card";

export default function StarfallStore() {
  const starFallStore = [
    { img: "/image/img-16.png", title: "Tasty jelly rings", rate: "25" },
    { img: "/image/img-17.png", title: "Heap of bright candies", rate: "25" },
    {
      img: "/image/img-18.png",
      title: "Variety party hundreds celebration yummy",
      rate: "20",
    },
    {
      img: "/image/img-19.png",
      title: "Lollipops candies and sugar jelly multi colored Colorful sweets",
      rate: "15",
    },
    { img: "/image/img-20.png", title: "Heap of bright candies", rate: "25" },
    {
      img: "/image/img-21.png",
      title: "Variety party hundreds celebration yummy",
      rate: "20",
    },
  ];

  return (
    <div className="page-content font-serif w-full">
      <div className=" bg-[#d9d9d9] rounded-2xl md:rounded-3xl min-h-[78.2vh] overflow-x-hidden overflow-y-auto p-3 sm:p-4 md:p-6 lg:p-8">
        {/* All Content */}
        <div className="All-Content ">
          {/* Activity-Top */}
          <div className="Activity-Top flex ">
            
            {/* Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-[#012331] border-b-4 border-yellow-400 whitespace-nowrap">
              Starfall Store
            </h2>
          </div>

          {/* Activity-bottom */}
          <div className=" Activity-Top rounded-2xl  relative">
            {/* All Cards */}
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-7">
            {starFallStore.map((item, idx) => (
              <Card key={idx} img={item.img} title={item.title} rate={item.rate} />
            ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
