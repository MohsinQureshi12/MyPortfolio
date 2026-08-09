import React from 'react';
import { Trophy, Building2, Globe, Sparkles } from 'lucide-react';
import TestimonialCarousel from '../testimonal';

const OurClients = () => {
  const stats = [
    {
      icon: <Trophy className="w-5 h-5 text-primary" />,
      title: '50+',
      description: 'Projects Delivered'
    },
    {
      icon: <Building2 className="w-5 h-5 text-primary" />,
      title: '20',
      description: 'Organizations Served'
    },
    {
      icon: <Sparkles className="w-5 h-5 text-primary" />,
      title: 'Enterprise',
      description: 'Technology Partner'
    }
  ];

  return (
    <div className="bg-white py-16 lg:py-24 font-sans">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-12">
          <h3 className="text-primary font-bold tracking-wider text-sm uppercase mb-4">
            Our Clients
          </h3>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 tracking-tight">
            Trusted by Leading Organizations
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            Empowering government institutions, enterprises, educational organizations, security
            companies, logistics providers and growing businesses through innovative technology
            solutions.
          </p>
        </div>

        <div className="border border-gray-200 rounded-xl p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)] bg-white w-full overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-0 lg:divide-x divide-gray-100">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`flex items-center gap-4 ${index !== 0 ? 'lg:pl-8' : ''} ${index !== 3 ? 'lg:pr-8' : ''}`}
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                  {stat.icon}
                </div>
                <div className="flex flex-col">
                  <h4 className="text-[1.35rem] font-bold text-primary leading-tight mb-0.5">{stat.title}</h4>
                  <p className="text-[0.85rem] text-grey-light leading-tight">{stat.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <TestimonialCarousel />
    </div>
  );
};

export default OurClients;
