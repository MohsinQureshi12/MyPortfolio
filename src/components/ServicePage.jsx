import ServiceBgImage from '../assets/aboutUs_background.jpg'
import ServiceImages from '../assets/logoImages.png'
const ServicePage = () => {
  return (
    <div className='w-full flex justify-center items-center min-h-screen' style={{ backgroundImage: `url(${ServiceBgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="container min-h-[600px] flex flex-col items-center">
        <div className="mb-6 mt-4">
          <h1 className="text-3xl font-bold text-white">Our Core Technologies</h1>
        </div>
        <div className="text-center mb-6">
          <p className="text-white md:w-[674px] w-[370px]  ">
            MustTech works under various modern technologies for effective, scalable, and future-proof custom software development. Ranging from iOT to AI and even VR, we have had our fair share of expertise in all productive technological projects. Smart factory, smart hospital, smart farms and even iOT security system are part of the iOT world we have explored. Virtual agents, risk assessment and even speech recognition for navigation are part of some projects we have covered under the AI category.

          </p>
        </div>
        <div className=''>
          <img src={ServiceImages} alt="ServiceImages" className="h-80" />
        </div>


      </div>
    </div>
  )
}

export default ServicePage