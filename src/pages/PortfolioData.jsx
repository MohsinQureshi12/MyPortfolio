import PortfolioDataBg from '../assets/portofolioDataBG.svg'
import Chowmil from '../assets/chowmill.jpg'
const PortfolioData = () => {
  return (
    <section>


<div
  className="w-full min-h-[600px] flex items-center justify-center relative mb-[20px]"
  style={{
    backgroundImage: `url(${PortfolioDataBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  <div className="absolute inset-0 bg-black bg-opacity-50"></div>
  <div className="relative z-10 text-white text-[50px] font-bold "data-aos="flip-left"
     data-aos-offset="200"
     data-aos-easing="ease-in-sine">
    Our Portfolio
  </div>
 
</div>


<div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500"
     >
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-10 mb-[20px] w-[90%] ml-[65px] ">


    <div className="p-6 rounded-lg shadow-lg h-[350px] border border-gray-300 rounded-md">
          <img src={Chowmil} alt="" className='h-[172px] mb-[10px] w-[360px]' />

          <h3 className="text-xl font-semibold mb-1 text-[#df5f22] text-center mt-[18px]">Custom Development</h3>
          <p className="text-gray-700">We deliver web, mobile, and desktop software solutions tailored to your business processes across all verticals.</p>
          {/* <div className='border border-black rounded-full p-1 inline-flex items-center justify-center mt-[10px] ml-[210px]'>
            <i className="fa-solid fa-arrow-right"></i>
          </div> */}
        </div>

        <div className="p-6 rounded-lg shadow-lg h-[350px] border border-gray-300 rounded-md">
          <img src={Chowmil} alt="" className='h-[172px] mb-[10px] w-[360px]' />

          <h3 className="text-xl font-semibold mb-1 text-[#df5f22] text-center mt-[18px]">Custom Development</h3>
          <p className="text-gray-700">We deliver web, mobile, and desktop software solutions tailored to your business processes across all verticals.</p>
          {/* <div className='border border-black rounded-full p-1 inline-flex items-center justify-center mt-[10px] ml-[210px]'>
            <i className="fa-solid fa-arrow-right"></i>
          </div> */}
        </div>
        <div className="p-6 rounded-lg shadow-lg h-[350px] border border-gray-300 rounded-md">
          <img src={Chowmil} alt="" className='h-[172px] mb-[10px] w-[360px]' />

          <h3 className="text-xl font-semibold mb-1 text-[#df5f22] text-center mt-[18px]">Custom Development</h3>
          <p className="text-gray-700">We deliver web, mobile, and desktop software solutions tailored to your business processes across all verticals.</p>
          {/* <div className='border border-black rounded-full p-1 inline-flex items-center justify-center mt-[10px] ml-[210px]'>
            <i className="fa-solid fa-arrow-right"></i>
          </div> */}
        </div>
        
        <div className="p-6 rounded-lg shadow-lg h-[350px] border border-gray-300 rounded-md">
          <img src={Chowmil} alt="" className='h-[172px] mb-[10px] w-[360px]' />

          <h3 className="text-xl font-semibold mb-1 text-[#df5f22] text-center mt-[18px]">Custom Development</h3>
          <p className="text-gray-700">We deliver web, mobile, and desktop software solutions tailored to your business processes across all verticals.</p>
          {/* <div className='border border-black rounded-full p-1 inline-flex items-center justify-center mt-[10px] ml-[210px]'>
            <i className="fa-solid fa-arrow-right"></i>
          </div> */}
        </div>
        <div className="p-6 rounded-lg shadow-lg h-[350px] border border-gray-300 rounded-md">
          <img src={Chowmil} alt="" className='h-[172px] mb-[10px] w-[360px]' />

          <h3 className="text-xl font-semibold mb-1 text-[#df5f22] text-center mt-[18px]">Custom Development</h3>
          <p className="text-gray-700">We deliver web, mobile, and desktop software solutions tailored to your business processes across all verticals.</p>
          {/* <div className='border border-black rounded-full p-1 inline-flex items-center justify-center mt-[10px] ml-[210px]'>
            <i className="fa-solid fa-arrow-right"></i>
          </div> */}
        </div>
        <div className="p-6 rounded-lg shadow-lg h-[350px] border border-gray-300 rounded-md">
          <img src={Chowmil} alt="" className='h-[172px] mb-[10px] w-[360px]' />

          <h3 className="text-xl font-semibold mb-1 text-[#df5f22] text-center mt-[18px]">Custom Development</h3>
          <p className="text-gray-700">We deliver web, mobile, and desktop software solutions tailored to your business processes across all verticals.</p>
          {/* <div className='border border-black rounded-full p-1 inline-flex items-center justify-center mt-[10px] ml-[210px]'>
            <i className="fa-solid fa-arrow-right"></i>
          </div> */}
        </div>
</div>
</div>

    </section>

  )
}

export default PortfolioData
