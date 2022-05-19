import React from "react";
import { FaFoursquare } from "react-icons/fa";

export const DocumentHeaderDown = () => {
  return (
    <div className="w-full h-full text-center animate-in slide-in-from-bottom duration-400 ">
      <div className="font-mono text-3xl mb-10 flex pl-[40%]">
        <FaFoursquare />
        Documentation
      </div>
      <div className="text-white font-mono">
        Welcome to Tasky!
        <br /> These docs give an overview of how Tasky works!!
      </div>
    </div>
  );
};
