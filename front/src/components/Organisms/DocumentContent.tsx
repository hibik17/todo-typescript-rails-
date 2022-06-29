import React from "react";
import { GiOwl } from "react-icons/gi";
import Addtask from "../Image/Addtask.png";

export const DocumentContent = () => {
  return (
    <div className="w-full h-auto ">
      <div className="container mx-auto">
        {/* title */}
        <span className="flex text-center p-20">
          <GiOwl className="text-gray-400 w-8 h-8" />
          <span className="text-2xl font-mono text-gray-400"> USER MANUAL</span>
        </span>

        {/* explanation card */}
        <div className="w-4/5 mx-auto rounded-md h-full bg-slate-200 shadow-lg p-8">
          <span className="text-2xl font-mono text-gray-400">
            Quick Start Guide
          </span>
          {/* Add task section */}
          <div className="m-10">
            <span className="text-lg font-mono text-gray-400">
              1. Add your task
            </span>
            <img
              src={Addtask}
              alt="addtask_image"
              className="w-2/3 h-auto mx-auto mt-10 hover:scale-125 hover:translate-y-2 hover:duration-500"
            />
          </div>
          {/* view your task */}
          <div className="m-10">
            <span className="text-lg font-mono text-gray-400">
              2. View your task
            </span>
            <img
              src={Addtask}
              alt="addtask_image"
              className="w-2/3 h-auto mx-auto mt-10"
            />
          </div>
          {/* delete your task */}
          <div className="m-10">
            <span className="text-lg font-mono text-gray-400">
              2. delete your task
            </span>
            <img
              src={Addtask}
              alt="addtask_image"
              className="w-2/3 h-auto mx-auto mt-10"
            />
          </div>
          {/* change your task status */}
          <div className="m-10">
            <span className="text-lg font-mono text-gray-400">
              2. change your task status
            </span>
            <img
              src={Addtask}
              alt="addtask_image"
              className="w-2/3 h-auto mx-auto mt-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
