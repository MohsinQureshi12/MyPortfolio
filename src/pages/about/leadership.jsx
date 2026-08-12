import React from 'react';
import teamMember from "../../../public/assets/image/leader.jpg";
import { Sparkles } from 'lucide-react';

export default function Leadership() {
  return (
    <section className="py-10 md:py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Header Section */}
        <div className="text-center mb-10 md:mb-20">
          <p className="text-primary font-bold tracking-widest text-[10px] md:text-xs uppercase mb-4">
            Leadership
          </p>
          <h2 className="lg:text-3xl text-lg font-bold text-black tracking-tight leading-tight">
            Messages from our   leadership.
          </h2>
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-4">
          
          {/* Image Column */}
          <div className="w-full lg:w-5/12 flex justify-center">
            <div className="relative w-full max-w-[340px]">
              {/* Blue Glow at the bottom */}
              <div className="absolute -inset-4 bottom-0 bg-primary rounded-[40px] blur-2xl opacity-20 translate-y-8"></div>
              
              {/* Image Container */}
              <div className="relative w-full aspect-[3/4] rounded-[28px] border-[3px] border-primary overflow-hidden bg-gray-100 shadow-2xl">
                <img 
                  src={teamMember} 
                  alt="Chairman" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          
          {/* Text Column */}
          <div className="w-full lg:w-7/12 flex flex-col justify-center">
            <Sparkles className="w-8 h-8 text-primary mb-6" strokeWidth={1.5} />
            
            <h3 className="text-lg lg:text-3xl font-semibold text-primary text-start leading-snug mb-6">
              "Technology is shaping the future of nations, businesses and communities. Pakistan has the potential to emerge as a strong and self-reliant force in the global digital economy."
            </h3>
            
            <p className="text-sm md:text-base  text-grey-light text-start leading-relaxed lg:mb-8 mb-4">
              We are committed to building reliable, innovative and world-class technology solutions developed within Pakistan while empowering organizations with modern digital infrastructures aligned with international standards.
            </p>
            
            <div>
              <p className="text-black font-bold text-base md:text-lg">Riaz Mehmood Kharoti</p>
              <p className="text-grey-light text-xs md:text-sm">Chairman, StreetCoder Technologies</p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
