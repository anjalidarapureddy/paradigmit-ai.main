import { useState } from "react";
import linkedin from "/src/Images/Linked.png";
import sridhar from "/src/Images/Leaders/sridhar.jfif";
import manohar from "/src/Images/Leaders/Manohar.JPG";
import chiru from "/src/Images/Leaders/chiru.png";
import vijay from "/src/Images/Leaders/vijay.jfif";
import nitish from "/src/Images/Leaders/nitisha.jpg";
import vinod from "/src/Images/Leaders/vinod.jfif";
import Vishnu from "/src/Images/Leaders/Vishnu.png";


const Leadership = () => {
  const leaders = [
    {
      name: "Sridhar Gadhi",
      title: "Founder & Chairman",
      image: sridhar,
      linkedin: "https://www.linkedin.com/in/sridhargadhi/",
    },
    {
      name: "Manohar Varanasi",
      title: "SVP, Delivery Excellence",
      image: manohar,
      linkedin: "https://www.linkedin.com/in/vm2017/",
    },
    {
      name: "Vishnu Varma",
      title: "CEO, ParadigmIT Cybersecurity",
      image: Vishnu,
      linkedin: "https://www.linkedin.com/in/vishnu-varma-kalidindi-b85b16147/",
    },
    {
      name: "Chiru Harsh",
      title: "Director, Special Projects",
      image: chiru,
      linkedin: "https://www.linkedin.com/in/chiru-harsh/",
    },
    {
      name: "Vijay Kovvuri",
      title: "Director - IT Infrastructure & Cloud Services",
      image: vijay,
      linkedin: "https://www.linkedin.com/in/vijay-kovvuri-bb74b812/",
    },
    {
      name: "Nitisha Baalay",
      title: "Vice President - People & Business Operations",
      image: nitish,
      linkedin: "https://www.linkedin.com/in/nitisha-baalay/",
    },
    {
      name: "Vinod Rao",
      title: "Director – Enterprise AI Sales",
      image: vinod,
      linkedin: "https://www.linkedin.com/in/vinod-raodubai/",
    },
  ];

  return (
    <div className="bg-white py-16 text-black text-center">
      {/* Heading Section */}
      <div className="px-6 md:px-16 md:pt-10 lg:px-40 mb-12">
        <h1 className="font-satoshi text-3xl md:text-4xl font-bold">
          Leadership
        </h1>
        <p className="font-satoshi text-base md:text-lg pt-5  leading-relaxed">
          Our philosophy is simple — hire a team of diverse, passionate people and foster
          a culture that empowers everyone to do their best work. We believe in leadership
          that inspires, empowers, and drives innovation every day.
        </p>
      </div>

      {/* Leader Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 px-6 md:px-16 lg:px-20 max-w-7xl mx-auto">
        {leaders.map((leader, index) => (
          <div
            key={index}
            className="relative bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden hover:shadow-lg hover:-translate-y-2 transition-all duration-300 group"
          >
            {/* Leader Image */}
            <img
              src={leader.image}
              alt={leader.name}
              className="w-full  object-cover"
            />

            {/* Leader Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm p-4 text-left">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold font-satoshi text-base md:text-lg ">
                    {leader.name}
                  </h3>
                  <p className="font-satoshi  text-sm md:text-base">
                    {leader.title}
                  </p>
                </div>
                <a
                  href={leader.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-8 h-8 rounded-full bg-[#0A66C2]/10 hover:bg-[#0A66C2]/20 transition-colors"
                >
                  <img
                    src={linkedin}
                    alt="LinkedIn"
                    className="w-5 h-5 object-contain"
                  />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leadership;
