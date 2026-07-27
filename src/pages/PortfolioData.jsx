import PortfolioDataBg from "../../public/assets/image/portofolioDataBG.svg";

import Chowmil from "../../public/assets/image/chowmill.jpg";
const PortfolioData = () => {
  return (
    <section>
      <div
        className="w-full min-h-[50vh] flex items-center justify-center relative mb-5 p-4"
        style={{
          backgroundImage: `url(${PortfolioDataBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div
          className="relative z-10 text-white text-4xl md:text-5xl lg:text-6xl font-bold text-center"
          data-aos="flip-left"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
        >
          Our Portfolio
        </div>
      </div>

      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:px-10 mb-[20px] w-[90%] ml-[65px] ">
          <div className="p-6   shadow-lg h-[350px] border border-gray-300 rounded-md">
            <img
              src={Chowmil}
              alt=""
              className="h-[172px] mb-[10px] w-[360px]"
            />

            <h3 className="text-xl font-semibold mb-1 text-[#0E315A]  text-center mt-[18px]">
              Custom Development
            </h3>
            <p className="text-gray-700">
              We deliver web, mobile, and desktop software solutions tailored to
              your business processes across all verticals.
            </p>
           
          </div>

          <div className="p-6 rounded-lg shadow-lg h-[350px] border border-gray-300 rounded-md">
            <img
              src={Chowmil}
              alt=""
              className="h-[172px] mb-[10px] w-[360px]"
            />

            <h3 className="text-xl font-semibold mb-1 text-[#0E315A] text-center mt-[18px]">
              Custom Development
            </h3>
            <p className="text-gray-700">
              We deliver web, mobile, and desktop software solutions tailored to
              your business processes across all verticals.
            </p>
          
          </div>
          <div className="p-6 rounded-lg shadow-lg h-[350px] border border-gray-300 rounded-md">
            <img
              src={Chowmil}
              alt=""
              className="h-[172px] mb-[10px] w-[360px]"
            />

            <h3 className="text-xl font-semibold mb-1 text-[#0E315A] text-center mt-[18px]">
              Custom Development
            </h3>
            <p className="text-gray-700">
              We deliver web, mobile, and desktop software solutions tailored to
              your business processes across all verticals.
            </p>
            
          </div>

          <div className="p-6 rounded-lg shadow-lg h-[350px] border border-gray-300 rounded-md">
            <img
              src={Chowmil}
              alt=""
              className="h-[172px] mb-[10px] w-[360px]"
            />

            <h3 className="text-xl font-semibold mb-1 text-[#0E315A] text-center mt-[18px]">
              Custom Development
            </h3>
            <p className="text-gray-700">
              We deliver web, mobile, and desktop software solutions tailored to
              your business processes across all verticals.
            </p>
            
          </div>
          <div className="p-6 rounded-lg shadow-lg h-[350px] border border-gray-300 rounded-md">
            <img
              src={Chowmil}
              alt=""
              className="h-[172px] mb-[10px] w-[360px]"
            />

            <h3 className="text-xl font-semibold mb-1 text-[#0E315A] text-center mt-[18px]">
              Custom Development
            </h3>
            <p className="text-gray-700">
              We deliver web, mobile, and desktop software solutions tailored to
              your business processes across all verticals.
            </p>
            
          </div>
          <div className="p-6 rounded-lg shadow-lg h-[350px] border border-gray-300 rounded-md">
            <img
              src={Chowmil}
              alt=""
              className="h-[172px] mb-[10px] w-[360px]"
            />

            <h3 className="text-xl font-semibold mb-1 text-[#0E315A] text-center mt-[18px]">
              Custom Development
            </h3>
            <p className="text-gray-700">
              We deliver web, mobile, and desktop software solutions tailored to
              your business processes across all verticals.
            </p>
            
          </div>
        </div> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-16 w-full mx-auto mb-5 md:py-10 py-5">
          {Array(6)
            .fill("")
            .map((_, index) => (
              <div
                key={index}
                className="p-6 shadow-lg h-auto border border-gray-300 rounded-md"
              >
                <img
                  src={Chowmil}
                  alt="Portfolio Image"
                  className="h-[172px] w-full object-cover rounded-md mb-4"
                />
                <h3 className="text-lg md:text-xl font-semibold text-[#0E315A] text-center mt-3">
                  Custom Development
                </h3>
                <p className="text-gray-700 text-sm md:text-base text-center">
                  We deliver web, mobile, and desktop software solutions
                  tailored to your business processes across all verticals.
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioData;
