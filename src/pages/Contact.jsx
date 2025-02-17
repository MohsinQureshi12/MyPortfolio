import React from 'react'
// import contactPageImage from '../assets/contactpage.jpg'
import AboutUsBg from '../assets/AboutUsImage.svg'
const Contact = () => {
  return (
    <section>
      <div className="bg-gray-100 relative">
        <div className="flex justify-between  h-[500px] bg-[#0E315A] text-white p-10 relative">
          {/* Left Section - Text */}
          <div className="w-1/2">
            <h2 className="text-6xl font-bold text-left">Get In Touch</h2>
            <div className="mt-3 h-[2px] bg-white w-[200px]"></div> {/* Underline */}
            <div className="mt-[10px] text-[20px]">
              <h6>
                Transforming your business processes for the digital future
                <br />
                Contact Us & You’ll Hear Back TODAY.
              </h6>
            </div>

            <div className="flex space-x-4 mt-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-500">
                <i className="fa-solid fa-bars text-white-700"></i>

              </div>
              <div className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-500">
                <i className="fa-solid fa-envelope text-white-700"></i>

              </div>
              <div className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-500">
                <i className="fa-solid fa-skype text-white-700"></i>
              </div>
              <div className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-500">
                <i className="fa-solid fa-linkedin text-white-700"></i>

              </div>
            </div>

          </div>

          {/* Right Section - Image */}
          <div className="w-1/2 flex justify-end">
            <img
              src={AboutUsBg}
              alt="About Us"
              className="h-[450px] w-[500px] object-cover"
            />
          </div>
        </div>
        <div className="flex justify-between   h-[500px] bg-[#0E315A] text-white p-10 relative">
          {/* Left Section - Text */}
          <div className="w-1/2">
            <h2 className="text-6xl font-bold ">Get A Response Today</h2>
            <div className="mt-3 h-[2px] bg-white w-[450px]"></div> {/* Underline */}


            <div className='w-2/3 flex flex-col  '>
              <h2 className="text-white text-2xl font-bold mb-[24px] mt-[62px]">CONTACT US</h2>
              <div className="flex mb-2">
                <div className="mr-2 w-[175px]">
                  <label className="block text-white text-sm font-bold mb-1" htmlFor="fullname">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="fullname" type="text" placeholder="Enter your full name" required />
                </div>
                <div className="mr-2 w-[250px]">
                  <label className="block text-white text-sm font-bold mb-1" htmlFor="phone number">
                    Contact Number <span className="text-red-500">*</span>
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="fullname" type="text" placeholder="Phone Number" required />
                </div>
              </div>

              
              <div className="mb-1 w-[355px]">
                <label className="block text-white text-sm font-bold mb-1" htmlFor="message">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-[100px]" id="message" placeholder="Enter your message" required ></textarea>
              </div>
              <div className="flex justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                  Submit
                </button>
              </div>
            </div>



          </div>


        </div>
      </div>


    </section>
  )
}

export default Contact
