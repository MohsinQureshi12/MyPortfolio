import React from "react";
import { CommonBtn, ServiceBtn } from "../../../Constant/Button";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const CTASection = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <section
      className={`w-full ${
        location.pathname === "/services" ? "py-32" : "py-20"
      } bg-white text-center px-4`}
    >
      {" "}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-4">
          How can we help you?
        </h2>
        <p className="text-gray-600 text-base md:text-lg mb-8">
          Are you ready to push boundaries and explore new frontiers of
          innovation?
        </p>
        <CommonBtn
          title="LET’S WORK TOGETHER"
          className="bg-gradient-to-r from-primary to-gray-800 text-white font-medium px-6 py-3 rounded-md shadow hover:opacity-90 transition-all duration-200"
          onClick={() => navigate("/contact")}
        />
      </div>
    </section>
  );
};

export default CTASection;
