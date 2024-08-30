// import React from 'react';
import backgroundImage from "../assets/background_image1.png";
import sideImage from '../assets/img2.png';
import AboutUs from '../components/AboutUs';
import ServicePage from '../components/ServicePage';
import PortfolioPage from '../components/PortfolioPage';
import GamingPageContent from '../components/GamingPageContent';
// import ContactDetailsPage from '../components/Footer/ContactDetailsPage';

const Home = () => {
  return (
    <>
    {/* hero Section */}
      <div className='w-full min-h-[600px] flex' style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
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
      </div>
      {/* hero section  */}

      <AboutUs/>
      <ServicePage/>
      <PortfolioPage/>
      <GamingPageContent/>
      {/* <ContactDetailsPage/> */}
    </>
    
  );
};

export default Home;
