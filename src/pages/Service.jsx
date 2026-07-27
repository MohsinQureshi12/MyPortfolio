import { useEffect, useRef } from "react";
import CTASection from "../components/home/ctasection";
import { SERVERICE } from "../Constant";


export const Servicecomponent = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slideIn");
          } else {
            entry.target.classList.remove("animate-slideIn");
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <div className="bg-gray-100 relative overflow-hidden">
      {/* Header Section */}
      <div className="flex justify-start h-[300px] bg-[#0E315A] text-white p-10">
        <div className="w-full text-center md:text-left">
          <h2 className="text-4xl font-bold">What We Do</h2>
          <div className="mt-3 h-[2px] bg-white w-[150px] mx-auto md:mx-0"></div>
          <h6 className="mt-3 text-[17px]">
            Transforming your business processes for the digital future
          </h6>
        </div>
      </div>

      {/* Service Cards Grid */}
      <div className="py-32 px-6 sm:px-10 md:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SERVERICE?.map((service, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="bg-white p-6 rounded-lg shadow-lg h-auto flex flex-col justify-between opacity-0 transition-opacity duration-500"
            >
              <img
                src={service.img}
                alt={service.title}
                className="h-[80px] mb-4 mx-auto"
              />
              <h3 className="text-xl font-semibold text-[#0E315A]">
                {service.title}
              </h3>
              <p className="text-gray-700 mt-2">{service.desc}</p>
              <div className="flex justify-end mt-4">
                <div className="border border-black rounded-full p-2 flex items-center justify-center">
                  <i className="fa-solid fa-arrow-right"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="">
        <CTASection />
      </div>
    </div>
  );
};

