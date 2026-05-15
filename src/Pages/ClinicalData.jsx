import React, { useEffect, useRef } from "react";
import cts from "../Images/Cmd/cts.png";
import ourprocess from "../Images/Cmd/ourprocess.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ClinicalData = () => {
  const ref = useRef(null);

  const items = [
  "Streamlining trial start-up through technology-enabled tools.",
  "Rapid development of standardized eCRFs for seamless mapping into SDTM domains.",
  "Ensuring high-quality, unambiguous data collection from sites via meticulously designed eCRFs.",
  "Automated integration for timely receipt of external vendor/third-party data.",
  "Utilizing BI tools for continuous monitoring of safety and protocol endpoints data.",
  "Providing predictive insights to clinical operations and CDM teams on potential risks through automation.",
  "Developing custom solutions for live integrated data management of eCOA/ePRO.",
];

  useEffect(() => {
    ref?.current?.scrollIntoView({ behavior: "smooth" });
    ref?.current?.scrollIntoView(0, 0);
  }, []);

  const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};


const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

  return (
    <div className="bg-gradient-to-r text-black py-16 sm:py-20 lg:py-28 px-4 sm:px-8 md:px-16">
      <div className="max-w-7xl md:px-12 mx-auto flex flex-col lg:flex-row items-center justify-center gap-12">

        {/* TEXT SECTION */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1
            ref={ref}
             className="text-4xl md:text-4xl font-bold mb-6"
          >
            Clinical Trial Services
          </h1>

          <div className="text-sm sm:text-base text-justify leading-relaxed">
            <p className="text-lg leading-relaxed ">
              ParadigmIT Solution oriented approach is the strength till date
              that built our reputation as a Life Science Technology partner
              with our customers. We listen to our customers to understand
              the pain points in day-to-day tasks consuming their valuable
              resource pool.
            </p>

            <p className="text-lg leading-relaxed  mt-3">
              Utilizing a host of clinical research applications, ParadigmIT
              offers an extensive collection of services for pharmaceutical,
              biotech, medical device, and life science companies.
            </p>

            <p  className="text-lg leading-relaxed  mt-3">
              ParadigmIT team consists of functional, technical and industry
              experts who can successfully assist pharma and life science
              companies in navigating the complexity of the clinical trial
              lifecycle.
            </p>
          </div>

          
        </div>

        {/* IMAGE SECTION */}
        <div className="w-full lg:w-1/2 flex flex-col items-center">
          <img
            src={cts}
            alt="Clinical Trial Services"
            className="max-w-xs h-80 sm:max-w-sm md:max-w-md object-contain"
          />

          <p className="mt-6 text-center text-[#41649C] text-lg leading-relaxed font-semibold max-w-md">
            “Combining Clinical Trial Data with Advanced Business Intelligence
            Technology Saves our Clients Time and Money.”
          </p>
        </div>
      </div>

      {/* OUR PROCESS SECTION */}
      <div className="w-full h-full mt-10" id="Ourprocess">
        <div className="w-full h-full flex items-center justify-center">
          <img
            src={ourprocess}
            alt="ourprocess"
            className="px-10 h-[400px] w-full"
          />
        </div>

        <div className="pl-10 py-6 text-left">
          <h1 className="text-4xl md:text-4xl font-bold mb-6">
            ParadigmIT Way of Clinical Data Management
          </h1>

          <p className="mt-4 w-[80%] text-lg leading-relaxed">
            ParadigmIT excels in automating clinical trial processes by leveraging
            cutting-edge technology solutions tailored to your trial design needs.
          </p>

          <p className="mt-1 text-lg leading-relaxed">
            Our approach prioritizes delivery excellence through:
          </p>

        {/* CARD STYLE ANIMATED LIST */}
<div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl">
  {items.map((item, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.12,
        ease: "easeOut",
      }}
      viewport={{ once: true }}
      whileHover={{
        y: -6,
        boxShadow: "0px 12px 30px rgba(32,134,254,0.25)",
      }}
      className="bg-white rounded-2xl p-6 flex items-start gap-4 border border-gray-200 transition-all"
    >
      {/* DOT */}
      <div className="mt-1 w-3 h-3 rounded-full bg-[#2086FE] flex-shrink-0"></div>

      {/* TEXT */}
      <p className="text-lg leading-relaxed">
        {item}
      </p>
    </motion.div>
  ))}
</div>

        </div>
      </div>
    </div>
  );
};

export default ClinicalData;
