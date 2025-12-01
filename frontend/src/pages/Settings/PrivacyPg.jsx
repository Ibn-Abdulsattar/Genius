import React from "react";
import DocsCard from "./DocsCard";
import {useNavigate} from "react-router-dom";

export default function AboutUsPg() {
    const navigate = useNavigate();
  
  const allProgram = [
    {
      heading: "Sharing Your InformationWe",
      descrip:
        "We do not sell, trade, or rent your personal information to third parties. However, we may share your information with trusted third parties who assist us in operating our website, conducting business, or servicing you, as long as those parties agree to keep this information confidential.",
    },
    {
      heading: "Cookies",
      descrip:
        "We use cookies to enhance your experience on our website. Cookies are small files that a site or its service provider transfers to your computer's hard drive through your web browser (if you allow) that enables the site's or service provider's systems to recognize your browser and capture and remember certain information.",
    },
    {
      heading: "Your Choices",
      descrip:
        "You can choose to opt-out of receiving promotional emails from us by following the instructions provided in each email. You may also contact us to update or delete your personal information from our records.",
    },
        {
      heading: "Changes to This Policy",
      descrip:
        "We reserve the right to modify this Privacy Policy at any time. Any changes will be effective immediately upon posting the updated policy on our website.​",
    },
  ];

  return (
    <div className="page-content font-serif w-full">
      <div className=" bg-[#d9d9d9] rounded-2xl md:rounded-3xl min-h-[78.2vh] overflow-x-hidden overflow-y-auto">
        {/* All Content */}
        <div className="All-Content about">
          {/* About-Top */}
          <div className="Earning-Top">
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
                Privacy Policy
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

                  <p className="description font-[lato] text-center sm:text-left opacity-46 tracking-wide font-normal text-base sm:text-md md:text-lg">
                        Your safety and security are important to us. We employ industry-standard security measures to protect your personal information from unauthorized access, alteration, or disclosure.
      </p>
            {/* <DocsCard
              descrip={
                "Your safety and security are important to us. We employ industry-standard security measures to protect your personal information from unauthorized access, alteration, or disclosure."
              }
            /> */}

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
