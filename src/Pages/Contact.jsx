import React, { useState } from 'react';
import linkedin from "/src/Images/linkedin.png";
import twitterLogo from "/src/Images/twitter.png";
import Logo from "/src/Images/Paradigmlogo.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '' 
  });

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  const handleChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value
    });
  };

  return (
    <div className="flex flex-col w-full">
      
      {/* Contact Section */}
      <div className="flex items-center justify-center py-5 px-4 sm:px-6 md:px-10">
        <div className="w-full relative">
          <div className="bg-blue-500 p-6 sm:p-10 md:p-12 relative overflow-hidden rounded-xl">
            
            {/* Decorative Circles */}
            <div className="absolute -right-32 -top-32 w-72 sm:w-96 h-72 sm:h-96 border-8 border-white/20 rounded-full"></div>
            <div className="absolute -right-10 top-28 w-48 sm:w-64 h-48 sm:h-64 border-8 border-white/20 rounded-full"></div>

            {/* Content */}
            <div className="relative z-10 text-center">
              <h2 className="text-white font-satoshi text-3xl sm:text-4xl font-normal mb-8 sm:mb-12">
                Contact Us Now...!
              </h2>
              
              {/* Form */}
              <div className="flex flex-col md:flex-row gap-4 justify-center items-center max-w-3xl mx-auto w-full">
                
                <input
                  type="text"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={(e) => handleChange('firstName', e.target.value)}
                  className="w-full md:w-64 px-6 py-3 rounded-lg bg-transparent border border-white/30 
                  text-white placeholder-white/70 font-satoshi focus:outline-none focus:border-white/50 transition"
                />

                <input
                  type="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className="w-full md:w-64 px-6 py-3 rounded-lg bg-transparent border border-white/30 
                  text-white placeholder-white/70 font-satoshi focus:outline-none focus:border-white/50 transition"
                />

                <button
                  onClick={handleSubmit}
                  className="w-full md:w-auto px-8 py-3 bg-white text-blue-500 font-medium 
                  rounded-lg hover:bg-gray-50 transition flex items-center justify-center gap-2 font-satoshi"
                >
                  Send Now →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="flex flex-col md:flex-row items-center justify-between 
      px-6 sm:px-10 md:px-16 lg:px-40 py-6 gap-6">

        {/* Logo + Social Icons */}
        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-20">
          <img src={Logo} alt="Paradigmit" className="w-32 sm:w-40" />

          {/* Icons */}
         <div className="flex  items-center gap-5"> 
           <a href='https://x.com/paradigmitinc?s=11' target='_blank'>
           <img src={twitterLogo} alt='Twitter' className="" /> 
          </a>
          <a href='https://www.linkedin.com/company/paradigmittechnologyservices' target='_blank'>
           <img src={linkedin} alt='Linked in' className="w-7 h-7" /> 
          </a>
         
            </div>
        </div>

        {/* Copyright */}
        <p className="text-sm sm:text-base md:text-sm font-satoshi text-black text-center md:text-right">
          © Copyright 2025. All Rights Reserved by ParadigmIT.
        </p>
      </div>

    </div>
  );
};

export default Contact;
