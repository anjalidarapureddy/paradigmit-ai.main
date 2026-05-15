import React, { useState } from "react";
import { motion } from "framer-motion";
import cisco from "/src/Images/Partners/cisco.svg";
import ISO42 from "/src/Images/About/ISO42001.png";
import ISO27 from "/src/Images/About/ISO27001.png";
import ISO90 from "/src/Images/About/ISO9000.png";
import ISO20 from "/src/Images/About/ISO20000.png";
import cmmi from "/src/Images/About/CMMI.png";
import arrowRight from "/src/Images/arrow_right.svg";

const Certifications = () => {
  const [selectedStandard, setSelectedStandard] = useState("CMMi Level 5");

  const standards = {
    "CMMi Level 5": {
      image: cmmi,
      title: "Achieving the Highest Global Benchmark for Engineering and Process Excellence",
      // subtitle: "Achieving the Highest Global Benchmark for Engineering and Process Excellence",
      // heading: "Global Benchmark for Engineering and Process Excellence",
      content:<p>
    <span className="font-semibold">ParadigmIT</span> has been
    appraised at <span className="font-semibold "> Capability Maturity Model Integration (CMMI) for Development
    v2.0 Maturity Level 5 — the highest level of performance maturity</span> recognized
    worldwide. This distinction validates our ability to deliver predictable
    outcomes, innovate continuously, and optimize processes across all software
    engineering and AI product development initiatives.
  </p>,
       
      subheading: "About CMMI DEV v2.0 Maturity Level 5",
      additionalContent:
        "CMMI DEV v2.0 is the globally accepted model that measures an organization’s capability to design, develop, and maintain technology solutions with consistent quality and efficiency. Maturity Level 5 represents “Optimizing” performance — where processes are not only measured and managed but continuously improved through innovation, data, and automation.",
      subcontent: "Through this appraisal, ParadigmIT demonstrates:",
      subpoints: [
        "Institutionalized best practices across engineering and delivery functions.",
        "Quantitative process management ensuring predictable, high-quality outcomes.",
        "Continuous improvement driven by analytics, innovation, and feedback loops.",
        "A mature culture that balances speed, scalability, and reliability."
      ],
      subcontent1: "Our Commitment to Engineering Excellence",
      sub1:
        "At ParadigmIT, maturity is more than a metric — it’s a philosophy. Our development teams follow data-driven engineering, leveraging metrics and AI-assisted insights to enhance every stage of the lifecycle — from requirements to release. This ensures each engagement delivers maximum value, minimal risk, and measurable impact for our clients across enterprise, public sector, and infrastructure domains.",
      subcontent2: "Why It Matters",
      sub2:
        "Achieving CMMI Level 5 status means our clients benefit from predictable project outcomes through quantitative performance control, accelerated delivery cycles without compromising quality or compliance, reduced rework and operational risk via continuous improvement frameworks, and a trusted global partner recognized for excellence in engineering discipline and innovation. Delivering Innovation with Discipline, ParadigmIT reaffirms its position among the world’s most capable technology and AI engineering organizations — ensuring every solution meets the highest standards of quality, reliability, and performance."
    },

    "ISO/IEC 20000-1:2018 ": {
      image: ISO20,
      
      title: "Setting a Global Standard for IT Service Management and Operational Reliability",
        content:<p>ParadigmIT Technology Services is certified under <span className="font-semibold"> ISO/IEC 20000-1:2018,</span> the internationally recognized standard for <span className="font-semibold" > IT Service Management (ITSM). </span>
This achievement demonstrates our commitment to delivering <span className="font-semibold" > reliable, efficient, and customer-centric technology services,</span> underpinned by strong governance, process discipline, and continuous improvement.  </p>,
        subheading: "About ISO/IEC 20000-1:2018",
      additionalContent:
        "ISO/IEC 20000-1:2018 defines the global framework for establishing, implementing, and maintaining effective IT service management systems. It ensures that organizations consistently meet business needs and service expectations through a structured approach to planning, delivery, and improvement.",
      subcontent: "By aligning with this standard, ParadigmIT ensures:",
      subpoints: [
        "Seamless service delivery through standardized, repeatable processes.",
        "Continuous monitoring, measurement, and performance optimization.",
        "Rapid issue resolution backed by root-cause analysis and proactive prevention.",
        "A service culture driven by accountability, reliability, and customer value."
      ],
      subcontent1: "Our Commitment to Service Excellence",
      sub1:
        "At ParadigmIT, service excellence is built into our DNA. Our ITSM framework integrates AI-driven operations, quality controls, and compliance management to ensure that every service engagement — from infrastructure support to enterprise AI deployment — is delivered securely, efficiently, and consistently. We emphasize collaboration, automation, and analytics to continuously elevate performance and client experience.",
      subcontent2: "Why It Matters",
      sub2:
        "Achieving ISO/IEC 20000-1:2018 certification gives our clients confidence in globally benchmarked IT service delivery standards, assurance of stable, secure, and resilient technology operations, reduced downtime and enhanced service continuity, and partnership with a provider committed to continuous improvement and operational excellence. Delivering Trust Through Service Discipline, ParadigmIT reinforces its position as a trusted partner in managing complex digital ecosystems — ensuring measurable reliability, responsiveness, and business impact."
    },

    "ISO 9001:2015 ": {
      image: ISO90,
      title: "Setting a Global Standard for Quality and Operational Excellence ",
    content:<p>
   ParadigmIT has been certified under <span className="font-semibold" > ISO 9001:2015,</span> the internationally recognized benchmark for <span className="font-semibold"> Quality Management Systems (QMS). </span>
This milestone reinforces our commitment to <span className="font-semibold"> consistent performance, process discipline, and customer satisfaction,</span> ensuring that every solution we deliver — from enterprise platforms to AI innovations — meets the highest standards of reliability and excellence. 
  </p>,
        subheading: "About ISO 9001:2015",
      additionalContent:
        "ISO 9001:2015 defines a global framework for implementing and maintaining effective quality management across organizations. It emphasizes process consistency, continuous improvement, and customer-centric delivery — principles that form the backbone of ParadigmIT’s global operations.",
      subcontent: "Through this certification, ParadigmIT ensures:",
      subpoints: [
        "Standardized and traceable processes across projects and regions.",
        "Continuous improvement and data-driven decision-making.",
        "Strong governance and documentation throughout delivery lifecycles.",
        "A culture of accountability and customer focus in every engagement."
      ],
      subcontent1: "Our Commitment to Quality",
      sub1:
        "Quality at ParadigmIT is not an audit requirement — it’s a mindset. Our QMS integrates engineering, project management, and compliance practices to ensure that every solution is designed, built, and delivered with precision and purpose. We continuously refine our methods to anticipate client needs, minimize risk, and deliver measurable business value.",
      subcontent2: "Why It Matters",
      sub2:
        "Achieving ISO 9001:2015 certification means our clients gain confidence in globally benchmarked delivery standards, assurance of consistent quality across all ParadigmIT engagements, reduced operational risk through structured governance, and a trusted partner committed to continuous improvement and client success. Building Excellence Into Every Solution, ParadigmIT remains dedicated to helping enterprises and governments achieve success through systems that perform flawlessly and scale intelligently."
    },

    "ISO/IEC 27001:2013 ": {
      image: ISO27,
      title: "Establishing Global Standards in Information Security and Data Trust ",     
      content:
      <p>
    <span className="font-semibold">ParadigmIT Technology Services</span> is certified under <span className="font-semibold" >ISO/IEC 27001:2013,</span> the world’s leading standard for <span className="font-semibold"> Information Security Management Systems (ISMS).</span> This certification reaffirms our commitment to safeguarding client data, ensuring operational resilience, and upholding the highest levels of <span className="font-semibold"> confidentiality, integrity, and availability </span> across all technology and AI solutions we deliver.
  </p>,
        
      subheading: "About ISO/IEC 27001:2013",
      additionalContent:
        "ISO/IEC 27001:2013 defines a globally recognized framework for establishing, implementing, and maintaining robust information security management practices. It helps organizations protect sensitive data and manage risks systematically through policies, processes, and continual improvement.",
      subcontent: "By aligning with this standard, ParadigmIT ensures:",
      subpoints: [
        "Strong data protection and access control mechanisms across all operations.",
        "Proactive risk assessment and mitigation for information assets.",
        "Continuous monitoring, auditing, and incident response readiness.",
        "Compliance with international data governance and privacy best practices."
      ],
      subcontent1: "Our Commitment to Security",
      sub1:
        "At ParadigmIT, security is more than compliance — it’s a core design principle. Our systems, platforms, and delivery frameworks are built to anticipate threats, defend proactively, and recover resiliently. We integrate information security into every layer of our operations — from software development and AI systems to infrastructure management and client support.",
      subcontent2: "Why It Matters",
      sub2:
        "Achieving ISO/IEC 27001:2013 certification gives our clients confidence in secure and compliant technology partnerships, assurance that their data is managed with precision, control, and accountability, protection against evolving cyber risks through structured governance, and peace of mind knowing that information security is embedded by design in every engagement. Securing Innovation with Trust, ParadigmIT remains steadfast in its mission to help enterprises and governments innovate responsibly — ensuring every advancement in AI and technology is protected, compliant, and built on trust."
    },

    "ISO/IEC 42001:2023 ": {
      image: ISO42,
      title: "Setting a Global Benchmark for Responsible and Trusted AI ",
      content:<p>
    ParadigmIT has earned the <span className="font-semibold"> ISO/IEC 42001:2023</span> certification — the world’s first international standard for <span className="font-semibold"> AI Management Systems (AIMS)</span> — reaffirming our leadership in ethical, secure, and transparent AI innovation. This milestone reflects our unwavering commitment to <span className="font-semibold" > AI governance, data integrity, and digital accountability</span> across all solutions we design and deploy.
  </p>,
      
      subheading: "About ISO/IEC 42001:2023",
      additionalContent:
        "The ISO/IEC 42001:2023 standard establishes a globally recognized framework for managing AI risks, ethics, and lifecycle governance. Through this certification, ParadigmIT ensures rigorous risk and bias management in all AI systems, transparent and accountable algorithmic decision-making, strong data security and governance controls, and continuous improvement and compliance with global standards.",
      subcontent: "Our Commitment to Responsible AI",
      subpoints: [
        "For ParadigmIT, responsible AI isn’t a compliance checkbox — it’s a philosophy.",
        "Our certified governance model integrates engineering, cybersecurity, legal, and data disciplines to ensure every AI system is safe, explainable, and trustworthy.",
        "We build intelligence aligned with human values, ethical principles, and regulatory expectations."
      ],
      subcontent1: "Why It Matters",
      sub1:
        "Earning this certification gives our clients confidence that all AI initiatives follow globally benchmarked governance standards, assurance of ethical, transparent, and secure AI delivery, and a trusted technology partner committed to responsible innovation and continuous excellence.",
      subcontent2: "Building the Future Responsibly",
      sub2:
        "With ISO/IEC 42001:2023, ParadigmIT reinforces its vision of AI innovation with integrity — uniting governance, security, and sustainability under one global standard. We remain dedicated to helping enterprises and governments adopt AI responsibly, ensuring every system we build advances both progress and trust."
    }
  };

  const data = standards[selectedStandard];

  return (
    <div className="py-20 font-satoshi">
      {/* ====== Banner ====== */}
      <div className="relative w-full">
        <img
          src={cisco}
          alt="Certifications Banner"
          className="w-full h-48 md:h-52 object-cover rounded-none"
        />
        <div className="absolute top-1/2 left-6 md:left-20 transform -translate-y-1/2 ">
          <h1 className="text-3xl md:text-5xl font-bold">Certifications</h1>
          <p className="pt-3 md:pt-5 text-sm md:text-lg">
            Certified experts with global standards of excellence.
          </p>
        </div>
      </div>

      {/* ====== Intro Section ====== */}
      <section className="py-12 px-6 md:px-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#2286FE] to-[#005BB5]"
        >
          Excellence Engineered with Intelligence
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-base md:text-lg pt-5 leading-relaxed  max-w-4xl mx-auto"
        >
          At ParadigmIT, excellence is engineered into every solution we deliver. Our
          global operations maintain the highest standards in security, quality, and
          governance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-blue-50 border border-gray-200 shadow-lg rounded-2xl px-6 md:px-10 py-8 mt-8 max-w-5xl mx-auto"
        >
          <p className=" leading-relaxed md:text-lg">
            These certifications reflect our unwavering commitment to{" "}
            <span className="font-semibold text-black">
              trust, compliance, and continuous improvement
            </span>
            — ensuring every engagement meets the highest benchmarks of{" "}
            <span className="font-semibold text-black">
              reliability, security, and performance
            </span>
            .
          </p>
        </motion.div>
      </section>

      {/* ====== Main Section ====== */}
      <div className=" py-10 px-4 md:px-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full lg:w-80 bg-white rounded-lg shadow-sm p-4 md:p-6 space-y-2">
            {Object.keys(standards).map((key) => (
              <button
                key={key}
                onClick={() => setSelectedStandard(key)}
                className={`w-full text-left font-medium md:text-lg px-4 py-3 rounded-lg transition-all ${
                  selectedStandard === key
                    ? "bg-blue-50 text-blue-700 font-semibold"
                    : "hover:bg-gray-50"
                }`}
              >
                <div className="flex items-center md:text-lg justify-between">
                  <span>
                    {key.toLowerCase().includes("cmmi") ? key : key}
                  </span>
                  {selectedStandard === key && (
                    <img src={arrowRight} alt="→" className="w-5 h-5" />
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="flex-1 bg-white rounded-lg shadow-sm p-6 md:p-8 space-y-6">
            {/* Image + Title */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <img
                src={data.image}
                alt={data.title}
                className="w-40 md:w-60 sm:h-32 object-contain"
              />
              <div>
                <h1 className="text-lg md:text-lg font-semibold">{data.title}</h1>
              <p className="text-sm md:text-sm pt-3">{data.content}</p>
              </div>
            </div>

            {/* Content Blocks */}
            <div className="space-y-6 text-sm md:text-base leading-relaxed ">
              <div>
                <h2 className="text-sm md:text-sm ">
                  {data.heading}
                </h2>
                
              </div>

              {data.subheading && (
                <div>
                  <h3 className="text-lg md:text-sm font-semibold mt-6">
                    {data.subheading}
                  </h3>
                  <p className="text-sm md:text-sm">{data.additionalContent}</p>
                </div>
              )}

              {data.subcontent && (
                <div>
                  <h3 className="text-sm md:text-sm font-semibold mt-6">
                    {data.subcontent}
                  </h3>
                  {data.subpoints ? (
                    <ul className="list-disc text-sm md:text-sm pl-6 space-y-2">
                      {data.subpoints.map((p, i) => (
                        <li key={i}>{p}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>{data.sub}</p>
                  )}
                </div>
              )}

              {data.subcontent1 && (
                <div>
                  <h3 className="text-sm md:text-sm font-semibold mt-6">
                    {data.subcontent1}
                  </h3>
                  <p className="text-sm md:text-sm">{data.sub1}</p>
                </div>
              )}

              {data.subcontent2 && (
                <div>
                  <h3 className="text-sm md:text-sm font-semibold mt-6">
                    {data.subcontent2}
                  </h3>
                  {data.subpoints2 ? (
                    <ul className="list-disc text-sm md:text-sm pl-6 space-y-2">
                      {data.subpoints2.map((p, i) => (
                        <li key={i}>{p}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm md:text-sm">{data.sub2}</p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
