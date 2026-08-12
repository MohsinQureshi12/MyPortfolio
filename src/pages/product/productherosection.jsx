import React from 'react';
import bgImage from '../../../public/assets/image/productherosection.jpg'; // Adjust image path as needed

const ProductHeroSection = () => {
    return (
        <div
            className="relative w-full h-[70vh] min-h-[500px] flex items-center bg-cover bg-center overflow-hidden"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            {/* Dark gradient overlay for readability and exact match of the reference image */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1b2b45] via-[#1b2b45]/80 to-[#1b2b45]/30"></div>
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4">

                <div className="max-w-4xl flex flex-col items-center text-center md:items-start md:text-left">

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>

                        <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-white uppercase">
                            PRODUCT
                        </span>
                    </div>


                    {/* Heading */}
                    <h1 className="lg:text-5xl text-lg font-bold leading-tight text-white   lg:leading-[72px]">
                        Production-ready platforms shipped from day one.
                    </h1>


                    {/* Description */}
                    <p className="mt-6 text-sm font-normal text-white md:text-base lg:text-lg">
                        Multi-tenant ERP and SaaS systems built on a unified Ventrex platform — battle-tested across industries.
                    </p>

                </div>

            </div>
        </div>
    );
};

export default ProductHeroSection;
