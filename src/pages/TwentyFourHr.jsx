import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import hireUsTwentyFourHrbg from "../assets/twentyhr.png";
import PerHrImage from "../assets/perhr.webp";

const bulletPoints = [
  "Generate digital repair orders and invoices effortlessly with just one click",
  "Get error-free estimates done and approved by customers quickly, anywhere",
  "Use marketing automation tool to send maintenance reminders and gather feedback",
  "Elevate your scheduling game—effortlessly organize your calendar",
  "Gain detailed reports for smart decisions and business growth",
  "Keep all your data in one place—from order details to inventory specifics",
];
const TwentyFourHr = () => {
  return (
    <section>
      {/* Background Image Header */}
      <div
        className="w-full h-[60vh] sm:h-[70vh] md:h-[80vh] flex items-center justify-center relative"
        style={{
          backgroundImage: `url(${hireUsTwentyFourHrbg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Optional Text Block (uncomment if needed) */}
        {/* 
  <div
    className="relative z-10 text-white text-center font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl px-4 leading-snug"
    data-aos="flip-left"
    data-aos-offset="200"
    data-aos-easing="ease-in-sine"
  >
    Weekly Based <br /> Pricing Model
  </div>
  */}
      </div>

      {/* Section Title */}
      <div className="relative z-10 text-black md:text-[40px] text-2xl font-bold text-center mt-5">
        Everything You Need To Run
        <br />A Modern Business
      </div>

      {/* Bullet Points & Image Section */}
      <div className="flex flex-col md:flex-row items-center justify-center">
        {/* Left Side - Bullet Points */}
        <div className="max-w-3xl w-full md:w-1/2 mx-auto my-10 px-6">
          {bulletPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
              className="flex items-center text-gray-800 text-lg mt-3 bg-gray-100 p-3 rounded-lg shadow-md"
            >
              <FaCheckCircle className="text-blue-500 mr-3" />
              {point}
            </motion.div>
          ))}
        </div>

        {/* Right Side - Full Height Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="
      w-full 
      max-w-[90%] 
      sm:max-w-md 
      md:max-w-full 
      h-[250px] 
      sm:h-[300px] 
      md:h-[400px] 
      lg:h-[500px] 
      xl:h-[600px] 
      rounded-xl 
       
    "
            style={{
              backgroundImage: `url(${PerHrImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>
      </div>

      <div className="max-w-4xl mx-auto my-10 px-6">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl font-bold text-gray-800"
        >
          Effective and reliable solutions:
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-gray-700 mt-2"
        >
          The clear specifications enable you to receive precisely what you
          require, and the deadlines you establish in advance make sure that the
          project is completed on time. The variety that Codility Solutions are
          proud of isn't just in our services but also our service plans.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-xl font-bold text-gray-800 mt-6"
        >
          The Business's Core Focus:
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="text-gray-700 mt-2"
        >
          The model of pricing based on project is a particular service that
          assists our clients in negotiating better deals for the project prior
          to beginning. It is essential to remember making a model based on a
          project that serves your company's needs. You need to know precisely
          the specific task Codility Solutions has to do. Additionally, the
          precise time frame within which this job is to be completed
          demonstrates the accuracy of the plan, which aids in the settlement of
          an all-in lump sum.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="text-xl font-bold text-gray-800 mt-6"
        >
          Reduce time-to-time and increase efficiency:
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="text-gray-700 mt-2"
        >
          Highly trained and skilled to achieve the highest profit margin Our
          solutions enable you to accelerate the development of your product and
          allow it easier and quicker to get to the market. We make decisions
          about the development process based on the time frame and cost
          estimate that is generated by the project. We make a decision and
          establish the specifications, including budget and deadline for
          delivery. The project's roadmap is generally created and includes set
          dates and milestones that function as a payment plan.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1.8 }}
          className="text-xl font-bold text-gray-800 mt-6"
        >
          Ideal Software Development Team:
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 2.1 }}
          className="text-gray-700 mt-2"
        >
          Keep your company up-to-date using our most skilled managerial and
          technical talents and our mutual involvement. We value our clients and
          have provided a variety of options to choose from according to their
          preferences so that they can decide what best suits their requirements
          before utilizing our services in any plan. When the transaction is
          completed our team is committed in ensuring customer satisfaction. It
          will not affect its quality prior to publication.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1.8 }}
          className="text-xl font-bold text-gray-800 mt-6"
        >
          Choose your Technology Stack:
        </motion.h2>
        <motion.ul
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 2.1 }}
          className="text-gray-700 mt-2 list-inside pl-1"
        >
          <motion.li
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 2.4 }}
            className="flex items-start mt-2"
          >
            <i className="fa-solid fa-circle text-black-500 mr-3"></i> Sliders
            of technology will be displayed on site.
          </motion.li>

          <motion.li
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 2.7 }}
            className="flex items-start mt-2"
          >
            <i className="fa-solid fa-circle text-black-500 mr-3"></i> Quality
            assurance and security scans.
          </motion.li>

          <motion.li
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 3 }}
            className="flex items-start mt-2"
          >
            <i className="fa-solid fa-circle text-black-500 mr-3"></i>{" "}
            Development of customized solutions and meeting designed standards.
          </motion.li>

          <motion.li
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 3.3 }}
            className="flex items-start mt-2"
          >
            <i className="fa-solid fa-circle text-black-500 mr-3"></i> Quick,
            reliable, and qualified resources at your service.
          </motion.li>

          <motion.li
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 3.6 }}
            className="flex items-start mt-2"
          >
            <i className="fa-solid fa-circle text-black-500 mr-3"></i> Bug
            fixing and omitting minor programming language errors.
          </motion.li>

          <motion.li
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 3.9 }}
            className="flex items-start mt-2"
          >
            <i className="fa-solid fa-circle text-black-500 mr-3"></i> Select
            the best skilled team.
          </motion.li>

          <motion.li
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 4.2 }}
            className="flex items-start mt-2"
          >
            <i className="fa-solid fa-circle text-black-500 mr-3"></i>{" "}
            Cost-effective solutions.
          </motion.li>

          <motion.li
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 4.5 }}
            className="flex items-start mt-2"
          >
            <i className="fa-solid fa-circle text-black-500 mr-3"></i> Real-time
            response.
          </motion.li>

          <motion.li
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 4.8 }}
            className="flex items-start mt-2"
          >
            <i className="fa-solid fa-circle text-black-500 mr-3"></i> Maximizes
            your ROI.
          </motion.li>
        </motion.ul>
      </div>
    </section>
  );
};

export default TwentyFourHr;
