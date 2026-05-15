import React, { useState } from "react";
import plus from "/src/Images/plus.png";
import minus from "/src/Images/minus.png";
import Contact from "./Contact";
import cisco from "/src/Images/Partners/cisco.svg";
import ciscoLogo from "/src/Images/Partners/cisco-logo.png";

const Cisco = () => {
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
    <div className="text-black font-satoshi py-10 sm:py-16 md:py-20 ">
      {/* ===== HERO SECTION ===== */}
      <div className="relative w-full h-[30vh] sm:h-[40vh] md:h-[48vh] overflow-hidden">
        <img
          src={cisco}
          alt="Cisco"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 " />
        <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-24">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black">
            Cisco
          </h1>
          <p className="text-base sm:text-lg md:text-lg pt-3 max-w-xl ">
            Unlock the power of Cisco with expert solutions from ParadigmIT.
          </p>
        </div>
      </div>

      {/* ===== INTRO SECTION ===== */}
      <section className="flex flex-col md:flex-row items-center gap-8 md:gap-12 px-6 sm:px-10 md:py-10 md:px-16 lg:px-24 ">
        <div className="flex justify-center md:w-1/2">
          <img
            src={ciscoLogo}
            alt="Cisco Logo"
            className="w-56 sm:w-72 md:w-[450px] lg:w-[400px] object-contain"
          />
        </div>

        <div className=" text-center md:text-left">
          <p className="text-sm sm:text-base md:text-lg leading-relaxed ">
            The ParadigmIT–Cisco alliance is built on a shared commitment:
            delivering end-to-end, scalable technology solutions that empower
            businesses and governments to thrive in a data-driven future. By
            combining Cisco's industry-leading networking and security
            technologies with ParadigmIT's proven digital transformation and
            managed service capabilities, we drive impactful modernization.
          </p>
        </div>
      </section>

      {/* ===== FOCUS AREAS SECTION ===== */}
      <section className="py-14 md:py-20 bg-white px-6 sm:px-10 md:px-16 lg:px-24">
        <h1 className="text-2xl sm:text-3xl font-semibold text-center mb-10 sm:mb-16">
          Our Core Focus Areas
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="bg-gray-50 p-5 sm:p-6 md:p-8 rounded-xl shadow-sm border-l-4 border-blue-600">
            <h2 className="text-lg sm:text-xl font-semibold mb-3 ">
              Intelligent Cloud Modernization
            </h2>
            <p className=" text-sm sm:text-base leading-relaxed">
              We help enterprises and public institutions move to the cloud
              strategically. From app migration to hybrid integration, our
              experts design scalable, secure architectures that enhance agility
              and reduce costs.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-50 p-5 sm:p-6 md:p-8 rounded-xl shadow-sm border-l-4 border-blue-600">
            <h2 className="text-lg sm:text-xl font-semibold mb-3 ">
              Data & AI for Smarter Decisions
            </h2>
            <p className=" text-sm sm:text-base leading-relaxed">
              We transform data into actionable insights. Using Cisco’s
              analytics tools and ParadigmIT’s AI-driven frameworks, we help
              organizations predict, adapt, and innovate.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-50 p-5 sm:p-6 md:p-8 rounded-xl shadow-sm border-l-4 border-blue-600">
            <h2 className="text-lg sm:text-xl font-semibold mb-3 ">
              AI-Enhanced Experiences
            </h2>
            <p className=" text-sm sm:text-base leading-relaxed">
              Using advanced agentic systems, we deploy AI-driven solutions for
              real-time assistance, enhancing user engagement and operational
              intelligence.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-gray-50 p-5 sm:p-6 md:p-8 rounded-xl shadow-sm border-l-4 border-blue-600">
            <h2 className="text-lg sm:text-xl font-semibold mb-3 ">
              Industry-Focused Innovation
            </h2>
            <p className=" text-sm sm:text-base leading-relaxed">
              We blend domain expertise, analytics, and cloud innovation to
              deliver measurable value across sectors like BFSI, healthcare, and
              government.
            </p>
          </div>
        </div>
      </section>

      {/* ===== ACCORDION SECTION ===== */}

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

      {/* ===== FINAL CTA SECTION ===== */}
      <section className="text-center py-14 md:py-20 px-6 sm:px-10 md:px-20 bg-blue-50">
        <h1 className="text-2xl sm:text-3xl font-semibold mb-4">
          Driving the Digital Future, Together 
        </h1>
        <p className="text-sm sm:text-base md:text-lg  max-w-4xl mx-auto mb-8 leading-relaxed">
          At ParadigmIT, we believe transformation is not about keeping pace —
          it’s about setting the pace.At ParadigmIT, we believe transformation
          is not about keeping pace — it’s about setting the pace. With Cisco as
          our strategic technology partner, we empower enterprises and public
          institutions to move beyond modernization toward innovation that
          defines the future.
        </p>

        <div className="shadow-2xl   p-4 border-[2px]  border-[#2286FE] hover:shadow-xl transition px-6 md:px-6 py-6 mx-auto text-center rounded-2xl max-w-6xl mb-12">
          <p className="text-base md:text-lg  leading-relaxed ">
            Discover what ParadigmIT + Cisco can do for your organization.
          </p>
        </div>
      </section>

      {/* ===== CONTACT SECTION ===== */}
      <div className="mt-8 sm:mt-12 md:mt-16">
        <Contact />
      </div>
    </div>
  );
};

export default Cisco;
