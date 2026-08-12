
import { ArrowRight } from "lucide-react";
import { AboutPageList } from "../../Constant/aboutPage";
import { Link } from "react-router-dom";


export const CapabilitiesCompoent = () => {
  return (


    <div className="relative w-full flex justify-center items-center lg:py-20 py-10 bg-gradient-to-br from-white via-white to-primary/5 overflow-hidden">
      {/* Background Decorative Circles */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary opacity-10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary opacity-10 rounded-full blur-3xl translate-x-1/4 translate-y-1/4"></div>

      {/* min-h-screen */}
      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        {/*   flex flex-col items-center md:py-16 mt-2 */}
        <div >
          <p className='text-primary font-bold text-sm lg:text-start text-center uppercase '>Capabilities</p>
          <div className="flex lg:justify-between item-end lg:flex-row flex-col "> 
            <h1 className='lg:text-3xl text-lg  font-bold lg:text-start text-center text-black  lg:w-[50%]'>End-to-end engineering for the modern enterprise.</h1>

            <Link to="/service-page">
              <p className="flex gap-2 items-center mt-4 text-primary lg:justify-around justify-center text-base w-36 border border-primary rounded-full p-3">All Services <ArrowRight className="mt-1" size={20} /></p>
            </Link>

          </div>

        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full pt-8">
          {AboutPageList?.map((item, index) => (
            <div
              key={index}
              className="w-full cursor-pointer bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 hover:shadow-lg transition-shadow duration-300 flex flex-col items-start text-left"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-6">
                <img
                  className="w-6 h-6 object-contain filter brightness-0 invert"
                  src={item?.image}
                  alt={item?.title || "Icon"}
                />
              </div>

              {/* Content */}
              <h1 className="text-xl font-bold text-gray-900 mb-3">
                {item?.title}
              </h1>
              <p className="text-sm text-gray-500 leading-relaxed">
                {item?.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

