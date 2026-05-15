import React from "react";
import mapView from "/src/Images/Mapview.svg";
import linkedin from "/src/Images/linkedin.png";
import twitterLogo from "/src/Images/twitter.png";
import Logo from "/src/Images/Paradigmlogo.png";

const Contactus = () => {
  return (
    <div className="bg-white py-10 md:pt-24 px-4 sm:px-6 md:px-10 lg:px-20">

      {/* MAIN LAYOUT */}
      <div className="flex flex-col lg:flex-row gap-10">

        {/* LEFT SIDE */}
        <div className="w-full lg:w-4/5">
          <img src={mapView} alt="Map" className="w-full h-auto" />

          {/* Offices Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 text-center mt-10 gap-6">

            <div>
              <h3 className="text-[#2286FE] font-satoshi font-semibold text-lg">
                US Offices
              </h3>
              <p className="text-sm">Columbia, MD</p>
              <p className="text-sm">Sunnyvale, CA</p>
              <p className="text-sm">Erie, PA</p>
            </div>

            <div>
              <h3 className="text-[#2286FE] font-semibold text-lg">EU Offices</h3>
              <p className="text-sm">Italy</p>
            </div>

            <div>
              <h3 className="text-[#2286FE] font-semibold text-lg">UAE Offices</h3>
              <p className="text-sm">Dubai</p>
            </div>

            <div>
              <h3 className="text-[#2286FE] font-semibold text-lg">India Offices</h3>
              <p className="text-sm">Hyderabad</p>
              <p className="text-sm">Visakhapatnam</p>
              <p className="text-sm">Bengaluru</p>
              <p className="text-sm">New Delhi</p>
              <p className="text-sm">Chennai</p>
              <p className="text-sm">Mumbai</p>
              <p className="text-sm">Kolkata</p>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE — Contact Form */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl font-bold mb-6">You can reach us anytime</h2>

          <form className="space-y-5">

            {/* Name */}
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="you@company.com"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium mb-1">Phone number</label>
              <div className="flex">
                <select className="border border-gray-300 rounded-l-lg p-3 bg-white">
                  <option>IN</option>
                  <option>US</option>
                  <option>UK</option>
                </select>
                <input
                  type="tel"
                  placeholder="+91 (987) 000-0000"
                  className="w-full border border-gray-300 rounded-r-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium mb-1">How can we help?</label>
              <textarea
                placeholder="Tell us a little about the project..."
                className="w-full border border-gray-300 rounded-lg p-3 h-24 focus:ring-2 focus:ring-blue-500 outline-none"
              ></textarea>
            </div>

            {/* Solutions Checkboxes */}
            <div>
              <label className="block text-sm font-medium mb-2">Solutions</label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  "Multi Agent AI Platform",
                  "Digital Public Services",
                  "Enterprise AI Transformation",
                  "AI Infrastructure Project Management",
                  "Cybersecurity AI",
                  "Defence AI",
                ].map((text, idx) => (
                  <label key={idx} className="flex items-center space-x-2">
                    <input type="checkbox" className="accent-blue-600" />
                    <span className="text-sm">{text}</span>
                  </label>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition w-full sm:w-auto"
            >
              Get started
            </button>
          </form>
        </div>
      </div>

      {/* FOOTER */}
      <hr className="border-t mt-10 border-gray-300 w-full mb-6" />

      <div className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-10 md:px-20 gap-6">

        {/* Logo + Social Icons */}
        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-20">
          <img src={Logo} alt="Paradigmit" className="w-36 sm:w-44" />

         <div className="flex items-center gap-5 "> 
         <a href="https://x.com/paradigmitinc?s=11" target="_blank">
           <img src={twitterLogo} alt='Twitter' className="" /> 
           
           
         
          
          </a>
          <a href="https://www.linkedin.com/company/paradigmittechnologyservices" target="_blank">

           <img src={linkedin} alt='Linked in' className="w-7 h-7" />
          </a>
              </div>
        </div>

        {/* Copyright */}
        <p className="text-sm sm:text-base md:text-sm text-center md:text-right">
          © Copyright 2025. All Rights Reserved by ParadigmIT.
        </p>

      </div>

    </div>
  );
};

export default Contactus;
