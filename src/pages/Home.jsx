// import React from 'react';
// import backgroundImage from "../assets/background_image1.png";
import sideImage from "../assets/img2.png";
import AboutUs from "../components/AboutUs";
import ServicePage from "../components/ServicePage";
// import PortfolioPage from '../components/PortfolioPage';
import GamingPageContent from "../components/GamingPageContent";
import WhoWeAre from "../components/WhoWeAre";
import { CommonBtn } from "../Constant/Button";
import SliderComponent from "../components/Silder/CustomerReview";

// import ContactDetailsPage from '../components/Footer/ContactDetailsPage';

const Home = () => {
  return (
    <>
      {/* hero Section */}
      {/* <div className='w-full min-h-[600px] flex' style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}> */}
      {/* <div className='w-full min-h-[600px]'>
        
      <video 
    autoPlay 
    loop 
    muted 
    playsInline
    // className="absolute w-full object-cover"
  >
       
       <div className='container mx-auto flex flex-col md:flex-row'>
          <div className="md:w-1/2 flex items-center justify-center">
            <div className="flex flex-col md:ml-8">
              <p className="text-white text-base md:text-lg lg:text-xl font-normal md:font-medium mb-4 md:mb-8 pl-[4px]">Introducing new technology</p>
              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-[70px] md:w-[493px]">EASY <span className='text-[#FB5C46]'>DESIGN EASY</span> WEBSITE</h1>
              <p className="text-white text-base md:text-lg lg:text-xl font-normal md:font-medium mb-4 md:mb-8 pl-[4px]">User interface is very important these days</p>
              <div className="w-full max-w-[200px] flex flex-col md:flex-row mt-4 ml-2 md:ml-0">
                <button className="md:mr-4 mb-2 md:mb-0 bg-[#FB5C46] hover:bg-[#FB5C46] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  Subscribe
                </button>
                <button className="bg-white hover:bg-[#FB5C46] text-black text-[18px] py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  Demo
                </button>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 flex items-center justify-center md:flex-col">
            <img src={sideImage} alt="Description" className="w-full max-w-[470px] h-auto mt-[100px]" />
          </div>
        </div>
    <source src="/videos/bgvideo.mp4" type="video/mp4" />
    <source src="/videos/bgvideo.webm" type="video/webm" />
  </video>
    
      </div> */}

      <div className="relative w-full min-h-[600px]">
        {/* Background Video Container */}
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/bgvideo.mp4" type="video/mp4" />
            <source src="/videos/bgvideo.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
          {/* Overlay (Dark Background) */}
          <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
        </div>

        {/* Foreground Content */}
        <div className="relative container mx-auto flex flex-col md:flex-row min-h-[600px] z-10">
          <div className="md:w-1/2 flex items-center justify-center">
            <div className="flex flex-col md:ml-8 p-6 rounded-lg">
              <p className="text-white text-base md:text-lg lg:text-xl font-normal md:font-medium mb-4 md:mb-8 pl-[4px]">
                Introducing new technology
              </p>
              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-[70px] md:w-[493px]">
                EASY <span className="text-primary">DESIGN EASY</span> WEBSITE
              </h1>
              <p className="text-white text-base md:text-lg lg:text-xl font-normal md:font-medium mb-4 md:mb-8 pl-[4px]">
                We Turn Ideas Into Reality
              </p>
              <div className="w-full max-w-[400px] flex flex-col md:flex-row mt-4 ml-2 md:ml-0">
                <CommonBtn
                  className="md:mr-4 mb-2 md:mb-0 bg-primary hover:bg-primary text-white  py-2.5 px-8 rounded focus:outline-none focus:shadow-outline"
                  title=" Subscribe"
                />

                <CommonBtn
                  className="bg-white  text-black text-[18px] py-2.5 px-8 rounded  focus:outline-none focus:shadow-outline"
                  title="Demo"
                />

                {/* hover:bg-[#FB5C46] */}
              </div>
            </div>
          </div>
          <div className="md:w-1/2 flex items-center justify-center md:flex-col">
            <img
              src={sideImage}
              alt="Description"
              className="w-full max-w-[470px] h-auto mt-[100px]"
            />
          </div>
        </div>
      </div>
      {/* hero section  */}

      <AboutUs />
      <div className="mt-6 mb-6">
        <WhoWeAre />
      </div>
      <div className="md:mt-10 md:mb-20 my-8">
      <div className="container mx-auto ">
        <h1 className="md:text-4xl text-center mb-10 text-primary text-xl font-bold">Our Customer Review</h1>
      </div>
        <SliderComponent />
      </div>
      <ServicePage />
      {/* <PortfolioPage/> */}
      {/* <GamingPageContent/> */}
      {/* <ContactDetailsPage/> */}
    </>
  );
};

export default Home;
