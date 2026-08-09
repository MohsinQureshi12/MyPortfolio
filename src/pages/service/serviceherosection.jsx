import React from 'react';
import { ArrowRight, Plus } from 'lucide-react';
import bgImage from '../../../public/assets/image/servicesherosection.jpg';
 
const ServiceHeroSection = () => {
    return (
        <div
            className="relative w-full h-[80vh] min-h-[600px] flex items-center bg-cover bg-center overflow-hidden"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-[#1b2b45] via-[#1b2b45]/60 to-[#1b2b45]/40 md:via-[#1b2b45]/30"></div>
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4">

                <div className="max-w-3xl flex flex-col items-center text-center md:items-start md:text-left">

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>

                        <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-white uppercase">
                            Capabilities
                        </span>
                    </div>


                    {/* Heading */}
                    <h1 className="text-2xl font-bold leading-tight text-white md:text-5xl lg:text-6xl lg:leading-[72px]">
                        End-to-end engineering for the modern enterprise.
                    </h1>


                    {/* Description */}
                    <p className="mt-6 text-sm font-normal text-white md:text-base lg:text-lg">
                        From product strategy to cloud operations, we deliver platforms engineered to international standards.                    </p>

                </div>
                {/* CTA Button */}
                <button className="bg-white text-[#0f172a] mt-4 hover:bg-gray-50 px-6 py-3.5 rounded-lg font-bold text-sm flex items-center gap-2 transition-all group shadow-xl">
                    Talk to an architect
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>

               

            </div>

        </div>
    );
};

export default ServiceHeroSection;
