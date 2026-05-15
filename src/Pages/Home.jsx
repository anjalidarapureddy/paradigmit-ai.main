import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
import multiagent from "/src/Images/multi-agen.png";
import aiinfra from "/src/Images/Ai-infra.jfif";
import cyber from "/src/Images/Cyber.JPG";
import defence from "/src/Images/defence.jfif";
import publicservices from "/src/Images/public-services.png";
import enterprise from "/src/Images/enterprisesol.png";
import istockphoto from "/src/Images/istockphoto.png";
import aivideo from "/src/Images/HeroSectionVideo.mp4";
import cisco from "/src/Images/cisco.png";
import cloude from "/src/Images/cloude.png";
import aiHero from "/src/Images/nextgen.png";
import Contact from "./Contact";

const Home = () => {
  const navigate = useNavigate();

  const cards = [
    {
      img: multiagent,
      title: "Unified Multi-Agent AI Platform",
      sub: "Design and implementation of scalable agent frameworks.",
      link: "/services/multiagent",
    },
    {
      img: enterprise,
      title: "Sovereign AI  Box ",
      sub: "India’s First Sovereign Private AI Cloud — Delivered as a Service ",
      link: "/services/enterprise",
    },
    {
      img: publicservices,
      title: "Digital Public Services",
      sub: "(G2C) Government-to-citizen engagement through digital portals & automation.",
      link: "/services/publicservice",
    },
    {
      img: aiinfra,
      title: "AI Infrastructure Project Management",
      sub: "AI-powered transformation of infrastructure projects, from planning to delivery.",
      link: "https://pathsetter.ai/",
    },
    {
      img: cyber,
      title: "Cybersecurity AI",
      sub: "Your Zero-Trust Security Ally in the War against Cyber-Threats.",
      link: "https://paradigmitcyber.com/#",
    },
    {
      img: defence,
      title: "Defence AI",
      sub: "Cutting-edge defence tech powered by advanced cybersecurity and AI.",
      link: "https://paradome.in/",
    },
  ];

  return (
    <div className="text-white overflow-hidden">
      {/* ===== HERO SECTION ===== */}
      <section className="relative h-[85vh] md:h-[100vh] flex items-center justify-center">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={aivideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60"></div>



        <div className="relative z-10 max-w-5xl md:pt-14 md:text-left text-center px-12 md:px-12">
          <h1 className="text-4xl md:text-3xl lg:text-6xl font-bold leading-tight mb-4">
            Engineering the Future with AI
            <br />
            That Solves, Scales, and Transforms
          </h1>
          <Link
            to="/about/company"
            className="inline-flex items-center gap-2 bg-[#2286FE] text-white text-lg px-8 py-3 rounded-full hover:bg-white hover:text-black hover:border border-black transition duration-300"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section className="bg-gradient-to-r text-black py-20 lg:py-28 px-6 md:px-16">
        <div className="flex flex-col lg:flex-row items-center gap-16 max-w-6xl mx-auto">
          <motion.div
            className="lg:w-1/2 space-y-6"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg leading-relaxed ">
              <span className="font-semibold text-xl text-black">
                ParadigmIT
              </span>{" "}
              is a next-generation technology company driving the AI revolution.
              We craft intelligent systems that merge human insight with machine
              intelligence — transforming how people, data, and decisions
              connect.
            </p>
          </motion.div>

          <motion.div
            className="lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={aiHero}
              alt="AI Innovation"
              className="w-72 md:w-96 lg:w-[420px] rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        </div>
      </section>

      {/* ===== AI PLATFORMS SECTION ===== */}
      <section className="py-5 px-6 md:px-12  text-black text-center">
        <h2 className="text-4xl md:text-4xl font-bold mb-6">
          Scalable <span className="text-[#2286FE]">AI Platforms</span>
          <br />
          for Government and Enterprise
        </h2>
        <p className="max-w-3xl mx-auto  text-lg mb-12">
          Empowering organizations with secure, intelligent, and efficient AI
          ecosystems.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              onClick={() => {
                if (card.link.startsWith("http")) {
                  window.open(card.link, "_blank");
                } else {
                  navigate(card.link);
                }
              }}
              className="cursor-pointer rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-transform duration-300 hover:-translate-y-2"
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {card.title}
                </h3>
                <p className="  md:text-base">{card.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== OUTCOMES SECTION ===== */}
      <section className="py-10 px-6 md:px-16 text-black bg-white">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div className="space-y-8 text-center lg:text-left">
            <h2 className="text-4xl md:text-3xl w-full flex items-center justify-center text-center font-semibold leading-snug">
              Outcomes With <br className="hidden md:block" />
              AI-Driven Solutions
            </h2>

            {/* Stats Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border w-full max-w-lg mx-auto lg:mx-0">
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <h3 className="text-4xl font-bold text-[#2286FE]">60%</h3>
                  <p className="mt-2 text-sm md:text-base">Faster decisions</p>
                </div>
                <div>
                  <h3 className="text-4xl font-bold text-[#2286FE]">30%</h3>
                  <p className="mt-2 text-sm md:text-base">Cost efficiency</p>
                </div>
                <div>
                  <h3 className="text-4xl font-bold text-[#2286FE]">2×</h3>
                  <p className="mt-2 text-sm md:text-base">
                    Productivity gains
                  </p>
                </div>
              </div>

              <p className="text-[#2286FE] flex items-center justify-center text-center text-base md:text-lg mt-6 font-medium">
                When Intelligence becomes Collective, Performance becomes
                Exponential.
              </p>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <img
              src={istockphoto}
              alt="AI Transformation"
              className="rounded-2xl pt-20 w-full max-w-md mx-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* ===== PARTNERSHIPS SECTION ===== */}
      <section className="bg-white  px-6 md:px-20 text-black text-center">
        <h3 className="text-4xl md:text-3xl font-semibold mb-10">
          Strategic Partnerships
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-12">
          <img src={cisco} alt="Cisco" className="w-28 md:w-36 h-auto" />
          <img src={cloude} alt="Cloud" className="w-28 md:w-36 h-auto" />
        </div>
        <p className=" max-w-3xl mx-auto mt-8 text-lg">
          Collaborating with leading partners to deliver secure and scalable
          AI-powered transformation for public and private sectors.
        </p>

        <div className="pt-10">
          <Link
            to="/partners/cisco"
            className="inline-flex items-center gap-2 bg-[#2286FE] text-white text-lg px-8 py-3 rounded-full hover:bg-white hover:text-black hover:border border-black transition duration-300"
          >
            Partnerships →
          </Link>
        </div>
      </section>

      {/* ===== CONTACT SECTION ===== */}
      <section className="mt-10">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
