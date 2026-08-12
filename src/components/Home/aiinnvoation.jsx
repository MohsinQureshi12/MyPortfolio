import React from 'react';
import { Sparkles, Bot, LineChart, Cpu, ArrowRight } from 'lucide-react';
import robot from '../../../public/assets/image/robot.jpg'
import { Link } from 'react-router-dom';
const AiInnovation = () => {
  const features = [
    { name: 'AI Automation', icon: <Sparkles className="w-5 h-5 text-white" /> },
    { name: 'AI Agents', icon: <Bot className="w-5 h-5 text-white" /> },
    { name: 'Predictive Analytics', icon: <LineChart className="w-5 h-5 text-white" /> },
    { name: 'Computer Vision', icon: <Cpu className="w-5 h-5 text-white" /> },
  ];

  return (
    <section className="relative w-full bg-primary py-10 lg:py-20 overflow-hidden font-sans">
      {/* Background glow effects */}
      {/* <div className="absolute top-0 left-0 w-96 h-96 bg-primary opacity-10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary opacity-10 rounded-full blur-3xl translate-x-1/4 translate-y-1/4"></div> */}

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">

          {/* Left Content */}
          <div className="">
            <h3 className="text-white font-bold tracking-wider text-sm uppercase mb-4">
              AI Innovation
            </h3>
            <h2 className="lg:text-3xl text-lg font-bold text-white leading-tight mb-6">
              Turning Artificial Intelligence  <br className="hidden lg:block" />  Into Real Business Impact.
            </h2>
            <p className="text-white lg:text-base text-sm   mb-10 leading-relaxed ">
              We build AI-powered solutions using intelligent automation, machine learning, LLMs, computer vision, and predictive analytics to help businesses improve efficiency, make smarter decisions, and unlock new opportunities.            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4  border border-grey-dark rounded-2xl px-6 py-4  transition-all duration-300 cursor-auto"
                >
                  {feature.icon}
                  <span className="text-gray-200 text-sm font-semibold">{feature.name}</span>
                </div>
              ))}
            </div>

            {/* CTA Link */}
            <Link to="/service-page" className="inline-flex items-center text-white font-semibold hover:text-white transition-colors group border border-white  rounded-full p-3">
              Explore AI Services
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Right Image */}
          <div className="relative lg:ml-auto w-full max-w-lg mx-auto lg:mx-0">
            {/* Image Container with styling to match reference */}
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-primary-900/10 border border-gray-800/50 bg-[#0a1124]">
              <img
                src={robot}
                alt="AI Robot Technology"
                className="w-full h-auto aspect-[4/5] object-cover hover:scale-105 transition-transform duration-700"
              />
              {/* Overlay gradient to blend image nicely */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent mix-blend-overlay pointer-events-none"></div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AiInnovation;
