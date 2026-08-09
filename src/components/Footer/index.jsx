
import logo from "../../../public/assets/image/Sclogo.svg";
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
    <section className="w-full bg-black py-8">
      <div className="container mx-auto px-4 sm:px-8 lg:px-4 max-w-7xl flex flex-col items-center">
        <div className="flex justify-center mb-8">
          <img className="w-32 h-14" src={logo} alt="Street Coders Logo" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4  md:text-left   w-full">
          <div>
            <h1 className="text-white font-bold mb-2">Explore</h1>
            <div className="h-[2px] bg-white w-24 sm:mx-auto md:mx-0"></div>

            <ul className="text-white mt-4 space-y-2">
              {["Why Street Coders?", "Products", "Blog"].map((item, index) => (
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
            <h2 className="text-white font-bold mb-2">Contact</h2>
            <div className="h-[2px] bg-white w-24 sm:mx-auto md:mx-0"></div>

            <ul className="text-white mt-4 space-y-2">
              {["Contact Us ", , "Apply for job", "Project Inquiry"].map(
                (item, index) => (
                  <li
                    key={index}
                    className="relative cursor-pointer transition-all duration-300 hover:text-gray-300 group pb-1 w-max"
                  >
                    {item}
                    <span className="absolute left-0 bottom-0 h-[2px] bg-white transition-all duration-300 w-0 group-hover:w-full"></span>
                  </li>
                )
              )}
            </ul>
          </div>
          <div className=" ">
            <h1 className="text-white font-bold mb-2">Address</h1>
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
          </div>
          <div>
            <div>
              <h1 className="text-white font-bold mb-2">
                Shaping the future of technology
              </h1>
              <div className="h-[2px] bg-white w-24 sm:mx-auto md:mx-0"></div>
              <p className="text-white mt-4 space-y-2">
                Our mission is to become a true end-to-end Technology Solutions
                Company and add real value to our clients' business by
                delivering innovative products and services with superior
                technological know-how and reliable processes that execute
                flawlessly.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full h-[2px] bg-white my-8"></div>

        <div className="flex justify-center md:justify-start md:mt-6 mt-1 gap-4 ">
          <div className="   rounded flex items-center justify-center">
            <div className="border border-white hover:border-blue-500 p-3 rounded-full shadow-md">
              <FaFacebook className="md:text-2xl text-xl text-white cursor-pointer hover:text-blue-500" />
            </div>
          </div>
          <div className="   rounded flex items-center justify-center">
            <div className="border border-white hover:border-blue-500 p-3 rounded-full shadow-md">
            <FaInstagram className="md:text-2xl text-xl text-white   cursor-pointer hover:text-blue-500" />
            </div>
          </div>
          <div className="   rounded flex items-center justify-center">
            <div className="border border-white hover:border-blue-500 p-3 rounded-full shadow-md">
            <FaYoutube className="md:text-2xl text-xl text-white  cursor-pointer hover:text-blue-500" />
            </div>
          </div>
          
          <div className="   rounded flex items-center justify-center">
            <div className="border border-white hover:border-blue-500 p-3 rounded-full shadow-md">
            <FaLinkedin className="md:text-2xl text-xl text-white   cursor-pointer hover:text-blue-500" />
            </div>
          </div>
          <div className="   rounded flex items-center justify-center">
            <div className="border border-white hover:border-blue-500 p-3 rounded-full shadow-md">
            <FaTwitter className="md:text-2xl text-xl text-white cursor-pointer hover:text-blue-500" />
            </div>
          </div>
          
          
        </div>
      </div>
    </section>
  );
};

export default ContactDetailsPage;
