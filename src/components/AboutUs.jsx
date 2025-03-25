import ArrowLogo from "../assets/arrowsign.png";
import AboutUsBg from "../assets/aboutUs_background.jpg";
import UIUX from "../assets/icon1.png";
import WebDev from "../assets/icon2.png";
import GameDev from "../assets/icon3.png";
import BlockChainDev from "../assets/icon4.png";
import { AboutPageList } from "../Constant/aboutPage";

const AboutUs = () => {
  return (
    // <div className='w-full flex justify-center items-center min-h-screen' style={{ backgroundImage: `url(${AboutUsBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>

    <div className="w-full flex justify-center items-center ">
      {/* min-h-screen */}
      <div className=" min-h-[600px] flex flex-col items-center md:mt-4 mt-2">
        {/* container */}
        <div className="mb-6 md:mt-4 mt-4 ">
          <h1 className="text-3xl font-bold text-[#0E315A] ">What We Do</h1>
        </div>

        <div className="mb-6">
          <h1 className="text-3xl font-bold text-[#0E315A] md:text-center text-center ">
            We provide end-to-end Design and Development Solutions
          </h1>
        </div>
        <div className="text-center mb-4">
          <p className="text-[#0E315A]  md:w-[674px] w-[370px] ">
            Our aim is to transform your business process for a digital future.
            We provide dedicated resources and staff augmentation to enterprises
            worldwide for IT support and success. Our diligent team of
            developers and designers can produce bespoke projects as per your
            needs. Be it a simple project with minimal details or an indepth
            project with specific pointers,we have ve got you covered.
          </p>
        </div>
        <div className="mb-10 md:block hidden">
          <img src={ArrowLogo} alt="arrowlogo" className="w-8 h-20 mt-2" />
        </div>

        <div className="w-full flex flex-wrap justify-center md:justify-start gap-6 md:p-0 p-4">
          {AboutPageList?.map((item, index) => (
            <div
              key={index}
              className="w-full sm:w-[300px] h-[250px] rounded-lg shadow-md relative transition-transform duration-300 hover:-translate-y-2 overflow-hidden"
            >
              {/* Image Container - Fixed Inside the Div */}
              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-[80px] h-[80px] rounded-full  flex items-center justify-center">
                <img
                  className="w-[70px] h-[70px] object-contain rounded-full"
                  src={item?.image}
                  alt="UIUX"
                />
              </div>

              {/* Content */}
              <div className="text-center h-full flex flex-col  pt-20">
                <h1 className="text-xl font-bold mb-2 text-[20px] text-[#0E315A]">
                  {item?.title}
                </h1>
                <p className="text-[13px] text-[#0E315A] overflow-hidden text-ellipsis p-2">
                  {item?.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
