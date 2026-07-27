import { useNavigate } from "react-router-dom";
import { ServiceBtn } from "../Constant/Button";

const WhoWeAre = () => {
  const navigate = useNavigate()
  return (
    <section className="bg-white text-gray-900 py-16 px-4 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center relative">
        {/* Custom Chevron Divider */}
        <div className="hidden md:block absolute left-1/2 top-0 h-full w-4 flex justify-center z-0">
          <div className="relative h-full w-px bg-gray-200">
            <div className="absolute  top-[19%] left-1/2  -translate-y-1/2   -ml-[6px] w-3 h-3 bg-white border-l border-b border-gray-300 rotate-[223deg] z-10" />
          </div>
        </div>
        {/* Left Content */}

        <div>
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 leading-tight">
            Translating <br />
            technology into a <br />
            positive impact
          </h2>
          <p className="text-base md:text-lg text-gray-600 mb-6">
            Our approach allows us to deliver exceptional experiences that drive
            growth and success for all stakeholders. Let’s rise to new heights
            with the power of digital transformation.
          </p>
          <div className="text-center mb-6 flex   space-x-4">
            <ServiceBtn
              title="Our Services"
              onClick={() => navigate("/services")}
            />
            <div>
              <ServiceBtn
                title="Check Portfolio"
                onClick={() => navigate("/portfolio-page")}
              />
            </div>
          </div>
        </div>
        {/* Right Stats */}
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h3 className="md:text-6xl text-2xl  font-bold">48+</h3>
            <p className="text-gray-600 text-sm mt-1">
              Years of continual excellence
            </p>
          </div>
          <div>
            <h3 className="md:text-6xl text-2xl font-bold">7700+</h3>
            <p className="text-gray-600 text-sm mt-1">
              Change makers driving revolution
            </p>
          </div>
          <div>
            <h3 className="md:text-6xl text-2xl font-bold">16+</h3>
            <p className="text-gray-600 text-sm mt-1">
              Countries with our presence and clientele
            </p>
          </div>
          <div>
            <h3 className="md:text-6xl text-2xl font-bold">300+</h3>
            <p className="text-gray-600 text-sm mt-1">
              Active clients across the globe
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
