import React from 'react';

import img1 from "../../../public/assets/image/ServicePageCart1.jpg";
import img2 from "../../../public/assets/image/ServicePageCart2.png";
import img3 from "../../../public/assets/image/ServicePageCart3.jpg";
import { productsData } from '../../Constant';



const PortfolioData = () => {
  return (
    <section className="bg-white">
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl px-4 md:px-8 mx-auto md:py-20 py-10">
          {productsData?.map((product) => (
            <div
              key={product.id}
              className="flex flex-col bg-white rounded-3xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border border-blue-50/50 overflow-hidden hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-shadow duration-300 cursor-pointer"
            >
              {/* Card Image */}
              <div className="w-full h-56 md:h-64 overflow-hidden bg-gray-50 border-b border-gray-100">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Card Content */}
              <div className="p-8 flex flex-col flex-grow">
                <span className="text-primary font-bold text-[11px] tracking-wider uppercase mb-3">
                  {product.category}
                </span>
                <h3 className="text-[#0a192f] text-[22px] font-bold mb-3 tracking-tight">
                  {product.title}
                </h3>
                <p className="text-gray-500 font-medium text-[15px] leading-relaxed">
                  {product.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioData;
