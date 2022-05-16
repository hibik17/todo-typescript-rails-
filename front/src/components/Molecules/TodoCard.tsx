import React from "react";
import { ToggleButton } from "../Atoms/ToggleButton";

export const TodoCard = () => {
  return (
    <div
      className="min-w-sm max-w-sm bg-gradient-to-r from-rose-100 to-teal-100 animate-in slide-in-from-bottom
    rounded overflow-hidden shadow-lg m-3 hover:-translate-y-1 hover:scale-110 hover:bg-teal-100 duration-300"
    >
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Todo title</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
      <ToggleButton />
    </div>
  );
};
