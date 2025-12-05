import React from "react";
import DocsCard from "./DocsCard";
import { useNavigate } from "react-router-dom";
import { allProgramPrivacy } from "../../data/common";
import MainDocs from "../../components/MainDocs";
import DocsTitle from "../../components/DocsTitle";
import BackButton from "../../components/BackButton";

export default function AboutUsPg() {
  const navigate = useNavigate();

  return (
    <div className="page-content font-serif w-full">
      <div className=" bg-[#d9d9d9] rounded-2xl md:rounded-3xl min-h-[78.2vh] overflow-x-hidden overflow-y-auto">
        {/* All Content */}
        <div className="All-Content about">
          {/* About-Top */}
          <div className="Earning-Top flex">
            {/* Back-Button */}
            <BackButton />
            {/* Title */}
            <div className=" flex justify-center sm:justify-start">
              <DocsTitle title="Privacy Policy" />
            </div>
          </div>
          {/* About-bottom */}
          <div className="Surveys-bottom last">
            {/* Main Docs */}
            <MainDocs
              para="Welcome to Genius! We are a dedicated non-profit organization
              committed to empowering elementary students and their families
              through academic support and Social Emotional Learning (SEL). Our
              mission is to inspire a love for learning and foster the growth of
              resilient, well-rounded individuals who are prepared to navigate
              life's challenges with confidence."
            />

            {/* Vision */}
            <p className="description font-[lato] text-center sm:text-left opacity-46 tracking-wide font-normal text-base sm:text-md md:text-lg">
              Your safety and security are important to us. We employ
              industry-standard security measures to protect your personal
              information from unauthorized access, alteration, or disclosure.
            </p>

            {/* All-Program */}
            {allProgramPrivacy.map((e, idx) => (
              <DocsCard key={idx} heading={e.heading} descrip={e.descrip} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
