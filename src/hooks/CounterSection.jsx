// components/AutoCounter.jsx
import React from "react";
import CountUp from "react-countup";

const AutoCounter = ({ end, suffix, title }) => {
  return (
    <div className="text-center p-4 rounded-md   w-40">
      <h2 className="text-4xl font-bold text-primary">
        <CountUp end={end} duration={10} suffix={suffix} />
      </h2>
      <p className="text-sm font-medium text-gray-600 mt-2">{title}</p>
    </div>
  );
};

export default AutoCounter;
