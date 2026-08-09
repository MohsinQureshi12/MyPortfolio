import React from 'react';
import { Check, X } from 'lucide-react';

export const HireUsComponent = () => {
  const comparisonData = [
    {
      left: "100% natural ingredients",
      right: "Artificial stimulants",
    },
    {
      left: "No caffeine, no sugar",
      right: "High sugar content",
    },
    {
      left: (
        <>
          Long-lasting focus, <br className="hidden md:block" /> no crash
        </>
      ),
      right: "Jitters and crashes",
    },
    {
      left: (
        <>
          Clinically proven <br className="hidden md:block" /> ingredients
        </>
      ),
      right: "No clinical backing",
    },
  ];

  return (
    <section className=" py-20 px-4 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto w-full">
        {/* Header */}  
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 tracking-wide leading-tight uppercase">
            WHAT MAKES <br /> FOCUS+ BETTER?
          </h2>
          <p className="text-primary text-lg md:text-xl font-light">
            Compare Focus+ to other stimulants.
          </p>
        </div>

        {/* Comparison Container */}
        <div className="grid grid-cols-2  relative items-start">
          
          {/* Left Column (Focus+) */}
          <div className="relative flex flex-col items-center w-full">
            {/* Product Image */}
            <div className="h-32 md:h-48 relative z-20 -mb-12 w-full flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1584362917165-526a968579e8?q=80&w=400&auto=format&fit=crop" 
                alt="Focus+ Package" 
                className="h-full object-contain object-bottom drop-shadow-2xl rounded-lg" 
              />
            </div>
            
            {/* White Card */}
            <div className="bg-[#fcf9ff] rounded-[1.5rem] md:rounded-[2.5rem] w-full pt-16 pb-6 px-2 md:px-8 shadow-2xl relative z-10">
              {/* Checkmark Badge */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary rounded-full p-1.5 md:p-2 shadow-lg z-30">
                <Check size={24} strokeWidth={3} className="md:w-7 md:h-7" />
              </div>

              {/* Text Items */}
              <div className="flex flex-col w-full gap-4 md:gap-6 mt-2">
                {comparisonData.map((item, i) => (
                  <div key={`left-${i}`} className="flex items-center justify-center text-center min-h-[3.5rem] md:min-h-[5rem]">
                    <p className="font-bold text-[#1f2937] text-sm md:text-lg leading-snug">
                      {item.left}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (Other Stimulants) */}
          <div className="relative flex flex-col items-center w-full">
            {/* Other Products Image */}
            <div className="h-32 md:h-48 relative z-20 -mb-12 w-full flex justify-center items-end pb-2 md:pb-4">
              <div className="relative inline-block">
                 <img 
                   src="https://images.unsplash.com/photo-1559839914-11aae5109c12?q=80&w=400&auto=format&fit=crop" 
                   alt="Other Stimulants" 
                   className="h-20 md:h-32 object-contain drop-shadow-2xl mix-blend-luminosity opacity-90 rounded-lg" 
                 />
                 {/* Cross Badge */}
                 <div className="absolute -bottom-1 -right-3 md:-right-2 bg-[#ff4a4a] text-primary rounded-full p-1 md:p-1.5 shadow-lg z-30">
                   <X size={18} strokeWidth={3} className="md:w-5 md:h-5" />
                 </div>
              </div>
            </div>
            
            {/* Right Text Items Container */}
            <div className="w-full pt-16 pb-6 flex flex-col gap-4 md:gap-6 relative z-0 mt-2 md:-ml-8 md:pl-8">
              {comparisonData.map((item, i) => (
                <div 
                  key={`right-${i}`} 
                  className="flex items-center justify-center text-center min-h-[3.5rem] md:min-h-[5rem] bg-primary rounded-xl md:rounded-r-full md:rounded-l-none px-2 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] backdrop-blur-sm"
                >
                  <p className="font-semibold text-white  text-sm md:text-lg leading-snug">
                    {item.right}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

 