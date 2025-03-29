import { Link } from "react-router-dom";
import ContactPageBg from "../../assets/ContactPageBg.jpg";
import logo from "../../assets/Sclogoone.svg";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { CommonBtn } from "../../Constant/Button";

const ContactDetailsPage = () => {
  return (
    // <section>
    //     <div className>
    //         <img className='w-[192px] h-[49px] mt-[54px] ml-[44px]' src={logo} alt="" />
    //     </div>
    //     <div className='w-full flex flex-col md:flex-row justify-center items-center h-[400px] relative bg-black'>

    //         <div className='container flex flex-col md:flex-row h-full'>
    //             <div className='w-1/3 flex-col'>
    //                 <p className='w-[246px] text-[14px] mt-[22px] ml-[45px] text-white'>Mustech is the best web development
    //                     & Software Company</p>
    //                 <button className='w-[122px] h-[43px] bg-[#364C62] rounded-lg mt-[24px] ml-[44px] text-white'>Get a Quote</button>
    //                 <div className="flex flex-row ml-[44px] mt-[24px]">
    //                     <FaFacebook className="text-3xl text-[#364C62] mr-2 cursor-pointer hover:text-blue-500" />
    //                     <FaInstagram className="text-3xl text-[#364C62] mr-2 cursor-pointer hover:text-blue-500" />
    //                     <FaYoutube className="text-3xl text-[#364C62] mr-2 cursor-pointer hover:text-blue-500" />
    //                     <FaLinkedin className="text-3xl text-[#364C62] mr-2 cursor-pointer hover:text-blue-500" />
    //                     <FaTwitter className="text-3xl text-[#364C62] cursor-pointer hover:text-blue-500" />
    //                 </div>
    //             </div>
    //             <div className='w-1/3 flex-col'>
    //                 <h1 className='w-[67px] mt-[62px] ml-10 font-bold text-white mb-[24px]'>
    //                     Visit Us
    //                 </h1>
    //                 <div className='size-[200px] flex flex-col'>
    //                     <div className='flex flex-row justify-between text-white mb-2'>
    //                         <h1 className='font-bold text-[#FB5C46]'>Location:</h1>
    //                         <div>Lahore, Pakistan</div>
    //                     </div>
    //                     <div className='flex flex-row justify-between text-white mb-2'>
    //                         <h1 className='font-bold text-[#FB5C46]'>Email:</h1>
    //                         <div>abcd@gmail.com</div>
    //                     </div>
    //                     <div className='flex flex-row justify-between text-white mb-2'>
    //                         <h1 className='font-bold text-[#FB5C46]'>Phone:</h1>
    //                         <div><p className='text-left'>03009999000</p></div>
    //                     </div>
    //                 </div>
    //             </div>

    //             <div className='w-1/3 flex flex-col  '>
    //                 <h2 className="text-white text-2xl font-bold mb-[24px] mt-[62px]">CONTACT US</h2>
    //                 <div className="flex mb-2">
    //                     <div className="mr-2 w-[175px]">
    //                         <label className="block text-white text-sm font-bold mb-1" htmlFor="fullname">
    //                             Full Name <span className="text-red-500">*</span>
    //                         </label>
    //                         <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="fullname" type="text" placeholder="Enter your full name" required />
    //                     </div>
    //                     <div className="w-[175px]">
    //                         <label className="block text-white text-sm font-bold mb-1" htmlFor="phone">
    //                             Phone Number <span className="text-red-500">*</span>
    //                         </label>
    //                         <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="tel" placeholder="Enter Phone number" required />
    //                     </div>
    //                 </div>
    //                 <div className="mb-1 w-[355px]">
    //                     <label className="block text-white text-sm font-bold mb-1" htmlFor="message">
    //                         Message <span className="text-red-500">*</span>
    //                     </label>
    //                     <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-[100px]" id="message" placeholder="Enter your message" required ></textarea>
    //                 </div>
    //                 <div className="flex justify-between">
    //                     <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
    //                         Submit
    //                     </button>
    //                 </div>
    //             </div>

    //         </div>

    //     </div>
    // </section>
    // <section>
    //   <div className="w-full flex flex-col items-center bg-black py-8 relative">
    //     {/* Logo at the Top Center */}
    //     <div className="flex justify-center">
    //       <img
    //         className="w-[192px] h-[100px] mb-10"
    //         src={logo}
    //         alt="Street Coders Logo"
    //       />
    //     </div>
    //     {/* Main Content */}
    //     <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-4 sm:p-8">
    //       {/* Company */}
    //       <div className="flex flex-col text-center md:text-left">
    //         <h1 className="text-white font-bold mb-2">Company</h1>
    //         <div className="h-[2px] bg-white w-32 mx-auto md:mx-0"></div>
    //         <ul className="list-inside text-white mt-4 space-y-2">
    //           {[
    //             "Why Street Coders?",
    //             "Careers",
    //             "Hire Us",
    //             "Products",
    //             "Blog",
    //             "Make Payment",
    //             "Press Release",
    //           ].map((item, index) => (
    //             <li
    //               key={index}
    //               className="relative cursor-pointer transition-all duration-300 hover:text-gray-200 group pb-1 w-max"
    //             >
    //               {item}
    //               <span className="absolute left-0 bottom-0 h-[2px] bg-white transition-all duration-300 w-0 group-hover:w-full"></span>
    //             </li>
    //           ))}
    //         </ul>
    //       </div>

    //       {/* Services */}
    //       <div className="flex flex-col text-center md:text-left">
    //         <h1 className="text-white font-bold mb-2">Services</h1>
    //         <div className="h-[2px] bg-white w-32 mx-auto md:mx-0"></div>
    //         <ul className="list-inside text-white mt-4 space-y-2">
    //           {[
    //             "Web Development",
    //             "Mobile App Development",
    //             "Web & Graphics Designing",
    //             "Search Engine Optimization",
    //             "Desktop App Development",
    //             "Digital Marketing",
    //           ].map((item, index) => (
    //             <li
    //               key={index}
    //               className="relative cursor-pointer transition-all duration-300 hover:text-gray-200 group pb-1 w-max"
    //             >
    //               {item}
    //               <span className="absolute left-0 bottom-0 h-[2px] bg-white transition-all duration-300 w-0 group-hover:w-full"></span>
    //             </li>
    //           ))}
    //         </ul>
    //       </div>

    //       {/* Hire Dedicated Resources */}
    //       <div className="flex flex-col text-center md:text-left">
    //         <h2 className="text-white font-bold mb-2">
    //           Hire Dedicated Resources
    //         </h2>
    //         <div className="h-[2px] bg-white w-32 mx-auto md:mx-0"></div>
    //         <ul className="list-inside text-white mt-4 space-y-2">
    //           {[
    //             ".Net Developer",
    //             "Mobile Developer",
    //             "PHP Developer",
    //             "Front-End Developer",
    //             "Web & Graphics Designer",
    //             "Technical Resource Outsourcing",
    //           ].map((item, index) => (
    //             <li
    //               key={index}
    //               className="relative cursor-pointer transition-all duration-300 hover:text-gray-200 group pb-1 w-max"
    //             >
    //               {item}
    //               <span className="absolute left-0 bottom-0 h-[2px] bg-white transition-all duration-300 w-0 group-hover:w-full"></span>
    //             </li>
    //           ))}
    //         </ul>
    //       </div>

    //       {/* Contact */}
    //       <div className="flex flex-col text-center md:text-left">
    //         <h2 className="text-white font-bold mb-2">Contact</h2>
    //         <div className="h-[2px] bg-white w-32 mx-auto md:mx-0"></div>
    //         <ul className="list-inside text-white mt-4 space-y-2">
    //           {[
    //             "info@Scsolutions.com",
    //             "+92.3074453612",
    //             "Office # PCSIR Lahore",
    //             "Punjab Society, Lahore Pakistan",
    //             "Sharjah Media City",
    //             "Copyright 2025 Street Coders",
    //           ].map((item, index) => (
    //             <li
    //               key={index}
    //               className="relative cursor-pointer transition-all duration-300 hover:text-gray-300 group pb-1 w-max"
    //             >
    //               {item}
    //               <span className="absolute left-0 bottom-0 h-[2px] bg-white transition-all duration-300 w-0 group-hover:w-full"></span>
    //             </li>
    //           ))}
    //         </ul>

    //         {/* Contact Us Button */}
    //         <div className="mt-6">
    //           <a
    //             href="/contact"
    //             className="text-white py-2 px-4 rounded border border-white hover:bg-white hover:text-black transition"
    //           >
    //             Contact Us
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="mt-10 h-[2px] bg-white w-[1348px]"></div>{" "}
    //     {/* Underline */}
    //     <div className="flex justify-center md:justify-start mt-[24px] ml-11">
    //       <FaFacebook className="text-3xl text-[#364C62] mr-2 cursor-pointer hover:text-blue-500" />
    //       <FaInstagram className="text-3xl text-[#364C62] mr-2 cursor-pointer hover:text-blue-500" />
    //       <FaYoutube className="text-3xl text-[#364C62] mr-2 cursor-pointer hover:text-blue-500" />
    //       <FaLinkedin className="text-3xl text-[#364C62] mr-2 cursor-pointer hover:text-blue-500" />
    //       <FaTwitter className="text-3xl text-[#364C62] cursor-pointer hover:text-blue-500" />
    //     </div>
    //   </div>
    // </section>

    <section className="w-full bg-black py-8">
      <div className="container mx-auto px-4 sm:px-8 lg:px-10 flex flex-col items-center">
        <div className="flex justify-center mb-8">
          <img className="w-32 h-auto" src={logo} alt="Street Coders Logo" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8  md:text-left w-full">
          <div>
            <h1 className="text-white font-bold mb-2">Company</h1>
            <div className="h-[2px] bg-white w-24 sm:mx-auto md:mx-0"></div>

            <ul className="text-white mt-4 space-y-2">
              {[
                "Why Street Coders?",
                "Careers",
                "Hire Us",
                "Products",
                "Blog",
                "Make Payment",
                "Press Release",
              ].map((item, index) => (
                <li
                  key={index}
                  className="relative cursor-pointer transition-all duration-300 hover:text-gray-300 group pb-1 w-max"
                >
                  {item}
                  <span className="absolute left-0 bottom-0 h-[2px] bg-white transition-all duration-300 w-0 group-hover:w-full"></span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h1 className="text-white font-bold mb-2">Services</h1>
            <div className="h-[2px] bg-white w-24 sm:mx-auto md:mx-0"></div>

            <ul className="text-white mt-4 space-y-2">
              {[
                "Web Development",
                "Mobile App Development",
                "Web & Graphics Designing",
                "SEO",
                "Desktop Apps",
                "Digital Marketing",
              ].map((item, index) => (
                <li
                  key={index}
                  className="relative cursor-pointer transition-all duration-300 hover:text-gray-300 group pb-1 w-max"
                >
                  {item}
                  <span className="absolute left-0 bottom-0 h-[2px] bg-white transition-all duration-300 w-0 group-hover:w-full"></span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-white font-bold mb-2">
              Hire Dedicated Resources
            </h2>
            <div className="h-[2px] bg-white w-24 sm:mx-auto md:mx-0"></div>

            <ul className="text-white mt-4 space-y-2">
              {[
                ".Net Developer",
                "Mobile Developer",
                "PHP Developer",
                "Front-End Developer",
                "Web & Graphics Designer",
                "Technical Outsourcing",
              ].map((item, index) => (
                <li
                  key={index}
                  className="relative cursor-pointer transition-all duration-300 hover:text-gray-300 group pb-1 w-max"
                >
                  {item}
                  <span className="absolute left-0 bottom-0 h-[2px] bg-white transition-all duration-300 w-0 group-hover:w-full"></span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-white font-bold mb-2">Contact</h2>
            <div className="h-[2px] bg-white w-24 sm:mx-auto md:mx-0"></div>

            <ul className="text-white mt-4 space-y-2">
              {[
                "info@Scsolutions.com",
                "+92.3074453612",
                "PCSIR Lahore",
                "Punjab Society, Lahore",
                "Sharjah Media City",
                "© 2025 Street Coders",
              ].map((item, index) => (
                <li
                  key={index}
                  className="relative cursor-pointer transition-all duration-300 hover:text-gray-300 group pb-1 w-max"
                >
                  {item}
                  <span className="absolute left-0 bottom-0 h-[2px] bg-white transition-all duration-300 w-0 group-hover:w-full"></span>
                </li>
              ))}
            </ul>

            <div className="mt-5">
              <CommonBtn
                className="text-white border border-white py-2 px-4 rounded hover:bg-white hover:text-black transition"
                title="Contact Us"
                href="/contact"
              />

               
            </div>
          </div>
        </div>

        <div className="w-full h-[2px] bg-white my-8"></div>

        <div className="flex justify-center md:justify-start md:mt-6 mt-1 ">
          <FaFacebook className="md:text-3xl text-xl text-[#364C62] mr-2 cursor-pointer hover:text-blue-500" />
          <FaInstagram className="md:text-3xl text-xl text-[#364C62] mr-2 cursor-pointer hover:text-blue-500" />
          <FaYoutube className="md:text-3xl text-xl text-[#364C62] mr-2 cursor-pointer hover:text-blue-500" />
          <FaLinkedin className="md:text-3xl text-xl text-[#364C62] mr-2 cursor-pointer hover:text-blue-500" />
          <FaTwitter className="md:text-3xl text-xl text-[#364C62] cursor-pointer hover:text-blue-500" />
        </div>
      </div>
    </section>
  );
};

export default ContactDetailsPage;
