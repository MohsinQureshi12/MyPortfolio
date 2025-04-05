import React from "react";
// import contactPageImage from '../assets/contactpage.jpg'
import AboutUsBg from "../assets/AboutUsImage.svg";
const Contact = () => {
  return (
    <section>
      <div className="bg-gray-100 relative">
        <div className="flex flex-col md:flex-row justify-between items-center bg-[#0E315A] text-white p-6 md:p-10 gap-8">
          {/* Left Section - Text */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-left">
              Get In Touch
            </h2>
            <div className="mt-3 h-[2px] bg-white w-[150px] md:w-[200px]"></div>

            <div className="mt-4 text-base md:text-lg">
              <p>
                Transforming your business processes for the digital future.
                <br />
                Contact Us & You’ll Hear Back TODAY.
              </p>
            </div>

            {/* Icons */}
            <div className="flex space-x-4 mt-6">
              {["fa-bars", "fa-envelope", "fa-skype", "fa-linkedin"].map(
                (icon, index) => (
                  <div
                    key={index}
                    className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full border border-gray-400 hover:bg-white hover:text-[#0E315A] transition"
                  >
                    <i className={`fa-solid ${icon}`}></i>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <img
              src={AboutUsBg}
              alt="About Us"
              className="w-full max-w-[400px] md:max-w-[500px] h-auto rounded-lg shadow-md object-cover"
            />
          </div>
        </div>

       <div className="flex flex-col lg:flex-row justify-between h-auto lg:h-[700px] bg-[#0E315A] text-white p-6 lg:p-10 relative">
  {/* Left Section - Text */}
  <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">
      Get A Response Today
    </h2>
    <div className="mt-3 h-[2px] bg-white w-[200px] sm:w-[300px] md:w-[400px] lg:w-[450px]"></div> {/* Underline */}
    
    <div className="w-full mt-6   flex flex-col">
      <h2 className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-6    mt-4">
        CONTACT US
      </h2>
      
      {/* Full Name & Phone Number */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="w-full sm:w-1/2">
          <label className="block text-white text-sm sm:text-base font-bold mb-1" htmlFor="fullname">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
            id="fullname"
            type="text"
            placeholder="Enter your full name"
            required
          />
        </div>

        <div className="w-full sm:w-1/2">
          <label className="block text-white text-sm sm:text-base font-bold mb-1" htmlFor="phone">
            Contact Number <span className="text-red-500">*</span>
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
            id="phone"
            type="text"
            placeholder="Phone Number"
            required
          />
        </div>
      </div>

      {/* Message */}
      <div className="mt-4">
        <label className="block text-white text-sm sm:text-base font-bold mb-1" htmlFor="message">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 h-[100px]"
          id="message"
          placeholder="Enter your message"
          required
        ></textarea>
      </div>

      {/* Submit Button */}
      <div className="flex justify-start mt-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
          type="button"
        >
          Submit
        </button>
      </div>
    </div>
  </div>

  {/* Right Section - Image */}
 
</div>

      </div>
    </section>
  );
};

export default Contact;
