import React from "react";
import DocsCard from "./DocsCard";
import { useNavigate } from "react-router-dom";
import { allProgramAbout } from "../../data/common";
import MainDocs from "../../components/MainDocs";
import DocsTitle from "../../components/DocsTitle";
import BackButton from "../../components/BackButton";

export default function AboutUsPg() {
  const navigate = useNavigate();

  return (
    <div className="page-content font-serif w-full">
      <div className=" bg-[#d9d9d9] rounded-2xl md:rounded-3xl min-h-[78.2vh] overflow-x-hidden overflow-y-auto">
        {/* All Content */}
        <div className="All-Content about ">
          {/* About-Top */}
          <div className="Earning-Top  ">
            {/* Back-Button */}
            <BackButton/>
            {/* Title */}
            <div className=" flex justify-center sm:justify-start">
              <DocsTitle title="About Us" />
            </div>
          </div>
          {/* About-bottom */}
          <div className="Surveys-bottom last">
            {/* Main Docs */}
            <MainDocs
              para={
                "Welcome to Genius! We are a dedicated non-profit organization committed to empowering elementary students and their families through academic support and Social Emotional Learning (SEL). Our mission is to inspire a love for learning and foster the growth of resilient, well-rounded individuals who are prepared to navigate life's challenges with confidence."
              }
            />

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
            {allProgramAbout.map((e, idx) => (
              <DocsCard key={idx} heading={e.heading} descrip={e.descrip} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
