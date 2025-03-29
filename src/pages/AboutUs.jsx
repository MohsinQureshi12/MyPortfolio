import AboutUsBg from "../assets/AboutUsImage.svg";
import { PiUsersThreeFill } from "react-icons/pi";
import { FaRecycle } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import aboutUsImage2 from "../assets/aboutusimage2.jpg";
import ourApproch from "../assets/ourApproch.jpeg";
const AboutUs = () => {
  return (
    <div className="">
      {/* <div
        className="w-full min-h-[600px] flex items-center justify-center relative mb-[20px]"
        style={{
          backgroundImage: `url(${AboutUsBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div
          className="relative z-10 text-[#0E315A] text-[50px] font-bold "
          data-aos="flip-left"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
        >
          About Us
        </div>
      </div> */}
      <div
        className="w-full min-h-[400px] md:min-h-[500px] lg:min-h-[600px] flex items-center justify-center relative mb-5"
        style={{
          backgroundImage: `url(${AboutUsBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Text */}
        <div
          className="relative z-10 text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center"
          data-aos="flip-left"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
        >
          About Us
        </div>
      </div>

      <div className="flex mb-40 ">
        <div className=" container mx-auto px-4">
          <div className="flex justify-center flex-col md:flex-row">
            <div className="md:w-[500px] text-center mt-[80px]">
              <div className="md:text-[25px] text-lg text-center p-4 text-bold text-[#0E315A]">
                <p>
                  Perseverance, courage, and dedication are the essences of an
                  entrepreneurial mindset to achieve your SMART goals (Mohsin
                  Qureshi, CEO)
                </p>
              </div>
            </div>
            <div className="md:w-[500px] h-[200px] mb-[10px] ">
              <img
                src={AboutUsBg}
                alt=""
                className="h-[300px] mb-[10px] w-[500px] ml-[20px] mt-[20px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="h-[300px] bg-[#F8F8F9]">
        <div className="flex min-h-screen">
          <div className="mx-auto">
            <div className="w-[1000px] h-[250px] flex flex-col md:flex-row items-center justify-between space-y md:space-y-0 md:space-x-4 relative bottom-[21%]">
              <div className="text-center w-full md:w-[30%] h-[300px] border border-gray-200 shadow-lg p-4 rounded-lg flex flex-col bg-[#F5F5F8] ">
                <div className="flex justify-center items-center">
                  <FaRecycle className="w-[60px] h-[40px] mb-[10px] mt-[10px] text-[#0E315A]" />
                </div>
                <h1 className="text-[20px] font-bold text-[#0E315A] text-center">
                  Core Values
                </h1>
                <p className="text-center mt-[20px] text-[#0E315A]">
                  Prioritize customer’s consent. Commitment and consistency.
                  Take Ownership of personal accountability, where our employees
                  possess the freedom and the courage to take initiatives.
                  Aligned with your business goals.
                </p>
              </div>

              <div className="text-center w-full md:w-[30%] h-[300px] border border-gray-200 shadow-lg p-4 rounded-lg flex flex-col bg-[#F5F5F8] ">
                <div className="flex justify-center items-center ">
                  <PiUsersThreeFill className="w-[60px] h-[40px] mb-[10px] mt-[10px] text-[#0E315A]" />
                </div>
                <h1 className="text-[20px] font-bold text-[#0E315A] text-center">
                  Eco-Friendly Environment
                </h1>
                <p className="text-center mt-[20px] text-[#0E315A]">
                  We have created an eco-friendly business environment. Since
                  day one, we have been embracing eco-friendly technology. We
                  aim for a paperless workplace and solar electricity.
                </p>
              </div>

              <div className="text-center w-full md:w-[30%] h-[300px] border border-gray-200 shadow-lg p-4 rounded-lg flex flex-col bg-[#F5F5F8] ">
                <div className="flex justify-center items-center ">
                  <FaHistory className="w-[60px] h-[40px] mb-[10px] mt-[10px] text-[#0E315A]" />
                </div>
                <h1 className="text-[20px] font-bold text-[#0E315A] text-center">
                  Our Story
                </h1>
                <p className="text-center mt-[20px] text-[#0E315A]">
                  We perform the best practices to move the idea to the next
                  level. We guarantee a 100% confidence level because we
                  strongly believe in what Warren Buffet said, it takes 20 years
                  to build a reputation and five minutes to ruin it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="md:bg-[#F8F8F9] flex justify-center items-center py-16 h-auto   ">
        <div className="w-full max-w-[1200px] px-4  ">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             <div className="text-center border border-gray-200 shadow-lg p-6 rounded-lg flex flex-col items-center bg-white">
              <FaRecycle className="w-12 h-12 mb-4 text-[#0E315A]" />
              <h1 className="text-lg font-bold text-[#0E315A]">Core Values</h1>
              <p className="text-sm text-[#0E315A] mt-2">
                Prioritize customer’s consent. Commitment and consistency. Take
                ownership of personal accountability, where our employees
                possess the freedom and the courage to take initiatives. Aligned
                with your business goals.
              </p>
            </div>

             <div className="text-center border border-gray-200 shadow-lg p-6 rounded-lg flex flex-col items-center bg-white">
              <PiUsersThreeFill className="w-12 h-12 mb-4 text-[#0E315A]" />
              <h1 className="text-lg font-bold text-[#0E315A]">
                Eco-Friendly Environment
              </h1>
              <p className="text-sm text-[#0E315A] mt-2">
                We have created an eco-friendly business environment. Since day
                one, we have been embracing eco-friendly technology. We aim for
                a paperless workplace and solar electricity.
              </p>
            </div>

             <div className="text-center border border-gray-200 shadow-lg p-6 rounded-lg flex flex-col items-center bg-white">
              <FaHistory className="w-12 h-12 mb-4 text-[#0E315A]" />
              <h1 className="text-lg font-bold text-[#0E315A]">Our Story</h1>
              <p className="text-sm text-[#0E315A] mt-2">
                We perform the best practices to move the idea to the next
                level. We guarantee a 100% confidence level because we strongly
                believe in what Warren Buffet said: it takes 20 years to build a
                reputation and five minutes to ruin it.
              </p>
            </div>
          </div>
        </div>
      </div> */}
      <div className="bg-[#F8F8F9] flex justify-center items-center  py-16 ">
        <div className="w-full max-w-[1200px] px-4  ">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Core Values Card */}
            <div
              className="text-center border border-gray-200 shadow-lg p-6 rounded-lg flex flex-col items-center bg-white 
                          transition-transform duration-500 ease-in-out hover:scale-105 hover:-translate-y-2"
            >
              <FaRecycle className="w-12 h-12 mb-4 text-[#0E315A]" />
              <h1 className="text-lg font-bold text-[#0E315A]">Core Values</h1>
              <p className="text-sm text-[#0E315A] mt-2">
                Prioritize customer’s consent. Commitment and consistency. Take
                ownership of personal accountability, where our employees
                possess the freedom and the courage to take initiatives. Aligned
                with your business goals.
              </p>
            </div>

            {/* Eco-Friendly Environment Card */}
            <div
              className="text-center border border-gray-200 shadow-lg p-6 rounded-lg flex flex-col items-center bg-white 
                          transition-transform duration-500 ease-in-out hover:scale-105 hover:-translate-y-2"
            >
              <PiUsersThreeFill className="w-12 h-12 mb-4 text-[#0E315A]" />
              <h1 className="text-lg font-bold text-[#0E315A]">
                Eco-Friendly Environment
              </h1>
              <p className="text-sm text-[#0E315A] mt-2">
                We have created an eco-friendly business environment. Since day
                one, we have been embracing eco-friendly technology. We aim for
                a paperless workplace and solar electricity.
              </p>
            </div>

            {/* Our Story Card */}
            <div
              className="text-center border border-gray-200 shadow-lg p-6 rounded-lg flex flex-col items-center bg-white 
                          transition-transform duration-500 ease-in-out hover:scale-105 hover:-translate-y-2"
            >
              <FaHistory className="w-12 h-12 mb-4 text-[#0E315A]" />
              <h1 className="text-lg font-bold text-[#0E315A]">Our Story</h1>
              <p className="text-sm text-[#0E315A] mt-2">
                We perform the best practices to move the idea to the next
                level. We guarantee a 100% confidence level because we strongly
                believe in what Warren Buffet said: it takes 20 years to build a
                reputation and five minutes to ruin it.
              </p>
            </div>
          </div>
        </div>
      </div>

   

      {/* <div className="h-[700px] bg-black">
        <div className="flex min-h-screen">
          <div className="mx-auto">
            <div className="text-white font-bold text-[30px] text-center h-[60px] mt-[10px]">
              <h1>About-Us</h1>
            </div>

            <div className="flex row justify-content mb-[80px]">
              <div className="w-[500px] text-center">
                <div className="text-[16px] text-left text-white mt-[10px]">
                  <p>
                    Street Coders Solutions is one of the quickest developing
                    innovation company comprised of over 15 years of prepared IT
                    engineers and experts. We likewise helped numerous
                    organizations develop from the good to the best and from the
                    beginning stage to the top. Our main goal is not just to
                    provide IT consultancy, however, to provide an intelligent
                    and financially savvy system utilizing cutting-edge
                    innovations. We are an enthusiastic group of guaranteed
                    experts with demonstrated programming advancement
                    experience. We are glad to have a serious group that can
                    convey results as per the interest and desires of the
                    client. Because of our best client support, we have a 98
                    percent satisfaction level from our clients. We are
                    providing solutions based on state-of-the-art technologies
                    in web and mobile application development. We are a
                    full-cycle software development firm with multi-dimensional
                    expertise from developing a complete platform to improving
                    existing technologies. We value our clients and prioritize
                    their requirements by providing services in a foresight
                    manner with the ability to turn their concept into reality.
                    We have been providing services to various companies to
                    achieve their goals with influential and effective business
                    solutions. Our secure and reliable solutions created our
                    mark among renowned brands worldwide.
                  </p>
                </div>
              </div>
              <div className="w-[500px] h-[200px] mb-[10px] mt-[70px] ">
                <img
                  src={aboutUsImage2}
                  alt=""
                  className="h-[300px] mb-[10px] w-[500px] ml-[20px] mt-[20px] ml-[45px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="h-auto bg-black py-12">
        <div className="flex min-h-screen items-center justify-center">
          <div className="mx-auto px-4 w-full max-w-[1100px]">
            <div className="text-white font-bold text-[30px] text-center h-[60px] mb-6">
              <h1>About Us</h1>
            </div>

            <div className="flex flex-wrap items-center justify-center md:justify-between gap-6">
              {/* Text Content */}
              <div className="w-full md:w-[48%] text-center">
                <div className="text-[16px] text-left text-white">
                  <p>
                    Street Coders Solutions is one of the quickest developing
                    innovation company comprised of over 15 years of prepared IT
                    engineers and experts. We likewise helped numerous
                    organizations develop from the good to the best and from the
                    beginning stage to the top. Our main goal is not just to
                    provide IT consultancy, however, to provide an intelligent
                    and financially savvy system utilizing cutting-edge
                    innovations. We are an enthusiastic team of certified
                    professionals with proven software development experience.
                    <br />
                    <br />
                    We are a full-cycle software development firm with
                    multi-dimensional expertise, from developing a complete
                    platform to improving existing technologies. Our secure and
                    reliable solutions have established our mark among renowned
                    brands worldwide.
                  </p>
                </div>
              </div>

              {/* Image Section */}
              <div className="w-full md:w-[48%] flex justify-center">
                <img
                  src={aboutUsImage2}
                  alt="About Us"
                  className="h-auto max-h-[300px] w-full max-w-[500px] rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="h-[700px] bg-[#051B34]">
        <div className="flex min-h-screen">
          <div className="mx-auto">
            <div className="text-white font-bold text-[30px] text-center h-[60px] mt-[10px]">
              <h1>Our-Approch</h1>
            </div>

            <div className="flex row justify-content mb-[80px]">
              <div className="w-[500px] h-[200px] mt-[75px]">
                <img src={ourApproch} alt="" className="h-[300px] " />
              </div>
              <div className="w-[500px] text-center">
                <div className="text-[16px] text-left text-white mt-[10px] ml-[50px]">
                  <p>
                    Street Coders Solutions Codility Solutions applies the
                    expertise acquired by years of experience dealing with
                    software development projects. Our strategic goal is to be
                    the leading provider of services and IT solutions. We
                    believe that integrity and authenticity build enduring
                    relationships. Our approach to growth derives from our
                    belief that the economic interest of the consumer is ours
                    and we commit to our utmost efforts to fulfill our
                    customers’ most ambitious aspirations. In any engagement we
                    pursue, we bring out a mix of our passion for new advanced
                    technology and realistic business processes. There are two
                    developmental approaches we follow: Software Development
                    Life Cycle (SDLC) Developing collaboratively We take
                    responsibility from end to end in the event of complete
                    lifecycle growth-research, design, development, testing,
                    implementation, and integration of systems. We partner with
                    the client team in the integrated development model to
                    evaluate, plan, build, validate, implement, and implement
                    the framework.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="h-auto bg-[#051B34] py-12">
        <div className="flex min-h-screen items-center justify-center">
          <div className="mx-auto px-4 w-full max-w-[1100px]">
            <div className="text-white font-bold text-[30px] text-center h-[60px] mb-6">
              <h1>Our Approach</h1>
            </div>

            <div className="flex flex-wrap items-center justify-center md:justify-between gap-6">
              {/* Image Section */}
              <div className="w-full md:w-[48%] flex justify-center">
                <img
                  src={ourApproch}
                  alt="Our Approach"
                  className="h-auto max-h-[300px] w-full max-w-[500px] rounded-lg"
                />
              </div>

              {/* Text Content */}
              <div className="w-full md:w-[48%] text-center">
                <div className="text-[16px] text-left text-white">
                  <p>
                    Street Coders Solutions Codility Solutions applies the
                    expertise acquired by years of experience dealing with
                    software development projects. Our strategic goal is to be
                    the leading provider of services and IT solutions. We
                    believe that integrity and authenticity build enduring
                    relationships. Our approach to growth derives from our
                    belief that the economic interest of the consumer is ours.
                    <br />
                    <br />
                    In any engagement we pursue, we bring out a mix of our
                    passion for new advanced technology and realistic business
                    processes. We take responsibility from end to end in the
                    event of complete lifecycle growth—research, design,
                    development, testing, implementation, and integration of
                    systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
