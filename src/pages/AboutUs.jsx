import AboutUsBg from "../../public/assets/image/AboutUsImage.svg";
import { PiUsersThreeFill } from "react-icons/pi";
import { FaRecycle } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import aboutUsImage2 from "../../public/assets/image/aboutusimage2.jpg";
import ourApproch from "../../public/assets/image/ourApproch.jpeg";
import CTASection from "../components/home/ctasection";
import AutoCounter from "../hooks/CounterSection";
const AboutUs = () => {
  return (
    <div className="">
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

      <div className="flex md:mb-40 md:mt-32 my-20">
        <div className=" container mx-auto px-4">
          <div className="flex justify-center flex-col md:flex-row">
            <div className="md:w-[500px] text-center md:pt-20 pt-10">
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

      <div className="bg-[#F8F8F9] flex justify-center items-center  md:py-32  py-16">
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

      <div>
        <section className="py-20 bg-gray-100 text-center md:py-32">
          <h2 className="text-3xl font-bold mb-10 text-primary">
            Our Achievements
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <AutoCounter end={300} suffix="+" title="Years Experience" />
            <AutoCounter end={1200} suffix="+" title="Team Members" />
            <AutoCounter end={2500} suffix="+" title="Projects Completed" />
            <AutoCounter end={1000} suffix="+" title="Happy Clients" />
          </div>
        </section>
      </div>
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
      <div className="md:my-28 my-10 ">
        <CTASection />
      </div>
    </div>
  );
};

export default AboutUs;
