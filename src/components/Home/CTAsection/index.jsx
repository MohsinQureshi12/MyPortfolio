import React from "react";
import { CommonBtn, ServiceBtn } from "../../../Constant/Button";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const CTASection = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <section
      className={`w-full ${location.pathname === "/services" ? "py-32" : "lg:py-20 py-10"
        } bg-primary/20 text-center px-4`}
    >
      {" "}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-4">
          Let's build the next chapter of your enterprise.
        </h2>
        <p className="text-gray-600 text-base md:text-lg mb-8">
          Are you ready to push boundaries and explore new frontiers of
          innovation?
        </p>
        <CommonBtn
          title="Book a Consulation"
          className="bg-primary text-white font-medium px-6 py-3 rounded-full shadow hover:opacity-90 transition-all duration-200"
          // bg-gradient-to-r from-primary to-gray-800
          onClick={() => navigate("/contact")}
        />
      </div>
    </section>
  );
};

export default CTASection;
