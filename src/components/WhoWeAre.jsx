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
