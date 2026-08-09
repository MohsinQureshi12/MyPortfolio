import React from 'react';
import { Plus, ArrowRight } from 'lucide-react';
import { portfolioItems } from '../../Constant';
import { Link } from 'react-router-dom';

// Using the images found in the assets folder


const ServicePortfolio = () => {
    return (
        <section className="w-full py-20 px-4 md:px-8 lg:px-16 bg-white relative">
            <div className="max-w-7xl mx-auto">

                {/* Header Section */}
                <div className="mb-12">
                    <h4 className="text-primary font-bold text-xs tracking-wider uppercase mb-3">
                        Service Portfolio
                    </h4>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-black leading-[1.1] mb-4">
                        Twelve disciplines. One <br className="hidden md:block" />
                        delivery standard.
                    </h2>
                    <p className="text-grey-light font-medium text-sm md:text-base">
                        Hover each card to explore the capability in detail.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {portfolioItems?.map((item) => (
                        <div
                            key={item.id}
                            className="relative rounded-[20px] overflow-hidden h-[450px] group cursor-pointer shadow-lg"
                        >
                            {/* Background Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                style={{ backgroundImage: `url(${item.image})` }}
                            ></div>

                            {/* Dark Overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#09152b] via-[#09152b]/60 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100"></div>

                            {/* Additional dark tint on hover to improve readability */}
                            <div className="absolute inset-0 bg-[#09152b]/0 transition-colors duration-500 group-hover:bg-[#09152b]/40"></div>

                            {/* Top Left Indicator Icon */}
                            <div className="absolute top-6 left-6 w-8 h-8 rounded-full border border-white/30 flex items-center justify-center bg-white/10 backdrop-blur-sm z-10 transition-all duration-500 group-hover:scale-110 group-hover:bg-[#2563eb] group-hover:border-[#2563eb]">
                                <div className="w-1.5 h-1.5 rounded-full bg-white shadow-sm"></div>
                            </div>

                            {/* Content at Bottom */}
                            <div className="absolute bottom-0 left-0 right-0 p-8 z-10 flex flex-col justify-end">
                                <h3 className="text-white text-[28px] font-bold tracking-tight mb-2 transition-transform duration-500 group-hover:-translate-y-2">
                                    {item.title}
                                </h3>

                                {/* Expandable content (Description and Button) */}
                                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-in-out">
                                    <div className="overflow-hidden">
                                        <p className="text-blue-50/90 font-medium text-[15px] mb-6 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                            {item.desc}
                                        </p>
                                        <Link to={"/contact"}> <button className="bg-white text-[#0f172a] hover:bg-gray-50 px-5 py-2.5 rounded-full font-bold text-[14px] flex items-center gap-2 transition-all opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 duration-500 delay-150 shadow-lg">
                                            Explore service
                                            <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
                                        </button>
                                        </Link>

                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicePortfolio;
