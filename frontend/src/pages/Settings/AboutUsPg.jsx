import React from "react";
import DocsCard from "./DocsCard";
import {useNavigate} from "react-router-dom";

export default function AboutUsPg() {
  const navigate = useNavigate();
  const allProgram = [
    {
      heading: "Starstruck Program",
      descrip:
        "Our Starstruck Program is designed to make learning engaging and fun. Students earn stars by completing activities in subjects like math, reading, and science, which they can then exchange for exciting prizes in our Starfall store. This program not only motivates students to excel academically but also teaches valuable life skills such as goal-setting and perseverance.",
    },
    {
      heading: "Nebula (SEL Curriculum) ",
      descrip:
        "We integrate Social Emotional Learning into our curriculum to help students develop crucial skills such as empathy, resilience, and effective communication. Our SEL lessons are crafted to build a strong emotional foundation, enabling students to thrive both inside and outside the classroom.",
    },
    {
      heading: "Parent Engagement ",
      descrip:
        "We believe that parent involvement is key to student success. Our workshops and strategy sessions equip parents with the tools and knowledge to support their children's educational journey. By fostering a collaborative environment, we help create a cohesive support system for our students.",
    },
  ];

  return (
    <div className="page-content font-serif w-full">
      <div className=" bg-[#d9d9d9] rounded-2xl md:rounded-3xl min-h-[78.2vh] overflow-x-hidden overflow-y-auto">
        {/* All Content */}
        <div className="All-Content about ">
          {/* About-Top */}
          <div className="Earning-Top  ">
            {/* Back-Button */}
            <button
              onClick={() => {
                navigate(-1);
              }}
              className="group Back-Button cursor-pointer flex items-center"
            >
              <svg
                className="w-10 h-10 text-[#012331] -ml-4 transition-all duration-300 group-hover:text-purple-300 group-hover:-translate-x-1"
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
            {/* Title */}
            <div className=" flex justify-center sm:justify-start">
              <h2 className="text-2xl Surveys-Top-title border-b-4 border-yellow-400  inline-block sm:text-3xl lg:text-4xl font-medium text-[#012331]  whitespace-nowrap">
                About Us
              </h2>
            </div>
          </div>
          {/* About-bottom */}
          <div className="Surveys-bottom last">
            <p className="about-doc font-[lato] text-center sm:text-left font-normal text-base sm:text-md md:text-lg opacity-46">
              Welcome to Genius! We are a dedicated non-profit organization
              committed to empowering elementary students and their families
              through academic support and Social Emotional Learning (SEL). Our
              mission is to inspire a love for learning and foster the growth of
              resilient, well-rounded individuals who are prepared to navigate
              life's challenges with confidence.
            </p>

            {/* Vision */}
            <DocsCard
              heading={"Our Vision"}
              descrip={
                "At Genius, we envision a world where every child has the tools, support, and environment they need to reach their fullest potential. We believe that with the right resources and encouragement, every student can achieve greatness."
              }
            />

            {/* Our-program */}
            <div className="heading font-[lato] font-medium text-lg sm:text-xl text-black">
              Our Programs
            </div>

            {/* All-Program */}
            {allProgram.map((e, idx)=>
            <DocsCard key={idx} heading={e.heading} descrip={e.descrip} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
