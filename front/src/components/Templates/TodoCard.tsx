import React from "react";

export const TodoCard = () => {
  return (
    <div className="min-w-sm max-w-sm rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Todo title</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
      <div className="w-full  flex flex-end">
        <p>finished?</p>
        <input className="" type="checkbox" />
      </div>
    </div>
  );
};
