import React, { useState } from "react";
import { Link } from "react-router-dom";

import custom from "/src/Images/Services/Custom.png";
import enterprise from "/src/Images/Services/Enterprise.png";
import intelligent from "/src/Images/Services/Intelligent.png";
import lightning from "/src/Images/Services/Lightning.png";
import realtime from "/src/Images/Services/Realtime.png";
import seamless from "/src/Images/Services/Seamless.png";
import multiagentAI from "/src/Images/Services/agent.png";
import aivideo from "/src/Images/Services/multiagentai.mp4";
import plus from "/src/Images/plus.png";
import minus from "/src/Images/minus.png";
import defaultImg from "/src/Images/Services/default.png";
import architectire from "/src/Images/Services/architectire.JPG";
import infraImg from "/src/Images/Services/pexels.jpg";
import enterpriseImg from "/src/Images/Services/pexels.jpg";
import governmentImg from "/src/Images/Services/pexels.jpg";
import cyberImg from "/src/Images/Services/pexels.jpg";
import customerImg from "/src/Images/Services/pexels.jpg";
import Contact from "./Contact";

const Multiagent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  const useCases = [
    {
      title: "Infrastructure Intelligence",
      desc: "Powering project orchestration and predictive control across solar, smart city, and utility sectors.",
      image: infraImg,
    },
    {
      title: "Enterprise Operations",
      desc: "Automating workflows, optimizing performance, and driving AI-based decision support for large enterprises.",
      image: enterpriseImg,
    },
    {
      title: "Government Transformation",
      desc: "Enabling data-driven governance, citizen engagement, and public service optimization using secure AI frameworks.",
      image: governmentImg,
    },
    {
      title: "Cyber Resilience",
      desc: "AI-powered threat detection, compliance automation, and risk mitigation for hybrid and cloud infrastructures.",
      image: cyberImg,
    },
    {
      title: "Customer Intelligence",
      desc: "Delivering personalized experiences through real-time data analytics, sentiment tracking, and predictive behavior modeling.",
      image: customerImg,
    },
  ];

  const features = [
    {
      icon: intelligent,
      title: "Unified Data Foundation",
      desc: "Break data silos with seamless ingestion, processing, and federation across enterprise systems. Enables real-time intelligence with AI-ready data lakes and secure cloud fabrics.",
    },
    {
      icon: lightning,
      title: "Multi-Agent Intelligence Layer",
      desc: "Deploy specialized AI agents that collaborate across domains — planning, communication, risk, compliance, and customer operations.",
    },
    {
      icon: enterprise,
      title: "Knowledge Copilots",
      desc: "Leverage LLM-powered copilots to democratize organizational knowledge and support domain-specific decision-making.",
    },
    {
      icon: seamless,
      title: "Predictive & Prescriptive Intelligence",
      desc: "Use ML models to forecast demand, identify risks, and recommend optimal actions across industries.",
    },
    {
      icon: custom,
      title: "Workflow & Process Automation",
      desc: "Combine RPA and cognitive AI to automate operations while providing human-in-the-loop oversight.",
    },
    {
      icon: realtime,
      title: "Secure & Compliant by Design",
      desc: "The platform embeds global security and governance benchmarks across every layer — ensuring responsible AI operations.",
    },
  ];

  return (
    <div className="bg-white text-black  font-satoshi">
      {/* ===== HERO SECTION ===== */}
       <div className="relative w-full h-[50vh] sm:h-[100vh] md:h-[100vh] overflow-hidden">
       {/* Video */}
       <video
         className="absolute inset-0 w-full h-full object-cover"
         autoPlay
         loop
         muted
         playsInline
       >
         <source src={aivideo} type="video/mp4" />
       </video>
     
       {/* Black overlay */}
       <div className="absolute inset-0 bg-black/40"></div>
     
       {/* Text on top of video */}
       <div className="absolute inset-0 flex items-center left-48 top-40 px-4">
         <h1 className="text-2xl md:text-4xl lg:text-5xl w-[60%]  font-bold text-white">
           Bringing Intelligence, Data, and Action Together
         </h1>
       </div>
     </div>

      {/* ===== INTRO SECTION ===== */}
      <section className="flex flex-col items-center justify-center text-center pt-8 px-6 md:px-20 lg:px-32">
       
        <h2 className="text-2xl md:text-3xl font-semibold mb-3">
            Unified Multi-Agent AI Platform
          </h2>
       
      </section>

      {/* ===== PLATFORM SECTION ===== */}
      <section className=" px-6 md:px-16 lg:px-24 flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Text Content */}
        <div className="md:w-2/3">
        
            <p className="text-base md:text-lg pt-5 max-w-5xl leading-relaxed ">
          In today’s complex enterprise and infrastructure ecosystems, data is
          abundant but fragmented. ParadigmIT’s Multi-Agent AI Platform delivers
          an integrated layer of intelligence that connects data, systems, and
          people through a secure, AI-native foundation — transforming
          disconnected workflows into connected intelligence.
        </p>
          <p className="text-base md:text-lg mt-4 leading-relaxed ">
            The Paradigm Multi-Agent AI Platform harmonizes data, applications,
            and AI agents into one ecosystem — infusing intelligence into every
            process, from planning to customer engagement, while maintaining
            enterprise-grade security and governance.
          </p>

          {/* Accordion Toggle */}
        
        </div>

        {/* Image */}
        <div className="md:w-1/3 flex justify-center">
          <img
            src={multiagentAI}
            alt="AI Platform"
            className={`rounded-lg shadow-lg w-64 md:w-80 object-cover transition-transform duration-700 ${
              isOpen ? "scale-110" : "scale-100"
            }`}
          />
        </div>
      </section>
      <section className=" px-6 md:px-16 lg:px-24 flex flex-col-reverse md:flex-row items-center gap-10">
        <div className="mt-8 select-none">
  <h3 className="text-lg md:text-xl font-semibold mb-4">
    At its core, the platform provides:
  </h3>

  <div className="space-y-4">

    <div className="border-l-4 border-blue-500 pl-4 text-base md:text-lg">
      Cloud-native, modular architecture built for scalability and seamless interoperability.
    </div>

    <div className="border-l-4 border-blue-500 pl-4 text-base md:text-lg">
      Multi-agent intelligence layer that understands structured and unstructured data.
    </div>

    <div className="border-l-4 border-blue-500 pl-4 text-base md:text-lg">
      ISO-aligned governance ensuring reliability, security, and compliance.
    </div>

    <div className="border-l-4 border-blue-500 pl-4 text-base md:text-lg">
      Plug-and-play AI components enabling fast analytics, automation, and intelligence.
    </div>

  </div>
</div>

      </section>

      {/* ===== FEATURES SECTION ===== */}
      <section className="py-16  text-center px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3">
            Key Capabilities
          </h2>
          <p className="text-base md:text-lg  mb-10">
            How organizations move from disconnected workflows to connected
            intelligence.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="p-6  border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-12 h-12 mx-auto mb-4"
                />
                <h3 className="text-lg md:text-xl font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className=" text-sm  md:text-base leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-col items-center justify-center">
          <div>
            <h1 className="text-3xl md:text-3xl font-semibold ">
              Architecture
              </h1>
          </div>
          <div>
            <img src={architectire} alt="Architectire" />
          </div>
        </div>
      </section>

      {/* ===== USE CASES SECTION ===== */}
 <section className="py-20 px-6 md:px-16 lg:px-24 bg-white">
  <div className="max-w-5xl mx-auto">

    {/* Heading */}
    <h2 className="text-3xl md:text-3xl font-semibold mb-6">
      Platform Use Cases
    </h2>

   

    {/* TIMELINE LIST */}
    <div className="space-y-10">

      {useCases.map((useCase, index) => (
        <div key={index} className="relative pl-6 border-l border-gray-300">

          {/* Title */}
          <h3 className="text-xl md:text-xl font-semibold ">
            {useCase.title}
          </h3>

          {/* Description */}
          <p className="mt-2  leading-relaxed text-base md:text-lg">
            {useCase.desc}
          </p>

          {/* Divider Dot */}
          <span className="absolute -left-[6px] top-2 w-3 h-3 bg-blue-500 rounded-full"></span>
        </div>
      ))}

    </div>
  </div>
</section>



      {/* ===== FOOTER TEXT ===== */}
      <div className="shadow-2xl   p-8 border-[2px]  border-[#2286FE] hover:shadow-xl transition px-6 md:px-20 py-10 mx-auto text-center rounded-2xl max-w-6xl mb-12">
        <p className="text-base md:text-lg leading-relaxed ">
          The{" "}
          <span className="font-semibold text-black">
            Paradigm Multi-Agent AI Platform
          </span>{" "}
          is more than technology — it’s a foundation for <span className="font-semibold text-black"> AI-native Enterprise
          Revolution.</span>
        </p>
        <p  className="text-base md:text-lg leading-relaxed "> It enables organizations to shift from reactive operations
          to proactive orchestration where data, AI, and human insight converge
          seamlessly.</p>
      </div>


      {/* ===== CONTACT SECTION ===== */}
      <section className="py-10">
        <Contact />
      </section>
    </div>
  );
};

export default Multiagent;
