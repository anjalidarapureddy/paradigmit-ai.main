import React from "react";
import { Brain, Rocket, Building2, Wrench } from "lucide-react";

import Mission from "/src/Images/About/mission.png";
import Core from "/src/Images/About/core-values.png";
import Vision from "/src/Images/About/vision.png";
import aiLogo from "/src/Images/ParadigmaiLogo.svg";
import globe from "/src/Images/About/globe.svg";
import gear from "/src/Images/About/gear.svg";
import lock from "/src/Images/About/lock.svg";
import robot from "/src/Images/About/robot.svg";
import aivideo from "/src/Images/About/aboutai.mp4";
import Contact from "./Contact";

const Company = () => {
  const coreValues = [
    {
      title: "Innovation That Drives Us",
      description:
        "Innovation is at the heart of everything we do. We harness the power of AI, Machine Learning, and Cloud Engineering to design intelligent, adaptive, and future-ready solutions.",
    },
    {
      title: "Trust as Our Foundation",
      description:
        "Trust is the cornerstone of every relationship we build. We operate with honesty, transparency, and fairness, ensuring that every partnership is rooted in reliability and respect.",
    },
    {
      title: "Excellence in Every Endeavor",
      description:
        "We pursue excellence in everything we do — from design to delivery. Our culture of continuous learning ensures that each solution meets the highest standards of performance.",
    },
    {
      title: "Customer Success First",
      description:
        "Your success defines ours. We align our strategies with your goals to deliver sustainable growth and long-term impact, not just short-term results.",
    },
    {
      title: "Accountability in Action",
      description:
        "We take full ownership of our outcomes and commitments, ensuring transparency, consistency, and excellence across every engagement.",
    },
    {
      title: "Empowerment & Collaboration That Inspires Growth",
      description:
        "We believe in innovation through collaboration. By working closely with our clients and partners, we co-create scalable, secure solutions that transform challenges into opportunities.",
    },
  ];

  const growth = [
    {
      icon: globe,
      title: "Global Reach",
      text: "Serving clients across India, the U.S., Europe, and the Middle East.",
    },
    {
      icon: gear,
      title: "20+ Years of Delivery",
      text: "Excellence in IT solutions across public and private sectors.",
    },
    {
      icon: lock,
      title: "Proven Reliability",
      text: "Globally recognized for compliance, security, and innovation.",
    },
    {
      icon: robot,
      title: "AI-Driven Future",
      text: "Evolving from IT services to intelligent, data-powered platforms.",
    },
  ];

  return (
    <div className="bg-white text-black">
      {/* ======= Hero Video Section ======= */}
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
    <h1 className="text-2xl md:text-4xl lg:text-5xl w-[70%]  font-bold text-white">
      Powering the Transition to Intelligent Enterprises
    </h1>
  </div>
</div>


      {/* ======= Intro Section ======= */}
      <section className="px-6 md:px-16 lg:px-24 py-12 md:py-20">
       

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          <img
            src={aiLogo}
            alt="AI Business"
            className="w-full lg:w-1/2 rounded-xl object-contain"
          />
          <div className="text-center text-base md:text-lg pt-5   font-satoshi lg:text-left space-y-4">
            <p>
              At{" "}
              <span className="font-semibold font-satoshi  text-[#2286FE]">ParadigmIT</span>, we
              don’t just adapt to the future — we engineer it.
            </p>
            <p>
              For over two decades, ParadigmIT has been driving digital
              transformation across continents — evolving from a trusted IT
              partner into an AI-first enterprise group reshaping how
              infrastructure, governments, and businesses operate. Experience.
              Scale. Intelligence. That’s the foundation on which we build the
              future.
            </p>
          </div>
        </div>
      </section>

      {/* ======= Who We Are ======= */}
      <section className="px-6 md:px-16 lg:px-28 py-12 text-center">
        <h1 className="text-2xl md:text-3xl font-bold">Who We Are</h1>
        
        <p className="pt-6 max-w-4xl md:text-lg mx-auto leading-relaxed">
          <span className="font-semibold  text-[#2286FE]">ParadigmIT</span>{" "}
          Technology Services is a global technology and AI innovation company
          with over 20 years of experience delivering mission-critical solutions
          for governments, infrastructure leaders, and enterprises. Headquartered
          in Hyderabad, India, ParadigmIT operates across North America, Europe,
          the Middle East, and Asia, helping clients modernize operations,
          secure data ecosystems, and adopt AI responsibly at scale.
        </p>
      </section>
<div className="flex justify-center mt-4">
          <div className="w-24 h-[3px] bg-[#2286FE]"></div>
        </div>
      {/* ======= Growth Journey ======= */}
      <section className="px-6 md:px-16 lg:px-28 py-16 text-center">
        <h1 className="text-2xl md:text-3xl font-bold">Our Growth Journey</h1>
        <p className="pt-4 md:text-lg max-w-3xl mx-auto">
          From a single-office beginning to a multi-continent enterprise,
          ParadigmIT’s journey has been defined by transformation, trust, and
          technical depth.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {growth.map((item, index) => (
            <div
              key={index}
              className="relative bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="absolute left-0 top-0 h-full w-[4px] bg-[#2286FE] rounded-l-2xl"></div>
              <img
                src={item.icon}
                alt={item.title}
                className="w-10 h-10 mb-3 object-contain"
              />
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm  md:text-lg">{item.text}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 max-w-3xl md:text-lg mx-auto ">
          Our strength lies in a culture of speed, clarity, and innovation —
          translating deep domain expertise into tangible, measurable results.
        </p>
      </section>
<div className="flex justify-center mt-4">
          <div className="w-24 h-[3px] bg-[#2286FE]"></div>
        </div>
      {/* ======= AI & Digital Capabilities ======= */}
      <section className="px-6 md:px-16 lg:px-28 py-16 text-center">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">
          AI & Digital Capabilities
        </h1>
        <p className="max-w-3xl mx-auto font-satoshi md:text-lg">
          <span className="font-semibold md:text-lg font-sa text-[#2286FE]">ParadigmIT</span> drives
          enterprise modernization by embedding intelligence across operations.
          We help organizations harness applied AI through:
        </p>

        <div className="flex flex-col items-start  sm:items-center text-left sm:text-center  gap-4 mt-6">
          {[
            {
              icon: <Brain className="text-[#2286FE]  w-6 h-6" />,
              text: (
                <p className="md:text-lg">
                  <span className="font-semibold ">
                    AI Centers of Excellence
                  </span>{" "}
                  – Accelerating enterprise AI adoption at scale.
                </p>
              ),
            },
            {
              icon: <Rocket className="text-[#2286FE] w-6 h-6" />,
              text: (
                <p className="md:text-lg">
                  <span className="font-semibold">
                    Agentic Platforms & Copilots
                  </span>{" "}
                  – Streamlining orchestration, compliance, and collaboration.
                </p>
              ),
            },
            {
              icon: <Building2 className="text-[#2286FE] w-6 h-6" />,
              text: (
                <p className="md:text-lg">
                  <span className="font-semibold">Public Sector AI Systems</span>{" "}
                  – Enhancing fiscal, civic, and risk intelligence for
                  governments.
                </p>
              ),
            },
            {
              icon: <Wrench className="text-[#2286FE] w-6 h-6" />,
              text: (
                <p className="md:text-lg">
                  <span className="font-semibold">
                    Infrastructure Intelligence
                  </span>{" "}
                  – Driving predictive efficiency in utilities and construction.
                </p>
              ),
            },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 max-w-3xl mx-auto">
              {item.icon}
              <p>{item.text}</p>
            </div>
          ))}
        </div>

        <p className="pt-6 md:text-lg max-w-3xl mx-auto">
          Every initiative is built on secure, resilient, and responsible AI —
          aligned with global data and quality standards.
        </p>
      </section>

      {/* ======= Mission & Vision ======= */}
      <section className="px-6 md:px-16 lg:px-24 py-16 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Mission */}
          <div className="flex flex-col space-y-4 bg-white shadow-md border border-gray-100 p-8 rounded-3xl hover:border-[#2286FE] hover:shadow-xl transition">
            <div className="flex items-center gap-3">
              <img src={Mission} alt="Mission" className="w-8 h-8" />
              <h3 className="text-2xl font-bold">Mission</h3>
            </div>
            <p className="md:text-lg ">
              Our mission is to deliver exceptional IT solutions by cultivating
              talent, embracing innovation, and fostering strong partnerships —
              ensuring our clients thrive in an ever-evolving digital landscape.
            </p>
          </div>

          {/* Vision */}
          <div className="flex flex-col space-y-4 bg-white shadow-md border border-gray-100 p-8 rounded-3xl hover:border-[#2286FE] hover:shadow-xl transition">
            <div className="flex items-center gap-3">
              <img src={Vision} alt="Vision" className="w-8 h-8" />
              <h3 className="text-2xl font-bold">Vision</h3>
            </div>
            <p className="md:text-lg ">
              Our vision is to pioneer innovative IT strategies, enabling
              businesses to thrive in the digital age with bespoke solutions and
              unmatched support — driving success through technology.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-20 text-center">
          <div className="flex justify-center items-center gap-3 mb-6">
            <img src={Core} alt="Core Values" className="w-10 h-10" />
            <h2 className="text-3xl font-bold">Core Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="border-l-4 border-[#2286FE] pl-5 hover:bg-white rounded-lg shadow-sm transition-all"
              >
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======= Contact ======= */}
      <section className="py-16">
        <Contact />
      </section>
    </div>
  );
};

export default Company;
