import React from "react";
import { BiAlarmAdd } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

export const DocumentHeaderTop = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-[50%] px-40 py-10 flex">
      <div>
        <button
          className="flex items-center flex-shrink-0 text-white mr-6"
          onClick={() => navigate("/todos")}
        >
          <BiAlarmAdd className="w-10 h-10 text-blue-300" />
          <span className="font-mono text-xl pl-2">Tasky</span>
        </button>
      </div>
      <div className="pl-[60%]">
        <ul className="flex">
          <li className="mr-6">
            <button
              className="text-gray-500 hover:text-white"
              onClick={() => navigate("/todos")}
            >
              All
            </button>
          </li>
          <li className="mr-6">
            <button
              onClick={() => navigate("/newtodo")}
              className="text-gray-500 hover:text-white"
            >
              New
            </button>
          </li>
          <li className="mr-6">
            <button
              onClick={() => navigate("/uncompleted_todo")}
              className="text-gray-500 hover:text-white"
            >
              Today's
            </button>
          </li>
          <li className="mr-6">
            <button
              onClick={() => navigate("/completed_todo")}
              className="text-gray-500 hover:text-white"
            >
              completed
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
