import { useEffect, useRef } from 'react';
import ServiceCart1 from '../assets/SerchCart1.png'
import ServiceCart2 from '../assets/icon4.png'
import ServiceCart3 from '../assets/icon3.png'
import ServiceCart4 from '../assets/team-member.jpg'
import ServiceCart5 from '../assets/cloud-computing.png'
import ServiceCart6 from '../assets/digital-marketing.png'
import ServiceCart7 from '../assets/It-consulting.png'
import ServiceCart8 from '../assets/trending-tech.png'
// import ServiceCart9 from '../assets/ServicePageCart9.png'
const Service = () => {

  const cardsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slideIn');
          } else {
            entry.target.classList.remove('animate-slideIn');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const cards = cardsRef.current;
    if (cards) {
      observer.observe(cards);
    }

    return () => {
      if (cards) {
        observer.unobserve(cards);
      }
    };
  }, []);
  return (
    <div className="bg-gray-100 relative">
      <div className="flex justify-start h-[300px] bg-[#c3422e] text-white p-10 relative">
        <div className="w-full">
          <h2 className="text-4xl font-bold text-left">What We Do</h2>
          <div className="mt-3 h-[2px] bg-white w-[150px]"></div> {/* Underline */}
          <div className="mt-[10px] text-[17px]">
            <h6>Transforming your business processes for the digital future</h6>
          </div>
        </div>
      </div>

      <div className="flex justify-start h-screen bg-[#C1C1C1] text-white relative ">
        <div className="w-full"></div>
      </div>

      <div
        ref={cardsRef}
        className="absolute inset-x-0 top-[21%] transform -translate-y-1/2 opacity-0 transition-opacity duration-500"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-10">
          <div className="bg-white p-6 rounded-lg shadow-lg h-[300px]">
            <img src={ServiceCart1} alt="" className='h-[80px] mb-[10px]' />

            <h3 className="text-xl font-semibold mb-1 text-[#df5f22]">Custom Development</h3>
            <p className="text-gray-700">We deliver web, mobile, and desktop software solutions tailored to your business processes across all verticals.</p>
            <div className='border border-black rounded-full p-1 inline-flex items-center justify-center mt-[10px] ml-[210px]'>
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg h-[300px]">
            <img src={ServiceCart2} alt="" className='h-[80px] mb-[10px]' />
            <h3 className="text-xl font-semibold mb-1 text-[#df5f22]">Blockchain Development</h3>
            <p className="text-gray-700">We design solutions like smart contracts, DEXs, DeFi, NFTs, gamification, etc., based on blockchain technology.</p>
            <div className='border border-black rounded-full p-1 inline-flex items-center justify-center mt-[10px] ml-[210px]'>
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg h-[300px]">
            <img src={ServiceCart3} alt="" className='h-[80px] mb-[10px] w-[100px]' />
            <h3 className="text-xl font-semibold mb-1 text-[#df5f22]">Game Development</h3>
            <p className="text-gray-700">We develop pixel-perfect games with future-proof architecture and high resolution, using the latest technologies.</p>
            <div className='border border-black rounded-full p-1 inline-flex items-center justify-center mt-[10px] ml-[210px]'>
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg h-[300px] ">
            <img src={ServiceCart4} alt="" className='h-[80px] mb-[10px] ' />
            <h3 className="text-xl font-semibold mb-1 text-[#df5f22]">Dedicated Teams</h3>
            <p className="text-gray-700">We provide dedicated resources and staff augmentation to enterprises worldwide for IT support and success.</p>
            <div className='border border-black rounded-full p-1 inline-flex items-center justify-center mt-[10px] ml-[210px]'>
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg h-[300px]">
            <img src={ServiceCart5} alt="" className='h-[80px] mb-[10px]' />
            <h3 className="text-xl font-semibold mb-1 text-[#df5f22]">Cloud Services</h3>
            <p className="text-gray-700">We solve modern business challenges with a cloud-native approach towards enterprise-grade apps and services.</p>
            <div className='border border-black rounded-full p-1 inline-flex items-center justify-center mt-[10px] ml-[210px]'>
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg h-[300px]">
            <img src={ServiceCart6} alt="" className='h-[80px] mb-[10px]' />
            <h3 className="text-xl font-semibold mb-1 text-[#df5f22]">Digital Marketing</h3>
            <p className="text-gray-700">We craft, manage and publish interactive and engaging content to grow brands using data-driven strategies.</p>
            <div className='border border-black rounded-full p-1 inline-flex items-center justify-center mt-[10px] ml-[210px]'>
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg h-[300px]">
            <img src={ServiceCart7} alt="" className='h-[80px] mb-[10px]' />
            <h3 className="text-xl font-semibold mb-1 text-[#df5f22]">IT Consultancy</h3>
            <p className="text-gray-700">We craft, manage and publish interactive and engaging content to grow brands using data-driven strategies.</p>
            <div className='border border-black rounded-full p-1 inline-flex items-center justify-center mt-[10px] ml-[210px]'>
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg h-[300px]">
            <img src={ServiceCart8} alt="" className='h-[80px] mb-[10px]' />
            <h3 className="text-xl font-semibold mb-1 text-[#df5f22]">Trending Technologies</h3>
            <p className="text-gray-700">We craft, manage and publish interactive and engaging content to grow brands using data-driven strategies.</p>
            <div className='border border-black rounded-full p-1 inline-flex items-center justify-center mt-[10px] ml-[210px]'>
              <i className="fa-solid fa-arrow-right"></i>
            </div></div>
        </div>
      </div>
    </div>


  );
};


export default Service

