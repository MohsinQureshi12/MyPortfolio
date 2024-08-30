import AboutUsBg from '../assets/AboutUsImage.svg'
import { PiUsersThreeFill } from "react-icons/pi";
import { FaRecycle } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import aboutUsImage2 from '../assets/aboutusimage2.jpg'
import ourApproch from '../assets/ourApproch.jpeg'
const AboutUs = () => {
  return (
  <section>
    <div
  className="w-full min-h-[600px] flex items-center justify-center relative mb-[20px]"
  style={{
    backgroundImage: `url(${AboutUsBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  <div className="absolute inset-0 bg-black bg-opacity-50"></div>
  <div className="relative z-10 text-white text-[50px] font-bold "data-aos="flip-left"
     data-aos-offset="200"
     data-aos-easing="ease-in-sine">
About Us
  </div>
 
</div>

<div className="flex min-h-screen">
  <div className="mx-auto">


<div className='flex row justify-content mb-[80px]'>
<div className='w-[500px] text-center mt-[80px]'>

   <div className='text-[25px] text-center p-4 text-bold'>
   <p>Perseverance, courage, and dedication are the essences 
    of an entrepreneurial mindset to achieve your SMART goals (Mohsin Qureshi, CEO)</p>
   </div>
</div>
<div className='w-[500px] h-[200px] mb-[10px] '>
  <img src={AboutUsBg} alt="" className='h-[300px] mb-[10px] w-[500px] ml-[20px] mt-[20px]' />
</div>
</div>


  </div>
  </div>
  <div className='h-[300px] bg-[#F8F8F9]'>
  <div className="flex min-h-screen">
  <div className="mx-auto">
  <div className='w-[1000px] h-[250px] flex flex-col md:flex-row items-center justify-between space-y md:space-y-0 md:space-x-4 relative bottom-[21%]'>
  <div className="text-center w-full md:w-[30%] h-[300px] border border-gray-200 shadow-lg p-4 rounded-lg flex flex-col bg-[#F5F5F8] ">
  <div className='flex justify-center items-center'>
  <FaRecycle className='w-[60px] h-[40px] mb-[10px] mt-[10px]' />
</div>
    <h1 className="text-[20px] font-bold text-[#FF6600] text-center">Core Values</h1>
    <p className="text-center mt-[20px]">
      Prioritize customer’s consent. Commitment and consistency. Take Ownership of personal accountability, where our employees possess the freedom and the courage to take initiatives. Aligned with your business goals.
    </p>
  </div>

  <div className="text-center w-full md:w-[30%] h-[300px] border border-gray-200 shadow-lg p-4 rounded-lg flex flex-col bg-[#F5F5F8] ">

  <div className='flex justify-center items-center '>
  <PiUsersThreeFill className='w-[60px] h-[40px] mb-[10px] mt-[10px]' />
</div>
    <h1 className="text-[20px] font-bold text-[#FF6600] text-center">Eco-Friendly Environment</h1>
    <p className="text-center mt-[20px]">
    We have created an eco-friendly business environment. Since day one, we have been embracing eco-friendly technology. We aim for a paperless workplace and solar electricity.
    </p>
  </div>

  <div className="text-center w-full md:w-[30%] h-[300px] border border-gray-200 shadow-lg p-4 rounded-lg flex flex-col bg-[#F5F5F8] ">
    
  <div className='flex justify-center items-center '>
  <FaHistory className='w-[60px] h-[40px] mb-[10px] mt-[10px]' />
</div>
    <h1 className="text-[20px] font-bold text-[#FF6600] text-center">Our Story</h1>
    <p className="text-center mt-[20px]">
      We perform the best practices to move the idea to the next level. We guarantee a 100% confidence level because we strongly believe in what Warren Buffet said, it takes 20 years to build a reputation and five minutes to ruin it.
    </p>
  </div>
</div>

      </div>
</div>
</div>

<div className='h-[700px] bg-black'>
  <div className="flex min-h-screen">
  <div className="mx-auto">
  <div className='text-white font-bold text-[30px] text-center h-[60px] mt-[10px]'>
  <h1>About-Us</h1>
</div>



<div className='flex row justify-content mb-[80px]'>
<div className='w-[500px] text-center'>

   <div className='text-[16px] text-left text-white mt-[10px]'>
   <p>Street Coders Solutions is one of the quickest developing innovation company 
    comprised of over 15 years of prepared IT engineers and experts. We likewise helped numerous organizations
     develop from the good to the best and from the beginning stage to the top. Our main goal is not just to provide 
     IT consultancy, however, to provide an intelligent and financially savvy system utilizing cutting-edge 
     innovations. We are an enthusiastic group of guaranteed experts with demonstrated programming advancement 
     experience. We are glad to have a serious group that can convey results as per the interest and desires of 
     the client. Because of our best client support, we have a 98 percent satisfaction level from our clients.

We are providing solutions based on state-of-the-art technologies in web and mobile application development. 
We are a full-cycle software development firm with multi-dimensional expertise from developing a complete 
platform to improving existing technologies. We value our clients and prioritize their requirements by providing 
services in a foresight manner with the ability to turn their concept into reality. We have been providing services
 to various companies to achieve their goals with influential and effective business solutions.
 Our secure and reliable solutions created our mark among renowned brands worldwide.</p>
   </div>
</div>
<div className='w-[500px] h-[200px] mb-[10px] mt-[70px] '>
  <img src={aboutUsImage2} alt="" className='h-[300px] mb-[10px] w-[500px] ml-[20px] mt-[20px] ml-[45px]' />
</div>
</div> 


  </div>
</div>
</div>
  





  <div className='h-[700px] bg-[#051B34]'>
  <div className="flex min-h-screen">
  <div className="mx-auto">
  <div className='text-white font-bold text-[30px] text-center h-[60px] mt-[10px]'>
  <h1>Our-Approch</h1>
</div>



<div className='flex row justify-content mb-[80px]'>

<div className='w-[500px] h-[200px] mt-[75px]'>
  <img src={ourApproch} alt="" className='h-[300px] ' />
</div>
<div className='w-[500px] text-center'>
<div className='text-[16px] text-left text-white mt-[10px] ml-[50px]'>
   <p>Street Coders Solutions Codility Solutions applies the expertise acquired by 
    years of experience dealing with software development projects. Our strategic goal is 
    to be the leading provider of services and IT solutions. We believe that integrity and 
    authenticity build enduring relationships. Our approach to growth derives from our belief 
    that the economic interest of the consumer is ours and we commit to our utmost efforts to 
    fulfill our customers’ most ambitious aspirations. In any engagement we pursue, we bring out
     a mix of our passion for new advanced technology and realistic business processes.

    There are two developmental approaches we follow:

Software Development Life Cycle (SDLC)
Developing collaboratively

We take responsibility from end to end in the event of complete lifecycle growth-research, design, development, testing, implementation, and integration of systems. We partner with the client team in the integrated 
development model to evaluate, plan, build, validate, implement, and implement the framework.</p>
   </div>

</div>
</div> 


  </div>
</div>
</div>
  </section>
  )
}

export default AboutUs
