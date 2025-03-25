import { useNavigate } from "react-router-dom";
import { ServiceBtn } from "../Constant/Button";

const WhoWeAre = () => {
  const navigate = useNavigate();
  return (
    // <div className='w-full flex justify-center items-center min-h-screen' style={{ backgroundImage: `url(${ServiceBgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
    <div className="w-full flex justify-center items-center mb-[30px]">
      <div className="container flex flex-col items-center">
        <div className="mb-6 md:mt-6 mt-2">
          <h1 className="md:text-[60px] text-3xl font-bold text-[#0E315A] text-center">
            Driving Your Digital Transformation
          </h1>
        </div>
        <div className="text-center mb-6 pt-4 ">
          <p className="text-[#0E315A] md:w-[674px] w-[370px] md:text-[20px] text-lg ">
            We help enterprises through custom business solutions and provide IT
            outsourcing services to companies with agility, quality, and
            commitment.
          </p>
        </div>

        <div className="text-center mb-6 flex justify-between space-x-4">
          {/* <button
            className="border border-[#FA5C46] text-[#0E315A] px-4 py-2 rounded-[3px] text-[20px] relative flex items-center group"
            onClick={() => navigate("/services")}
          >
            Our Services
            <span className="w-0 overflow-hidden group-hover:w-auto transition-all duration-300 ml-0 group-hover:ml-2">
              <i class="fa-solid fa-arrow-right"></i>
            </span>
          </button> */}
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
    </div>
  );
};

export default WhoWeAre;
