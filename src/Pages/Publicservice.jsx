import React, { useState } from "react";
import { Link } from "react-router-dom";

import custom from "../Images/Services/Custom.png";
import enterprise from "../Images/Services/Enterprise.png";
import intelligent from "../Images/Services/Intelligent.png";
import lightning from "../Images/Services/Lightning.png";
import realtime from "../Images/Services/Realtime.png";
import seamless from "../Images/Services/Seamless.png";
import governance from "../Images/Services/governance.png";
import defaultImg from "../Images/Services/default.png";
import infraImg from "../Images/Services/ourapporach.jpg";
import enterpriseImg from "../Images/Services/ourapporach.jpg";
import governmentImg from "../Images/Services/ourapporach.jpg";
import cyberImg from "../Images/Services/ourapporach.jpg";
import aivideo from "/src/Images/Services/publicai.mp4";
import plus from "../Images/plus.png";
import minus from "../Images/minus.png";
import Contact from "./Contact";

const Publicservice = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const useCases = [
    {
      title: "Strategize",
      desc: "Powering project orchestration and predictive control across solar, smart city, and utility sectors.",
      image: infraImg,
    },
    {
      title: "Modernize",
      desc: "Automating workflows, optimizing performance, and driving AI-based decision support for large enterprises.",
      image: enterpriseImg,
    },
    {
      title: "Operationalize",
      desc: "Enabling data-driven governance, citizen engagement, and public service optimization using secure AI frameworks.",
      image: governmentImg,
    },
    {
      title: "Govern",
      desc: "AI-powered threat detection, compliance automation, and risk mitigation for hybrid and cloud infrastructures.",
      image: cyberImg,
    },
  ];

  const features = [
    {
      icon: intelligent,
      title: "Fiscal & Administrative Intelligence",
      desc: "AI-driven systems for budget optimisation, expenditure control, and revenue forecasting — improving fiscal health and transparency.",
    },
    {
      icon: lightning,
      title: "Citizen-Centric Service Platforms",
      desc: "Unified digital touchpoints for citizens, powered by conversational AI, multilingual search, and GenAI-based summarization.",
    },
    {
      icon: enterprise,
      title: "Smart Utilities & Infrastructure Governance",
      desc: "Data-fused systems integrating IoT, GIS, and AI analytics for utilities and urban infrastructure — enabling predictive governance.",
    },
    {
      icon: seamless,
      title: "AI-Powered Public Safety & Law Enforcement",
      desc: "AI analytics and decision frameworks empowering police and emergency services with situational intelligence.",
    },
    {
      icon: custom,
      title: "Data Modernization & Inter-Departmental Integration",
      desc: "Seamless API gateways and orchestration pipelines breaking departmental silos — ensuring a unified data source.",
    },
    {
      icon: realtime,
      title: "Responsible AI & Digital Trust Frameworks",
      desc: "Governance aligned with global AI responsibility and security standards — ensuring transparency and compliance.",
    },
  ];

  return (
    <div className=" text-black font-satoshi">
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
                  Reimagining Governance Through AI, Data, and Insights
               </h1>
             </div>
           </div>

      {/* ===== INTRO SECTION ===== */}
      <section className="flex flex-col items-center justify-center text-center pt-8 px-6 md:px-20 lg:px-32">
       
        <h2 className="text-2xl md:text-3xl font-semibold ">
            Digital Public Services 
          </h2>
       
      </section>

      {/* ===== INFO SECTION ===== */}
      <section className=" px-6 md:px-16 lg:px-24 flex flex-col-reverse md:flex-row items-center gap-5">
        
           <div className="md:w-2/3">
        
            <p className="text-base md:text-lg pt-5 max-w-5xl leading-relaxed ">
          Governments today stand at the threshold of a new era — one where data,
          AI, and citizen experience define the effectiveness of public service
          delivery. ParadigmIT helps governments build AI-enabled governance
          ecosystems that are predictive, transparent, and citizen-centric.
        </p>
          <p className="text-base md:text-lg mt-4 leading-relaxed ">
           ParadigmIT partners with governments to implement digital public
            service systems powered by AI, data orchestration, and cloud-native
            architectures. Our mission is to enable intelligent governance through
            platforms that sense, analyse, and act in real time.
          </p>

          {/* Accordion Toggle */}
        
        </div>
       

        <div className="md:w-1/3 flex justify-center">
          <img
            src={governance}
            alt="Governance"
            className="w-64 md:w-80 object-contain rounded-lg"
          />
        </div>
      </section>

      {/* ===== FEATURES SECTION ===== */}
      <section className="py-16 px-6 md:px-16 lg:px-28 text-center bg-white">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Key Pillars of Digital Public Services
        </h2>
        <p className="text-base md:text-lg mb-10 ">
          Moving from disconnected workflows to connected intelligence.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white p-6 md:p-8 border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-12 h-12 mx-auto mb-4"
              />
              <h3 className="text-lg md:text-xl font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-sm md:text-base  leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== APPROACH SECTION ===== */}
           <section className="py-20 px-6 md:px-16 lg:px-28 bg-white">
  <div className="max-w-5xl mx-auto">

    {/* Heading */}
    <h2 className="text-3xl md:text-3xl font-semibold mb-6">
     Our Approach
    </h2>

   

    {/* TIMELINE LIST */}
    <div className="space-y-10 pb-10">

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

      {/* ===== FOOTER STATEMENT ===== */}
      <div className="shadow-2xl   p-8 border-[2px]  border-[#2286FE] hover:shadow-xl transition px-6 md:px-20 py-10 mx-auto text-center rounded-2xl max-w-6xl mb-12">
        <p className="text-base md:text-lg leading-relaxed ">
          <span className="font-semibold text-black text-lg">
            ParadigmIT
          </span>{" "}
          envisions a world where governments operate with <span className="font-semibold text-black"> Enterprise Precision
          and Citizen-first Empathy </span> — uniting AI, data, and governance to build
          intelligent systems.
        </p>
      </div>

      {/* ===== CONTACT SECTION ===== */}
      <section className="py-10">
        <Contact />
      </section>
    </div>
  );
};

export default Publicservice;
