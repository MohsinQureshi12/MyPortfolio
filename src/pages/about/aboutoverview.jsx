import React from 'react';
import aboutUsImage from "../../../public/assets/image/aboutusimage2.jpg";

const AboutOverview = () => {
  return (
    <section className="py-10 md:py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Image Column */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[600px] aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <img 
                src={aboutUsImage} 
                alt="Team working together in an enterprise meeting" 
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Content Column */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0f172a] mb-6 tracking-tight">
              Company Overview
            </h2>
            
            <div className="space-y-6 text-base md:text-lg text-slate-600 leading-relaxed">
              <p>
                StreetCoder Technologies delivers enterprise-grade digital solutions engineered for scalability, automation and global operational standards.
              </p>
              <p>
                We specialize in SaaS platforms, ERP ecosystems, mobile applications, AI-powered systems, cloud infrastructures and intelligent enterprise solutions designed to transform businesses through innovation and technology.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutOverview;
