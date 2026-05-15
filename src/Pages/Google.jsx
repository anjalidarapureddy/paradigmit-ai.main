import React, { useState } from "react"; // ✅ useState imported here
import plus from "/src/Images/plus.png";
import minus from "/src/Images/minus.png";
import Contact from "./Contact";
import google from "/src/Images/Partners/google.svg";
import googleLogo from "/src/Images/Partners/google-logo.png";

const Google = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    {
      title: "Proven Cloud & AI Expertise:",
      content:
        "Deep experience in designing and deploying enterprise-grade AI solutions on Google Cloud.",
    },
    {
      title: "Public Sector Alignment:",
      content:
        "Experience building citizen-focused, secure, and scalable digital platforms.",
    },
    {
      title: "Comprehensive Capabilities:",
      content:
        "Strategy, architecture, implementation, and continuous optimization under one roof.",
    },
    {
      title: "Accelerated Time-to-Value:",
      content:
        "Proprietary frameworks and accelerators that streamline modernization.",
    },
    {
      title: "Responsible AI & Security:",
      content:
        "Governance-first approach to ensure ethics, privacy, and transparency in every solution.",
    },
  ];

  return (
    <div className=" min-h-screen py-10 sm:py-16 md:py-20">
      {/* Hero Section */}
      <div className="relative w-full">
        <img
          src={google}
          alt="Google"
          className="w-full h-40 sm:h-56 md:h-60 object-cover rounded-lg"
        />

        {/* Text overlay */}
        <div className="absolute top-1/2 left-4 sm:left-10 px-4 sm:px-10 transform -translate-y-1/2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-satoshi text-black">
            Google
          </h1>
          <p className="pt-3 sm:pt-5 font-satoshi text-base sm:text-lg md:text-xl max-w-xl">
            Unlock the power of Google Cloud with expert solutions from
            ParadigmIT.
          </p>
        </div>
      </div>

      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 sm:px-10 md:px-20 pt-16 md:pt-10">
        <div className="flex justify-center w-full md:w-1/2">
          <img
            src={googleLogo}
            alt="Google Logo"
            className="w-[250px] sm:w-[500px] md:w-[900px] lg:w-[400px] object-contain"
          />
        </div>
        <div className="w-full  text-center md:text-left">
          <p className=" font-satoshi text-base sm:text-lg leading-relaxed">
            Powering Intelligent Transformation with ParadigmIT and Google
            Cloud — Accelerate Innovation. Simplify Modernisation. Unlock
            Growth. At ParadigmIT, we partner with Google Cloud to help
            organisations—across private and public sectors—redefine what’s
            possible in the digital age. Together, we combine the strengths of
            cloud, AI, data, and automation to deliver secure, scalable, and
            sustainable transformation. Our partnership is built on one goal: to
            turn digital ambition into measurable outcomes through intelligent,
            responsible innovation.
          </p>
        </div>
      </div>

      {/* Focus Areas Section */}
      <div className="mt-16 sm:mt-20 px-6 sm:px-10 md:px-20">
        <h1 className="text-2xl sm:text-3xl font-satoshi font-semibold text-center mb-10 sm:mb-16">
          Our Core Focus Areas
        </h1>

        <div className="max-w-6xl mx-auto relative">
          {/* --- First Row --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <div className="bg-white p-5 sm:p-6 rounded-lg shadow-sm border-l-4 border-blue-600">
              <h2 className="text-lg sm:text-xl font-satoshi font-semibold  mb-3">
                Intelligent Cloud Modernization
              </h2>
              <p className="font-satoshi text-sm sm:text-base leading-relaxed">
                We help enterprises and public institutions move to the cloud
                with purpose. From application migration to hybrid cloud
                integration, our experts design scalable architectures that
                enhance agility, reduce costs, and improve performance —
                powered by Google Cloud's advanced infrastructure and management
                tools.
              </p>
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-lg shadow-sm border-l-4 border-blue-600">
              <h2 className="text-lg sm:text-xl font-semibold  mb-3">
                Data & AI for Smarter Decisions
              </h2>
              <p className="font-satoshi text-sm sm:text-base leading-relaxed">
                We turn information into insight. By leveraging Google Cloud's
                Vertex AI, BigQuery, and AgentSpace, ParadigmIT helps
                organizations build data ecosystems that think, learn, and act.
              </p>
            </div>
          </div>

          {/* --- Second Row --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <div className="bg-white p-5 sm:p-6 rounded-lg shadow-sm border-l-4 border-blue-600">
              <h2 className="text-lg sm:text-xl font-semibold  mb-3">
                AI-Enhanced Experiences with Google AgentSpace
              </h2>
              <p className="font-satoshi text-sm sm:text-base leading-relaxed">
                Using Google AgentSpace, we enable enterprises and government
                entities to deploy AI-driven conversational and agentic systems
                that deliver real-time assistance and improve engagement.
              </p>
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-lg shadow-sm border-l-4 border-blue-600">
              <h2 className="text-lg sm:text-xl font-semibold  mb-3">
                Industry-Focused Innovation
              </h2>
              <p className="font-satoshi text-sm sm:text-base leading-relaxed">
                Every solution we deliver combines industry insight, data
                intelligence, and cloud innovation to create measurable impact.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Accordion Section - Why Partner */}

 <section className="py-16 px-6 sm:px-10 md:px-16 lg:px-24">
  <h1 className="text-2xl sm:text-3xl font-semibold text-center mb-12">
    Why Partner with ParadigmIT
  </h1>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 max-w-6xl mx-auto">
    {items.map((item, index) => (
      <div
        key={index}
        className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
      >
        <div className="border-l-4 border-[#2286FE] pl-4">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
            {item.title}
          </h2>
          <p className="mt-2  text-sm sm:text-base leading-relaxed">
            {item.content}
          </p>
        </div>
      </div>
    ))}
  </div>
</section>

      {/* CTA Section */}
      <div className="text-center py-14 md:py-20 px-6 sm:px-10 md:px-20 bg-blue-50">
        <h1 className="text-2xl sm:text-3xl font-semibold font-satoshi">
          Transforming the Future — Together 
        </h1>
        <p className="font-satoshi text-sm sm:text-base md:text-lg mb-8 pt-3 sm:pt-5 max-w-4xl mx-auto leading-relaxed">
          From digital enterprises to data-driven governments, the future belongs to those who innovate responsibly and intelligently.
          With ParadigmIT and Google Cloud, you gain a trusted partner dedicated to helping you build intelligent, inclusive, and future-ready ecosystems. 
        </p>
         <div className="shadow-2xl   p-4 border-[2px]  border-[#2286FE] hover:shadow-xl transition px-6 md:px-6 py-6 mx-auto text-center rounded-2xl max-w-6xl mb-12">
        <p className="text-base md:text-lg  leading-relaxed ">
            Let’s create the next paradigm of digital transformation — together.
        </p>
      </div>
      
      </div>

      {/* Contact Section */}
      <div className="mt-10 sm:mt-16">
        <Contact />
      </div>
    </div>
  );
};

export default Google;
