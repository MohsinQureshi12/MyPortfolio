// import AboutUsBg from "../../../../public/assets/image/aboutherosection.jpg";
import AboutUsBg from "../../../public/assets/image/aboutherosection.jpg";

// import { PiUsersThreeFill } from "react-icons/pi";
import { FaRecycle } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
// import aboutUsImage2 from "../../../../public/assets/image/aboutusimage2.jpg";
// import ourApproch from "../../../../public/assets/image/ourApproch.jpeg";
// import CTASection from "../../components/home/ctasection";
// import AutoCounter from "../../hooks/CounterSection";
// import { CommonBtn } from "../../Constant/Button";
export const Aboutherosection = () => {
  return (
    <div className="">
      <div
        className="w-full relative min-h-[400px] md:min-h-[500px] lg:min-h-[600px] flex items-start pt-10 md:pt-0 md:items-center mb-5"
        style={{
          backgroundImage: `url(${AboutUsBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1b2b45] via-[#1b2b45]/60 to-[#1b2b45]/40 md:via-[#1b2b45]/30"></div>


        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4">

          <div className="max-w-4xl flex flex-col items-center text-center md:items-start md:text-left">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>

              <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-white uppercase">
                About StreetCoder
              </span>
            </div>


            {/* Heading */}
            <h1 className="text-2xl font-bold leading-tight text-white md:text-5xl lg:text-6xl lg:leading-[72px]">
              Empowering Pakistan through  - world class technology.
            </h1>


            {/* Description */}
            <p className="mt-6 text-sm font-normal text-white md:text-base lg:text-lg">
              A modern AI-powered software company building enterprise platforms for global operations.
            </p>

          </div>

        </div>

      </div>

      {/* <div className="flex md:mb-40 md:mt-32 my-20">
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
      </div> */}

    

      {/* <div>
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
      </div> */}
      {/* <div className="h-auto bg-black py-12">
        <div className="flex min-h-screen items-center justify-center">
          <div className="mx-auto px-4 w-full max-w-[1100px]">
            <div className="text-white font-bold text-[30px] text-center h-[60px] mb-6">
              <h1>About Us</h1>
            </div>

            <div className="flex flex-wrap items-center justify-center md:justify-between gap-6">
             
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
      </div> */}

      {/* <div className="h-auto bg-[#051B34] py-12">
        <div className="flex min-h-screen items-center justify-center">
          <div className="mx-auto px-4 w-full max-w-[1100px]">
            <div className="text-white font-bold text-[30px] text-center h-[60px] mb-6">
              <h1>Our Approach</h1>
            </div>

            <div className="flex flex-wrap items-center justify-center md:justify-between gap-6">

              <div className="w-full md:w-[48%] flex justify-center">
                <img
                  src={ourApproch}
                  alt="Our Approach"
                  className="h-auto max-h-[300px] w-full max-w-[500px] rounded-lg"
                />
              </div>


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
      </div> */}
    </div>
  );
};

