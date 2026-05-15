import React, { useState } from "react";
import { Link } from "react-router-dom";

import aivideo from "/src/Images/Services/enterpriseai.mp4";
import custom from "/src/Images/Services/Custom.png";
import enterpriseIcon from "/src/Images/Services/Enterprise.png";
import intelligent from "/src/Images/Services/Intelligent.png";
import lightning from "/src/Images/Services/Lightning.png";
import realtime from "/src/Images/Services/Realtime.png";
import seamless from "/src/Images/Services/Seamless.png";
import remaning from "/src/Images/Services/remaning.jpg";
import architectire from "/src/Images/Services/enterprise-architectire.png";
import tech from "/src/Images/Services/tech.png";
import accessbility from "/src/Images/Services/accessbility.png";
import design from "/src/Images/Services/design-system.png";
import defaultImg from "/src/Images/Services/default.png";
import infraImg from "/src/Images/Services/ourapporach.jpg";
import enterpriseImg from "/src/Images/Services/ourapporach.jpg";
import governmentImg from "/src/Images/Services/ourapporach.jpg";
import cyberImg from "/src/Images/Services/ourapporach.jpg";
import plus from "/src/Images/plus.png";
import minus from "/src/Images/minus.png";
import Contact from "./Contact";

const Enterprise = () => {
  const [openIndex, setOpenIndex] = useState(null);

  // Use Cases (Accordion)
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

  // Features Section
  const features = [
    {
      icon: intelligent,
      title: "Sovereign Private AI Cloud",
      desc: "A fully self-contained AI cloud inside the appliance, delivering IaaS, PaaS, Kubernetes, MLOps, vector databases, and complete AI orchestration — keeping all data and models fully sovereign.",
    },
    {
      icon: lightning,
      title: "AI-Optimized Hardware for the Edge",
      desc: "Rugged, high-performance compute with CPUs, GPUs/accelerators, NVMe storage, and adaptive cooling, purpose-built for tactical deployments, remote operations, and low-connectivity environments.",
    },
    {
      icon: enterpriseIcon,
      title: "Multi-Layer AI Stack",
      desc: "A comprehensive AI stack with sovereign LLMs/SLMs, multimodal vision models, domain agents, local fine-tuning, RAG/VLM pipelines, multi-agent automation, and APIs for rapid application development.",
    },
    {
      icon: seamless,
      title: "Mission-Grade Air-Gapped Security",
      desc: "Fully offline operation with no cloud exposure, zero data-exfiltration pathways, and complete physical isolation — ensuring uncompromised security and sovereign control.",
    },
    {
      icon: custom,
      title: "Rapid Deployment & Modular Scalability",
      desc: "A plug-and-play appliance that can be deployed rapidly and scaled horizontally across sites, data centers, or field locations — enabling seamless expansion from a single unit to a distributed sovereign AI network.",
    },
    {
      icon: realtime,
      title: "AI Box -As-a-Service",
      desc: "A modern consumption-based model with a fully managed lifecycle and optional open-source components, significantly reducing cost and complexity compared to hyperscaler-dependent solutions.",
    },
    
  ];

  return (
    <div className="bg-white text-black font-satoshi">
      {/* HERO SECTION */}
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
            India’s First Self-Contained AI Infrastructure for Secure, Offline,
            and Edge Intelligence
          </h1>
        </div>
      </div>

      {/* INTRO SECTION */}
      <section className="flex flex-col items-center justify-center text-center pt-8 px-6 md:px-20 lg:px-32">
        <h2 className="text-2xl md:text-3xl font-semibold">Sovereign AI Box</h2>
      </section>

      {/* INFO SECTION */}
      <section className=" px-6 md:px-16 lg:px-24 pt-5 flex flex-col-reverse md:flex-row items-center gap-10">
        <div className="md:w-2/3">
          <p className="text-base md:text-lg  max-w-5xl leading-relaxed ">
            As nations accelerate toward digital self-reliance, the need for
            sovereign, secure, and portable AI infrastructure has never been
            greater.
          </p>

          <p className="text-base md:text-lg mt-4 leading-relaxed ">
            Sovereign AI Box delivers exactly that — a rugged, air-gapped, fully
            integrated AI data center in a box that brings intelligence,
            autonomy, and real-time decision-making directly to the edge.
          </p>

          <p className="text-base md:text-lg mt-4 leading-relaxed ">
            The Sovereign AI Box is India’s first plug-and-play private AI cloud
            appliance, engineered as a unified hardware + software + services
            platform. It packages everything required to run mission-critical AI
            — LLMs, vision models, multi-agent systems, MLOps, orchestration,
            and high-performance compute — inside a secure, portable server
            chassis.
          </p>
          <p className="text-base md:text-lg mt-4 leading-relaxed ">
            It operates completely offline, supports deployment in harsh or
            remote environments, and provides enterprise-grade AI capability
            without relying on hyperscalers.
          </p>
          <p className="text-base md:text-lg mt-4 leading-relaxed ">
            Designed for government, defense, regulated enterprises,the
            Sovereign AI Box ensures that your data, your models, and your
            intelligence stay sovereign — always.
          </p>
        </div>

        <div className="md:w-1/3 flex justify-center">
          <img
            src={remaning}
            alt="Reimagine Enterprise"
            className="max-w-full h-auto object-contain rounded-lg"
          />
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-16 text-center px-6 md:px-10">
        {" "}
        <div className="max-w-6xl mx-auto">
          {" "}
          <h2 className="text-2xl md:text-3xl font-semibold mb-3">
            {" "}
            Core Capabilities{" "}
          </h2>{" "}
          {/* <p className="text-base md:text-lg mb-10"> It’s how organizations move from disconnected workflows to connected intelligence. </p> */}{" "}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {" "}
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="p-6 border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300"
              >
                {" "}
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-12 h-12 mx-auto mb-4"
                />{" "}
                <h3 className="text-lg md:text-xl font-semibold mb-2">
                  {" "}
                  {feature.title}{" "}
                </h3>{" "}
                <p className=" text-sm md:text-base leading-relaxed">
                  {" "}
                  {feature.desc}{" "}
                </p>{" "}
              </div>
            ))}{" "}
          </div>{" "}
        </div>{" "}
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

      {/* ACCORDION SECTION */}

      {/* FOOTER TEXT */}
      <div className="shadow-2xl  mt-10 md:mt-10 lg:mt-10 p-8 border-[2px]  border-[#2286FE] hover:shadow-xl transition px-6 md:px-20 py-10 mx-auto text-center rounded-2xl max-w-6xl mb-12">
        <p className="text-base md:text-lg leading-relaxed ">
          <span className="font-semibold text-black">
            AI that is self-contained. AI that is resilient. AI that works
            anywhere — even when everything else is offline.
          </span>{" "}
         
        </p>
        <p className="text-base md:text-lg leading-relaxed "> At ParadigmIT, we empower organizations to own their intelligence —
          without compromise.</p>
      </div>

      {/* CONTACT SECTION */}
      <section className="py-10">
        <Contact />
      </section>
    </div>
  );
};

export default Enterprise;
