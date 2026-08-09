import { CommonBtn } from "../../Constant/Button";
import Technology from "../../components/home/technology";
import { useNavigate } from "react-router-dom";
import { CapabilitiesCompoent } from "../../components/home/capabilities";
import CTASection from "../../components/home/ctasection";
import { AboutComponent } from "../../components/about";
import { PortfolioproductComponent } from "../../components/home/portfolioproduct";
import { ChoseUsComponent } from "../../components/home/choseus";
import AiInnovation from "../../components/home/aiinnvoation";
import OurClients from "../../components/home/ourclients";
import { HireUsComponent } from "../../components/home/hireus";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="relative w-full min-h-[600px]">
        {/* Background Video Container */}
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/bgvideo.mp4" type="video/mp4" />
            <source src="/videos/bgvideo.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
          {/* Overlay (Dark Background) */}
          <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
        </div>

        {/* Foreground Content */}
        <div className="relative z-10 min-h-screen">
          <div className="container mx-auto flex min-h-screen items-start justify-center px-6 pt-28 md:items-center md:pt-0">
            <div className="max-w-4xl text-center">
              <p className="mb-4 text-xs font-medium text-white md:text-base bg-white/10 rounded-full p-2.5 inline-block ">
                Trusted by Startups, Businesses & Growing Companies Worldwide
              </p>

              <h1 className="text-2xl font-bold leading-tight text-white md:text-5xl lg:text-6xl lg:leading-[72px]">
                Building Digital Solutions That Power Business Growth.
              </h1>

              <p className="mt-6 text-sm font-normal text-white md:text-base lg:text-lg">
                we design and develop modern websites, scalable web applications, and custom software that help businesses grow faster. From startups to enterprises, we transform ideas into secure, high-performing digital products.
              </p>

              <div className="mt-8 flex flex-row justify-center gap-3">
                <CommonBtn
                  onClick={() => navigate("/contact")}
                  className="w-[160px] bg-primary py-3 text-white rounded-full"
                  title="Start Your Project"
                />

                <CommonBtn
                  onClick={() => navigate("/portfolio-page")}
                  className="w-[160px] bg-white py-3 text-black rounded-full"
                  title="View Our Work"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* hero section  */}

      <AboutComponent />
      <CapabilitiesCompoent />
      <PortfolioproductComponent />
      <AiInnovation />
      {/* <HireUsComponent /> */}
      <ChoseUsComponent />
      <OurClients />
      <div className="">
        <CTASection />
      </div>
    </>
  );
};

export default Home;
