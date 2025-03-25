import ServiceBgImage from "../assets/aboutUs_background.jpg";
import ServiceImages from "../assets/logoImages.png";
const ServicePage = () => {
  return (
    // <div className='w-full flex justify-center items-center min-h-screen' style={{ backgroundImage: `url(${ServiceBgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
    // <div className="bg-black/50">
    //   <div
    //     className="w-full flex justify-center items-center min-h-screen"
    //     style={{ backgroundColor: "rgba(0, 0, 0, 0.60)" }}
    //   >
    //     <div className="container min-h-[600px] flex flex-col items-center">
    //       <div className="mb-6 mt-4">
    //         <h1 className="text-3xl font-bold text-white">
    //           Our Core Technologies
    //         </h1>
    //       </div>
    //       <div className="text-center mb-6">
    //         <p className="text-white md:w-[674px] w-[370px]  ">
    //           MustTech works under various modern technologies for effective,
    //           scalable, and future-proof custom software development. Ranging
    //           from iOT to AI and even VR, we have had our fair share of
    //           expertise in all productive technological projects. Smart factory,
    //           smart hospital, smart farms and even iOT security system are part
    //           of the iOT world we have explored. Virtual agents, risk assessment
    //           and even speech recognition for navigation are part of some
    //           projects we have covered under the AI category.
    //         </p>
    //       </div>
    //       <div className="">
    //         <img src={ServiceImages} alt="ServiceImages" className="h-80 " />
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="bg-black/50">
      <div
        className="w-full flex justify-center items-center  p-4 sm:p-8"
        // min-h-screen
        style={{ backgroundColor: "rgba(0, 0, 0, 0.60)" }}
      >
        <div className="container min-h-[600px] flex flex-col items-center">
          {/* Heading */}
          <div className="mb-6 mt-4 text-center">
            <h1 className="text-3xl font-bold text-white">
              Our Core Technologies
            </h1>
          </div>

          {/* Description */}
          <div className="text-center mb-6">
            <p className="text-white max-w-lg md:max-w-2xl px-2 sm:px-0 md:text-[18px] text-xl">
              MustTech works under various modern technologies for effective,
              scalable, and future-proof custom software development. Ranging
              from IoT to AI and even VR, we have had our fair share of
              expertise in all productive technological projects. Smart factory,
              smart hospital, smart farms, and even IoT security systems are
              part of the IoT world we have explored. Virtual agents, risk
              assessment, and even speech recognition for navigation are part of
              some projects we have covered under the AI category.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src={ServiceImages}
              alt="ServiceImages"
              className="w-full max-w-[500px] sm:max-w-[700px] h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
